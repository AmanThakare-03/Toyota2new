// import React from "react";
// import { Link } from "react-router";
// import blogimg from "../../../assets/images/blog1image.png";


// export default function CationResinDMPlantGuide() {
//   return (
//     <>
//       <style>{`
// @import url("https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap");
// :root{--navy:#0A2C4B;--deep:#06182B;--blue:#1868A8;--gold:#B27B34;--gold2:#E5A855;--ice:#F6F9FC;--surface:#f7fafd;--line:#e0e3e6;--text:#181c1e;--muted:#43474e}
// *{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;font-family:"Inter",sans-serif;color:var(--text);background:var(--surface);line-height:1.6}img{max-width:100%;display:block}a{text-decoration:none;color:var(--blue)}.wrap{max-width:1440px;margin:auto;padding:0 80px}
// .eyebrow{font-size:11px;line-height:1;letter-spacing:.3em;font-weight:600;text-transform:uppercase;color:var(--gold)}
// h1,h2{font-family:"EB Garamond",serif;color:var(--navy)}h1{font-size:72px;line-height:1.1;letter-spacing:-.02em}h2{font-size:48px;line-height:1.2;font-weight:500}h3{color:var(--navy)}
// .btn{display:inline-flex;align-items:center;justify-content:center;padding:12px 20px;font-size:11px;line-height:1;letter-spacing:.22em;font-weight:600;text-transform:uppercase;border:1px solid var(--navy);border-radius:0}
// .btn-green{background:var(--gold);color:#fff;border-color:var(--gold)}.btn-wa,.btn-ghost{background:transparent;color:var(--navy);border-color:var(--navy)}.btn-white{background:#fff;color:var(--navy)}
// .skip{position:absolute;left:-9999px}.skip:focus{left:12px;top:12px;z-index:100;background:var(--deep);color:#fff;padding:10px}
// .ihero{position:relative;background:#fff;color:var(--text);border-bottom:1px solid var(--line);overflow:hidden}.ihero:before{content:"";position:absolute;inset:0;background-image:linear-gradient(rgba(10,44,75,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(10,44,75,.04) 1px,transparent 1px);background-size:32px 32px}.ihero .wrap{position:relative;padding-top:72px;padding-bottom:78px;text-align:left}.ihero .crumb{font-size:9px;letter-spacing:.12em;text-transform:uppercase;color:#73777e}.ihero .crumb a{color:#73777e}.ihero h1{max-width:900px;margin:18px 0 0}.ihero .sub{max-width:800px;font-size:18px;color:var(--muted);margin-top:22px}.ihero .cta{display:flex;gap:12px;flex-wrap:wrap;margin-top:30px}.ihero .btn-wa{color:var(--navy)}
// .applayout{max-width:1440px;margin:auto;padding:64px 80px;display:grid;grid-template-columns:minmax(0,1fr) 320px;gap:48px}.apcontent{min-width:0}.prose{font-size:14px}.prose p{color:var(--muted);margin:0 0 18px}.prose h2{font-size:38px;margin:56px 0 16px;scroll-margin-top:120px}.prose h3{font-size:18px}.prose ul,.prose ol{padding-left:0;list-style:none;margin:10px 0 22px}.prose li{position:relative;padding:10px 0 10px 28px;color:var(--muted);border-bottom:1px solid #eef1f4}.prose ul li:before{content:"";position:absolute;left:4px;top:18px;width:7px;height:7px;background:var(--gold)}.prose ol{counter-reset:n}.prose ol li{counter-increment:n;padding-left:42px}.prose ol li:before{content:counter(n);position:absolute;left:0;top:7px;width:28px;height:28px;display:grid;place-items:center;background:var(--navy);color:#fff;font-size:11px;font-weight:700}
// .byline{display:flex;gap:14px;flex-wrap:wrap;padding-bottom:20px;border-bottom:1px solid var(--line);font-size:11px!important;text-transform:uppercase;letter-spacing:.08em}.toc,.callout,.imgph,.spectbl,.faq details,.rail .box{background:#fff;border:1px solid var(--line);box-shadow:0 1px 4px rgba(10,44,75,.04)}.toc{padding:24px;margin:28px 0}.toc h4,.rail h4{font-size:11px;letter-spacing:.22em;text-transform:uppercase;color:var(--navy);margin:0 0 14px}.toc ol{columns:2}.toc li{border:0;padding:5px 0;font-size:13px}.toc li:before{display:none}
// .callout{border-left:4px solid var(--gold);padding:20px 22px;margin:24px 0}.callout b{color:var(--navy)}.imgph{padding:28px;margin:30px 0;display:flex;gap:22px;align-items:center;background:var(--ice)}.imgph .ic{width:58px;height:58px;flex:none;display:grid;place-items:center;background:var(--navy);color:#fff}.imgph .tag{font-size:9px;letter-spacing:.15em;text-transform:uppercase;color:var(--gold);font-weight:700}.imgph h4{margin:7px 0;color:var(--navy)}.imgph p{margin:5px 0}.imgph .prompt{background:#fff;border:1px solid var(--line);padding:10px 12px;font-size:12px}
// .spectbl{overflow-x:auto;margin:22px 0}.spectbl table{width:100%;border-collapse:collapse}.spectbl th{background:var(--navy);color:#fff;text-align:left;padding:13px 16px;font-size:11px;text-transform:uppercase;letter-spacing:.1em}.spectbl td{padding:13px 16px;border-bottom:1px solid var(--line)}
// .artcta{background:var(--deep);padding:28px;margin:32px 0;color:#fff}.artcta h3{color:#fff}.artcta p{color:#d7e0ea}.artcta .btn-wa{color:#fff;border-color:rgba(255,255,255,.5)}.faq details{padding:18px 20px;margin-top:12px}.faq summary{cursor:pointer}.faq summary h3{display:inline}.faq p{margin-top:12px}
// .rail{position:sticky;top:30px;align-self:start}.rail .box{padding:22px;margin-bottom:18px}.rail ul{list-style:none;padding:0;margin:0}.rail li{padding:9px 0;border-bottom:1px solid #eef1f4;font-size:13px}.rail .enq{background:var(--deep);color:#fff;border-color:var(--deep)}.rail .enq h4{color:var(--gold2)}.rail .enq p{color:#d7e0ea}.rail .enq .btn{width:100%;margin-top:8px}.rail .enq .btn-wa{color:#fff;border-color:rgba(255,255,255,.45)}
// .band{background:var(--deep);color:#fff}.band .wrap{padding-top:54px;padding-bottom:54px;text-align:center}.band h2{color:#fff;margin:0 auto;max-width:760px}.band p{color:#d7e0ea;max-width:700px;margin:14px auto 24px}.acts{display:flex;justify-content:center;gap:12px;flex-wrap:wrap}.band .btn-wa{color:#fff;border-color:rgba(255,255,255,.5)}
// .clients{padding:58px 0;background:#fff;border-top:1px solid var(--line);text-align:center}.clients h2{margin:8px 0 0}.marquee{overflow:hidden;margin-top:28px}.track{display:flex;width:max-content;animation:cscroll 55s linear infinite}.chip{width:184px;height:108px;margin-right:18px;background:#fff;border:1px solid var(--line);display:flex;align-items:center;justify-content:center;padding:16px 20px}.chip img{max-height:66px;width:auto;object-fit:contain}@keyframes cscroll{to{transform:translateX(-50%)}}
// .sticky{display:none}
// @media(max-width:1100px){.wrap,.applayout{padding-left:40px;padding-right:40px}.applayout{grid-template-columns:1fr}.rail{position:static}}
// @media(max-width:640px){.wrap,.applayout{padding-left:24px;padding-right:24px}.ihero .wrap{padding-top:48px;padding-bottom:52px}h1{font-size:48px}.prose h2,h2{font-size:32px}.toc ol{columns:1}.imgph{flex-direction:column;align-items:flex-start}.sticky{display:flex;position:fixed;bottom:0;left:0;right:0;z-index:70;background:#fff;border-top:1px solid var(--line);padding:10px;gap:8px}.sticky .btn{flex:1;padding:11px 6px}}
// `}</style>
      
