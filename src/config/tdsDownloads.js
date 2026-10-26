import { CONTACT } from "./site";

// Technical data sheets are served from the /brochures/ directory that already
// exists on the web server, so these hrefs must match the real filenames that
// live there. Nothing is bundled into the application for them.
const TDS_FILES = {
  "c-60": "C60-Na.pdf",
  "c-80": "C80-Na.pdf",
  "c-100-h": "C100-H.pdf",
  "c-100-mp": "C100-MP.pdf",
  "c-100-na": "C100-Na.pdf",
  "a-400": "A400.pdf",
  "a-400-mb": "A400-MB.pdf",
  "a-410": "A410.pdf",
  "a-600-mp": "A600-MP.pdf",
  "a-650-mp": "A650-MP.pdf",
};

// No technical data sheet has been published for every grade. A grade that is
// missing from TDS_FILES must not be linked to a file that does not exist.
export function tdsHref(gradeId) {
  const file = TDS_FILES[gradeId];
  return file ? `/brochures/${file}` : null;
}

// AGRION WC-50 has no downloadable data sheet, so its button asks for one by
// email instead of pointing at a file.
export const TDS_REQUEST_HREF = `${CONTACT.emailHref}?subject=${encodeURIComponent(
  "Technical data sheet request - AGRION WC-50",
)}`;
