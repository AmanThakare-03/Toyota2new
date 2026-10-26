import React, { useState } from "react";
import { Link } from "react-router";
import cationCardImage from "../../assets/images/cation exchange resin.jpg";
import anionCardImage from "../../assets/images/anion-exchange-resins.jpg";
import mixedBedCardImage from "../../assets/images/mixed-bed-resins.jpg";
import softenerCardImage from "../../assets/images/water softner resin.jpg";
import specialtyCardImage from "../../assets/images/speciality resin.jpg";

const categories = [
  {
    code: "C-SERIES",
    number: "01 / 05",
    badge: "CATION // SAC & WAC",
    title: "Cation Exchange Resins",
    description:
      "Strong and weak acid cation resins for softening, DM-plant cation duty, dealkalisation and macroporous heavy-metal / ZLD service.",
    points: ["SAC & WAC · Na and H form", "Softening & demineralisation"],
    link: "View cation range",
    image: cationCardImage,
    alt: "Professional industrial packaging of water softener ion exchange resin, commercial 25-liter drum or bag labeled AGRION C-60 Strong Acid Cation Softener Resin",
  },
  {
    code: "A-SERIES",
    number: "02 / 05",
    badge: "ANION // SBA & WBA",
    title: "Anion Exchange Resins",
    description:
      "Strong and weak base anion resins, Type 1 and Type 2, for demineralisation, mixed-bed use and organic removal.",
    points: ["SBA & WBA · gel and macroporous", "DM plant & organic scavenging"],
    link: "View anion range",
    image: anionCardImage,
    alt: "Anion Exchange Resin macro photography",
  },
  {
    code: "MB-SERIES",
    number: "03 / 05",
    badge: "MIXED BED // ULTRAPURE",
    title: "Mixed Bed Resins",
    description:
      "Cation–anion mixed bed resins for polishing to ultrapure water and condensate polishing duty.",
    points: ["Ready-mixed ratios", "Ultrapure & condensate polishing"],
    link: "View mixed bed range",
    image: mixedBedCardImage,
    alt: "Mixed Bed Resins spherical beads",
  },
  {
    code: "WS-SERIES",
    number: "04 / 05",
    badge: "SOFTENER // BOILER SAFE",
    title: "Water Softener Resins",
    description:
      "Sodium-form strong acid cation resins for hardness removal and boiler-feed protection in softening plants.",
    points: ["Standard & high-crosslink grades", "Hardness removal"],
    link: "View softener range",
    image: softenerCardImage,
    alt: "Professional industrial packaging of heavy-duty water softener ion exchange resin, commercial packaging labeled AGRION C-80 High-Crosslink Softener Resin",
  },
  {
    code: "SP-SERIES",
    number: "05 / 05",
    badge: "SPECIALTY // CHELATING",
    title: "Specialty Resins",
    description:
      "Chelating, indicator and application-specific grades for metal recovery and specialised process duties.",
    points: ["Chelating & indicator grades", "Application-specific duty"],
    link: "View specialty range",
    image: specialtyCardImage,
    alt: "High-end laboratory glass conical flask and petri dish with multi-colored ion exchange specialty resin beads",
  },
];

const pillars = [
  {
    number: "01 / HERITAGE",
    badge: "EST. 1972",
    title: "Since 1972",
    text: "Over five decades of dedicated resin manufacturing from Vapi, Gujarat, delivering unmatched batch-to-batch repeatability.",
  },
  {
    number: "02 / QUALITY SYSTEMS",
    badge: "AUDITED",
    title: "ISO 9001 & 14001",
    text: "Certified quality & environmental management with rigorous multi-point analytical testing for particle uniformity and osmotic shock resistance.",
  },
  {
    number: "03 / DISPATCH AGILITY",
    badge: "FLEXIBLE",
    title: "25 L to bulk",
    text: "No upper limit; immediate ready-to-ship stock for emergency top-ups or full multi-ton industrial changes.",
  },
  {
    number: "04 / DATA TRANSPARENCY",
    badge: "CERTIFIED",
    title: "TDS with every grade",
    text: "Comprehensive Certificate of Analysis (COA) specifying bead size distribution, exchange capacity, and sieve analysis with each dispatch.",
  },
];

