import React from "react";
import { Link } from "react-router";


export default function Industries() {
  return (
    <>
      <style>{`
@import url('https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0');

:root{--navy:#0A2C4B;--deep:#06182B;--blue:#1868A8;--gold:#B27B34;--gold2:#E5A855;--ice:#F6F9FC;--line:rgba(10,44,75,.10);--muted:#687681}
.industries-page,.industries-page *{box-sizing:border-box}.industries-page{background:var(--ice);color:#181c1e;font-family:"Inter",sans-serif}
.industries-page a{text-decoration:none}.industries-page img{display:block;max-width:100%}.industries-page .wrap{max-width:1440px;margin:auto;padding:0 80px}
.skip{position:absolute;left:-9999px}.skip:focus{left:16px;top:16px;z-index:100;background:var(--deep);color:white;padding:12px 18px}
.eyebrow{font-size:11px;line-height:1;letter-spacing:.28em;text-transform:uppercase;font-weight:700;color:var(--blue)}
.industries-page h1,.industries-page h2,.industries-page h3{font-family:"EB Garamond",serif;margin-top:0}.industries-page h2{font-size:48px;line-height:1.15;font-weight:500;color:var(--deep)}.industries-page h3{color:var(--navy)}
.btn{display:inline-flex;align-items:center;justify-content:center;padding:14px 24px;border:1px solid transparent;font-size:11px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;transition:.25s;border-radius:0}
.btn-green{background:var(--navy);color:white}.btn-green:hover{background:var(--gold)}
.btn-wa{background:transparent;color:white;border-color:rgba(255,255,255,.45)}.btn-wa:hover{background:rgba(255,255,255,.08)}
.btn-white,.btn-ghost{background:white;color:var(--navy);border-color:var(--line)}
.ihero{position:relative;background:linear-gradient(180deg,#fff 0%,#F6F9FC 100%);overflow:hidden;color:#181c1e;border-bottom:1px solid var(--line)}
.ihero:before{content:"";position:absolute;inset:0;background-image:linear-gradient(to right,rgba(10,44,75,.035) 1px,transparent 1px),linear-gradient(to bottom,rgba(10,44,75,.035) 1px,transparent 1px);background-size:48px 48px}
.ihero .wrap{position:relative;padding-top:56px;padding-bottom:82px;text-align:left;max-width:1440px}
.ihero .crumb{font-size:9px;letter-spacing:.16em;text-transform:uppercase;color:#7b8791;margin-bottom:30px}.ihero .crumb a{color:#7b8791}
.ihero .eyebrow{color:var(--blue);margin-bottom:16px}
.ihero h1{font-family:"EB Garamond",serif;font-size:clamp(52px,6vw,78px);line-height:1.03;letter-spacing:-.035em;font-weight:500;color:var(--deep);max-width:920px;margin:0}
.ihero h1:after{content:"";display:block;width:76px;height:3px;background:var(--gold);margin-top:26px}
.ihero .sub{max-width:790px;font-size:18px;line-height:1.75;color:#4d5963;margin:26px 0 0}.ihero .brand{font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:#7a858e;margin-top:14px}
.ihero .cta{display:flex;gap:12px;flex-wrap:wrap;margin-top:32px}.ihero .cta .btn-wa{color:var(--navy);border-color:var(--line);background:white}
.ihero .badges{display:flex;gap:0;flex-wrap:wrap;margin-top:38px;border:1px solid var(--line);width:max-content;max-width:100%;background:white}
.ihero .badges span{padding:12px 17px;border-right:1px solid var(--line);font-size:9px;letter-spacing:.12em;text-transform:uppercase;color:#52606b}.ihero .badges span:last-child{border-right:0}
.ribbon{max-width:1440px;margin:-38px auto 0;padding:0 80px;position:relative;z-index:4}.ribbon .in{display:grid;grid-template-columns:repeat(4,1fr);background:white;border:1px solid var(--line);box-shadow:0 10px 30px rgba(10,44,75,.07)}
.ribbon .st{padding:24px;border-right:1px solid var(--line);border-top:3px solid var(--navy)}.ribbon .st:nth-child(even){border-top-color:var(--gold)}.ribbon .st:last-child{border-right:0}.ribbon .st b{font-family:"EB Garamond",serif;font-size:30px;font-weight:600;color:var(--navy);display:block}.ribbon .st span{font-size:10px;text-transform:uppercase;letter-spacing:.1em;color:#7b8791}
.industries-page section{padding:92px 0}.intro{display:grid;grid-template-columns:7fr 5fr;gap:64px;align-items:start}.intro>div{max-width:760px}.intro h2{margin-top:12px!important}.intro p{font-size:16px;line-height:1.8;color:#505d67}
.ctx{position:relative;background:white;border:1px solid var(--line);padding:32px;box-shadow:0 12px 30px rgba(10,44,75,.06)}.ctx:before,.ctx:after{content:"";position:absolute;width:22px;height:22px;border-color:var(--gold)}.ctx:before{top:-1px;left:-1px;border-top:2px solid var(--gold);border-left:2px solid var(--gold)}.ctx:after{bottom:-1px;right:-1px;border-bottom:2px solid var(--gold);border-right:2px solid var(--gold)}
.ctx h4{font-size:10px;letter-spacing:.2em;text-transform:uppercase;color:var(--blue);margin:0 0 18px}.ctx ul{padding:0;margin:0;list-style:none}.ctx li{padding:15px 0;border-bottom:1px solid var(--line)}.ctx li b{display:block;color:var(--navy);font-size:14px}.ctx li span{display:block;color:#78838c;font-size:12px;margin-top:3px}
.flow{background:#eef3f7;border-top:1px solid var(--line);border-bottom:1px solid var(--line)}.sec-head{max-width:760px;margin-bottom:40px}.sec-head h2{margin:12px 0 0}.lead{font-size:16px;line-height:1.7;color:#66737e}
.isec-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}.isec{position:relative;display:flex;flex-direction:column;min-height:245px;padding:30px;background:white;border:1px solid var(--line);color:#181c1e;box-shadow:0 4px 16px rgba(10,44,75,.035);transition:.3s;overflow:hidden}.isec:before{content:"";position:absolute;left:0;top:0;width:4px;height:100%;background:var(--navy)}.isec:nth-child(2n):before{background:var(--gold)}.isec:hover{transform:translateY(-5px);box-shadow:0 16px 35px rgba(10,44,75,.09)}
.isec .k{font-size:9px;line-height:1.4;letter-spacing:.16em;text-transform:uppercase;color:var(--blue);font-weight:700;margin-bottom:16px}.isec b{font-family:"EB Garamond",serif;font-size:28px;line-height:1.15;color:var(--deep);margin-bottom:14px}.isec .d{font-size:14px;line-height:1.7;color:#65717b;flex:1}.isec .go{font-size:10px;letter-spacing:.14em;text-transform:uppercase;font-weight:700;color:var(--gold);margin-top:22px}
.isec.image-card{min-height:345px;justify-content:flex-end;padding:30px 30px 27px;border:1px solid rgba(178,123,52,.30);background:var(--deep);color:#fff;box-shadow:0 18px 38px -22px rgba(6,24,43,.55);clip-path:polygon(0 0,93% 0,100% 7%,100% 100%,0 100%);isolation:isolate;overflow:hidden}
.isec.image-card .card-bg{position:absolute;inset:0;z-index:0;width:100%;height:100%;object-fit:cover;object-position:center;transform:scale(1.005);filter:saturate(.96) contrast(1.02)}
.isec.image-card:before{content:"";position:absolute;inset:0;z-index:1;width:auto;height:auto;background:linear-gradient(180deg,rgba(6,24,43,.03) 0%,rgba(6,24,43,.15) 34%,rgba(6,24,43,.62) 67%,rgba(6,24,43,.96) 100%);pointer-events:none}
.isec.image-card>span,.isec.image-card>b{position:relative;z-index:2;text-shadow:0 2px 12px rgba(6,24,43,.28)}.isec.image-card .k{color:var(--gold2);margin-bottom:7px}.isec.image-card b{color:#fff;margin-bottom:8px;font-size:29px}.isec.image-card .d{color:rgba(255,255,255,.91);flex:0 0 auto;line-height:1.55;max-width:95%}.isec.image-card .go{color:var(--gold2);margin-top:13px}.isec.image-card:hover{transform:none;box-shadow:0 18px 38px -22px rgba(6,24,43,.55)}

.band{position:relative;background:var(--navy);color:white;overflow:hidden}.band:before{content:"";position:absolute;inset:0;background-image:linear-gradient(to right,rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(to bottom,rgba(255,255,255,.04) 1px,transparent 1px);background-size:32px 32px}.band .wrap{position:relative;text-align:center;padding-top:64px!important;padding-bottom:64px!important}.band h2{color:white;max-width:850px;margin:0 auto}.band p{max-width:720px;margin:16px auto 28px;color:#d2dce4}.band .acts{display:flex;gap:12px;justify-content:center;flex-wrap:wrap}
.clients{background:white;text-align:center;border-top:1px solid var(--line)}.clients h2{margin-top:10px!important}.marquee{margin-top:34px;overflow:hidden}.track{display:flex;width:max-content;animation:cscroll 55s linear infinite}.marquee:hover .track{animation-play-state:paused}.chip{width:184px;height:108px;flex:0 0 auto;margin-right:18px;background:white;border:1px solid var(--line);display:flex;align-items:center;justify-content:center;padding:18px;box-shadow:0 4px 14px rgba(10,44,75,.04)}.chip img{max-height:65px;width:auto;object-fit:contain}@keyframes cscroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}
@media(max-width:1100px){.wrap,.ribbon{padding-left:40px;padding-right:40px}.isec-grid{grid-template-columns:repeat(2,1fr)}}
@media(max-width:800px){.intro{grid-template-columns:1fr}.ribbon .in{grid-template-columns:1fr 1fr}.isec-grid{grid-template-columns:1fr}.f-grid{grid-template-columns:1fr 1fr}.ihero h1{font-size:52px}}
// @media(max-width:600px){.wrap,.ribbon{padding-left:22px;padding-right:22px}.ihero .wrap{padding-top:40px;padding-bottom:70px}.ihero h1{font-size:43px}.ihero .badges{width:100%}.ihero .badges span{width:50%;border-bottom:1px solid var(--line)}.ribbon{margin-top:-28px}.ribbon .st{padding:18px}.f-grid{grid-template-columns:1fr}.industries-page section{padding:68px 0}.industries-page h2{font-size:36px}.isec-grid{display:grid!important;grid-template-columns:minmax(0,1fr)!important;gap:24px!important;width:100%!important}.isec.image-card{display:flex!important;width:100%!important;min-width:0!important;min-height:360px!important;padding:28px!important;clip-path:none!important}.isec.image-card .card-bg{display:block!important;width:100%!important;height:100%!important;object-fit:cover!important}.isec.image-card>span,.isec.image-card>b{display:block!important;visibility:visible!important;opacity:1!important}}
@media(max-width:600px){

  /* ===== MOBILE WIDTH / OVERFLOW FIX ===== */
  html,
  body{
    width:100%;
    max-width:100%;
    margin:0;
    padding:0;
    overflow-x:hidden;
  }

  .industries-page{
    width:100%;
    max-width:100vw;
    overflow-x:hidden;
  }

  .industries-page *,
  .industries-page *::before,
  .industries-page *::after{
    box-sizing:border-box;
  }

  /* ===== CONTAINER ===== */
  .industries-page .wrap,
  .ribbon{
    width:100%;
    max-width:100%;
    margin-left:auto;
    margin-right:auto;
    padding-left:20px;
    padding-right:20px;
  }

  /* ===== HERO - REFERENCE IMAGE STYLE ===== */
  .ihero{
    width:100%;
    max-width:100%;
    overflow:hidden;
  }

  .ihero .wrap{
    width:100%;
    max-width:100%;
    padding-top:30px;
    padding-bottom:58px;
    text-align:center;
  }

  .ihero .crumb{
    display:none;
  }

  .ihero .eyebrow{
    display:inline-flex;
    align-items:center;
    justify-content:center;
    width:auto;
    margin:0 auto 25px;
    padding:8px 13px;
    border:1px solid rgba(178,123,52,.28);
    color:var(--gold);
    font-size:10px;
    line-height:1;
    letter-spacing:.18em;
  }

  .ihero .eyebrow::before{
    content:"■";
    font-size:7px;
    margin-right:9px;
    color:var(--gold);
  }

  .ihero h1{
    width:100%;
    max-width:340px;
    margin:0 auto;
    font-family:"Inter",sans-serif;
    font-size:36px;
    line-height:1.08;
    letter-spacing:-.04em;
    font-weight:700;
    text-align:center;
    color:var(--deep);
    overflow-wrap:break-word;
  }

  .ihero h1:after{
    display:none;
  }

  .ihero .sub{
    max-width:340px;
    margin:24px auto 0;
    font-size:15px;
    line-height:1.65;
    text-align:center;
  }

  .ihero .brand{
    max-width:340px;
    margin:14px auto 0;
    text-align:center;
    line-height:1.6;
  }

  .ihero .cta{
    width:100%;
    justify-content:center;
    margin-top:26px;
  }

  .ihero .cta .btn{
    max-width:100%;
  }

  .ihero .badges{
    width:100%;
    max-width:100%;
    margin:30px auto 0;
  }

  .ihero .badges span{
    width:50%;
    padding:11px 8px;
    border-bottom:1px solid var(--line);
  }

  /* ===== STATS RIBBON ===== */
  .ribbon{
    margin-top:-28px;
  }

  .ribbon .in{
    width:100%;
    max-width:100%;
    grid-template-columns:1fr 1fr;
  }

  .ribbon .st{
    min-width:0;
    padding:18px 12px;
  }

  .ribbon .st b{
    font-size:25px;
  }

  /* ===== CONTENT ===== */
  .industries-page section{
    width:100%;
    max-width:100%;
    padding:68px 0;
    overflow:hidden;
  }

  .intro{
    width:100%;
    min-width:0;
    grid-template-columns:minmax(0,1fr);
    gap:35px;
  }

  .intro > div,
  .ctx,
  .sec-head{
    width:100%;
    max-width:100%;
    min-width:0;
  }

  .industries-page h2{
    font-size:36px;
    overflow-wrap:break-word;
  }

  /* ===== INDUSTRY CARDS ===== */
  .isec-grid{
    display:grid !important;
    width:100% !important;
    max-width:100% !important;
    min-width:0 !important;
    grid-template-columns:minmax(0,1fr) !important;
    gap:24px !important;
    margin:0 !important;
  }

  .isec{
    width:100% !important;
    max-width:100% !important;
    min-width:0 !important;
  }

  .isec.image-card{
    display:flex !important;
    width:100% !important;
    max-width:100% !important;
    min-width:0 !important;
    min-height:360px !important;
    padding:28px 24px !important;
    clip-path:none !important;
    overflow:hidden !important;
  }

  .isec.image-card .card-bg{
    position:absolute !important;
    inset:0 !important;
    display:block !important;
    width:100% !important;
    max-width:100% !important;
    height:100% !important;
    object-fit:cover !important;
  }

  .isec.image-card > span,
  .isec.image-card > b{
    display:block !important;
    visibility:visible !important;
    opacity:1 !important;
  }

  .isec.image-card b{
    font-size:27px;
  }

  .isec.image-card .d{
    width:100%;
    max-width:100%;
  }

  /* ===== BOTTOM CTA ===== */
  .band,
  .band .wrap{
    width:100%;
    max-width:100%;
  }

  .band .acts{
    width:100%;
  }

  /* ===== STICKY BAR OVERFLOW PROTECTION ===== */
  .sticky{
    max-width:100vw;
  }

  .f-grid{
    grid-template-columns:1fr;
  }
}
@media(prefers-reduced-motion:reduce){*{transition:none!important}.track{animation:none;flex-wrap:wrap;width:auto;justify-content:center}}
`}</style>
      <div className="industries-page">

<a className="skip" href="#main">Skip to content</a>
<main id="main">

  <div className="ihero"><div className="wrap">
    <p className="crumb"><Link to="/">Home</Link> &rsaquo; Industries</p>
    <p className="eyebrow">Industries</p>
    <h1>Ion exchange resins for every industry we serve</h1>
    <p className="sub">From power-plant boiler feed to sugar decolourisation, textile dyeing to chemical process water &mdash; the AGRION resins and the water problems they solve, sector by sector.</p>
    <p className="brand">Manufactured by Toyota Chemical Industries in Vapi, Gujarat since 1972.</p>
    <div className="cta"><Link className="btn btn-green" to="/contact">Discuss your requirement</Link><a className="btn btn-wa" href="#sectors">Browse sectors</a></div>
    <div className="badges"><span>Since 1972</span><span>ISO 9001:2015</span><span>ISO 14001:2015</span><span>Cation · Anion · Mixed bed</span></div>
  </div></div>

  <div className="ribbon"><div className="in">
    <div className="st"><b>6 sectors</b><span>Dedicated industry pages</span></div>
    <div className="st"><b>50+ yrs</b><span>Manufacturing since 1972</span></div>
    <div className="st"><b>Full range</b><span>One ISO-certified source</span></div>
    <div className="st"><b>25 L&ndash;bulk</b><span>Trial charge to full change</span></div>
  </div></div>

  <section><div className="wrap intro">
    <div>
      <p className="eyebrow">One supplier, every duty</p>
      <h2 style={{marginTop: "10px"}}>The same resins, matched to each industry&rsquo;s water</h2>
      <p style={{marginTop: "16px"}}>Different industries face different water problems &mdash; but they draw on the same core of cation, anion and mixed bed chemistry. Each industry page below maps that sector&rsquo;s real water challenges to the AGRION grades that solve them, and links straight through to the product and application detail.</p>
      <p>Toyota Chemical Industries has supplied ion exchange resins across Indian industry since 1972, from our ISO 9001:2015 and ISO 14001:2015 plant in GIDC Vapi &mdash; with a technical data sheet for every grade.</p>
    </div>
    <aside className="ctx">
      <h4>Not sure where you fit?</h4>
      <ul>
        <li><b>Tell us your water problem</b><span>We&rsquo;ll map it to the right grade</span></li>
        <li><b>Any volume</b><span>25 L to bulk, no upper limit</span></li>
        <li><b>TDS with every grade</b><span>Bead size, capacity, sieve analysis</span></li>
      </ul>
      <Link className="btn btn-green" to="/contact" style={{width: "100%", marginTop: "16px"}}>Send an enquiry</Link>
    </aside>
  </div></section>

  <section className="flow" id="sectors"><div className="wrap">
    <div className="sec-head">
      <p className="eyebrow">Industries</p>
      <h2>Choose your sector</h2>
      <p className="lead">Each page answers one industry&rsquo;s water problems completely &mdash; and points to the exact AGRION resins.</p>
    </div>
    <div className="isec-grid">
      <Link className="isec image-card" to="/industries/power-thermal-industries">
        <img className="card-bg" src="https://images.unsplash.com/photo-1773517459626-f468797f22cc?auto=format&fit=crop&w=1200&q=80" alt="Power and thermal plant industrial machinery" loading="lazy" />
        <span className="k">Boiler feed · DM · condensate</span>
        <b>Power / Thermal Plants</b>
        <span className="d">Boiler feed softening, demineralisation, dealkalisation and condensate polishing.</span>
        <span className="go">Explore sector &rarr;</span>
      </Link>
      <Link className="isec image-card" to="/industries/suger-refinery-industries">
        <img className="card-bg" src="https://images.unsplash.com/photo-1676035970014-1309dbbc3c6c?auto=format&fit=crop&w=1200&q=80" alt="Sugar processing factory" loading="lazy" />
        <span className="k">Decolourise · soften · DM</span>
        <b>Sugar Processing</b>
        <span className="d">Liquor decolourisation, softening and demineralisation for cane and refined sugar.</span>
        <span className="go">Explore sector &rarr;</span>
      </Link>
      <Link className="isec image-card" to="/industries/textile-industries">
        <img className="card-bg" src="https://images.unsplash.com/photo-1741176505800-caaa3a52631a?auto=format&fit=crop&w=1200&q=80" alt="Textile manufacturing and dye industry" loading="lazy" />
        <span className="k">Soften · DM · effluent</span>
        <b>Textile & Dye</b>
        <span className="d">Soft water for consistent dyeing, demineralised boiler feed and effluent colour removal.</span>
        <span className="go">Explore sector &rarr;</span>
      </Link>
      <Link className="isec image-card" to="/industries/chemicalindustries">
        <img className="card-bg" src="https://images.unsplash.com/photo-1636747423727-2d39d0aa9796?auto=format&fit=crop&w=1200&q=80" alt="Chemical processing plant" loading="lazy" />
        <span className="k">DM · heavy metal · ZLD</span>
        <b>Chemical & Intermediates</b>
        <span className="d">Process demineralisation, softening, heavy-metal removal and ZLD.</span>
        <span className="go">Explore sector &rarr;</span>
      </Link>
      <Link className="isec image-card" to="/industries/paper-pulp-industries">
        <img className="card-bg" src="https://images.unsplash.com/photo-1564038057948-09f845445508?auto=format&fit=crop&w=1200&q=80" alt="Paper and pulp mill" loading="lazy" />
        <span className="k">Soften · DM · polish</span>
        <b>Paper & Pulp</b>
        <span className="d">Process water softening, demineralisation and condensate polishing.</span>
        <span className="go">Explore sector &rarr;</span>
      </Link>
      <Link className="isec image-card" to="/industries/food-beverage-industries">
        <img className="card-bg" src="https://images.unsplash.com/photo-1530037335614-e68828dcf258?auto=format&fit=crop&w=1200&q=80" alt="Food and beverage production facility" loading="lazy" />
        <span className="k">Soften · demin · decolourise</span>
        <b>Food & Beverage</b>
        <span className="d">Softening, demineralisation, decolourisation and polishing for food and beverage water.</span>
        <span className="go">Explore sector &rarr;</span>
      </Link>
    </div>
  </div></section>

  <section className="band" style={{padding: "0"}}><div className="wrap">
    <h2>Don&rsquo;t see your industry? Tell us your water problem.</h2>
    <p>Whatever your sector, share your water analysis and duty and we&rsquo;ll recommend the right resins and attach their TDS.</p>
    <div className="acts"><Link className="btn btn-green" to="/contact">Send an enquiry</Link><a className="btn btn-wa" href="https://wa.me/919898701010">WhatsApp us</a></div>
  </div></section>



</main>
<div className="sticky"><a className="btn btn-white" href="tel:+919016711708">Call</a><a className="btn btn-green" href="https://wa.me/919898701010">WhatsApp</a><Link className="btn btn-ghost" to="/contact">Enquire</Link></div>




      </div>
    </>
  );
}
