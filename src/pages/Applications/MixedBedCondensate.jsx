import React from "react";
import { Link } from "react-router";
import mixedBedHeroImage from "../../assets/images/mixed bed condensate polishing.jpg";
import mixedBedGenerated from "../../assets/images/application-real/ap51.png";
import mixedBedSupportImage from "../../assets/images/application-real/ap52.png";

const C = {
  navy: "#0A2C4B", deep: "#051826", royal: "#1868A8", sky: "#4A9BD1",
  gold: "#B27B34", goldLight: "#F4E7D2", ice: "#EFF6FC", tint: "#F7FAFD", line: "#C8DCEC",
};

const stages = [
  {n:"1", duty:"Duty A", title:"Polish demineralised water to ultrapure", tag:"The grade", text:"After a two-bed DM plant, a mixed bed drives conductivity and silica far lower than a two-bed train alone — the final step for high-pressure boiler feed, ultrapure and high-purity process water.", grades:["AGRION MB-1151"], link:"/products/mixedbedexchangeresin", linkText:"Mixed bed resins"},
  {n:"2", duty:"Duty B", title:"Polish returning condensate", tag:"The grade", text:"In a steam plant, a condensate polisher removes corrosion products and dissolved ions from returning condensate — and protects the cycle in the event of a condenser leak — before the water re-enters the boiler.", grades:["AGRION MB-1151"], link:"/applications/dm-plant-resin", linkText:"DM plant"},
  {n:"+", duty:"Charge your own bed", title:"Or supply the components separately", tag:"The grades", text:"Prefer to mix on site? The mixed bed is built from a strong acid cation and a Type 1 strong base anion grade, which we also supply separately to charge your own bed.", grades:["AGRION C-100 H","AGRION A-400 MB"]},
];

const faqs = [
 ["What is condensate polishing, and why is it needed?","Returning condensate carries corrosion products and dissolved ions picked up in the steam cycle. A condensate polisher — a mixed bed of cation and anion resin — removes them before the water re-enters the boiler, protecting boilers and turbines and guarding against condenser leaks."],
 ["What is the difference between a two-bed DM plant and a mixed bed?","A two-bed train (separate cation then anion) removes the bulk of dissolved ions but leaves a residual that limits purity. A mixed bed blends the two resins so the water sees many demineralisation stages at once, driving conductivity and silica much lower. High-purity duties use two-bed followed by a mixed bed."],
 ["What water quality can a mixed bed achieve?","A mixed bed polishes demineralised water and condensate to very low conductivity and high resistivity with trace silica — ultrapure quality. The exact figures depend on your inlet water and vessel design."],
 ["Which AGRION grade is used for mixed bed and condensate polishing?","AGRION MB-1151, a ready-mixed bed of strong acid cation and Type 1 strong base anion resin supplied in the working H⁺/OH⁻ forms."],
 ["Can I buy the cation and anion resins separately?","Yes. MB-1151 is built from AGRION C-100 H (cation) and AGRION A-400 MB (anion), both of which we supply separately if you prefer to charge your own bed."],
 ["How do I know when to replace the polishing resin?","Rising treated-water conductivity, earlier silica or sodium breakthrough, or shorter runs between regenerations all point to exhaustion. Share your outlet trends and we’ll advise whether a change is due."],
 ["Can AGRION MB-1151 replace my current mixed bed resin?","In most cases, yes. Match the cation and anion resin types, the cation-to-anion ratio and the working forms and it drops into the same duty. Share your outlet spec and current TDS and we’ll confirm the equivalent."],
];

function ImagePlaceholder({ second = false }) {
  return (
    <figure className="my-8 overflow-hidden border border-[#C8DCEC] bg-[#F7FAFD] shadow-sm">
      <img
        src={second ? mixedBedSupportImage : mixedBedGenerated}
        alt={second ? "Mixed bed resin beads for ultrapure and condensate polishing service" : "Mixed bed condensate polishing system and resin process"}
        loading="lazy"
        className="block w-full aspect-[16/9] object-cover object-center"
      />
    </figure>
  );
}

