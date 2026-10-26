import React, { useEffect } from "react";
import { Link } from "react-router";

export default function TextileDye() {
  useEffect(() => {
    const href =
      "https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap";
    let link = document.querySelector(`link[href="${href}"]`);
    const created = !link;

    if (!link) {
      link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = href;
      document.head.appendChild(link);
    }

    return () => {
      if (created && link) link.remove();
    };
  }, []);

  return (
    <div className="chemical-page">
      <style>{`:root{
  --navy:#0A2C4B; --deep:#00172E; --blue:#1868A8; --gold:#B27B34;
  --gold-light:#E5A855; --ice:#F6F9FC; --surface:#F7FAFD; --surface-low:#F1F4F7; --surface-high:#E5E8EB; --white:#fff;
  --ink:#181C1E; --muted:#5E6873; --line:rgba(10,44,75,.10); --outline:#73777E;
  --wrap:1280px;
}
*{box-sizing:border-box}
html{scroll-behavior:smooth}
.chemical-page{margin:0}
.chemical-page{font-family:Inter,Arial,sans-serif;color:var(--ink);background:var(--surface);line-height:1.6}
.chemical-page img{max-width:100%;display:block}
.chemical-page a{text-decoration:none;color:inherit}
.chemical-page .wrap{max-width:1440px;margin:auto;padding:0 80px}
.skip{position:absolute;left:-9999px}.skip:focus{left:12px;top:12px;z-index:100;background:var(--deep);color:#fff;padding:10px 16px}
.eyebrow{font-size:11px;letter-spacing:.28em;text-transform:uppercase;font-weight:700;color:var(--blue)}
.chemical-page h1,.chemical-page h2,.chemical-page h3,.chemical-page h4,.chemical-page p{margin-top:0}
.chemical-page h1,.chemical-page h2{font-family:"EB Garamond",serif;color:var(--navy)}
.chemical-page h1{font-size:clamp(48px,6vw,72px);line-height:1.08;letter-spacing:-.02em;font-weight:700}
.chemical-page h2{font-size:clamp(32px,4vw,48px);line-height:1.2;font-weight:500}
.chemical-page h3{color:var(--navy)}
.btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;padding:14px 26px;border:1px solid var(--line);border-radius:0;font-size:11px;letter-spacing:.16em;text-transform:uppercase;font-weight:700;transition:.25s}
.btn-green{background:var(--gold);color:#fff;border-color:var(--gold)}
.btn-ghost,.btn-white{background:#fff;color:var(--navy)}
.btn-wa{background:transparent;color:#fff;border-color:rgba(255,255,255,.4)}







.ihero{position:relative;background:linear-gradient(180deg,#fff 0%,#F7FAFD 48%,#F1F4F7 100%);color:var(--ink);overflow:hidden;border-bottom:1px solid var(--line)}
.ihero:before{content:"";position:absolute;inset:0;background-image:linear-gradient(to right,rgba(10,44,75,.045) 1px,transparent 1px),linear-gradient(to bottom,rgba(10,44,75,.045) 1px,transparent 1px);background-size:40px 40px;pointer-events:none}
.ihero .wrap{position:relative;padding-top:64px;padding-bottom:88px;text-align:left}
.ihero .crumb{font-size:13px;color:#43576A;margin-bottom:30px;font-weight:500}
.ihero .crumb a{color:var(--blue)}
.ihero .eyebrow{color:var(--navy)}
.ihero h1{max-width:700px;margin:16px 0 0;text-shadow:0 1px 0 rgba(255,255,255,.88)}
.ihero .sub{max-width:640px;margin:24px 0 0;font-size:18px;color:#34495E;font-weight:500;text-shadow:0 1px 0 rgba(255,255,255,.82)}
.ihero .brand{max-width:640px;margin:12px 0 0;color:var(--navy);font-weight:700;text-shadow:0 1px 0 rgba(255,255,255,.82)}
.ihero .cta{display:flex;gap:12px;flex-wrap:wrap;margin-top:30px}
.ihero .cta .btn-wa{color:var(--navy);border-color:var(--line);background:#fff}
.ihero .badges{display:flex;gap:10px;flex-wrap:wrap;margin-top:34px}
.ihero .badges span{font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:var(--navy);border:1px solid var(--line);padding:9px 14px;background:#fff}
.ribbon{max-width:var(--wrap);margin:-38px auto 0;padding:0 40px;position:relative;z-index:5}
.ribbon .in{background:#fff;border:1px solid var(--line);display:grid;grid-template-columns:repeat(4,1fr);box-shadow:0 10px 30px rgba(10,44,75,.06)}
.ribbon .st{padding:24px;text-align:left;border-right:1px solid var(--line)}
.ribbon .st:last-child{border-right:0}
.ribbon .st b{display:block;font-family:"EB Garamond",serif;font-size:28px;color:var(--navy)}
.ribbon .st span{font-size:12px;color:var(--muted)}
.chemical-page section{padding:96px 0}
.sec-head{max-width:760px}.sec-head .eyebrow{margin-bottom:12px}
.lead{color:var(--muted);font-size:16px;margin-top:14px;max-width:760px}
.intro{display:grid;grid-template-columns:1.55fr .9fr;gap:56px;align-items:start}
.intro p{margin-bottom:16px}
.ctx{background:#fff;border:1px solid var(--line);padding:28px;position:relative;box-shadow:0 8px 24px rgba(10,44,75,.04)}
.ctx:before{content:"";position:absolute;left:-1px;top:-1px;width:28px;border-top:3px solid var(--gold)}
.ihero:after{content:"";position:absolute;right:6%;top:42px;width:64px;height:64px;border-top:2px solid var(--gold);border-right:2px solid var(--gold);opacity:.55}
.sec-head:before{content:"";display:block;width:42px;height:2px;background:var(--gold);margin-bottom:18px}

.ctx h4{font-size:10px;letter-spacing:.18em;text-transform:uppercase;color:var(--blue);margin-bottom:14px}
.ctx ul{list-style:none;padding:0;margin:0}.ctx li{padding:12px 0;border-bottom:1px solid var(--line)}
.ctx li:last-child{border-bottom:0}.ctx li b{display:block;color:var(--navy)}.ctx li span{font-size:13px;color:var(--muted)}
.flow{background:#F1F4F7;border-top:1px solid var(--line);border-bottom:1px solid var(--line)}
.steps{margin-top:40px;display:flex;flex-direction:column;gap:18px}
.step{display:grid;grid-template-columns:58px 1fr;gap:18px}
.step .num b{width:48px;height:48px;display:flex;align-items:center;justify-content:center;background:var(--navy);color:#fff;font-family:Inter,sans-serif;font-size:14px;font-weight:700}
.card2{background:#fff;border:1px solid var(--line);display:grid;grid-template-columns:1fr 1.15fr;overflow:hidden;transition:.25s;box-shadow:0 5px 18px rgba(10,44,75,.035)}
.card2{border-color:rgba(178,123,52,.55)}
.card2:hover{box-shadow:0 14px 32px rgba(10,44,75,.10);border-color:var(--gold)}
.card2 .prob,.card2 .sol{padding:28px}.card2 .prob{border-right:1px solid var(--line);background:#F7FAFD}
.card2 .tag{display:inline-block;font-size:9px;letter-spacing:.18em;text-transform:uppercase;font-weight:700;color:var(--blue);margin-bottom:10px}
.card2 .prob .tag{color:var(--gold)}.card2 .sol p{font-size:14px;color:var(--muted)}
.gtags{display:flex;flex-wrap:wrap;gap:8px}.gtags a{font-size:11px;padding:6px 10px;border:1px solid var(--line);color:var(--navy);background:var(--ice)}
.gtags a.app{color:var(--blue);background:#fff}
.qband{display:grid;grid-template-columns:1.3fr .8fr;gap:50px;align-items:center}
.qband .pts{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:26px}
.qpt{border:1px solid var(--line);border-top:2px solid var(--gold);padding:18px;background:#fff}.qpt b{display:block;color:var(--navy)}.qpt span{font-size:12px;color:var(--muted)}
.qside{background:#0A2C4B;color:#fff;padding:36px;border-top:3px solid var(--gold);box-shadow:0 16px 36px rgba(10,44,75,.12)}.qside h3{color:#fff}.qside p{color:#D9E4EE;font-size:14px}.qside .btn{width:100%;margin-top:10px}
.faq{max-width:900px}.faq details{border:0;border-bottom:1px solid var(--line);padding:18px 0;background:transparent}
.faq summary{list-style:none;cursor:pointer}.faq summary::-webkit-details-marker{display:none}.faq summary h3{display:inline;font-size:16px}
.faq summary:after{content:"+";float:right;color:var(--gold);font-size:20px}.faq details[open] summary:after{content:"–"}.faq p{font-size:14px;color:var(--muted);margin:12px 0 0}
.ind-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:32px}.ind-grid a{border:1px solid var(--gold);padding:24px;background:#fff;box-shadow:0 5px 18px rgba(10,44,75,.035)}.ind-grid a b{display:block;color:var(--navy)}.ind-grid a span{font-size:12px;color:var(--muted)}
.band{background:#0A2C4B;color:#fff;border-top:3px solid var(--gold)}.band .wrap{padding-top:58px;padding-bottom:58px;text-align:center}.band h2{color:#fff;max-width:650px;margin:0 auto}.band p{color:#D7E3EC;max-width:650px;margin:14px auto 24px}.band .acts{display:flex;justify-content:center;gap:12px;flex-wrap:wrap}
.clients{background:#fff;border-top:1px solid var(--line);text-align:center}.marquee{margin-top:28px;overflow:hidden}.track{display:flex;width:max-content;animation:cscroll 55s linear infinite}.marquee:hover .track{animation-play-state:paused}.chip{flex:0 0 auto;width:184px;height:108px;margin-right:14px;background:#fff;border:1px solid var(--line);display:flex;align-items:center;justify-content:center;padding:16px}.chip img{max-height:65px;width:auto;object-fit:contain}@keyframes cscroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}

.sticky .btn{flex:1}
@media(max-width:1024px){.wrap,.ribbon{padding-left:40px;padding-right:40px}header }
@media(max-width:840px){.intro,.qband{grid-template-columns:1fr}.qband .pts{grid-template-columns:1fr}.card2{grid-template-columns:1fr}.card2 .prob{border-right:0;border-bottom:1px solid var(--line)}.ind-grid{grid-template-columns:1fr}}
@media(max-width:760px){.ribbon .in{grid-template-columns:1fr 1fr}.ribbon .st:nth-child(2){border-right:0}.ribbon .st:nth-child(-n+2){border-bottom:1px solid var(--line)}}
// @media(max-width:640px){.wrap,.ribbon{padding-left:24px;padding-right:24px}.ihero .wrap{padding-top:52px;padding-bottom:72px}.step{grid-template-columns:42px 1fr}.step .num b{width:38px;height:38px}.qband .pts{grid-template-columns:1fr}}
@media(max-width:640px){
html,body{width:100%;max-width:100%;margin:0;padding:0;overflow-x:hidden}
.chemical-page{width:100%;max-width:100vw;overflow-x:hidden}
.chemical-page *,.chemical-page *:before,.chemical-page *:after{box-sizing:border-box}
.chemical-page .wrap,.ribbon{width:100%;max-width:100%;margin-left:auto;margin-right:auto;padding-left:20px;padding-right:20px}

.ihero{width:100%;max-width:100%;overflow:hidden;background-size:cover!important;background-position:center center!important;background-repeat:no-repeat!important}
.ihero:after{display:none}
.ihero .wrap{width:100%;max-width:100%;padding-top:30px;padding-bottom:58px;text-align:center}
.ihero .crumb{display:none}
.ihero .eyebrow{display:inline-flex;align-items:center;justify-content:center;width:auto;max-width:100%;margin:0 auto 25px;padding:8px 12px;border:1px solid rgba(178,123,52,.28);color:var(--gold);font-size:9px;line-height:1.2;letter-spacing:.14em;text-align:center}
.ihero .eyebrow:before{content:"■";font-size:7px;margin-right:8px;color:var(--gold);flex:0 0 auto}
.ihero h1{width:100%;max-width:350px;margin:0 auto;font-family:Inter,Arial,sans-serif;font-size:36px;line-height:1.08;letter-spacing:-.04em;font-weight:700;text-align:center;color:var(--deep);overflow-wrap:break-word}
.ihero .sub{width:100%;max-width:350px;margin:23px auto 0;font-size:15px;line-height:1.65;text-align:center}
.ihero .brand{width:100%;max-width:350px;margin:13px auto 0;text-align:center;line-height:1.55}
.ihero .cta{width:100%;max-width:100%;justify-content:center;margin-top:26px}
.ihero .cta .btn{max-width:100%}
.ihero .badges{width:100%;max-width:100%;justify-content:center;margin-top:30px}
.ihero .badges span{min-width:0;max-width:100%}

.ribbon{margin-top:-28px}
.ribbon .in{width:100%;max-width:100%;grid-template-columns:1fr 1fr}
.ribbon .st{min-width:0;padding:18px 12px;overflow-wrap:anywhere}
.ribbon .st b{font-size:24px}
.ribbon .st span{font-size:10px}

.chemical-page section{width:100%;max-width:100%;padding:68px 0;overflow:hidden}
.intro,.qband{width:100%;max-width:100%;min-width:0;grid-template-columns:minmax(0,1fr);gap:32px}
.intro>div,.ctx,.sec-head,.qside,.faq{width:100%;max-width:100%;min-width:0}
.chemical-page h1,.chemical-page h2,.chemical-page h3,.chemical-page p{max-width:100%;overflow-wrap:break-word}
.chemical-page h2{font-size:34px}

.steps{width:100%;max-width:100%}
.step{width:100%;max-width:100%;min-width:0;grid-template-columns:38px minmax(0,1fr);gap:12px}
.step .num b{width:38px;height:38px}
.card2{width:100%;max-width:100%;min-width:0;grid-template-columns:minmax(0,1fr)}
.card2 .prob,.card2 .sol{width:100%;max-width:100%;min-width:0;padding:22px 18px}
.card2 .prob{border-right:0;border-bottom:1px solid var(--line)}
.gtags{width:100%;max-width:100%}
.gtags a{max-width:100%;overflow-wrap:anywhere}

.qband .pts{width:100%;max-width:100%;grid-template-columns:minmax(0,1fr)}
.qpt{width:100%;max-width:100%;min-width:0}
.qside{padding:28px 20px}
.ind-grid{width:100%;max-width:100%;grid-template-columns:minmax(0,1fr)}
.ind-grid a{width:100%;max-width:100%;min-width:0}
.band,.band .wrap{width:100%;max-width:100%}
.band .wrap{padding-left:20px!important;padding-right:20px!important}
.band .acts{width:100%;max-width:100%}
}
@media(prefers-reduced-motion:reduce){*{transition:none!important;scroll-behavior:auto!important}.track{animation:none;flex-wrap:wrap;width:auto;justify-content:center}}`}</style>
      <a className="skip" href="#main">Skip to content</a>

      <main id="main">


  <div className="ihero" style={{backgroundImage: `linear-gradient(90deg, rgba(247,250,253,1) 0%, rgba(247,250,253,.995) 28%, rgba(247,250,253,.97) 42%, rgba(247,250,253,.90) 52%, rgba(247,250,253,.70) 61%, rgba(247,250,253,.38) 70%, rgba(247,250,253,.12) 82%, rgba(247,250,253,.03) 100%), linear-gradient(180deg, rgba(247,250,253,.10) 0%, rgba(247,250,253,.16) 100%), url("https://images.unsplash.com/photo-1741176505800-caaa3a52631a?auto=format&fit=crop&w=1200&q=80")`, backgroundSize: "cover", backgroundPosition: "center center", backgroundRepeat: "no-repeat"}}><div className="wrap">
    <p className="crumb"><Link to="/">Home</Link> › <Link to="/industries">Industries</Link> › Textile & Dye</p>
    <p className="eyebrow">Industries — Textile & Dye</p>
    <h1>Ion exchange resins for textile & dye</h1>
    <p className="sub">Soft water for consistent dyeing, demineralised boiler feed and colour removal from effluent.</p>
    <p className="brand">Manufactured by Toyota Chemical Industries in Vapi, Gujarat since 1972.</p>
    <div className="cta"><Link className="btn btn-green" to="/contact">Discuss your requirement</Link><a className="btn btn-wa" href="#flow">See the treatment train</a></div>
    <div className="badges"><span>Since 1972</span><span>ISO 9001:2015</span><span>ISO 14001:2015</span><span>Soften · DM · effluent</span></div>
  </div></div>

  <div className="ribbon"><div className="in"><div className="st"><b>50+ yrs</b><span>Manufacturing since 1972</span></div><div className="st"><b>3 stages</b><span>Soften · demineralise · treat effluent</span></div><div className="st"><b>Full range</b><span>One ISO-certified source</span></div><div className="st"><b>25 L–bulk</b><span>Trial charge to full change</span></div></div></div>

  <section><div className="wrap intro">
    <div>
      <p className="eyebrow">The role of ion exchange</p>
      <h2 style={{marginTop: '10px'}}>Why ion exchange resins matter in textile & dye</h2>
      <p style={{marginTop: '16px'}}>Ion exchange resins are important in the textile and dyestuff industries because they help control water quality, improve dyeing consistency and treat coloured wastewater. They are used both in process water preparation and in effluent treatment, making them a key part of quality and environmental management.</p>
      <p>Toyota Chemical Industries supplies the softener, demineralisation and macroporous anion grades used across a textile plant — from the dyehouse to the boiler house to the effluent line — each matched to your water and duty, with a technical data sheet.</p>
    </div>
    <aside className="ctx"><h4>Where resin fits the plant</h4><ul><li><b>Process softening</b><span>AGRION C-80 · C-60</span></li><li><b>Boiler feed DM</b><span>AGRION C-100 H + A-400</span></li><li><b>Effluent colour</b><span>AGRION A-600 MP · A-650 MP</span></li><li><b>Any volume</b><span>25 L to bulk</span></li></ul></aside>
  </div></section>

  <section className="flow" id="flow"><div className="wrap">
    <div className="sec-head">
      <p className="eyebrow">The treatment train</p>
      <h2>Every textile water problem — and the resin that solves it</h2>
      <p className="lead">From dyehouse to boiler house to effluent line — at each stage, the challenge and the AGRION resin that answers it.</p>
    </div>
    <div className="steps">
      <div className="step"><div className="num"><b>1</b></div>
        <div className="card2">
          <div className="prob"><span className="tag">The problem</span><h3>Hardness causing uneven dyeing & spotting</h3></div>
          <div className="sol"><span className="tag">The resin</span><p>Sodium-cycle softening removes calcium and magnesium so dye uptake is even and repeatable, cutting reprocessing and dye waste in the dyehouse.</p>
            <div className="gtags"><Link to="/products/watersoftenerresins">Water softener resins</Link><Link className="app" to="/applications/water-softener-resin">Softening</Link><Link to="/products/cationexchangeresins#c-80">AGRION C-80</Link></div></div>
        </div>
      </div>
      <div className="step"><div className="num"><b>2</b></div>
        <div className="card2">
          <div className="prob"><span className="tag">The problem</span><h3>Scale in boilers & heat-setting equipment</h3></div>
          <div className="sol"><span className="tag">The resin</span><p>Demineralised boiler feed protects high-pressure boilers and heat-setting equipment from scale and carry-over, keeping steam quality consistent.</p>
            <div className="gtags"><Link className="app" to="/applications/dm-plant-resin">DM plant</Link><Link to="/products/cationexchangeresins#c-100-h">AGRION C-100 H</Link><Link to="/products/anionexchangeresins#a-400">AGRION A-400</Link></div></div>
        </div>
      </div>
      <div className="step"><div className="num"><b>3</b></div>
        <div className="card2">
          <div className="prob"><span className="tag">The problem</span><h3>Colour & organics in dyehouse effluent</h3></div>
          <div className="sol"><span className="tag">The resin</span><p>Macroporous and weak base anion resins help strip residual colour and organics from effluent as part of a treatment or recovery train, supporting discharge compliance.</p>
            <div className="gtags"><Link to="/products/anionexchangeresins#a-600-mp">AGRION A-600 MP</Link><Link to="/products/anionexchangeresins#a-650-mp">AGRION A-650 MP</Link></div></div>
        </div>
      </div>
    </div>
  </div></section>

  <section><div className="wrap qband">
    <div>
      <p className="eyebrow">What the right resin delivers</p>
      <h2>Better shades, fewer defects, cleaner discharge</h2>
      <p className="lead">The right ion exchange resin improves product quality, reduces water-related defects and helps meet environmental discharge requirements — and it works alongside filtration, biological treatment and coagulation in modern systems. For the textile and dyestuff sector that means better shade consistency, fewer process interruptions, lower pollution and more sustainable water management.</p>
      <div className="pts"><div className="qpt"><b>Better shade consistency</b><span>Even dyeing, fewer rejects</span></div><div className="qpt"><b>Fewer interruptions</b><span>Stable water, less reprocessing</span></div><div className="qpt"><b>Lower pollution</b><span>Supports discharge compliance</span></div><div className="qpt"><b>ISO 9001 & 14001</b><span>Consistent, certified quality</span></div></div>
    </div>
    <aside className="qside">
      <h3>Talk to our technical team</h3>
      <p>Tell us your water quality and process — we’ll recommend resins for consistent dyeing, boiler feed and effluent, and attach the TDS.</p>
      <Link className="btn btn-green" to="/contact">Send an enquiry</Link>
      <a className="btn btn-wa" href="https://wa.me/919898701010">WhatsApp us</a>
      <a className="btn btn-wa" href="tel:+919016711708">Call +91 90167 11708</a>
    </aside>
  </div></section>

  <section style={{paddingTop: '0'}}><div className="wrap">
    <p className="eyebrow">Questions</p>
    <h2>Textile & Dye — water treatment FAQ</h2>
    <div className="faq" style={{marginTop: '20px'}}>
      <details open><summary><h3>Which resin gives consistent soft water for dyeing?</h3></summary><p>A sodium-form strong acid cation softener such as AGRION C-80 (or C-60 for standard duty) removes hardness so dye uptake is even and repeatable.</p></details>
      <details><summary><h3>Which resins treat boiler feed water in a textile plant?</h3></summary><p>Two-bed demineralisation with AGRION C-100 H and A-400 protects high-pressure boilers and heat-setting equipment from scale and carry-over.</p></details>
      <details><summary><h3>Can ion exchange help with dyehouse effluent colour?</h3></summary><p>Macroporous and weak base anion resins such as AGRION A-600 MP and A-650 MP help strip residual colour and organics as part of an effluent treatment or recovery train.</p></details>
      <details><summary><h3>Do you supply enough volume for a full mill?</h3></summary><p>Yes — from 25 litres to bulk with no upper limit, suitable for a trial charge through to full vessel changes.</p></details>
      <details><summary><h3>Can you match the softener resin our mill currently runs?</h3></summary><p>In most cases yes. Match on ionic form, capacity and bead size and an AGRION grade drops into your softener. Send your current grade or datasheet and we’ll confirm the equivalent.</p></details>
      
    </div>
  </div></section>

  <section style={{paddingTop: '0'}}><div className="wrap">
    <p className="eyebrow">More sectors</p>
    <h2>Other industries we supply</h2>
    <div className="ind-grid">
      <Link to="/industries/power-thermal-industries"><b>Power / Thermal Plants</b><span>Boiler feed, DM & condensate polishing</span></Link>
      <Link to="/industries/suger-refinery-industries"><b>Sugar Processing</b><span>Decolourisation & process water</span></Link>
      <Link to="/industries/chemicalindustries"><b>Chemical & Intermediates</b><span>Process, DM & effluent</span></Link>
      <Link to="/industries/paper-pulp-industries"><b>Paper & Pulp</b><span>Process & boiler water</span></Link>
      <Link to="/industries"><b>All industries →</b><span>Browse every sector</span></Link>
    </div>
  </div></section>

  <section className="band" style={{padding: '0'}}><div className="wrap">
    <h2>Get consistent soft water for your dyehouse.</h2>
    <p>Share your water hardness and process and we’ll recommend the grades and attach their TDS.</p>
    <div className="acts"><Link className="btn btn-green" to="/contact">Send an enquiry</Link><a className="btn btn-wa" href="https://wa.me/919898701010">WhatsApp us</a></div>
  </div></section>

  


      </main>
    </div>
  );
}
