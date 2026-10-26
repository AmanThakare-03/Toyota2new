

import { Link } from "react-router";
import logo from "../../assets/toyota logo.png";

// Every image dropped into src/assets/images/logo/ is picked up at build time.
const LOGO_MODULES = import.meta.glob(
  "../../assets/images/logo/*.{svg,png,jpg,jpeg,webp,avif}",
  { eager: true, query: "?url", import: "default" },
);

const PREFERRED_NAME = "toyota-chemical-logo";

function resolveLogoSrc() {
  const entries = Object.entries(LOGO_MODULES);
  if (entries.length === 0) return null;

  const preferred = entries.find(([path]) => {
    const file = path.split("/").pop() ?? "";
    return file.replace(/\.[^.]+$/, "") === PREFERRED_NAME;
  });

  return (preferred ?? entries[0])[1];
}

const LOGO_SRC = resolveLogoSrc();

const LOGO_HEIGHT = {
  header: 52,
  footer: 56,
};

const WORDMARK_COLOR = {
  header: "text-[#0A2C4B]",
  footer: "",
};

const TAGLINE_COLOR = {
  header: "text-slate-500",
  footer: "text-slate-400",
};

export default function Logo({
  variant = "header",
  linked = true,
  className = "",
  onClick,
}) {
  const content = LOGO_SRC ? (
    <img
      src={LOGO_SRC}
      alt="Toyota Chemical Industries Pvt. Ltd."
      style={{ height: LOGO_HEIGHT[variant] }}
      className="block w-auto max-w-[240px] object-contain"
    />
  ) : (
    <>
      {/* Logo image without separate background box */}
      <div className="flex shrink-0 items-center justify-center">
        <img
          src={logo}
          alt="Toyota Chemical Industries"
          style={{ height: LOGO_HEIGHT[variant] }}
          className="block h-auto w-auto max-h-[52px] max-w-[230px] object-contain object-left"
        />
      </div>

      {/* <div className="flex flex-col justify-center">
        <div
          className={`font-serif text-xl font-bold leading-none tracking-tight ${WORDMARK_COLOR[variant]}`}
        >
          TOYOTA CHEMICAL
        </div>

        <div
          className={`mt-1 whitespace-nowrap font-mono text-[8px] font-semibold uppercase tracking-[0.12em] ${TAGLINE_COLOR[variant]}`}
        >
          Industries Pvt. Ltd. · Since 1972
        </div>
      </div> */}
    </>
  );

  const classes =
    `flex items-center gap-3 ${className}`.trim();

  if (!linked) {
    return <div className={classes}>{content}</div>;
  }

  return (
    <Link
      to="/"
      onClick={onClick}
      className={classes}
    >
      {content}
    </Link>
  );
}