import React from "react";
import { Link } from "react-router";

import {
  footerCompanyLinks,
  footerLegalLinks,
  footerResinCategories,
} from "../../config/navigation";
import Logo from "../common/Logo";

export default function Footer() {
  return (
    <footer className="bg-[#06182B] text-white">
      {/* ================= TOP FOOTER ================= */}
      <div className="mx-auto max-w-[1440px] px-5 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">

          {/* ================= COMPANY ================= */}
          <div>
            {/* Logo */}
            <Logo variant="footer" />

            {/* Description */}
            <p className="mt-7 max-w-md text-sm leading-7 text-slate-300">
              Engineering precision synthetic polymers for high-purity water
              operations. Serving power, chemical, textile, and pharmaceutical
              leaders from our ISO-certified production works in GIDC Vapi
              since 1972.
            </p>

            {/* ISO Badge */}
            <div className="mt-7 inline-flex items-center border border-[#B27B34]/50 bg-[#0A2C4B] px-4 py-3">
              <div className="mr-3 flex h-9 w-9 items-center justify-center border border-[#B27B34] text-[#DF9B42]">
                ✓
              </div>

              <div>
                <div className="font-mono text-[8px] font-bold uppercase tracking-[0.12em] text-[#DF9B42]">
                  CERTIFIED QUALITY
                </div>

                <div className="mt-1 text-xs font-semibold text-white">
                  ISO 9001:2015 · ISO 14001:2015
                </div>
              </div>
            </div>
          </div>

          {/* ================= RESIN CATEGORIES ================= */}
          <div>
            <div className="mb-6 font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-[#DF9B42]">
              RESIN CATEGORIES
            </div>

            <ul className="space-y-4">
              {footerResinCategories.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="group flex items-start gap-3 text-sm leading-5 text-slate-300 transition-colors hover:text-white"
                  >
                    <span className="mt-1 text-[#B27B34] transition-transform group-hover:translate-x-1">
                      →
                    </span>

                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= COMPANY LINKS ================= */}
          <div>
            <div className="mb-6 font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-[#DF9B42]">
              COMPANY
            </div>

            <div className="grid grid-cols-2 gap-x-5 gap-y-3">
              {footerCompanyLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-xs text-slate-400 transition-colors hover:text-[#DF9B42]"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* ================= CONTACT ================= */}
          <div>
            <div className="mb-6 font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-[#DF9B42]">
              CONTACT FACTORY
            </div>

            {/* Address */}
            <div className="mb-6">
              <div className="mb-2 font-mono text-[8px] uppercase tracking-wider text-slate-500">
                FACTORY ADDRESS
              </div>

              <p className="text-sm leading-6 text-slate-300">
                Plot No. 100, Vapi-Silvassa Road,
                <br />
                GIDC Vapi,
                <br />
                Gujarat 396195,
                <br />
                India
              </p>
            </div>

            <div className="mb-6">
              <div className="mb-2 font-mono text-[8px] uppercase tracking-wider text-slate-500">
                Marketing Office
              </div>

              <p className="text-sm leading-6 text-slate-300">
                Extn 1.2, Sidhpura Co-Op Ind. Estate, S.V. Road,
                <br />
                Goregaon (W), Mumbai 400104,
                <br />
                Maharashtra, 
                <br />
                India
              </p>
            </div>

            {/* Phone */}
            <div className="mb-5">
              <div className="mb-2 font-mono text-[8px] uppercase tracking-wider text-slate-500">
                PHONE
              </div>

              <a
                href="tel:+919016711708"
                className="text-base font-semibold text-white transition-colors hover:text-[#DF9B42]"
              >
                +91 90167 11708
              </a>
              <br />
              <a
                href="tel:02249678234"
                className="text-base font-semibold text-white transition-colors hover:text-[#DF9B42]"
              >
                022 4967 8234
              </a>
            </div>

            {/* Email */}
            <div>
              <div className="mb-2 font-mono text-[8px] uppercase tracking-wider text-slate-500">
                EMAIL
              </div>

              <a
                href="mailto:info@toyotachemicals.co.in"
                className="break-all text-sm text-slate-300 transition-colors hover:text-[#DF9B42]"
              >
                info@toyotachemicals.co.in
              </a>
            </div>

            {/* CTA */}
            <a
  href="mailto:info@toyotachemicals.co.in?subject=Request%20for%20Quote"
  className="mt-7 inline-flex w-full items-center justify-center gap-3 bg-[#B27B34] px-6 py-4 font-mono text-[9px] font-bold uppercase tracking-[0.12em] text-white transition-all hover:bg-[#DF9B42]"
>
  Request a Quote
  <span className="text-base">→</span>
</a>
          </div>
        </div>
      </div>

      {/* ================= GOLD DIVIDER ================= */}
      <div className="mx-auto max-w-[1440px] px-5 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-[#B27B34] to-transparent opacity-60" />
      </div>

      {/* ================= FOOTER BOTTOM ================= */}
      <div className="mx-auto max-w-[1440px] px-5 py-7 lg:px-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

          {/* Copyright */}
          <p className="font-mono text-[9px] uppercase tracking-wider text-slate-500">
            © 2026 Toyota Chemical Industries Pvt. Ltd. All Rights Reserved.
          </p>

          {/* Legal Links */}
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {footerLegalLinks.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="font-mono text-[9px] uppercase tracking-wider text-slate-500 transition-colors hover:text-[#DF9B42]"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ================= MOBILE ACTION BAR ================= */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-[#B27B34]/30 bg-[#06182B]/95 p-3 backdrop-blur-md md:hidden">
        <div className="grid grid-cols-2 gap-2">
          <a
            href="tel:+919016711708"
            className="flex items-center justify-center gap-2 border border-white/20 px-4 py-3 font-mono text-[9px] font-bold uppercase tracking-wider text-white"
          >
            <span>☎</span>
            Call Factory
          </a>

          <Link
            to="/contact"
            className="flex items-center justify-center gap-2 bg-[#B27B34] px-4 py-3 font-mono text-[9px] font-bold uppercase tracking-wider text-white"
          >
            Request Quote
            <span>→</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}