import { blogEntries, blogPostPath } from "./blogIndex";
import { INDUSTRY_ROUTES, PRODUCT_PATH, PRODUCT_ROUTES } from "./routes";

// Product and industry entries come from the canonical URL registry, so the
// menus, the footer and the search index can never drift from the routes.
export const productLinks = PRODUCT_ROUTES.map(({ name, path }) => ({
  name,
  path,
}));

export const aboutLinks = [
  { name: "Quality & Certifications", path: "/quality-compliance" },
  { name: "Service Area", path: "/service-area" },
];

export const applicationLinks = [
  {
    name: "Boiler Feed Water Treatment",
    path: "/applications/boiler-feed-water-treatment",
  },
  { name: "Dealkalisation Resin", path: "/applications/dealkalisation-resin" },
  { name: "DM Plant Resin", path: "/applications/dm-plant-resin" },
  {
    name: "ETP Wastewater Treatment",
    path: "/applications/etp-wastewater-treatment",
  },
  {
    name: "Mixed Bed Condensate Polishing",
    path: "/applications/mixed-bed-condensate-polishing",
  },
  { name: "Water Softener Resin", path: "/applications/water-softener-resin" },
];

export const industryLinks = INDUSTRY_ROUTES.map(({ name, path }) => ({
  name,
  path,
}));

// Derived from src/config/blogIndex.js so the menu can never drift from the
// published posts.
const blogLinks = blogEntries.map(({ slug, title }) => ({
  name: title,
  path: blogPostPath(slug),
}));

export const mainNav = [
  { label: "Home", path: "/" },
  {
    label: "About Us",
    path: "/about",
    menuTitle: "ABOUT US",
    items: aboutLinks,
  },
  {
    label: "Products",
    path: "/products",
    menuTitle: "PRODUCT PORTFOLIO",
    items: productLinks,
  },
  {
    label: "Applications",
    path: "/applications",
    menuTitle: "APPLICATIONS",
    items: applicationLinks,
  },
  {
    label: "Industries",
    path: "/industries",
    menuTitle: "INDUSTRIES",
    items: industryLinks,
  },
  {
    label: "Blog",
    path: "/blog",
    menuTitle: "KNOWLEDGE HUB",
    items: blogLinks,
    // Article titles are long, so this panel is wider than the others.
    menuWidth: "w-[26rem]",
  },
  { label: "Contact Us", path: "/contact" },
];

export const footerCompanyLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Products", path: "/products" },
  { name: "Applications", path: "/applications" },
  { name: "Industries", path: "/industries" },
  { name: "Blog", path: "/blog" },
  { name: "Contact Us", path: "/contact" },
];

export const footerResinCategories = [
  { name: "Anion Exchange Resins", path: PRODUCT_PATH.anion },
  { name: "Cation Exchange Resins", path: PRODUCT_PATH.cation },
  { name: "Specialty Resins", path: PRODUCT_PATH.specialty },
  { name: "Mixed Bed Resins", path: PRODUCT_PATH.mixedBed },
  { name: "Water Softener Resins", path: PRODUCT_PATH.waterSoftener },
];

export const footerLegalLinks = [
  { name: "Legal Notice", path: "/legal-notice" },
  { name: "Privacy Policy", path: "/privacy-policy" },
  { name: "Quality Compliance", path: "/quality-compliance" },
  { name: "Sustainability Charter", path: "/sustainability" },
];
