import { Link } from "react-router";
import cationCardImage from "../../assets/images/cation exchange resin.jpg";
import dmPlantCardImage from "../../assets/images/Dm plant application.jpg";
import waterSofteningCardImage from "../../assets/images/water softning.jpg";
import resinSpecsCardImage from "../../assets/images/cation anion resion.jpg";
export default function Blog() {
  return (
    <>
      
<style>{`
@import url('https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0');

:root{
  --navy:#0A2C4B;--deep:#06182B;--blue:#1868A8;--gold:#B27B34;
  --gold2:#E5A855;--ice:#F6F9FC;--surface:#f7fafd;--line:rgba(10,44,75,.10);
  --muted:#5d6875;--wrap:1440px;
}
*{box-sizing:border-box}
html{scroll-behavior:smooth}
body{margin:0;font-family:Inter,sans-serif;color:#181c1e;background:var(--surface)}
a{text-decoration:none;color:inherit}
img{max-width:100%;display:block}
.wrap{max-width:var(--wrap);margin:auto;padding-left:80px;padding-right:80px}
.eyebrow{font-size:11px;line-height:1;letter-spacing:.30em;text-transform:uppercase;font-weight:600;color:var(--gold)}
h1,h2,h3{font-family:"EB Garamond",serif}
h1{font-size:72px;line-height:1.1;letter-spacing:-.02em;margin:0}
h2{font-size:48px;line-height:1.2;font-weight:500;margin:0;color:var(--deep)}
h3{font-size:28px;line-height:1.25;margin:0;color:var(--deep)}
p{font-size:15px;line-height:1.75}
.skip{position:absolute;left:-9999px}.skip:focus{left:12px;top:12px;background:var(--deep);color:white;padding:10px 16px;z-index:100}

/* NOTE: header / nav / footer chrome styles were removed here. This page is
   rendered inside the shared site layout, so element-level rules for header,
   nav and footer would leak onto the global Header and Footer. */
.btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;padding:14px 24px;border:0;border-radius:0;font-size:11px;font-weight:600;letter-spacing:.16em;text-transform:uppercase;transition:.25s}
.btn-green{background:var(--navy);color:#fff}.btn-green:hover{background:var(--gold)}
.btn-wa{background:var(--blue);color:#fff}.btn-wa:hover{background:var(--gold)}
.btn-white{background:#fff;color:var(--deep)}.btn-ghost{background:#eef2f6;color:var(--deep)}
.burger{display:none}

/* Hero in the supplied KnowledgeHub design language */
.ihero{position:relative;background:#fff;overflow:hidden;border-bottom:1px solid var(--line)}
.ihero:before{content:"";position:absolute;inset:0;background-image:radial-gradient(rgba(10,44,75,.16) 1px,transparent 1px);background-size:24px 24px;opacity:.38}
.ihero .wrap{position:relative;padding-top:64px;padding-bottom:90px;text-align:left}
.ihero .crumb{color:#73777e;font-size:13px;margin:0 0 28px}
.ihero .crumb a{color:var(--deep)}
.ihero .eyebrow{display:inline-block;background:#f1f4f7;padding:9px 12px}
.ihero h1{max-width:900px;color:var(--deep);margin-top:24px}
.ihero h1:after{content:"";display:block;width:90px;height:4px;background:var(--gold);margin-top:24px}
.ihero .sub{max-width:800px;color:#43474e;font-size:18px;margin-top:26px}
.ihero .brand{color:#73777e}
.ihero .cta{display:flex;gap:14px;flex-wrap:wrap;margin-top:30px}
.ihero .badges{display:flex;gap:8px;flex-wrap:wrap;margin-top:30px}
.ihero .badges span{font-size:10px;letter-spacing:.12em;text-transform:uppercase;background:#f1f4f7;color:var(--navy);padding:10px 13px}

/* Intro */
section{padding:88px 0}
.intro{display:grid;grid-template-columns:7fr 5fr;gap:48px;align-items:stretch}
.intro>div{background:#fff;padding:44px;box-shadow:0 6px 25px rgba(10,44,75,.06)}
.intro>div:before{content:"";display:block;width:52px;height:4px;background:var(--gold);margin-bottom:24px}
.intro h2{margin-top:12px}
.intro p{color:#43474e}
.ctx{background:var(--navy);color:#fff;padding:42px;position:relative}
.ctx:before{content:"";position:absolute;left:0;right:0;top:0;height:5px;background:var(--gold)}
.ctx h4{font-size:11px;letter-spacing:.25em;text-transform:uppercase;color:var(--gold);margin:0 0 22px}
.ctx ul{list-style:none;padding:0;margin:0}
.ctx li{padding:16px 0;border-bottom:1px solid rgba(255,255,255,.10)}
.ctx li b{display:block;font-family:"EB Garamond",serif;font-size:21px}
.ctx li span{font-size:13px;color:#c9d5df}
.ctx .btn{width:100%;margin-top:22px;background:var(--gold)}

/* Guides */
.flow{background:var(--ice);border-top:1px solid var(--line);border-bottom:1px solid var(--line)}
.sec-head{max-width:760px;margin-bottom:42px}
.sec-head h2{margin-top:12px}
.lead{font-size:18px;color:#5d6875}
.isec-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
.isec{position:relative;background:#fff;padding:30px;min-height:265px;display:flex;flex-direction:column;box-shadow:0 4px 18px rgba(10,44,75,.06);transition:.3s}
.isec:before{content:"";position:absolute;top:0;left:0;right:0;height:4px;background:var(--blue);transition:.3s}
.isec:hover{transform:translateY(-5px);box-shadow:0 18px 35px rgba(10,44,75,.12)}
.isec:hover:before{background:var(--gold)}
.isec .k{font-size:9px;letter-spacing:.16em;text-transform:uppercase;color:var(--blue);font-weight:700;background:#f1f4f7;align-self:flex-start;padding:7px 9px;margin-bottom:20px}
.isec b{font-family:"EB Garamond",serif;color:var(--deep);font-size:25px;line-height:1.2;margin-bottom:15px}
.isec .d{color:#5d6875;font-size:14px;line-height:1.65;flex:1}
.isec .go{margin-top:24px;color:var(--gold);font-size:11px;font-weight:700;letter-spacing:.15em;text-transform:uppercase}
.isec.image-card{min-height:360px;justify-content:flex-end;background-size:cover;background-position:center;border:0;color:#fff;box-shadow:0 22px 48px -24px rgba(6,24,43,.55);clip-path:polygon(0 0,92% 0,100% 8%,100% 100%,0 100%)}
.isec.image-card:before{display:none}.isec.image-card .k{color:var(--gold-light);background:rgba(6,24,43,.72)}.isec.image-card b{color:#fff;text-shadow:0 2px 16px rgba(0,0,0,.5)}.isec.image-card .d{color:rgba(255,255,255,.88);flex:0}.isec.image-card .go{color:var(--gold-light)}

/* CTA */
.band{background:var(--navy);color:#fff;padding:0}
.band .wrap{padding-top:70px;padding-bottom:70px;text-align:center}
.band h2{color:#fff;max-width:850px;margin:auto}
.band p{color:#c9d5df;font-size:18px;max-width:720px;margin:18px auto 28px}
.acts{display:flex;justify-content:center;gap:14px;flex-wrap:wrap}
.band .btn-green{background:var(--gold)}

/* Customers - same content/images, new visual treatment */
.clients{background:#fff;text-align:center}
.clients h2{margin-top:10px}
.marquee{overflow:hidden;margin-top:42px}
.track{display:flex;width:max-content;animation:cscroll 55s linear infinite}
.marquee:hover .track{animation-play-state:paused}
.chip{flex:0 0 auto;width:190px;height:108px;margin-right:18px;background:var(--ice);border:1px solid var(--line);display:flex;align-items:center;justify-content:center;padding:18px;transition:.25s}
.chip:hover{background:#fff;box-shadow:0 12px 25px rgba(10,44,75,.10)}
.chip img{max-height:68px;width:auto;object-fit:contain}
@keyframes cscroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}

/* NOTE: element-level footer rules removed — the shared site Footer owns them. */

@media(max-width:1100px){
  .wrap{padding-left:40px;padding-right:40px}
  .isec-grid{grid-template-columns:1fr 1fr}
}
@media(max-width:800px){
  .intro{grid-template-columns:1fr}
  h1{font-size:52px}h2{font-size:38px}
}
@media(max-width:620px){
  .wrap{padding-left:24px;padding-right:24px}
  h1{font-size:46px}.ihero .sub{font-size:16px}
  h2{font-size:34px}
  section{padding:64px 0}
  .intro>div,.ctx{padding:28px}
  .isec-grid{grid-template-columns:1fr}
}
@media(prefers-reduced-motion:reduce){*{transition:none!important;scroll-behavior:auto}.track{animation:none}}
`}</style>

      
<a className="skip" href="#main">Skip to content</a>
<main id="main">
<div className="ihero"><div className="wrap">
<p className="crumb"><Link to="/">Home</Link> › Blog › Knowledge Hub</p>
<p className="eyebrow">Blog — Knowledge Hub</p>
<h1>Ion exchange resin knowledge hub</h1>
<p className="sub">Practical, engineer-first guides on selecting, running and troubleshooting ion exchange resins — from DM plant selection to regeneration best practice.</p>
<div className="cta"><Link className="btn btn-green" to="/contact">Ask our technical team</Link><a className="btn btn-wa" href="#articles">Browse guides</a></div>
<div className="badges"><span>Selection guides</span><span>Technical explainers</span><span>Troubleshooting</span><span>Maintenance</span></div>
</div></div>
<section><div className="wrap intro">
<div>
<p className="eyebrow">Why we write these</p>
<h2>Useful enough that a plant engineer would share it</h2>
<p>Buyers in this industry are engineers and purchase managers who respect technical knowledge. These guides are written to genuinely help — how to select a grade, read a TDS, diagnose a failing softener or plan a resin change — not to sell — and they link to the exact AGRION grades where relevant.</p>
<p>Have a question a guide doesn’t answer? Our technical team is one message away.</p>
</div>
<aside className="ctx">
<h4>Prefer to just ask?</h4>
<ul>
<li><b>Tell us your problem</b><span>We’ll point you to the grade</span></li>
<li><b>Request a TDS</b><span>For any AGRION grade</span></li>
<li><b>Any volume</b><span>25 L to bulk, no upper limit</span></li>
</ul>
<Link className="btn btn-green" to="/contact">Ask our technical team</Link>
</aside>
</div></section>
<section className="flow" id="articles"><div className="wrap">
<div className="sec-head">
<p className="eyebrow">Guides</p>
<h2>Ion exchange resin guides</h2>
<p className="lead">Practical guides for engineers and purchase managers.</p>
</div>
<div className="isec-grid">
<Link className="isec image-card" style={{ backgroundImage: `linear-gradient(180deg, rgba(6,24,43,.08) 18%, rgba(6,24,43,.58) 60%, rgba(6,24,43,.96) 100%), url("${cationCardImage}")` }} to="/blog/how-to-select-cation-resin-dm-plant">
<span className="k">Selection guide</span>
<b>How to Select the Right Cation Resin for Your DM Plant</b>
<span className="d">Match capacity, form and bead size to your DM duty — and pick the AGRION cation grade that fits.</span>
<span className="go">Read guide →</span>
</Link>
<Link className="isec image-card" style={{ backgroundImage: `linear-gradient(180deg, rgba(6,24,43,.08) 18%, rgba(6,24,43,.58) 60%, rgba(6,24,43,.96) 100%), url("${dmPlantCardImage}")` }} to="/blog/dm-plant-resin-replacement-guide">
<span className="k">Maintenance</span>
<b>DM Plant Resin Replacement: When and How to Change Resin</b>
<span className="d">The signs your DM resin is due for a change, and how to plan a clean replacement.</span>
<span className="go">Read guide →</span>
</Link>
<Link className="isec image-card" style={{ backgroundImage: `linear-gradient(180deg, rgba(6,24,43,.08) 18%, rgba(6,24,43,.58) 60%, rgba(6,24,43,.96) 100%), url("${waterSofteningCardImage}")` }} to="/blog/water-softener-not-removing-hardness">
<span className="k">Troubleshooting</span>
<b>Why Your Water Softener Stopped Removing Hardness</b>
<span className="d">Fouling, degradation or exhaustion — how to diagnose a softener that no longer softens.</span>
<span className="go">Read guide →</span>
</Link>
<Link className="isec image-card" style={{ backgroundImage: `linear-gradient(180deg, rgba(6,24,43,.08) 18%, rgba(6,24,43,.58) 60%, rgba(6,24,43,.96) 100%), url("${resinSpecsCardImage}")` }} to="/blog/resin-specifications-explained">
<span className="k">Technical</span>
<b>Total Exchange Capacity, Bead Size &amp; Sieve Analysis Explained</b>
<span className="d">The three specifications every engineer checks first — what they mean and why they matter.</span>
<span className="go">Read guide →</span>
</Link>
</div>
</div></section>
<section className="band"><div className="wrap">
<h2>Can’t find the answer? Ask our technical team.</h2>
<p>Tell us your water problem or the grade you’re comparing and we’ll help — and attach the TDS.</p>
<div className="acts"><Link className="btn btn-green" to="/contact">Send an enquiry</Link><a className="btn btn-wa" href="https://wa.me/919898701010">WhatsApp us</a></div>
</div></section>

</main>



    </>
  );
}
