import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router";

import { mainNav } from "../../config/navigation";
import Logo from "../common/Logo";
import SearchOverlay from "../search/SearchOverlay";

/* =========================================================
   ACTIVE ROUTE HELPERS
========================================================= */

function matchesPath(pathname, path) {
  if (path === "/") return pathname === "/";
  return pathname === path || pathname.startsWith(`${path}/`);
}


const UNDERLINE =
  "relative inline-block pb-1 after:absolute after:inset-x-0 after:bottom-0 after:h-[2px] after:origin-left after:bg-[#B27B34] after:transition-transform after:duration-200 after:content-['']";

function navLinkClass(active) {
  return active
    ? `${UNDERLINE} text-[#1868A8] after:scale-x-100`
    : `${UNDERLINE} text-[#0A2C4B] transition-colors duration-200 hover:text-[#1868A8] after:scale-x-0 hover:after:scale-x-100`;
}

function slugify(label) {
  return label.toLowerCase().replace(/\s+/g, "-");
}

/* =========================================================
   DROPDOWN ARROW
========================================================= */

function DropdownArrow({ open }) {
  return (
    <svg
      className={`h-3.5 w-3.5 transition-transform duration-200 ${
        open ? "rotate-180" : ""
      }`}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.51a.75.75 0 01-1.08 0l-4.25-4.51a.75.75 0 01.02-1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
}

/* =========================================================
   DESKTOP DROPDOWN
========================================================= */

function DesktopDropdown({
  label,
  path,
  items,
  menuTitle,
  menuWidth = "w-80",
  open,
  onOpen,
  onClose,
  pathname,
}) {
  const closeTimer = useRef(null);
  const menuId = `nav-menu-${slugify(label)}`;
  const active = matchesPath(pathname, path);

  useEffect(() => () => clearTimeout(closeTimer.current), []);

  const handleEnter = () => {
    clearTimeout(closeTimer.current);
    onOpen();
  };

  // The delay lets the cursor cross the gap between the label and the panel.
  const handleLeave = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(onClose, 150);
  };

  return (
    <li
      className="relative flex items-center gap-1.5"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <Link
        to={path}
        className={navLinkClass(active)}
        aria-current={active ? "page" : undefined}
      >
        {label}
      </Link>

      <button
        type="button"
        onClick={() => (open ? onClose() : onOpen())}
        className="-m-1 rounded-[2px] p-1 text-[#1868A8] transition-colors duration-200 hover:bg-[#F6F9FC]"
        aria-label={`Toggle ${label} menu`}
        aria-expanded={open}
        aria-haspopup="true"
        aria-controls={menuId}
      >
        <DropdownArrow open={open} />
      </button>

      <div
        id={menuId}
        className={`absolute left-1/2 top-full mt-5 ${menuWidth} -translate-x-1/2 rounded-[2px] border border-[#DAE7F1] bg-white p-2 shadow-[0_20px_45px_-15px_rgba(10,44,75,0.2)] transition-all duration-200 ease-out ${
          open
            ? "visible translate-y-0 opacity-100"
            : "pointer-events-none invisible -translate-y-1 opacity-0"
        }`}
      >
        <div className="border-b border-[#DAE7F1] px-4 py-3">
          <span className="font-mono text-[8px] font-bold uppercase tracking-[0.16em] text-[#B27B34]">
            {menuTitle}
          </span>
        </div>

        {items.map((item) => {
          const itemActive = matchesPath(pathname, item.path);

          return (
            <Link
              key={item.path}
              to={item.path}
              onClick={onClose}
              aria-current={itemActive ? "page" : undefined}
              className={`group/item flex items-center justify-between gap-4 rounded-[2px] border-b border-[#DAE7F1]/70 px-4 py-3 transition-colors duration-200 last:border-b-0 hover:bg-[#F6F9FC] ${
                itemActive ? "bg-[#F6F9FC]" : ""
              }`}
            >
              <span
                className={`text-[11px] font-semibold leading-snug transition-all duration-200 group-hover/item:translate-x-0.5 ${
                  itemActive
                    ? "text-[#1868A8]"
                    : "text-[#0A2C4B] group-hover/item:text-[#1868A8]"
                }`}
              >
                {item.name}
              </span>

              <span
                className="shrink-0 text-[#B27B34] transition-transform duration-200 group-hover/item:translate-x-0.5"
                aria-hidden="true"
              >
                →
              </span>
            </Link>
          );
        })}
      </div>
    </li>
  );
}

