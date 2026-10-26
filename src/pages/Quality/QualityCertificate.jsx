import React, { useState } from "react";
import { Link } from "react-router";
// import certificated1 from "../../../assets/images/iso-9001-2015-certificate.jpg";
// import certificated2 from "../../../assets/images/iso-14001-2015-certificate.jpg";

import SafeImage from "../../components/common/SafeImage";

const CERTIFICATE_IMAGES = {
  // Put your own certificate images inside: public/images/certificates/
  iso9001: "/iso-9001-2015-certificate.jpg",
  iso14001: "/iso-14001-2015-certificate.jpg",
};

const FAQ_ITEMS = [{"question": "Which certifications does Toyota Chemical Industries hold?", "answer": "ISO 9001:2015 for quality management and ISO 14001:2015 for environmental management, both independently certified."}, {"question": "What do the certifications cover?", "answer": "The manufacture of ion exchange resins — cation, anion, mixed bed and water treatment products — at our own plant in GIDC Vapi, Gujarat."}, {"question": "Can I get a copy of the certificates?", "answer": "Yes. Signed copies are issued on request to buyers, OEM partners, consultants and auditors. Contact us and we will share them."}, {"question": "What is tested on each batch of resin?", "answer": "Key properties including bead size, total exchange capacity and sieve analysis are checked and recorded, and reflected in the technical data sheet supplied with the grade."}, {"question": "Do you provide a technical data sheet with every grade?", "answer": "Yes. Each grade is supplied with a technical data sheet covering its key specifications, so an engineer can confirm the grade matches the resin currently in the vessel."}, {"question": "Can we audit your plant before approving you as a supplier?", "answer": "Yes. Buyers, OEM partners and consultants are welcome to visit the GIDC Vapi facility and see the process and quality laboratory. Contact us to arrange it."}];

