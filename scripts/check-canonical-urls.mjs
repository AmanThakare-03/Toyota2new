// Canonical URL validator.
//
// Guards the "one page = one URL" rule for the product and industry sections.
// Every /products/... or /industries/... path found anywhere in the shipped
// source or the public assets must either be a canonical URL from
// src/config/routes.js, or be a retired path kept deliberately as a redirect.
// Anything else fails the build check.
//
// Run with: npm run check:urls

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import {
  CANONICAL_PATHS,
  INDUSTRY_ROUTES,
  LEGACY_REDIRECTS,
  PRODUCT_ROUTES,
} from "../src/config/routes.js";

const ROOT = path.resolve(fileURLToPath(new URL("..", import.meta.url)));

// A retired path may only be written down in the registry that defines it and
// in the server rules that redirect it. Anywhere else it is a bug.
const LEGACY_ALLOWED = new Set([
  "src/config/routes.js",
  "public/.htaccess",
]);

const SCAN_EXTENSIONS = /\.(jsx?|tsx?|html|xml|txt)$/;
const SKIP_DIRS = new Set(["node_modules", ".git", "dist", "build"]);

const slugOf = (urlPath) => urlPath.split("/").filter(Boolean).pop();
const URL_RE = /\/(products|industries)\/([A-Za-z0-9][A-Za-z0-9-]*)/g;

const canonicalUrls = new Set(CANONICAL_PATHS);
const legacySlugs = new Map(
  Object.keys(LEGACY_REDIRECTS).map((from) => [slugOf(from), from]),
);

const problems = [];

function walk(dir, acc = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (SKIP_DIRS.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, acc);
    else if (SCAN_EXTENSIONS.test(entry.name)) acc.push(full);
  }
  return acc;
}

const files = [
  ...walk(path.join(ROOT, "src")),
  path.join(ROOT, "index.html"),
  ...walk(path.join(ROOT, "public")),
].filter((file) => fs.existsSync(file));

const seenCanonical = new Map();
const legacyHits = new Map();
let scannedUrls = 0;

for (const file of files) {
  const rel = path.relative(ROOT, file).split(path.sep).join("/");
  const text = fs.readFileSync(file, "utf8");
  const lines = text.split(/\r?\n/);

  lines.forEach((line, i) => {
    for (const match of line.matchAll(URL_RE)) {
      const [, section, slug] = match;
      const urlPath = `/${section}/${slug}`;
      scannedUrls += 1;

      if (canonicalUrls.has(urlPath)) {
        seenCanonical.set(urlPath, (seenCanonical.get(urlPath) ?? 0) + 1);
        return;
      }

      if (legacySlugs.has(slug)) {
        if (!LEGACY_ALLOWED.has(rel)) {
          problems.push(
            `${rel}:${i + 1}  retired URL in a live file: ${urlPath}` +
              `  -> use ${LEGACY_REDIRECTS[legacySlugs.get(slug)]}`,
          );
        } else {
          legacyHits.set(urlPath, (legacyHits.get(urlPath) ?? 0) + 1);
        }
        return;
      }

      problems.push(`${rel}:${i + 1}  unknown product/industry URL: ${urlPath}`);
    }

    // A leading // turns an internal link into a protocol-relative external one.
    for (const bad of line.matchAll(/\/\/(products|industries)\/[A-Za-z0-9-]+/g)) {
      problems.push(
        `${rel}:${i + 1}  protocol-relative URL resolves off-site: ${bad[0]}`,
      );
    }
  });
}

// Every canonical path must be represented in the sitemap.
const sitemapPath = path.join(ROOT, "public", "sitemap.xml");
const sitemap = fs.existsSync(sitemapPath)
  ? fs.readFileSync(sitemapPath, "utf8")
  : "";
for (const urlPath of CANONICAL_PATHS) {
  if (!sitemap.includes(urlPath)) {
    problems.push(`public/sitemap.xml  missing canonical URL: ${urlPath}`);
  }
}

// The sitemap must not advertise a retired path.
for (const from of Object.keys(LEGACY_REDIRECTS)) {
  if (sitemap.includes(`co.in${from}<`)) {
    problems.push(`public/sitemap.xml  retired URL present: ${from}`);
  }
}

// Every retired path needs a matching server rule, and no rule may point at
// another retired path (which would create a redirect chain).
const htaccessPath = path.join(ROOT, "public", ".htaccess");
const htaccess = fs.existsSync(htaccessPath)
  ? fs.readFileSync(htaccessPath, "utf8")
  : "";
// The optional trailing-slash group is part of the pattern's source text, so it
// is stripped off the captured rule source rather than matched separately.
const rules = [...htaccess.matchAll(/^\s*RewriteRule \^([^\s$]+)\$\s+(\S+)\s+\[R=301,L\]\s*$/gm)]
  .map((m) => [m[1].replace(/\/\?$/, ""), m[2]]);
const ruleTargets = new Map(rules);

for (const [from, to] of Object.entries(LEGACY_REDIRECTS)) {
  const source = from.slice(1);
  if (ruleTargets.get(source) !== to) {
    problems.push(
      `public/.htaccess  no 301 rule for ${from} -> ${to}` +
        (ruleTargets.has(source) ? ` (found ${ruleTargets.get(source)})` : ""),
    );
  }
}

for (const [source, target] of rules) {
  if (Object.hasOwn(LEGACY_REDIRECTS, target)) {
    problems.push(
      `public/.htaccess  rule ${source} points at retired URL ${target}`,
    );
  }
}

// The nav and the search index must be built from the registry, not from
// hand-written paths, or they can drift again.
const navPath = path.join(ROOT, "src", "config", "navigation.js");
const nav = fs.existsSync(navPath) ? fs.readFileSync(navPath, "utf8") : "";
if (!/from "\.\/routes"/.test(nav)) {
  problems.push("src/config/navigation.js  no longer derives from ./routes");
}

const canonicalProducts = PRODUCT_ROUTES.filter((r) => CANONICAL_PATHS.has(r.path));
const canonicalIndustries = INDUSTRY_ROUTES.filter((r) => CANONICAL_PATHS.has(r.path));

console.log(`scanned ${files.length} files, ${scannedUrls} product/industry URL references`);
console.log(`canonical product URLs:  ${canonicalProducts.length}/${PRODUCT_ROUTES.length}`);
console.log(`canonical industry URLs: ${canonicalIndustries.length}/${INDUSTRY_ROUTES.length}`);
console.log(`retired URLs kept as redirects: ${Object.keys(LEGACY_REDIRECTS).length}`);

const unreferenced = [...CANONICAL_PATHS].filter((p) => !seenCanonical.has(p));
if (unreferenced.length) {
  console.log(`\ncanonical URLs referenced in source: ${seenCanonical.size}/${CANONICAL_PATHS.size}`);
  for (const p of unreferenced) {
    console.log(`  (not referenced in source: ${p})`);
  }
}

if (problems.length) {
  console.error(`\n${problems.length} problem(s):`);
  for (const problem of problems) console.error(`  ${problem}`);
  process.exit(1);
}

console.log("\nOK - every product/industry URL is canonical or an intentional redirect");
