import { PAGE_PRIORITY, PAGE_SOURCE, useSeoHead } from "../seo/headManager";

/**
 * Declarative head metadata for one page.
 *
 * Renders nothing - it just registers its props with the head manager for as
 * long as it is mounted. Every prop is optional; anything omitted falls back to
 * the route-level defaults from seoConfig.js, and the route's own tags are left
 * untouched.
 *
 * Supported props:
 *
 *   title, description, canonical, robots, language, themeColor, noindex,
 *   publishedTime,
 *   ogType, ogSiteName, ogLocale, ogUrl, ogTitle, ogDescription,
 *   ogImage (a URL string, or { url, secureUrl, type, width, height, alt }),
 *   twitter ({ card, title, description, image, imageAlt, url }),
 *   geo ({ region, placename, position, icbm }),
 *   jsonLd (one schema.org graph)
 *
 * Usage:  <SEO {...homeSeo} />  -  or  <SEO title="..." description="..." />
 */
export default function SEO(props) {
  useSeoHead(PAGE_SOURCE, PAGE_PRIORITY, props);

  return null;
}
