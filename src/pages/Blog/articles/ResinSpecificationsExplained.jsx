import React from "react";
import { Link } from "react-router";
import bead1 from "../../../assets/images/cation anion resion.jpg";
import bead2 from "../../../assets/images/mixed-bed-resins.jpg";

export default function ResinSpecificationsExplained() {
  return (
    <>
      <style>{`
@import url("https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap");
:root{--navy:#0A2C4B;--deep:#06182B;--blue:#1868A8;--gold:#B27B34;--gold2:#E5A855;--ice:#F6F9FC;--surface:#f7fafd;--line:#e0e3e6;--text:#181c1e;--muted:#43474e}
*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;font-family:"Inter",sans-serif;color:var(--text);background:var(--surface);line-height:1.6}img{max-width:100%;display:block}a{text-decoration:none;color:var(--blue)}.wrap{max-width:1440px;margin:auto;padding:0 80px}
.eyebrow{font-size:11px;line-height:1;letter-spacing:.3em;font-weight:600;text-transform:uppercase;color:var(--gold)}
h1,h2{font-family:"EB Garamond",serif;color:var(--navy)}h1{font-size:72px;line-height:1.1;letter-spacing:-.02em}h2{font-size:48px;line-height:1.2;font-weight:500}h3{color:var(--navy)}
.btn{display:inline-flex;align-items:center;justify-content:center;padding:12px 20px;font-size:11px;line-height:1;letter-spacing:.22em;font-weight:600;text-transform:uppercase;border:1px solid var(--navy);border-radius:0}
.btn-green{background:var(--gold);color:#fff;border-color:var(--gold)}.btn-wa,.btn-ghost{background:transparent;color:var(--navy);border-color:var(--navy)}.btn-white{background:#fff;color:var(--navy)}
.skip{position:absolute;left:-9999px}.skip:focus{left:12px;top:12px;z-index:100;background:var(--deep);color:#fff;padding:10px}
.ihero{position:relative;background:#fff;color:var(--text);border-bottom:1px solid var(--line);overflow:hidden}.ihero:before{content:"";position:absolute;inset:0;background-image:linear-gradient(rgba(10,44,75,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(10,44,75,.04) 1px,transparent 1px);background-size:32px 32px}.ihero .wrap{position:relative;padding-top:72px;padding-bottom:78px;text-align:left}.ihero .crumb{font-size:9px;letter-spacing:.12em;text-transform:uppercase;color:#73777e}.ihero .crumb a{color:#73777e}.ihero h1{max-width:1000px;margin:18px 0 0}.ihero .sub{max-width:850px;font-size:18px;color:var(--muted);margin-top:22px}.ihero .brand{color:var(--muted)}.ihero .cta{display:flex;gap:12px;flex-wrap:wrap;margin-top:30px}.ihero .btn-wa{color:var(--navy)}
.ribbon{max-width:1440px;margin:auto;padding:0 80px}.ribbon .in{display:grid;grid-template-columns:repeat(4,1fr);background:#fff;border:1px solid var(--line)}.ribbon .st{padding:20px;text-align:center;border-right:1px solid var(--line)}.ribbon .st:last-child{border:0}.ribbon .st b{display:block;color:var(--navy)}
.applayout{max-width:1440px;margin:auto;padding:64px 80px;display:grid;grid-template-columns:minmax(0,1fr) 320px;gap:48px}.apcontent{min-width:0}.prose{font-size:14px}.prose p{color:var(--muted);margin:0 0 18px}.prose h2{font-size:38px;margin:56px 0 16px;scroll-margin-top:120px}.prose h3{font-size:18px}.prose ul,.prose ol{padding-left:0;list-style:none;margin:10px 0 22px}.prose li{position:relative;padding:10px 0 10px 28px;color:var(--muted);border-bottom:1px solid #eef1f4}.prose ul li:before{content:"";position:absolute;left:4px;top:18px;width:7px;height:7px;background:var(--gold)}.prose ol{counter-reset:n}.prose ol li{counter-increment:n;padding-left:42px}.prose ol li:before{content:counter(n);position:absolute;left:0;top:7px;width:28px;height:28px;display:grid;place-items:center;background:var(--navy);color:#fff;font-size:11px;font-weight:700}
.byline{display:flex;gap:14px;flex-wrap:wrap;padding-bottom:20px;border-bottom:1px solid var(--line);font-size:11px!important;text-transform:uppercase;letter-spacing:.08em}.toc,.callout,.imgph,.spectbl,.faq details,.rail .box,.opt,.oprow,.card2,.ctx{background:#fff;border:1px solid var(--line);box-shadow:0 1px 4px rgba(10,44,75,.04)}.toc{padding:24px;margin:28px 0}.toc h4,.rail h4{font-size:11px;letter-spacing:.22em;text-transform:uppercase;color:var(--navy);margin:0 0 14px}.toc ol{columns:2}.toc li{border:0;padding:5px 0;font-size:13px}.toc li:before{display:none}
.callout{border-left:4px solid var(--gold);padding:20px 22px;margin:24px 0}.callout b{color:var(--navy)}.imgph{padding:28px;margin:30px 0;display:flex;gap:22px;align-items:center;background:var(--ice)}.imgph .ic{width:58px;height:58px;flex:none;display:grid;place-items:center;background:var(--navy);color:#fff}.imgph .tag{font-size:9px;letter-spacing:.15em;text-transform:uppercase;color:var(--gold);font-weight:700}.imgph h4{margin:7px 0;color:var(--navy)}.imgph p{margin:5px 0}.imgph .prompt{background:#fff;border:1px solid var(--line);padding:10px 12px;font-size:12px}
.spectbl{overflow-x:auto;margin:22px 0}.spectbl table{width:100%;border-collapse:collapse}.spectbl th{background:var(--navy);color:#fff;text-align:left;padding:13px 16px;font-size:11px;text-transform:uppercase;letter-spacing:.1em}.spectbl td{padding:13px 16px;border-bottom:1px solid var(--line)}
.artcta{background:var(--deep);padding:28px;margin:32px 0;color:#fff}.artcta h3{color:#fff}.artcta p{color:#d7e0ea}.artcta .btn-wa{color:#fff;border-color:rgba(255,255,255,.5)}.faq details{padding:18px 20px;margin-top:12px}.faq summary{cursor:pointer}.faq summary h3{display:inline}.faq p{margin-top:12px}
.rail{position:sticky;top:30px;align-self:start}.rail .box{padding:22px;margin-bottom:18px}.rail ul{list-style:none;padding:0;margin:0}.rail li{padding:9px 0;border-bottom:1px solid #eef1f4;font-size:13px}.rail .enq{background:var(--deep);color:#fff;border-color:var(--deep)}.rail .enq h4{color:var(--gold2)}.rail .enq p{color:#d7e0ea}.rail .enq .btn{width:100%;margin-top:8px}.rail .enq .btn-wa{color:#fff;border-color:rgba(255,255,255,.45)}
.band{background:var(--deep);color:#fff}.band .wrap{padding-top:54px;padding-bottom:54px;text-align:center}.band h2{color:#fff;margin:0 auto;max-width:760px}.band p{color:#d7e0ea;max-width:700px;margin:14px auto 24px}.acts{display:flex;justify-content:center;gap:12px;flex-wrap:wrap}.band .btn-wa{color:#fff;border-color:rgba(255,255,255,.5)}
.clients{padding:58px 0;background:#fff;border-top:1px solid var(--line);text-align:center}.clients h2{margin:8px 0 0}.marquee{overflow:hidden;margin-top:28px}.track{display:flex;width:max-content;animation:cscroll 55s linear infinite}.chip{width:184px;height:108px;margin-right:18px;background:#fff;border:1px solid var(--line);display:flex;align-items:center;justify-content:center;padding:16px 20px}.chip img{max-height:66px;width:auto;object-fit:contain}@keyframes cscroll{to{transform:translateX(-50%)}}
.sticky{display:none}
@media(max-width:1100px){.wrap,.applayout,.ribbon{padding-left:40px;padding-right:40px}.applayout{grid-template-columns:1fr}.rail{position:static}}
@media(max-width:760px){.ribbon .in{grid-template-columns:1fr 1fr}}
@media(max-width:640px){.wrap,.applayout,.ribbon{padding-left:24px;padding-right:24px}.ihero .wrap{padding-top:48px;padding-bottom:52px}h1{font-size:48px}.prose h2,h2{font-size:32px}.toc ol{columns:1}.imgph{flex-direction:column;align-items:flex-start}.sticky{display:flex;position:fixed;bottom:0;left:0;right:0;z-index:70;background:#fff;border-top:1px solid var(--line);padding:10px;gap:8px}.sticky .btn{flex:1;padding:11px 6px}}
`}</style>
      
<a className="skip" href="#main">Skip to content</a>

<main id="main">
<div className="ihero"><div className="wrap">
<p className="crumb"><Link to="/">Home</Link> › <Link to="/resources">Resources</Link> › Knowledge Hub</p>
<p className="eyebrow">Technical explainer</p>
<h1>Total exchange capacity, bead size &amp; sieve analysis explained</h1>
<p className="sub">The three ion exchange resin specifications every engineer checks first — what they mean, why they matter, and how to use them to compare grades with confidence.</p>
<div className="cta"><Link className="btn btn-green" to="/contact">Ask our technical team</Link><Link className="btn btn-wa" to="/products">See our resins</Link></div>
</div></div>
<div className="applayout">
<div className="apcontent prose">
<p className="byline"><span>📅 Updated 2026</span><span>⏱ 9 min read</span><span>🏭 Toyota Chemical Industries</span></p>
<p>Open any technical data sheet and you are met with a page of numbers. But when an experienced engineer compares two grades, they look first at just three of the <b>ion exchange resin specifications</b>: total exchange capacity, bead (particle) size, and sieve analysis. Get those three right and the resin will fit the duty; misread them and you fight leakage, pressure drop and short runs for the life of the charge. This guide explains what each of these ion exchange resin specifications means, why it matters, and how to use them to compare grades and confirm equivalents — without needing a chemistry degree.</p>
<p>Once the three big numbers make sense, reading a full datasheet becomes easy — our companion guide on <Link to="/blog/how-to-read-resin-tds">how to read an ion exchange resin TDS</Link> walks through the rest of the sheet line by line.</p>
<div className="toc">
<h4>On this page</h4>
<ol>
<li><a href="#three">The three that matter most</a></li>
<li><a href="#tec">Total exchange capacity</a></li>
<li><a href="#bead">Bead / particle size</a></li>
<li><a href="#sieve">Sieve analysis &amp; UC</a></li>
<li><a href="#more">Other specs</a></li>
<li><a href="#bytype">Specs by resin type</a></li>
<li><a href="#compare">Comparing two grades</a></li>
<li><a href="#worked">Worked comparison</a></li>
<li><a href="#cost">Specs, cost &amp; reliability</a></li>
<li><a href="#equiv">Matching an equivalent</a></li>
<li><a href="#mistakes">Common mistakes</a></li>
<li><a href="#faq">FAQ</a></li>
</ol>
</div>
{/* <div className="imgph">
<div className="ic">📷</div>
<div className="meta">
<span className="tag">Image to add</span>
<h4>A resin TDS with the key specs highlighted</h4>
<p>A visual near the top of the article.</p>
<p className="prompt"><b>Prompt:</b> A clean flat-lay of a resin technical data sheet with total exchange capacity, particle size and sieve analysis highlighted, next to a dish of resin beads; navy/green brand palette, technical, landscape 16:9. Alt: "ion exchange resin specifications on a technical data sheet".</p>
</div>
</div> */}
<div className="imgph">
  <img
    src={bead1}
    alt="ion exchange resin beads for specification comparison"
    loading="lazy"
  />
</div>
<h2 id="three">The three ion exchange resin specifications that matter most</h2>
<p>A datasheet lists a dozen figures, but three carry most of the decision. Think of them as answering three questions:</p>
<ul>
<li><b>Total exchange capacity</b> — <i>how much work can this resin do?</i></li>
<li><b>Bead / particle size</b> — <i>how will it behave hydraulically in my vessel?</i></li>
<li><b>Sieve analysis &amp; uniformity</b> — <i>how consistent is that behaviour across the bed?</i></li>
</ul>
<p>Every other figure — moisture, bulk density, crosslinking, operating limits — supports or qualifies these three. Master them and you can read any set of ion exchange resin specifications quickly.</p>
<p>A useful way to hold it in mind: capacity is the resin’s <i>strength</i>, bead size is its <i>fitness</i> for your vessel, and sieve analysis is its <i>consistency</i>. A resin needs all three to perform — a strong resin that does not fit your hydraulics, or fits but is inconsistent, will disappoint. That is why an experienced engineer never reads one of these numbers in isolation.</p>
<h2 id="tec">Total exchange capacity: the key ion exchange resin specification</h2>
<p>Total exchange capacity is the amount of ions a resin can exchange per unit volume (or weight), usually expressed in equivalents per litre (eq/l) or milli-equivalents per millilitre (meq/ml). In plain terms, it is how much hardness, or how many dissolved ions, the resin can remove before it is full and has to be regenerated.</p>
<p>It is the single most important of the ion exchange resin specifications for sizing, because it sets your run length and vessel volume. A higher-capacity resin removes more per litre, so you either run longer between regenerations or use a smaller bed for the same duty.</p>
<div className="callout"><b>Watch the distinction:</b> <b>total</b> exchange capacity is the resin’s theoretical maximum; <b>operating</b> (or useful) capacity is what you actually get at your chosen regeneration level, and it is always lower. Size on operating capacity, not the headline total, or you will under-size the bed.</div>
<p>Capacity also depends on form and conditions. Values are quoted for a specific ionic form; comparing a figure in one form with a figure in another is a classic error. When you compare grades, compare capacities in the same form and units.</p>
<p>A quick note on units, since it trips people up: capacity may be given by volume (eq/l or meq/ml) or by dry weight (eq/kg). Volume-basis figures are what you use for sizing a vessel, because you buy and load resin by volume. If a datasheet quotes weight-basis capacity, convert using the bulk density before you compare it with a volume-basis figure — otherwise you are comparing two different things.</p>
<h2 id="bead">Bead &amp; particle size in ion exchange resin specifications</h2>
<p>Bead size — the diameter of the resin particles, typically 0.3–1.2 mm for standard grades — governs how the resin behaves hydraulically. It is a balance:</p>
<ul>
<li><b>Too fine</b> and pressure drop across the bed rises, backwash carries fines away, and you lose resin and flow.</li>
<li><b>Too coarse</b> and exchange kinetics slow down — the ions have further to travel into each bead — which raises leakage and can shorten the effective run.</li>
</ul>
<p>The right bead size gives low, stable pressure drop and fast kinetics together. Two figures capture it on the datasheet: the <b>particle size range</b> (the span of diameters) and the <b>effective size</b> (the size below which 10% of the beads fall — a single number that characterises the fine end, which matters most for pressure drop). When you match a replacement resin, matching effective size keeps your pressure drop and distribution the same.</p>
<p>Bead size also interacts with your vessel internals. Distributors, laterals and screens are sized for a particular bead range; a resin much finer than the original can pass through screens as fines, while a much coarser one can change the flow pattern. This is another reason a like-for-like replacement matches on bead and effective size, not just capacity.</p>
<h2 id="sieve">Sieve analysis &amp; uniformity coefficient explained</h2>
<p>Sieve analysis (or wet screen analysis) is the measured distribution of bead sizes — the percentage of beads retained on each of a series of standard screens. It is the raw data behind the bead-size figures, and it tells you how tightly graded the resin is.</p>
<p>From the sieve analysis comes the <b>uniformity coefficient (UC)</b>: the ratio of the 60%-passing size to the 10%-passing size. A UC close to 1.0 means a very uniform bead (all similar size); a higher UC means a wider spread. Why care?</p>
<ul>
<li><b>Uniform beads</b> give more even flow, lower pressure drop, cleaner backwash classification and more predictable performance.</li>
<li><b>A wide spread</b> mixes fines (high pressure drop) with coarse beads (slow kinetics) — the worst of both.</li>
</ul>
<p>So of all the ion exchange resin specifications, sieve analysis and UC are what tell you whether the bead-size figure is a tight, dependable number or a broad average. For demanding duties, a tighter uniformity coefficient is worth paying for.</p>
<p>The sieve analysis is also your quality check on a delivered batch. Comparing the sieve data on the certificate of analysis for the resin you receive against the datasheet you ordered from confirms you were sent what you specified — a simple, powerful check that many buyers skip.</p>
{/* <div className="imgph">
<div className="ic">📷</div>
<div className="meta">
<span className="tag">Image to add</span>
<h4>Sieve analysis / uniformity coefficient illustration</h4>
<p>A visual to break up the second half of the article.</p>
<p className="prompt"><b>Prompt:</b> A clean labelled illustration of a sieve stack with resin retained on each screen, and a simple bar showing uniform vs wide bead distribution; navy/green brand palette, technical, landscape 16:9. Alt: "sieve analysis and uniformity coefficient of ion exchange resin".</p>
</div>
</div> */}
<div className="imgph">
  <img
    src={bead2}
    alt="ion exchange resin beads for specification comparison"
    loading="lazy"
  />
</div>
<h2 id="more">Other ion exchange resin specifications on the datasheet</h2>
<p>Once the big three are clear, the rest of the ion exchange resin specifications qualify them:</p>
<div className="spectbl"><table><thead><tr><th>Specification</th><th>What it tells you</th></tr></thead><tbody>
<tr><td><b>Moisture / water retention</b></td><td>How much water the beads hold; affects capacity per litre and swelling between forms.</td></tr>
<tr><td><b>Bulk density</b></td><td>Weight per litre of resin — useful for converting between volume and weight, and for shipping.</td></tr>
<tr><td><b>Ionic form (as supplied)</b></td><td>The form the resin ships in (e.g. sodium, chloride, hydrogen) — you convert to the working form on site.</td></tr>
<tr><td><b>Volume change on conversion</b></td><td>How much the beads swell or shrink between forms — important for freeboard and vessel design.</td></tr>
<tr><td><b>Operating limits</b></td><td>Maximum temperature and pH the grade tolerates — sets the safe operating envelope.</td></tr>
</tbody></table></div>
<p>None of these overrides the big three; they refine the picture. The full walkthrough is in <Link to="/blog/how-to-read-resin-tds">how to read a resin TDS</Link>.</p>
<h2 id="bytype">Which resin specifications matter most across the Toyota Chemical Industries range</h2>
<p>The three key ion exchange resin specifications matter for every grade, but the emphasis shifts with the duty:</p>
<ul>
<li><b>Softening &amp; DM cation.</b> Capacity drives run length and vessel size; effective size and uniformity keep pressure drop and sodium leakage in check. Ionic form (sodium for softening, hydrogen for DM) must be right.</li>
<li><b>Strong base anion.</b> Capacity matters, but so does the functional type (Type 1 vs Type 2) that governs silica removal — a specification beyond the big three. Organic-fouling resistance often decides the grade too.</li>
<li><b>Mixed bed.</b> The cation-to-anion ratio and the working forms are as important as the individual capacities, because polishing performance depends on the blend.</li>
<li><b>Macroporous &amp; specialty.</b> Porosity and fouling resistance move up the priority list; capacity alone does not tell the story for heavy-metal or organic-laden duty — see <Link to="/blog/macroporous-vs-gel-resins">macroporous vs gel resins</Link>.</li>
</ul>
<p>In other words, always start with capacity, bead size and sieve analysis — then add the one or two duty-specific specifications that matter for your resin. Reading the sheet in that order keeps the comparison honest.</p>
<h2 id="compare">How to compare two grades using their specifications</h2>
<p>To compare two resins fairly using their ion exchange resin specifications, line them up on a like-for-like basis:</p>
<ol>
<li><b>Same ionic form.</b> Compare capacities and sizes in the same form, or the comparison is meaningless.</li>
<li><b>Same units.</b> Convert eq/l and meq/ml, or volume and weight, so you are comparing like with like.</li>
<li><b>Capacity for run length.</b> Higher operating capacity means longer runs or a smaller bed.</li>
<li><b>Effective size and UC for hydraulics.</b> Similar effective size and a tighter UC mean predictable pressure drop and flow.</li>
<li><b>Operating limits for your conditions.</b> Make sure both grades tolerate your temperature and chemistry.</li>
</ol>
<p>Do that and the better grade for your duty is usually obvious from the datasheet alone — before you order a single litre.</p>
<h2 id="worked">Ion exchange resin specifications: a worked comparison</h2>
<p>Specifications make more sense with numbers on the table. Imagine you are comparing two strong acid cation grades for a softener, both in the sodium form:</p>
<div className="spectbl"><table><thead><tr><th>Specification</th><th>Grade A</th><th>Grade B</th></tr></thead><tbody>
<tr><td>Total exchange capacity</td><td>1.9 eq/l</td><td>2.0 eq/l</td></tr>
<tr><td>Particle size range</td><td>0.3–1.2 mm</td><td>0.3–1.2 mm</td></tr>
<tr><td>Effective size</td><td>0.55 mm</td><td>0.50 mm</td></tr>
<tr><td>Uniformity coefficient</td><td>1.6</td><td>1.4</td></tr>
</tbody></table></div>
<p>On paper Grade B is the stronger choice: it has slightly higher capacity (longer runs or a smaller bed) and a tighter uniformity coefficient (more even flow, lower pressure drop, cleaner backwash). Grade A is not "bad" — but for a demanding, high-cycling softener the extra uniformity of Grade B usually pays back in steadier performance and longer life. This is exactly the kind of read the three key ion exchange resin specifications let you make from a datasheet, before any resin is bought.</p>
<p>Notice what did <i>not</i> decide it: brand, colour or marketing language. The numbers, in the same form and units, told the whole story.</p>
<h2 id="cost">How resin specifications affect running cost &amp; reliability</h2>
<p>These are not abstract figures — each of the key ion exchange resin specifications shows up in your running cost and reliability:</p>
<ul>
<li><b>Capacity</b> sets how often you regenerate, and therefore your acid, caustic or salt bill and your downtime for regeneration.</li>
<li><b>Bead size and uniformity</b> set your pressure drop — and therefore pumping energy — and how cleanly the bed backwashes and classifies.</li>
<li><b>Operating limits</b> decide whether the resin survives your temperature and chemistry, or degrades early and forces a premature change.</li>
</ul>
<p>A grade that looks marginally cheaper per litre but has lower operating capacity, a wide uniformity coefficient or a tight temperature limit can cost more over a cycle in chemicals, energy and early replacement. Reading the specifications properly is, in the end, a cost decision as much as a technical one.</p>
<h2 id="equiv">Using specifications to match a Toyota Chemical Industries equivalent</h2>
<p>The most practical use of ion exchange resin specifications is confirming a like-for-like replacement. New buyers in this industry often ask whether a grade is equivalent to the one they run today — and the answer is found in three numbers, not in a brand name. Match on:</p>
<ul>
<li><b>Ionic form</b> — the same working form.</li>
<li><b>Total (and operating) exchange capacity</b> — equal or higher.</li>
<li><b>Effective / bead size</b> — comparable, for the same hydraulics.</li>
</ul>
<p>Share the technical data sheet of the resin you run today and our team will confirm the equivalent AGRION grade on these specifications — a faster, more reliable match than comparing brand names. See the ranges on the <Link to="/products/cationexchangeresins">cation</Link>, <Link to="/products/anionexchangeresins">anion</Link> and <Link to="/products/mixedbedexchangeresin">mixed bed</Link> product pages.</p>
<p>This is worth stressing for anyone new to switching supplier: you do not have to take a leap of faith on a brand. Equivalence lives in the ion exchange resin specifications, and a match on form, capacity and bead size is a match in the vessel. That is how a confident, low-risk changeover is done — on the numbers.</p>
<h2 id="mistakes">Common mistakes reading ion exchange resin specifications</h2>
<ul>
<li><b>Confusing total with operating capacity.</b> Sizing on the headline total under-sizes the bed; use operating capacity.</li>
<li><b>Comparing across forms or units.</b> A figure in one ionic form or unit is not directly comparable with another.</li>
<li><b>Ignoring the uniformity coefficient.</b> Two resins with the same nominal size can behave very differently if one is uniform and one is not.</li>
<li><b>Overlooking operating limits.</b> A high-capacity grade is no bargain if it cannot take your temperature.</li>
<li><b>Reading a spec in isolation.</b> The three big numbers work together; a great capacity with a poor bead distribution is not a great resin.</li>
</ul>
<div className="artcta">
<h3>Comparing grades or checking an equivalent?</h3>
<p>Send us the technical data sheet you’re working from and our team will read the ion exchange resin specifications with you — and confirm the right AGRION grade with its TDS.</p>
<Link className="btn btn-green" to="/contact">Ask our technical team</Link>
<a className="btn btn-wa" href="https://wa.me/919898701010">WhatsApp us</a>
</div>
<h2 id="faq">Ion exchange resin specifications: frequently asked questions</h2>
<div className="faq" style={{marginTop: '12px'}}>
<details open=""><summary><h3>What are the most important ion exchange resin specifications?</h3></summary><p>Total exchange capacity, bead (particle) size and sieve analysis — they answer how much work the resin can do, how it behaves hydraulically, and how consistent that behaviour is. Everything else on the datasheet supports these three.</p></details>
<details><summary><h3>What is the difference between total and operating exchange capacity?</h3></summary><p>Total exchange capacity is the resin’s theoretical maximum; operating capacity is what you actually get at your regeneration level, and it is always lower. Size your bed on operating capacity.</p></details>
<details><summary><h3>What does the uniformity coefficient tell me?</h3></summary><p>It is the ratio of the 60%-passing size to the 10%-passing size, from the sieve analysis. A value near 1.0 means a very uniform bead — more even flow, lower pressure drop and more predictable performance. A higher value means a wider size spread.</p></details>
<details><summary><h3>Why does bead size matter?</h3></summary><p>Too fine raises pressure drop and loses fines; too coarse slows kinetics and raises leakage. The right bead size, with a tight uniformity coefficient, balances low pressure drop and fast exchange.</p></details>
<details><summary><h3>Can I use specifications to match my current resin?</h3></summary><p>Yes — that is the most reliable way. Match ionic form, exchange capacity and bead/effective size, or share your current TDS, and we’ll confirm the equivalent AGRION grade without needing a brand name.</p></details>
<details><summary><h3>Where do I find these specifications?</h3></summary><p>On the resin’s technical data sheet (TDS). Request the TDS for any AGRION grade, and see <Link to="/blog/how-to-read-resin-tds">how to read a resin TDS</Link> for the full sheet.</p></details>
</div>
</div>
<aside className="rail">
<div className="box enq">
<h4>Ask our technical team</h4>
<p>Send the datasheet you’re working from — we’ll read the specs with you and confirm the right grade.</p>
<Link className="btn btn-green" to="/contact">Send an enquiry</Link>
<a className="btn btn-wa" href="https://wa.me/919898701010">WhatsApp us</a>
<a className="btn btn-wa" href="tel:+919016711708">Call +91 90167 11708</a>
</div>
<div className="box"><h4>Related guides</h4><ul>
<li><Link to="/blog/how-to-read-resin-tds">How to read a resin TDS</Link></li>
<li><Link to="/blog/how-to-select-cation-resin-dm-plant">Selecting a cation resin</Link></li>
<li><Link to="/blog/macroporous-vs-gel-resins">Macroporous vs gel resins</Link></li>
</ul></div>
<div className="box"><h4>Products</h4><ul>
<li><Link to="/products/cationexchangeresins">Cation Exchange Resins</Link></li>
<li><Link to="/products/anionexchangeresins">Anion Exchange Resins</Link></li>
<li><Link to="/products/mixedbedexchangeresin">Mixed Bed Resins</Link></li>
<li><Link to="/products/watersoftenerresins">Water Softener Resins</Link></li>
<li><Link to="/products/specialtyresins">Specialty Resins</Link></li>
</ul></div>
<div className="box"><h4>Applications</h4><ul>
<li><Link to="/applications/dm-plant-resin">DM Plant / Demineralisation</Link></li>
<li><Link to="/applications/water-softener-resin">Water Softening</Link></li>
</ul></div>
</aside>
</div>
<section className="band" style={{padding: '0'}}><div className="wrap">
<h2>Read the specs with confidence — or let us read them with you.</h2>
<p>Send the technical data sheet you’re comparing and our team will confirm the right AGRION grade and attach its TDS.</p>
<div className="acts"><Link className="btn btn-green" to="/contact">Send an enquiry</Link><a className="btn btn-wa" href="https://wa.me/919898701010">WhatsApp us</a></div>
</div></section>

</main>

<div className="sticky"><a className="btn btn-white" href="tel:+919016711708">Call</a><a className="btn btn-green" href="https://wa.me/919898701010">WhatsApp</a><Link className="btn btn-ghost" to="/contact">Enquire</Link></div>


    </>
  );
}
