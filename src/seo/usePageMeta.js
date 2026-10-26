import { useEffect } from "react";
import { useLocation } from "react-router";

import { SITE_URL } from "../config/site";
import {
  registerSeoSource,
  ROUTE_PRIORITY,
  ROUTE_SOURCE,
  unregisterSeoSource,
} from "./headManager";
import { resolveSeo } from "./seoConfig";

// Applies the metadata for the current route. Called once from MainLayout, so
// every page gets its title, description, canonical, robots, Open Graph and
// Twitter tags from seoConfig.js. A page that needs more registers a second,
// higher-priority source by rendering <SEO>; see headManager.js.
export function usePageMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const seo = resolveSeo(pathname);

    // seoConfig works in paths so one page has one URL; the head needs the
    // absolute form, and og:url and twitter:url fall back to it.
    registerSeoSource(ROUTE_SOURCE, ROUTE_PRIORITY, {
      ...seo,
      canonical: seo.canonicalPath
        ? `${SITE_URL}${seo.canonicalPath}`
        : undefined,
    });

    return () => unregisterSeoSource(ROUTE_SOURCE);
  }, [pathname]);
}
