

import React, { useState } from "react";
import { Link } from "react-router";
import manojGOzaImage from "../../assets/images/directors/manoj-g-oza.png";
import kumarSOzaImage from "../../assets/images/directors/kumar-s-oza.png";
import pariksheetMOzaImage from "../../assets/images/directors/pariksheet-m-oza.png";

const faqData = [
  {
    question:
      "1. How long has Toyota Chemical Industries been manufacturing ion exchange resins?",
    answer:
      "Toyota Chemical Industries has manufactured ion exchange resins in India since 1972 — more than five decades.",
  },
  {
    question:
      "2. What types of ion exchange resins does Toyota Chemical Industries manufacture?",
    answer:
      "A complete range — cation exchange resins, anion exchange resins, mixed bed resins, DM plant resins and water softener resins.",
  },
  {
    question: "3. Where is Toyota Chemical Industries located?",
    answer:
      "Our manufacturing facility is in GIDC Vapi, Gujarat, with a marketing office in Mumbai. We serve industries across India and beyond.",
  },
  {
    question:
      "4. Is Toyota Chemical Industries an ISO certified manufacturer?",
    answer:
      "Yes — quality and environmental management are certified to ISO 9001:2015 and ISO 14001:2015.",
  },
  {
    question:
      "5. Which industries does Toyota Chemical Industries serve?",
    answer:
      "Sectors including water treatment, pharmaceuticals, food processing and power generation, among other industrial water-treatment applications.",
  },
];

const milestones = [
  {
    year: "1972",
    number: "01 / 04",
    title: "Foundation",
    description:
      "Toyota Chemical Industries established in Vapi, Gujarat with an initial focus on primary cation resins.",
  },
  {
    year: "1995",
    number: "02 / 04",
    title: "Expansion",
    description:
      "Expanded manufacturing capacity to meet growing domestic demand and installed secondary functionalization reactors.",
  },
  {
    year: "2024",
    number: "03 / 04",
    title: "ISO Certification",
    description:
      "Achieved ISO 9001 quality management and ISO 14001 environmental safety accreditations across all units.",
  },
  {
    year: "2024",
    number: "04 / 04",
    title: "Facility Modernization",
    description:
      "Major expansion of production facilities with modern automated synthesis and automated sieve-screening technology.",
  },
];

