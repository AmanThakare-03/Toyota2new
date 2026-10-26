import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import cationCardImage from "../../assets/images/cation exchange resin.jpg";
import anionCardImage from "../../assets/images/anion-exchange-resins.jpg";
import mixedBedCardImage from "../../assets/images/mixed-bed-resins.jpg";
import specialtyCardImage from "../../assets/images/speciality resin.jpg";
import dmPlantAppImage from "../../assets/images/Dm plant application.jpg";
import mixedBedAppImage from "../../assets/images/mixed bed condensate polishing.jpg";
import boilerAppImage from "../../assets/images/bolier feed water.jpg";

const grades = {
  ultrapure: {
    title: "AGRION MB-1151",
    description:
      "Premium ready-mixed bed of strong acid cation and Type 1 strong base anion resins, supplied in the working hydrogen and hydroxide forms, for polishing demineralised water and condensate to ultrapure quality.",
    type: "Mixed Bed",
    form: "H⁺ / OH⁻",
  },
  condensate: {
    title: "AGRION MB-1151",
    description:
      "Ready-mixed cation and anion resin for condensate polishing in power plants and other high-purity water duties.",
    type: "Mixed Bed",
    form: "H⁺ / OH⁻",
  },
  dm: {
    title: "AGRION MB-1151",
    description:
      "Ready-mixed mixed bed resin for final polishing after a DM plant, reducing residual conductivity and silica to very low levels.",
    type: "Mixed Bed",
    form: "H⁺ / OH⁻",
  },
  pharma: {
    title: "AGRION MB-1151",
    description:
      "Mixed bed resin for high-purity and ultrapure water production where very low conductivity, high resistivity and low silica are required.",
    type: "Mixed Bed",
    form: "H⁺ / OH⁻",
  },
  custom: {
    title: "AGRION MB-1151 — Application Review",
    description:
      "Share your inlet water quality, outlet specification and vessel details and our technical team will confirm the appropriate mixed bed supply.",
    type: "Mixed Bed",
    form: "To be confirmed",
  },
};

const faqs = [
  [
    "Can AGRION MB-1151 replace my current mixed bed resin?",
    "In most cases, yes. We match the cation and anion resin types, the cation-to-anion ratio and the working forms so the bed drops into the same duty. Send us your outlet water spec and current TDS and we’ll confirm the equivalent supply before you order.",
  ],
  [
    "What is a mixed bed resin, and why use it instead of a two-bed system?",
    "A two-bed system removes most dissolved ions but leaves a residual that limits final purity. A mixed bed intimately blends the cation and anion resins so the water sees many demineralisation stages at once, driving conductivity and silica far lower. This is why it is used for final polishing, condensate polishing and ultrapure water.",
  ],
  [
    "What water quality can a mixed bed achieve?",
    "A mixed bed polishes demineralised water and condensate to very low conductivity and high resistivity with trace silica — ultrapure quality. Exact figures depend on your inlet water and vessel design; share these and we’ll advise.",
  ],
  [
    "Can I buy the cation and anion resins separately to charge my own bed?",
    "Yes. MB-1151 is built from AGRION C-100 H cation and AGRION A-400 MB anion, both of which we supply separately if you prefer to mix on site.",
  ],
  [
    "Is MB-1151 suitable for condensate polishing?",
    "Yes. MB-1151 is used for condensate polishing in power plants as well as final polishing after a DM plant and ultrapure water production. Tell us your duty and we’ll confirm the right supply.",
  ],
  [
    "What cation-to-anion ratio and forms does MB-1151 use?",
    "MB-1151 is supplied ready-mixed in the working H⁺/OH⁻ forms, in the cation-to-anion ratio suited to polishing duty. The exact ratio and full specification are in the TDS.",
  ],
];

function Button({
  children,
  href = "#",
  goldButton = false,
  className = "",
}) {
  return (
    <a
      href={href}
      className={`interactive-btn inline-flex items-center justify-center px-6 py-3 text-xs font-semibold tracking-widest uppercase chamfer-tr shadow-sm ${
        goldButton
          ? "bg-[#B27B34] hover:bg-amber-700 text-white border border-[#B27B34]"
          : "bg-[#0A2C4B] hover:bg-[#06182B] text-white border border-[#0A2C4B]"
      } ${className}`}
    >
      {children}
    </a>
  );
}

function Spotlight({ children, className = "", ...props }) {
  return (
    <div className={`spotlight-surface ${className}`} {...props}>
      {children}
    </div>
  );
}

// function Header() {
//   return (
//     <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#0A2C4B]/10 shadow-sm">
//       <div className="bg-[#0A2C4B] text-white text-[10px] font-mono tracking-widest uppercase py-1 px-4 border-b border-[#B27B34]/30 flex justify-between items-center gap-4">
//         <div className="flex items-center gap-4">
//           <span className="flex items-center gap-1.5">
//             <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
//             PLANT ACTIVE • VAPI GIDC
//           </span>
//           <span className="hidden md:inline text-slate-400">|</span>
//           <span className="hidden md:inline text-slate-300">
//             ISO 9001:2015 &amp; ISO 14001:2015 COMPLIANT
//           </span>
//         </div>

