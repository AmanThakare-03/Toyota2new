import { useEffect, useMemo } from "react";

import { SITE_NAME, THEME_COLOR } from "../config/site";

// The single place that writes document head metadata.
//
// Two kinds of source register here, each under an id and a priority:
//
//   * the per-route config from seoConfig.js (the "route" source), applied by
//     usePageMeta in MainLayout, which every page inherits; and
//   * an <SEO> component rendered by a single page (the "page" source), which
//     layers page-specific tags - geo hints, Open Graph image size and alt
//     text, a JSON-LD graph - on top of those defaults.
//
// The head is then reconciled from the union of every registered source, with
// the higher priority winning on any tag both define. That is what keeps the
// two writers from deleting or duplicating each other's tags: a tag is only
// removed once no registered source asks for it.

const MANAGED = "data-seo-managed";
const JSON_LD_ID = "seo-jsonld";

const DEFAULT_LANGUAGE = "en-IN";
const DEFAULT_LOCALE = "en_IN";
const DEFAULT_ROBOTS = "index, follow";
const DEFAULT_OG_TYPE = "website";
const DEFAULT_TWITTER_CARD = "summary_large_image";

export const ROUTE_SOURCE = "route";
export const PAGE_SOURCE = "page";

export const ROUTE_PRIORITY = 0;
export const PAGE_PRIORITY = 1;

const sources = new Map();

const selectorFor = (tag) =>
  tag.attr === "rel" ? `link[rel="${tag.key}"]` : `meta[${tag.attr}="${tag.key}"]`;

const ogImageOf = (ogImage) =>
  typeof ogImage === "string" ? { url: ogImage } : ogImage || {};

// The full set of head tags a page can declare. Every field is optional: a
// page only needs to supply the ones it wants to differ from the defaults.
function tagsFor(seo) {
  const canonical = seo.canonical || seo.ogUrl;
  const image = ogImageOf(seo.ogImage);
  const twitter = seo.twitter || {};
  const geo = seo.geo || {};

  return [
    { attr: "name", key: "description", value: seo.description },
    {
      attr: "name",
      key: "robots",
      value: seo.robots || (seo.noindex ? "noindex, follow" : DEFAULT_ROBOTS),
    },
    { attr: "name", key: "theme-color", value: seo.themeColor || THEME_COLOR },
    { attr: "name", key: "geo.region", value: geo.region },
    { attr: "name", key: "geo.placename", value: geo.placename },
    { attr: "name", key: "geo.position", value: geo.position },
    { attr: "name", key: "ICBM", value: geo.icbm },

    { attr: "rel", key: "canonical", value: canonical },

    { attr: "property", key: "og:site_name", value: seo.ogSiteName || SITE_NAME },
    { attr: "property", key: "og:type", value: seo.ogType || DEFAULT_OG_TYPE },
    { attr: "property", key: "og:locale", value: seo.ogLocale || DEFAULT_LOCALE },
    { attr: "property", key: "og:url", value: seo.ogUrl || canonical },
    { attr: "property", key: "og:title", value: seo.ogTitle || seo.title },
    {
      attr: "property",
      key: "og:description",
      value: seo.ogDescription || seo.description,
    },
    { attr: "property", key: "og:image", value: image.url },
    { attr: "property", key: "og:image:secure_url", value: image.secureUrl },
    { attr: "property", key: "og:image:type", value: image.type },
    { attr: "property", key: "og:image:width", value: image.width },
    { attr: "property", key: "og:image:height", value: image.height },
    { attr: "property", key: "og:image:alt", value: image.alt },
    {
      attr: "property",
      key: "article:published_time",
      value: seo.publishedTime,
    },
    {
      attr: "name",
      key: "twitter:card",
      value: twitter.card || DEFAULT_TWITTER_CARD,
    },
    { attr: "name", key: "twitter:url", value: twitter.url || canonical },
    { attr: "name", key: "twitter:title", value: twitter.title || seo.title },
    {
      attr: "name",
      key: "twitter:description",
      value: twitter.description || seo.description,
    },
    { attr: "name", key: "twitter:image", value: twitter.image || image.url },
    {
      attr: "name",
      key: "twitter:image:alt",
      value: twitter.imageAlt || image.alt,
    },
  ];
}

function merge() {
  const ordered = [...sources.values()].sort((a, b) => a.priority - b.priority);
  const tags = new Map();

  let title;
  let language = DEFAULT_LANGUAGE;
  let jsonLd;

  for (const { seo } of ordered) {
    for (const tag of tagsFor(seo)) {
      if (tag.value === undefined || tag.value === null || tag.value === "")
        continue;
      tags.set(selectorFor(tag), tag);
    }
    if (seo.title) title = seo.title;
    if (seo.language) language = seo.language;
    if (seo.jsonLd) jsonLd = seo.jsonLd;
  }

  return { tags, title, language, jsonLd };
}

function writeJsonLd(head, jsonLd) {
  const existing = head.querySelector(`#${JSON_LD_ID}`);

  if (!jsonLd) {
    existing?.remove();
    return;
  }

  const serialized = JSON.stringify(jsonLd);

  if (existing) {
    if (existing.textContent !== serialized) existing.textContent = serialized;
    return;
  }

  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.id = JSON_LD_ID;
  script.textContent = serialized;
  head.appendChild(script);
}

function reconcile() {
  const { tags, title, language, jsonLd } = merge();
  const head = document.head;

  if (title) document.title = title;
  document.documentElement.lang = language;

  for (const [selector, tag] of tags) {
    let el = head.querySelector(selector);

    if (!el) {
      el = document.createElement(tag.attr === "rel" ? "link" : "meta");
      el.setAttribute(tag.attr, tag.key);
      el.setAttribute(MANAGED, "");
      head.appendChild(el);
    }

    el.setAttribute(tag.attr === "rel" ? "href" : "content", String(tag.value));
  }

  // Tags written for a previous route that no current source asks for.
  for (const el of head.querySelectorAll(`[${MANAGED}]`)) {
    const key = el.getAttribute("name") || el.getAttribute("property");
    const selector =
      el.tagName === "LINK"
        ? `link[rel="${el.getAttribute("rel")}"]`
        : `meta[${el.getAttribute("name") ? "name" : "property"}="${key}"]`;

    if (!tags.has(selector)) el.remove();
  }

  writeJsonLd(head, jsonLd);
}

export function registerSeoSource(id, priority, seo) {
  sources.set(id, { priority, seo });
  reconcile();
}

export function unregisterSeoSource(id) {
  sources.delete(id);
  reconcile();
}

const serialize = (seo) => {
  try {
    return JSON.stringify(seo) || "";
  } catch {
    return "";
  }
};

const deserialize = (key) => {
  try {
    return JSON.parse(key);
  } catch {
    return {};
  }
};

// Registers a metadata source for the lifetime of the calling component's
// mount. The configuration is held by its serialized value, so the source is
// re-registered when the metadata actually changes rather than on every new
// object identity - a page that passes an inline object re-renders without
// rewriting the head.
export function useSeoHead(id, priority, seo) {
  const key = serialize(seo);
  const config = useMemo(() => deserialize(key), [key]);

  useEffect(() => {
    registerSeoSource(id, priority, config);

    return () => unregisterSeoSource(id);
  }, [id, priority, config]);
}
