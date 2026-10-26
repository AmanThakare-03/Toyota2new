// Public surface of the SEO layer.
//
//   SEO        - the component a page renders with its own metadata
//   homeSeo    - the home page's metadata, from the home page SEO kit
//   resolveSeo - resolves a route path to its metadata
//   usePageMeta- applies the route metadata in MainLayout
//
// A page that needs nothing beyond its entry in seoConfig.js does not import
// any of this; it just works. A page with extra metadata renders <SEO> with its
// own configuration object.
export { default as SEO } from "../components/SEO";
export { default as homeSeo } from "./homeSeo";
export { resolveSeo } from "./seoConfig";
export { usePageMeta } from "./usePageMeta";