//         <div className="flex items-center gap-4">
//           <span className="hidden sm:inline text-[#E5A855]">MIXED BED RESINS</span>
//           <a className="hover:text-[#E5A855]" href="tel:+919016711708">
//             +91 90167 11708
//           </a>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6">
//         <a className="flex items-center space-x-3 group shrink-0" href="#">
//           <div className="w-10 h-10 border border-[#0A2C4B] flex items-center justify-center relative bg-[#F6F9FC] group-hover:border-[#B27B34] transition-all">
//             <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#B27B34]" />
//             <span className="font-serif text-[#0A2C4B] font-bold text-xl">T</span>
//           </div>

//           <div className="flex flex-col tracking-tight">
//             <span className="font-serif font-bold text-xl sm:text-2xl text-[#0A2C4B] tracking-wider uppercase leading-none">
//               TOYOTA CHEMICAL
//             </span>
//             <span className="text-[9px] font-mono tracking-[0.25em] text-[#B27B34] uppercase mt-1 font-semibold">
//               Industries Pvt. Ltd. · Since 1972
//             </span>
//           </div>
//         </a>

//         <nav className="hidden lg:flex items-center space-x-7 text-xs font-semibold tracking-widest text-[#0A2C4B] uppercase">
//           <a className="text-[#B27B34] pb-1 border-b-2 border-[#B27B34]" href="#range-section">
//             Ion Exchange
//           </a>
//           <a className="hover:text-[#1868A8]" href="#range-section">Products</a>
//           <a className="hover:text-[#1868A8]" href="#compare">Technical Center</a>
//           <a className="hover:text-[#1868A8]" href="#why">Why Choose Us</a>
//           <a className="hover:text-[#1868A8]" href="/contact">Contact</a>
//         </nav>

//         <Button href="/contact" className="hidden sm:inline-flex px-5 py-2.5">
//           Discuss Requirement
//         </Button>
//       </div>
//     </header>
//   );
// }

