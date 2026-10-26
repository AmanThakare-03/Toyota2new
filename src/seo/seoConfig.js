import { INDUSTRY_PATH, LEGACY_REDIRECTS, PRODUCT_PATH } from "../config/routes";
import { DEFAULT_OG_IMAGE } from "../config/site";
import { getBlogPost } from "../pages/Blog/posts";
import homeSeo from "./homeSeo";

// Per-route metadata. Every route gets its own title and description — nothing
// is duplicated across pages. `canonicalPath` defaults to the route itself.
//
// The home page is the one route whose metadata is defined by its own
// configuration file (src/seo/homeSeo.js) because it carries more than the
// route-level fields — geo hints, Open Graph image size and a JSON-LD graph.
// Its entry here reads from that same file, so the route defaults, the page
// component and the static tags in index.html can never drift apart.
const PAGES = {
  "/": {
    title: homeSeo.title,
    description: homeSeo.description,
    robots: homeSeo.robots,
    ogType: homeSeo.ogType,
    ogImage: homeSeo.ogImage.url,
  },
  "/products": {
    title: "Ion Exchange Resin Products | Toyota Chemical Industries",
    description:
      "The complete Toyota AGRION resin portfolio — cation, anion, mixed bed, water softener and specialty grades, each supplied with its technical data sheet.",
  },
  [PRODUCT_PATH.cation]: {
    title: "Cation Exchange Resins | Toyota Chemical Industries",
    description:
      "Strong acid and weak acid cation exchange resins in sodium and hydrogen form for softening, DM plant cation duty, dealkalisation and heavy-metal removal.",
  },
  [PRODUCT_PATH.anion]: {
    title: "Anion Exchange Resins | Toyota Chemical Industries",
    description:
      "Strong base and weak base anion exchange resins, Type 1 and Type 2, for demineralisation, mixed bed polishing and organic removal.",
  },
  [PRODUCT_PATH.mixedBed]: {
    title: "Mixed Bed Resins | Toyota Chemical Industries",
    description:
      "Ready-mixed cation–anion mixed bed resins for polishing to ultrapure water and for condensate polishing duty.",
  },
  [PRODUCT_PATH.waterSoftener]: {
    title: "Water Softener Resins | Toyota Chemical Industries",
    description:
      "Sodium-form strong acid cation resins for hardness removal and boiler feed protection in water softening plants.",
  },
  [PRODUCT_PATH.specialty]: {
    title: "Specialty Resins | Toyota Chemical Industries",
    description:
      "Chelating, indicator and application-specific ion exchange resins for metal recovery and specialised process duties.",
  },
  "/applications": {
    title: "Ion Exchange Resin Applications | Toyota Chemical Industries",
    description:
      "Resin solutions for water treatment, demineralisation, softening, condensate polishing and other industrial water applications.",
  },
  "/applications/water-softener-resin": {
    title: "Water Softener Resin | Toyota Chemical Industries",
    description:
      "Sodium-cycle softening resin for hardness removal in boiler feed and process water — the AGRION grades and how to select them.",
  },
  "/applications/boiler-feed-water-treatment": {
    title: "Boiler Feed Water Treatment Resin | Toyota Chemical Industries",
    description:
      "Softening, dealkalisation, demineralisation and condensate polishing resins that protect boilers and turbines from scale and corrosion.",
  },
  "/applications/dm-plant-resin": {
    title: "DM Plant Resin | Toyota Chemical Industries",
    description:
      "Cation, anion and mixed bed resins for demineralisation plants — selecting grades that match your feedwater and outlet specification.",
  },
  "/applications/mixed-bed-condensate-polishing": {
    title: "Mixed Bed Condensate Polishing Resin | Toyota Chemical Industries",
    description:
      "Mixed bed resins for condensate polishing — removing corrosion products and dissolved ions to protect high-pressure boilers and turbines.",
  },
  "/applications/dealkalisation-resin": {
    title: "Dealkalisation Resin | Toyota Chemical Industries",
    description:
      "Weak acid cation resin for alkalinity removal ahead of a demineraliser, cutting carbon dioxide load and regenerant cost.",
  },
  "/applications/etp-wastewater-treatment": {
    title: "ETP Wastewater Treatment Resin | Toyota Chemical Industries",
    description:
      "Ion exchange resins for effluent treatment and zero liquid discharge — heavy-metal removal, recovery and organic scavenging.",
  },
  "/industries": {
    title: "Industries We Supply | Toyota Chemical Industries",
    description:
      "Ion exchange resins for the power, chemical, food and beverage, paper, sugar and textile industries across India.",
  },
  [INDUSTRY_PATH.chemical]: {
    title: "Ion Exchange Resins for Chemical Industries | Toyota Chemical Industries",
    description:
      "Process demineralisation, softening, heavy-metal removal and ZLD resins for chemical and intermediates manufacturing.",
  },
  [INDUSTRY_PATH.foodBeverage]: {
    title: "Ion Exchange Resins for Food & Beverage | Toyota Chemical Industries",
    description:
      "Process water, softening and demineralisation resins for food and beverage manufacturing.",
  },
  [INDUSTRY_PATH.paperPulp]: {
    title: "Ion Exchange Resins for Paper & Pulp | Toyota Chemical Industries",
    description:
      "Process water and boiler feed resin solutions for paper and pulp mills.",
  },
  [INDUSTRY_PATH.powerThermal]: {
    title: "Ion Exchange Resins for Power & Thermal Plants | Toyota Chemical Industries",
    description:
      "DM plant, condensate polishing and softening resins for power and thermal generation.",
  },
  [INDUSTRY_PATH.sugarRefinery]: {
    title: "Ion Exchange Resins for Sugar Processing | Toyota Chemical Industries",
    description:
      "Softening, demineralisation and process water resin support for sugar processing plants.",
  },
  [INDUSTRY_PATH.textile]: {
    title: "Ion Exchange Resins for Textile & Dyeing | Toyota Chemical Industries",
    description:
      "Water treatment resins for textile processing and dyeing — softening, demineralisation and effluent duties.",
  },
  "/blog": {
    title: "Ion Exchange Resin Blog | Water Treatment Articles & Guides | Toyota Chemical Industries",
    description:
      "Practical, engineer-first guides on selecting, running and troubleshooting ion exchange resins — from DM plant selection to regeneration best practice.",
  },
  "/about": {
    title: "About Toyota Chemical Industries | Ion Exchange Resin Manufacturers",
    description:
      "Five decades of ion exchange resin synthesis at our own plant in GIDC Vapi, Gujarat — manufacturing cation, anion, mixed bed and specialty resins since 1972.",
  },
  "/manufacturers-in-india": {
    title: "Ion Exchange Resin Manufacturers in India | Toyota Chemical Industries",
    description:
      "Toyota Chemical Industries is an ion exchange resin manufacturer in India — cation, anion, mixed bed and specialty resins supplied direct from our GIDC Vapi plant since 1972.",
  },
  "/service-area": {
    title: "Ion Exchange Resin Supplier in Vapi & Across India | Toyota Chemical Industries",
    description:
      "Ion exchange resins supplied across the Vapi–Valsad–Daman–Silvassa belt, Surat and South Gujarat, and to industry across India — direct from our GIDC Vapi plant, 25 L to bulk.",
  },
  "/quality-compliance": {
    title: "Quality & Certifications | Toyota Chemical Industries",
    description:
      "ISO 9001:2015 and ISO 14001:2015 certified ion exchange resin manufacturing at our GIDC Vapi plant, with batch testing and a technical data sheet for every grade.",
  },
  "/contact": {
    title: "Contact Toyota Chemical Industries",
    description:
      "Contact our technical team for resin selection, datasheet requests and quotations. Factory at GIDC Vapi, Gujarat — call +91 90167 11708 or email info@toyotachemicals.co.in.",
  },
  "/partners": {
    title: "OEM & Dealer Partners | Toyota Chemical Industries",
    description:
      "Technical collaboration, resin supply and water-treatment project support for OEM and dealer partners.",
  },
  "/resources": {
    title: "Technical Resources | Toyota Chemical Industries",
    description:
      "Technical information, product documentation and datasheet guidance for selecting and operating ion exchange resins.",
  },
  "/sustainability": {
    title: "Sustainability Charter | Toyota Chemical Industries",
    description:
      "Responsible manufacturing, efficient water treatment and long-term performance of resin systems at Toyota Chemical Industries.",
  },
  "/legal-notice": {
    title: "Legal Notice | Toyota Chemical Industries",
    description:
      "Terms governing the use of this website and the information provided on it.",
  },
  "/privacy-policy": {
    title: "Privacy Policy | Toyota Chemical Industries",
    description:
      "How Toyota Chemical Industries handles information submitted through this website.",
  },
};