export default function QualityCertifications() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const nav = [
    ["Home", "/"], ["About Us", "/about"], ["Products", "/products"],
    ["Applications", "/applications"], ["Industries", "/industries"],
    ["Partners", "/oem-dealer-partners"], ["Resources", "/resources"],
    ["Contact Us", "/contact"],
  ];

  return (
    <div className="min-h-screen bg-white text-navy font-sans">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,400&family=IBM+Plex+Mono:ital,wght@0,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,400&family=Inter:wght@300;400;500;600;700&display=swap');
html{scroll-behavior:smooth}
.corner-bracket{position:relative} .corner-bracket::before{content:'';position:absolute;top:-1px;left:-1px;width:14px;height:14px;border-top:2px solid #B27B34;border-left:2px solid #B27B34;pointer-events:none} .corner-bracket::after{content:'';position:absolute;bottom:-1px;right:-1px;width:14px;height:14px;border-bottom:2px solid #B27B34;border-right:2px solid #B27B34;pointer-events:none}
.corner-bracket-blue{position:relative} .corner-bracket-blue::before{content:'';position:absolute;top:-1px;left:-1px;width:14px;height:14px;border-top:2px solid #1868A8;border-left:2px solid #1868A8;pointer-events:none} .corner-bracket-blue::after{content:'';position:absolute;bottom:-1px;right:-1px;width:14px;height:14px;border-bottom:2px solid #1868A8;border-right:2px solid #1868A8;pointer-events:none}
.blueprint-grid{background-image:linear-gradient(to right,rgba(218,231,241,.4) 1px,transparent 1px),linear-gradient(to bottom,rgba(218,231,241,.4) 1px,transparent 1px);background-size:32px 32px}
.blueprint-grid-dark{background-image:linear-gradient(to right,rgba(24,104,168,.15) 1px,transparent 1px),linear-gradient(to bottom,rgba(24,104,168,.15) 1px,transparent 1px);background-size:28px 28px}
.accordion-content{max-height:0;overflow:hidden;transition:max-height .35s ease-out,opacity .25s ease-out,padding .25s ease;opacity:0} .accordion-content.active-content{max-height:500px;opacity:1}
.bg-navy{background:#0A2C4B} .bg-navy2{background:#051826} .text-navy{color:#0A2C4B} .text-navy2{color:#051826} .text-amber{color:#B27B34} .bg-amber{background:#B27B34} .border-amber{border-color:#B27B34} .bg-amber-l{background:#F4E7D2} .bg-ice{background:#EFF6FC} .bg-ice2{background:#E4EFF9} .bg-blue{background:#1868A8} .text-blue{color:#1868A8} .bg-blue-pale{background:#EAF3FB} .text-muted{color:#57697B} .border-line{border-color:#DAE7F1} .border-line2{border-color:#C8DCEC} .shadow-tech{box-shadow:0 4px 20px -2px rgba(10,44,75,.08),0 2px 6px -1px rgba(10,44,75,.04)} .shadow-tech-lg{box-shadow:0 10px 30px -4px rgba(10,44,75,.12),0 4px 12px -2px rgba(10,44,75,.06)}
.font-serif{font-family:Fraunces,'EB Garamond',Georgia,serif} .font-sans{font-family:Inter,system-ui,sans-serif} .font-mono{font-family:'IBM Plex Mono',monospace}
@keyframes cscroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}
@media(max-width:1024px){.desktop-nav{display:none!important} .mobile-menu-btn{display:block!important}}
@media(min-width:1025px){.mobile-menu-btn{display:none!important}}
@media(prefers-reduced-motion:reduce){*{transition:none!important;scroll-behavior:auto!important}}
`}</style>

      <div className="bg-navy2 border-b border-navy text-gray-300 font-mono text-[11px] tracking-wider py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 whitespace-nowrap overflow-x-auto">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-emerald-400 font-semibold"><span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"/>PLANT ACTIVE: VAPI GIDC</span>
            <span className="text-gray-500">|</span><span>ISO 9001:2015 &amp; ISO 14001:2015 COMPLIANT</span>
          </div>
          <div className="flex items-center gap-4 text-gray-400"><span className="hidden sm:inline"><span className="text-blue">DISPATCH READY:</span> 25L BAGS &amp; BULK</span><a href="tel:+919016711708" className="text-gray-200 hover:text-amber">TEL: +91 90167 11708</a></div>
        </div>
      </div>

      {/* <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-line shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3.5 group">
            <div className="w-11 h-11 bg-navy text-amber flex items-center justify-center font-serif text-2xl font-bold border border-amber/30">T</div>
            <div><span className="font-serif font-bold text-navy text-lg sm:text-xl tracking-tight leading-tight block">TOYOTA CHEMICAL</span><span className="font-mono text-[10px] tracking-widest text-muted uppercase">INDUSTRIES PVT. LTD. · SINCE 1972</span></div>
          </Link>
          <nav className="desktop-nav flex items-center space-x-6 text-sm font-medium text-navy2 ml-auto">
            {nav.map(([label, href]) => <a key={label} href={href} className={label === "About Us" ? "text-blue font-semibold py-2 border-b-2 border-blue" : "hover:text-blue transition-colors py-2"}>{label}</a>)}
          </nav>
          <div className="hidden lg:flex items-center gap-3 ml-6"><a href="#certificates" className="font-mono text-xs uppercase px-3.5 py-2.5 border border-line2 text-navy font-semibold hover:bg-ice">Download TDS</a><Link to="/contact" className="font-mono text-xs uppercase px-4 py-2.5 bg-navy text-white hover:bg-blue font-semibold">Get In Touch <span className="text-amber">→</span></Link></div>
          <button type="button" aria-label="Toggle menu" onClick={() => setMobileOpen(!mobileOpen)} className="mobile-menu-btn hidden p-2 text-navy ml-3"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/></svg></button>
        </div>
        <div className={mobileOpen ? "block" : "hidden"}><div className="xl:hidden border-t border-line py-4 bg-white space-y-2 font-medium text-sm">{nav.map(([label, href]) => <a key={label} href={href} onClick={() => setMobileOpen(false)} className="block px-3 py-2 hover:text-blue">{label}</a>)}<Link to="/contact" className="block mx-3 text-center py-2 bg-navy text-white font-mono text-xs">Get In Touch</Link></div></div>
        </div>
      </header> */}

      <main>
        <section className="relative bg-white pt-10 pb-14 lg:py-16 blueprint-grid border-b border-line overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="font-mono text-xs text-muted mb-8"><Link to="/" className="hover:text-navy">Home</Link> <span className="text-amber">›</span> <Link to="/about" className="hover:text-navy">About Us</Link> <span className="text-amber">›</span> <span className="text-navy font-semibold">Quality &amp; Certifications</span></div>
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-amber font-semibold bg-amber-l px-3 py-1 border border-amber/30">// Quality &amp; Certifications</div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-navy tracking-tight leading-[1.1] mt-5">ISO Certified Ion Exchange Resin Manufacturer</h1>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-3xl mt-6">Toyota Chemical Industries is an ISO 9001:2015 and ISO 14001:2015 certified ion exchange resin manufacturer. Both management systems have been independently assessed and cover the manufacture of ion exchange resins at our GIDC Vapi plant in Gujarat.</p>
            </div>
          </div>
        </section>

        <section id="certificates" className="py-20 bg-ice blueprint-grid border-b border-line">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14"><span className="font-mono text-xs uppercase tracking-widest text-blue font-bold">// QUALITY &amp; CERTIFICATION // ISO DOCUMENTS</span><h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy mt-3">Quality &amp; Certifications</h2></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
              <article className="bg-white border-2 border-line2 p-5 sm:p-7 relative shadow-tech corner-bracket hover:border-blue transition-colors">
                <div className="flex items-center justify-between gap-3 pb-4 border-b border-line"><div><span className="font-mono text-xs text-blue font-bold">// ISO 9001:2015</span><h3 className="font-serif text-2xl font-bold text-navy mt-1">ISO 9001:2015</h3></div><span className="bg-amber-l text-amber border border-amber/30 px-2 py-1 font-mono text-[10px] font-bold">CERTIFIED</span></div>
                <div className="mt-5 bg-blue-pale border border-line2 overflow-hidden relative aspect-[1/1.414]"><SafeImage src={CERTIFICATE_IMAGES.iso9001} alt="ISO 9001:2015 quality management certificate of Toyota Chemical Industries Pvt Ltd" className="absolute inset-0 w-full h-full object-contain p-3" fallbackLabel="ISO 9001:2015 certificate" /></div>
                <div className="mt-4 p-4 bg-ice border border-line text-center font-mono text-xs text-muted">Quality Management certificate</div>
              </article>
              <article className="bg-white border-2 border-line2 p-5 sm:p-7 relative shadow-tech corner-bracket hover:border-blue transition-colors">
                <div className="flex items-center justify-between gap-3 pb-4 border-b border-line"><div><span className="font-mono text-xs text-blue font-bold">// ISO 14001:2015</span><h3 className="font-serif text-2xl font-bold text-navy mt-1">ISO 14001:2015</h3></div><span className="bg-emerald-50 text-emerald-700 border border-emerald-300 px-2 py-1 font-mono text-[10px] font-bold">CERTIFIED</span></div>
                <div className="mt-5 bg-blue-pale border border-line2 overflow-hidden relative aspect-[1/1.414]"><SafeImage src={CERTIFICATE_IMAGES.iso14001} alt="ISO 14001:2015 environmental management certificate of Toyota Chemical Industries Pvt Ltd" className="absolute inset-0 w-full h-full object-contain p-3" fallbackLabel="ISO 14001:2015 certificate" /></div>
                <div className="mt-4 p-4 bg-ice border border-line text-center font-mono text-xs text-muted">Environmental Management certificate</div>
              </article>
            </div>
          </div>
        </section>

        <section className="py-14 bg-white border-b border-line" id="faq">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-2 mb-9"><span className="font-mono text-[10px] uppercase tracking-widest text-amber font-bold">// FAQ</span><h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy">Frequently Asked Questions</h2></div>
            <div className="space-y-2.5">{FAQ_ITEMS.map((item,index)=><div key={item.question} className={`border border-line bg-ice/40 transition-all ${openFaq===index ? "shadow-tech" : ""}`}><button type="button" aria-expanded={openFaq===index} onClick={()=>setOpenFaq(openFaq===index?-1:index)} className="w-full text-left px-4 py-3.5 sm:px-5 sm:py-4 flex items-center justify-between gap-4 font-serif font-bold text-base sm:text-[17px] text-navy"><span>{item.question}</span><span className={`font-mono text-lg text-blue transition-transform ${openFaq===index ? "rotate-[45deg] text-amber" : ""}`}>+</span></button><div className={`accordion-content px-4 sm:px-5 pb-4 text-slate-600 text-sm leading-relaxed border-t border-line pt-3 ${openFaq===index ? "active-content" : ""}`}>{item.answer}</div></div>)}</div>
          </div>
        </section>

        
      </main>

      {/* <footer className="bg-navy2 text-slate-300 pt-16 pb-12 border-t-2 border-amber">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-navy">
          <div className="lg:col-span-5 space-y-4"><div className="flex items-center gap-3"><div className="w-10 h-10 bg-navy text-amber flex items-center justify-center font-serif text-xl font-bold border border-amber/40">T</div><div><span className="font-serif font-bold text-white text-lg block">TOYOTA CHEMICAL</span><span className="font-mono text-[9px] tracking-widest text-amber uppercase block">INDUSTRIES PVT. LTD. · EST. 1972</span></div></div><p className="text-sm leading-relaxed max-w-md">A leading ion exchange resin manufacturer in India since 1972, delivering world-class cation, anion and mixed bed resins for water treatment and industrial applications — made at our own plant in GIDC Vapi, Gujarat.</p></div>
          <div className="lg:col-span-2"><h4 className="font-mono text-xs uppercase tracking-wider text-amber font-bold mb-4">Quick Links</h4><ul className="space-y-2 text-sm">{[["Home","/"],["About Us","/about"],["Quality & Certifications","/quality-certifications"],["Products","/products"],["Partners","/oem-dealer-partners"],["Knowledge Hub","/resources"],["Contact Us","/contact"]].map(([x,h])=><li key={x}><a href={h} className="hover:text-amber">{x}</a></li>)}</ul></div>
          <div className="lg:col-span-2"><h4 className="font-mono text-xs uppercase tracking-wider text-amber font-bold mb-4">Products</h4><ul className="space-y-2 text-sm">{["Cation Exchange Resins","Anion Exchange Resins","Mixed Bed Resins","Water Softener Resins","Specialty Resins"].map(x=><li key={x}><Link to="/products" className="hover:text-amber">{x}</Link></li>)}</ul></div>
          <div className="lg:col-span-3"><h4 className="font-mono text-xs uppercase tracking-wider text-amber font-bold mb-4">Contact Us</h4><div className="text-sm space-y-3"><p><strong className="text-white block">Factory</strong>Plot No. 100, Vapi–Silvassa Road,<br/>GIDC Vapi, Gujarat 396195, India</p><p><a href="tel:+919016711708" className="text-white hover:text-amber">+91 90167 11708</a></p><p><a href="mailto:info@toyotachemicals.co.in" className="text-white hover:text-amber">info@toyotachemicals.co.in</a></p><Link to="/contact" className="inline-flex bg-amber text-navy px-4 py-2 font-mono text-xs font-bold">Enquire Now →</Link></div></div>
        </div><div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-gray-400"><div>© 2026 Toyota Chemical Industries Private Limited. All Rights Reserved.</div><div className="flex items-center gap-4"><a href="#" className="hover:text-white">Privacy Policy</a><span>|</span><a href="#" className="hover:text-white">Terms &amp; Conditions</a><span>|</span><a href="#" className="hover:text-white">Sitemap</a></div></div></div>
      </footer> */}

      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-line p-2 flex gap-2 lg:hidden"><a href="tel:+919016711708" className="flex-1 text-center bg-navy text-white py-3 font-mono text-xs font-bold">Call</a><a href="https://wa.me/919898701010" className="flex-1 text-center bg-emerald-600 text-white py-3 font-mono text-xs font-bold">WhatsApp</a><Link to="/contact" className="flex-1 text-center bg-amber text-navy py-3 font-mono text-xs font-bold">Enquire</Link></div>
    </div>
  );
}