function Hero() {
  return (
    <section className="relative bg-white border-b border-[#0A2C4B]/10 overflow-hidden pt-10 pb-20 blueprint-pattern">
      <div className="absolute top-6 right-8 pointer-events-none text-right font-mono text-[10px] text-slate-300 hidden lg:block tracking-widest">
        <div>SPEC_DOC // MIXED-BED-RESINS</div>
        <div>VAPI · GUJARAT · INDIA</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <nav className="flex items-center text-xs font-mono text-slate-500 mb-8 space-x-2">
          <Link className="hover:text-[#0A2C4B] hover:underline" to="/">Home</Link>
          <span className="text-slate-300">/</span>
          <a className="hover:text-[#0A2C4B] hover:underline" href="#range-section">Products</a>
          <span className="text-slate-300">/</span>
          <span className="text-[#B27B34]">Mixed Bed Resins</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center space-x-2 text-[11px] font-mono uppercase tracking-[0.25em] text-[#B27B34] font-semibold mb-4 px-3 py-1 bg-amber-50/70 border border-[#B27B34]/30 chamfer-tr">
              <span className="w-1.5 h-1.5 bg-[#B27B34] animate-pulse" />
              <span>MIXED BED RESINS</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#0A2C4B] font-bold leading-[1.12] tracking-tight mb-5">
              Mixed Bed
              <br />
              <span className="italic font-normal text-[#B27B34]">Resins</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed mb-5 max-w-2xl">
              Toyota Chemical Industries — a leading manufacturer of mixed bed ion exchange resins in India since 1972.
            </p>

            <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed mb-5 max-w-2xl">
              Ready-mixed cation and anion resin for polishing demineralised water and condensate to ultrapure quality — very low conductivity, high resistivity and low silica.
            </p>

            <p className="text-xs sm:text-sm font-semibold text-[#B27B34] leading-relaxed mb-8 max-w-2xl">
              AGRION MB-1151 is supplied ready-mixed in the working H⁺ / OH⁻ forms for dependable high-purity polishing.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <Button href="#finder" className="px-8 py-3.5">
                Find My Grade <span className="ml-2.5 text-[#B27B34]">→</span>
              </Button>
              <Button
                href="#range-section"
                className="px-8 py-3.5 !bg-white !text-[#0A2C4B] border border-[#0A2C4B]/20 hover:!bg-[#F6F9FC] hover:!border-[#B27B34]"
              >
                View Mixed Bed Range
              </Button>
            </div>

            <div className="flex flex-wrap gap-4 pt-2 border-t border-slate-200">
              {["Since 1972", "ISO 9001:2015", "ISO 14001:2015", "Made in India"].map((item) => (
                <span
                  key={item}
                  className="text-[10px] font-mono bg-[#F6F9FC] border border-slate-400 text-slate-700 px-3 py-1 font-semibold"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-white border border-[#0A2C4B]/15 shadow-lg p-4 sm:p-5 chamfer-tr-lg">
              <div className="overflow-hidden bg-[#F6F9FC] border border-slate-200">
                <div className="relative overflow-hidden border-b border-slate-200 bg-white h-64 sm:h-72 lg:h-80">
                  <img src={mixedBedCardImage} alt="Mixed bed ion exchange resin beads" className="w-full h-full object-cover object-center" />
                </div>
                <div className="p-5 sm:p-6">
                  <div className="text-[10px] font-mono text-[#B27B34] uppercase tracking-wider font-semibold mb-2">Product Family</div>
                  <div className="text-lg sm:text-xl font-serif font-bold text-[#0A2C4B]">MIXED BED ION EXCHANGE</div>
                  <div className="text-sm text-slate-500 mt-2 leading-relaxed">DM polishing, condensate polishing and ultrapure water</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GradeSelector() {
  const [need, setNeed] = useState("");
  const [result, setResult] = useState(null);

  const findGrade = () => {
    setResult({
      ...(grades[need] || grades.custom),
      note:
        need
          ? "AGRION MB-1151 is the ready-mixed grade for this polishing duty. Share your inlet and outlet water specifications for confirmation."
          : "Share your inlet water quality, outlet specification and vessel details for a confirmed recommendation.",
    });
  };

  return (
    <section className="py-14 bg-white border-b border-[#0A2C4B]/10" id="finder">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Spotlight className="border-2 border-[#0A2C4B]/15 bg-[#F6F9FC] p-7 sm:p-10 relative shadow-sm chamfer-tr-lg luxury-card">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-200 pb-6 mb-6 gap-4">
            <div>
              <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[#B27B34] font-semibold mb-1">
                <span>⚙</span>
                <span>MIXED BED RESIN FINDER</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0A2C4B]">
                Match a mixed bed resin to your process
              </h2>
            </div>

            <p className="text-xs text-slate-500 font-mono max-w-md">
              Select your polishing duty and get a quick AGRION recommendation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div>
              <label className="block text-[11px] font-mono uppercase tracking-widest text-[#0A2C4B] font-semibold mb-2">
                What is your duty?
              </label>
              <select
                value={need}
                onChange={(e) => setNeed(e.target.value)}
                className="w-full bg-white border border-slate-300 text-sm text-slate-800 py-3 px-3.5 focus:ring-2 focus:ring-[#B27B34] focus:border-[#B27B34]"
              >
                <option value="">Select a duty</option>
                <option value="ultrapure">Ultrapure water polishing</option>
                <option value="condensate">Condensate polishing</option>
                <option value="dm">Final polishing after DM plant</option>
                <option value="pharma">Pharmaceutical / high-purity water</option>
                <option value="custom">Something else / not listed</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-mono uppercase tracking-widest text-[#0A2C4B] font-semibold mb-2">
                Outlet water target
              </label>
              <input
                type="text"
                placeholder="e.g. low conductivity / high resistivity"
                className="w-full bg-white border border-slate-300 text-sm text-slate-800 py-3 px-3.5 focus:ring-2 focus:ring-[#B27B34] focus:border-[#B27B34] placeholder:text-slate-400 font-mono"
              />
              <p className="text-[10px] text-slate-500 mt-1">
                Optional — helps us confirm the duty.
              </p>
            </div>

            <div className="flex items-end">
              <button
                type="button"
                onClick={findGrade}
                className="interactive-btn w-full py-3 px-5 bg-[#0A2C4B] hover:bg-[#06182B] text-white text-xs font-semibold tracking-widest uppercase flex items-center justify-center gap-2 chamfer-tr shadow"
              >
                GET A RECOMMENDATION <span className="text-[#B27B34]">→</span>
              </button>
            </div>
          </div>

          {result && (
            <div className="mt-5 border-l-4 border-[#B27B34] bg-white p-5 shadow-sm">
              <div className="text-[10px] font-mono uppercase tracking-widest text-[#B27B34]">
                MATCH RESULT
              </div>
              <div className="font-serif text-xl font-bold text-[#0A2C4B]">
                {result.title}
              </div>
              <div className="text-xs text-slate-600 mt-1">
                {result.description}
              </div>
              <div className="text-xs font-mono font-bold text-[#1868A8] mt-2">
                {result.type} · {result.form}
              </div>
              <div className="text-[11px] text-slate-500 mt-2">
                {result.note}
              </div>
            </div>
          )}
        </Spotlight>
      </div>
    </section>
  );
}

function ProductCard() {
  return (
    <article className="bg-white border-2 border-[#B27B34] shadow-md relative overflow-hidden chamfer-tr-lg luxury-card group">
      <div className="absolute top-0 right-0 bg-[#B27B34] text-white text-[10px] font-mono tracking-widest uppercase font-bold py-1.5 px-6 shadow-sm z-20">
        PRIORITY GRADE
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 sm:p-8 items-center">
        <div className="md:col-span-4 relative">
          <div className="bg-amber-50/40 border-[#B27B34]/30 p-5 border relative overflow-hidden h-56 flex items-center justify-center">
            <div className="absolute inset-0 resin-grid opacity-30" />

            <div className="w-36 h-36 rounded-full border-2 border-[#B27B34] flex items-center justify-center bg-white/80 shadow-xl relative">
              <div className="text-center">
                <div className="font-serif text-4xl font-bold text-[#B27B34]">MB</div>
                <div className="text-[9px] font-mono tracking-widest text-[#0A2C4B] mt-1">
                  AGRION 1151
                </div>
              </div>
            </div>

            <span className="absolute top-2 left-2 bg-[#B27B34] text-[10px] font-mono text-white px-2.5 py-1 tracking-widest uppercase shadow-sm">
              READY-MIXED
            </span>
          </div>
        </div>

        <div className="md:col-span-8 space-y-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="font-serif text-3xl font-bold text-[#0A2C4B] leading-none">
                AGRION MB-1151
              </h3>
              <div className="text-xs font-mono font-semibold text-[#B27B34] uppercase tracking-wider mt-1.5">
                Mixed Bed · Cation + Anion · Ready-mixed · Ultrapure polishing
              </div>
            </div>

            <span className="text-[10px] font-mono px-2 py-1 bg-[#F6F9FC] border border-slate-300 text-slate-700 uppercase">
              Mixed Bed
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Premium ready-mixed bed of strong acid cation and Type 1 strong base anion resins, supplied in the working hydrogen and hydroxide forms, for polishing demineralised water and condensate to ultrapure quality — very low conductivity, high resistivity and low silica.
          </p>

          <div className="grid grid-cols-2 gap-2.5 font-mono text-xs">
            <div className="bg-[#F8FAFD] border border-slate-200 p-2.5">
              <span className="text-[10px] uppercase text-slate-400 block">Composition</span>
              <span className="font-bold text-[#0A2C4B]">
                Cation + Anion
              </span>
            </div>

            <div className="bg-[#F8FAFD] border border-slate-200 p-2.5">
              <span className="text-[10px] uppercase text-slate-400 block">Working form</span>
              <span className="font-bold text-[#0A2C4B]">H⁺ / OH⁻</span>
            </div>

            <div className="bg-[#F8FAFD] border border-slate-200 p-2.5">
              <span className="text-[10px] uppercase text-slate-400 block">Typical duty</span>
              <span className="font-bold text-[#0A2C4B]">Final polishing</span>
            </div>

            <div className="bg-[#F8FAFD] border border-slate-200 p-2.5">
              <span className="text-[10px] uppercase text-slate-400 block">Supply</span>
              <span className="font-bold text-[#0A2C4B]">Ready-mixed</span>
            </div>
          </div>

          <div className="pt-3 flex flex-wrap items-center gap-3">
            <Button href="/contact" goldButton className="px-5 py-2.5">
              Enquire About MB-1151
            </Button>

            <Button
              href="/contact"
              className="px-5 py-2.5 !bg-white !text-[#0A2C4B] border border-[#0A2C4B]/20 hover:!border-[#B27B34]"
            >
              Request TDS
            </Button>
          </div>

          <p className="text-[11px] text-slate-500">
            Full physical and chemical specifications, including the cation-to-anion ratio, are in the TDS.
          </p>
        </div>
      </div>
    </article>
  );
}

function MainContent() {
  return (
    <main className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 space-y-20">
          <Spotlight
            className="bg-white p-8 sm:p-10 border border-[#0A2C4B]/10 shadow-sm relative luxury-card"
            id="overview"
          >
            <div className="absolute top-0 left-0 w-24 h-1 bg-[#B27B34]" />

            <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#B27B34] font-bold mb-2">
              OVERVIEW
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0A2C4B] leading-snug mb-6">
              Mixed bed ion exchange resins for final water polishing
            </h2>

            <div className="text-slate-600 space-y-5 leading-relaxed text-sm sm:text-base">
              <p>
                A mixed bed resin is an intimately blended bed of strong acid cation and strong base anion exchange resins that remove cations and anions together, in the working hydrogen and hydroxide forms. Because the two resins are mixed as fine layers, the water passes through many exchange stages at once, polishing demineralised water and condensate to ultrapure quality — very low conductivity, high resistivity and low silica.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <div className="border-l-2 border-[#0A2C4B]/20 pl-4">
                  <h3 className="font-serif text-lg font-bold text-[#0A2C4B] mb-1">
                    Mixed bed vs two-bed demineralisation
                  </h3>
                  <p className="text-xs text-slate-600 leading-normal">
                    A two-bed system removes the bulk of dissolved ions but leaves a small residual that limits final purity. A mixed bed acts as many demineralisation stages in series, driving conductivity and silica far lower.
                  </p>
                </div>

                <div className="border-l-2 border-[#B27B34] pl-4">
                  <h3 className="font-serif text-lg font-bold text-[#0A2C4B] mb-1">
                    Ultrapure polishing
                  </h3>
                  <p className="text-xs text-slate-600 leading-normal">
                    Mixed beds are used as the final polishing step after a DM plant, for condensate polishing in power plants, and for ultrapure water in electronics and pharmaceutical processes.
                  </p>
                </div>
              </div>
            </div>
          </Spotlight>

          <section className="space-y-8" id="range-section">
            <div className="flex items-end justify-between border-b border-[#0A2C4B]/15 pb-4 gap-4">
              <div>
                <span className="text-xs font-mono text-[#B27B34] uppercase tracking-widest font-semibold block mb-1">
                  THE PRODUCT
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0A2C4B]">
                  Toyota Chemical Industries mixed bed resin
                </h2>
              </div>

              <span className="hidden sm:block text-xs font-mono bg-[#0A2C4B] text-white px-3 py-1 font-semibold">
                MIXED BED RANGE
              </span>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed -mt-3">
              Key data below; the full physical and chemical specification, including the cation-to-anion ratio, is in the technical data sheet.
            </p>

            <ProductCard />
          </section>

          <section className="space-y-8" id="components">
            <div className="border-b border-[#0A2C4B]/15 pb-3">
              <span className="text-[11px] font-mono text-[#B27B34] uppercase tracking-widest font-semibold block">
                CHARGE YOUR OWN BED
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0A2C4B]">
                What’s inside — and the component grades
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Prefer to mix on site? MB-1151’s performance comes from two AGRION grades you can also order separately.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Spotlight className="bg-white border border-[#0A2C4B]/10 shadow-sm p-6 chamfer-tr luxury-card">
                <div className="text-[10px] font-mono uppercase tracking-widest text-[#B27B34] font-bold">
                  CATION COMPONENT
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#0A2C4B] mt-2">
                  AGRION C-100 H
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mt-3">
                  Strong acid cation · H⁺ form — removes cations such as calcium, magnesium and sodium.
                </p>
                <a
                  href="/contact"
                  className="inline-block mt-4 text-xs font-mono font-bold text-[#1868A8] hover:text-[#B27B34]"
                >
                  View cation grade →
                </a>
              </Spotlight>

              <Spotlight className="bg-white border border-[#0A2C4B]/10 shadow-sm p-6 chamfer-tr luxury-card">
                <div className="text-[10px] font-mono uppercase tracking-widest text-[#B27B34] font-bold">
                  ANION COMPONENT
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#0A2C4B] mt-2">
                  AGRION A-400 MB
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mt-3">
                  Type 1 strong base anion · OH⁻ form — removes anions and silica.
                </p>
                <a
                  href="/contact"
                  className="inline-block mt-4 text-xs font-mono font-bold text-[#1868A8] hover:text-[#B27B34]"
                >
                  View anion grade →
                </a>
              </Spotlight>
            </div>
          </section>

          <section className="space-y-6" id="value">
            <div className="border-b border-[#0A2C4B]/15 pb-3">
              <span className="text-[11px] font-mono text-[#B27B34] uppercase tracking-widest font-semibold block">
                PERFORMANCE VALUE
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0A2C4B]">
                Why mixed bed resins are valued
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Mixed bed resins are valued for the water quality they deliver in a single, compact polishing step. In a treatment train they effectively:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                ["01", "Ultrapure polishing", "Polish demineralised water and condensate to ultrapure quality."],
                ["02", "Very low conductivity", "Drive conductivity very low and resistivity high."],
                ["03", "Trace silica removal", "Reduce silica to trace levels for high-purity duties."],
                ["04", "Downstream protection", "Help protect turbines, boilers and high-purity processes downstream."],
              ].map(([num, title, text]) => (
                <Spotlight
                  key={num}
                  className="bg-white p-6 border border-[#0A2C4B]/10 shadow-sm chamfer-tr luxury-card"
                >
                  <div className="w-8 h-8 bg-[#F6F9FC] border border-[#B27B34] text-[#0A2C4B] flex items-center justify-center font-mono font-bold text-xs mb-4">
                    {num}
                  </div>
                  <h3 className="font-serif font-bold text-[#0A2C4B] text-lg mb-2">
                    {title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{text}</p>
                </Spotlight>
              ))}
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              Typical applications include final polishing after a DM plant, condensate polishing in power generation, and ultrapure water production in electronics, semiconductor and pharmaceutical processes.
            </p>
          </section>

          <section className="space-y-6" id="toyota-mb">
            <div className="border-b border-[#0A2C4B]/15 pb-3">
              <span className="text-[11px] font-mono text-[#B27B34] uppercase tracking-widest font-semibold block">
                TOYOTA CHEMICAL INDUSTRIES
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0A2C4B]">
                Mixed bed resins from Toyota Chemical Industries
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              At Toyota Chemical Industries Pvt Ltd, we manufacture the AGRION mixed bed resin ready-mixed from our own cation and anion grades, engineered for dependable ultrapure polishing and consistent results. Choose the right mixed bed resin to achieve the water quality your process demands.
            </p>
          </section>

          <section className="space-y-6" id="compare">
            <div className="flex items-end justify-between border-b border-[#0A2C4B]/15 pb-3">
              <div>
                <span className="text-[11px] font-mono text-[#B27B34] uppercase tracking-widest font-semibold block">
                  AT A GLANCE
                </span>
                <h2 className="font-serif text-2xl font-bold text-[#0A2C4B]">
                  Which mixed bed resin for your plant?
                </h2>
              </div>
              <span className="text-[11px] font-mono text-slate-400">COMPONENT MATRIX</span>
            </div>

            <div className="overflow-x-auto border border-[#0A2C4B]/15 bg-white shadow-sm">
              <table className="w-full min-w-[720px] text-left text-xs text-slate-700">
                <thead className="bg-[#0A2C4B] text-white font-mono text-[11px] uppercase tracking-wider">
                  <tr>
                    <th className="py-4 px-4">Component</th>
                    <th className="py-4 px-4">AGRION Grade</th>
                    <th className="py-4 px-4">Working Form</th>
                    <th className="py-4 px-4">Removes / Duty</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-200 font-mono">
                  <tr>
                    <td className="py-4 px-4 font-bold text-[#B27B34]">Cation resin</td>
                    <td className="py-4 px-4">C-100 H</td>
                    <td className="py-4 px-4">H⁺</td>
                    <td className="py-4 px-4 font-sans">
                      Cations — calcium, magnesium, sodium
                    </td>
                  </tr>

                  <tr className="bg-amber-50/20">
                    <td className="py-4 px-4 font-bold text-[#0A2C4B]">Anion resin</td>
                    <td className="py-4 px-4">A-400 MB</td>
                    <td className="py-4 px-4">OH⁻</td>
                    <td className="py-4 px-4 font-sans">
                      Anions and silica
                    </td>
                  </tr>

                  <tr>
                    <td className="py-4 px-4 font-bold text-[#B27B34]">Ready-mixed bed</td>
                    <td className="py-4 px-4">MB-1151</td>
                    <td className="py-4 px-4">H⁺ / OH⁻</td>
                    <td className="py-4 px-4 font-sans">
                      Both — polishes to ultrapure quality
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                ["DM Plant", "Final polishing"],
                ["Power", "Condensate polishing"],
                ["High Purity", "Ultrapure water"],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="bg-[#F6F9FC] border border-slate-200 p-4 chamfer-tr"
                >
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#B27B34] font-bold">
                    {title}
                  </div>
                  <div className="text-sm font-serif font-bold text-[#0A2C4B] mt-1">
                    {text}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-6" id="why">
            <div className="border-b border-[#0A2C4B]/15 pb-3">
              <span className="text-[11px] font-mono text-[#B27B34] uppercase tracking-widest font-semibold block">
                WHY CHOOSE US
              </span>
              <h2 className="font-serif text-2xl font-bold text-[#0A2C4B]">
                Why choose Toyota Chemical Industries for mixed bed resins
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                ["01 / HERITAGE", "Since 1972", "Over five decades of manufacturing experience"],
                ["02 / QUALITY SYSTEMS", "ISO 9001 & 14001", "Certified quality & environmental management"],
                ["03 / DISPATCH SCALE", "25 L to bulk", "No upper limit; small top-ups to full changes"],
                ["04 / TECHNICAL DATA", "TDS with every grade", "Composition, ratio and exchange capacity"],
              ].map(([eyebrow, title, text]) => (
                <Spotlight
                  key={title}
                  className="p-6 bg-white border border-[#0A2C4B]/10 shadow-sm chamfer-tr luxury-card"
                >
                  <div className="font-mono text-[#B27B34] text-xs uppercase font-bold tracking-wider mb-1">
                    {eyebrow}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#0A2C4B] mb-1.5">
                    {title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{text}</p>
                </Spotlight>
              ))}
            </div>
          </section>

          <section className="space-y-4" id="faq">
            <div className="border-b border-[#0A2C4B]/15 pb-3">
              <span className="text-[11px] font-mono text-[#B27B34] uppercase tracking-widest font-semibold block">
                TECHNICAL KNOWLEDGE BASE
              </span>
              <h2 className="font-serif text-2xl font-bold text-[#0A2C4B]">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-3">
              {faqs.map(([question, answer], index) => (
                <details
                  key={question}
                  className="group bg-white border border-[#0A2C4B]/10 p-5 chamfer-tr faq-row"
                  open={index === 0}
                >
                  <summary className="flex justify-between items-center font-serif font-bold text-[#0A2C4B] cursor-pointer list-none text-base">
                    <span>{question}</span>
                    <span className="text-[#B27B34] font-mono text-xl shrink-0 ml-4">
                      +
                    </span>
                  </summary>

                  <div className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed pt-3 border-t border-slate-100">
                    {answer}
                  </div>
                </details>
              ))}
            </div>
          </section>
        </div>

        <aside className="lg:col-span-4">
          <div className="sticky top-28 space-y-6">
            <Spotlight className="bg-[#0A2C4B] text-white p-7 chamfer-tr-lg shadow-2xl border-t-2 border-[#B27B34] luxury-card">
              <div className="flex items-center space-x-2 text-[#B27B34] text-[10px] font-mono tracking-widest uppercase mb-2">
                <span>⚙</span>
                <span>TECHNICAL SUPPORT</span>
              </div>

              <h3 className="font-serif text-2xl font-bold mb-2 text-white">
                Confirm your mixed bed requirement
              </h3>

              <p className="text-xs text-slate-300 leading-relaxed mb-6 font-light">
                Send your outlet water specification and the resin you run today — we’ll confirm the matching AGRION supply and TDS.
              </p>

              <div className="space-y-3">
                <Button href="mailto:info@toyotachemicals.co.in" goldButton className="w-full">
                  Send an enquiry
                </Button>

                <a
                  href="https://wa.me/919898701010"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="interactive-btn w-full flex items-center justify-center py-2.5 px-4 bg-transparent hover:bg-white/10 text-white text-xs font-semibold uppercase tracking-widest chamfer-tr border border-white/40"
                >
                  WhatsApp us
                </a>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-700/80 text-center">
                <span className="text-[10px] font-mono text-slate-400 block mb-1">
                  DIRECT TECHNICAL DESK
                </span>
                <a
                  className="text-xs font-mono text-[#E5A855] hover:text-white"
                  href="tel:+919016711708"
                >
                  +91 90167 11708
                </a>
              </div>
            </Spotlight>

            <Spotlight className="bg-white border border-[#0A2C4B]/10 p-6 shadow-sm chamfer-tr luxury-card">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
                <h4 className="text-xs font-mono uppercase tracking-widest text-[#0A2C4B] font-bold">
                  Mixed Bed Specs
                </h4>
                <span className="text-[9px] font-mono bg-[#F6F9FC] text-slate-600 px-2 py-0.5 border border-slate-200">
                  MB-1151
                </span>
              </div>

              <dl className="space-y-2.5 text-xs font-mono">
                {[
                  ["Product:", "AGRION MB-1151"],
                  ["Composition:", "Cation + Anion"],
                  ["Forms:", "H⁺ / OH⁻"],
                  ["Duty:", "Ultrapure polishing"],
                  ["Supply:", "Ready-mixed"],
                ].map(([dt, dd]) => (
                  <div
                    key={dt}
                    className="flex justify-between py-1 border-b border-slate-100 px-1 gap-4"
                  >
                    <dt className="text-slate-500">{dt}</dt>
                    <dd className="font-semibold text-[#0A2C4B] text-right">
                      {dd}
                    </dd>
                  </div>
                ))}
              </dl>
            </Spotlight>

            <Spotlight className="bg-white border border-[#0A2C4B]/10 p-6 shadow-sm chamfer-tr luxury-card">
              <h4 className="text-xs font-mono uppercase tracking-widest text-[#0A2C4B] font-bold border-b border-slate-200 pb-3 mb-3">
                Related products
              </h4>

              <ul className="text-xs font-medium space-y-2.5 text-slate-700">
                {[
                  { item: "Cation Exchange Resins", href: "/products/cationexchangeresins", image: cationCardImage },
                  { item: "Anion Exchange Resins", href: "/products/anionexchangeresins", image: anionCardImage },
                  { item: "Water Softener Resins", href: "/products/watersoftenerresins", image: specialtyCardImage },
                  { item: "Specialty Resins", href: "/products/specialtyresins", image: mixedBedCardImage },
                ].map(({ item, href, image }) => (
                  <li key={item}>
                    <a className="hover:text-[#1868A8] flex items-center gap-3 py-1" href={href}>
                      <img src={image} alt={item} className="h-12 w-12 object-cover border border-slate-200 shrink-0" />
                      <span className="flex-1">{item}</span>
                      <span className="text-[#B27B34] font-bold">→</span>
                    </a>
                  </li>
                ))}
              </ul>
            </Spotlight>

            <Spotlight className="bg-white border border-[#0A2C4B]/10 p-6 shadow-sm chamfer-tr luxury-card">
              <h4 className="text-xs font-mono uppercase tracking-widest text-[#0A2C4B] font-bold border-b border-slate-200 pb-3 mb-3">
                Related applications
              </h4>

              <ul className="text-xs font-medium space-y-2.5 text-slate-700">
                {[
                  { item: "Mixed Bed / Condensate Polishing", href: "/applications/mixed-bed-condensate-polishing", image: mixedBedAppImage },
                  { item: "DM Plant / Demineralisation", href: "/applications/dm-plant-resin", image: dmPlantAppImage },
                  { item: "Ultrapure Water", href: "/applications/boiler-feed-water-treatment", image: boilerAppImage },
                ].map(({ item, href, image }) => (
                  <li key={item}>
                    <a className="hover:text-[#1868A8] flex items-center gap-3 py-1" href={href}>
                      <img src={image} alt={item} className="h-12 w-12 object-cover border border-slate-200 shrink-0" />
                      <span className="flex-1">{item}</span>
                      <span className="text-[#B27B34] font-bold">→</span>
                    </a>
                  </li>
                ))}
              </ul>
            </Spotlight>

            <div className="bg-[#F6F9FC] border border-slate-200 p-5 chamfer-tr">
              <div className="text-[10px] font-mono uppercase tracking-widest text-slate-500 mb-3 font-semibold">
                Why Toyota
              </div>

              <div className="flex flex-wrap gap-2 text-[10px] font-mono uppercase">
                {["Since 1972", "ISO 9001", "ISO 14001", "25 L to bulk", "Made in India"].map(
                  (item) => (
                    <span
                      key={item}
                      className="bg-white px-2.5 py-1 border border-slate-300 text-[#0A2C4B] font-semibold"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
// function Footer() {
//   return (
//     <>
//       <section
//         className="bg-[#06182B] text-white py-16 border-t-2 border-[#B27B34] relative overflow-hidden"
//         id="enquiry-form"
//       >
//         <div className="absolute inset-0 blueprint-pattern opacity-10 pointer-events-none" />

//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//           <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
//             <div className="max-w-2xl">
//               <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[#B27B34] font-bold mb-3">
//                 <span className="w-2 h-2 bg-[#B27B34] animate-pulse" />
//                 <span>DIRECT TECHNICAL SUPPORT</span>
//               </div>

//               <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
//                 Need a mixed bed resin for ultrapure polishing?
//               </h2>

//               <p className="text-xs sm:text-sm text-slate-300 mt-3 font-light leading-relaxed">
//                 Share your outlet water specification and current resin. Our technical team will confirm the right AGRION supply and TDS.
//               </p>
//             </div>

//             <div className="flex flex-wrap gap-4 shrink-0">
//               <Button href="mailto:info@toyotachemicals.co.in" goldButton className="px-8 py-4">
//                 Send an enquiry
//               </Button>

//               <a
//                 href="https://wa.me/919898701010"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="interactive-btn px-8 py-4 bg-transparent hover:bg-white/10 text-white border border-slate-400 hover:border-white text-xs font-semibold tracking-widest uppercase chamfer-tr"
//               >
//                 WhatsApp us
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>

//       

      {/* <footer className="bg-[#040E1B] text-white pt-16 pb-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 border border-[#B27B34] flex items-center justify-center font-serif text-[#B27B34] font-bold">
                  T
                </div>
                <span className="font-serif font-bold text-xl tracking-wider text-white uppercase">
                  TOYOTA CHEMICAL
                </span>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed max-w-sm font-light">
                Toyota Chemical Industries Pvt Ltd supplies AGRION cation, anion and mixed bed ion exchange resins for water treatment, ultrapure polishing and industrial applications.
              </p>

              <div className="text-[11px] font-mono text-[#B27B34]">
                ISO 9001:2015 · ISO 14001:2015
              </div>
            </div>

            <div className="lg:col-span-2 space-y-3">
              <div className="text-xs font-mono uppercase tracking-widest text-[#B27B34] font-bold">
                Related Products
              </div>

              <ul className="text-xs space-y-2.5 text-slate-400 font-light">
                {[
                  "Cation Exchange Resins",
                  "Anion Exchange Resins",
                  "Mixed Bed Resins",
                  "Water Softener Resins",
                  "Specialty Resins",
                ].map((item) => (
                  <li key={item}>
                    <a className="hover:text-white" href="#range-section">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2 space-y-3">
              <div className="text-xs font-mono uppercase tracking-widest text-[#B27B34] font-bold">
                Applications
              </div>

              <ul className="text-xs space-y-2.5 text-slate-400 font-light">
                {[
                  "Mixed Bed Polishing",
                  "Condensate Polishing",
                  "DM Plant",
                  "Ultrapure Water",
                ].map((item) => (
                  <li key={item}>
                    <a className="hover:text-white" href="#compare">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-4 space-y-3">
              <div className="text-xs font-mono uppercase tracking-widest text-[#B27B34] font-bold">
                Works &amp; Administration
              </div>

              <address className="not-italic text-xs text-slate-400 space-y-2.5 leading-relaxed font-light">
                <p>
                  Plot No. 100, Vapi–Silvassa Road, GIDC Vapi, Gujarat 396195, India
                </p>

                <p>
                  <span className="block text-slate-500 text-[10px]">PHONE:</span>
                  <a
                    className="hover:text-[#B27B34] text-slate-300 font-semibold"
                    href="tel:+919016711708"
                  >
                    +91 90167 11708
                  </a>
                </p>

                <p>
                  <span className="block text-slate-500 text-[10px]">INQUIRIES:</span>
                  <a
                    className="hover:text-[#B27B34] text-slate-300"
                    href="mailto:info@toyotachemicals.co.in"
                  >
                    info@toyotachemicals.co.in
                  </a>
                </p>
              </address>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-slate-500 gap-4">
            <div>
              © 2026 Toyota Chemical Industries Private Limited. All Rights Reserved.
            </div>

            <div className="flex flex-wrap justify-center gap-5">
              <a className="hover:text-slate-300" href="#">Legal Notice</a>
              <a className="hover:text-slate-300" href="#">Privacy Policy</a>
              <a className="hover:text-slate-300" href="#">Quality Compliance</a>
              <a className="hover:text-slate-300" href="#">Sustainability Charter</a>
            </div>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-t border-[#0A2C4B]/15 p-2 sm:hidden flex gap-2">
        <a
          href="#finder"
          className="flex-1 bg-[#0A2C4B] text-white text-center py-3 text-[10px] font-mono font-bold tracking-widest uppercase chamfer-tr"
        >
          Find Resin
        </a>
        <a
          href="tel:+919016711708"
          className="flex-1 bg-[#B27B34] text-white text-center py-3 text-[10px] font-mono font-bold tracking-widest uppercase chamfer-tr"
        >
          Call
        </a>
      </div>
    </>
  );
} */}

export default function App() {
  useEffect(() => {
    const surfaces = document.querySelectorAll(".spotlight-surface");
    const handlers = [];

    surfaces.forEach((surface) => {
      const handler = (e) => {
        const rect = surface.getBoundingClientRect();
        surface.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
        surface.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
      };

      surface.addEventListener("mousemove", handler);
      handlers.push([surface, handler]);
    });

    return () => {
      handlers.forEach(([surface, handler]) => {
        surface.removeEventListener("mousemove", handler);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#F6F9FC] text-slate-800 font-sans antialiased selection:bg-[#B27B34] selection:text-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Playfair+Display:ital,wght@0,600;0,700;1,400&display=swap');

        :root {
          --navy: #0A2C4B;
          --deep-navy: #06182B;
          --blue: #1868A8;
          --gold: #B27B34;
          --gold-light: #E5A855;
          --ice: #F6F9FC;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: var(--ice);
        }

        .font-serif {
          font-family: "Playfair Display", Georgia, serif;
        }

        .font-mono {
          font-family: "DM Mono", Consolas, monospace;
        }

        .chamfer-tr {
          clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%);
        }

        .chamfer-tr-lg {
          clip-path: polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 0 100%);
        }

        .blueprint-pattern {
          background-image:
            linear-gradient(rgba(10,44,75,.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(10,44,75,.035) 1px, transparent 1px);
          background-size: 28px 28px;
        }

        .resin-grid {
          background-image:
            radial-gradient(circle, rgba(10,44,75,.13) 1px, transparent 1px);
          background-size: 14px 14px;
        }

        .spotlight-surface {
          position: relative;
          overflow: hidden;
        }

        .spotlight-surface::after {
          content: "";
          position: absolute;
          width: 220px;
          height: 220px;
          left: var(--mouse-x, -300px);
          top: var(--mouse-y, -300px);
          transform: translate(-50%, -50%);
          background: radial-gradient(circle, rgba(229,168,85,.11), transparent 68%);
          pointer-events: none;
          transition: opacity .2s ease;
        }

        .luxury-card {
          transition:
            transform .25s ease,
            box-shadow .25s ease,
            border-color .25s ease;
        }

        .luxury-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 18px 40px rgba(6,24,43,.10);
        }

        .interactive-btn {
          transition:
            transform .2s ease,
            box-shadow .2s ease,
            background-color .2s ease;
        }

        .interactive-btn:hover {
          transform: translateY(-1px);
        }

        details summary::-webkit-details-marker {
          display: none;
        }

        details[open] summary .faq-icon {
          transform: rotate(45deg);
        }

        @media (max-width: 640px) {
          .hero-frame-group {
            margin-top: 12px;
          }
        }
`}</style>

      {/* <Header /> */}
      <Hero />
      <GradeSelector />
      <MainContent />
{/* <Footer /> */}
    </div>
  );
}
