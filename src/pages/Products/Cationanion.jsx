
import React, { useEffect, useState } from "react";
import { Link } from "react-router";

import AppLink from "../../components/common/AppLink";
import cationCardImage from "../../assets/images/cation exchange resin.jpg";
import anionCardImage from "../../assets/images/anion-exchange-resins.jpg";
import mixedBedCardImage from "../../assets/images/mixed-bed-resins.jpg";
import softenerCardImage from "../../assets/images/water softner resin.jpg";
import specialtyCardImage from "../../assets/images/speciality resin.jpg";
import dmPlantAppImage from "../../assets/images/Dm plant application.jpg";
import waterSofteningAppImage from "../../assets/images/water softning.jpg";
import dealkalisationAppImage from "../../assets/images/dealkalisation-resin.jpg";
import { TDS_REQUEST_HREF, tdsHref } from "../../config/tdsDownloads";


const gradeFinder = {
  soft: {
    title: "AGRION C-60",
    description: "Standard softening-grade gel strong acid cation resin, for use in the sodium form in water softening plants.",
    meta: "Strong Acid Cation · Softener Grade · Sodium Form",
    form: "Na⁺",
  },
  dm: {
    title: "AGRION C-100 H",
    description: "Gel strong acid cation resin in hydrogen form, for the cation stage of DM plants and other processes, in multibed and mixed bed exchangers.",
    meta: "Strong Acid Cation · DM Plant Grade · Hydrogen Form",
    form: "H⁺",
  },
  dealk: {
    title: "AGRION WC-50",
    description: "Weak acid cation resin with carboxylic acid groups. Removes hardness linked to alkalinity; used ahead of C-100 in a two-stage deionisation train for higher regeneration efficiency.",
    meta: "Weak Acid Cation · Dealkalisation Grade · Hydrogen Form",
    form: "H⁺",
  },
  zld: {
    title: "AGRION C-100 MP",
    description: "Macroporous strong acid cation resin for heavy-metal removal, condensate polishing and ZLD — engineered for resistance to osmotic shock and efficient regeneration.",
    meta: "Macroporous Strong Acid Cation · Heavy Metal / ZLD · Hydrogen Form",
    form: "H⁺",
  },
  hicap: {
    title: "AGRION C-100 Na",
    description: "Gel strong acid cation resin in sodium form, with the highest total exchange capacity in the range, for water treatment and process duty in multibed and mixed bed exchangers.",
    meta: "Strong Acid Cation · High-Capacity · Sodium Form",
    form: "Na⁺",
  },
};

const faqs = [('Can AGRION cation resins replace the resin I currently run?', 'In most cases, yes. Match on ionic form (sodium or hydrogen), total exchange capacity and bead size, and an AGRION grade will drop into the same duty. Send us the grade and operating conditions you run today — or your current TDS — and we’ll confirm the equivalent grade before you order.'), ('Which AGRION grade should I use for water softening?', 'AGRION C-60 for standard softening and AGRION C-80 for harder water or heavier duty — both sodium-form gel strong acid cation resins. For the softening range, see also our water softener resins.'), ('Which AGRION grade is used for the DM plant cation stage?', 'AGRION C-100 H (hydrogen form) is the cation stage of a demineralisation plant. For two-stage DI, AGRION WC-50 (weak acid cation) sits ahead of it to remove alkalinity-linked hardness and improve regeneration efficiency.'), ('What bead size and exchange capacity do AGRION cation resins have?', 'Particle size is 0.3–1.2 mm across the range, with total exchange capacity from 1.7 meq/ml (C-60) up to 3.9 meq/ml (WC-50). Each grade’s figures are on its card and in the comparison table.'), ('Where do I find the full specification and sieve analysis?', 'Download the TDS on any grade card. It carries the full physical and chemical specification, including wet screen (sieve) grading, uniform coefficient, bulk density and volume change.'), ('Do you supply AGRION cation resins in both sodium and hydrogen form?', 'Yes. Softening grades are supplied in sodium form; DM, dealkalisation and macroporous grades in hydrogen form. Tell us the duty and we’ll confirm the form and the grade.')];

  
function Button({ children, href = "#", goldButton = false, className = "" }) {
  return (
    <AppLink
      href={href}
      className={`interactive-btn inline-flex items-center justify-center px-6 py-3 text-xs font-semibold tracking-widest uppercase chamfer-tr shadow-sm ${goldButton
        ? "bg-[#B27B34] hover:bg-amber-700 text-white border border-[#B27B34]"
        : "bg-[#0A2C4B] hover:bg-[#06182B] text-white border border-[#0A2C4B]"} ${className}`}
    >
      {children}
    </AppLink>
  );
}

function Spotlight({ children, className = "", ...props }) {
  return <div className={`spotlight-surface ${className}`} {...props}>{children}</div>;
}


