export const SITE_URL = (
  import.meta.env.VITE_SITE_URL || "https://www.toyotachemicals.co.in"
).replace(/\/+$/, "");

export const SITE_NAME = "Toyota Chemical Industries";

export const SITE_LEGAL_NAME = "Toyota Chemical Industries Pvt. Ltd.";

export const SITE_TAGLINE = "Ion Exchange Resin Manufacturers";

export const THEME_COLOR = "#0A2C4B";

export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;

export const CONTACT = {
  phone: "+91 90167 11708",
  phoneHref: "tel:+919016711708",
  email: "info@toyotachemicals.co.in",
  emailHref: "mailto:info@toyotachemicals.co.in",
  whatsapp: "https://wa.me/919898701010",
  addressLines: [
    "Plot 108/1, GIDC Industrial Estate,",
    "Vapi-Silvassa Road,",
    "Vapi, Gujarat 396195,",
    "India",
  ],
};