// <a className="skip" href="#main">Skip to content</a>

// <main id="main">
// {/* HERO */}
// <div className="ihero"><div className="wrap">
// <p className="crumb"><Link to="/">Home</Link> › <Link to="/resources">Resources</Link> › Knowledge Hub</p>
// <p className="eyebrow">Selection guide</p>
// <h1>How to select the right cation resin for your DM plant</h1>
// <p className="sub">The cation stage sets the tone for the whole demineraliser. Here is how to match a strong acid cation resin to your feedwater, duty and outlet spec — without over-buying or under-specifying.</p>
// <div className="cta"><Link className="btn btn-green" to="/contact">Ask our technical team</Link><Link className="btn btn-wa" to="/products/cationexchangeresins">See cation grades</Link></div>
// </div></div>
// {/* MAIN: content + sticky right sidebar */}
// <div className="applayout">
// <div className="apcontent prose">
// <p className="byline"><span>📅 Updated 2026</span><span>⏱ 7 min read</span><span>🏭 Toyota Chemical Industries</span></p>
// <p>The cation stage is the first working step in a demineralisation (DM) plant, and choosing the right <b>cation resin for DM plant</b> duty matters more than most buyers expect. Pick too small a capacity and you regenerate too often; pick the wrong form or bead size and you fight leakage, pressure drop and short runs for the life of the charge. This guide walks through every decision a plant engineer actually faces when selecting a cation resin for DM plant service — and how to make each one on data, not guesswork.</p>
// <p>By the end you should be able to characterise your feedwater, size the cation stage on the right basis, read the three specifications that decide a grade, and match your duty to a specific AGRION cation resin — or confirm an equivalent to the resin you already run. If you want the wider picture of how the cation stage fits the rest of the train, our <Link to="/applications/dm-plant-resin">DM plant application</Link> page shows the full sequence from cation to anion to mixed-bed polishing.</p>
// <div className="toc">
// <h4>On this page</h4>
// <ol>
// <li><a href="#job">What a cation resin does in a DM plant</a></li>
// <li><a href="#sac">Strong acid vs weak acid cation</a></li>
// <li><a href="#specs">Specs that decide the grade</a></li>
// <li><a href="#feed">Feedwater &amp; selection</a></li>
// <li><a href="#sizing">Sizing the cation bed</a></li>
// <li><a href="#grade">Which AGRION grade</a></li>
// <li><a href="#operate">Regeneration &amp; operating</a></li>
// <li><a href="#equiv">Replace or match existing resin</a></li>
// <li><a href="#mistakes">Common mistakes</a></li>
// <li><a href="#checklist">Quick selection checklist</a></li>
// <li><a href="#faq">FAQ</a></li>
// </ol>
// </div>
// <div className="imgph">
// <div className="ic">📷</div>
// <div className="meta">
// <span className="tag">Image to add</span>
// <h4>Cation column in a DM plant / cation resin beads</h4>
// <p>A visual near the top of the article.</p>
// <p className="prompt"><b>Prompt:</b> A clean shot of a strong-acid-cation exchange column in a DM plant, or a macro of amber cation resin beads in a gloved hand; blue-and-steel palette, technical documentary style, landscape 16:9. Alt text: "cation resin for DM plant — strong acid cation column".</p>
// </div>
// </div>
// {/* <div className="imgph">
//   <img src="blogimg" alt="blog1 image"/>
// </div> */}