function Hero() {
  return (
    <section className="relative bg-white border-b border-[#0A2C4B]/10 overflow-hidden pt-10 pb-20 blueprint-pattern">
      <div className="absolute top-6 right-8 pointer-events-none text-right font-mono text-[10px] text-slate-300 hidden lg:block tracking-widest">
        <div>SPEC_DOC // cation</div>
        <div>VAPI · GUJARAT · INDIA</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <nav className="flex items-center text-xs font-mono text-slate-500 mb-8 space-x-2">
          <Link className="hover:text-[#0A2C4B] hover:underline" to="/">Home</Link>
          <span className="text-slate-300">/</span>
          <a className="hover:text-[#0A2C4B] hover:underline" href="#grades">Products</a>
          <span className="text-slate-300">/</span>
          <span className="text-[#B27B34]">Cation Exchange Resins</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center space-x-2 text-[11px] font-mono uppercase tracking-[0.25em] text-[#B27B34] font-semibold mb-4 px-3 py-1 bg-amber-50/70 border border-[#B27B34]/30 chamfer-tr">
              <span className="w-1.5 h-1.5 bg-[#B27B34] animate-pulse" />
              <span>CATION EXCHANGE RESINS</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#0A2C4B] font-bold leading-[1.12] tracking-tight mb-5">
              Cation Exchange
              <br />
              <span className="italic font-normal text-[#B27B34]">Resins</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed mb-5 max-w-2xl">
              Toyota Chemical Industries — a leading manufacturer of cation exchange resins in India since 1972.
            </p>

            <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed mb-5 max-w-2xl">
              Strong and weak acid cation resins — in sodium and hydrogen form — for softening, DM plant, dealkalisation and heavy-metal / ZLD duty. Six AGRION grades, each with its technical data sheet.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <Button href="#finder" className="px-8 py-3.5">
                Find My Grade <span className="ml-2.5 text-[#B27B34]">→</span>
              </Button>
              <Button href="#grades" className="px-8 py-3.5 !bg-white !text-[#0A2C4B] border border-[#0A2C4B]/20 hover:!bg-[#F6F9FC] hover:!border-[#B27B34]">
                View Cation Range
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
                  <img src={cationCardImage} alt="Cation exchange resin beads" className="w-full h-full object-cover object-center" />
                </div>
                <div className="p-5 sm:p-6">
                  <div className="text-[10px] font-mono text-[#B27B34] uppercase tracking-wider font-semibold mb-2">Product Family</div>
                  <div className="text-lg sm:text-xl font-serif font-bold text-[#0A2C4B]">CATION EXCHANGE RESINS</div>
                  <div className="text-sm text-slate-500 mt-2 leading-relaxed">Softening, DM plant, dealkalisation and heavy-metal / ZLD duty</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GradeFinder() {
  const [app, setApp] = useState("");
  const [rtype, setRtype] = useState("");
  const [form, setForm] = useState("");
  const [tec, setTec] = useState("");
  const [esz, setEsz] = useState("");
  const [result, setResult] = useState(null);

  const findGrade = () => {
    const match = gradeFinder[app];
    if (!match) {
      setResult({
        title: "Select an application",
        description: "Choose the duty you need the resin for, or use the contact section for a requirement that is not listed.",
        meta: "INDICATIVE MATCH",
        form: "To be confirmed",
      });
      return;
    }
    setResult(match);
  };

  return (
    <section id="finder" className="py-14 bg-white border-b border-[#0A2C4B]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Spotlight className="bg-[#F6F9FC] border border-[#0A2C4B]/10 p-6 sm:p-8 chamfer-tr-lg shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-7">
            <div>
              <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#B27B34] font-bold mb-2">GRADE FINDER</div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0A2C4B]">Match a cation exchange resin to your duty</h2>
              <p className="text-sm text-slate-600 max-w-3xl mt-3 leading-relaxed">
                Not sure which grade replaces the resin you run today? Enter your application, or what you know about your current resin — type, form, capacity, bead size — and we’ll match it to an AGRION grade, right here. Already know your grade? It’s in the list below.
              </p>
            </div>
            <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400">AGRION / TECHNICAL MATCH</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            <div>
              <label className="block text-[11px] font-mono uppercase tracking-widest text-[#0A2C4B] font-semibold mb-2">Application</label>
              <select value={app} onChange={(e) => setApp(e.target.value)} className="w-full bg-white border border-slate-300 text-sm text-slate-800 py-3 px-3.5 focus:ring-2 focus:ring-[#B27B34] focus:border-[#B27B34]">
                <option value="">Select an application</option>
                <option value="soft">Water softening</option>
                <option value="dm">DM plant (cation stage)</option>
                <option value="dealk">Dealkalisation</option>
                <option value="zld">Heavy metal / ZLD / condensate polishing</option>
                <option value="hicap">High-capacity sodium-cycle duty</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-mono uppercase tracking-widest text-[#0A2C4B] font-semibold mb-2">Resin type</label>
              <select value={rtype} onChange={(e) => setRtype(e.target.value)} className="w-full bg-white border border-slate-300 text-sm text-slate-800 py-3 px-3.5 focus:ring-2 focus:ring-[#B27B34] focus:border-[#B27B34]">
                <option value="">Either / not sure</option>
                <option value="sac">Strong acid cation (SAC)</option>
                <option value="wac">Weak acid cation (WAC)</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-mono uppercase tracking-widest text-[#0A2C4B] font-semibold mb-2">Ionic form</label>
              <select value={form} onChange={(e) => setForm(e.target.value)} className="w-full bg-white border border-slate-300 text-sm text-slate-800 py-3 px-3.5 focus:ring-2 focus:ring-[#B27B34] focus:border-[#B27B34]">
                <option value="">Either / not sure</option>
                <option value="na">Sodium (Na⁺)</option>
                <option value="h">Hydrogen (H⁺)</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-mono uppercase tracking-widest text-[#0A2C4B] font-semibold mb-2">Current resin's total exchange capacity</label>
              <input value={tec} onChange={(e) => setTec(e.target.value)} type="text" inputMode="decimal" placeholder="e.g. 1.8 meq/ml" className="w-full bg-white border border-slate-300 text-sm text-slate-800 py-3 px-3.5 focus:ring-2 focus:ring-[#B27B34] focus:border-[#B27B34] placeholder:text-slate-400 font-mono" />
              <p className="text-[10px] text-slate-500 mt-1">Optional — from your TDS or drum label.</p>
            </div>

            <div>
              <label className="block text-[11px] font-mono uppercase tracking-widest text-[#0A2C4B] font-semibold mb-2">Current resin's effective / bead size</label>
              <input value={esz} onChange={(e) => setEsz(e.target.value)} type="text" placeholder="e.g. 0.50 mm" className="w-full bg-white border border-slate-300 text-sm text-slate-800 py-3 px-3.5 focus:ring-2 focus:ring-[#B27B34] focus:border-[#B27B34] placeholder:text-slate-400 font-mono" />
              <p className="text-[10px] text-slate-500 mt-1">Optional — from your TDS.</p>
            </div>

            <div className="flex items-end">
              <button type="button" onClick={findGrade} className="interactive-btn w-full py-3 px-5 bg-[#0A2C4B] hover:bg-[#06182B] text-white text-xs font-semibold tracking-widest uppercase flex items-center justify-center gap-2 chamfer-tr shadow">
                FIND MY GRADE <span className="text-[#B27B34]">→</span>
              </button>
            </div>
          </div>

          {result && (
            <div className="mt-5 border-l-4 border-[#B27B34] bg-white p-5 shadow-sm">
              <div className="text-[10px] font-mono uppercase tracking-widest text-[#B27B34]">MATCH RESULT</div>
              <div className="font-serif text-xl font-bold text-[#0A2C4B]">{result.title}</div>
              <div className="text-xs text-slate-600 mt-1">{result.description}</div>
              <div className="text-xs font-mono font-bold text-[#1868A8] mt-2">{result.meta} · {result.form}</div>
              <div className="text-[11px] text-slate-500 mt-2">Indicative match against the specifications on file. For a confirmed equivalent, share your full current TDS with our technical team.</div>
            </div>
          )}

        </Spotlight>
      </div>
    </section>
  );
}

function MainContent() {
  return (
    <main className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 space-y-20">

          <Spotlight id="overview" className="bg-white p-8 sm:p-10 border border-[#0A2C4B]/10 shadow-sm relative luxury-card">
            <div className="absolute top-0 left-0 w-24 h-1 bg-[#B27B34]" />
            <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#B27B34] font-bold mb-2">OVERVIEW</div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0A2C4B] leading-snug mb-6">Cation Exchange Resins</h2>

            <div className="text-slate-600 space-y-5 leading-relaxed text-sm sm:text-base">
              <p>Cation Exchange Resins are high-performance ion-exchange materials designed to remove positively charged ions from water and replace them with desired ions. Widely used in water treatment and industrial processes, these resins provide an efficient solution for water softening, demineralization, deionization, and purification.</p>
              <p>Manufactured as durable, porous polymer beads, cation exchange resins contain functional groups that selectively exchange ions such as calcium, magnesium, sodium, and hydrogen.</p>

              <div className="border-l-2 border-[#0A2C4B]/20 pl-4 pt-4">
                <h3 className="font-serif text-lg font-bold text-[#0A2C4B] mb-1">Strong acid and weak acid cation exchange resins</h3>
                <p className="text-xs text-slate-600 leading-normal">Based on their chemical properties and application requirements, they are available in strong acid cation (SAC) and weak acid cation (WAC) formulations. This enables users to select the appropriate resin for specific water quality, treatment objectives, and operating conditions.</p>
              </div>
            </div>
          </Spotlight>

          <section id="grades" className="space-y-8">
            <div className="flex items-end justify-between border-b border-[#0A2C4B]/15 pb-4 gap-4">
              <div>
                <span className="text-xs font-mono text-[#B27B34] uppercase tracking-widest font-semibold block mb-1">THE RANGE</span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0A2C4B]">Toyota Chemical Industries cation exchange resin grades</h2>
                <p className="text-sm text-slate-600 mt-2 max-w-3xl">Key data for each grade below; full physical and chemical specifications are in the downloadable technical data sheet.</p>
              </div>
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest hidden sm:block">06 AGRION GRADES</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <article id="c-60" className="group bg-white border border-[#0A2C4B]/10 p-6 sm:p-7 shadow-sm chamfer-tr luxury-card scroll-mt-28">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#0A2C4B]">AGRION C-60</h3>
                  <p className="text-[11px] font-mono uppercase tracking-wider text-[#B27B34] mt-1">Strong Acid Cation · Softener Grade · Sodium Form</p>
                </div>
                
              </div>
              <p className="text-sm text-slate-600 leading-relaxed mt-4">Standard softening-grade gel strong acid cation resin, for use in the sodium form in water softening plants.</p>
              <div className="grid grid-cols-2 gap-3 mt-5 font-mono text-xs">
                <div className="bg-[#F6F9FC] border border-slate-200 p-3">
                  <span className="block text-[10px] uppercase tracking-wider text-slate-400">Ionic form</span>
                  <b className="text-[#0A2C4B] text-sm">Na⁺</b>
                </div>
                <div className="bg-[#F6F9FC] border border-slate-200 p-3">
                  <span className="block text-[10px] uppercase tracking-wider text-slate-400">Total exchange capacity</span>
                  <b className="text-[#0A2C4B] text-sm">1.7 meq/ml</b>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 mt-5">
                <Button href={tdsHref("c-60")} className="!bg-white !text-[#0A2C4B] border border-[#0A2C4B]/20 hover:!border-[#B27B34] px-4 py-2.5">
                  Download TDS (PDF)
                </Button>
                <Button href="/contact?grade=c-60" goldButton className="px-4 py-2.5">
                  Enquire about C-60
                </Button>
              </div>
              <p className="text-[10px] text-slate-500 mt-3">Full physical &amp; chemical specifications are in the TDS.</p>
            </article>
            <article id="c-80" className="group bg-white border border-[#0A2C4B]/10 p-6 sm:p-7 shadow-sm chamfer-tr luxury-card scroll-mt-28">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#0A2C4B]">AGRION C-80</h3>
                  <p className="text-[11px] font-mono uppercase tracking-wider text-[#B27B34] mt-1">Strong Acid Cation · High-Crosslink Softener · Sodium Form</p>
                </div>
                <span className="text-[10px] font-mono px-2 py-1 bg-[#B27B34] text-white uppercase tracking-widest">PRIORITY GRADE</span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed mt-4">Softening-grade gel resin with a tighter, more crosslinked bead than C-60 — for heavier-duty softening and harder water.</p>
              <div className="grid grid-cols-2 gap-3 mt-5 font-mono text-xs">
                <div className="bg-[#F6F9FC] border border-slate-200 p-3">
                  <span className="block text-[10px] uppercase tracking-wider text-slate-400">Ionic form</span>
                  <b className="text-[#0A2C4B] text-sm">Na⁺</b>
                </div>
                <div className="bg-[#F6F9FC] border border-slate-200 p-3">
                  <span className="block text-[10px] uppercase tracking-wider text-slate-400">Total exchange capacity</span>
                  <b className="text-[#0A2C4B] text-sm">1.8 meq/ml</b>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 mt-5">
                <Button href={tdsHref("c-80")} className="!bg-white !text-[#0A2C4B] border border-[#0A2C4B]/20 hover:!border-[#B27B34] px-4 py-2.5">
                  Download TDS (PDF)
                </Button>
                <Button href="/contact?grade=c-80" goldButton className="px-4 py-2.5">
                  Enquire about C-80
                </Button>
              </div>
              <p className="text-[10px] text-slate-500 mt-3">Full physical &amp; chemical specifications are in the TDS.</p>
            </article>
            <article id="c-100-h" className="group bg-white border border-[#0A2C4B]/10 p-6 sm:p-7 shadow-sm chamfer-tr luxury-card scroll-mt-28">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#0A2C4B]">AGRION C-100 H</h3>
                  <p className="text-[11px] font-mono uppercase tracking-wider text-[#B27B34] mt-1">Strong Acid Cation · DM Plant Grade · Hydrogen Form</p>
                </div>
                <span className="text-[10px] font-mono px-2 py-1 bg-[#B27B34] text-white uppercase tracking-widest">PRIORITY GRADE</span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed mt-4">Gel strong acid cation resin in hydrogen form, for the cation stage of DM plants and other processes, in multibed and mixed bed exchangers.</p>
              <div className="grid grid-cols-2 gap-3 mt-5 font-mono text-xs">
                <div className="bg-[#F6F9FC] border border-slate-200 p-3">
                  <span className="block text-[10px] uppercase tracking-wider text-slate-400">Ionic form</span>
                  <b className="text-[#0A2C4B] text-sm">H⁺</b>
                </div>
                <div className="bg-[#F6F9FC] border border-slate-200 p-3">
                  <span className="block text-[10px] uppercase tracking-wider text-slate-400">Total exchange capacity</span>
                  <b className="text-[#0A2C4B] text-sm">1.8 meq/ml</b>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 mt-5">
                <Button href={tdsHref("c-100-h")} className="!bg-white !text-[#0A2C4B] border border-[#0A2C4B]/20 hover:!border-[#B27B34] px-4 py-2.5">
                  Download TDS (PDF)
                </Button>
                <Button href="/contact?grade=c-100-h" goldButton className="px-4 py-2.5">
                  Enquire about C-100 H
                </Button>
              </div>
              <p className="text-[10px] text-slate-500 mt-3">Full physical &amp; chemical specifications are in the TDS.</p>
            </article>
            <article id="wc-50" className="group bg-white border border-[#0A2C4B]/10 p-6 sm:p-7 shadow-sm chamfer-tr luxury-card scroll-mt-28">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#0A2C4B]">AGRION WC-50</h3>
                  <p className="text-[11px] font-mono uppercase tracking-wider text-[#B27B34] mt-1">Weak Acid Cation · Dealkalisation Grade · Hydrogen Form</p>
                </div>
                
              </div>
              <p className="text-sm text-slate-600 leading-relaxed mt-4">Weak acid cation resin with carboxylic acid groups. Removes hardness linked to alkalinity; used ahead of C-100 in a two-stage deionisation train for higher regeneration efficiency.</p>
              <div className="grid grid-cols-2 gap-3 mt-5 font-mono text-xs">
                <div className="bg-[#F6F9FC] border border-slate-200 p-3">
                  <span className="block text-[10px] uppercase tracking-wider text-slate-400">Ionic form</span>
                  <b className="text-[#0A2C4B] text-sm">H⁺</b>
                </div>
                <div className="bg-[#F6F9FC] border border-slate-200 p-3">
                  <span className="block text-[10px] uppercase tracking-wider text-slate-400">Total exchange capacity</span>
                  <b className="text-[#0A2C4B] text-sm">3.9 meq/ml</b>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 mt-5">
                <Button href={TDS_REQUEST_HREF} className="!bg-white !text-[#0A2C4B] border border-[#0A2C4B]/20 hover:!border-[#B27B34] px-4 py-2.5">
                  Request TDS
                </Button>
                <Button href="/contact?grade=wc-50" goldButton className="px-4 py-2.5">
                  Enquire about WC-50
                </Button>
              </div>
              <p className="text-[10px] text-slate-500 mt-3">Full physical &amp; chemical specifications are in the TDS.</p>
            </article>
            <article id="c-100-mp" className="group bg-white border border-[#0A2C4B]/10 p-6 sm:p-7 shadow-sm chamfer-tr luxury-card scroll-mt-28">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#0A2C4B]">AGRION C-100 MP</h3>
                  <p className="text-[11px] font-mono uppercase tracking-wider text-[#B27B34] mt-1">Macroporous Strong Acid Cation · Heavy Metal / ZLD · Hydrogen Form</p>
                </div>
                
              </div>
              <p className="text-sm text-slate-600 leading-relaxed mt-4">Macroporous strong acid cation resin for heavy-metal removal, condensate polishing and ZLD — engineered for resistance to osmotic shock and efficient regeneration.</p>
              <div className="grid grid-cols-2 gap-3 mt-5 font-mono text-xs">
                <div className="bg-[#F6F9FC] border border-slate-200 p-3">
                  <span className="block text-[10px] uppercase tracking-wider text-slate-400">Ionic form</span>
                  <b className="text-[#0A2C4B] text-sm">H⁺</b>
                </div>
                <div className="bg-[#F6F9FC] border border-slate-200 p-3">
                  <span className="block text-[10px] uppercase tracking-wider text-slate-400">Total exchange capacity</span>
                  <b className="text-[#0A2C4B] text-sm">1.85 meq/ml</b>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 mt-5">
                <Button href={tdsHref("c-100-mp")} className="!bg-white !text-[#0A2C4B] border border-[#0A2C4B]/20 hover:!border-[#B27B34] px-4 py-2.5">
                  Download TDS (PDF)
                </Button>
                <Button href="/contact?grade=c-100-mp" goldButton className="px-4 py-2.5">
                  Enquire about C-100 MP
                </Button>
              </div>
              <p className="text-[10px] text-slate-500 mt-3">Full physical &amp; chemical specifications are in the TDS.</p>
            </article>
            <article id="c-100-na" className="group bg-white border border-[#0A2C4B]/10 p-6 sm:p-7 shadow-sm chamfer-tr luxury-card scroll-mt-28">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#0A2C4B]">AGRION C-100 Na</h3>
                  <p className="text-[11px] font-mono uppercase tracking-wider text-[#B27B34] mt-1">Strong Acid Cation · High-Capacity · Sodium Form</p>
                </div>
                
              </div>
              <p className="text-sm text-slate-600 leading-relaxed mt-4">Gel strong acid cation resin in sodium form, with the highest total exchange capacity in the range, for water treatment and process duty in multibed and mixed bed exchangers.</p>
              <div className="grid grid-cols-2 gap-3 mt-5 font-mono text-xs">
                <div className="bg-[#F6F9FC] border border-slate-200 p-3">
                  <span className="block text-[10px] uppercase tracking-wider text-slate-400">Ionic form</span>
                  <b className="text-[#0A2C4B] text-sm">Na⁺</b>
                </div>
                <div className="bg-[#F6F9FC] border border-slate-200 p-3">
                  <span className="block text-[10px] uppercase tracking-wider text-slate-400">Total exchange capacity</span>
                  <b className="text-[#0A2C4B] text-sm">2.0 meq/ml</b>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 mt-5">
                <Button href={tdsHref("c-100-na")} className="!bg-white !text-[#0A2C4B] border border-[#0A2C4B]/20 hover:!border-[#B27B34] px-4 py-2.5">
                  Download TDS (PDF)
                </Button>
                <Button href="/contact?grade=c-100-na" goldButton className="px-4 py-2.5">
                  Enquire about C-100 Na
                </Button>
              </div>
              <p className="text-[10px] text-slate-500 mt-3">Full physical &amp; chemical specifications are in the TDS.</p>
            </article>
            </div>
          </section>

          <section id="value" className="space-y-6">
            <div className="border-b border-[#0A2C4B]/15 pb-3">
              <span className="text-[11px] font-mono text-[#B27B34] uppercase tracking-widest font-semibold block">VALUE</span>
              <h2 className="font-serif text-2xl font-bold text-[#0A2C4B]">Why cation exchange resins are valued</h2>
            </div>
            <div className="bg-white border border-[#0A2C4B]/10 p-6 sm:p-8 chamfer-tr luxury-card">
              <p className="text-sm text-slate-600 leading-relaxed">Cation exchange resins are valued for their high exchange capacity, chemical stability, consistent performance, and regeneration capability. They effectively:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5">
                {[
                  "reduce water hardness",
                  "minimize scale formation",
                  "protect downstream equipment",
                  "improve the efficiency and reliability of water-treatment systems",
                ].map((item, index) => (
                  <div key={item} className="flex gap-3 items-start bg-[#F6F9FC] border border-slate-200 p-4 chamfer-tr">
                    <span className="font-mono text-[10px] text-[#B27B34] font-bold">0{index + 1}</span>
                    <span className="text-sm text-[#0A2C4B]">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-slate-600 leading-relaxed mt-5">Their versatility makes them suitable for a wide range of applications across power generation, pharmaceuticals, food and beverage, chemicals, electronics, and general industrial water treatment. With the right resin selection and operating conditions, cation exchange technology delivers reliable ion removal and optimized treatment performance while supporting long service life and cost-effective operation.</p>
            </div>
          </section>

          <section id="toyota-cation" className="space-y-6">
            <div className="border-b border-[#0A2C4B]/15 pb-3">
              <span className="text-[11px] font-mono text-[#B27B34] uppercase tracking-widest font-semibold block">TOYOTA CHEMICAL INDUSTRIES</span>
              <h2 className="font-serif text-2xl font-bold text-[#0A2C4B]">Cation exchange resins from Toyota Chemical Industries</h2>
            </div>
            <Spotlight className="bg-[#0A2C4B] text-white p-7 chamfer-tr-lg shadow-xl border-t-2 border-[#B27B34] luxury-card">
              <p className="text-sm text-slate-200 leading-relaxed">At Toyota Chemical Industries Pvt Ltd, we provide quality cation exchange resins engineered to meet diverse industrial water-treatment requirements. Our products are designed for dependable performance, efficient regeneration, and consistent results across demanding applications. Choose the right cation exchange resin to achieve effective hardness removal, superior water quality, and reliable process performance.</p>
            </Spotlight>
          </section>

          <section id="compare" className="space-y-6">
            <div className="flex items-end justify-between border-b border-[#0A2C4B]/15 pb-3 gap-4">
              <div>
                <span className="text-[11px] font-mono text-[#B27B34] uppercase tracking-widest font-semibold block">AT A GLANCE</span>
                <h2 className="font-serif text-2xl font-bold text-[#0A2C4B]">Which cation exchange resin for your plant?</h2>
              </div>
              <span className="text-[11px] font-mono text-slate-400">PERFORMANCE MATRIX</span>
            </div>

            <div className="overflow-x-auto border border-[#0A2C4B]/15 bg-white shadow-sm chamfer-tr">
              <table className="w-full min-w-[720px] text-left text-xs text-slate-700">
                <thead className="bg-[#0A2C4B] text-white font-mono text-[11px] uppercase tracking-wider">
                  <tr>
                    <th className="py-4 px-4">Grade</th>
                    <th className="py-4 px-4">Ionic form</th>
                    <th className="py-4 px-4">Total exchange capacity</th>
                    <th className="py-4 px-4">Typical duty</th>
                  </tr>
                </thead>
                <tbody className="font-mono">
                  <tr className="border-b border-slate-200 last:border-0 ">
                    <td className="py-4 px-4 font-bold text-[#B27B34]">C-60</td>
                    <td className="py-4 px-4">Na⁺</td>
                    <td className="py-4 px-4">1.7 meq/ml</td>
                    <td className="py-4 px-4 font-sans">Standard water softening</td>
                  </tr>
                  <tr className="border-b border-slate-200 last:border-0 bg-amber-50/20">
                    <td className="py-4 px-4 font-bold text-[#B27B34]">C-80</td>
                    <td className="py-4 px-4">Na⁺</td>
                    <td className="py-4 px-4">1.8 meq/ml</td>
                    <td className="py-4 px-4 font-sans">Heavier-duty softening, harder water</td>
                  </tr>
                  <tr className="border-b border-slate-200 last:border-0 ">
                    <td className="py-4 px-4 font-bold text-[#B27B34]">C-100 H</td>
                    <td className="py-4 px-4">H⁺</td>
                    <td className="py-4 px-4">1.8 meq/ml</td>
                    <td className="py-4 px-4 font-sans">DM plant cation stage</td>
                  </tr>
                  <tr className="border-b border-slate-200 last:border-0 bg-amber-50/20">
                    <td className="py-4 px-4 font-bold text-[#B27B34]">WC-50</td>
                    <td className="py-4 px-4">H⁺</td>
                    <td className="py-4 px-4">3.9 meq/ml</td>
                    <td className="py-4 px-4 font-sans">Dealkalisation — first stage ahead of C-100</td>
                  </tr>
                  <tr className="border-b border-slate-200 last:border-0 ">
                    <td className="py-4 px-4 font-bold text-[#B27B34]">C-100 MP</td>
                    <td className="py-4 px-4">H⁺</td>
                    <td className="py-4 px-4">1.85 meq/ml</td>
                    <td className="py-4 px-4 font-sans">Heavy metal removal, condensate polishing, ZLD</td>
                  </tr>
                  <tr className="border-b border-slate-200 last:border-0 bg-amber-50/20">
                    <td className="py-4 px-4 font-bold text-[#B27B34]">C-100 Na</td>
                    <td className="py-4 px-4">Na⁺</td>
                    <td className="py-4 px-4">2.0 meq/ml</td>
                    <td className="py-4 px-4 font-sans">High-capacity sodium-cycle duty</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="why" className="space-y-6">
            <div className="border-b border-[#0A2C4B]/15 pb-3">
              <span className="text-[11px] font-mono text-[#B27B34] uppercase tracking-widest font-semibold block">WHY CHOOSE US</span>
              <h2 className="font-serif text-2xl font-bold text-[#0A2C4B]">Why choose Toyota Chemical Industries for cation exchange resins</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                ["01 / HERITAGE", "Since 1972", "Over five decades of manufacturing experience"],
                ["02 / QUALITY SYSTEMS", "ISO 9001 & 14001", "Certified quality & environmental management"],
                ["03 / DISPATCH SCALE", "25 L to bulk", "No upper limit; small top-ups to full changes"],
                ["04 / TECHNICAL DATA", "TDS with every grade", "Bead size, exchange capacity, sieve analysis"],
              ].map(([eyebrow, title, text]) => (
                <Spotlight key={title} className="p-6 bg-white border border-[#0A2C4B]/10 shadow-sm chamfer-tr luxury-card">
                  <div className="font-mono text-[#B27B34] text-xs uppercase font-bold tracking-wider mb-1">{eyebrow}</div>
                  <h3 className="font-serif text-xl font-bold text-[#0A2C4B] mb-1.5">{title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{text}</p>
                </Spotlight>
              ))}
            </div>
          </section>

          <section id="faq" className="space-y-4">
            <div className="border-b border-[#0A2C4B]/15 pb-3">
              <span className="text-[11px] font-mono text-[#B27B34] uppercase tracking-widest font-semibold block">TECHNICAL KNOWLEDGE BASE</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0A2C4B]">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-3">
              <details className="group bg-white border border-[#0A2C4B]/10 p-5 chamfer-tr faq-row" open>
                <summary className="flex justify-between items-center font-serif font-bold text-[#0A2C4B] cursor-pointer list-none text-base">
                  <span>Can AGRION cation resins replace the resin I currently run?</span>
                  <span className="text-[#B27B34] font-mono text-xl shrink-0 ml-4">+</span>
                </summary>
                <div className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed pt-3 border-t border-slate-100">In most cases, yes. Match on ionic form (sodium or hydrogen), total exchange capacity and bead size, and an AGRION grade will drop into the same duty. Send us the grade and operating conditions you run today — or your current TDS — and we’ll confirm the equivalent grade before you order.</div>
              </details>
              <details className="group bg-white border border-[#0A2C4B]/10 p-5 chamfer-tr faq-row" >
                <summary className="flex justify-between items-center font-serif font-bold text-[#0A2C4B] cursor-pointer list-none text-base">
                  <span>Which AGRION grade should I use for water softening?</span>
                  <span className="text-[#B27B34] font-mono text-xl shrink-0 ml-4">+</span>
                </summary>
                <div className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed pt-3 border-t border-slate-100">AGRION C-60 for standard softening and AGRION C-80 for harder water or heavier duty — both sodium-form gel strong acid cation resins. For the softening range, see also our water softener resins.</div>
              </details>
              <details className="group bg-white border border-[#0A2C4B]/10 p-5 chamfer-tr faq-row" >
                <summary className="flex justify-between items-center font-serif font-bold text-[#0A2C4B] cursor-pointer list-none text-base">
                  <span>Which AGRION grade is used for the DM plant cation stage?</span>
                  <span className="text-[#B27B34] font-mono text-xl shrink-0 ml-4">+</span>
                </summary>
                <div className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed pt-3 border-t border-slate-100">AGRION C-100 H (hydrogen form) is the cation stage of a demineralisation plant. For two-stage DI, AGRION WC-50 (weak acid cation) sits ahead of it to remove alkalinity-linked hardness and improve regeneration efficiency.</div>
              </details>
              <details className="group bg-white border border-[#0A2C4B]/10 p-5 chamfer-tr faq-row" >
                <summary className="flex justify-between items-center font-serif font-bold text-[#0A2C4B] cursor-pointer list-none text-base">
                  <span>What bead size and exchange capacity do AGRION cation resins have?</span>
                  <span className="text-[#B27B34] font-mono text-xl shrink-0 ml-4">+</span>
                </summary>
                <div className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed pt-3 border-t border-slate-100">Particle size is 0.3–1.2 mm across the range, with total exchange capacity from 1.7 meq/ml (C-60) up to 3.9 meq/ml (WC-50). Each grade’s figures are on its card and in the comparison table.</div>
              </details>
              <details className="group bg-white border border-[#0A2C4B]/10 p-5 chamfer-tr faq-row" >
                <summary className="flex justify-between items-center font-serif font-bold text-[#0A2C4B] cursor-pointer list-none text-base">
                  <span>Where do I find the full specification and sieve analysis?</span>
                  <span className="text-[#B27B34] font-mono text-xl shrink-0 ml-4">+</span>
                </summary>
                <div className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed pt-3 border-t border-slate-100">Download the TDS on any grade card. It carries the full physical and chemical specification, including wet screen (sieve) grading, uniform coefficient, bulk density and volume change.</div>
              </details>
              <details className="group bg-white border border-[#0A2C4B]/10 p-5 chamfer-tr faq-row" >
                <summary className="flex justify-between items-center font-serif font-bold text-[#0A2C4B] cursor-pointer list-none text-base">
                  <span>Do you supply AGRION cation resins in both sodium and hydrogen form?</span>
                  <span className="text-[#B27B34] font-mono text-xl shrink-0 ml-4">+</span>
                </summary>
                <div className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed pt-3 border-t border-slate-100">Yes. Softening grades are supplied in sodium form; DM, dealkalisation and macroporous grades in hydrogen form. Tell us the duty and we’ll confirm the form and the grade.</div>
              </details>
            </div>
          </section>
        </div>

        <aside className="lg:col-span-4">
          <div className="sticky top-28 space-y-6">
            <Spotlight className="bg-[#0A2C4B] text-white p-7 chamfer-tr-lg shadow-2xl border-t-2 border-[#B27B34] luxury-card">
              <div className="flex items-center space-x-2 text-[#B27B34] text-[10px] font-mono tracking-widest uppercase mb-2">
                <span>⚙</span><span>TECHNICAL SUPPORT</span>
              </div>
              <h3 className="font-serif text-2xl font-bold mb-2 text-white">Confirm your cation grade for your plant</h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-6 font-light">Send the grade and operating conditions you run today — we’ll confirm the matching AGRION grade and attach its TDS.</p>
              <div className="space-y-3">
                <Button href="mailto:info@toyotachemicals.co.in" goldButton className="w-full">Send an enquiry</Button>
                <a href="https://wa.me/919898701010" target="_blank" rel="noopener noreferrer" className="interactive-btn w-full flex items-center justify-center py-2.5 px-4 bg-transparent hover:bg-white/10 text-white text-xs font-semibold uppercase tracking-widest chamfer-tr border border-white/40">WhatsApp us</a>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-700/80 text-center">
                <span className="text-[10px] font-mono text-slate-400 block mb-1">DIRECT TECHNICAL DESK</span>
                <a className="text-xs font-mono text-[#E5A855] hover:text-white" href="tel:+919016711708">+91 90167 11708</a>
              </div>
            </Spotlight>

            <Spotlight className="bg-white border border-[#0A2C4B]/10 p-6 shadow-sm chamfer-tr luxury-card">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
                <h4 className="text-xs font-mono uppercase tracking-widest text-[#0A2C4B] font-bold">Cation Resin Specs</h4>
                <span className="text-[9px] font-mono bg-[#F6F9FC] text-slate-600 px-2 py-0.5 border border-slate-200">AGRION</span>
              </div>
              <dl className="space-y-2.5 text-xs font-mono">
                {[
                  ["Range:", "6 AGRION grades"],
                  ["Forms:", "Na⁺ and H⁺"],
                  ["Types:", "SAC and WAC"],
                  ["Capacity:", "1.7–3.9 meq/ml"],
                  ["Particle size:", "0.3–1.2 mm"],
                ].map(([dt, dd]) => (
                  <div key={dt} className="flex justify-between py-1 border-b border-slate-100 px-1 gap-4">
                    <dt className="text-slate-500">{dt}</dt>
                    <dd className="font-semibold text-[#0A2C4B] text-right">{dd}</dd>
                  </div>
                ))}
              </dl>
            </Spotlight>

            <Spotlight className="bg-white border border-[#0A2C4B]/10 p-6 shadow-sm chamfer-tr luxury-card">
              <div className="text-xs font-mono uppercase tracking-widest text-[#B27B34] font-bold mb-3">Related products</div>
              <ul className="space-y-2.5 text-xs text-slate-600">
                {[
                  { item: "Anion Exchange Resins", path: "/products/anionexchangeresins", image: anionCardImage },
                  { item: "Mixed Bed Resins", path: "/products/mixedbedexchangeresin", image: mixedBedCardImage },
                  { item: "Water Softener Resins", path: "/products/watersoftenerresins", image: softenerCardImage },
                  { item: "Specialty Resins", path: "/products/specialtyresins", image: specialtyCardImage },
                ].map(({ item, path, image }) => <li key={item} className="border-b border-slate-100 pb-2"><Link className="group flex items-center gap-3 hover:text-[#B27B34]" to={path}><img src={image} alt={item} className="h-12 w-12 object-cover border border-slate-200 shrink-0" /><span>{item} →</span></Link></li>)}
              </ul>
            </Spotlight>

            <Spotlight className="bg-white border border-[#0A2C4B]/10 p-6 shadow-sm chamfer-tr luxury-card">
              <div className="text-xs font-mono uppercase tracking-widest text-[#B27B34] font-bold mb-3">Related applications</div>
              <ul className="space-y-2.5 text-xs text-slate-600">
                {[
                  { item: "DM Plant / Demineralisation", path: "/applications/dm-plant-resin", image: dmPlantAppImage },
                  { item: "Water Softening", path: "/applications/water-softener-resin", image: waterSofteningAppImage },
                  { item: "Dealkalisation", path: "/applications/dealkalisation-resin", image: dealkalisationAppImage },
                ].map(({ item, path, image }) => <li key={item} className="border-b border-slate-100 pb-2"><Link className="group flex items-center gap-3 hover:text-[#B27B34]" to={path}><img src={image} alt={item} className="h-12 w-12 object-cover border border-slate-200 shrink-0" /><span>{item} →</span></Link></li>)}
              </ul>
            </Spotlight>

            <Spotlight className="bg-white border border-[#0A2C4B]/10 p-6 shadow-sm chamfer-tr luxury-card">
              <div className="text-xs font-mono uppercase tracking-widest text-[#B27B34] font-bold mb-3">Why Toyota</div>
              <div className="flex flex-wrap gap-2">
                {["Since 1972", "ISO 9001", "ISO 14001", "25 L to bulk", "Made in India"].map((item) => (
                  <span key={item} className="text-[10px] font-mono bg-[#F6F9FC] border border-slate-200 px-2.5 py-1.5 text-[#0A2C4B]">{item}</span>
                ))}
              </div>
            </Spotlight>
          </div>
        </aside>
      </div>
    </main>
  );
}

function EnquiryBand() {
  return (
    <section id="enquiry-form" className="bg-[#06182B] border-y border-[#B27B34]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
        <div>
          <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#E5A855] font-bold mb-2">CONFIRM THE RIGHT GRADE</div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">Confirm the right cation grade for your plant.</h2>
          <p className="text-sm text-slate-300 mt-3 max-w-2xl">Share the grade and operating conditions you run today and we’ll confirm the match and attach its TDS.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button href="mailto:info@toyotachemicals.co.in" goldButton>Request a TDS</Button>
          <Button href="tel:+919016711708" className="!bg-transparent !border-white/30">Call technical desk</Button>
        </div>
      </div>
    </section>
  );
}


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
      handlers.forEach(([surface, handler]) => surface.removeEventListener("mousemove", handler));
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
          background-image: radial-gradient(circle, rgba(10,44,75,.13) 1px, transparent 1px);
          background-size: 14px 14px;
        }

        .spotlight-surface { position: relative; overflow: hidden; }
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
        .interactive-btn:hover { transform: translateY(-1px); }

        details summary::-webkit-details-marker { display: none; }
        details[open] summary .faq-icon { transform: rotate(45deg); }

        @media (max-width: 640px) {
          .hero-frame-group { margin-top: 12px; }
        }
      `}</style>


      <Hero />
      <GradeFinder />
      <MainContent />
      <EnquiryBand />
</div>
  );
}
