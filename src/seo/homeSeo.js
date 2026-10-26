import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL, THEME_COLOR } from "../config/site";

// Home page SEO, exactly as supplied in the Toyota Chemicals home page SEO kit.
//
// This is the only place the home page's metadata values live. The <SEO>
// component in src/pages/Home/Home.jsx consumes this object, and seoConfig.js
// reads its title, description and robots string for the "/" route so the
// static defaults in index.html, the route-level tags and the page-level tags
// can never drift apart.

const HOME_URL = `${SITE_URL}/`;
const OG_IMAGE_URL = DEFAULT_OG_IMAGE;
const LOGO_URL = `${SITE_URL}/images/toyota-chemical-industries-logo-512.png`;
const LINKEDIN_URL = "https://in.linkedin.com/company/toyota-chemical-industries-pvt-ltd";
const MAPS_URL = "https://maps.google.com/?cid=10311074534491060084";

const OG_TITLE =
  "Ion Exchange Resin Manufacturers in India Since 1972 | Toyota Chemical Industries";
const OG_DESCRIPTION =
  "Cation, anion, mixed bed & water softener resins from our ISO 9001 & 14001 certified plant in GIDC Vapi, Gujarat. Ask for a TDS or a quotation.";
const TWITTER_DESCRIPTION =
  "Cation, anion, mixed bed & water softener resins from our ISO-certified plant in GIDC Vapi, Gujarat. Ask for a TDS or a quotation.";

// Canonical product URLs as supplied by the client. Never substitute an
// alternative spelling for these inside the schema.
const PRODUCTS = [
  ["Cation Exchange Resins", `${SITE_URL}/products/cationexchangeresins`],
  ["Anion Exchange Resins", `${SITE_URL}/products/anionexchangeresins`],
  ["Mixed Bed Resins", `${SITE_URL}/products/mixedbedexchangeresin`],
  ["Water Softener Resins", `${SITE_URL}/products/watersoftenerresins`],
  ["Specialty Resins", `${SITE_URL}/products/specialtyresins`],
];

// Questions and answers exactly as they are published in the home page FAQ
// section. The FAQPage graph below mirrors this text, so the structured data
// never claims content the page does not actually show.
const FAQS = [
  {
    question: "Who are the leading ion exchange resin manufacturers in India?",
    answer:
      "Toyota Chemical Industries, established in 1972 in GIDC Vapi, Gujarat, is among India\u2019s most established ion exchange resin manufacturers \u2014 producing cation, anion, mixed bed and specialty resins under ISO 9001:2015 and ISO 14001:2015.",
  },
  {
    question: "What types of ion exchange resins does Toyota Chemical manufacture?",
    answer:
      "Strong and weak acid cation resins, Type 1 and Type 2 strong base and weak base anion resins, ready-mixed mixed bed resin, water softener resins and specialty chelating and indicator resins.",
  },
  {
    question: "Where is your ion exchange resin manufacturing facility located?",
    answer:
      "Our polymerisation plant is in GIDC Vapi, Gujarat, with a marketing office in Mumbai. We supply across India and beyond.",
  },
  {
    question: "Are Toyota Chemical Industries ISO certified?",
    answer:
      "Yes \u2014 we are ISO 9001:2015 (quality management) and ISO 14001:2015 (environmental management) certified, with a technical data sheet for every grade.",
  },
  {
    question: "How is ion exchange resin priced in India?",
    answer:
      "Pricing depends on the grade, ionic form and quantity. We offer direct-from-manufacturer supply \u2014 share the grade and volume you need and our team will send a quotation.",
  },
  {
    question: "Do you deliver ion exchange resins across India?",
    answer:
      "Yes. From our Vapi factory we supply industrial customers across India, from 25-litre bags to bulk, with reliable lead times and secure packing.",
  },
  {
    question: "Which industries use Toyota Chemical\u2019s ion exchange resins?",
    answer:
      "Power and thermal plants, sugar processing, textile and dye, chemical and intermediates, paper and pulp, and food and beverage, among other water-treatment users.",
  },
];

