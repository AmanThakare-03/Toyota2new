// Canonical URL registry for the product and industry sections.
//
// This is the single source of truth for these paths. Nothing else in the
// application may write one out as a string literal: navigation.js derives the
// menus and the search index from the arrays below, the router builds both the
// canonical routes and the legacy redirects from them, and seoConfig reads the
// same map for its canonical tags. One logical page therefore has exactly one
// URL, used from every location.
//
// `legacy` lists retired paths that still have to resolve. They may only ever
// be reached through a redirect — never from a menu, card, button, breadcrumb,
// search result or the sitemap — so a single URL stays authoritative.

export const PRODUCT_ROUTES = [
  {
    key: "cation",
    name: "Cation Exchange Resins",
    path: "/products/cationexchangeresins",
    legacy: [
      "/products/cation",
      "/products/cation-exchange-resins",
      "/products/cationanion",
    ],
  },
  {
    key: "anion",
    name: "Anion Exchange Resins",
    path: "/products/anionexchangeresins",
    legacy: ["/products/anion", "/products/anion-exchange-resins"],
  },
  {
    key: "mixedBed",
    name: "Mixed Bed Resins",
    path: "/products/mixedbedexchangeresin",
    legacy: ["/products/mixedbed", "/products/mixed-bed-resins"],
  },
  {
    key: "waterSoftener",
    name: "Water Softener Resins",
    path: "/products/watersoftenerresins",
    legacy: ["/products/watersoftener", "/products/water-softener-resins"],
  },
  {
    key: "specialty",
    name: "Specialty Resins",
    path: "/products/specialtyresins",
    legacy: ["/products/specialty", "/products/specialty-resins"],
  },
];

export const INDUSTRY_ROUTES = [
  {
    key: "chemical",
    name: "Chemical Industries",
    path: "/industries/chemicalindustries",
    legacy: ["/industries/chemical", "/industries/chemical-intermediates"],
  },
  {
    key: "foodBeverage",
    name: "Food & Beverage",
    path: "/industries/food-beverage-industries",
    legacy: ["/industries/food-beverage"],
  },
  {
    key: "paperPulp",
    name: "Paper Pulp",
    path: "/industries/paper-pulp-industries",
    legacy: ["/industries/paper", "/industries/paper-pulp"],
  },
  {
    key: "powerThermal",
    name: "Power Thermal",
    path: "/industries/power-thermal-industries",
    legacy: ["/industries/power-thermal", "/industries/power-thermal-plants"],
  },
  {
    key: "sugarRefinery",
    name: "Sugar Refinery",
    // The misspelling is the URL in use on the live site and is deliberate.
    path: "/industries/suger-refinery-industries",
    legacy: [
      "/industries/sugerRefinery",
      "/industries/sugar-processing",
      "/industries/sugar-seo-kit",
    ],
  },
  {
    key: "textile",
    name: "Textile",
    path: "/industries/textile-industries",
    legacy: [
      "/industries/textile",
      "/industries/textie",
      "/industries/textile-dye",
    ],
  },
];

export const PRODUCT_PATH = Object.fromEntries(
  PRODUCT_ROUTES.map(({ key, path }) => [key, path]),
);

export const INDUSTRY_PATH = Object.fromEntries(
  INDUSTRY_ROUTES.map(({ key, path }) => [key, path]),
);

const URL_ROUTES = [...PRODUCT_ROUTES, ...INDUSTRY_ROUTES];

// Retired path -> canonical path, for the router and the server redirect rules.
export const LEGACY_REDIRECTS = Object.fromEntries(
  URL_ROUTES.flatMap(({ path, legacy }) => legacy.map((from) => [from, path])),
);

// Every path that is allowed to appear as a live link anywhere in the app.
export const CANONICAL_PATHS = new Set(URL_ROUTES.map(({ path }) => path));