const faqs = [
  {
    q: "1. Which ion exchange resins do you manufacture?",
    a: "Cation, anion, mixed bed, water softener and specialty grades — covering softening, demineralisation, dealkalisation, mixed-bed polishing and specialised process duties.",
  },
  {
    q: "2. Do you provide a technical data sheet for each grade?",
    a: "Yes, every single batch is dispatched with comprehensive Certificate of Analysis and full TDS stating bead size distribution, total capacity, moisture retention and sieve analysis.",
  },
  {
    q: "3. What is the minimum order quantity?",
    a: "Minimum order quantity is 25 Litres, with dispatch scaling directly to multi-ton plant charges across Gujarat and pan-India.",
  },
  {
    q: "4. Can you match the grade I currently run?",
    a: "Yes. Send us your feedwater analysis, current resin specifications, and vessel volume, and our application chemists will confirm the exact matching Toyota AGRION equivalent.",
  },
  {
    q: "5. Are you a manufacturer or a trader?",
    a: "We are direct manufacturers with our own dedicated polymerization and functionalization synthesis facility in GIDC Vapi, Gujarat since 1972 — no repacking, no middle-layer.",
  },
];

function SectionLabel({ children }) {
  return (
    <div className="mb-4 flex items-center gap-3 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#B27B34]">
      <span className="h-px w-8 bg-[#B27B34]" />
      {children}
    </div>
  );
}

function ProductCard({ item }) {
  return (
    <article className="group overflow-hidden border border-[#DAE7F1] bg-white shadow-[0_16px_32px_-8px_rgba(10,44,75,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-12px_rgba(10,44,75,0.12)]">
      <div className="relative h-64 overflow-hidden bg-[#061729]">
        <img
          src={item.image}
          alt={item.alt}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#061729]/85 via-transparent to-transparent" />
        <div className="absolute left-5 top-5 flex w-[calc(100%-40px)] items-center justify-between font-mono text-[10px] tracking-widest text-white">
          <span className="border border-white/30 bg-[#061729]/70 px-3 py-2 backdrop-blur-sm">
            {item.code}
          </span>
          <span>{item.number}</span>
        </div>
        <span className="absolute bottom-5 left-5 border border-[#DF9B42]/50 bg-[#061729]/80 px-3 py-2 font-mono text-[9px] font-bold tracking-[0.14em] text-[#DF9B42] backdrop-blur-sm">
          {item.badge}
        </span>
      </div>

      <div className="p-7">
        <h3 className="mb-3 text-2xl font-bold tracking-tight text-[#0A2C4B] transition-colors group-hover:text-[#1868A8]">
          {item.title}
        </h3>
        <p className="min-h-[76px] text-sm leading-6 text-slate-600">
          {item.description}
        </p>

        <div className="my-6 border-y border-[#DAE7F1] py-4">
          {item.points.map((point) => (
            <div key={point} className="flex items-center gap-3 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-wide text-slate-600">
              <span className="h-1.5 w-1.5 bg-[#B27B34]" />
              {point}
            </div>
          ))}
        </div>

        <a
          href="#consultation-strip"
          className="inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-[#1868A8] transition hover:text-[#B27B34]"
        >
          {item.link}
          <span className="text-base transition-transform group-hover:translate-x-1">→</span>
        </a>
      </div>
    </article>
  );
}