// <h2 id="job">What is a cation resin and what does it do in a DM plant?</h2>
// <p>In a two-bed DM plant, raw water passes first through a strong acid cation (SAC) resin in the hydrogen form. The resin exchanges the cations in the water — calcium, magnesium and sodium — for hydrogen ions, leaving a dilute acid solution that the downstream anion resin then neutralises. Everything the anion stage and the mixed bed do afterwards depends on the cation stage delivering consistent, low-leakage output, which is why the choice of cation resin for DM plant service sets the tone for the whole demineraliser.</p>
// <p>Think of the cation bed as the plant’s first line of defence. If it exhausts early, the whole train shortens its run. If it leaks sodium, that leakage passes through the anion bed and shows up as conductivity and, ultimately, as off-spec water at the outlet. So the selection question is really this: <b>which cation resin will hold capacity, run long between regenerations, and keep sodium leakage low on my particular water?</b> Everything below is aimed at answering that question with numbers.</p>
// <p>It also helps to remember what the cation stage is <i>not</i> responsible for. It does not remove silica, carbon dioxide or the anions — that is the anion resin’s job (see <Link to="/blog/sba-type-1-vs-type-2-resin">Type 1 vs Type 2 strong base anion</Link>). Keeping that division of labour clear stops engineers from over-specifying the cation bed to solve problems that belong downstream.</p>
// <h2 id="sac">Strong acid vs weak acid cation resin for a DM plant</h2>
// <p>There are two families to consider when choosing a cation resin for DM plant duty:</p>
// <ul>
// <li><b>Strong acid cation (SAC)</b> — works across the full pH range and removes all cations, whatever anion they are paired with. This is the workhorse of the DM cation stage and, for most plants, the grade you will build the design around.</li>
// <li><b>Weak acid cation (WAC)</b> — only removes the cations associated with alkalinity (bicarbonate hardness), but does so at very high regeneration efficiency, using far less acid per unit of capacity. On high-alkalinity feedwater it is run <i>ahead</i> of the SAC bed to strip the alkalinity-linked hardness first.</li>
// </ul>
// <p>For most DM plants the answer is a strong acid cation resin for the main stage, with a weak acid cation stage added only when the alkalinity is high enough to justify the extra vessel. The pay-off of the WAC stage is lower acid consumption on the whole train — a real operating-cost saving on hard, alkaline waters. If your feedwater alkalinity is significant, read our guide on <Link to="/applications/dealkalisation-resin">dealkalisation</Link> before you finalise the layout, because it changes both the vessel count and the running cost.</p>
// <p>A quick way to decide: if bicarbonate alkalinity is a large fraction of your total hardness, a WAC-plus-SAC configuration usually pays back. If alkalinity is low, a single strong acid cation resin for DM plant service is simpler and cheaper to run.</p>
// <h2 id="specs">Cation resin specifications that decide the DM plant grade</h2>
// <p>Three numbers do most of the work in a cation selection — the same three an experienced engineer checks first on any technical data sheet:</p>
// <div className="spectbl"><table><thead><tr><th>Specification</th><th>Why it matters</th></tr></thead><tbody>
// <tr><td><b>Total exchange capacity</b></td><td>How much hardness the resin removes per litre before it exhausts — sets your run length and vessel size. Higher capacity means longer runs or a smaller bed for the same duty.</td></tr>
// <tr><td><b>Bead / particle size</b></td><td>Controls pressure drop and exchange kinetics. Too fine and you get high pressure drop and fines carry-over; too coarse and kinetics suffer, raising leakage. A uniform, well-graded bead is what you want.</td></tr>
// <tr><td><b>Ionic form</b></td><td>DM cation runs in the hydrogen (H⁺) form; softening runs in the sodium (Na⁺) form. Ordering a softener grade for a DM plant means an unnecessary conversion and, sometimes, a wasted charge.</td></tr>
// </tbody></table></div>
// <p>Two further figures are worth checking on the datasheet before you commit: <b>uniformity coefficient</b> (how tight the bead-size distribution is — tighter is better for even flow and low pressure drop) and <b>moisture / swelling</b> behaviour between forms (which affects how the bed behaves through regeneration cycles). For a full line-by-line walkthrough of these figures, see <Link to="/blog/resin-specifications-explained">Total exchange capacity, bead size &amp; sieve analysis explained</Link> and <Link to="/blog/how-to-read-resin-tds">how to read a resin TDS</Link>. Reading the datasheet properly is half of selecting the right cation resin for DM plant service.</p>
// <h2 id="feed">How feedwater analysis drives cation resin selection</h2>
// <p>Before you pick a grade, characterise the water the resin has to treat — the resin is only ever as good as the match to the feed. The parameters that drive cation selection are:</p>
// <ul>
// <li><b>Total hardness and total cations</b> — the load the bed has to carry each cycle. This is the single most important input to sizing.</li>
// <li><b>Sodium level</b> — high sodium raises leakage risk and can call for a higher regeneration level or a higher-capacity grade to hold outlet quality.</li>
// <li><b>Alkalinity</b> — high alkalinity is the trigger for adding a weak acid cation stage, as discussed above.</li>
// <li><b>Temperature</b> — elevated temperature speeds kinetics but can shorten resin life and lower the safe operating limit, especially for the anion downstream.</li>
// <li><b>Free chlorine and oxidants</b> — chlorine attacks the resin’s crosslinked structure over time, causing capacity loss and bead breakdown; if present, it should be removed upstream.</li>
// <li><b>Turbidity and organics</b> — suspended solids foul the top of the bed; organics load the anion resin more than the cation, but heavy fouling shortens everyone’s life.</li>
// </ul>
// <div className="callout"><b>Rule of thumb:</b> size the cation stage on total cations, not just hardness — sodium and potassium count too, and forgetting them is the most common reason a DM plant runs short between regenerations. When in doubt, get a full ionic analysis rather than a hardness figure alone.</div>
// <h2 id="sizing">How to size the cation resin bed in a DM plant</h2>
// <p>Once you know the water, sizing the cation resin for DM plant duty comes down to a simple balance: the resin’s operating capacity against the ionic load per cycle and the run length you want. In practice you work through:</p>
// <ol>
// <li><b>Total ionic load</b> — the sum of cations (as CaCO₃ or equivalents) per litre of feedwater, multiplied by the throughput you want between regenerations.</li>
// <li><b>Operating capacity</b> — the usable capacity at your chosen regeneration level (always lower than the total exchange capacity on the datasheet; regeneration level is a cost-versus-capacity trade-off).</li>
// <li><b>Resin volume</b> — load divided by operating capacity gives the litres of resin; add margin for leakage control and future load growth.</li>
// <li><b>Flow rate and bed depth</b> — check service flow (bed volumes per hour) and minimum bed depth so kinetics and distribution are sound; this is where bead size and uniformity matter.</li>
// </ol>
// <p>Higher regeneration levels buy more usable capacity from the same resin but cost more acid; lower levels save acid but shorten runs and can raise leakage. The right point depends on your acid cost, your outlet spec and how much downtime a regeneration costs you. Share your numbers and our technical team will run this balance with you rather than leaving it to a rule of thumb.</p>
// <h2 id="grade">Which Toyota Chemical Industries cation resin for your DM plant?</h2>
// <p>Once you know your water and duty, matching to a grade is straightforward. For the DM cation stage and its neighbours, the AGRION cation resin for DM plant options are:</p>
// <div className="spectbl"><table><thead><tr><th>Duty</th><th>AGRION grade</th></tr></thead><tbody>
// <tr><td>Standard two-bed DM cation stage (hydrogen form)</td><td>AGRION C-100 H</td></tr>
// <tr><td>High-capacity sodium-cycle duty</td><td>AGRION C-100 Na</td></tr>
// <tr><td>Dealkalisation ahead of the SAC bed (high alkalinity)</td><td>AGRION WC-50 (weak acid cation)</td></tr>
// <tr><td>Heavy-metal removal, condensate polishing or ZLD (macroporous)</td><td>AGRION C-100 MP</td></tr>
// <tr><td>Standard water softening (sodium form)</td><td>AGRION C-60 / C-80</td></tr>
// </tbody></table></div>
// <p>For the great majority of two-bed demineralisers, AGRION C-100 H is the cation resin for DM plant service you will specify, paired with a Type 1 strong base anion such as AGRION A-400 and, where high purity is needed, an AGRION MB-1151 mixed bed for polishing. See the full range and each grade’s key data on the <Link to="/products/cationexchangeresins">cation exchange resins</Link> page, the anion side on the <Link to="/products/anionexchangeresins">anion exchange resins</Link> page, and how the whole train fits together on the <Link to="/applications/dm-plant-resin">DM plant</Link> application page.</p>
// <div className="imgph">
// <div className="ic">📷</div>
// <div className="meta">
// <span className="tag">Image to add</span>
// <h4>Simple DM cation-selection decision diagram</h4>
// <p>A visual to break up the second half of the article.</p>
// <p className="prompt"><b>Prompt:</b> A clean labelled decision diagram — feedwater (hardness / sodium / alkalinity) → SAC vs SAC+WAC → AGRION grade — in the navy/green brand palette. Simple, technical, landscape 16:9. Alt text: "how to select cation resin for DM plant — decision diagram".</p>
// </div>
// </div>
// <h2 id="operate">Cation resin regeneration &amp; operating conditions in a DM plant</h2>
// <p>Selecting the grade is only half the job; how you run and regenerate it decides whether it delivers its rated life. A cation resin for DM plant service is regenerated with acid — hydrochloric or sulphuric — on the hydrogen cycle. A few operating points protect capacity and outlet quality:</p>
// <ul>
// <li><b>Consistent regeneration.</b> A steady acid dose and contact time keep operating capacity and leakage stable cycle after cycle; erratic regeneration is a common cause of drifting outlet conductivity. Our <Link to="/blog/resin-regeneration-best-practices">regeneration best-practices guide</Link> covers this in detail.</li>
// <li><b>Watch sodium leakage.</b> Rising sodium in the cation effluent is the early warning that regeneration is inadequate or the resin is ageing.</li>
// <li><b>Protect against oxidants.</b> Free chlorine in the feed slowly degrades the resin; remove it upstream to preserve capacity and bead integrity.</li>
// <li><b>Mind the temperature limit.</b> Stay within the grade’s rated operating temperature, and remember the anion downstream usually sets the tighter limit.</li>
// </ul>
// <p>Run well, a cation charge lasts for years; run hard or fed with chlorine, it fails early. Knowing when a change is due is its own skill — see <Link to="/blog/dm-plant-resin-replacement-guide">DM plant resin replacement: when and how to change resin</Link>.</p>
// <h2 id="equiv">Match your DM plant cation resin to a Toyota Chemical Industries equivalent</h2>
// <p>If you already run a DM plant and simply need to replace the cation resin, you do not have to re-engineer anything. Match the new cation resin for DM plant service on three points and it will drop straight into the same vessel:</p>
// <ol>
// <li><b>Ionic form</b> — hydrogen form for a DM cation stage.</li>
// <li><b>Total exchange capacity</b> — equal or higher, so run length is maintained or improved.</li>
// <li><b>Bead size</b> — comparable, so pressure drop, distribution and backwash behaviour stay the same.</li>
// </ol>
// <p>Share the grade you run today, or its technical data sheet, and our team will confirm the equivalent AGRION grade — there is no need to name a competitor’s brand for us to match on specifications. Matching on the numbers is faster and more reliable than matching on a name, and it is exactly how a like-for-like replacement should be done.</p>
// <h2 id="mistakes">Common mistakes when selecting a cation resin for a DM plant</h2>
// <p>Most cation-selection problems come down to a handful of avoidable errors:</p>
// <ul>
// <li><b>Sizing on hardness alone.</b> Total cations, including sodium and potassium, set the real load — hardness alone under-sizes the bed.</li>
// <li><b>Ordering the wrong form.</b> A softener grade (sodium form) is not a DM cation grade (hydrogen form); the two are not interchangeable off the shelf.</li>
// <li><b>Ignoring alkalinity.</b> High alkalinity without a weak acid cation stage means high acid bills for the life of the plant.</li>
// <li><b>Skipping oxidant removal.</b> Feeding chlorine to the cation bed quietly destroys capacity and shortens life.</li>
// <li><b>Chasing the cheapest capacity.</b> A fractionally cheaper grade that fouls or breaks down early costs more over the cycle than the right cation resin for DM plant duty at a fair price.</li>
// </ul>
// <p>Avoid these five and you avoid most of the reasons DM plants run short, leak sodium or need premature resin changes.</p>
// <h2 id="checklist">Cation resin for DM plant: a quick selection checklist</h2>
// <p>Before you place an order for a cation resin for DM plant service, run through this short checklist. If you can answer all seven, you have enough to specify the grade with confidence:</p>
// <ol>
// <li>Do you have a full ionic feedwater analysis — not just a hardness figure?</li>
// <li>What is your total cation load, including sodium and potassium?</li>
// <li>Is alkalinity high enough to justify a weak acid cation stage?</li>
// <li>Is free chlorine or another oxidant present, and is it removed upstream?</li>
// <li>What outlet quality (conductivity, sodium leakage) does the process demand?</li>
// <li>What regeneration level and run length balance your acid cost against capacity?</li>
// <li>If replacing, do you have the current resin’s form, capacity and bead size?</li>
// </ol>
// <p>Answer those and the right cation resin for DM plant duty almost picks itself — and if any answer is uncertain, that is exactly where a quick conversation with our technical team saves a costly mis-specification.</p>
// <div className="artcta">
// <h3>Not sure which cation grade fits your DM plant?</h3>
// <p>Send us your feedwater analysis and outlet spec and we’ll recommend the cation grade — and attach its TDS.</p>
// <Link className="btn btn-green" to="/contact">Ask our technical team</Link>
// <a className="btn btn-wa" href="https://wa.me/919898701010">WhatsApp us</a>
// </div>
// <h2 id="faq">Cation resin for DM plant: frequently asked questions</h2>
// <div className="faq" style={{marginTop: '12px'}}>
// <details open=""><summary><h3>Which cation resin is used in a DM plant?</h3></summary><p>A strong acid cation resin in the hydrogen form — for example AGRION C-100 H. On high-alkalinity feedwater, a weak acid cation resin (AGRION WC-50) is added ahead of it to cut acid consumption.</p></details>
// <details><summary><h3>How do I size the cation stage?</h3></summary><p>Size it on total cations (hardness plus sodium and potassium), not hardness alone, using the resin’s total exchange capacity to set run length and vessel volume.</p></details>
// <details><summary><h3>What is the difference between DM cation and softener resin?</h3></summary><p>Both are strong acid cation resins, but the DM cation stage runs in the hydrogen form and the softener runs in the sodium form. Ordering the wrong form means an unnecessary conversion.</p></details>
// <details><summary><h3>Can I match my current cation resin without naming the brand?</h3></summary><p>Yes. Match on ionic form, total exchange capacity and bead size — or share your current TDS — and we’ll confirm the equivalent AGRION grade for your DM plant cation stage.</p></details>
// <details><summary><h3>Does free chlorine affect cation resin for DM plant use?</h3></summary><p>Yes. Free chlorine and other oxidants slowly attack the resin’s crosslinked structure, causing capacity loss and bead breakdown. Remove chlorine upstream to protect the life of the cation resin in your DM plant.</p></details>
// <details><summary><h3>How long does a DM plant cation charge last?</h3></summary><p>Run within its rated conditions and regenerated consistently, a cation resin for DM plant service lasts several years. Fouling, oxidant attack or physical breakdown shorten it — rising conductivity or sodium leakage signals a change is due.</p></details>
// </div>
// </div>
// <aside className="rail">
// <div className="box enq">
// <h4>Ask our technical team</h4>
// <p>Share your feedwater and outlet spec — we’ll recommend the cation grade and attach the TDS.</p>
// <Link className="btn btn-green" to="/contact">Send an enquiry</Link>
// <a className="btn btn-wa" href="https://wa.me/919898701010">WhatsApp us</a>
// <a className="btn btn-wa" href="tel:+919016711708">Call +91 90167 11708</a>
// </div>
// <div className="box"><h4>Related guides</h4><ul>
// <li><Link to="/blog/resin-specifications-explained">Exchange capacity, bead size &amp; sieve analysis</Link></li>
// <li><Link to="/blog/how-to-read-resin-tds">How to read a resin TDS</Link></li>
// <li><Link to="/blog/dm-plant-resin-replacement-guide">When to replace DM plant resin</Link></li>
// </ul></div>
// <div className="box"><h4>Products</h4><ul>
// <li><Link to="/products/cationexchangeresins">Cation Exchange Resins</Link></li>
// <li><Link to="/products/anionexchangeresins">Anion Exchange Resins</Link></li>
// <li><Link to="/products/mixedbedexchangeresin">Mixed Bed Resins</Link></li>
// <li><Link to="/products/watersoftenerresins">Water Softener Resins</Link></li>
// <li><Link to="/products/specialtyresins">Specialty Resins</Link></li>
// </ul></div>
// <div className="box"><h4>Applications</h4><ul>
// <li><Link to="/applications/dm-plant-resin">DM Plant / Demineralisation</Link></li>
// <li><Link to="/applications/dealkalisation-resin">Dealkalisation</Link></li>
// </ul></div>
// </aside>
// </div>
// {/* CTA */}
// <section className="band" style={{padding: '0'}}><div className="wrap">
// <h2>Get the cation grade right the first time.</h2>
// <p>Share your feedwater analysis and outlet spec and our technical team will recommend the grade and attach its TDS.</p>
// <div className="acts"><Link className="btn btn-green" to="/contact">Send an enquiry</Link><a className="btn btn-wa" href="https://wa.me/919898701010">WhatsApp us</a></div>
// </div></section>

