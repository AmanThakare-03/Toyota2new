
import React, { useState } from "react";
import { Link } from "react-router";
import contactQualityLabGenerated from "../../assets/images/generated/contact-quality-lab-generated.png";
 function SectionLabel({ children, light = false }) {
   return (
     <div
       className={`mb-3 flex items-center gap-3 font-mono text-[10px] font-bold uppercase tracking-[0.2em] ${
         light ? "text-[#DF9B42]" : "text-[#B27B34]"
       }`}
     >
       <span
         className={`h-px w-8 ${
           light ? "bg-[#DF9B42]" : "bg-[#B27B34]"
         }`}
       />
       <span>{children}</span>
     </div>
   );
 }

export default function Contact() {
  const [openFaq, setOpenFaq] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Thank you. Your technical resin enquiry has been registered. A Toyota Chemical engineer will connect shortly.");
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..800;1,400..800&family=IBM+Plex+Mono:ital,wght@0,400;0,500;0,600;1,400&family=Inter:wght@300;400;500;600;700&display=swap');

        /* EXACT COLORS FROM THE ORIGINAL HTML TAILWIND CONFIG */
        .bg-brand-navy { background-color:#0A2C4B !important; }
        .bg-brand-dark { background-color:#051826 !important; }
        .bg-brand-deep { background-color:#03101B !important; }
        .bg-brand-blue { background-color:#1868A8 !important; }
        .bg-brand-lightBlue { background-color:#EFF6FC !important; }
        .bg-brand-gold { background-color:#B27B34 !important; }
        .bg-brand-goldBorder { background-color:#D8B17A !important; }
        .bg-brand-ice { background-color:#F7FAFD !important; }
        .text-brand-navy { color:#0A2C4B !important; }
        .text-brand-dark { color:#051826 !important; }
        .text-brand-blue { color:#1868A8 !important; }
        .text-brand-accent { color:#4A9BD1 !important; }
        .text-brand-gold { color:#B27B34 !important; }
        .text-brand-goldLight { color:#F4E7D2 !important; }
        .border-brand-navy { border-color:#0A2C4B !important; }
        .border-brand-blue { border-color:#1868A8 !important; }
        .border-brand-blueprint { border-color:#DAE7F1 !important; }
        .border-brand-borderDark { border-color:#1E3E5B !important; }
        .border-brand-gold { border-color:#B27B34 !important; }
        .bg-brand-navy\/95 { background-color:rgba(10,44,75,.95) !important; }
        .bg-brand-dark\/90 { background-color:rgba(5,24,38,.90) !important; }
        .bg-brand-dark\/95 { background-color:rgba(5,24,38,.95) !important; }
        .bg-brand-ice\/40 { background-color:rgba(247,250,253,.40) !important; }
        .bg-brand-ice\/60 { background-color:rgba(247,250,253,.60) !important; }
        .border-brand-blueprint\/40 { border-color:rgba(218,231,241,.40) !important; }
        .border-brand-blueprint\/50 { border-color:rgba(218,231,241,.50) !important; }
        .border-brand-blueprint\/60 { border-color:rgba(218,231,241,.60) !important; }
        .border-brand-blueprint\/80 { border-color:rgba(218,231,241,.80) !important; }
        .border-brand-gold\/30 { border-color:rgba(178,123,52,.30) !important; }
        .border-brand-gold\/40 { border-color:rgba(178,123,52,.40) !important; }
        .border-brand-gold\/50 { border-color:rgba(178,123,52,.50) !important; }
        .border-brand-gold\/60 { border-color:rgba(178,123,52,.60) !important; }
        .from-brand-dark\/80 { --tw-gradient-from:rgba(5,24,38,.8) var(--tw-gradient-from-position); --tw-gradient-to:rgba(5,24,38,0) var(--tw-gradient-to-position); }
        .ring-brand-blue { --tw-ring-color:#1868A8 !important; }
        .font-serif { font-family:'EB Garamond',serif !important; }
        .font-sans { font-family:'Inter',sans-serif !important; }
        .font-mono { font-family:'IBM Plex Mono',monospace !important; }
        .shadow-industrial { box-shadow:0 4px 20px -2px rgba(10,44,75,.08) !important; }
        .shadow-hover-gold { box-shadow:0 8px 30px -4px rgba(178,123,52,.18) !important; }
        .shadow-active-navy { box-shadow:0 10px 35px -5px rgba(10,44,75,.25) !important; }

        .corner-brackets { position: relative; }
        .corner-brackets::before, .corner-brackets::after {
          content: ''; position: absolute; width: 9px; height: 9px; pointer-events: none;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .corner-brackets::before { top: -1px; left: -1px; border-top: 2px solid #B27B34; border-left: 2px solid #B27B34; }
        .corner-brackets::after { bottom: -1px; right: -1px; border-bottom: 2px solid #B27B34; border-right: 2px solid #B27B34; }
        .corner-brackets:hover::before { width: 14px; height: 14px; }
        .corner-brackets:hover::after { width: 14px; height: 14px; }
        .chamfer-card { clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px)); }
        .chamfer-tag { clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%); }
        .blueprint-grid-bg { background-size: 32px 32px; background-image: linear-gradient(to right, rgba(218,231,241,.45) 1px, transparent 1px), linear-gradient(to bottom, rgba(218,231,241,.45) 1px, transparent 1px); }
        .blueprint-dashed { background-image: linear-gradient(to right, #B27B34 40%, rgba(255,255,255,0) 0%); background-position: top; background-size: 8px 1px; background-repeat: repeat-x; }
        .card-transition { transition: transform .28s cubic-bezier(.16,1,.3,1), box-shadow .28s cubic-bezier(.16,1,.3,1), border-color .28s ease; }
        .card-transition:hover { transform: translateY(-4px); }
      `}</style>
      <div className="bg-brand-ice text-slate-800 font-sans antialiased selection:bg-brand-gold selection:text-white">
  {/*IN: IndustrialUtilityB*/}
  
  {/*: MainHead*/}
  {/*IN: BreadcrumbNavigati*/}
  <div className="bg-white border-b border-brand-blueprint/80 py-2.5 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto flex items-center justify-between text-xs font-mono text-slate-500">
      <nav className="flex items-center space-x-2">
        <Link className="hover:text-brand-navy transition-colors" to="/">
          Home
        </Link>
        <span className="text-slate-300">
          ›
        </span>
        <span className="text-brand-navy font-semibold">
          Contact Us
        </span>
      </nav>
      <span className="hidden md:block text-[11px] text-slate-400">
        SEC_REF // 20.3895° N, 72.9106° E · PLANT 01
      </span>
    </div>
  </div>
  {/*: BreadcrumbNavigati*/}
  <main>
    {/*IN: HeroSecti*/}
    <section className="relative blueprint-grid-bg border-b border-brand-blueprint pt-12 pb-16 lg:pt-16 lg:pb-20 overflow-hidden" data-purpose="contact-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/*t Column: Hero Text Conte*/}
          <div className="lg:col-span-7">
            {/*brow Pill Bad*/}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-brand-gold/60 text-brand-gold text-[11px] font-mono tracking-widest uppercase mb-6 rounded-[2px] shadow-sm">
              <span className="w-1.5 h-1.5 bg-brand-gold rounded-full"></span>
              CONTACT // DIRECT FACTORY & TECHNICAL DESK
            </div>
            {/*n Heading with Editorial Serif Emphas*/}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-bold text-brand-navy tracking-tight leading-[1.12] mb-3">
              Contact Us
            </h1>
            <p className="font-serif italic text-2xl sm:text-3xl text-brand-blue mb-6 font-normal">
              Contact Ion Exchange Resin Manufacturers
            </p>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mb-8">
              Have questions about our products or need technical assistance? Our team is here to help you find the right ion exchange resin for your plant. Send us the grade and operating conditions you run today, and we will confirm the matching Toyota grade — usually the same working day.
            </p>
            {/*ck Reach Callout Str*/}
            <div className="bg-white border border-brand-blueprint p-5 relative corner-brackets shadow-sm max-w-2xl mb-6">
              {/* <div className="text-xs font-mono uppercase text-brand-navy font-semibold tracking-wider mb-3">
                Prefer to talk? Call +91 90167 11708 or WhatsApp us — details on the right.
              </div> */}
              <div className="flex flex-wrap gap-3">
                <a className="inline-flex items-center px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-mono font-medium rounded-sm shadow-sm transition-colors" href="https://wa.me/912602432021" rel="noopener" target="_blank">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.2.534 1.287.043.087.072.188.014.303-.058.116-.087.188-.173.289l-.26.303c-.087.087-.179.181-.077.355.101.173.452.746.97 1.207.668.594 1.232.779 1.405.866.173.087.275.072.376-.043.101-.116.433-.506.549-.679.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.072.043.419-.101.824z"></path>
                  </svg>
                  WhatsApp Us
                </a>
                <a className="inline-flex items-center px-4 py-2 bg-brand-navy hover:bg-brand-blue text-white text-xs font-mono font-medium rounded-sm shadow-sm transition-colors" href="tel:+919016711708">
                  <svg className="w-3.5 h-3.5 mr-2 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  </svg>
                  Call +91 90167 11708
                </a>
                <a className="inline-flex items-center px-4 py-2 bg-white hover:bg-slate-50 text-slate-700 border border-brand-blueprint text-xs font-mono font-medium rounded-sm transition-colors" href="mailto:info@toyotachemicals.co.in">
                  <svg className="w-3.5 h-3.5 mr-2 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  </svg>
                  info@toyotachemicals.co.in
                </a>
              </div>
            </div>
          </div>
          
          {/* <div className="lg:col-span-5 relative">
            <div className="relative bg-white border border-brand-blueprint p-2.5 shadow-xl corner-brackets">
              
              <div className="relative overflow-hidden bg-slate-900 aspect-square max-h-[380px] w-full">
                <img alt="Toyota Chemical Ion Exchange Resin Spherical Beads under laboratory inspection" className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700 ease-out" src={contactQualityLabGenerated} />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent"></div>
                
                <div className="absolute top-3 left-3 bg-brand-dark/90 backdrop-blur border border-brand-gold/50 px-2.5 py-1 text-[10px] font-mono text-brand-goldLight flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping"></span>
                  0.3 – 1.2 MM SIZED BEADS // QC VERIFIED
                </div>
                <div className="absolute bottom-3 right-3 bg-brand-navy/95 border border-brand-blueprint/40 px-3 py-1.5 text-[11px] font-mono text-white flex items-center gap-2">
                  <span className="text-brand-gold font-bold">
                    REPLY:
                  </span>
                  SAME WORKING DAY
                </div>
                <div className="absolute bottom-3 left-3 text-[10px] font-mono text-slate-300">
                  <span>
                    RESIN MORPHOLOGY: SPHERICAL GEL / MACRO
                  </span>
                </div>
              </div>
              
              <div className="pt-3 pb-1 px-2 flex items-center justify-between text-[11px] font-mono border-t border-brand-blueprint mt-2 text-slate-600">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 border border-brand-gold inline-block"></span>
                  DIRECT VAPI DESPATCH
                </span>
                <span className="text-brand-gold font-semibold uppercase tracking-wider">
                  100% IN-HOUSE VAPI SYNTHESIS
                </span>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 hidden sm:block bg-brand-navy text-white text-[10px] font-mono py-1 px-3 border-l-2 border-brand-gold shadow-md">
              FACILITY: GIDC VAPI OWN PLANT
            </div>
          </div> */}
        </div>
      </div>
    </section>
    {/*: HeroSecti*/}
    {/*IN: MainContactConsoleGr*/}
    <section className="py-16 sm:py-20 bg-white" data-purpose="inquiry-and-locations-grid" id="enquiry-console">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/*T COLUMN: Engineering Inquiry Form (7 Col*/}
          <div className="lg:col-span-7 bg-brand-ice border border-brand-blueprint p-6 sm:p-10 corner-brackets shadow-industrial">
            <div className="mb-8">
              <span className="text-[11px] font-mono uppercase text-brand-gold tracking-widest font-semibold block mb-1">
                // TECHNICAL TRANSMISSION CONSOLE
              </span>
              <a href="mailto:info@toyotachemicals.co.in">
  <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy tracking-tight">
    Send an enquiry
  </h2>
</a>
              <p className="text-xs sm:text-sm text-slate-500 font-mono mt-2">
                Fields marked
                <span className="text-rose-600 font-bold">
                  *
                </span>
                are required. We reply by email or WhatsApp, usually the same working day.
              </p>
            </div>
            {/* Fo*/}
            <form className="space-y-5" id="contact-engineering-form" onSubmit={handleSubmit}>
              {/* 1: Name & Compa*/}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-brand-navy mb-1.5" htmlFor="full-name">
                    Name
                    <span className="text-rose-600">
                      *
                    </span>
                  </label>
                  <input className="w-full bg-white border border-brand-blueprint text-sm text-slate-800 px-3.5 py-2.5 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors rounded-none placeholder-slate-400" id="full-name" name="name" placeholder="e.g. Dr. Rajesh Mehta" type="text" />
                </div>
                <div>
                  <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-brand-navy mb-1.5" htmlFor="company-name">
                    Company
                  </label>
                  <input className="w-full bg-white border border-brand-blueprint text-sm text-slate-800 px-3.5 py-2.5 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors rounded-none placeholder-slate-400" id="company-name" name="company" placeholder="e.g. Gujarat Power & Chemicals Ltd." type="text" />
                </div>
              </div>
              {/* 2: Email & Pho*/}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-brand-navy mb-1.5" htmlFor="email-addr">
                    Email
                    <span className="text-rose-600">
                      *
                    </span>
                  </label>
                  <input className="w-full bg-white border border-brand-blueprint text-sm text-slate-800 px-3.5 py-2.5 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors rounded-none placeholder-slate-400" id="email-addr" name="email" placeholder="name@company.com" type="email" />
                </div>
                <div>
                  <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-brand-navy mb-1.5" htmlFor="phone-number">
                    Phone / WhatsApp
                    <span className="text-rose-600">
                      *
                    </span>
                  </label>
                  <input className="w-full bg-white border border-brand-blueprint text-sm text-slate-800 px-3.5 py-2.5 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors rounded-none placeholder-slate-400" id="phone-number" name="phone" placeholder="+91 98765 43210" type="tel" />
                </div>
              </div>
              {/* 3: Resin of Interest Dropdown & Plant Locati*/}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-brand-navy mb-1.5" htmlFor="resin-category">
                    Resin of interest
                  </label>
                  <select className="w-full bg-white border border-brand-blueprint text-sm text-slate-800 px-3.5 py-2.5 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors rounded-none" id="resin-category" name="resin_category">
                    <option value="">
                      Select a category
                    </option>
                    <option value="cation">
                      Cation Exchange Resin
                    </option>
                    <option value="anion">
                      Anion Exchange Resin
                    </option>
                    <option value="mixed-bed">
                      Mixed Bed Resin
                    </option>
                    <option value="water-softener">
                      Water Softener Resin
                    </option>
                    <option value="dm-plant">
                      DM Plant Resin
                    </option>
                    <option value="not-sure">
                      Not sure — please advise
                    </option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-brand-navy mb-1.5" htmlFor="plant-location">
                    Plant location
                  </label>
                  <input className="w-full bg-white border border-brand-blueprint text-sm text-slate-800 px-3.5 py-2.5 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors rounded-none placeholder-slate-400" id="plant-location" name="location" placeholder="e.g. Dahej, Bharuch or Hazira" type="text" />
                </div>
              </div>
              {/* 4: Grade & Operating Conditions Textar*/}
              <div>
                <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-brand-navy mb-1.5 flex items-center justify-between" htmlFor="operating-conditions">
                  <span>
                    Grade & operating conditions
                    <span className="text-rose-600">
                      *
                    </span>
                  </span>
                  <span className="text-[10px] text-slate-400 lowercase font-normal">
                    TDS / Flow rates / Water analysis
                  </span>
                </label>
                <textarea className="w-full bg-white border border-brand-blueprint text-sm text-slate-800 p-3.5 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors rounded-none placeholder-slate-400 font-sans" id="operating-conditions" name="conditions" placeholder="Mention current competitor grade (e.g. C-20, INDION 225, Amberlite IR-120) or water parameters: TDS, Silica, Hardness, and plant throughput capacity..." rows="4"></textarea>
              </div>
              {/*sent Checkb*/}
              <div className="pt-1">
                <label className="flex items-start cursor-pointer group">
                  <input className="mt-1 h-4 w-4 rounded-none border-brand-blueprint text-brand-blue focus:ring-brand-blue" name="consent" type="checkbox" />
                  <span className="ml-2.5 text-xs text-slate-600 leading-relaxed font-sans">
                    I agree to be contacted about this enquiry. See our
                    <Link className="text-brand-blue hover:underline font-semibold" to="/privacy-policy">
                      Privacy Policy
                    </Link>
                    .
                  </span>
                </label>
              </div>
              {/*mit Butt*/}
              <div className="pt-3">
                <button className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-brand-navy hover:bg-brand-blue text-white text-xs font-mono font-bold tracking-widest uppercase transition-all duration-200 shadow-md group" type="submit">
                  <span>
                    Send Enquiry
                  </span>
                  <svg className="w-4 h-4 ml-3 text-brand-gold group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  </svg>
                </button>
                <span className="block sm:inline sm:ml-4 text-[11px] font-mono text-slate-400 mt-2 sm:mt-0">
                  // FAST TRACK RESPONSE PROTOCOL
                </span>
              </div>
            </form>
          </div>
          {/*HT COLUMN: Factory, Offices & Facility Details (5 Col*/}
          <div className="lg:col-span-5 space-y-6">
            {/*d 1: Factory (Primary Manufacturing Hu*/}
            <div className="bg-white border border-brand-blueprint p-6 card-transition corner-brackets relative shadow-sm">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <span className="text-[10px] font-mono text-brand-gold uppercase tracking-widest block font-bold">
                    // SYNTHESIS FACILITY
                  </span>
                  <h3 className="text-xl font-bold text-brand-navy">
                    Factory
                  </h3>
                </div>
                <span className="chamfer-tag bg-brand-navy text-brand-goldLight text-[10px] font-mono px-2.5 py-1 uppercase font-semibold">
                  OWN SYNTHESIS PLANT
                </span>
              </div>
              <p className="text-sm font-semibold text-slate-900 mb-1 font-sans">
                Toyota Chemical Industries Pvt. Ltd.
              </p>
              <address className="text-xs text-slate-600 not-italic leading-relaxed mb-4 font-sans">
                Plot No. 100, Vapi–Silvassa Road, GIDC Vapi, Gujarat 396195, India
              </address>
              <div className="border-t border-brand-blueprint pt-3 flex flex-col space-y-1 text-xs font-mono">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">
                    PHONE:
                  </span>
                  <a className="text-brand-navy hover:text-brand-blue font-bold" href="tel:+919016711708">
                    +91 90167 11708
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">
                    EMAIL:
                  </span>
                  <a className="text-brand-blue hover:underline" href="mailto:info@toyotachemicals.co.in">
                    info@toyotachemicals.co.in
                  </a>
                </div>
              </div>
            </div>
            {/*d 2: Marketing Offi*/}
            <div className="bg-white border border-brand-blueprint p-6 card-transition corner-brackets relative shadow-sm">
              <div className="mb-3">
                <span className="text-[10px] font-mono text-brand-gold uppercase tracking-widest block font-bold">
                  // COMMERCIAL HEADQUARTERS
                </span>
                <h3 className="text-xl font-bold text-brand-navy">
                  Marketing Office
                </h3>
              </div>
              <address className="text-xs text-slate-600 not-italic leading-relaxed mb-4 font-sans">
                Extn 1.2, Sidhpura Co-Op Ind. Estate, Gaiwadi, S.V. Road, Goregaon (W), Mumbai 400 104, Maharashtra, India
              </address>
              <div className="border-t border-brand-blueprint pt-3 flex flex-col space-y-1 text-xs font-mono">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">
                    PHONE:
                  </span>
                  <a className="text-brand-navy hover:text-brand-blue font-bold" href="tel:02249678234">
                    022-4967 8234
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">
                    EMAIL:
                  </span>
                  <a className="text-brand-blue hover:underline" href="mailto:mumbai@toyotachemicals.co.in">
                    mumbai@toyotachemicals.co.in
                  </a>
                </div>
              </div>
            </div>
            {/*d 3: Business Hours & Dispat*/}
            <div className="bg-white border border-brand-blueprint p-6 card-transition corner-brackets relative shadow-sm">
              <div className="mb-3">
                <span className="text-[10px] font-mono text-brand-gold uppercase tracking-widest block font-bold">
                  // DISPATCH & OPERATION
                </span>
                <h3 className="text-xl font-bold text-brand-navy">
                  Business Hours
                </h3>
              </div>
              <div className="space-y-2 text-xs font-mono">
                <div className="flex items-center justify-between py-1 border-b border-brand-blueprint/60">
                  <span className="text-slate-700 font-medium">
                    Monday – Saturday
                  </span>
                  <span className="text-brand-navy font-bold">
                    9:30 AM – 6:30 PM IST
                  </span>
                </div>
                <div className="flex items-center justify-between py-1 text-slate-400">
                  <span>
                    Sunday
                  </span>
                  <span className="text-rose-600 font-semibold uppercase">
                    Closed
                  </span>
                </div>
              </div>
            </div>
            {/*d 4: Service Ar*/}
            
            <div className="bg-brand-navy text-white p-6 relative corner-brackets shadow-md border-l-4 border-brand-gold">
              <div className="mb-2">
                <span className="text-[10px] font-mono text-brand-goldLight uppercase tracking-widest block">
                  // DISTRIBUTION TERRITORY
                </span>
                <h3 className="text-xl font-bold text-white">
                  Service Area
                </h3>
              </div>
              <p className="text-xs text-slate-200 leading-relaxed font-sans">
                Vapi, Valsad, Daman, Silvassa, Surat and South Gujarat — and supply across India.
              </p>
              <div className="mt-4 pt-3 border-t border-brand-borderDark flex items-center justify-between text-[11px] font-mono text-brand-gold">
                <span>
                  DOMESTIC & EXPORT READY
                </span>
                <span>
                  ISO 9001:2015
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="bg-[#EEF4F9]">

          <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12">

            <div className="mb-8">

              <SectionLabel>
                Factory Location // GIDC Vapi
              </SectionLabel>

              <h2 className="font-display text-4xl font-semibold text-[#0A2C4B] sm:text-5xl">
                Find us in Vapi, Gujarat.
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-[#52667D]">
                Toyota Chemical Industries Pvt. Ltd. factory is located at
                Plot No. 100, Vapi–Silvassa Road, GIDC Vapi, Gujarat 396195,
                India.
              </p>

            </div>


            <div className="relative overflow-hidden border border-[#B7CBDD] bg-white p-2">

              <iframe
                title="Toyota Chemical Industries GIDC Vapi"
                src="https://maps.google.com/maps?q=20.3594162,72.9252245&z=14&output=embed"
                loading="lazy"
                className="h-[380px] w-full border-0 sm:h-[460px]"
              />

              <div className="pointer-events-none absolute left-6 top-6 bg-[#061729]/95 px-4 py-3">

                <div className="font-mono text-[9px] font-bold uppercase tracking-[0.15em] text-[#DF9B42]">
                  GIDC VAPI
                </div>

                <div className="mt-1 font-mono text-[8px] uppercase tracking-widest text-white">
                  Gujarat // India
                </div>

              </div>

            </div>

          </div>

        </section>
    {/*: MainContactConsoleGr*/}
    {/*IN: CompliancePilla*/}
    <section className="py-16 bg-brand-ice border-y border-brand-blueprint" data-purpose="compliance-pillars">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[11px] font-mono text-brand-gold tracking-widest uppercase font-semibold block mb-2">
            — COMPLIANCE & INTEGRITY —
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy tracking-tight mb-3">
            Manufactured to specification, supplied direct
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Over 50 years of dedicated resin synthesis delivering high mechanical bead durability, precise particle size uniformity, and guaranteed operating capacity.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/*lar*/}
          <div className="bg-white border border-brand-blueprint p-6 corner-brackets relative shadow-sm card-transition">
            <div className="flex items-center justify-between text-xs font-mono mb-3">
              <span className="text-brand-navy font-bold">
                01 / HERITAGE
              </span>
              <span className="text-brand-gold font-semibold">
                EST. 1972
              </span>
            </div>
            <h4 className="text-lg font-bold text-brand-navy mb-2">
              Since 1972
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Over five decades of dedicated resin manufacturing from Vapi, Gujarat, delivering unmatched batch-to-batch repeatability.
            </p>
          </div>
          {/*lar*/}
          <div className="bg-white border border-brand-blueprint p-6 corner-brackets relative shadow-sm card-transition">
            <div className="flex items-center justify-between text-xs font-mono mb-3">
              <span className="text-brand-navy font-bold">
                02 / QUALITY SYSTEMS
              </span>
              <span className="text-brand-gold font-semibold">
                AUDITED
              </span>
            </div>
            <h4 className="text-lg font-bold text-brand-navy mb-2">
              ISO 9001 & 14001
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Certified quality & environmental management with rigorous multi-point analytical testing for particle uniformity and osmotic shock resistance.
            </p>
          </div>
          {/*lar*/}
          <div className="bg-white border border-brand-blueprint p-6 corner-brackets relative shadow-sm card-transition">
            <div className="flex items-center justify-between text-xs font-mono mb-3">
              <span className="text-brand-navy font-bold">
                03 / DISPATCH AGILITY
              </span>
              <span className="text-brand-gold font-semibold">
                FLEXIBLE
              </span>
            </div>
            <h4 className="text-lg font-bold text-brand-navy mb-2">
              25 L to bulk
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              No upper limit; immediate ready-to-ship stock for emergency top-ups or full multi-ton industrial changes.
            </p>
          </div>
          {/*lar*/}
          <div className="bg-white border border-brand-blueprint p-6 corner-brackets relative shadow-sm card-transition">
            <div className="flex items-center justify-between text-xs font-mono mb-3">
              <span className="text-brand-navy font-bold">
                04 / DATA TRANSPARENCY
              </span>
              <span className="text-brand-gold font-semibold">
                CERTIFIED
              </span>
            </div>
            <h4 className="text-lg font-bold text-brand-navy mb-2">
              TDS with every grade
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Comprehensive Certificate of Analysis (COA) specifying bead size distribution, exchange capacity, and sieve analysis with each dispatch.
            </p>
          </div>
        </div>
      </div>
    </section>
    
    {/*: CompliancePilla*/}
    {/*IN: TechnicalKnowledgeBaseF*/}
    <section className="py-16 sm:py-24 bg-white" data-purpose="technical-knowledge-base-faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/*d*/}
        <div className="text-center mb-12">
          <span className="text-[11px] font-mono text-brand-gold tracking-widest uppercase font-semibold block mb-2">
            — TECHNICAL KNOWLEDGE BASE —
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-brand-navy tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>
        {/*ordion Contain*/}
        <div className="space-y-3.5" id="faq-accordion-group">
          {/* Item*/}
          <div className="border border-brand-blueprint bg-brand-ice/40 transition-colors duration-200" data-accordion="item">
            <button aria-expanded={openFaq === 0} className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 font-sans font-bold text-slate-800 text-sm sm:text-base hover:text-brand-navy focus:outline-none" data-accordion-btn="" onClick={() => setOpenFaq(openFaq === 0 ? null : 0)} type="button">
              <span>
                1. What is the minimum order quantity?
              </span>
              <span className={`w-6 h-6 rounded-full border border-brand-gold/40 flex items-center justify-center text-brand-gold font-mono text-lg leading-none transition-transform duration-200 shrink-0 ${openFaq === 0 ? "rotate-180" : ""}`} data-accordion-icon={true}>{openFaq === 0 ? "−" : "+"}</span>
            </button>
            <div className={openFaq === 0 ? "px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-brand-blueprint/50 font-sans" : "hidden px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-brand-blueprint/50 font-sans"} data-accordion-content="">
              Our minimum order quantity is 25 litres, and we supply from 25 litres up to bulk quantities with no upper limit.
            </div>
          </div>
          {/* Item*/}
          <div className="border border-brand-blueprint bg-brand-ice/40 transition-colors duration-200" data-accordion="item">
            <button aria-expanded={openFaq === 1} className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 font-sans font-bold text-slate-800 text-sm sm:text-base hover:text-brand-navy focus:outline-none" data-accordion-btn="" onClick={() => setOpenFaq(openFaq === 1 ? null : 1)} type="button">
              <span>
                2. How quickly will I get a response?
              </span>
              <span className={`w-6 h-6 rounded-full border border-brand-gold/40 flex items-center justify-center text-brand-gold font-mono text-lg leading-none transition-transform duration-200 shrink-0 ${openFaq === 1 ? "rotate-180" : ""}`} data-accordion-icon={true}>{openFaq === 1 ? "−" : "+"}</span>
            </button>
            <div className={openFaq === 1 ? "px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-brand-blueprint/50 font-sans" : "hidden px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-brand-blueprint/50 font-sans"} data-accordion-content="">
              We reply to enquiries by email or WhatsApp, usually the same working day. Once a grade is confirmed, typical time from enquiry to dispatch is about a week.
            </div>
          </div>
          {/* Item*/}
          <div className="border border-brand-blueprint bg-brand-ice/40 transition-colors duration-200" data-accordion="item">
            <button aria-expanded={openFaq === 2} className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 font-sans font-bold text-slate-800 text-sm sm:text-base hover:text-brand-navy focus:outline-none" data-accordion-btn="" onClick={() => setOpenFaq(openFaq === 2 ? null : 2)} type="button">
              <span>
                3. Can you match the resin I currently run?
              </span>
              <span className={`w-6 h-6 rounded-full border border-brand-gold/40 flex items-center justify-center text-brand-gold font-mono text-lg leading-none transition-transform duration-200 shrink-0 ${openFaq === 2 ? "rotate-180" : ""}`} data-accordion-icon={true}>{openFaq === 2 ? "−" : "+"}</span>
            </button>
            <div className={openFaq === 2 ? "px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-brand-blueprint/50 font-sans" : "hidden px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-brand-blueprint/50 font-sans"} data-accordion-content="">
              Yes. Send the grade and operating conditions you run today and we will confirm the matching Toyota grade and attach its technical data sheet.
            </div>
          </div>
          {/* Item*/}
          <div className="border border-brand-blueprint bg-brand-ice/40 transition-colors duration-200" data-accordion="item">
            <button aria-expanded={openFaq === 3} className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 font-sans font-bold text-slate-800 text-sm sm:text-base hover:text-brand-navy focus:outline-none" data-accordion-btn="" onClick={() => setOpenFaq(openFaq === 3 ? null : 3)} type="button">
              <span>
                4. Do you provide a technical data sheet?
              </span>
              <span className={`w-6 h-6 rounded-full border border-brand-gold/40 flex items-center justify-center text-brand-gold font-mono text-lg leading-none transition-transform duration-200 shrink-0 ${openFaq === 3 ? "rotate-180" : ""}`} data-accordion-icon={true}>{openFaq === 3 ? "−" : "+"}</span>
            </button>
            <div className={openFaq === 3 ? "px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-brand-blueprint/50 font-sans" : "hidden px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-brand-blueprint/50 font-sans"} data-accordion-content="">
              Yes. Every grade is supplied with a technical data sheet covering bead size, total exchange capacity, sieve analysis and operating limits.
            </div>
          </div>
          {/* Item*/}
          <div className="border border-brand-blueprint bg-brand-ice/40 transition-colors duration-200" data-accordion="item">
            <button aria-expanded={openFaq === 4} className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 font-sans font-bold text-slate-800 text-sm sm:text-base hover:text-brand-navy focus:outline-none" data-accordion-btn="" onClick={() => setOpenFaq(openFaq === 4 ? null : 4)} type="button">
              <span>
                5. Do you deliver, or do I collect from the plant?
              </span>
              <span className={`w-6 h-6 rounded-full border border-brand-gold/40 flex items-center justify-center text-brand-gold font-mono text-lg leading-none transition-transform duration-200 shrink-0 ${openFaq === 4 ? "rotate-180" : ""}`} data-accordion-icon={true}>{openFaq === 4 ? "−" : "+"}</span>
            </button>
            <div className={openFaq === 4 ? "px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-brand-blueprint/50 font-sans" : "hidden px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-brand-blueprint/50 font-sans"} data-accordion-content="">
              Both. We deliver to your plant, or you can collect from the factory at GIDC Vapi — whichever suits you.
            </div>
          </div>
          {/* Item*/}
          <div className="border border-brand-blueprint bg-brand-ice/40 transition-colors duration-200" data-accordion="item">
            <button aria-expanded={openFaq === 5} className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 font-sans font-bold text-slate-800 text-sm sm:text-base hover:text-brand-navy focus:outline-none" data-accordion-btn="" onClick={() => setOpenFaq(openFaq === 5 ? null : 5)} type="button">
              <span>
                6. Which areas do you serve?
              </span>
              <span className={`w-6 h-6 rounded-full border border-brand-gold/40 flex items-center justify-center text-brand-gold font-mono text-lg leading-none transition-transform duration-200 shrink-0 ${openFaq === 5 ? "rotate-180" : ""}`} data-accordion-icon={true}>{openFaq === 5 ? "−" : "+"}</span>
            </button>
            <div className={openFaq === 5 ? "px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-brand-blueprint/50 font-sans" : "hidden px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-brand-blueprint/50 font-sans"} data-accordion-content="">
              Vapi, Valsad, Daman, Silvassa, Surat and South Gujarat, and we supply to plants across India.
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*: TechnicalKnowledgeBaseF*/}
    {/*IN: ConsultationCalloutBann*/}
    <section className="bg-brand-dark text-white py-12 px-4 sm:px-6 lg:px-8 border-y border-brand-borderDark" data-purpose="direct-factory-cta">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
        <div>
          <span className="text-[10px] font-mono text-brand-gold uppercase tracking-widest font-semibold block mb-1">
            ■ DIRECT FACTORY QUOTATION & ANALYSIS
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Not sure which grade you need?
          </h3>
          <p className="text-slate-300 text-sm mt-1 max-w-2xl font-sans">
            Send the grade and operating conditions you run today and we will confirm the right Toyota grade.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4 shrink-0">
          <a  className="px-6 py-3 bg-brand-gold hover:bg-brand-goldBorder text-brand-dark text-xs font-mono font-bold uppercase tracking-widest transition-colors shadow-sm" href="mailto:info@toyotachemicals.co.in">
            Send an enquiry
          </a>
          <a className="px-6 py-3 border border-slate-600 hover:border-white text-slate-200 hover:text-white text-xs font-mono font-bold uppercase tracking-widest transition-colors" href="tel:+919016711708">
            Call +91 90167 11708
          </a>
        </div>
      </div>
    </section>
    {/*: ConsultationCalloutBann*/}
    {/*IN: EnterpriseTrustStr*/}
    
    {/*: EnterpriseTrustStr*/}
  </main>
 
  {/*: MobileStickyQuickDo*/}
  {/*IN: AccordionInteractionScri*/}
  {/*: AccordionInteractionScri*/}
      </div>
    </>
  );
}

