import { Link } from "react-router";

// A path is treated as an application route when it is root-relative and does
// not point at a static file (e.g. /brochures/C60-Na.pdf must stay a real download).
const FILE_EXTENSION = /\.[a-z0-9]{2,5}$/i;

export function isRouteHref(href) {
  if (typeof href !== "string") return false;
  if (!href.startsWith("/") || href.startsWith("//")) return false;
  return !FILE_EXTENSION.test(href.split("?")[0]);
}

// Renders React Router navigation for internal routes and a plain anchor for
// external URLs, in-page anchors, contact links and file downloads — so
// prop-driven buttons do not force a full page reload.
export default function AppLink({ href, to, children, ...rest }) {
  const target = to ?? href;

  if (isRouteHref(target)) {
    return (
      <Link to={target} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <a href={target} {...rest}>
      {children}
    </a>
  );
}
