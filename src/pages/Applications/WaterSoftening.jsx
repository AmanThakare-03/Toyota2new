import React from "react";
import { Link } from "react-router";
import waterSofteningHeroImage from "../../assets/images/water softning.jpg";
import waterSofteningGenerated from "../../assets/images/application-real/ap61.png";
import waterSofteningSupportImage from "../../assets/images/application-real/ap62.png";

const faqs = [["How does water softening resin work?", "A sodium-form strong acid cation resin exchanges the calcium and magnesium hardness in the water for sodium. When the resin exhausts it is regenerated with common salt (brine), which recharges it with sodium and returns it to service."], ["Which AGRION grade should I use — C-60 or C-80?", "AGRION C-60 for standard softening, and AGRION C-80 — a higher-crosslink grade — for harder water, higher temperatures or heavier cycling where longer working life matters."], ["Why has my water softener stopped removing hardness?", "Usually the resin is fouled (iron, organics), degraded by chlorine or age, or simply exhausted beyond regeneration. A change to a fresh softening grade restores capacity — share your symptoms and water details and we’ll advise."], ["How is softening resin regenerated?", "On the sodium cycle, with a common salt (brine) solution. When hardness starts to break through, brine recharges the resin with sodium and it returns to service — a low-cost cycle repeated over many years."], ["Can I use softening for boiler feed or cooling water?", "Yes. Softening protects boilers, cooling towers and heat exchangers from scale. For higher-pressure boilers, softening is combined with demineralisation — see boiler feed water ."], ["What bead size and capacity do the softening grades have?", "Particle size is 0.3–1.2 mm; AGRION C-60 has a total exchange capacity of 1.7 meq/ml and C-80 of 1.8 meq/ml. Full specifications are in each grade’s TDS."], ["Can AGRION softening resin replace the resin in my softener?", "In most cases, yes. Match on ionic form (sodium), capacity and bead size and an AGRION grade drops straight into your softener. Send us your current grade or datasheet and we’ll confirm the equivalent."]];
const stages = [
  { n:"1", duty:"Service", title:"Remove hardness from the feed", tag:"The grade", text:"A sodium-form strong acid cation resin exchanges calcium and magnesium for sodium as water passes through the bed — delivering soft, scale-free water to the plant.", grades:["AGRION C-60","AGRION C-80"], link:"/products/watersoftenerresins", linkText:"Water softener resins" },
  { n:"2", duty:"Regeneration", title:"Recharge with brine", tag:"The step", text:"When hardness begins to break through, the resin is regenerated with a common salt (brine) solution, which recharges it with sodium and returns it to service — a simple, low-cost cycle repeated over many years.", grades:["Sodium cycle","Brine regeneration"] },
  { n:"+", duty:"Choosing a grade", title:"Standard or high-crosslink", tag:"The grade", text:"AGRION C-60 suits standard softening; AGRION C-80, a higher-crosslink grade, lasts longer under harder water, higher temperatures and heavier cycling. Tell us your water and duty and we’ll confirm the grade.", grades:["AGRION C-60","AGRION C-80"], link:"/products/cationexchangeresins", linkText:"Cation exchange resins" },
];

function ImagePlaceholder({ second = false }) {
  return (
    <figure className="my-8 overflow-hidden border border-[#C8DCEC] bg-[#F7FAFD] shadow-sm">
      <img
        src={second ? waterSofteningSupportImage : waterSofteningGenerated}
        alt={second ? "Industrial water softener vessel and brine regeneration system" : "Industrial water softening system and sodium-form resin cycle"}
        loading="lazy"
        className="block w-full aspect-[16/9] object-cover object-center"
      />
    </figure>
  );
}

