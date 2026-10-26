import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useNavigate } from "react-router";

import { popularSearches, searchSite } from "../../config/searchIndex";
import Logo from "../common/Logo";

const DIALOG_ID = "site-search-dialog";
const INPUT_ID = "site-search-input";

// Groups the ranked results for display while keeping a flat index on each row
// so arrow-key navigation can move across section boundaries.
function groupResults(results) {
  const groups = [];

  results.forEach((item, index) => {
    let group = groups[groups.length - 1];
    if (!group || group.section !== item.section) {
      group = { section: item.section, items: [] };
      groups.push(group);
    }
    group.items.push({ ...item, index });
  });

  return groups;
}

export default function SearchOverlay({ onClose }) {
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const results = useMemo(() => searchSite(query), [query]);
  const groups = useMemo(() => groupResults(results), [results]);
  const hasQuery = query.trim() !== "";

  // Mounted only while open, so the query starts empty every time.
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // lock background scroll while the dialog is open
  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, []);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  const onQueryChange = (event) => {
    setQuery(event.target.value);
    setActiveIndex(0);
  };

  const onInputKeyDown = (event) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((index) => (index + 1) % Math.max(results.length, 1));
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex(
        (index) => (index - 1 + Math.max(results.length, 1)) % Math.max(results.length, 1),
      );
      return;
    }

    if (event.key === "Enter") {
      const target = results[activeIndex];
      if (target) {
        event.preventDefault();
        onClose();
        navigate(target.path);
      }
    }
  };

  return (
    <div
      id={DIALOG_ID}
      role="dialog"
      aria-modal="true"
      aria-label="Search the site"
      className="fixed inset-0 z-[70] overflow-y-auto bg-[rgba(10,44,75,0.95)] px-4 py-16 sm:py-24"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="mx-auto w-full max-w-2xl animate-[tci-panel-in_180ms_ease-out] rounded-[2px] border border-[#DAE7F1] bg-white shadow-[0_30px_70px_-20px_rgba(6,24,43,0.55)]">
        {/* BRAND + CLOSE */}
        <div className="flex items-center justify-between gap-4 border-b border-[#DAE7F1] px-5 py-4">
          <Logo linked={false} />

          <button
            type="button"
            onClick={onClose}
            aria-label="Close search"
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[2px] border border-[#DAE7F1] text-[#0A2C4B] transition-colors duration-200 hover:border-[#B27B34] hover:bg-[#F6F9FC] hover:text-[#B27B34]"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* INPUT */}
        <div className="flex items-center gap-3 border-b border-[#DAE7F1] px-5 py-4 transition-colors duration-200 focus-within:border-[#B27B34]">
          <svg
            className="h-5 w-5 shrink-0 text-[#B27B34]"
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

          <input
            ref={inputRef}
            id={INPUT_ID}
            type="text"
            value={query}
            onChange={onQueryChange}
            onKeyDown={onInputKeyDown}
            placeholder="Search products, applications and guides…"
            aria-label="Search the site"
            autoComplete="off"
            className="w-full bg-transparent font-mono text-sm text-[#0A2C4B] outline-none placeholder:text-slate-400"
          />

          {hasQuery && (
            <button
              type="button"
              onClick={() => {
                setQuery("");
                inputRef.current?.focus();
              }}
              className="shrink-0 font-mono text-[9px] font-bold uppercase tracking-wider text-slate-400 transition-colors duration-200 hover:text-[#B27B34]"
            >
              Clear
            </button>
          )}
        </div>

        {/* RESULTS */}
        <div className="max-h-[55vh] overflow-y-auto">
          {!hasQuery && (
            <div className="px-5 py-5">
              <div className="font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-[#B27B34]">
                Popular products
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                {popularSearches.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={onClose}
                    className="border border-[#DAE7F1] bg-[#F6F9FC] px-3 py-2 text-[11px] font-semibold text-[#0A2C4B] transition-colors duration-200 hover:border-[#B27B34] hover:bg-white hover:text-[#1868A8]"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {hasQuery && results.length === 0 && (
            <div className="px-5 py-12 text-center">
              <p className="text-sm font-semibold text-[#0A2C4B]">
                No results for “{query.trim()}”.
              </p>

              <p className="mt-2 text-xs text-slate-500">
                Try a product name, an application or a guide.
              </p>

              <Link
                to="/contact"
                onClick={onClose}
                className="mt-6 inline-flex items-center gap-2 bg-[#B27B34] px-5 py-3 font-mono text-[9px] font-bold uppercase tracking-wider text-white transition-colors duration-200 hover:bg-[#DF9B42]"
              >
                Ask our technical team
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          )}

          {hasQuery &&
            groups.map((group) => (
              <div key={group.section} className="border-b border-[#DAE7F1] last:border-b-0">
                <div className="px-5 pb-2 pt-4 font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-[#B27B34]">
                  {group.section}
                </div>

                {group.items.map((item) => {
                  const isActive = item.index === activeIndex;

                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={onClose}
                      onMouseEnter={() => setActiveIndex(item.index)}
                      className={`flex items-center justify-between gap-4 px-5 py-3 transition-colors duration-200 ${
                        isActive ? "bg-[#F6F9FC]" : ""
                      }`}
                    >
                      <span
                        className={`text-sm font-semibold leading-snug transition-colors duration-200 ${
                          isActive ? "text-[#1868A8]" : "text-[#0A2C4B]"
                        }`}
                      >
                        {item.name}
                      </span>

                      <span
                        className={`shrink-0 text-[#B27B34] transition-transform duration-200 ${
                          isActive ? "translate-x-0.5" : ""
                        }`}
                        aria-hidden="true"
                      >
                        →
                      </span>
                    </Link>
                  );
                })}
              </div>
            ))}
        </div>

        {/* HINTS */}
        <div className="flex items-center justify-between gap-4 border-t border-[#DAE7F1] bg-[#F6F9FC] px-5 py-3 font-mono text-[9px] uppercase tracking-wider text-slate-500">
          <span>↑ ↓ to navigate · Enter to open</span>
          <span>Esc to close</span>
        </div>
      </div>
    </div>
  );
}
