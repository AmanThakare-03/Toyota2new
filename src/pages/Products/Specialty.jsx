import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import cationCardImage from "../../assets/images/cation exchange resin.jpg";
import anionCardImage from "../../assets/images/anion-exchange-resins.jpg";
import mixedBedCardImage from "../../assets/images/mixed-bed-resins.jpg";
import softenerCardImage from "../../assets/images/water softner resin.jpg";
import specialtyCardImage from "../../assets/images/speciality resin.jpg";

const grades = {
  metal: {
    title: "Chelating Resins",
    description:
      "Specialty chelating resin for selective heavy-metal removal and recovery — suitable for copper, nickel, zinc, lead, cadmium and similar metals, including effluent polishing, brine purification and zero liquid discharge.",
    type: "Chelating",
    form: "Application specific",
  },
  zld: {
    title: "Chelating Resins",
    description:
      "Chelating resin supplied to requirement for selective heavy-metal removal, effluent polishing and zero liquid discharge applications.",
    type: "Chelating",
    form: "Application specific",
  },
  brine: {
    title: "Chelating Resins",
    description:
      "Chelating resin for selective metal binding and brine purification where selectivity matters against a high background of sodium or calcium.",
    type: "Chelating",
    form: "Application specific",
  },
  monitor: {
    title: "Indicator Resins",
    description:
      "Indicator resin that changes colour as it exhausts, giving a visual signal of remaining capacity in softeners, mixed beds and polishing units.",
    type: "Indicator",
    form: "Application specific",
  },
  custom: {
    title: "Specialty Resin — Application Review",
    description:
      "Specialty resins are supplied to requirement. Share your process, target contaminant and operating conditions and our technical team will advise and source the right grade.",
    type: "Application specific",
    form: "To be confirmed",
  },
};

const faqs = [
  ["Can you match or replace the chelating / indicator resin I currently use?", "In most cases, yes. Tell us the functional type, target metal or duty, and operating conditions — or share your current datasheet — and our technical team will advise a suitable specialty resin."],
  ["What does a chelating resin do, and which metals does it remove?", "A chelating resin selectively binds heavy-metal cations such as copper, nickel, zinc, lead and cadmium, even at low concentration and against a high sodium or calcium background."],
  ["What is an indicator resin used for?", "It changes colour as it exhausts, giving a direct visual signal of remaining capacity in a softener, mixed bed or polishing unit."],
  ["Do you supply resins for ZLD or metal recovery?", "Yes. Chelating resin handles selective metal recovery and ZLD polishing; for heavy-metal duty as a macroporous strong acid cation, see AGRION C-100 MP."],
  ["Can you supply a custom or application-specific grade?", "Specialty resins are application-led. Share your process, target contaminant, concentration and operating conditions and we’ll recommend or source the right grade."],
];

const allGrades = [
  {
    id: "chelating-resin",
    name: "Chelating Resins",
    sub: "Specialty capability · Selective heavy-metal removal",
    desc:
      "Chelating resins carry functional groups that selectively bind heavy-metal cations — copper, nickel, zinc, lead, cadmium and others — for metal recovery, effluent polishing, brine purification and zero liquid discharge.",
    type: "Chelating",
    form: "Application specific",
    tag: "SPECIALTY CAPABILITY",
    accent: "gold",
  },
  {
    id: "indicator-resin",
    name: "Indicator Resins",
    sub: "Specialty capability · Visual exhaustion signalling",
    desc:
      "Indicator resins change colour as they exhaust, giving a clear visual signal of remaining capacity in a mixed bed, softener or polishing unit.",
    type: "Indicator",
    form: "Application specific",
    tag: "VISUAL MONITORING",
    accent: "navy",
  },
];