// </main>

// <div className="sticky"><a className="btn btn-white" href="tel:+919016711708">Call</a><a className="btn btn-green" href="https://wa.me/919898701010">WhatsApp</a><Link className="btn btn-ghost" to="/contact">Enquire</Link></div>


//     </>
//   );
// }

import React from "react";

import { Link } from "react-router";

import cationDmImage from "../../../assets/images/cation exchange resin.jpg";
import cationSelectionImage from "../../../assets/images/Dm plant application.jpg";





export default function CationResinDMPlantGuide() {

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

.ihero{position:relative;background:#fff;color:var(--text);border-bottom:1px solid var(--line);overflow:hidden}.ihero:before{content:"";position:absolute;inset:0;background-image:linear-gradient(rgba(10,44,75,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(10,44,75,.04) 1px,transparent 1px);background-size:32px 32px}.ihero .wrap{position:relative;padding-top:72px;padding-bottom:78px;text-align:left}.ihero .crumb{font-size:9px;letter-spacing:.12em;text-transform:uppercase;color:#73777e}.ihero .crumb a{color:#73777e}.ihero h1{max-width:900px;margin:18px 0 0}.ihero .sub{max-width:800px;font-size:18px;color:var(--muted);margin-top:22px}.ihero .cta{display:flex;gap:12px;flex-wrap:wrap;margin-top:30px}.ihero .btn-wa{color:var(--navy)}

.applayout{max-width:1440px;margin:auto;padding:64px 80px;display:grid;grid-template-columns:minmax(0,1fr) 320px;gap:48px}.apcontent{min-width:0}.prose{font-size:14px}.prose p{color:var(--muted);margin:0 0 18px}.prose h2{font-size:38px;margin:56px 0 16px;scroll-margin-top:120px}.prose h3{font-size:18px}.prose ul,.prose ol{padding-left:0;list-style:none;margin:10px 0 22px}.prose li{position:relative;padding:10px 0 10px 28px;color:var(--muted);border-bottom:1px solid #eef1f4}.prose ul li:before{content:"";position:absolute;left:4px;top:18px;width:7px;height:7px;background:var(--gold)}.prose ol{counter-reset:n}.prose ol li{counter-increment:n;padding-left:42px}.prose ol li:before{content:counter(n);position:absolute;left:0;top:7px;width:28px;height:28px;display:grid;place-items:center;background:var(--navy);color:#fff;font-size:11px;font-weight:700}

.byline{display:flex;gap:14px;flex-wrap:wrap;padding-bottom:20px;border-bottom:1px solid var(--line);font-size:11px!important;text-transform:uppercase;letter-spacing:.08em}.toc,.callout,.imgph,.spectbl,.faq details,.rail .box{background:#fff;border:1px solid var(--line);box-shadow:0 1px 4px rgba(10,44,75,.04)}.toc{padding:24px;margin:28px 0}.toc h4,.rail h4{font-size:11px;letter-spacing:.22em;text-transform:uppercase;color:var(--navy);margin:0 0 14px}.toc ol{columns:2}.toc li{border:0;padding:5px 0;font-size:13px}.toc li:before{display:none}

.callout{border-left:4px solid var(--gold);padding:20px 22px;margin:24px 0}.callout b{color:var(--navy)}.imgph{padding:0;margin:30px 0;display:block;background:#fff;overflow:hidden;border:1px solid var(--line);box-shadow:0 1px 4px rgba(10,44,75,.04)}.imgph img{width:100%;aspect-ratio:16/9;object-fit:cover;display:block}

.spectbl{overflow-x:auto;margin:22px 0}.spectbl table{width:100%;border-collapse:collapse}.spectbl th{background:var(--navy);color:#fff;text-align:left;padding:13px 16px;font-size:11px;text-transform:uppercase;letter-spacing:.1em}.spectbl td{padding:13px 16px;border-bottom:1px solid var(--line)}

.artcta{background:var(--deep);padding:28px;margin:32px 0;color:#fff}.artcta h3{color:#fff}.artcta p{color:#d7e0ea}.artcta .btn-wa{color:#fff;border-color:rgba(255,255,255,.5)}.faq details{padding:18px 20px;margin-top:12px}.faq summary{cursor:pointer}.faq summary h3{display:inline}.faq p{margin-top:12px}

.rail{position:sticky;top:30px;align-self:start}.rail .box{padding:22px;margin-bottom:18px}.rail ul{list-style:none;padding:0;margin:0}.rail li{padding:9px 0;border-bottom:1px solid #eef1f4;font-size:13px}.rail .enq{background:var(--deep);color:#fff;border-color:var(--deep)}.rail .enq h4{color:var(--gold2)}.rail .enq p{color:#d7e0ea}.rail .enq .btn{width:100%;margin-top:8px}.rail .enq .btn-wa{color:#fff;border-color:rgba(255,255,255,.45)}

.band{background:var(--deep);color:#fff}.band .wrap{padding-top:54px;padding-bottom:54px;text-align:center}.band h2{color:#fff;margin:0 auto;max-width:760px}.band p{color:#d7e0ea;max-width:700px;margin:14px auto 24px}.acts{display:flex;justify-content:center;gap:12px;flex-wrap:wrap}.band .btn-wa{color:#fff;border-color:rgba(255,255,255,.5)}

.clients{padding:58px 0;background:#fff;border-top:1px solid var(--line);text-align:center}.clients h2{margin:8px 0 0}.marquee{overflow:hidden;margin-top:28px}.track{display:flex;width:max-content;animation:cscroll 55s linear infinite}.chip{width:184px;height:108px;margin-right:18px;background:#fff;border:1px solid var(--line);display:flex;align-items:center;justify-content:center;padding:16px 20px}.chip img{max-height:66px;width:auto;object-fit:contain}@keyframes cscroll{to{transform:translateX(-50%)}}

.sticky{display:none}

@media(max-width:1100px){.wrap,.applayout{padding-left:40px;padding-right:40px}.applayout{grid-template-columns:1fr}.rail{position:static}}

@media(max-width:640px){.wrap,.applayout{padding-left:24px;padding-right:24px}.ihero .wrap{padding-top:48px;padding-bottom:52px}h1{font-size:48px}.prose h2,h2{font-size:32px}.toc ol{columns:1}.sticky{display:flex;position:fixed;bottom:0;left:0;right:0;z-index:70;background:#fff;border-top:1px solid var(--line);padding:10px;gap:8px}.sticky .btn{flex:1;padding:11px 6px}}

`}</style>



<a className="skip" href="#main">Skip to content</a>



<main id="main">

{/* HERO */}

<div className="ihero"><div className="wrap">

<p className="crumb"><Link to="/">Home</Link> › <Link to="/resources">Resources</Link> › Knowledge Hub</p>

<p className="eyebrow">Selection guide</p>

<h1>How to select the right cation resin for your DM plant</h1>

<p className="sub">The cation stage sets the tone for the whole demineraliser. Here is how to match a strong acid cation resin to your feedwater, duty and outlet spec — without over-buying or under-specifying.</p>

<div className="cta"><Link className="btn btn-green" to="/contact">Ask our technical team</Link><Link className="btn btn-wa" to="/products/cationexchangeresins">See cation grades</Link></div>

</div></div>

{/* MAIN: content + sticky right sidebar */}

<div className="applayout">

<div className="apcontent prose">

<p className="byline"><span>📅 Updated 2026</span><span>⏱ 7 min read</span><span>🏭 Toyota Chemical Industries</span></p>

<p>The cation stage is the first working step in a demineralisation (DM) plant, and choosing the right <b>cation resin for DM plant</b> duty matters more than most buyers expect. Pick too small a capacity and you regenerate too often; pick the wrong form or bead size and you fight leakage, pressure drop and short runs for the life of the charge. This guide walks through every decision a plant engineer actually faces when selecting a cation resin for DM plant service — and how to make each one on data, not guesswork.</p>

<p>By the end you should be able to characterise your feedwater, size the cation stage on the right basis, read the three specifications that decide a grade, and match your duty to a specific AGRION cation resin — or confirm an equivalent to the resin you already run. If you want the wider picture of how the cation stage fits the rest of the train, our <Link to="/applications/dm-plant-resin">DM plant application</Link> page shows the full sequence from cation to anion to mixed-bed polishing.</p>

<div className="toc">

<h4>On this page</h4>

<ol>

<li><a href="#job">What a cation resin does in a DM plant</a></li>

<li><a href="#sac">Strong acid vs weak acid cation</a></li>

<li><a href="#specs">Specs that decide the grade</a></li>

<li><a href="#feed">Feedwater &amp; selection</a></li>

<li><a href="#sizing">Sizing the cation bed</a></li>

<li><a href="#grade">Which AGRION grade</a></li>

<li><a href="#operate">Regeneration &amp; operating</a></li>

<li><a href="#equiv">Replace or match existing resin</a></li>

<li><a href="#mistakes">Common mistakes</a></li>

<li><a href="#checklist">Quick selection checklist</a></li>

<li><a href="#faq">FAQ</a></li>

</ol>

</div>

<div className="imgph">
  <img
    src={cationDmImage}
    alt="amber cation exchange resin beads for DM plant service"
    loading="lazy"
  />
</div>





<h2 id="job">What is a cation resin and what does it do in a DM plant?</h2>

<p>In a two-bed DM plant, raw water passes first through a strong acid cation (SAC) resin in the hydrogen form. The resin exchanges the cations in the water — calcium, magnesium and sodium — for hydrogen ions, leaving a dilute acid solution that the downstream anion resin then neutralises. Everything the anion stage and the mixed bed do afterwards depends on the cation stage delivering consistent, low-leakage output, which is why the choice of cation resin for DM plant service sets the tone for the whole demineraliser.</p>

<p>Think of the cation bed as the plant’s first line of defence. If it exhausts early, the whole train shortens its run. If it leaks sodium, that leakage passes through the anion bed and shows up as conductivity and, ultimately, as off-spec water at the outlet. So the selection question is really this: <b>which cation resin will hold capacity, run long between regenerations, and keep sodium leakage low on my particular water?</b> Everything below is aimed at answering that question with numbers.</p>

<p>It also helps to remember what the cation stage is <i>not</i> responsible for. It does not remove silica, carbon dioxide or the anions — that is the anion resin’s job (see <Link to="/blog/sba-type-1-vs-type-2-resin">Type 1 vs Type 2 strong base anion</Link>). Keeping that division of labour clear stops engineers from over-specifying the cation bed to solve problems that belong downstream.</p>

<h2 id="sac">Strong acid vs weak acid cation resin for a DM plant</h2>

<p>There are two families to consider when choosing a cation resin for DM plant duty:</p>

<ul>

<li><b>Strong acid cation (SAC)</b> — works across the full pH range and removes all cations, whatever anion they are paired with. This is the workhorse of the DM cation stage and, for most plants, the grade you will build the design around.</li>

<li><b>Weak acid cation (WAC)</b> — only removes the cations associated with alkalinity (bicarbonate hardness), but does so at very high regeneration efficiency, using far less acid per unit of capacity. On high-alkalinity feedwater it is run <i>ahead</i> of the SAC bed to strip the alkalinity-linked hardness first.</li>

</ul>

<p>For most DM plants the answer is a strong acid cation resin for the main stage, with a weak acid cation stage added only when the alkalinity is high enough to justify the extra vessel. The pay-off of the WAC stage is lower acid consumption on the whole train — a real operating-cost saving on hard, alkaline waters. If your feedwater alkalinity is significant, read our guide on <Link to="/applications/dealkalisation-resin">dealkalisation</Link> before you finalise the layout, because it changes both the vessel count and the running cost.</p>

<p>A quick way to decide: if bicarbonate alkalinity is a large fraction of your total hardness, a WAC-plus-SAC configuration usually pays back. If alkalinity is low, a single strong acid cation resin for DM plant service is simpler and cheaper to run.</p>

<h2 id="specs">Cation resin specifications that decide the DM plant grade</h2>

<p>Three numbers do most of the work in a cation selection — the same three an experienced engineer checks first on any technical data sheet:</p>

<div className="spectbl"><table><thead><tr><th>Specification</th><th>Why it matters</th></tr></thead><tbody>

<tr><td><b>Total exchange capacity</b></td><td>How much hardness the resin removes per litre before it exhausts — sets your run length and vessel size. Higher capacity means longer runs or a smaller bed for the same duty.</td></tr>

<tr><td><b>Bead / particle size</b></td><td>Controls pressure drop and exchange kinetics. Too fine and you get high pressure drop and fines carry-over; too coarse and kinetics suffer, raising leakage. A uniform, well-graded bead is what you want.</td></tr>

<tr><td><b>Ionic form</b></td><td>DM cation runs in the hydrogen (H⁺) form; softening runs in the sodium (Na⁺) form. Ordering a softener grade for a DM plant means an unnecessary conversion and, sometimes, a wasted charge.</td></tr>

</tbody></table></div>

<p>Two further figures are worth checking on the datasheet before you commit: <b>uniformity coefficient</b> (how tight the bead-size distribution is — tighter is better for even flow and low pressure drop) and <b>moisture / swelling</b> behaviour between forms (which affects how the bed behaves through regeneration cycles). For a full line-by-line walkthrough of these figures, see <Link to="/blog/resin-specifications-explained">Total exchange capacity, bead size &amp; sieve analysis explained</Link> and <Link to="/blog/how-to-read-resin-tds">how to read a resin TDS</Link>. Reading the datasheet properly is half of selecting the right cation resin for DM plant service.</p>

<h2 id="feed">How feedwater analysis drives cation resin selection</h2>

<p>Before you pick a grade, characterise the water the resin has to treat — the resin is only ever as good as the match to the feed. The parameters that drive cation selection are:</p>

<ul>

<li><b>Total hardness and total cations</b> — the load the bed has to carry each cycle. This is the single most important input to sizing.</li>

<li><b>Sodium level</b> — high sodium raises leakage risk and can call for a higher regeneration level or a higher-capacity grade to hold outlet quality.</li>

<li><b>Alkalinity</b> — high alkalinity is the trigger for adding a weak acid cation stage, as discussed above.</li>

<li><b>Temperature</b> — elevated temperature speeds kinetics but can shorten resin life and lower the safe operating limit, especially for the anion downstream.</li>

<li><b>Free chlorine and oxidants</b> — chlorine attacks the resin’s crosslinked structure over time, causing capacity loss and bead breakdown; if present, it should be removed upstream.</li>

<li><b>Turbidity and organics</b> — suspended solids foul the top of the bed; organics load the anion resin more than the cation, but heavy fouling shortens everyone’s life.</li>

</ul>

<div className="callout"><b>Rule of thumb:</b> size the cation stage on total cations, not just hardness — sodium and potassium count too, and forgetting them is the most common reason a DM plant runs short between regenerations. When in doubt, get a full ionic analysis rather than a hardness figure alone.</div>

<h2 id="sizing">How to size the cation resin bed in a DM plant</h2>

<p>Once you know the water, sizing the cation resin for DM plant duty comes down to a simple balance: the resin’s operating capacity against the ionic load per cycle and the run length you want. In practice you work through:</p>

<ol>

<li><b>Total ionic load</b> — the sum of cations (as CaCO₃ or equivalents) per litre of feedwater, multiplied by the throughput you want between regenerations.</li>

<li><b>Operating capacity</b> — the usable capacity at your chosen regeneration level (always lower than the total exchange capacity on the datasheet; regeneration level is a cost-versus-capacity trade-off).</li>

<li><b>Resin volume</b> — load divided by operating capacity gives the litres of resin; add margin for leakage control and future load growth.</li>

<li><b>Flow rate and bed depth</b> — check service flow (bed volumes per hour) and minimum bed depth so kinetics and distribution are sound; this is where bead size and uniformity matter.</li>

</ol>

<p>Higher regeneration levels buy more usable capacity from the same resin but cost more acid; lower levels save acid but shorten runs and can raise leakage. The right point depends on your acid cost, your outlet spec and how much downtime a regeneration costs you. Share your numbers and our technical team will run this balance with you rather than leaving it to a rule of thumb.</p>

<h2 id="grade">Which Toyota Chemical Industries cation resin for your DM plant?</h2>

<p>Once you know your water and duty, matching to a grade is straightforward. For the DM cation stage and its neighbours, the AGRION cation resin for DM plant options are:</p>

<div className="spectbl"><table><thead><tr><th>Duty</th><th>AGRION grade</th></tr></thead><tbody>

<tr><td>Standard two-bed DM cation stage (hydrogen form)</td><td>AGRION C-100 H</td></tr>

<tr><td>High-capacity sodium-cycle duty</td><td>AGRION C-100 Na</td></tr>

<tr><td>Dealkalisation ahead of the SAC bed (high alkalinity)</td><td>AGRION WC-50 (weak acid cation)</td></tr>

<tr><td>Heavy-metal removal, condensate polishing or ZLD (macroporous)</td><td>AGRION C-100 MP</td></tr>

<tr><td>Standard water softening (sodium form)</td><td>AGRION C-60 / C-80</td></tr>

</tbody></table></div>

<p>For the great majority of two-bed demineralisers, AGRION C-100 H is the cation resin for DM plant service you will specify, paired with a Type 1 strong base anion such as AGRION A-400 and, where high purity is needed, an AGRION MB-1151 mixed bed for polishing. See the full range and each grade’s key data on the <Link to="/products/cationexchangeresins">cation exchange resins</Link> page, the anion side on the <Link to="/products/anionexchangeresins">anion exchange resins</Link> page, and how the whole train fits together on the <Link to="/applications/dm-plant-resin">DM plant</Link> application page.</p>

<div className="imgph">
  <img
    src={cationSelectionImage}
    alt="industrial DM plant ion exchange vessels"
    loading="lazy"
  />
</div>

<h2 id="operate">Cation resin regeneration &amp; operating conditions in a DM plant</h2>

<p>Selecting the grade is only half the job; how you run and regenerate it decides whether it delivers its rated life. A cation resin for DM plant service is regenerated with acid — hydrochloric or sulphuric — on the hydrogen cycle. A few operating points protect capacity and outlet quality:</p>

<ul>

<li><b>Consistent regeneration.</b> A steady acid dose and contact time keep operating capacity and leakage stable cycle after cycle; erratic regeneration is a common cause of drifting outlet conductivity. Our <Link to="/blog/resin-regeneration-best-practices">regeneration best-practices guide</Link> covers this in detail.</li>

<li><b>Watch sodium leakage.</b> Rising sodium in the cation effluent is the early warning that regeneration is inadequate or the resin is ageing.</li>

<li><b>Protect against oxidants.</b> Free chlorine in the feed slowly degrades the resin; remove it upstream to preserve capacity and bead integrity.</li>

<li><b>Mind the temperature limit.</b> Stay within the grade’s rated operating temperature, and remember the anion downstream usually sets the tighter limit.</li>

</ul>

<p>Run well, a cation charge lasts for years; run hard or fed with chlorine, it fails early. Knowing when a change is due is its own skill — see <Link to="/blog/dm-plant-resin-replacement-guide">DM plant resin replacement: when and how to change resin</Link>.</p>

<h2 id="equiv">Match your DM plant cation resin to a Toyota Chemical Industries equivalent</h2>

<p>If you already run a DM plant and simply need to replace the cation resin, you do not have to re-engineer anything. Match the new cation resin for DM plant service on three points and it will drop straight into the same vessel:</p>

<ol>

<li><b>Ionic form</b> — hydrogen form for a DM cation stage.</li>

<li><b>Total exchange capacity</b> — equal or higher, so run length is maintained or improved.</li>

<li><b>Bead size</b> — comparable, so pressure drop, distribution and backwash behaviour stay the same.</li>

</ol>

<p>Share the grade you run today, or its technical data sheet, and our team will confirm the equivalent AGRION grade — there is no need to name a competitor’s brand for us to match on specifications. Matching on the numbers is faster and more reliable than matching on a name, and it is exactly how a like-for-like replacement should be done.</p>

<h2 id="mistakes">Common mistakes when selecting a cation resin for a DM plant</h2>

<p>Most cation-selection problems come down to a handful of avoidable errors:</p>

<ul>

<li><b>Sizing on hardness alone.</b> Total cations, including sodium and potassium, set the real load — hardness alone under-sizes the bed.</li>

<li><b>Ordering the wrong form.</b> A softener grade (sodium form) is not a DM cation grade (hydrogen form); the two are not interchangeable off the shelf.</li>

<li><b>Ignoring alkalinity.</b> High alkalinity without a weak acid cation stage means high acid bills for the life of the plant.</li>

<li><b>Skipping oxidant removal.</b> Feeding chlorine to the cation bed quietly destroys capacity and shortens life.</li>

<li><b>Chasing the cheapest capacity.</b> A fractionally cheaper grade that fouls or breaks down early costs more over the cycle than the right cation resin for DM plant duty at a fair price.</li>

</ul>

<p>Avoid these five and you avoid most of the reasons DM plants run short, leak sodium or need premature resin changes.</p>

<h2 id="checklist">Cation resin for DM plant: a quick selection checklist</h2>

<p>Before you place an order for a cation resin for DM plant service, run through this short checklist. If you can answer all seven, you have enough to specify the grade with confidence:</p>

<ol>

<li>Do you have a full ionic feedwater analysis — not just a hardness figure?</li>

<li>What is your total cation load, including sodium and potassium?</li>

<li>Is alkalinity high enough to justify a weak acid cation stage?</li>

<li>Is free chlorine or another oxidant present, and is it removed upstream?</li>

<li>What outlet quality (conductivity, sodium leakage) does the process demand?</li>

<li>What regeneration level and run length balance your acid cost against capacity?</li>

<li>If replacing, do you have the current resin’s form, capacity and bead size?</li>

</ol>

<p>Answer those and the right cation resin for DM plant duty almost picks itself — and if any answer is uncertain, that is exactly where a quick conversation with our technical team saves a costly mis-specification.</p>

<div className="artcta">

<h3>Not sure which cation grade fits your DM plant?</h3>

<p>Send us your feedwater analysis and outlet spec and we’ll recommend the cation grade — and attach its TDS.</p>

<Link className="btn btn-green" to="/contact">Ask our technical team</Link>

<a className="btn btn-wa" href="https://wa.me/919898701010">WhatsApp us</a>

</div>

<h2 id="faq">Cation resin for DM plant: frequently asked questions</h2>

<div className="faq" style={{marginTop: '12px'}}>

<details open=""><summary><h3>Which cation resin is used in a DM plant?</h3></summary><p>A strong acid cation resin in the hydrogen form — for example AGRION C-100 H. On high-alkalinity feedwater, a weak acid cation resin (AGRION WC-50) is added ahead of it to cut acid consumption.</p></details>

<details><summary><h3>How do I size the cation stage?</h3></summary><p>Size it on total cations (hardness plus sodium and potassium), not hardness alone, using the resin’s total exchange capacity to set run length and vessel volume.</p></details>

<details><summary><h3>What is the difference between DM cation and softener resin?</h3></summary><p>Both are strong acid cation resins, but the DM cation stage runs in the hydrogen form and the softener runs in the sodium form. Ordering the wrong form means an unnecessary conversion.</p></details>

<details><summary><h3>Can I match my current cation resin without naming the brand?</h3></summary><p>Yes. Match on ionic form, total exchange capacity and bead size — or share your current TDS — and we’ll confirm the equivalent AGRION grade for your DM plant cation stage.</p></details>

<details><summary><h3>Does free chlorine affect cation resin for DM plant use?</h3></summary><p>Yes. Free chlorine and other oxidants slowly attack the resin’s crosslinked structure, causing capacity loss and bead breakdown. Remove chlorine upstream to protect the life of the cation resin in your DM plant.</p></details>

<details><summary><h3>How long does a DM plant cation charge last?</h3></summary><p>Run within its rated conditions and regenerated consistently, a cation resin for DM plant service lasts several years. Fouling, oxidant attack or physical breakdown shorten it — rising conductivity or sodium leakage signals a change is due.</p></details>

</div>

</div>

<aside className="rail">

<div className="box enq">

<h4>Ask our technical team</h4>

<p>Share your feedwater and outlet spec — we’ll recommend the cation grade and attach the TDS.</p>

<Link className="btn btn-green" to="/contact">Send an enquiry</Link>

<a className="btn btn-wa" href="https://wa.me/919898701010">WhatsApp us</a>

<a className="btn btn-wa" href="tel:+919016711708">Call +91 90167 11708</a>

</div>

<div className="box"><h4>Related guides</h4><ul>

<li><Link to="/blog/resin-specifications-explained">Exchange capacity, bead size &amp; sieve analysis</Link></li>

<li><Link to="/blog/how-to-read-resin-tds">How to read a resin TDS</Link></li>

<li><Link to="/blog/dm-plant-resin-replacement-guide">When to replace DM plant resin</Link></li>

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

<li><Link to="/applications/dealkalisation-resin">Dealkalisation</Link></li>

</ul></div>

</aside>

</div>

{/* CTA */}

<section className="band" style={{padding: '0'}}><div className="wrap">

<h2>Get the cation grade right the first time.</h2>

<p>Share your feedwater analysis and outlet spec and our technical team will recommend the grade and attach its TDS.</p>

<div className="acts"><Link className="btn btn-green" to="/contact">Send an enquiry</Link><a className="btn btn-wa" href="https://wa.me/919898701010">WhatsApp us</a></div>

</div></section>



</main>



<div className="sticky"><a className="btn btn-white" href="tel:+919016711708">Call</a><a className="btn btn-green" href="https://wa.me/919898701010">WhatsApp</a><Link className="btn btn-ghost" to="/contact">Enquire</Link></div>





    </>

  );

}


