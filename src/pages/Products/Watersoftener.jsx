import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import cationCardImage from "../../assets/images/cation exchange resin.jpg";
import anionCardImage from "../../assets/images/anion-exchange-resins.jpg";
import mixedBedCardImage from "../../assets/images/mixed-bed-resins.jpg";
import specialtyCardImage from "../../assets/images/speciality resin.jpg";
import softenerCardImage from "../../assets/images/water softner resin.jpg";
import waterSofteningAppImage from "../../assets/images/water softning.jpg";
import boilerAppImage from "../../assets/images/bolier feed water.jpg";
import dmPlantAppImage from "../../assets/images/Dm plant application.jpg";
import { tdsHref } from "../../config/tdsDownloads";

const grades = {
  std: {
    title: "AGRION C-60",
    description:
      "Standard softening-grade gel strong acid cation resin, in the sodium form, for hardness removal in water softening plants.",
    type: "Strong Acid Cation",
    form: "Sodium (Na⁺)",
    capacity: "1.7 meq/ml",
  },
  hard: {
    title: "AGRION C-80",
    description:
      "Higher-crosslink softening grade with a tighter bead, for harder water, higher temperatures and heavier cycling — the heavy-duty softener choice.",
    type: "Strong Acid Cation",
    form: "Sodium (Na⁺)",
    capacity: "1.8 meq/ml",
  },
  boiler: {
    title: "AGRION C-60",
    description:
      "Standard softening-grade gel strong acid cation resin, in the sodium form, for hardness removal in water softening plants.",
    type: "Strong Acid Cation",
    form: "Sodium (Na⁺)",
    capacity: "1.7 meq/ml",
  },
  cooling: {
    title: "AGRION C-80",
    description:
      "Higher-crosslink softening grade with a tighter bead, for harder water, higher temperatures and heavier cycling — the heavy-duty softener choice.",
    type: "Strong Acid Cation",
    form: "Sodium (Na⁺)",
    capacity: "1.8 meq/ml",
  },
};

const allGrades = [
  {
    id: "c-60",
    name: "AGRION C-60",
    sub: "Strong Acid Cation · Softener Grade · Sodium Form",
    desc:
      "Standard softening-grade gel strong acid cation resin, in the sodium form, for hardness removal in water softening plants.",
    type: "Strong Acid Cation",
    form: "Sodium (Na⁺)",
    capacity: "1.7 meq/ml",
    tag: "STANDARD SOFTENING",
    accent: "navy",
  },
  {
    id: "c-80",
    name: "AGRION C-80",
    sub: "Strong Acid Cation · High-Crosslink Softener · Sodium Form",
    desc:
      "Higher-crosslink softening grade with a tighter bead, for harder water, higher temperatures and heavier cycling — the heavy-duty softener choice.",
    type: "Strong Acid Cation",
    form: "Sodium (Na⁺)",
    capacity: "1.8 meq/ml",
    tag: "PRIORITY GRADE",
    accent: "gold",
  },
];

const faqs = [
  [
    "Can AGRION softener resins replace the resin in my softener?",
    "In most cases, yes. Match on ionic form (sodium), total exchange capacity and bead size, and an AGRION grade drops straight into your softener. Send us the grade and operating conditions you run today — or your current TDS — and we’ll confirm the equivalent grade.",
  ],
  [
    "Which grade should I use — C-60 or C-80?",
    "AGRION C-60 for standard softening, and AGRION C-80 — a higher-crosslink grade — for harder water, higher temperatures or heavier cycling where longer working life matters.",
  ],
  [
    "Why has my water softener stopped removing hardness?",
    "Usually the resin is fouled (iron, organics), degraded by chlorine or age, or simply exhausted beyond regeneration. A resin change to a fresh softener grade restores capacity. Share your symptoms and water details and we’ll advise whether a change is due.",
  ],
  [
    "How is softener resin regenerated?",
    "On the sodium cycle: when hardness starts to break through, the resin is regenerated with a common salt (brine) solution, which recharges it with sodium and returns it to service.",
  ],
  [
    "What bead size and exchange capacity do the softener grades have?",
    "Particle size is 0.3–1.2 mm. AGRION C-60 has a total exchange capacity of 1.7 meq/ml and C-80 of 1.8 meq/ml. Full specifications are in each grade’s TDS.",
  ],
  [
    "Can I use these grades for boiler feed or cooling-water softening?",
    "Yes. Both grades are used for boiler feed protection and cooling / process-water softening; C-80 suits the harder or hotter duties.",
  ],
];