/* =========================================================
   MOBILE DROPDOWN
========================================================= */

function MobileDropdown({
  label,
  path,
  items,
  menuTitle,
  open,
  setOpen,
  pathname,
  onNavigate,
}) {
  const menuId = `mobile-menu-${slugify(label)}`;
  const active = matchesPath(pathname, path);

  return (
    <div className="border-b border-[#DAE7F1]">
      <div className="flex items-center justify-between gap-3">
        <Link
          to={path}
          onClick={onNavigate}
          aria-current={active ? "page" : undefined}
          className={`flex min-h-[44px] flex-1 items-center font-mono text-[10px] font-bold uppercase tracking-wider transition-colors duration-200 ${
            active ? "text-[#1868A8]" : "text-[#0A2C4B] hover:text-[#1868A8]"
          }`}
        >
          {label}
        </Link>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-12 w-12 shrink-0 touch-manipulation items-center justify-center rounded-[2px] text-[#1868A8] transition-colors duration-200 hover:bg-[#F6F9FC]"
          aria-label={`Toggle mobile ${label} menu`}
          aria-expanded={open}
          aria-haspopup="true"
          aria-controls={menuId}
        >
          <DropdownArrow open={open} />
        </button>
      </div>

      {open && (
        <div id={menuId} className="mb-3 ml-3 border-l-2 border-[#B27B34]">
          {menuTitle && (
            <div className="px-4 pb-1 pt-3 font-mono text-[8px] font-bold uppercase tracking-[0.16em] text-[#B27B34]">
              {menuTitle}
            </div>
          )}

          {items.map((item) => {
            const itemActive = matchesPath(pathname, item.path);

            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={onNavigate}
                aria-current={itemActive ? "page" : undefined}
                className={`flex min-h-[48px] touch-manipulation items-center justify-between gap-3 px-4 py-3 text-xs font-semibold leading-snug transition-colors duration-200 hover:bg-[#F6F9FC] ${
                  itemActive ? "text-[#1868A8]" : "text-slate-600"
                }`}
              >
                <span>{item.name}</span>

                <span className="shrink-0 text-[#B27B34]" aria-hidden="true">
                  →
                </span>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

/* =========================================================
   HEADER
========================================================= */

export default function Header() {
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const barRef = useRef(null);
  const desktopNavRef = useRef(null);
  const searchTriggerRef = useRef(null);
  const [barHeight, setBarHeight] = useState(73);

  const closeAll = () => {
    setMobileOpen(false);
    setOpenMenu(null);
  };

  const closeSearch = () => {
    setSearchOpen(false);

    const trigger = searchTriggerRef.current;
    if (trigger && document.contains(trigger)) trigger.focus();
  };

  const openSearch = (event) => {
    searchTriggerRef.current = event.currentTarget;
    setMobileOpen(false);
    setOpenMenu(null);
    setSearchOpen(true);
  };

  // Close a dropdown only if it is still the open one — otherwise a leave
  // timer from the previous item would close the item the pointer moved to.
  const closeMenu = (label) => () => {
    setOpenMenu((current) => (current === label ? null : current));
  };

  useEffect(() => {
    closeAll();
    setSearchOpen(false);
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  // The header bar is fixed, so the page needs an equal-height offset. Measuring
  // it keeps the offset correct if the bar wraps to a second line at some
  // viewport widths instead of relying on a hardcoded height.
  useEffect(() => {
    const el = barRef.current;
    if (!el) return undefined;

    const sync = () => setBarHeight(el.getBoundingClientRect().height);
    sync();

    const observer = new ResizeObserver(sync);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Escape closes whichever surface is open; Cmd/Ctrl+K opens search.
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpenMenu(null);
        setMobileOpen(false);
        return;
      }

      if (event.key.toLowerCase() === "k" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        setSearchOpen((value) => !value);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  // Click anywhere outside the DESKTOP nav closes an open dropdown.
  // Important: do not register this handler while the mobile drawer is open.
  // On touch devices, a document-level pointerdown can otherwise close/unmount
  // the mobile submenu before the Link click finishes, which breaks navigation.
  useEffect(() => {
    if (!openMenu || mobileOpen) return undefined;

    const desktopQuery = window.matchMedia("(min-width: 1280px)");
    if (!desktopQuery.matches) return undefined;

    const onPointerDown = (event) => {
      if (desktopNavRef.current && !desktopNavRef.current.contains(event.target)) {
        setOpenMenu(null);
      }
    };

    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [openMenu, mobileOpen]);

  // Keep the page behind the mobile drawer from scrolling.
  useEffect(() => {
    if (!mobileOpen) return undefined;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [mobileOpen]);

  const toggleMenu = (label) => (value) => {
    setOpenMenu((current) => {
      const isOpen = current === label;
      const next = typeof value === "function" ? value(isOpen) : value;
      return next ? label : null;
    });
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:wght@500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap');
        .tci-site-header .font-serif {
          font-family: "EB Garamond", Georgia, serif !important;
        }
        .tci-site-header .font-mono {
          font-family: "JetBrains Mono", Consolas, monospace !important;
        }
        .tci-site-header,
        .tci-site-header * {
          box-sizing: border-box;
        }
      `}</style>

      <nav className="tci-site-header fixed left-0 right-0 top-0 z-[60] border-b border-[#DAE7F1] bg-white/95 backdrop-blur-md">
        {/* =====================================================
            MAIN HEADER
        ====================================================== */}

        <div
          ref={barRef}
          className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between px-5 py-4 lg:px-8"
        >
          {/* LOGO */}

          <Logo variant="header" onClick={closeAll} />

          {/* =====================================================
              DESKTOP NAVIGATION
          ====================================================== */}

          <div ref={desktopNavRef} className="hidden items-center xl:flex">
            <ul className="flex items-center gap-4 font-mono text-[10px] font-semibold uppercase tracking-wider">
              {mainNav.map((item) =>
                item.items ? (
                  <DesktopDropdown
                    key={item.path}
                    label={item.label}
                    path={item.path}
                    items={item.items}
                    menuTitle={item.menuTitle}
                    menuWidth={item.menuWidth}
                    open={openMenu === item.label}
                    onOpen={() => setOpenMenu(item.label)}
                    onClose={closeMenu(item.label)}
                    pathname={pathname}
                  />
                ) : (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className={navLinkClass(matchesPath(pathname, item.path))}
                      aria-current={
                        matchesPath(pathname, item.path) ? "page" : undefined
                      }
                    >
                      {item.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* =====================================================
              DESKTOP ACTIONS
          ====================================================== */}

          <div className="hidden items-center gap-3 xl:flex">
            <button
              type="button"
              onClick={openSearch}
              aria-label="Search"
              aria-expanded={searchOpen}
              aria-controls="site-search-dialog"
              className="inline-flex h-11 w-11 items-center justify-center rounded-[2px] border border-[#DAE7F1] text-[#0A2C4B] transition-colors duration-200 hover:border-[#B27B34] hover:bg-[#F6F9FC] hover:text-[#B27B34]"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
                />
              </svg>
            </button>

            <Link
              to="/contact"
              className="border border-[#0A2C4B] px-5 py-3 font-mono text-[9px] font-bold uppercase tracking-wider text-[#0A2C4B] transition-all duration-200 hover:-translate-y-px hover:bg-[#0A2C4B] hover:text-white active:translate-y-0"
            >
              Get In Touch
            </Link>

            <Link
              to="/contact"
              className="bg-[#B27B34] px-5 py-3 font-mono text-[9px] font-bold uppercase tracking-wider text-white transition-all duration-200 hover:-translate-y-px hover:bg-[#DF9B42] active:translate-y-0"
            >
              Request Quote
            </Link>
          </div>

          {/* =====================================================
              MOBILE MENU BUTTON
          ====================================================== */}

          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-[2px] border border-[#DAE7F1] text-[#0A2C4B] transition-colors duration-200 hover:bg-[#F6F9FC] xl:hidden"
            aria-label={mobileOpen ? "Close main menu" : "Open main menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-panel"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* =====================================================
            MOBILE NAVIGATION
        ====================================================== */}

        {mobileOpen && (
          <div
            id="mobile-nav-panel"
            style={{ "--tci-nav-offset": `${barHeight}px` }}
            className="tci-mobile-menu animate-[tci-panel-in_180ms_ease-out] border-t border-[#DAE7F1] bg-white xl:hidden"
          >
            <div className="mx-auto max-w-[1440px] px-5 py-5 lg:px-8">
              <div className="flex flex-col">
                {mainNav.map((item) =>
                  item.items ? (
                    <MobileDropdown
                      key={item.path}
                      label={item.label}
                      path={item.path}
                      items={item.items}
                      menuTitle={item.menuTitle}
                      open={openMenu === item.label}
                      setOpen={toggleMenu(item.label)}
                      pathname={pathname}
                      onNavigate={closeAll}
                    />
                  ) : (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={closeAll}
                      aria-current={
                        matchesPath(pathname, item.path) ? "page" : undefined
                      }
                      className={`flex min-h-[44px] items-center border-b border-[#DAE7F1] font-mono text-[10px] font-bold uppercase tracking-wider transition-colors duration-200 hover:text-[#1868A8] ${
                        matchesPath(pathname, item.path)
                          ? "text-[#1868A8]"
                          : "text-[#0A2C4B]"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ),
                )}

                {/* MOBILE SEARCH */}

                <button
                  type="button"
                  onClick={openSearch}
                  aria-label="Search"
                  aria-expanded={searchOpen}
                  aria-controls="site-search-dialog"
                  className="mt-5 inline-flex min-h-[44px] items-center justify-center gap-2 border border-[#DAE7F1] bg-[#F6F9FC] px-4 py-3 font-mono text-[9px] font-bold uppercase tracking-wider text-[#0A2C4B] transition-colors duration-200 hover:border-[#B27B34] hover:text-[#B27B34]"
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
                    />
                  </svg>
                  Search
                </button>

                {/* MOBILE CTA */}

                <div className="mt-3 grid grid-cols-2 gap-3">
                  <Link
                    to="/contact"
                    onClick={closeAll}
                    className="border border-[#0A2C4B] px-4 py-4 text-center font-mono text-[9px] font-bold uppercase tracking-wider text-[#0A2C4B] transition-colors duration-200 hover:bg-[#0A2C4B] hover:text-white"
                  >
                    Get In Touch
                  </Link>

                  <Link
                    to="/contact"
                    onClick={closeAll}
                    className="bg-[#B27B34] px-4 py-4 text-center font-mono text-[9px] font-bold uppercase tracking-wider text-white transition-colors duration-200 hover:bg-[#DF9B42]"
                  >
                    Request Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {searchOpen && <SearchOverlay onClose={closeSearch} />}

      {/* HEADER OFFSET */}

      <div style={{ height: barHeight }} aria-hidden="true" />
    </>
  );
}