// Retired paths that still resolve. They render the canonical page's metadata
// but point the canonical tag at the primary URL and are kept out of the index,
// so the two paths are never treated as duplicate content.
const ALIASES = {
  ...LEGACY_REDIRECTS,
  "/applications/ultrapure-water": "/applications",
};

export const NOT_FOUND_SEO = {
  title: "Page Not Found | Toyota Chemical Industries",
  description:
    "The page you are looking for does not exist or may have been moved. Browse our resin products, applications and industries, or return to the home page.",
  canonicalPath: null,
  noindex: true,
  ogType: "website",
  ogImage: DEFAULT_OG_IMAGE,
};

const normalize = (pathname) => {
  const p = (pathname || "/").split("?")[0].split("#")[0];
  if (p.length > 1 && p.endsWith("/")) return p.replace(/\/+$/, "");
  return p || "/";
};

const withDefaults = (meta, canonicalPath) => ({
  ogType: "website",
  ogImage: DEFAULT_OG_IMAGE,
  noindex: false,
  ...meta,
  canonicalPath,
});

export function resolveSeo(pathname) {
  const path = normalize(pathname);

  if (PAGES[path]) return withDefaults(PAGES[path], path);

  if (ALIASES[path]) {
    const target = ALIASES[path];
    return withDefaults({ ...PAGES[target], noindex: true }, target);
  }

  const blogMatch = /^\/blog\/([^/]+)$/.exec(path);
  if (blogMatch) {
    const post = getBlogPost(blogMatch[1]);
    if (post) {
      return withDefaults(
        {
          title: `${post.title} | Toyota Chemical Industries`,
          description: post.description,
          ogType: "article",
          publishedTime: post.published,
        },
        path,
      );
    }
    return { ...NOT_FOUND_SEO };
  }

  return { ...NOT_FOUND_SEO };
}