function Button({ children, href = "#", goldButton = false, className = "" }) {
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

function Hero() {
  return (
    <section className="relative bg-white border-b border-[#0A2C4B]/10 overflow-hidden pt-10 pb-20 blueprint-pattern">
      <div className="absolute top-6 right-8 pointer-events-none text-right font-mono text-[10px] text-slate-300 hidden lg:block tracking-widest">
        <div>SPEC_DOC // SPECIALTY-RESINS</div>
        <div>VAPI · GUJARAT · INDIA</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <nav className="flex items-center text-xs font-mono text-slate-500 mb-8 space-x-2">
          <Link className="hover:text-[#0A2C4B] hover:underline" to="/">Home</Link>
          <span className="text-slate-300">/</span>
          <a className="hover:text-[#0A2C4B] hover:underline" href="#range-section">Products</a>
          <span className="text-slate-300">/</span>
          <span className="text-[#B27B34]">Specialty Resins</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center space-x-2 text-[11px] font-mono uppercase tracking-[0.25em] text-[#B27B34] font-semibold mb-4 px-3 py-1 bg-amber-50/70 border border-[#B27B34]/30 chamfer-tr">
              <span className="w-1.5 h-1.5 bg-[#B27B34] animate-pulse" />
              <span>SPECIALTY RESINS</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#0A2C4B] font-bold leading-[1.12] tracking-tight mb-5">
              Specialty
              <br />
              <span className="italic font-normal text-[#B27B34]">Resins</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed mb-5 max-w-2xl">
              Toyota Chemical Industries — a leading manufacturer of specialty ion exchange resins in India since 1972.
            </p>

            <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed mb-5 max-w-2xl">
              Beyond our standard water-treatment range, we supply specialty ion exchange resins to the application — chelating resins for selective heavy-metal removal, recovery and zero liquid discharge, and indicator resins that signal exhaustion by colour change.
            </p>

            <p className="text-xs sm:text-sm font-semibold text-[#B27B34] leading-relaxed mb-8 max-w-2xl">
              Supplied to requirement — tell us your process and target and we’ll advise and source the right grade.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <Button href="#finder" className="px-8 py-3.5">
                Discuss Your Requirement <span className="ml-2.5 text-[#B27B34]">→</span>
              </Button>
              <Button href="#range-section" className="px-8 py-3.5 !bg-white !text-[#0A2C4B] border border-[#0A2C4B]/20 hover:!bg-[#F6F9FC] hover:!border-[#B27B34]">
                View Specialty Range
              </Button>
            </div>

            <div className="flex flex-wrap gap-4 pt-2 border-t border-slate-200">
              {["Since 1972", "ISO 9001:2015", "ISO 14001:2015", "Made in India"].map((item) => (
                <span key={item} className="text-[10px] font-mono bg-[#F6F9FC] border border-slate-400 text-slate-700 px-3 py-1 font-semibold">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-white border border-[#0A2C4B]/15 shadow-lg p-4 sm:p-5 chamfer-tr-lg">
              <div className="overflow-hidden bg-[#F6F9FC] border border-slate-200">
                <div className="relative overflow-hidden border-b border-slate-200 bg-white h-64 sm:h-72 lg:h-80">
                  <img src={specialtyCardImage} alt="Specialty ion exchange resin" className="w-full h-full object-cover object-center" />
                </div>
                <div className="p-5 sm:p-6">
                  <div className="text-[10px] font-mono text-[#B27B34] uppercase tracking-wider font-semibold mb-2">Product Family</div>
                  <div className="text-lg sm:text-xl font-serif font-bold text-[#0A2C4B]">SPECIALTY ION EXCHANGE</div>
                  <div className="text-sm text-slate-500 mt-2 leading-relaxed">Metal removal, recovery, ZLD and exhaustion monitoring</div>
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
  const [metal, setMetal] = useState("");
  const [result, setResult] = useState(null);

  const findGrade = () => {
    const selected = grades[need] || grades.custom;
    setResult({
      ...selected,
      note: metal
        ? `Target metal / contaminant noted: ${metal}.`
        : "Share your target metal, contaminant and operating conditions for a confirmed recommendation.",
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
                <span>SPECIALTY RESIN FINDER</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0A2C4B]">
                Match a specialty resin to your process
              </h2>
            </div>
            <p className="text-xs text-slate-500 font-mono max-w-md">
              Select your need and optionally enter the target metal or contaminant.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div>
              <label className="block text-[11px] font-mono uppercase tracking-widest text-[#0A2C4B] font-semibold mb-2">
                What do you need?
              </label>
              <select
                value={need}
                onChange={(e) => setNeed(e.target.value)}
                className="w-full bg-white border border-slate-300 text-sm text-slate-800 py-3 px-3.5 focus:ring-2 focus:ring-[#B27B34] focus:border-[#B27B34]"
              >
                <option value="">Select a need</option>
                <option value="metal">Heavy-metal removal / recovery</option>
                <option value="zld">Effluent polishing / ZLD</option>
                <option value="brine">Brine purification</option>
                <option value="monitor">Exhaustion monitoring</option>
                <option value="custom">Something else / not listed</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-mono uppercase tracking-widest text-[#0A2C4B] font-semibold mb-2">
                Target metal or contaminant
              </label>
              <input
                value={metal}
                onChange={(e) => setMetal(e.target.value)}
                type="text"
                placeholder="e.g. copper, nickel, hardness"
                className="w-full bg-white border border-slate-300 text-sm text-slate-800 py-3 px-3.5 focus:ring-2 focus:ring-[#B27B34] focus:border-[#B27B34] placeholder:text-slate-400 font-mono"
              />
              <p className="text-[10px] text-slate-500 mt-1">Optional — helps us recommend the grade.</p>
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
              <div className="text-[10px] font-mono uppercase tracking-widest text-[#B27B34]">MATCH RESULT</div>
              <div className="font-serif text-xl font-bold text-[#0A2C4B]">{result.title}</div>
              <div className="text-xs text-slate-600 mt-1">{result.description}</div>
              <div className="text-xs font-mono font-bold text-[#1868A8] mt-2">{result.type} · {result.form}</div>
              <div className="text-[11px] text-slate-500 mt-2">{result.note}</div>
            </div>
          )}
        </Spotlight>
      </div>
    </section>
  );
}

function ProductCard({ grade }) {
  const gold = grade.accent === "gold";

  return (
    <article className={`bg-white ${gold ? "border-2 border-[#B27B34]" : "border border-[#0A2C4B]/15"} shadow-md relative overflow-hidden chamfer-tr-lg luxury-card group`}>
      {gold && (
        <div className="absolute top-0 right-0 bg-[#B27B34] text-white text-[10px] font-mono tracking-widest uppercase font-bold py-1.5 px-6 shadow-sm z-20">
          FEATURED CAPABILITY
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 sm:p-8 items-center">
        <div className="md:col-span-4 relative">
          <div className={`${gold ? "bg-amber-50/40 border-[#B27B34]/30" : "bg-[#F6F9FC] border-slate-200"} p-5 border relative overflow-hidden h-56 flex items-center justify-center`}>
            <div className="absolute inset-0 resin-grid opacity-30" />
            <div className={`w-36 h-36 rounded-full border-2 ${gold ? "border-[#B27B34]" : "border-[#0A2C4B]/30"} flex items-center justify-center bg-white/80 shadow-xl relative`}>
              <div className="text-center">
                <div className={`font-serif text-4xl font-bold ${gold ? "text-[#B27B34]" : "text-[#0A2C4B]"}`}>
                  {grade.name.startsWith("Chelating") ? "C" : "I"}
                </div>
                <div className="text-[9px] font-mono tracking-widest text-[#0A2C4B] mt-1">SPECIALTY</div>
              </div>
            </div>
            <span className={`absolute top-2 left-2 ${gold ? "bg-[#B27B34]" : "bg-[#0A2C4B]"} text-[10px] font-mono text-white px-2.5 py-1 tracking-widest uppercase shadow-sm`}>
              {grade.tag}
            </span>
          </div>
        </div>

        <div className="md:col-span-8 space-y-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="font-serif text-3xl font-bold text-[#0A2C4B] leading-none">{grade.name}</h3>
              <div className="text-xs font-mono font-semibold text-[#B27B34] uppercase tracking-wider mt-1.5">{grade.sub}</div>
            </div>
            <span className="text-[10px] font-mono px-2 py-1 bg-[#F6F9FC] border border-slate-300 text-slate-700 uppercase">{grade.type}</span>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{grade.desc}</p>

          <div className="grid grid-cols-2 gap-2.5 font-mono text-xs">
            <div className="bg-[#F8FAFD] border border-slate-200 p-2.5">
              <span className="text-[10px] uppercase text-slate-400 block">Functional type</span>
              <span className="font-bold text-[#0A2C4B]">{grade.type}</span>
            </div>
            <div className="bg-[#F8FAFD] border border-slate-200 p-2.5">
              <span className="text-[10px] uppercase text-slate-400 block">Supply</span>
              <span className="font-bold text-[#0A2C4B]">To requirement</span>
            </div>
            <div className="bg-[#F8FAFD] border border-slate-200 p-2.5">
              <span className="text-[10px] uppercase text-slate-400 block">Typical duty</span>
              <span className="font-bold text-[#0A2C4B]">{grade.name.startsWith("Chelating") ? "Metal / ZLD" : "Monitoring"}</span>
            </div>
            <div className="bg-[#F8FAFD] border border-slate-200 p-2.5">
              <span className="text-[10px] uppercase text-slate-400 block">TDS</span>
              <span className="font-bold text-[#0A2C4B]">Application specific</span>
            </div>
          </div>

          <div className="pt-3 flex flex-wrap items-center gap-3">
            <Button href="/contact" goldButton={gold} className="px-5 py-2.5">Discuss This Capability</Button>
            <Button href="/contact" className="px-5 py-2.5 !bg-white !text-[#0A2C4B] border border-[#0A2C4B]/20 hover:!border-[#B27B34]">Enquire Now</Button>
          </div>
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
          <Spotlight className="bg-white p-8 sm:p-10 border border-[#0A2C4B]/10 shadow-sm relative luxury-card" id="overview">
            <div className="absolute top-0 left-0 w-24 h-1 bg-[#B27B34]" />
            <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#B27B34] font-bold mb-2">OVERVIEW</div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0A2C4B] leading-snug mb-6">
              Specialty ion exchange resins for selective process duties
            </h2>
            <div className="text-slate-600 space-y-5 leading-relaxed text-sm sm:text-base">
              <p>
                Specialty ion exchange resins go beyond standard softening and demineralisation to solve specific process problems. Chelating resins selectively bind metal ions, while indicator resins change colour as they exhaust and provide a visual signal of remaining capacity.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <div className="border-l-2 border-[#0A2C4B]/20 pl-4">
                  <h3 className="font-serif text-lg font-bold text-[#0A2C4B] mb-1">Chelating resins</h3>
                  <p className="text-xs text-slate-600 leading-normal">Used for selective copper, nickel, zinc, lead and similar metal removal or recovery, effluent polishing, brine purification and ZLD.</p>
                </div>
                <div className="border-l-2 border-[#B27B34] pl-4">
                  <h3 className="font-serif text-lg font-bold text-[#0A2C4B] mb-1">Indicator resins</h3>
                  <p className="text-xs text-slate-600 leading-normal">Used as a monitoring aid, changing colour as exhaustion approaches in softeners, mixed beds and polishing units.</p>
                </div>
              </div>
            </div>
          </Spotlight>

          <section className="space-y-8" id="range-section">
            <div className="flex items-end justify-between border-b border-[#0A2C4B]/15 pb-4 gap-4">
              <div>
                <span className="text-xs font-mono text-[#B27B34] uppercase tracking-widest font-semibold block mb-1">THE RANGE</span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0A2C4B]">Specialty resins supplied to requirement</h2>
              </div>
              <span className="hidden sm:block text-xs font-mono bg-[#0A2C4B] text-white px-3 py-1 font-semibold">SPECIALTY RANGE</span>
            </div>
            {allGrades.map((grade) => <ProductCard key={grade.id} grade={grade} />)}
          </section>

          <section className="space-y-6" id="value">
            <div className="border-b border-[#0A2C4B]/15 pb-3">
              <span className="text-[11px] font-mono text-[#B27B34] uppercase tracking-widest font-semibold block">APPLICATION VALUE</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0A2C4B]">Why specialty resins are valued</h2>
            </div>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">Specialty resins earn their place by doing what standard grades cannot. In a process they can:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                ["01", "Selective metal removal", "Selectively remove or recover target heavy metals, even at trace level."],
                ["02", "High-salinity selectivity", "Work against high background salinity where ordinary cation resins may not provide the required selectivity."],
                ["03", "ZLD & compliance", "Support effluent compliance, polishing and zero liquid discharge."],
                ["04", "Visual monitoring", "Signal exhaustion visually, reducing the risk of breakthrough."],
              ].map(([num, title, text]) => (
                <Spotlight key={num} className="bg-white p-6 border border-[#0A2C4B]/10 shadow-sm chamfer-tr luxury-card">
                  <div className="w-8 h-8 bg-[#F6F9FC] border border-[#B27B34] text-[#0A2C4B] flex items-center justify-center font-mono font-bold text-xs mb-4">{num}</div>
                  <h3 className="font-serif font-bold text-[#0A2C4B] text-lg mb-2">{title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{text}</p>
                </Spotlight>
              ))}
            </div>
          </section>

          <section className="space-y-4" id="compare">
            <div className="flex items-end justify-between border-b border-[#0A2C4B]/15 pb-3">
              <div>
                <span className="text-[11px] font-mono text-[#B27B34] uppercase tracking-widest font-semibold block">AT A GLANCE</span>
                <h2 className="font-serif text-2xl font-bold text-[#0A2C4B]">Which specialty resin for your process?</h2>
              </div>
              <span className="text-[11px] font-mono text-slate-400">SPECIALTY RANGE</span>
            </div>
            <div className="overflow-x-auto border border-[#0A2C4B]/15 bg-white shadow-sm">
              <table className="w-full min-w-[650px] text-left text-xs text-slate-700">
                <thead className="bg-[#0A2C4B] text-white font-mono text-[11px] uppercase tracking-wider">
                  <tr>
                    <th className="py-4 px-4">Type</th>
                    <th className="py-4 px-4">Function</th>
                    <th className="py-4 px-4">Typical duty</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 font-mono">
                  <tr>
                    <td className="py-4 px-4 font-bold text-[#B27B34]">Chelating resin</td>
                    <td className="py-4 px-4">Selective heavy-metal binding</td>
                    <td className="py-4 px-4 font-sans">Metal recovery, effluent / ETP polishing, brine purification, ZLD</td>
                  </tr>
                  <tr className="bg-amber-50/20">
                    <td className="py-4 px-4 font-bold text-[#0A2C4B]">Indicator resin</td>
                    <td className="py-4 px-4">Colour-change exhaustion signal</td>
                    <td className="py-4 px-4 font-sans">Monitoring softeners, mixed beds and polishing units</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-6" id="why">
            <div className="border-b border-[#0A2C4B]/15 pb-3">
              <span className="text-[11px] font-mono text-[#B27B34] uppercase tracking-widest font-semibold block">WHY CHOOSE US</span>
              <h2 className="font-serif text-2xl font-bold text-[#0A2C4B]">Why choose Toyota Chemical Industries for specialty resins</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                ["01 / HERITAGE", "Since 1972", "Over five decades of manufacturing experience"],
                ["02 / QUALITY SYSTEMS", "ISO 9001 & 14001", "Certified quality & environmental management"],
                ["03 / APPLICATION SUPPORT", "Grade matched to your process", "Technical support for metal, concentration and operating conditions"],
                ["04 / DISPATCH SCALE", "25 L to bulk", "Small trials to full charges"],
              ].map(([eyebrow, title, text]) => (
                <Spotlight key={title} className="p-6 bg-white border border-[#0A2C4B]/10 shadow-sm chamfer-tr luxury-card">
                  <div className="font-mono text-[#B27B34] text-xs uppercase font-bold tracking-wider mb-1">{eyebrow}</div>
                  <h3 className="font-serif text-xl font-bold text-[#0A2C4B] mb-1.5">{title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{text}</p>
                </Spotlight>
              ))}
            </div>
          </section>

          <section className="space-y-4" id="faq">
            <div className="border-b border-[#0A2C4B]/15 pb-3">
              <span className="text-[11px] font-mono text-[#B27B34] uppercase tracking-widest font-semibold block">TECHNICAL KNOWLEDGE BASE</span>
              <h2 className="font-serif text-2xl font-bold text-[#0A2C4B]">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-3">
              {faqs.map(([question, answer], index) => (
                <details key={question} className="group bg-white border border-[#0A2C4B]/10 p-5 chamfer-tr faq-row" open={index === 0}>
                  <summary className="flex justify-between items-center font-serif font-bold text-[#0A2C4B] cursor-pointer list-none text-base">
                    <span>{question}</span>
                    <span className="text-[#B27B34] font-mono text-xl shrink-0 ml-4">+</span>
                  </summary>
                  <div className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed pt-3 border-t border-slate-100">{answer}</div>
                </details>
              ))}
            </div>
          </section>
        </div>

        <aside className="lg:col-span-4">
          <div className="sticky top-28 space-y-6">
            <Spotlight className="bg-[#0A2C4B] text-white p-7 chamfer-tr-lg shadow-2xl border-t-2 border-[#B27B34] luxury-card">
              <div className="flex items-center space-x-2 text-[#B27B34] text-[10px] font-mono tracking-widest uppercase mb-2">
                <span>⚙</span><span>TECHNICAL SUPPORT</span>
              </div>
              <h3 className="font-serif text-2xl font-bold mb-2 text-white">Discuss your specialty requirement</h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-6 font-light">Tell us the metal or process problem you need to solve — we’ll recommend and manufacture the right resin.</p>
              <div className="space-y-3">
                <Button href="/contact" goldButton className="w-full">Discuss your process</Button>
                <a href="https://wa.me/919898701010" target="_blank" rel="noopener noreferrer" className="interactive-btn w-full flex items-center justify-center py-2.5 px-4 bg-transparent hover:bg-white/10 text-white text-xs font-semibold uppercase tracking-widest chamfer-tr border border-white/40">WhatsApp us</a>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-700/80 text-center">
                <span className="text-[10px] font-mono text-slate-400 block mb-1">DIRECT TECHNICAL DESK</span>
                <a className="text-xs font-mono text-[#E5A855] hover:text-white" href="tel:+919016711708">+91 90167 11708</a>
              </div>
            </Spotlight>

            <Spotlight className="bg-white border border-[#0A2C4B]/10 p-6 shadow-sm chamfer-tr luxury-card">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
                <h4 className="text-xs font-mono uppercase tracking-widest text-[#0A2C4B] font-bold">Application Specs</h4>
                <span className="text-[9px] font-mono bg-[#F6F9FC] text-slate-600 px-2 py-0.5 border border-slate-200">SPECIALTY</span>
              </div>
              <dl className="space-y-2.5 text-xs font-mono">
                {[
                  ["Chelating:", "Selective metal binding"],
                  ["Targets:", "Cu · Ni · Zn · Pb · Cd"],
                  ["ZLD:", "Effluent polishing"],
                  ["Indicator:", "Colour-change signal"],
                  ["Supply:", "Application specific"],
                ].map(([dt, dd]) => (
                  <div key={dt} className="flex justify-between py-1 border-b border-slate-100 px-1 gap-4">
                    <dt className="text-slate-500">{dt}</dt>
                    <dd className="font-semibold text-[#0A2C4B] text-right">{dd}</dd>
                  </div>
                ))}
              </dl>
            </Spotlight>

            <Spotlight className="bg-white border border-[#0A2C4B]/10 p-6 shadow-sm chamfer-tr luxury-card">
              <h4 className="text-xs font-mono uppercase tracking-widest text-[#0A2C4B] font-bold border-b border-slate-200 pb-3 mb-3">Related products</h4>
              <ul className="text-xs font-medium space-y-2.5 text-slate-700">
                {[
                  { item: "Cation Exchange Resins", href: "/products/cationexchangeresins", image: cationCardImage },
                  { item: "Anion Exchange Resins", href: "/products/anionexchangeresins", image: anionCardImage },
                  { item: "Mixed Bed Resins", href: "/products/mixedbedexchangeresin", image: mixedBedCardImage },
                  { item: "Water Softener Resins", href: "/products/watersoftenerresins", image: softenerCardImage },
                ].map(({ item, href, image }) => (
                  <li key={item}><a className="hover:text-[#1868A8] flex items-center gap-3 py-1" href={href}><img src={image} alt={item} className="h-12 w-12 object-cover border border-slate-200 shrink-0" /><span className="flex-1">{item}</span><span className="text-[#B27B34] font-bold">→</span></a></li>
                ))}
              </ul>
            </Spotlight>
          </div>
        </aside>
      </div>
    </main>
  );
}
export default function Specialty() {
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

        html { scroll-behavior: smooth; }
        body { margin: 0; background: var(--ice); }
        .font-serif { font-family: "Playfair Display", Georgia, serif; }
        .font-mono { font-family: "DM Mono", Consolas, monospace; }

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
          transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease;
        }

        .luxury-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 18px 40px rgba(6,24,43,.10);
        }

        .interactive-btn {
          transition: transform .2s ease, box-shadow .2s ease, background-color .2s ease;
        }

        .interactive-btn:hover {
          transform: translateY(-1px);
        }

        details summary::-webkit-details-marker { display: none; }
        details[open] summary .faq-icon { transform: rotate(45deg); }

        @media (max-width: 640px) {
          .hero-frame-group { margin-top: 12px; }
        }
`}</style>

      <Hero />
      <GradeSelector />
      <MainContent />
</div>
  );
}