export default function WaterSoftening() {
  return <div className="min-h-screen bg-white text-slate-800 font-sans overflow-x-hidden">
    <style>{`@import url('https://fonts.googleapis.com/css2?family=EB+Garamond:wght@500;600;700&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap');
      .font-serif{font-family:'EB Garamond',serif} .font-mono{font-family:'IBM Plex Mono',monospace} body{font-family:'Inter',sans-serif}
      .blueprint{background-image:linear-gradient(rgba(24,104,168,.06) 1px,transparent 1px),linear-gradient(90deg,rgba(24,104,168,.06) 1px,transparent 1px);background-size:32px 32px}
      @keyframes clientScroll{from{transform:translateX(0)}to{transform:translateX(-50%)}} .client-track{animation:clientScroll 55s linear infinite} .client-track:hover{animation-play-state:paused}
      @media(prefers-reduced-motion:reduce){.client-track{animation:none;flex-wrap:wrap;justify-content:center;width:auto}}
    `}</style>

    <main>
      <section className="blueprint relative border-b border-[#C8DCEC] bg-[#F7FAFD]" style={{backgroundImage: `linear-gradient(90deg, rgba(247,250,253,1) 0%, rgba(247,250,253,.995) 28%, rgba(247,250,253,.97) 42%, rgba(247,250,253,.90) 52%, rgba(247,250,253,.70) 61%, rgba(247,250,253,.38) 70%, rgba(247,250,253,.12) 82%, rgba(247,250,253,.03) 100%), linear-gradient(180deg, rgba(247,250,253,.10) 0%, rgba(247,250,253,.16) 100%), url(${waterSofteningHeroImage})`, backgroundSize: "cover", backgroundPosition: "center center", backgroundRepeat: "no-repeat"}}>
        <div className="max-w-[1160px] mx-auto px-6 py-8 sm:py-10 lg:py-14">
          <p className="font-mono text-xs text-slate-500 mb-7"><Link to="/">Home</Link><span className="mx-2">›</span><Link to="/applications">Applications</Link><span className="mx-2">›</span><b className="text-[#0A2C4B]">Water Softening</b></p>
          <div className="max-w-[720px]">
            <p className="font-mono text-xs uppercase tracking-[.18em] text-[#B27B34] font-semibold">// Applications — Water Softening</p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#0A2C4B] leading-[1.04] mt-5 max-w-[720px] [text-shadow:0_1px_0_rgba(255,255,255,.85)]">Water softening <em className="text-[#1868A8]">resin</em></h1>
            <p className="mt-6 max-w-[680px] text-base sm:text-lg text-[#34495E] font-medium leading-relaxed">The sodium-cycle strong acid cation resin that removes hardness — protecting boilers, cooling systems and process equipment from scale.</p>
            <div className="flex flex-wrap gap-3 mt-7"><Link to="/contact" className="bg-[#1868A8] text-white px-6 py-3 font-semibold text-sm hover:bg-[#0A2C4B] transition">Enquire now</Link><Link to="/products" className="border border-[#0A2C4B] text-[#0A2C4B] bg-white px-6 py-3 font-semibold text-sm hover:bg-[#EFF6FC] transition">View our resins</Link></div>
            <div className="flex flex-wrap gap-2 mt-7">{["Since 1972","ISO 9001:2015","ISO 14001:2015","TDS with every grade"].map(x=><span key={x} className="font-mono text-[11px] text-[#0A2C4B] border border-[#C8DCEC] bg-white px-3 py-2">{x}</span>)}</div>
          </div>
        </div>
      </section>

      <div className="max-w-[1160px] mx-auto px-6 py-10 grid lg:grid-cols-[minmax(0,1fr)_320px] gap-10 lg:gap-12 items-start">
        <div className="min-w-0">
          <section className="pb-10"><p className="font-mono text-xs uppercase tracking-widest text-[#1868A8] font-semibold">// The process</p><h2 className="font-serif text-3xl sm:text-4xl text-[#0A2C4B] mt-2">Why water softening resin matters</h2><div className="mt-5 text-slate-600 leading-relaxed space-y-4"><p>Hardness — calcium and magnesium — is the most common water problem in industry. Left in the feed, it forms scale in boilers, cooling towers, heat exchangers and process lines, cutting efficiency and shortening equipment life. Softening removes it before it becomes a maintenance cost.</p><p>A sodium-form strong acid cation resin exchanges the hardness for sodium; when it exhausts, it is regenerated with common salt (brine) and returned to service. Toyota Chemical Industries supplies the softening grades for that duty, with a technical data sheet for each.</p></div></section>
          <ImagePlaceholder />

          <section id="how" className="py-12 border-t border-[#C8DCEC]"><p className="font-mono text-xs uppercase tracking-widest text-[#1868A8] font-semibold">// How it works</p><h2 className="font-serif text-3xl sm:text-4xl text-[#0A2C4B] mt-2">Toyota Chemical Industries water softening resin, stage by stage</h2><p className="mt-4 text-slate-600">How sodium-cycle softening runs — built from a specific AGRION grade, manufactured by Toyota Chemical Industries.</p>
            <div className="mt-8 space-y-6">{stages.map(s=><div key={s.n+s.title} className="grid grid-cols-[44px_minmax(0,1fr)] sm:grid-cols-[58px_minmax(0,1fr)] gap-4 sm:gap-5"><div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#0A2C4B] text-white grid place-items-center font-mono font-bold shadow-lg">{s.n}</div><div className="grid md:grid-cols-[.9fr_1.15fr] border border-[#C8DCEC] bg-white shadow-sm"><div className="p-5 sm:p-6 bg-[#EFF6FC] md:border-r-4 border-[#B27B34]"><span className="font-mono text-[10px] uppercase tracking-widest bg-[#0A2C4B] text-white px-2.5 py-1">{s.duty}</span><h3 className="font-serif text-xl font-bold text-[#0A2C4B] mt-3">{s.title}</h3></div><div className="p-5 sm:p-6"><span className="font-mono text-[10px] uppercase tracking-widest text-[#B27B34] font-bold">{s.tag}</span><p className="text-sm leading-relaxed text-slate-600 mt-3">{s.text}</p><div className="flex flex-wrap gap-2 mt-4">{s.grades.map(g=><span key={g} className="font-mono text-[11px] bg-[#F7FAFD] border border-[#C8DCEC] text-[#0A2C4B] px-3 py-1.5">{g}</span>)}{s.link&&<a href={s.link} className="font-mono text-[11px] bg-[#F4E7D2] border border-[#B27B34] text-[#0A2C4B] px-3 py-1.5 font-semibold">{s.linkText}</a>}</div></div></div></div>)}</div>
          </section>

          <ImagePlaceholder second />

          <section className="py-12 border-t border-[#C8DCEC]"><p className="font-mono text-xs uppercase tracking-widest text-[#1868A8] font-semibold">// FAQ</p><h2 className="font-serif text-3xl sm:text-4xl text-[#0A2C4B] mt-2">Water softening resin — frequently asked questions</h2><div className="mt-6 space-y-3">{faqs.map(([q,a],i)=><details key={q} open={i===0} className="group bg-white border border-[#C8DCEC] shadow-sm"><summary className="cursor-pointer list-none px-6 py-5 flex justify-between gap-4 font-serif text-lg font-bold text-[#0A2C4B]"><span>{q}</span><span className="font-mono text-[#B27B34] group-open:rotate-45 transition">+</span></summary><p className="px-6 pb-6 pt-4 border-t border-[#EFF6FC] text-sm leading-relaxed text-slate-600">{a}</p></details>)}</div></section>
        </div>

        <aside className="lg:sticky lg:top-24 space-y-5">
          <div className="bg-[#06182B] text-white p-6 shadow-xl"><p className="font-mono text-[11px] uppercase tracking-widest text-[#E5A855] font-bold">Softening resin enquiry</p><p className="text-sm text-slate-300 leading-relaxed mt-3">Send your water hardness and duty — we’ll confirm the softening grade and attach the TDS.</p><div className="grid gap-2 mt-5"><Link className="bg-[#B27B34] text-white text-center px-4 py-3 text-sm font-semibold" to="/contact">Send an enquiry</Link><a className="border border-white/40 text-white text-center px-4 py-3 text-sm" href="https://wa.me/919898701010">WhatsApp us</a><a className="border border-white/40 text-white text-center px-4 py-3 text-sm" href="tel:+919016711708">Call +91 90167 11708</a></div></div>
          {[["Resins for this application",[["Water Softener Resins","/products/watersoftenerresins"],["Cation Exchange Resins","/products/cationexchangeresins"]]],["Related applications",[["Boiler Feed Water","/applications/boiler-feed-water-treatment"],["Dealkalisation","/applications/dealkalisation-resin"],["DM Plant / Demineralisation","/applications/dm-plant-resin"]]]].map(([h,items])=><div key={h} className="border border-[#C8DCEC] bg-white p-5 shadow-sm"><h4 className="font-mono text-xs uppercase tracking-widest text-[#B27B34] font-bold">{h}</h4><ul className="mt-3 divide-y divide-[#EFF6FC]">{items.map(([t,u])=><li key={t}><a className="block py-2.5 text-sm text-[#0A2C4B] hover:text-[#1868A8]" href={u}>{t}</a></li>)}</ul></div>)}
        </aside>
      </div>

      <section className="bg-[#06182B] text-white"><div className="max-w-[1160px] mx-auto px-6 py-14 text-center"><h2 className="font-serif text-3xl sm:text-4xl max-w-3xl mx-auto">Get consistent soft water with Toyota Chemical Industries softening resin.</h2><p className="text-slate-300 mt-4 max-w-2xl mx-auto">Share your water hardness and duty and we’ll confirm the grade and attach its TDS.</p><div className="flex flex-wrap gap-3 justify-center mt-7"><Link className="bg-[#B27B34] text-white px-6 py-3 font-semibold text-sm" to="/contact">Send an enquiry</Link><a className="border border-white/50 text-white px-6 py-3 font-semibold text-sm" href="https://wa.me/919898701010">WhatsApp us</a></div></div></section>

      
    </main>
  </div>;
}