const customerNames = [
  "GAIL",
  "Indian Oil",
  "HPCL",
  "SAIL",
  "JSW Steel",
  "NPCIL",
  "National Fertilizers Ltd (NFL)",
  "IFFCO",
  "Sun Pharma",
  "Pidilite",
  "Mahagenco",
  "Rashtriya Ispat Nigam Ltd (RINL)",
  "PSPCL",
  "CSPGCL",
  "Hindustan Platinum",
  "Polychem Industries",
  "Oceanic Solvents",
  "Steam House",
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
//           <span className="hidden sm:inline text-[#E5A855]">
//             WATER SOFTENER RESINS
//           </span>
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
//           Request TDS
//         </Button>
//       </div>
//     </header>
//   );
// }

function Hero() {
  return (
    <section className="relative bg-white border-b border-[#0A2C4B]/10 overflow-hidden pt-10 pb-20 blueprint-pattern">
      <div className="absolute top-6 right-8 pointer-events-none text-right font-mono text-[10px] text-slate-300 hidden lg:block tracking-widest">
        <div>SPEC_DOC // AGRION-SOFTENER</div>
        <div>VAPI · GUJARAT · INDIA</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <nav className="flex items-center text-xs font-mono text-slate-500 mb-8 space-x-2">
          <Link className="hover:text-[#0A2C4B] hover:underline" to="/">Home</Link>
          <span className="text-slate-300">/</span>
          <a className="hover:text-[#0A2C4B] hover:underline" href="#range-section">Products</a>
          <span className="text-slate-300">/</span>
          <span className="text-[#B27B34]">Water Softener Resins</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center space-x-2 text-[11px] font-mono uppercase tracking-[0.25em] text-[#B27B34] font-semibold mb-4 px-3 py-1 bg-amber-50/70 border border-[#B27B34]/30 chamfer-tr">
              <span className="w-1.5 h-1.5 bg-[#B27B34] animate-pulse" />
              <span>WATER SOFTENER RESINS</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#0A2C4B] font-bold leading-[1.12] tracking-tight mb-5">
              Water Softener
              <br />
              <span className="italic font-normal text-[#B27B34]">Resins</span>
            </h1>

            <div className="text-xs sm:text-sm font-mono text-[#1868A8] uppercase tracking-wider font-semibold mb-5 flex items-center gap-2">
              <span className="h-px w-6 bg-[#1868A8]" />
              <span>SODIUM-FORM STRONG ACID CATION</span>
            </div>

            <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed mb-8 max-w-2xl">
              Sodium-form strong acid cation resins that remove hardness — calcium and magnesium — to protect boilers, cooling systems and process equipment. Two AGRION softener grades, regenerable with common salt.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <Button href="#finder" className="px-8 py-3.5">
                Find My Grade <span className="ml-2.5 text-[#B27B34]">→</span>
              </Button>
              <Button
                href="#range-section"
                className="px-8 py-3.5 !bg-white !text-[#0A2C4B] border border-[#0A2C4B]/20 hover:!bg-[#F6F9FC] hover:!border-[#B27B34]"
              >
                Technical Datasheets
              </Button>
            </div>

            <div className="pt-6 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                ["Manufacturing", "Since 1972", "India"],
                ["Grades", "Two", "AGRION"],
                ["Particle Size", "0.3–1.2", "mm"],
                ["C-80 Capacity", "1.8", "meq/ml"],
              ].map(([label, value, unit]) => (
                <div
                  key={label}
                  className="p-3 bg-[#F6F9FC] border border-slate-200 hover:border-[#B27B34]/60 hover:-translate-y-1 hover:shadow-md transition-all rounded-sm"
                >
                  <span className="block text-[10px] font-mono uppercase text-slate-400">
                    {label}
                  </span>
                  <span className="font-serif text-xl font-bold text-[#0A2C4B]">
                    {value}{" "}
                    <span className="text-xs font-mono font-normal text-slate-500">
                      {unit}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-white border border-[#0A2C4B]/15 shadow-lg p-4 sm:p-5 chamfer-tr-lg">
              <div className="overflow-hidden bg-[#F6F9FC] border border-slate-200">
                <div className="relative overflow-hidden border-b border-slate-200 bg-white h-64 sm:h-72 lg:h-80">
                  <img src={softenerCardImage} alt="Water softener ion exchange resin beads" className="w-full h-full object-cover object-center" />
                </div>
                <div className="p-5 sm:p-6">
                  <div className="text-[10px] font-mono text-[#B27B34] uppercase tracking-wider font-semibold mb-2">Product Family</div>
                  <div className="text-lg sm:text-xl font-serif font-bold text-[#0A2C4B]">SODIUM-FORM SOFTENER</div>
                  <div className="text-sm text-slate-500 mt-2 leading-relaxed">Hardness removal for industrial water softeners</div>
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
  const [application, setApplication] = useState("");
  const [capacity, setCapacity] = useState("");
  const [result, setResult] = useState(null);

  const findGrade = () => {
    let key = application;

    if (!key && capacity) {
      const numeric = parseFloat(String(capacity).replace(/[^0-9.]/g, ""));
      if (!Number.isNaN(numeric)) {
        key = Math.abs(1.8 - numeric) < Math.abs(1.7 - numeric) ? "hard" : "std";
      }
    }

    if (!key) {
      setResult(null);
      return;
    }

    const selected = grades[key];
    setResult({
      ...selected,
      note: capacity ? `Capacity noted: ${capacity}.` : "",
    });
  };

  return (
    <section className="py-14 bg-white border-b border-[#0A2C4B]/10" id="finder">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Spotlight className="border-2 border-[#0A2C4B]/15 bg-[#F6F9FC] p-7 sm:p-10 relative shadow-sm chamfer-tr-lg luxury-card">
          <div className="absolute top-2 left-2 text-[#B27B34] font-mono text-[10px]">+</div>
          <div className="absolute top-2 right-2 text-[#B27B34] font-mono text-[10px]">+</div>
          <div className="absolute bottom-2 left-2 text-[#B27B34] font-mono text-[10px]">+</div>
          <div className="absolute bottom-2 right-2 text-[#B27B34] font-mono text-[10px]">+</div>

          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-200 pb-6 mb-6 gap-4">
            <div>
              <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[#B27B34] font-semibold mb-1">
                <span>⚙</span>
                <span>WATER SOFTENER GRADE FINDER</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0A2C4B]">
                Match a water softener resin to your duty
              </h2>
            </div>
            <p className="text-xs text-slate-500 font-mono max-w-md">
              Tell us your softening duty, or your current resin’s capacity, and we’ll point you to the right AGRION softener grade. Already know your grade? It’s in the list below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div>
              <label className="block text-[11px] font-mono uppercase tracking-widest text-[#0A2C4B] font-semibold mb-2">
                Softening duty
              </label>
              <select
                value={application}
                onChange={(e) => setApplication(e.target.value)}
                className="w-full bg-white border border-slate-300 text-sm text-slate-800 py-3 px-3.5 focus:ring-2 focus:ring-[#B27B34] focus:border-[#B27B34]"
              >
                <option value="">Select a duty</option>
                <option value="std">Standard softening</option>
                <option value="hard">Hard water / heavy-duty</option>
                <option value="boiler">Boiler feed protection</option>
                <option value="cooling">Cooling / process water</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-mono uppercase tracking-widest text-[#0A2C4B] font-semibold mb-2">
                Current resin’s total exchange capacity
              </label>
              <input
                value={capacity}
                onChange={(e) => setCapacity(e.target.value)}
                type="text"
                placeholder="e.g. 1.8 meq/ml"
                className="w-full bg-white border border-slate-300 text-sm text-slate-800 py-3 px-3.5 focus:ring-2 focus:ring-[#B27B34] focus:border-[#B27B34] placeholder:text-slate-400 font-mono"
              />
              <p className="text-[10px] text-slate-500 mt-1">
                Optional — from your TDS or drum label.
              </p>
            </div>

            <div className="flex items-end">
              <button
                onClick={findGrade}
                className="interactive-btn w-full py-3 px-5 bg-[#0A2C4B] hover:bg-[#06182B] text-white text-xs font-semibold tracking-widest uppercase flex items-center justify-center gap-2 chamfer-tr shadow"
              >
                FIND MY GRADE <span className="text-[#B27B34]">→</span>
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
                {result.type} · {result.form} · {result.capacity}
              </div>
              {result.note && (
                <div className="text-[11px] text-slate-500 mt-2">
                  {result.note}
                </div>
              )}
            </div>
          )}

          <div className="mt-5 pt-4 border-t border-slate-200/80 flex flex-col sm:flex-row justify-between items-start sm:items-center text-[11px] font-mono text-slate-500 gap-2">
            <span>
              Indicative match against the specifications on file. For a confirmed equivalent, share your full current TDS with our technical team.
            </span>
            <a className="text-[#1868A8] hover:text-[#0A2C4B] underline font-medium" href="/contact">
              Technical support →
            </a>
          </div>
        </Spotlight>
      </div>
    </section>
  );
}

function ProductCard({ grade }) {
  const gold = grade.accent === "gold";

  return (
    <article
      className={`bg-white ${
        gold ? "border-2 border-[#B27B34]" : "border border-[#0A2C4B]/15"
      } shadow-md relative overflow-hidden chamfer-tr-lg luxury-card group`}
    >
      {gold && (
        <div className="absolute top-0 right-0 bg-[#B27B34] text-white text-[10px] font-mono tracking-widest uppercase font-bold py-1.5 px-6 shadow-sm z-20">
          FEATURED DUTY
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 sm:p-8 items-center">
        <div className="md:col-span-4 relative">
          <div
            className={`${
              gold
                ? "bg-amber-50/40 border-[#B27B34]/30"
                : "bg-[#F6F9FC] border-slate-200"
            } p-5 border relative overflow-hidden h-56 flex items-center justify-center`}
          >
            <div className="absolute inset-0 resin-grid opacity-30" />

            <div
              className={`w-36 h-36 rounded-full border-2 ${
                gold ? "border-[#B27B34]" : "border-[#0A2C4B]/30"
              } flex items-center justify-center bg-white/80 shadow-xl relative`}
            >
              <div className="text-center">
                <div
                  className={`font-serif text-4xl font-bold ${
                    gold ? "text-[#B27B34]" : "text-[#0A2C4B]"
                  }`}
                >
                  C
                </div>
                <div className="text-[9px] font-mono tracking-widest text-[#0A2C4B] mt-1">
                  AGRION
                </div>
              </div>
            </div>

            <span
              className={`absolute top-2 left-2 ${
                gold ? "bg-[#B27B34]" : "bg-[#0A2C4B]"
              } text-[10px] font-mono text-white px-2.5 py-1 tracking-widest uppercase shadow-sm`}
            >
              {grade.tag}
            </span>
          </div>
        </div>

        <div className="md:col-span-8 space-y-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="font-serif text-3xl font-bold text-[#0A2C4B] leading-none">
                {grade.name}
              </h3>
              <div className="text-xs font-mono font-semibold text-[#B27B34] uppercase tracking-wider mt-1.5">
                {grade.sub}
              </div>
            </div>
            <span className="text-[10px] font-mono px-2 py-1 bg-[#F6F9FC] border border-slate-300 text-slate-700 uppercase">
              {grade.type}
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {grade.desc}
          </p>

          <div className="grid grid-cols-2 gap-2.5 font-mono text-xs">
            <div className="bg-[#F8FAFD] border border-slate-200 p-2.5">
              <span className="text-[10px] uppercase text-slate-400 block">
                Ionic form
              </span>
              <span className="font-bold text-[#0A2C4B]">{grade.form}</span>
            </div>

            <div
              className={`${
                gold
                  ? "bg-amber-50/50 border-[#B27B34]/30"
                  : "bg-[#F8FAFD] border-slate-200"
              } border p-2.5`}
            >
              <span className="text-[10px] uppercase text-slate-400 block">
                Total exchange capacity
              </span>
              <span className="font-bold text-[#0A2C4B]">
                {grade.capacity}
              </span>
            </div>

            <div className="bg-[#F8FAFD] border border-slate-200 p-2.5">
              <span className="text-[10px] uppercase text-slate-400 block">
                Particle size
              </span>
              <span className="font-bold text-[#0A2C4B]">0.3–1.2 mm</span>
            </div>

            <div
              className={`${
                gold
                  ? "bg-amber-50/50 border-[#B27B34]/30"
                  : "bg-[#F8FAFD] border-slate-200"
              } border p-2.5`}
            >
              <span className="text-[10px] uppercase text-slate-400 block">
                TDS
              </span>
              <span className="font-bold text-[#0A2C4B]">Available</span>
            </div>
          </div>

          <div className="pt-3 flex flex-wrap items-center gap-3">
            <Button
              href={tdsHref(grade.id)}
              goldButton={gold}
              className="px-5 py-2.5"
            >
              Download TDS (PDF)
            </Button>

            <Button
              href="/contact"
              className="px-5 py-2.5 !bg-white !text-[#0A2C4B] border border-[#0A2C4B]/20 hover:!border-[#B27B34]"
            >
              Enquire about {grade.name.replace("AGRION ", "")}
            </Button>
          </div>

          <p className="text-[11px] text-slate-400 font-mono">
            Full physical &amp; chemical specifications are in the TDS.
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
              Water softener resins for reliable hardness removal
            </h2>

            <div className="text-slate-600 space-y-5 leading-relaxed text-sm sm:text-base">
              <p>
                Water softener resins are sodium-form strong acid cation resins that remove hardness — calcium and magnesium — from water by exchanging it for sodium, protecting boilers, cooling systems and process equipment from scale. When the resin is exhausted it is regenerated with common salt (brine) and returned to service.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <div className="border-l-2 border-[#0A2C4B]/20 pl-4">
                  <h3 className="font-serif text-lg font-bold text-[#0A2C4B] mb-1">
                    Standard softener resin
                  </h3>
                  <p className="text-xs text-slate-600 leading-normal">
                    A standard gel softener suits most feedwater.
                  </p>
                </div>

                <div className="border-l-2 border-[#B27B34] pl-4">
                  <h3 className="font-serif text-lg font-bold text-[#0A2C4B] mb-1">
                    High-crosslink softener resin
                  </h3>
                  <p className="text-xs text-slate-600 leading-normal">
                    A higher-crosslink grade holds up better under harder water, higher temperatures and heavier cycling, giving longer working life in demanding softeners. The two AGRION softener grades — C-60 and C-80 — cover both.
                  </p>
                </div>
              </div>
            </div>
          </Spotlight>

          <section className="space-y-8" id="range-section">
            <div className="flex items-end justify-between border-b border-[#0A2C4B]/15 pb-4 gap-4">
              <div>
                <span className="text-xs font-mono text-[#B27B34] uppercase tracking-widest font-semibold block mb-1">
                  THE RANGE
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0A2C4B]">
                  Toyota Chemical Industries water softener resin grades
                </h2>
              </div>
              <span className="hidden sm:block text-xs font-mono bg-[#0A2C4B] text-white px-3 py-1 font-semibold">
                AGRION RANGE
              </span>
            </div>

            <p className="text-sm text-slate-600 -mt-3">
              Key data for each grade below; full physical and chemical specifications are in the downloadable technical data sheet.
            </p>

            {allGrades.map((grade) => (
              <ProductCard key={grade.id} grade={grade} />
            ))}
          </section>

          <section className="space-y-6" id="value">
            <div className="border-b border-[#0A2C4B]/15 pb-3">
              <span className="text-[11px] font-mono text-[#B27B34] uppercase tracking-widest font-semibold block">
                APPLICATION VALUE
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0A2C4B]">
                Why water softener resins are valued
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Water softener resins are valued for reliable, repeatable hardness removal at low running cost. In a softening plant they effectively:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                ["01", "Hardness removal", "Remove calcium and magnesium hardness."],
                ["02", "Scale prevention", "Prevent scale in boilers, cooling systems and pipework."],
                ["03", "Simple regeneration", "Regenerate simply with common salt (brine)."],
                ["04", "Repeatable capacity", "Hold capacity over many service and regeneration cycles."],
              ].map(([num, title, description]) => (
                <Spotlight
                  key={num}
                  className="bg-white p-6 border border-[#0A2C4B]/10 shadow-sm chamfer-tr luxury-card group"
                >
                  <div className="w-8 h-8 bg-[#F6F9FC] border border-[#B27B34] text-[#0A2C4B] flex items-center justify-center font-mono font-bold text-xs mb-4 group-hover:bg-[#0A2C4B] group-hover:text-white transition-colors">
                    {num}
                  </div>
                  <h3 className="font-serif font-bold text-[#0A2C4B] text-lg mb-2">
                    {title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {description}
                  </p>
                </Spotlight>
              ))}
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              They are used for boiler feed protection, cooling-water make-up, and process-water softening across power, textile, chemical, food and general industry.
            </p>

            <div className="border border-[#0A2C4B]/10 bg-[#F6F9FC] border-l-4 border-l-[#B27B34] p-5 chamfer-tr">
              <div className="text-[10px] font-mono uppercase tracking-widest text-[#B27B34] font-bold mb-1">
                SOFTENER STOPPED REMOVING HARDNESS?
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                When a softener no longer softens, the resin is usually fouled, degraded or simply at the end of its life — a change to a fresh softener grade restores capacity.
              </p>
              <a
                href="/contact"
                className="inline-block mt-3 text-xs font-semibold text-[#1868A8] hover:text-[#0A2C4B] underline"
              >
                Tell us your symptoms →
              </a>
            </div>
          </section>

          <Spotlight
            className="bg-white border border-[#0A2C4B]/10 p-8 sm:p-10 shadow-sm relative luxury-card"
            id="toyota-ws"
          >
            <div>
              <div className="space-y-4">
                <div className="text-[10px] font-mono uppercase tracking-widest text-[#B27B34] font-bold flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#B27B34]" />
                  TOYOTA CHEMICAL INDUSTRIES
                </div>

                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0A2C4B]">
                  Water softener resins from Toyota Chemical Industries
                </h2>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  At Toyota Chemical Industries Pvt Ltd, we manufacture sodium-form softener grades engineered for dependable hardness removal and long service life across demanding industrial softeners. Choose the right water softener resin to protect your plant and keep your feedwater consistently soft.
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {["Since 1972", "ISO 9001:2015", "ISO 14001:2015", "Made in India"].map(
                    (item) => (
                      <span
                        key={item}
                        className="text-[10px] font-mono bg-[#F6F9FC] border border-slate-300 text-slate-700 px-3 py-1 font-semibold"
                      >
                        {item}
                      </span>
                    )
                  )}
                </div>
              </div>

              
            </div>
          </Spotlight>

          <section className="space-y-4" id="compare">
            <div className="flex items-end justify-between border-b border-[#0A2C4B]/15 pb-3">
              <div>
                <span className="text-[11px] font-mono text-[#B27B34] uppercase tracking-widest font-semibold block">
                  AT A GLANCE
                </span>
                <h2 className="font-serif text-2xl font-bold text-[#0A2C4B]">
                  Which water softener resin for your plant?
                </h2>
              </div>
              <span className="text-[11px] font-mono text-slate-400">
                AGRION RANGE
              </span>
            </div>

            <div className="overflow-x-auto border border-[#0A2C4B]/15 bg-white shadow-sm">
              <table className="w-full min-w-[720px] text-left text-xs text-slate-700">
                <thead className="bg-[#0A2C4B] text-white font-mono text-[11px] uppercase tracking-wider">
                  <tr>
                    {[
                      "Grade",
                      "Ionic form",
                      "Total exchange capacity",
                      "Typical duty",
                    ].map((heading) => (
                      <th
                        key={heading}
                        className="py-4 px-4 font-bold border-r border-slate-700"
                      >
                        {heading}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-200 font-mono">
                  {[
                    ["C-60", "Na⁺", "1.7 meq/ml", "Standard water softening"],
                    [
                      "C-80",
                      "Na⁺",
                      "1.8 meq/ml",
                      "Harder water, higher temperature, heavier cycling",
                    ],
                  ].map((row, index) => (
                    <tr
                      key={row[0]}
                      className={`perf-row ${index % 2 ? "bg-amber-50/20" : ""}`}
                    >
                      <td className="py-4 px-4 font-bold text-sm font-serif text-[#0A2C4B]">
                        {row[0]}
                      </td>
                      <td className="py-4 px-4 text-[#1868A8] font-semibold">
                        {row[1]}
                      </td>
                      <td className="py-4 px-4 text-slate-600">
                        {row[2]}
                      </td>
                      <td className="py-4 px-4 text-slate-600 font-sans">
                        {row[3]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-6" id="why">
            <div className="border-b border-[#0A2C4B]/15 pb-3">
              <span className="text-[11px] font-mono text-[#B27B34] uppercase tracking-widest font-semibold block">
                WHY CHOOSE US
              </span>
              <h2 className="font-serif text-2xl font-bold text-[#0A2C4B]">
                Why choose Toyota Chemical Industries for water softener resins
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                [
                  "01 / HERITAGE",
                  "Since 1972",
                  "Over five decades of manufacturing experience",
                ],
                [
                  "02 / QUALITY SYSTEMS",
                  "ISO 9001 & 14001",
                  "Certified quality & environmental management",
                ],
                [
                  "03 / DISPATCH SCALE",
                  "25 L to bulk",
                  "No upper limit; small top-ups to full changes",
                ],
                [
                  "04 / DATA",
                  "TDS with every grade",
                  "Bead size, exchange capacity, sieve analysis",
                ],
              ].map(([eyebrow, title, description]) => (
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
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {description}
                  </p>
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
                    <span className="faq-icon text-[#B27B34] font-mono text-xl transition-transform duration-300 shrink-0 ml-4">
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
                Confirm your AGRION grade
              </h3>

              <p className="text-xs text-slate-300 leading-relaxed mb-6 font-light">
                Send the grade and operating conditions you run today — we’ll confirm the matching AGRION softener grade and attach its TDS.
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
                  Engineering Specs
                </h4>
                <span className="text-[9px] font-mono bg-[#F6F9FC] text-slate-600 px-2 py-0.5 border border-slate-200">
                  SOFTENER
                </span>
              </div>

              <dl className="space-y-2.5 text-xs font-mono">
                {[
                  ["Particle size:", "0.3 – 1.2 mm"],
                  ["C-60 capacity:", "1.7 meq/ml"],
                  ["C-80 capacity:", "1.8 meq/ml"],
                  ["Ionic form:", "Sodium (Na⁺)"],
                  ["Regeneration:", "Common salt (brine)"],
                ].map(([term, value]) => (
                  <div
                    key={term}
                    className="flex justify-between py-1 border-b border-slate-100 px-1 gap-4"
                  >
                    <dt className="text-slate-500">{term}</dt>
                    <dd className="font-semibold text-[#0A2C4B] text-right">
                      {value}
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
                  { item: "Mixed Bed Resins", href: "/products/mixedbedexchangeresin", image: mixedBedCardImage },
                  { item: "Specialty Resins", href: "/products/specialtyresins", image: specialtyCardImage },
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
                  { item: "Water Softening", href: "/applications/water-softener-resin", image: waterSofteningAppImage },
                  { item: "Boiler Feed Water", href: "/applications/boiler-feed-water", image: boilerAppImage },
                  { item: "DM Plant / Demineralisation", href: "/applications/dm-plant-resin", image: dmPlantAppImage },
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
                {[
                  "Since 1972",
                  "ISO 9001",
                  "ISO 14001",
                  "25 L to bulk",
                  "Made in India",
                ].map((item) => (
                  <span
                    key={item}
                    className="bg-white px-2.5 py-1 border border-slate-300 text-[#0A2C4B] font-semibold"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}

// function FooterColumn({ title, items }) {
//   return (
//     <div className="lg:col-span-2 space-y-3">
//       <div className="text-xs font-mono uppercase tracking-widest text-[#B27B34] font-bold">
//         {title}
//       </div>

//       <ul className="text-xs space-y-2.5 text-slate-400 font-light">
//         {items.map(([item, href]) => (
//           <li key={item}>
//             <a className="hover:text-white transition-all" href={href}>
//               {item}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

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
//                 Confirm the right softener resin for your plant.
//               </h2>

//               <p className="text-xs sm:text-sm text-slate-300 mt-3 font-light leading-relaxed">
//                 Share the grade and operating conditions you run today and we’ll confirm the match and attach its TDS.
//               </p>
//             </div>

//             <div className="flex flex-wrap gap-4 shrink-0">
//               <Button
//                 href="mailto:info@toyotachemicals.co.in"
//                 goldButton
//                 className="px-8 py-4"
//               >
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

//       <footer className="bg-[#040E1B] text-white pt-16 pb-12 border-t border-slate-800">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
//             <div className="lg:col-span-4 space-y-4">
//               <div className="flex items-center space-x-3">
//                 <div className="w-8 h-8 border border-[#B27B34] flex items-center justify-center font-serif text-[#B27B34] font-bold">
//                   T
//                 </div>
//                 <span className="font-serif font-bold text-xl tracking-wider text-white uppercase">
//                   TOYOTA CHEMICAL
//                 </span>
//               </div>

//               <p className="text-xs text-slate-400 leading-relaxed max-w-sm font-light">
//                 A leading ion exchange resin manufacturer in India since 1972, delivering world-class cation, anion and mixed bed resins for water treatment and industrial applications — made at our own plant in GIDC Vapi, Gujarat.
//               </p>

//               <div className="text-[11px] font-mono text-[#B27B34]">
//                 ISO 9001:2015 · ISO 14001:2015
//               </div>
//             </div>

//             <FooterColumn
//               title="Quick Links"
//               items={[
//                 ["Home", "/"],
//                 ["About Us", "/about"],
//                 ["Quality & Certifications", "/quality-certifications"],
//                 ["Service Area", "/service-area"],
//                 ["Products", "/products"],
//                 ["Contact Us", "/contact"],
//               ]}
//             />

//             <FooterColumn
//               title="Products"
//               items={[
//                 ["Cation Exchange Resins", "/products/cationexchangeresins"],
//                 ["Anion Exchange Resins", "/products/anionexchangeresins"],
//                 ["Mixed Bed Resins", "/products/mixedbedexchangeresin"],
//                 ["Water Softener Resins", "/products/watersoftenerresins"],
//                 ["Specialty Resins", "/products/specialtyresins"],
//               ]}
//             />

//             <div className="lg:col-span-3 space-y-3">
//               <div className="text-xs font-mono uppercase tracking-widest text-[#B27B34] font-bold">
//                 Factory
//               </div>

//               <address className="not-italic text-xs text-slate-400 space-y-2.5 leading-relaxed font-light">
//                 <p>
//                   Toyota Chemical Industries
//                   <br />
//                   Plot No. 100, Vapi–Silvassa Road,
//                   <br />
//                   GIDC Vapi, Gujarat 396195, India
//                 </p>

//                 <p className="pt-1 font-mono">
//                   <span className="block text-slate-500 text-[10px]">PHONE:</span>
//                   <a
//                     className="hover:text-[#B27B34] text-slate-300 font-semibold"
//                     href="tel:+919016711708"
//                   >
//                     +91 90167 11708
//                   </a>
//                 </p>

//                 <p className="font-mono">
//                   <span className="block text-slate-500 text-[10px]">
//                     INQUIRIES:
//                   </span>
//                   <a
//                     className="hover:text-[#B27B34] text-slate-300"
//                     href="mailto:info@toyotachemicals.co.in"
//                   >
//                     info@toyotachemicals.co.in
//                   </a>
//                 </p>
//               </address>
//             </div>
//           </div>

//           <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-slate-500 gap-4">
//             <div>
//               © 2026 Toyota Chemical Industries Private Limited. All Rights Reserved.
//             </div>

//             <div className="flex flex-wrap justify-center gap-5">
//               <a className="hover:text-slate-300" href="#">Legal Notice</a>
//               <a className="hover:text-slate-300" href="#">Privacy Policy</a>
//               <a className="hover:text-slate-300" href="#">Quality Compliance</a>
//               <a className="hover:text-slate-300" href="#">Sustainability Charter</a>
//             </div>
//           </div>
//         </div>
//       </footer>

//       <div className="fixed bottom-0 left-0 right-0 z-[70] bg-white border-t border-[#0A2C4B]/10 p-2 flex gap-2 sm:hidden">
//         <Button href="#finder" className="flex-1 py-3">
//           Find Grade
//         </Button>
//         <Button href="mailto:info@toyotachemicals.co.in" goldButton className="flex-1 py-3">
//           Enquire
//         </Button>
//       </div>
//     </>
//   );
// }

export default function WaterSoftener() {
  useEffect(() => {
    const surfaces = document.querySelectorAll(".spotlight-surface");
    const handlers = [];

    surfaces.forEach((surface) => {
      const handler = (event) => {
        const rect = surface.getBoundingClientRect();
        surface.style.setProperty(
          "--mouse-x",
          `${event.clientX - rect.left}px`
        );
        surface.style.setProperty(
          "--mouse-y",
          `${event.clientY - rect.top}px`
        );
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
        @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap');

        :root {
          --brand-navy: #0A2C4B;
          --brand-navy-deep: #06182B;
          --brand-royal: #1868A8;
          --brand-gold: #B27B34;
          --brand-gold-light: #E5A855;
          --surface-ice: #F6F9FC;
        }

        .blueprint-pattern {
          background-image:
            radial-gradient(circle at 1px 1px, rgba(10,44,75,.08) 1px, transparent 0),
            linear-gradient(to right, rgba(10,44,75,.035) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(10,44,75,.035) 1px, transparent 1px);
          background-size: 24px 24px, 48px 48px, 48px 48px;
        }

        .resin-grid {
          background-image:
            radial-gradient(circle at 1px 1px, rgba(178,123,52,.18) 1px, transparent 0),
            linear-gradient(45deg, rgba(10,44,75,.03) 25%, transparent 25%, transparent 75%, rgba(10,44,75,.03) 75%);
          background-size: 18px 18px, 36px 36px;
        }

        .chamfer-tr {
          clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%);
        }

        .chamfer-tr-lg {
          clip-path: polygon(0 0, calc(100% - 32px) 0, 100% 32px, 100% 100%, 0 100%);
        }

        .luxury-card {
          transition: all .4s cubic-bezier(.16,1,.3,1);
          position: relative;
          will-change: transform, box-shadow, border-color;
        }

        .luxury-card:hover {
          transform: translateY(-5px) scale(1.008);
          box-shadow: 0 20px 40px -15px rgba(10,44,75,.12), 0 0 0 1px rgba(178,123,52,.3);
          border-color: rgba(178,123,52,.5) !important;
        }

        .interactive-btn {
          position: relative;
          overflow: hidden;
          transition: all .3s cubic-bezier(.16,1,.3,1);
        }

        .interactive-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 22px -6px rgba(10,44,75,.28), 0 0 0 1px rgba(178,123,52,.35);
        }

        .interactive-btn::after {
          content: '';
          position: absolute;
          top: -50%;
          left: -60%;
          width: 20%;
          height: 200%;
          background: linear-gradient(to right, transparent, rgba(255,255,255,.25), transparent);
          transform: rotate(30deg);
          transition: left .7s cubic-bezier(.16,1,.3,1);
          pointer-events: none;
        }

        .interactive-btn:hover::after {
          left: 140%;
        }

        .spotlight-surface {
          position: relative;
        }

        .spotlight-surface::before {
          content: '';
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: radial-gradient(600px circle at var(--mouse-x,50%) var(--mouse-y,50%), rgba(178,123,52,.08), transparent 45%);
          opacity: 0;
          transition: opacity .4s ease;
          z-index: 1;
        }

        .spotlight-surface:hover::before {
          opacity: 1;
        }

        .spotlight-surface > * {
          position: relative;
          z-index: 2;
        }

        .perf-row {
          transition: all .25s ease;
        }

        .perf-row:hover {
          background-color: rgba(246,249,252,.95);
          box-shadow: inset 4px 0 0 #B27B34;
        }

        .faq-row {
          transition: all .3s cubic-bezier(.16,1,.3,1);
        }

        .faq-row:hover {
          background-color: #F8FAFD;
          border-color: rgba(178,123,52,.45);
          transform: translateX(4px);
        }

        details[open] .faq-icon {
          transform: rotate(45deg);
          color: #B27B34;
        }

        details summary::-webkit-details-marker {
          display: none;
        }

        .hero-frame-group:hover .deco-frame-gold {
          transform: translate(-3px,-3px) scale(1.015);
          border-color: #B27B34;
        }

        .hero-frame-group:hover .deco-frame-navy {
          transform: translate(3px,3px) scale(1.015);
          border-color: #0A2C4B;
        }

        .deco-frame-gold,
        .deco-frame-navy {
          transition: all .5s cubic-bezier(.16,1,.3,1);
        }

        @media (prefers-reduced-motion: reduce) {
          *,::before,::after {
            animation-duration:.01ms !important;
            animation-iteration-count:1 !important;
            transition-duration:.01ms !important;
            scroll-behavior:auto !important;
            transform:none !important;
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