const leadership = [
  {
    initials: "MO",
    image: manojGOzaImage,
    name: "Manoj G Oza",
    role: "Managing Director",
    description:
      "With over 50 years of experience in the water treatment industry, Mr Oza has led Toyota Chemical Industries with a vision for innovation and excellence. A technocrat with a degree in Chemical Engineering from UDCT Mumbai, his vast and rich experience has been the foundation of the company.",
    meta: "UDCT MUMBAI // 50+ YRS EXPERIENCE",
  },
  {
    initials: "KO",
    image: kumarSOzaImage,
    name: "Kumar S Oza",
    role: "Jt Managing Director & Technical Director",
    description:
      "Mr Oza brings extensive research expertise spanning over four decades in polymer chemistry, and has been instrumental in developing the company's ion exchange resin formulations. He ensures that production excellence remains the prime focus of the organisation.",
    meta: "POLYMER RESEARCH // 40+ YRS EXPERIENCE",
  },
  {
    initials: "PO",
    image: pariksheetMOzaImage,
    name: "Pariksheet M Oza",
    role: "Director",
    description:
      "With over 18 years of experience in the pharmaceutical and chemical industries, Mr Oza focuses on procurement strategy, vendor development and operational efficiency — achieving both cost optimisation and quality improvement.",
    meta: "SUPPLY CHAIN & OPERATIONS // 18+ YRS EXP",
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

const products = [
  "Cation Exchange Resins",
  "Anion Exchange Resins",
  "Mixed Bed Resins",
  "DM Plant Resins",
  "Water Softener Resins",
];

const resources = [
  "Ion Exchange Resin Manufacturers in India",
  "Best Ion Exchange Resin Manufacturers 2025",
  "DM Plant Resin Suppliers in India",
  "Industrial Water Treatment Resins",
  "How to Choose Resin Manufacturer",
  "Cation vs Anion Exchange Resins",
  "Water Softener Resin Guide",
  "Cation Exchange Resins",
  "Anion Exchange Resins",
  "Mixed Bed Resins",
  "Water Softener Resins",
];

function AboutUs() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq((current) => (current === index ? null : index));
  };

  return (
    <>
      {/* =========================================================
          GLOBAL STYLES
      ========================================================= */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..700;1,400..700&family=IBM+Plex+Mono:ital,wght@0,400;0,500;0,600;1,400&family=Inter:wght@300;400;500;600;700&display=swap');

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          font-family: Inter, sans-serif;
        }

        .font-inter {
          font-family: Inter, sans-serif;
        }

        .font-garamond {
          font-family: "EB Garamond", serif;
        }

        .font-mono-custom {
          font-family: "IBM Plex Mono", monospace;
        }

        .bg-grid-pattern {
          background-size: 32px 32px;
          background-image:
            linear-gradient(
              to right,
              rgba(218, 231, 241, 0.5) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(218, 231, 241, 0.5) 1px,
              transparent 1px
            );
        }

        .blueprint-dots {
          background-image:
            radial-gradient(#B27B34 1px, transparent 1px);
          background-size: 16px 16px;
        }

        .tech-border {
          border: 1px solid #DAE7F1;
          position: relative;
        }

        .tech-corner-gold::before,
        .tech-corner-gold::after {
          content: "";
          position: absolute;
          width: 6px;
          height: 6px;
          border-color: #B27B34;
          pointer-events: none;
        }

        .tech-corner-gold::before {
          top: -1px;
          left: -1px;
          border-top: 2px solid #B27B34;
          border-left: 2px solid #B27B34;
        }

        .tech-corner-gold::after {
          bottom: -1px;
          right: -1px;
          border-bottom: 2px solid #B27B34;
          border-right: 2px solid #B27B34;
        }

        .shadow-blueprint {
          box-shadow:
            0 0 0 1px #DAE7F1,
            0 4px 20px -2px rgba(10, 44, 75, 0.05);
        }

        .shadow-elevated {
          box-shadow:
            0 20px 35px -10px rgba(10, 44, 75, 0.12),
            0 1px 3px rgba(0, 0, 0, 0.05);
        }
      `}</style>

      <div className="min-h-screen bg-[#F7FAFD] text-slate-800 font-inter antialiased selection:bg-[#B27B34] selection:text-white">

       
        

        {/* =========================================================
            BREADCRUMB
        ========================================================= */}
        <section className="border-b border-[#DAE7F1] bg-white/50 text-[11px] font-mono-custom text-slate-500 py-2.5 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">

            <div>
              <Link className="hover:text-[#0A2C4B]" to="/">
                Home
              </Link>

              <span className="mx-1.5 text-slate-300">›</span>

              <span className="text-[#0A2C4B] font-medium">
                About Us
              </span>
            </div>

            <div className="text-slate-400">
              SEC_REF // 20.3895° N, 72.9106° E · PLANT 01
            </div>

          </div>
        </section>

        <main id="about">

          {/* =========================================================
              HERO
          ========================================================= */}
          <section className="relative bg-[#F7FAFD] bg-grid-pattern pt-12 pb-20 border-b border-[#DAE7F1] overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-8">

              <div className="max-w-5xl mx-auto">

                <div className="space-y-6">

                  <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white border border-[#B27B34]/30 text-[11px] font-mono-custom tracking-widest text-[#B27B34] uppercase">
                    <span className="w-1.5 h-1.5 bg-[#B27B34]" />
                    <span>
                      // HERITAGE & MANUFACTURING EXCELLENCE // EST. 1972
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0A2C4B]">
                      About Us
                    </h1>

                    <p className="text-2xl sm:text-3xl font-garamond italic text-[#1868A8] font-normal">
                      Ion Exchange Resin Manufacturers in India Since 1972
                    </p>
                  </div>

                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-light">
                    For over five decades, Toyota Chemical Industries has been at
                    the forefront of ion exchange resin technology, serving
                    industries across India and beyond.
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">

                    <InfoBox
                      label="Heritage"
                      value="50+ Years Exp."
                    />

                    <InfoBox
                      label="Catalog"
                      value="13 Grades"
                    />

                    <InfoBox
                      label="Certified"
                      value="ISO 9001 & 14001"
                    />

                    <InfoBox
                      label="Facility"
                      value="GIDC Vapi Plant"
                    />

                  </div>

                  <div className="p-4 bg-white border-l-2 border-[#B27B34] border-y border-r border-[#DAE7F1] text-xs font-mono-custom text-slate-600 flex flex-wrap items-center justify-between gap-3">
                    <span>
                      PREFER DIRECT DIALOGUE? REACH TECHNICAL SALES:
                    </span>

                    <a
                      href="tel:+919016711708"
                      className="font-bold text-[#0A2C4B] hover:text-[#1868A8]"
                    >
                      +91 90167 11708 →
                    </a>
                  </div>

                </div>

              </div>
            </div>
          </section>

          {/* =========================================================
              OUR STORY
          ========================================================= */}
          

          {/* =========================================================
              VISION / MISSION
          ========================================================= */}
          <section className="py-20 bg-[#F7FAFD] bg-grid-pattern border-b border-[#DAE7F1]">
            <div className="max-w-7xl mx-auto px-4 sm:px-8">

              <div className="text-center max-w-2xl mx-auto mb-14">

                <span className="text-[11px] font-mono-custom tracking-widest text-[#B27B34] uppercase font-semibold">
                  // STRATEGIC FOUNDATION //
                </span>

                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0A2C4B] mt-1">
                  Purpose & Direction
                </h2>

              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                <PurposeCard
                  icon="◎"
                  label="// ASPIRATION"
                  title="Our Vision"
                  text="To be the global leader in ion exchange resin technology, setting industry benchmarks for quality, innovation, and sustainable practices while contributing to a cleaner, healthier world."
                  iconColor="blue"
                />

                <PurposeCard
                  icon="◈"
                  label="// OBJECTIVE"
                  title="Our Mission"
                  text="To deliver superior ion exchange solutions that exceed customer expectations through continuous research, operational excellence, and a dedicated team of professionals committed to quality and service."
                  iconColor="gold"
                />

              </div>
            </div>
          </section>

          {/* =========================================================
              TIMELINE
          ========================================================= */}
          <section className="py-20 bg-white border-b border-[#DAE7F1]">
            <div className="max-w-7xl mx-auto px-4 sm:px-8">

              <div className="mb-14">
                <span className="text-[11px] font-mono-custom tracking-widest text-[#B27B34] uppercase font-semibold">
                  // CHRONOLOGICAL MILESTONES //
                </span>

                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0A2C4B] mt-1">
                  Our Journey: Milestones of Excellence
                </h2>

                <p className="text-slate-500 text-sm font-mono-custom mt-2">
                  Five decades of systematic scaling, technical patents, and precision synthesis.
                </p>
              </div>

              <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                <div className="hidden lg:block absolute top-7 left-8 right-8 h-0.5 bg-[#DAE7F1] -z-0" />

                {milestones.map((item) => (
                  <div
                    key={`${item.year}-${item.number}`}
                    className="relative z-10 tech-border tech-corner-gold bg-white p-6 shadow-blueprint hover:-translate-y-1 transition-transform"
                  >
                    <div className="flex items-center justify-between mb-4">

                      <span className="px-3 py-1 bg-[#0A2C4B] text-[#B27B34] font-mono-custom font-bold text-sm tracking-wider">
                        {item.year}
                      </span>

                      <span className="text-[10px] font-mono-custom text-slate-400">
                        {item.number}
                      </span>

                    </div>

                    <h3 className="text-lg font-bold text-[#0A2C4B] mb-2">
                      {item.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}

              </div>
            </div>
          </section>

          {/* =========================================================
              LEADERSHIP
          ========================================================= */}
          <section className="py-20 bg-[#F7FAFD] bg-grid-pattern border-b border-[#DAE7F1]">
            <div className="max-w-7xl mx-auto px-4 sm:px-8">

              <div className="max-w-3xl mb-14">

                <span className="text-[11px] font-mono-custom tracking-widest text-[#B27B34] uppercase font-semibold">
                  // EXECUTIVE LEADERSHIP //
                </span>

                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0A2C4B] mt-1">
                  Leadership: Board of Directors
                </h2>

                <p className="text-slate-600 mt-3 text-base">
                  Our leadership team brings together decades of experience in chemistry, manufacturing, and business management.
                </p>

              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {leadership.map((person) => (
                  <div
                    key={person.name}
                    className="tech-border tech-corner-gold bg-white p-8 shadow-blueprint flex flex-col justify-between hover:shadow-elevated transition-shadow"
                  >
                    <div>

                      <div className="mb-6 overflow-hidden border border-[#DAE7F1] bg-[#F7FAFD]">
                        <div className="aspect-[4/3] w-full flex items-center justify-center bg-white p-3">
                          <img
                            src={person.image}
                            alt={person.name}
                            className="h-full w-full object-contain object-center"
                          />
                        </div>
                      </div>

                      <div className="mb-6">
                        <h3 className="text-xl font-bold text-[#0A2C4B] leading-tight">
                          {person.name}
                        </h3>

                        <p className="text-xs font-mono-custom text-[#B27B34] uppercase font-semibold tracking-wider mt-1">
                          {person.role}
                        </p>
                      </div>

                      <p className="text-slate-600 text-sm leading-relaxed">
                        {person.description}
                      </p>

                    </div>

                    <div className="mt-6 pt-4 border-t border-[#DAE7F1] text-[10px] font-mono-custom text-slate-400">
                      {person.meta}
                    </div>

                  </div>
                ))}

              </div>
            </div>
          </section>

          {/* =========================================================
              VALUES
          ========================================================= */}
          <section className="py-20 bg-white border-b border-[#DAE7F1]">
            <div className="max-w-7xl mx-auto px-4 sm:px-8">

              <div className="text-center max-w-2xl mx-auto mb-14">

                <span className="text-[11px] font-mono-custom tracking-widest text-[#B27B34] uppercase font-semibold">
                  // GUIDING PRINCIPLES //
                </span>

                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0A2C4B] mt-1">
                  Our Values: What Drives Us
                </h2>

              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                <ValueCard
                  number="01"
                  label="INTEGRITY"
                  title="Quality First"
                  text="Uncompromising commitment to product excellence and customer satisfaction through precise spherical bead synthesis."
                />

                <ValueCard
                  number="02"
                  label="PARTNERSHIP"
                  title="Customer Focus"
                  text="Building lasting partnerships through understanding and meeting customer needs with custom batch parameters."
                />

                <ValueCard
                  number="03"
                  label="INGENUITY"
                  title="Innovation"
                  text="Continuous improvement and dedicated R&D investment to stay ahead of evolving water treatment standards."
                />

              </div>
            </div>
          </section>

          {/* =========================================================
              COMPLIANCE
          ========================================================= */}
          <section className="py-16 bg-[#F7FAFD] border-b border-[#DAE7F1]">
            <div className="max-w-7xl mx-auto px-4 sm:px-8">

              <div className="text-center max-w-3xl mx-auto mb-12">

                <span className="text-[11px] font-mono-custom tracking-widest text-[#B27B34] uppercase font-semibold">
                  — COMPLIANCE & INTEGRITY —
                </span>

                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0A2C4B] mt-1">
                  Manufactured to specification, supplied direct
                </h2>

                <p className="text-sm text-slate-600 mt-2">
                  Over 50 years of dedicated resin synthesis delivering high mechanical bead durability, precise particle size uniformity, and guaranteed operating capacity.
                </p>

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

                <ComplianceCard
                  number="01"
                  label="HERITAGE"
                  status="EST. 1972"
                  title="Since 1972"
                  text="Over five decades of dedicated resin manufacturing from Vapi, Gujarat, delivering unmatched batch-to-batch repeatability."
                  statusClass="text-[#B27B34]"
                />

                <ComplianceCard
                  number="02"
                  label="QUALITY SYSTEMS"
                  status="AUDITED"
                  title="ISO 9001 & 14001"
                  text="Certified quality & environmental management with rigorous multi-point analytical testing for bead integrity and osmotic shock resistance."
                  statusClass="text-[#1868A8]"
                />

                <ComplianceCard
                  number="03"
                  label="DISPATCH AGILITY"
                  status="FLEXIBLE"
                  title="25 L to bulk"
                  text="No upper limit; immediate ready-to-ship stock for emergency top-ups or full multi-ton industrial changes."
                  statusClass="text-emerald-700"
                />

                <ComplianceCard
                  number="04"
                  label="DATA TRANSPARENCY"
                  status="CERTIFIED"
                  title="TDS with every grade"
                  text="Comprehensive Certificate of Analysis (COA) specifying bead size distribution, exchange capacity, and sieve analysis."
                  statusClass="text-amber-700"
                />

              </div>
            </div>
          </section>

          {/* =========================================================
              FAQ
          ========================================================= */}
          <section className="py-20 bg-white border-b border-[#DAE7F1]">
            <div className="max-w-4xl mx-auto px-4 sm:px-8">

              <div className="text-center mb-12">

                <span className="text-[11px] font-mono-custom tracking-widest text-[#B27B34] uppercase font-semibold">
                  — TECHNICAL KNOWLEDGE BASE —
                </span>

                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0A2C4B] mt-1">
                  FAQ: Frequently Asked Questions
                </h2>

              </div>

              <div className="space-y-3">

                {faqData.map((faq, index) => {
                  const isOpen = openFaq === index;

                  return (
                    <div
                      key={faq.question}
                      className="tech-border bg-[#F7FAFD]/50 hover:bg-[#F7FAFD] transition-colors"
                    >
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        onClick={() => toggleFaq(index)}
                        className="w-full p-4 text-left flex items-center justify-between focus:outline-none"
                      >
                        <span className="text-sm sm:text-base font-semibold text-[#0A2C4B] pr-4">
                          {faq.question}
                        </span>

                        <span
                          className={`text-[#B27B34] text-xl font-bold ml-4 transition-transform duration-200 ${
                            isOpen ? "rotate-180" : "rotate-0"
                          }`}
                        >
                          {isOpen ? "−" : "+"}
                        </span>
                      </button>

                      {isOpen && (
                        <div className="px-4 pb-4 text-sm text-slate-600 border-t border-[#DAE7F1]/50 pt-3">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}

              </div>
            </div>
          </section>

          {/* =========================================================
              CONTACT CTA
          ========================================================= */}
          <section
            className="bg-[#0A2C4B] text-white py-12 px-4 sm:px-8 border-b border-[#061C30]"
            id="contact"
          >
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">

              <div>
                <span className="text-[10px] font-mono-custom tracking-widest text-[#B27B34] uppercase block mb-1">
                  ■ DIRECT FACTORY QUOTATION & ANALYSIS
                </span>

                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  Not sure which grade you need?
                </h3>

                <p className="text-sm text-slate-300 mt-1 max-w-xl">
                  Send the grade and operating conditions you run today and we will confirm the right Toyota grade.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">

                <a
                  href="mailto:info@toyotachemicals.co.in"
                  className="px-6 py-3 bg-[#B27B34] hover:bg-[#D49B4B] text-[#0A2C4B] font-mono-custom font-bold text-xs uppercase tracking-wider transition-colors shadow"
                >
                  Send an Enquiry
                </a>

                <a
                  href="tel:+919016711708"
                  className="px-6 py-3 border border-white/30 hover:border-white font-mono-custom font-semibold text-xs tracking-wider transition-colors"
                >
                  CALL +91 90167 11708
                </a>

              </div>
            </div>
          </section>

          {/* =========================================================
              CUSTOMERS
          ========================================================= */}
          {/*  */}
          {/*  */}
        
        </main>
        
      </div>
    </>
  );
}

/* =========================================================
   REUSABLE COMPONENTS
========================================================= */

function InfoBox({ label, value }) {
  return (
    <div className="tech-border tech-corner-gold bg-white p-3 shadow-blueprint">
      <span className="text-[10px] font-mono-custom text-slate-400 block uppercase">
        {label}
      </span>

      <span className="text-sm font-bold text-[#0A2C4B]">
        {value}
      </span>
    </div>
  );
}

function SectionHeading({ eyebrow, title }) {
  return (
    <div className="mb-12">
      <div className="text-[11px] font-mono-custom tracking-widest text-[#B27B34] uppercase font-semibold">
        {eyebrow}
      </div>

      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0A2C4B] mt-1">
        {title}
      </h2>
    </div>
  );
}

function PurposeCard({
  icon,
  label,
  title,
  text,
  iconColor = "blue",
}) {
  return (
    <div className="tech-border tech-corner-gold bg-white p-8 sm:p-10 shadow-blueprint hover:shadow-elevated transition-shadow duration-300">

      <div
        className={`w-12 h-12 rounded bg-[#EFF6FC] border border-[#DAE7F1] flex items-center justify-center text-2xl mb-6 ${
          iconColor === "gold"
            ? "text-[#B27B34]"
            : "text-[#1868A8]"
        }`}
      >
        {icon}
      </div>

      <div
        className={`text-[10px] font-mono-custom uppercase tracking-widest font-semibold mb-1 ${
          iconColor === "gold"
            ? "text-[#1868A8]"
            : "text-[#B27B34]"
        }`}
      >
        {label}
      </div>

      <h3 className="text-2xl font-bold text-[#0A2C4B] mb-4 font-garamond">
        {title}
      </h3>

      <p className="text-slate-600 leading-relaxed">
        {text}
      </p>
    </div>
  );
}

function ValueCard({ number, label, title, text }) {
  return (
    <div className="tech-border tech-corner-gold p-8 bg-[#F7FAFD]/50 hover:bg-white transition-colors duration-300">

      <span className="text-xs font-mono-custom font-semibold text-[#1868A8] tracking-widest uppercase block mb-2">
        {number} // {label}
      </span>

      <h3 className="text-xl font-bold text-[#0A2C4B] mb-3">
        {title}
      </h3>

      <p className="text-sm text-slate-600 leading-relaxed">
        {text}
      </p>
    </div>
  );
}

function ComplianceCard({
  number,
  label,
  status,
  title,
  text,
  statusClass,
}) {
  return (
    <div className="tech-border tech-corner-gold bg-white p-5 shadow-sm">

      <div className="flex justify-between items-center text-[10px] font-mono-custom mb-2">

        <span className="text-[#0A2C4B] font-bold">
          {number} / {label}
        </span>

        <span className={`${statusClass} font-semibold`}>
          {status}
        </span>

      </div>

      <h3 className="text-base font-bold text-[#0A2C4B] mb-1">
        {title}
      </h3>

      <p className="text-xs text-slate-500 leading-relaxed">
        {text}
      </p>
    </div>
  );
}

export default AboutUs;