const ORGANIZATION = {
  "@type": "Organization",
  "@id": `${HOME_URL}#organization`,
  name: "Toyota Chemical Industries Pvt. Ltd.",
  legalName: "Toyota Chemical Industries Private Limited",
  alternateName: ["Toyota Chemicals", "Toyota Chemical Industries", "AGRION"],
  url: HOME_URL,
  logo: {
    "@type": "ImageObject",
    "@id": `${HOME_URL}#logo`,
    url: LOGO_URL,
    contentUrl: LOGO_URL,
    caption: "Toyota Chemical Industries logo",
  },
  image: {
    "@type": "ImageObject",
    url: OG_IMAGE_URL,
    width: 1200,
    height: 630,
  },
  description:
    "Ion exchange resin manufacturer in India since 1972, producing cation, anion, mixed bed, water softener and specialty resins at its own plant in GIDC Vapi, Gujarat. ISO 9001:2015 and ISO 14001:2015 certified.",
  slogan: "Ion exchange resin manufacturers in India since 1972",
  foundingDate: "1972",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Plot No. 100, Vapi\u2013Silvassa Road, GIDC Vapi",
    addressLocality: "Vapi",
    addressRegion: "Gujarat",
    postalCode: "396195",
    addressCountry: "IN",
  },
  location: {
    "@type": "Place",
    name: "Marketing Office",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Extn 1.2, Sidhpura Co-Op Ind. Estate, S.V. Road, Goregaon (W)",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      postalCode: "400104",
      addressCountry: "IN",
    },
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 20.3594162,
    longitude: 72.9252245,
  },
  hasMap: MAPS_URL,
  telephone: "+91-90167-11708",
  email: "info@toyotachemicals.co.in",
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91-90167-11708",
      contactType: "sales",
      email: "info@toyotachemicals.co.in",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi", "Gujarati", "Marathi"],
    },
    {
      "@type": "ContactPoint",
      telephone: "+91-22-4967-8234",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi", "Marathi"],
    },
  ],
  sameAs: [LINKEDIN_URL],
  knowsLanguage: ["English", "Hindi", "Gujarati", "Marathi"],
  areaServed: ["Vapi", "Valsad", "Daman", "Silvassa", "India"],
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      name: "ISO 9001:2015",
      credentialCategory: "Quality Management System",
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "ISO 14001:2015",
      credentialCategory: "Environmental Management System",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Ion Exchange Resins",
    itemListElement: PRODUCTS.map(([name, url]) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Product", name, url },
    })),
  },
};

// One coherent graph rather than several unrelated blocks: the page is part of
// the site, the site is published by the organisation, and the FAQ section is
// the page's main entity.
const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    ORGANIZATION,
    {
      "@type": "WebSite",
      "@id": `${HOME_URL}#website`,
      url: HOME_URL,
      name: SITE_NAME,
      publisher: { "@id": `${HOME_URL}#organization` },
      inLanguage: "en-IN",
    },
    {
      "@type": "WebPage",
      "@id": `${HOME_URL}#webpage`,
      url: HOME_URL,
      name: "Ion Exchange Resin Manufacturers in India | Toyota Chemicals",
      description:
        "Leading ion exchange resin manufacturers in India since 1972 \u2014 cation, anion, mixed bed & softener resins from our ISO-certified Vapi plant. Get TDS & a quote.",
      isPartOf: { "@id": `${HOME_URL}#website` },
      about: { "@id": `${HOME_URL}#organization` },
      primaryImageOfPage: { "@id": `${HOME_URL}#logo` },
      mainEntity: { "@id": `${HOME_URL}#faq` },
      inLanguage: "en-IN",
    },
    {
      "@type": "FAQPage",
      "@id": `${HOME_URL}#faq`,
      isPartOf: { "@id": `${HOME_URL}#website` },
      inLanguage: "en-IN",
      mainEntity: FAQS.map(({ question, answer }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    },
  ],
};

const homeSeo = {
  title: "Ion Exchange Resin Manufacturers in India | Toyota Chemicals",
  description:
    "Leading ion exchange resin manufacturers in India since 1972 \u2014 cation, anion, mixed bed & softener resins from our ISO-certified Vapi plant. Get TDS & a quote.",
  canonical: HOME_URL,
  robots:
    "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  language: "en-IN",
  themeColor: THEME_COLOR,

  ogType: "website",
  ogSiteName: SITE_NAME,
  ogLocale: "en_IN",
  ogUrl: HOME_URL,
  ogTitle: OG_TITLE,
  ogDescription: OG_DESCRIPTION,
  ogImage: {
    url: OG_IMAGE_URL,
    secureUrl: OG_IMAGE_URL,
    type: "image/jpeg",
    width: 1200,
    height: 630,
    alt: "Toyota Chemical Industries logo \u2014 ion exchange resin manufacturers in India since 1972, GIDC Vapi, Gujarat",
  },

  twitter: {
    card: "summary_large_image",
    title: OG_TITLE,
    description: TWITTER_DESCRIPTION,
    image: OG_IMAGE_URL,
    imageAlt:
      "Toyota Chemical Industries logo \u2014 ion exchange resin manufacturers in India",
  },

  geo: {
    region: "IN-GJ",
    placename: "Vapi, Gujarat",
    position: "20.3594162;72.9252245",
    icbm: "20.3594162, 72.9252245",
  },

  jsonLd: JSON_LD,
};

export default homeSeo;