export default function MixedBedCondensatePolishing(){
 return <div className="bg-white text-slate-800 font-sans antialiased">
  <style>{`@import url('https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');
  .font-serif{font-family:'EB Garamond',Georgia,serif}.font-mono{font-family:'IBM Plex Mono',monospace}.font-sans{font-family:Inter,sans-serif}
  .blueprint{background-size:32px 32px;background-image:linear-gradient(to right,rgba(200,220,236,.35) 1px,transparent 1px),linear-gradient(to bottom,rgba(200,220,236,.35) 1px,transparent 1px)}
  .blueprint-dark{background-size:36px 36px;background-image:linear-gradient(to right,rgba(74,155,209,.07) 1px,transparent 1px),linear-gradient(to bottom,rgba(74,155,209,.07) 1px,transparent 1px)}
  .corner-bracket{position:relative}.corner-bracket:before,.corner-bracket:after{content:'';position:absolute;width:12px;height:12px;border-color:#B27B34;border-style:solid;pointer-events:none}.corner-bracket:before{top:-1px;left:-1px;border-width:2px 0 0 2px}.corner-bracket:after{right:-1px;bottom:-1px;border-width:0 2px 2px 0}
  .clients{padding:64px 0;background:#F7FAFD;border-top:1px solid #C8DCEC;text-align:center}.clients>.wrap{max-width:80rem;margin:auto;padding:0 1rem}.clients .eyebrow{font-family:'IBM Plex Mono',monospace;font-size:.72rem;letter-spacing:.18em;text-transform:uppercase;font-weight:700;color:#1868A8}.clients h2{font-family:'EB Garamond',serif;font-size:2rem;color:#0A2C4B}.marquee{margin-top:26px;overflow:hidden}.track{display:flex;width:max-content;animation:cscroll 55s linear infinite}.marquee:hover .track{animation-play-state:paused}.chip{flex:0 0 auto;width:184px;height:108px;margin-right:18px;background:#fff;border:1px solid #C8DCEC;display:flex;align-items:center;justify-content:center;padding:16px 20px;box-shadow:0 6px 18px rgba(10,44,75,.06)}.chip img{max-width:100%;max-height:66px;width:auto;object-fit:contain}@keyframes cscroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}`}</style>

  <section className="relative overflow-hidden border-b border-[#C8DCEC] bg-gradient-to-b from-white via-[#F7FAFD] to-[#EFF6FC] blueprint pt-14 pb-16" style={{backgroundImage: `linear-gradient(90deg, rgba(247,250,253,1) 0%, rgba(247,250,253,.995) 28%, rgba(247,250,253,.97) 42%, rgba(247,250,253,.90) 52%, rgba(247,250,253,.70) 61%, rgba(247,250,253,.38) 70%, rgba(247,250,253,.12) 82%, rgba(247,250,253,.03) 100%), linear-gradient(180deg, rgba(247,250,253,.10) 0%, rgba(247,250,253,.16) 100%), url(${mixedBedHeroImage})`, backgroundSize: "cover", backgroundPosition: "center center", backgroundRepeat: "no-repeat"}}>
   <div className="absolute -top-32 right-0 w-96 h-96 bg-[#4A9BD1]/10 rounded-full blur-3xl" />
   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
    <p className="font-mono text-xs text-slate-500 mb-7"><Link to="/">Home</Link> <span className="mx-2">›</span><Link to="/applications">Applications</Link><span className="mx-2">›</span><b className="text-[#0A2C4B]">Mixed Bed / Condensate Polishing</b></p>
    <div className="max-w-[720px]">
     <div className="inline-flex border border-[#C8DCEC] bg-white px-3 py-1.5 font-mono text-xs tracking-wider text-[#1868A8] font-semibold">// APPLICATIONS — MIXED BED / CONDENSATE POLISHING</div>
     <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#0A2C4B] leading-[1.04] mt-5 max-w-[720px] [text-shadow:0_1px_0_rgba(255,255,255,.85)]">Mixed bed &amp; <em className="text-[#1868A8]">condensate polishing resin</em></h1>
     <p className="mt-6 max-w-[680px] text-base sm:text-lg text-[#34495E] font-medium leading-relaxed">The ready-mixed cation and anion resin that polishes demineralised water and returning condensate to ultrapure quality — protecting boilers, turbines and high-purity processes.</p>
     <div className="flex flex-wrap gap-4 mt-7"><Link to="/contact" className="px-7 py-3.5 bg-[#B27B34] text-white font-mono text-xs uppercase tracking-widest font-semibold">Enquire now</Link><Link to="/products" className="px-7 py-3.5 bg-white border border-[#C8DCEC] text-[#0A2C4B] font-mono text-xs uppercase tracking-widest font-semibold">View our resins</Link></div>
     <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-10 pt-7 border-t border-[#C8DCEC]">{["Since 1972","ISO 9001:2015","ISO 14001:2015","TDS with every grade"].map(x=><div key={x} className="bg-white/80 border border-[#C8DCEC] px-3 py-3 font-mono text-xs font-semibold text-[#0A2C4B]">{x}</div>)}</div>
    </div>
   </div>
  </section>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10">
   <main className="min-w-0">
    <section><p className="font-mono text-xs uppercase tracking-widest text-[#1868A8] font-semibold">// The process</p><h2 className="font-serif text-3xl sm:text-4xl text-[#0A2C4B] mt-2">Why mixed bed &amp; condensate polishing resin matters</h2><div className="mt-5 text-slate-600 leading-relaxed space-y-4"><p>A two-bed demineraliser removes most dissolved ions, but a small residual remains — enough to limit purity and, in a steam plant, to let corrosion products and dissolved ions build up in returning condensate. A mixed bed closes that gap: it polishes demineralised water and condensate to very low conductivity and high resistivity, with trace silica.</p><p>The mixed bed intimately blends strong acid cation and strong base anion resin, so the water passes through many exchange stages at once. Toyota Chemical Industries supplies the ready-mixed grade for polishing and condensate duty, with a technical data sheet.</p></div></section>
    <ImagePlaceholder />
    <section id="how" className="py-12 border-t border-[#C8DCEC]"><p className="font-mono text-xs uppercase tracking-widest text-[#B27B34] font-semibold">// How it works</p><h2 className="font-serif text-3xl sm:text-4xl text-[#0A2C4B] mt-2">Toyota Chemical Industries mixed bed &amp; condensate polishing resin, stage by stage</h2><p className="mt-3 text-slate-600">Where the mixed bed sits in your train — built from a specific AGRION grade, manufactured by Toyota Chemical Industries.</p>
     <div className="space-y-6 mt-8">{stages.map(s=><article key={s.n+s.title} className="corner-bracket grid md:grid-cols-[190px_1fr] border border-[#C8DCEC] bg-[#F7FAFD] shadow-[0_12px_30px_rgba(5,24,38,.08)]"><div className="p-6 bg-[#EFF6FC] border-b md:border-b-0 md:border-r border-[#C8DCEC]"><span className="inline-grid place-items-center w-11 h-11 bg-[#0A2C4B] text-white font-mono font-bold">{s.n}</span><div className="mt-4 font-mono text-[10px] uppercase tracking-widest text-[#B27B34] font-bold">{s.duty}</div><h3 className="font-serif text-xl text-[#0A2C4B] font-bold mt-2">{s.title}</h3></div><div className="p-6"><span className="font-mono text-[10px] uppercase tracking-widest text-[#1868A8] font-bold">{s.tag}</span><p className="text-sm text-slate-600 leading-relaxed mt-3">{s.text}</p><div className="flex flex-wrap gap-2 mt-4">{s.grades.map(g=><span key={g} className="font-mono text-[11px] bg-white border border-[#C8DCEC] px-3 py-1.5 text-[#0A2C4B] font-semibold">{g}</span>)}{s.link&&<a href={s.link} className="font-mono text-[11px] bg-[#0A2C4B] text-white px-3 py-1.5">{s.linkText}</a>}</div></div></article>)}</div>
    </section>
    <ImagePlaceholder second />
    <section className="py-12 border-t border-[#C8DCEC]"><p className="font-mono text-xs uppercase tracking-widest text-[#1868A8] font-semibold">// FAQ</p><h2 className="font-serif text-3xl sm:text-4xl text-[#0A2C4B] mt-2">Mixed bed &amp; condensate polishing resin — frequently asked questions</h2><div className="mt-6 space-y-3">{faqs.map(([q,a],i)=><details key={q} open={i===0} className="group bg-white border border-[#C8DCEC] shadow-sm"><summary className="cursor-pointer list-none px-6 py-5 flex justify-between gap-4 font-serif text-lg font-bold text-[#0A2C4B]"><span>{q}</span><span className="font-mono text-[#B27B34] group-open:rotate-45 transition">+</span></summary><p className="px-6 pb-6 pt-4 border-t border-[#EFF6FC] text-sm leading-relaxed text-slate-600">{a}</p></details>)}</div></section>
   </main>

   <aside className="lg:sticky lg:top-24 self-start space-y-5"><div className="corner-bracket bg-[#051826] text-white p-6 border border-[#B27B34]/60 blueprint-dark"><h4 className="font-mono text-xs uppercase tracking-widest text-[#F4E7D2]">Polishing resin enquiry</h4><p className="text-sm text-slate-300 mt-3">Send your outlet water spec and duty — we’ll confirm the mixed bed supply and attach the TDS.</p><div className="grid gap-2 mt-5"><Link className="text-center px-4 py-3 bg-[#B27B34] text-white font-mono text-xs uppercase" to="/contact">Send an enquiry</Link><a className="text-center px-4 py-3 border border-[#4A9BD1]/50 text-white font-mono text-xs" href="https://wa.me/919898701010">WhatsApp us</a><a className="text-center px-4 py-3 border border-[#4A9BD1]/50 text-white font-mono text-xs" href="tel:+919016711708">Call +91 90167 11708</a></div></div>
    {[['Resins for this application',[['Mixed Bed Resins','/products/mixedbedexchangeresin'],['Cation Exchange Resins','/products/cationexchangeresins'],['Anion Exchange Resins','/products/anionexchangeresins']]],['Related applications',[['DM Plant / Demineralisation','/applications/dm-plant-resin'],['Boiler Feed Water','/applications/boiler-feed-water-treatment'],['Ultrapure Water','/applications/ultrapure-water']]]].map(([h,items])=><div key={h} className="border border-[#C8DCEC] bg-white p-5 shadow-sm"><h4 className="font-mono text-xs uppercase tracking-widest text-[#B27B34] font-bold">{h}</h4><ul className="mt-3 divide-y divide-[#EFF6FC]">{items.map(([t,u])=><li key={t}><a className="block py-2.5 text-sm text-[#0A2C4B] hover:text-[#1868A8]" href={u}>{t}</a></li>)}</ul></div>)}
   </aside>
  </div>

  <section className="bg-[#051826] text-white blueprint-dark py-14"><div className="max-w-5xl mx-auto px-4 text-center"><h2 className="font-serif text-3xl sm:text-4xl">Polish to ultrapure with Toyota Chemical Industries mixed bed resin.</h2><p className="text-slate-300 mt-3">Share your outlet water spec and duty and we’ll confirm the supply and attach its TDS.</p><div className="flex flex-wrap justify-center gap-3 mt-6"><Link to="/contact" className="px-7 py-3.5 bg-[#B27B34] text-white font-mono text-xs uppercase tracking-widest font-bold">Send an enquiry</Link><a href="https://wa.me/919898701010" className="px-7 py-3.5 border border-white/40 text-white font-mono text-xs uppercase tracking-widest">WhatsApp us</a></div></div></section>

  <div dangerouslySetInnerHTML={{__html: CLIENTS_HTML}} />
 </div>
}

const CLIENTS_HTML = ``;
