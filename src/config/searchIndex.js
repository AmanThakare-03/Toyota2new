import { blogEntries, blogPostPath } from "./blogIndex";
import { applicationLinks, industryLinks, productLinks } from "./navigation";

// Static, build-time index of everything reachable from the site navigation.
// There is no search backend, so this is a client-side text index only — it
// never invents results and every entry maps to a real, existing route.

const companyPages = [
  {
    name: "Home",
    path: "/",
    section: "Company",
    keywords: "toyota chemical industries ion exchange resin manufacturer home",
  },
  {
    name: "About Us",
    path: "/about",
    section: "Company",
    keywords: "company profile history since 1972 aGRION plant GIDC Vapi Gujarat",
  },
  {
    name: "Manufacturers in India",
    path: "/manufacturers-in-india",
    section: "Company",
    keywords: "make in india indigenous manufacturer capacity production works",
  },
  {
    name: "Quality & Certifications",
    path: "/quality-compliance",
    section: "Company",
    keywords: "iso 9001 14001 certificate quality assurance compliance",
  },
  {
    name: "Sustainability",
    path: "/sustainability",
    section: "Company",
    keywords: "environment effluent ETP green charter",
  },
  {
    name: "Contact Us",
    path: "/contact",
    section: "Company",
    keywords: "enquiry quote address phone email factory sales technical",
  },
  {
    name: "Legal Notice",
    path: "/legal-notice",
    section: "Company",
    keywords: "legal terms disclaimer",
  },
  {
    name: "Privacy Policy",
    path: "/privacy-policy",
    section: "Company",
    keywords: "privacy data policy",
  },
  {
    name: "Blog",
    path: "/blog",
    section: "Blog",
    keywords: "knowledge hub guides articles technical resources",
  },
];

// The slug carries strong intent terms (cation, hardness, replacement,
// specifications), so combining it with the title gives good keyword coverage
// without reaching into the page components.
function blogKeywords(slug, title) {
  return `${slug.replace(/-/g, " ")} ${title}`;
}

export const searchIndex = [
  ...companyPages,
  ...productLinks.map(({ name, path }) => ({
    name,
    path,
    section: "Products",
    keywords: "resin grade TDS datasheet cation anion mixed bed softener specialty",
  })),
  ...applicationLinks.map(({ name, path }) => ({
    name,
    path,
    section: "Applications",
    keywords: "water treatment application process demineralisation",
  })),
  ...industryLinks.map(({ name, path }) => ({
    name,
    path,
    section: "Industries",
    keywords: "sector plant industry water treatment",
  })),
  ...blogEntries.map(({ slug, title }) => ({
    name: title,
    path: blogPostPath(slug),
    section: "Blog",
    keywords: blogKeywords(slug, title),
  })),
];

const MAX_RESULTS = 8;

function scoreEntry(entry, query, tokens) {
  const name = entry.name.toLowerCase();
  const haystack = `${entry.name} ${entry.keywords} ${entry.section}`.toLowerCase();

  // Every token must appear somewhere, so multi-word queries stay meaningful.
  if (!tokens.every((token) => haystack.includes(token))) return 0;

  let score = 0;
  if (name.startsWith(query)) score += 40;
  else if (name.includes(query)) score += 20;

  for (const token of tokens) {
    if (name.includes(token)) score += 10;
    else score += 3;
  }

  return score;
}

export function searchSite(rawQuery, limit = MAX_RESULTS) {
  const query = rawQuery.trim().toLowerCase();
  if (!query) return [];

  const tokens = query.split(/\s+/).filter(Boolean);

  return searchIndex
    .map((entry) => ({ entry, score: scoreEntry(entry, query, tokens) }))
    .filter((result) => result.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((result) => result.entry);
}

// Shown when the search field is still empty.
export const popularSearches = productLinks;