function Product() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="min-h-screen bg-[#F6F9FC] text-[#0A2C4B] antialiased selection:bg-[#B27B34] selection:text-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=JetBrains+Mono:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');

        html { scroll-behavior: smooth; }
        body { margin: 0; font-family: "Plus Jakarta Sans", sans-serif; }
        .font-serif { font-family: "EB Garamond", serif; }
        .font-mono { font-family: "JetBrains Mono", monospace; }

        .bg-tech-blueprint {
          background-size: 36px 36px;
          background-image:
            linear-gradient(to right, rgba(10,44,75,.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(10,44,75,.04) 1px, transparent 1px);
        }

        .technical-lines {
          background-image: linear-gradient(90deg, rgba(255,255,255,.07) 1px, transparent 1px);
          background-size: 32px 100%;
        }

        .marquee-track {
          animation: marquee 28s linear infinite;
          width: max-content;
        }

        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none; }
        }
      `}</style>

      <main>
        {/* BREADCRUMB */}
        <div className="mx-auto max-w-[1440px] px-5 pt-7 lg:px-8">
          <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-widest text-slate-500">
            <Link className="hover:text-[#1868A8]" to="/">Home</Link>
            <span>/</span>
            <span className="text-[#0A2C4B]">Products</span>
          </div>
        </div>

        {/* HERO */}
        <section className="relative overflow-hidden border-b border-[#DAE7F1] bg-white pb-16 pt-12 lg:pb-20 lg:pt-14">
          <div className="absolute inset-0 bg-tech-blueprint pointer-events-none" />
          <div className="relative mx-auto max-w-[1440px] px-5 lg:px-8">
            <div className="max-w-5xl">
              <div className="mb-5 inline-flex items-center gap-2 border border-[#DAE7F1] bg-white/80 px-3 py-2 font-mono text-[9px] font-bold tracking-[0.16em] text-[#1868A8]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#B27B34]" />
                PRODUCTS // ION EXCHANGE PORTFOLIO
              </div>

              <h1 className="max-w-4xl text-5xl font-bold leading-[1.04] tracking-tight text-[#0A2C4B] sm:text-6xl lg:text-[72px]">
                High-Affinity{" "}
                <span className="font-serif font-medium italic text-[#1868A8]">
                  Ion Exchange
                </span>{" "}
                Resins
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-7 text-slate-600 lg:text-lg">
                A complete range of ion exchange resins for water treatment and
                industrial process applications — cation, anion, mixed bed,
                water softener and specialty grades, each supplied with its
                technical data sheet.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#product-portfolio"
                  className="bg-[#0A2C4B] px-6 py-4 font-mono text-[10px] font-bold uppercase tracking-wider text-white transition hover:bg-[#1868A8]"
                >
                  Explore Portfolio →
                </a>
                <a
                  href="#consultation-strip"
                  className="border border-[#0A2C4B] bg-white px-6 py-4 font-mono text-[10px] font-bold uppercase tracking-wider text-[#0A2C4B] transition hover:bg-[#F6F9FC]"
                >
                  Request a grade / TDS
                </a>
              </div>

              <div className="mt-12 grid max-w-3xl grid-cols-2 border-y border-[#DAE7F1] sm:grid-cols-4">
                {[
                  ["Catalog", "13 Production Grades"],
                  ["Packaging", "MOQ 25L to Bulk"],
                  ["Standards", "ISO 9001 & 14001"],
                  ["Facility", "GIDC Vapi Own Plant"],
                ].map(([label, value]) => (
                  <div key={label} className="border-r border-[#DAE7F1] px-4 py-5 first:pl-0 last:border-r-0">
                    <div className="font-mono text-[8px] font-bold uppercase tracking-widest text-[#B27B34]">
                      {label}
                    </div>
                    <div className="mt-2 text-xs font-bold text-[#0A2C4B]">{value}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* PRODUCTS */}
        <section id="product-portfolio" className="relative border-b border-[#DAE7F1] bg-[#F6F9FC] py-20 lg:py-24">
          <div className="mx-auto max-w-[1440px] px-5 lg:px-8">
            <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <div>
                <SectionLabel>PRODUCT SPECIFICATIONS // STANDARD GRADE PORTFOLIO</SectionLabel>
                <h2 className="text-4xl font-bold tracking-tight text-[#0A2C4B] sm:text-5xl">
                  Comprehensive Product Categories
                </h2>
              </div>
              <p className="max-w-md font-mono text-[10px] uppercase leading-5 tracking-wider text-slate-500">
                SHOWCASING 5 ARCHITECTURAL CHEMICAL FAMILIES
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {categories.map((item) => (
                <ProductCard key={item.code} item={item} />
              ))}
            </div>
          </div>
        </section>

        {/* PILLARS */}
        <section className="relative overflow-hidden border-b border-[#DAE7F1] bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-[1440px] px-5 lg:px-8">
            <div className="mb-12 max-w-3xl">
              <SectionLabel>COMPLIANCE &amp; INTEGRITY</SectionLabel>
              <h2 className="text-4xl font-bold tracking-tight text-[#0A2C4B] sm:text-5xl">
                Manufactured to specification, supplied direct
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-600">
                Over 50 years of dedicated resin synthesis delivering high
                mechanical bead durability, precise particle size uniformity,
                and guaranteed operating capacity.
              </p>
            </div>

            <div className="grid border-l border-t border-[#DAE7F1] sm:grid-cols-2 lg:grid-cols-4">
              {pillars.map((pillar) => (
                <article key={pillar.number} className="group border-b border-r border-[#DAE7F1] p-7 transition hover:bg-[#F6F9FC] lg:p-8">
                  <div className="mb-10 flex items-center justify-between font-mono text-[9px] font-bold tracking-wider text-slate-400">
                    <span>{pillar.number}</span>
                    <span className="text-[#B27B34]">{pillar.badge}</span>
                  </div>
                  <div className="mb-5 h-10 w-10 border border-[#B27B34]/40 bg-[#B27B34]/5" />
                  <h3 className="mb-3 text-2xl font-bold text-[#0A2C4B]">{pillar.title}</h3>
                  <p className="text-sm leading-6 text-slate-600">{pillar.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="relative border-b border-[#DAE7F1] bg-[#F6F9FC] py-20 lg:py-24">
          <div className="mx-auto max-w-4xl px-5 lg:px-8">
            <div className="mb-12 text-center">
              <SectionLabel>TECHNICAL KNOWLEDGE BASE</SectionLabel>
              <h2 className="text-4xl font-bold tracking-tight text-[#0A2C4B] sm:text-5xl">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="border-t border-[#DAE7F1] bg-white">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div key={faq.q} className="border-b border-[#DAE7F1]">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-5 px-6 py-6 text-left lg:px-8"
                    >
                      <span className="text-base font-bold text-[#0A2C4B] lg:text-lg">
                        {faq.q}
                      </span>
                      <span className={`flex h-8 w-8 shrink-0 items-center justify-center border border-[#DAE7F1] font-mono text-lg text-[#B27B34] transition ${isOpen ? "rotate-45" : ""}`}>
                        +
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-7 pr-16 text-sm leading-7 text-slate-600 lg:px-8 lg:pr-20">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="consultation-strip" className="relative overflow-hidden border-b border-[#DAE7F1] bg-gradient-to-r from-[#061729] via-[#0A2C4B] to-[#061729] py-14 text-white lg:py-16">
          <div className="technical-lines absolute inset-0 opacity-60" />
          <div className="relative mx-auto flex max-w-[1440px] flex-col items-start justify-between gap-8 px-5 lg:flex-row lg:items-center lg:px-8">
            <div>
              <div className="mb-3 font-mono text-[9px] font-bold tracking-[0.18em] text-[#DF9B42]">
                DIRECT FACTORY QUOTATION &amp; ANALYSIS
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Not sure which grade you need?
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">
                Send the grade and operating conditions you run today and we
                will confirm the right Toyota grade.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:info@toyotachemicals.co.in"
                className="bg-[#B27B34] px-6 py-4 font-mono text-[10px] font-bold uppercase tracking-wider text-white transition hover:bg-[#DF9B42]"
              >
                Send an enquiry
              </a>
              <a
                href="tel:+919016711708"
                className="border border-white/30 px-6 py-4 font-mono text-[10px] font-bold uppercase tracking-wider text-white transition hover:bg-white/10"
              >
                Call +91 90167 11708
              </a>
            </div>
          </div>
        </section>

        {/* CUSTOMERS */}
        
      </main></div>
  );
}

export default Product;
