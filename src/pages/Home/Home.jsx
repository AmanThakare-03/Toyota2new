import React, { useEffect } from "react";
import aboutHomeLogo from "../../assets/images/toyota-home-about-logo.png";
import cationCardImage from "../../assets/images/cation exchange resin.jpg";
import anionCardImage from "../../assets/images/anion-exchange-resins.jpg";
import mixedBedCardImage from "../../assets/images/mixed-bed-resins.jpg";
import softenerCardImage from "../../assets/images/water softner resin.jpg";
import specialtyCardImage from "../../assets/images/speciality resin.jpg";
import dmPlantCardImage from "../../assets/images/Dm plant application.jpg";
import waterSofteningCardImage from "../../assets/images/water softning.jpg";
import mixedBedPolishingCardImage from "../../assets/images/mixed bed condensate polishing.jpg";
import boilerFeedCardImage from "../../assets/images/bolier feed water.jpg";
import dealkalisationCardImage from "../../assets/images/dealkalisation-resin.jpg";
import wastewaterCardImage from "../../assets/images/ETP wastewater.jpg";
import SEO from "../../components/SEO";
import { homeSeo } from "../../seo";

const HOME_MARKUP_TEMPLATE = "\n<a class=\"skip\" href=\"#main\">Skip to content</a>\n\n<main id=\"main\">\n\n  <!-- HERO -->\n  <div class=\"ihero\"><div class=\"wrap\">\n    <span class=\"pill\">Leading Ion Exchange Resin Manufacturers in India Since 1972</span>\n    <h1 style=\"margin-top:20px\">Ion Exchange Resin Manufacturers in India &mdash; <span class=\"accent\">Cation, Anion &amp; Mixed Bed Resins</span></h1>\n    <p class=\"sub\">Toyota Chemical Industries &mdash; leading ion exchange resin manufacturers in India since 1972, supplying cation, anion and mixed bed resins for DM plants, water softeners and industrial water treatment.</p>\n    <div class=\"badges\" style=\"margin-top:26px\"><span>Full range &middot; Cation, anion &amp; mixed bed</span><span>ISO 9001:2015 &amp; ISO 14001:2015</span><span>25 L&ndash;bulk &middot; any volume</span></div>\n    <div class=\"cta\" style=\"margin-top:24px\"><a class=\"btn btn-green\" href=\"/products\">Explore Products</a><a class=\"btn btn-wa\" href=\"/contact\">Contact Us</a></div>\n  </div></div>\n\n  <!-- STAT STRIP -->\n  <div class=\"stats\"><div class=\"in\">\n    <div><b>50+</b><span>Years of Excellence</span></div>\n    <div><b>500+</b><span>Satisfied Clients</span></div>\n    <div><b>10+</b><span>Countries Served</span></div>\n  </div></div>\n\n  <!-- ABOUT US -->\n  <section><div class=\"wrap about\">\n    <div>\n      <p class=\"eyebrow\">About Us</p>\n      <h2 style=\"margin-top:8px\">Pioneering Ion Exchange Resin Technology Since 1972</h2>\n      <p style=\"margin-top:16px\">Toyota Chemical Industries Pvt. Ltd. stands at the forefront of ion exchange resin manufacturing in India. Our facility in Vapi, Gujarat combines traditional expertise with modern technology to produce premium quality cation exchange resins, anion exchange resins and mixed bed resins.</p>\n      <p>From DM plants and water softeners to industrial water treatment, our ion exchange resins are trusted by leading companies for water treatment, demineralisation and purification across industries.</p>\n      <a class=\"btn btn-navy\" href=\"/about\" style=\"margin-top:8px\">Learn More About Us</a>\n    </div>\n    <aside class=\"aboutbox\"><img src=\"__ABOUT_HOME_LOGO__\" alt=\"Toyota Chemical Industries Private Limited — Ion Exchangers\"><div class=\"yrs\">50+ Years of Excellence</div></aside>\n  </div></section>\n\n  <!-- WHY CHOOSE US -->\n  <section class=\"tint\"><div class=\"wrap\">\n    <div class=\"center\"><p class=\"eyebrow\">Why Choose Us</p><h2 style=\"margin-top:8px\">Excellence in Every Resin</h2><p class=\"lead\" style=\"margin:12px auto 0\">We combine decades of expertise with modern technology to deliver ion exchange resins that meet the highest industry standards.</p></div>\n    <div class=\"why4\">\n      <div class=\"wc\"><div class=\"ic\">&#128167;</div><h3>DM Plant &amp; Water Treatment</h3><p>High-performance ion exchange resins for demineralisation plants, industrial water purification and treatment processes.</p></div>\n      <div class=\"wc\"><div class=\"ic\">&#128737;</div><h3>ISO 9001 &amp; 14001 Certified</h3><p>ISO 9001:2015 quality and ISO 14001:2015 environmental management, with rigorous control ensuring premium cation and anion exchange resins.</p></div>\n      <div class=\"wc\"><div class=\"ic\">&#127942;</div><h3>Industry Leading Since 1972</h3><p>Trusted by leading industries across India for consistent, reliable ion exchange resin products for over 50 years.</p></div>\n      <div class=\"wc\"><div class=\"ic\">&#127470;&#127475;</div><h3>Made in India</h3><p>Proudly manufactured at our facility in Vapi, Gujarat &mdash; supplying water treatment resins nationwide.</p></div>\n    </div>\n  </div></section>\n\n  <!-- PRODUCTS -->\n  <section><div class=\"wrap\">\n    <div class=\"sec-top\"><div><p class=\"eyebrow\">Our resins</p><h2 style=\"margin-top:8px\">Ion exchange resins we manufacture</h2></div><a class=\"viewall\" href=\"/products\">All products &rarr;</a></div>\n    <div class=\"isec-grid\" style=\"margin-top:24px\">\n      <a class=\"isec image-card\" href=\"/products/cationexchangeresins\"><img class=\"card-bg\" src=\"__CATION_CARD__\" alt=\"Cation exchange resins\"><span class=\"k\">Products</span><b>Cation Exchange Resins</b><span class=\"d\">Strong &amp; weak acid cation resins for softening and DM plants.</span><span class=\"go\">View range &rarr;</span></a>\n      <a class=\"isec image-card\" href=\"/products/anionexchangeresins\"><img class=\"card-bg\" src=\"__ANION_CARD__\" alt=\"Anion exchange resins\"><span class=\"k\">Products</span><b>Anion Exchange Resins</b><span class=\"d\">Type 1 &amp; Type 2 strong base and weak base anion resins.</span><span class=\"go\">View range &rarr;</span></a>\n      <a class=\"isec image-card\" href=\"/products/mixedbedexchangeresin\"><img class=\"card-bg\" src=\"__MIXED_BED_CARD__\" alt=\"Mixed bed resins\"><span class=\"k\">Products</span><b>Mixed Bed Resins</b><span class=\"d\">Ready-mixed resin for polishing to ultrapure quality.</span><span class=\"go\">View range &rarr;</span></a>\n      <a class=\"isec image-card\" href=\"/products/watersoftenerresins\"><img class=\"card-bg\" src=\"__SOFTENER_CARD__\" alt=\"Water softener resins\"><span class=\"k\">Products</span><b>Water Softener Resins</b><span class=\"d\">Sodium-cycle grades that remove hardness.</span><span class=\"go\">View range &rarr;</span></a>\n      <a class=\"isec image-card\" href=\"/products/specialtyresins\"><img class=\"card-bg\" src=\"__SPECIALTY_CARD__\" alt=\"Specialty resins\"><span class=\"k\">Products</span><b>Specialty Resins</b><span class=\"d\">Chelating and indicator resins, made to requirement.</span><span class=\"go\">View range &rarr;</span></a>\n      </div>\n  </div></section>\n\n  <!-- INDUSTRIES -->\n  <section class=\"tint\"><div class=\"wrap\">\n    <div class=\"sec-top\"><div><p class=\"eyebrow\">Industries we serve</p><h2 style=\"margin-top:8px\">Ion exchange resins across Indian industry</h2></div><a class=\"viewall\" href=\"/industries\">All industries &rarr;</a></div>\n    <p class=\"lead\">Each sector&rsquo;s water problems mapped to the resins that solve them.</p>\n    <div class=\"isec-grid\" style=\"margin-top:20px\">\n      <a class=\"isec image-card\" href=\"/industries/power-thermal-industries\"><img class=\"card-bg\" src=\"https://images.unsplash.com/photo-1773517459626-f468797f22cc?auto=format&amp;fit=crop&amp;w=1200&amp;q=80\" alt=\"Power and thermal plant industrial machinery\"><span class=\"k\">Industry</span><b>Power / Thermal Plants</b><span class=\"d\">Boiler feed, DM and condensate polishing.</span><span class=\"go\">Explore sector &rarr;</span></a>\n      <a class=\"isec image-card\" href=\"/industries/suger-refinery-industries\"><img class=\"card-bg\" src=\"https://images.unsplash.com/photo-1676035970014-1309dbbc3c6c?auto=format&amp;fit=crop&amp;w=1200&amp;q=80\" alt=\"Sugar processing factory\"><span class=\"k\">Industry</span><b>Sugar Processing</b><span class=\"d\">Decolourisation, softening and demineralisation.</span><span class=\"go\">Explore sector &rarr;</span></a>\n      <a class=\"isec image-card\" href=\"/industries/textile-industries\"><img class=\"card-bg\" src=\"https://images.unsplash.com/photo-1741176505800-caaa3a52631a?auto=format&amp;fit=crop&amp;w=1200&amp;q=80\" alt=\"Textile manufacturing and dye industry\"><span class=\"k\">Industry</span><b>Textile &amp; Dye</b><span class=\"d\">Soft water for dyeing, boiler feed and effluent.</span><span class=\"go\">Explore sector &rarr;</span></a>\n      <a class=\"isec image-card\" href=\"/industries/chemicalindustries\"><img class=\"card-bg\" src=\"https://images.unsplash.com/photo-1636747423727-2d39d0aa9796?auto=format&amp;fit=crop&amp;w=1200&amp;q=80\" alt=\"Chemical processing plant\"><span class=\"k\">Industry</span><b>Chemical &amp; Intermediates</b><span class=\"d\">Process DM, heavy-metal removal and ZLD.</span><span class=\"go\">Explore sector &rarr;</span></a>\n      <a class=\"isec image-card\" href=\"/industries/paper-pulp-industries\"><img class=\"card-bg\" src=\"https://images.unsplash.com/photo-1564038057948-09f845445508?auto=format&amp;fit=crop&amp;w=1200&amp;q=80\" alt=\"Paper and pulp mill\"><span class=\"k\">Industry</span><b>Paper &amp; Pulp</b><span class=\"d\">Process water softening, DM and condensate polishing.</span><span class=\"go\">Explore sector &rarr;</span></a>\n      <a class=\"isec image-card\" href=\"/industries/food-beverage-industries\"><img class=\"card-bg\" src=\"https://images.unsplash.com/photo-1530037335614-e68828dcf258?auto=format&amp;fit=crop&amp;w=1200&amp;q=80\" alt=\"Food and beverage production facility\"><span class=\"k\">Industry</span><b>Food &amp; Beverage</b><span class=\"d\">Softening, DM, decolourisation and polishing.</span><span class=\"go\">Explore sector &rarr;</span></a>\n      </div>\n  </div></section>\n\n  <!-- APPLICATIONS -->\n  <section><div class=\"wrap\">\n    <div class=\"sec-top\"><div><p class=\"eyebrow\">Applications we serve</p><h2 style=\"margin-top:8px\">Water treatment applications, explained</h2></div><a class=\"viewall\" href=\"/applications\">All applications &rarr;</a></div>\n    <p class=\"lead\">How each process works &mdash; and the AGRION resins that build it.</p>\n    <div class=\"isec-grid\" style=\"margin-top:20px\">\n      <a class=\"isec image-card\" href=\"/applications/dm-plant-resin\"><img class=\"card-bg\" src=\"__DM_PLANT_CARD__\" alt=\"\"><span class=\"k\">Application</span><b>DM Plant / Demineralisation</b><span class=\"d\">Cation, anion and mixed bed resins that demineralise water.</span><span class=\"go\">How it works &rarr;</span></a>\n      <a class=\"isec image-card\" href=\"/applications/water-softener-resin\"><img class=\"card-bg\" src=\"__WATER_SOFTENING_CARD__\" alt=\"\"><span class=\"k\">Application</span><b>Water Softening</b><span class=\"d\">Sodium-cycle softening that removes hardness.</span><span class=\"go\">How it works &rarr;</span></a>\n      <a class=\"isec image-card\" href=\"/applications/mixed-bed-condensate-polishing\"><img class=\"card-bg\" src=\"__MIXED_BED_POLISHING_CARD__\" alt=\"\"><span class=\"k\">Application</span><b>Mixed Bed / Condensate Polishing</b><span class=\"d\">Polishing DM water and condensate to ultrapure.</span><span class=\"go\">How it works &rarr;</span></a>\n      <a class=\"isec image-card\" href=\"/applications/boiler-feed-water-treatment\"><img class=\"card-bg\" src=\"__BOILER_FEED_CARD__\" alt=\"\"><span class=\"k\">Application</span><b>Boiler Feed Water</b><span class=\"d\">Softening, dealkalisation, DM and condensate polishing.</span><span class=\"go\">How it works &rarr;</span></a>\n      <a class=\"isec image-card\" href=\"/applications/dealkalisation-resin\"><img class=\"card-bg\" src=\"__DEALKALISATION_CARD__\" alt=\"\"><span class=\"k\">Application</span><b>Dealkalisation</b><span class=\"d\">Weak acid cation removal of alkalinity-linked hardness.</span><span class=\"go\">How it works &rarr;</span></a>\n      <a class=\"isec image-card\" href=\"/applications/etp-wastewater-treatment\"><img class=\"card-bg\" src=\"__WASTEWATER_CARD__\" alt=\"\"><span class=\"k\">Application</span><b>ETP / Wastewater</b><span class=\"d\">Heavy-metal removal, organic removal and water reuse / ZLD.</span><span class=\"go\">How it works &rarr;</span></a>\n      </div>\n  </div></section>\n\n  <!-- BLOG -->\n  <section class=\"tint\"><div class=\"wrap\">\n    <div class=\"sec-top\"><div><p class=\"eyebrow\">Knowledge Hub</p><h2 style=\"margin-top:8px\">Engineer-first guides on ion exchange resins</h2></div><a class=\"viewall\" href=\"/blog\">All guides &rarr;</a></div>\n    <p class=\"lead\">Practical guides on selecting, running and troubleshooting resins &mdash; for plant engineers and purchase managers.</p>\n    <div class=\"isec-grid\" style=\"margin-top:20px\">\n      <a class=\"isec\" href=\"/blog/how-to-select-cation-resin-dm-plant\"><span class=\"k\">Selection guide</span><b>How to Select the Right Cation Resin for Your DM Plant</b><span class=\"go\">Read guide &rarr;</span></a>\n      <a class=\"isec\" href=\"/blog/water-softener-not-removing-hardness\"><span class=\"k\">Troubleshooting</span><b>Why Your Water Softener Stopped Removing Hardness</b><span class=\"go\">Read guide &rarr;</span></a>\n      <a class=\"isec\" href=\"/blog/resin-specifications-explained\"><span class=\"k\">Technical</span><b>Total Exchange Capacity, Bead Size &amp; Sieve Analysis Explained</b><span class=\"go\">Read guide &rarr;</span></a>\n      </div>\n  </div></section>\n\n  <!-- REVIEWS -->\n  <section><div class=\"wrap\">\n    <div class=\"center\"><p class=\"eyebrow\">Customer Reviews</p><h2 style=\"margin-top:8px\">Trusted by India&rsquo;s Leading Industries</h2><p class=\"lead\" style=\"margin:12px auto 0\">Power plants, sugar mills, chemical manufacturers and water-treatment OEMs trust Toyota Chemical Industries for ion exchange resins.</p></div>\n    <div class=\"revs\">\n      <div class=\"rev\"><div class=\"stars\">&#9733;&#9733;&#9733;&#9733;&#9733;</div><p>&ldquo;Toyota Chemical Industries has been our trusted supplier of ion exchange resins for over a decade. Their C-100 H and A-400 resins consistently deliver superior performance in our DM plant &mdash; the best ion exchange resin manufacturer in India by a wide margin.&rdquo;</p><div class=\"who\"><b>Verified Industrial Customer</b><span>Plant Manager</span><span class=\"ind\">Chemical Industry</span></div></div>\n      <div class=\"rev\"><div class=\"stars\">&#9733;&#9733;&#9733;&#9733;&#9733;</div><p>&ldquo;We have been sourcing mixed bed resin MB-1151 from Toyota Chemicals for our boiler feed water treatment. The quality is consistent, lead times are predictable, and their technical team is exceptional &mdash; highly recommended for industrial water treatment.&rdquo;</p><div class=\"who\"><b>Verified Industrial Customer</b><span>Production Head</span><span class=\"ind\">Power Generation Industry</span></div></div>\n      <div class=\"rev\"><div class=\"stars\">&#9733;&#9733;&#9733;&#9733;&#9733;</div><p>&ldquo;The cation and anion exchange resins from Toyota Chemical Industries have transformed our process water quality. Their WC-50 weak acid cation resin is perfect for dealkalisation &mdash; excellent value among Indian ion exchange resin suppliers.&rdquo;</p><div class=\"who\"><b>Verified Industrial Customer</b><span>Procurement Manager</span><span class=\"ind\">Sugar Manufacturing Industry</span></div></div>\n    </div>\n  </div></section>\n\n  <!-- FAQ -->\n  <section class=\"tint\"><div class=\"wrap\">\n    <div class=\"center\"><p class=\"eyebrow\">FAQ</p><h2 style=\"margin-top:8px\">Frequently Asked Questions About Ion Exchange Resins</h2></div>\n    <div class=\"faq\">\n      <details open><summary><h3>Who are the leading ion exchange resin manufacturers in India?</h3></summary><p>Toyota Chemical Industries, established in 1972 in GIDC Vapi, Gujarat, is among India&rsquo;s most established ion exchange resin manufacturers &mdash; producing cation, anion, mixed bed and specialty resins under ISO 9001:2015 and ISO 14001:2015.</p></details>\n      <details><summary><h3>What types of ion exchange resins does Toyota Chemical manufacture?</h3></summary><p>Strong and weak acid cation resins, Type 1 and Type 2 strong base and weak base anion resins, ready-mixed mixed bed resin, water softener resins and specialty chelating and indicator resins.</p></details>\n      <details><summary><h3>Where is your ion exchange resin manufacturing facility located?</h3></summary><p>Our polymerisation plant is in GIDC Vapi, Gujarat, with a marketing office in Mumbai. We supply across India and beyond.</p></details>\n      <details><summary><h3>Are Toyota Chemical Industries ISO certified?</h3></summary><p>Yes &mdash; we are ISO 9001:2015 (quality management) and ISO 14001:2015 (environmental management) certified, with a technical data sheet for every grade.</p></details>\n      <details><summary><h3>How is ion exchange resin priced in India?</h3></summary><p>Pricing depends on the grade, ionic form and quantity. We offer direct-from-manufacturer supply &mdash; share the grade and volume you need and our team will send a quotation.</p></details>\n      <details><summary><h3>Do you deliver ion exchange resins across India?</h3></summary><p>Yes. From our Vapi factory we supply industrial customers across India, from 25-litre bags to bulk, with reliable lead times and secure packing.</p></details>\n      <details><summary><h3>Which industries use Toyota Chemical&rsquo;s ion exchange resins?</h3></summary><p>Power and thermal plants, sugar processing, textile and dye, chemical and intermediates, paper and pulp, and food and beverage, among other water-treatment users.</p></details>\n    </div>\n  </div></section>\n\n  <!-- PAN-INDIA SUPPLY -->\n  <section><div class=\"wrap\">\n    <div class=\"center\"><p class=\"eyebrow\">Pan-India supply</p><h2 style=\"margin-top:8px\">Reliable ion exchange resin supply, across India and beyond</h2><p class=\"lead\" style=\"margin:12px auto 0\">Manufactured at our GIDC Vapi plant and delivered nationwide &mdash; with dependable lead times and secure packing from 25-litre bags to bulk.</p></div>\n    <div class=\"supply\">\n      <div class=\"scard\"><div class=\"si\">&#127981;</div><h3>Made in Vapi, Gujarat</h3><p>Produced in-house at our own polymerisation facility, so quality and supply stay in our control.</p></div>\n      <div class=\"scard\"><div class=\"si\">&#128666;</div><h3>Delivered nationwide</h3><p>Serving industrial customers across Mumbai, Delhi, Bengaluru, Chennai, Hyderabad, Kolkata, Pune, Ahmedabad, Surat, Vadodara and beyond.</p></div>\n      <div class=\"scard\"><div class=\"si\">&#128230;</div><h3>Any volume, packed securely</h3><p>From 25-litre bags to bulk, with reliable lead times and door delivery to your plant site.</p></div>\n      <div class=\"scard\"><div class=\"si\">&#127760;</div><h3>Exports on enquiry</h3><p>We also supply international customers &mdash; share your requirement and destination for a quote.</p></div>\n    </div>\n  </div></section>\n\n  <!-- CTA -->\n  <section class=\"band\" style=\"padding:0\"><div class=\"wrap\">\n    <h2>Ready to Transform Your Water Treatment Process?</h2>\n    <p>Get in touch with our experts to find the right ion exchange resin for your DM plant, water softener or industrial water treatment needs.</p>\n    <div class=\"acts\"><a class=\"btn btn-green\" href=\"/contact\">Contact Sales Team</a><a class=\"btn btn-wa\" href=\"https://wa.me/919898701010\">WhatsApp us</a></div>\n  </div></section>\n\n\n\n</main>\n\n\n\n";
const HOME_MARKUP = HOME_MARKUP_TEMPLATE
  .replaceAll("__ABOUT_HOME_LOGO__", aboutHomeLogo)
  .replaceAll("__CATION_CARD__", cationCardImage)
  .replaceAll("__ANION_CARD__", anionCardImage)
  .replaceAll("__MIXED_BED_CARD__", mixedBedCardImage)
  .replaceAll("__SOFTENER_CARD__", softenerCardImage)
  .replaceAll("__SPECIALTY_CARD__", specialtyCardImage)
  .replaceAll("__DM_PLANT_CARD__", dmPlantCardImage)
  .replaceAll("__WATER_SOFTENING_CARD__", waterSofteningCardImage)
  .replaceAll("__MIXED_BED_POLISHING_CARD__", mixedBedPolishingCardImage)
  .replaceAll("__BOILER_FEED_CARD__", boilerFeedCardImage)
  .replaceAll("__DEALKALISATION_CARD__", dealkalisationCardImage)
  .replaceAll("__WASTEWATER_CARD__", wastewaterCardImage)
  ;

export default function Home() {
  useEffect(() => {
    const root = document.querySelector(".toyota-home-page");
    const nav = root?.querySelector("header nav");

    const closeMenu = (event) => {
    };

    nav?.addEventListener("click", closeMenu);

    return () => {
      nav?.removeEventListener("click", closeMenu);
    };
  }, []);

  return (
    <div className="toyota-home-page min-h-screen bg-[#F6F9FC]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..800;1,400..800&family=Inter:wght@400;500;600;700;800&display=swap');

        .toyota-home-page {
          --navy: #0A2C4B;
          --navy-deep: #06182B;
          --royal: #1868A8;
          --gold: #B27B34;
          --gold-light: #E5A855;
          --ice: #F6F9FC;
          --white: #FFFFFF;
          --ink: #1A1C1D;
          --muted: #5B6570;
          --line: rgba(10, 44, 75, 0.10);
          --line-gold: rgba(178, 123, 52, 0.28);
          --shadow: 0 24px 60px -28px rgba(10, 44, 75, 0.24);
          --wrap: 1440px;
          font-family: "Inter", sans-serif;
          background: var(--ice);
          color: var(--ink);
          line-height: 1.7;
          overflow-x: hidden;
          -webkit-font-smoothing: antialiased;
        }

        .toyota-home-page *,
        .toyota-home-page *::before,
        .toyota-home-page *::after {
          box-sizing: border-box;
        }

        .toyota-home-page img {
          display: block;
          max-width: 100%;
        }

        .toyota-home-page a {
          text-decoration: none;
        }

        .toyota-home-page .wrap {
          width: 100%;
          max-width: var(--wrap);
          margin: 0 auto;
          padding-left: 80px;
          padding-right: 80px;
        }

        .toyota-home-page h1,
        .toyota-home-page h2 {
          font-family: "EB Garamond", serif;
          color: var(--navy);
          letter-spacing: -0.025em;
        }

        .toyota-home-page h1 {
          font-size: clamp(3rem, 6vw, 5.6rem);
          line-height: 1.02;
          font-weight: 600;
        }

        .toyota-home-page h2 {
          font-size: clamp(2.2rem, 4vw, 3.65rem);
          line-height: 1.08;
          font-weight: 600;
        }

        .toyota-home-page h3 {
          color: var(--navy);
          font-weight: 700;
        }

        .toyota-home-page .eyebrow {
          margin: 0;
          color: var(--gold);
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 0.28em;
          text-transform: uppercase;
        }

        .toyota-home-page .lead {
          max-width: 66ch;
          margin-top: 15px;
          color: var(--muted);
          font-size: 0.98rem;
          line-height: 1.8;
        }

        .toyota-home-page .skip {
          position: fixed;
          left: -9999px;
          top: 12px;
          z-index: 999;
        }

        .toyota-home-page .skip:focus {
          left: 12px;
          padding: 10px 16px;
          background: var(--navy);
          color: #fff;
        }

        /* BUTTONS - NO HOVER COLOR CHANGE */
        .toyota-home-page .btn {
          min-height: 48px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 13px 24px;
          border: 1px solid transparent;
          border-radius: 0;
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          cursor: pointer;
          clip-path: polygon(0 0, 92% 0, 100% 20%, 100% 100%, 8% 100%, 0 80%);
        }

        .toyota-home-page .btn-green,
        .toyota-home-page .btn-navy {
          background: var(--gold);
          color: #fff;
          box-shadow: 0 16px 32px -18px rgba(178, 123, 52, 0.38);
        }

        .toyota-home-page .btn-ghost {
          background: #fff;
          color: var(--navy);
          border-color: rgba(10, 44, 75, 0.18);
        }

        .toyota-home-page .btn-wa {
          background: transparent;
          color: #fff;
          border-color: rgba(255, 255, 255, 0.48);
        }

        .toyota-home-page .btn-white {
          background: #fff;
          color: var(--navy);
        }

        /* HERO */
        .toyota-home-page .ihero {
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(circle at 84% 20%, rgba(178, 123, 52, 0.12), transparent 28%),
            radial-gradient(rgba(10, 44, 75, 0.055) 1px, transparent 1px),
            #fff;
          background-size: auto, 40px 40px, auto;
          border-bottom: 1px solid var(--line);
          color: var(--navy);
        }

        .toyota-home-page .ihero::before {
          content: "";
          position: absolute;
          top: 14%;
          left: 7%;
          width: 120px;
          height: 120px;
          border: 1px solid rgba(178, 123, 52, 0.30);
        }

        .toyota-home-page .ihero::after {
          content: "";
          position: absolute;
          right: 7%;
          bottom: 13%;
          width: 175px;
          height: 175px;
          border: 1px solid rgba(10, 44, 75, 0.13);
        }

        .toyota-home-page .ihero .wrap {
          position: relative;
          z-index: 2;
          max-width: 1180px;
          padding-top: 112px;
          padding-bottom: 112px;
          text-align: center;
        }

        .toyota-home-page .ihero .pill {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 9px 17px;
          background: rgba(255, 255, 255, 0.86);
          border: 1px solid var(--line-gold);
          color: var(--gold);
          font-size: 0.67rem;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .toyota-home-page .ihero .pill::before {
          content: "";
          width: 30px;
          height: 1px;
          background: var(--gold);
        }

        .toyota-home-page .ihero h1 {
          max-width: 17ch;
          margin-left: auto !important;
          margin-right: auto !important;
        }

        .toyota-home-page .ihero h1 .accent {
          color: var(--gold);
          -webkit-text-fill-color: var(--gold);
          font-style: italic;
          font-weight: 500;
        }

        .toyota-home-page .ihero .sub {
          max-width: 70ch;
          margin-left: auto;
          margin-right: auto;
          color: var(--muted);
          font-size: 1.04rem;
          line-height: 1.85;
        }

        .toyota-home-page .ihero .badges,
        .toyota-home-page .ihero .cta {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 11px;
        }

        .toyota-home-page .ihero .badges span {
          padding: 8px 14px;
          background: rgba(246, 249, 252, 0.90);
          border: 1px solid var(--line);
          color: var(--navy);
          font-size: 0.72rem;
        }

        .toyota-home-page .ihero .btn-wa {
          background: var(--navy);
          border-color: var(--navy);
          color: #fff;
        }

        /* STATS */
        .toyota-home-page .stats {
          background: #fff;
          color: var(--navy);
          border-bottom: 1px solid var(--line);
        }

        .toyota-home-page .stats .in {
          max-width: var(--wrap);
          margin: 0 auto;
          padding: 42px 80px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0;
          text-align: center;
        }

        .toyota-home-page .stats .in > div {
          padding: 10px 24px;
          border-right: 1px solid var(--line);
        }

        .toyota-home-page .stats .in > div:last-child {
          border-right: 0;
        }

        .toyota-home-page .stats b {
          display: block;
          color: var(--navy);
          font-family: "EB Garamond", serif;
          font-size: 2.65rem;
          font-weight: 600;
          line-height: 1;
        }

        .toyota-home-page .stats span {
          display: block;
          margin-top: 9px;
          color: var(--muted);
          font-size: 0.68rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        /* GLOBAL SECTIONS */
        .toyota-home-page main section {
          padding: 126px 0;
          background: #fff;
        }

        .toyota-home-page main section.tint {
          background:
            radial-gradient(rgba(10, 44, 75, 0.045) 1px, transparent 1px),
            var(--ice);
          background-size: 42px 42px;
          border-top: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
        }

        .toyota-home-page .center {
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
        }

        .toyota-home-page .sec-top {
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 30px;
          flex-wrap: wrap;
          margin-bottom: 28px;
        }

        .toyota-home-page .viewall {
          padding-bottom: 5px;
          color: var(--gold);
          border-bottom: 1px solid var(--line-gold);
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.13em;
          text-transform: uppercase;
          white-space: nowrap;
        }

        /* ABOUT */
        .toyota-home-page .about {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 78px;
          align-items: center;
        }

        .toyota-home-page .about p:not(.eyebrow) {
          margin-top: 18px;
          margin-bottom: 0;
          color: var(--muted);
          line-height: 1.85;
        }

        .toyota-home-page .aboutbox {
          position: relative;
          min-height: 355px;
          padding: 42px 46px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: #ffffff;
          color: var(--navy);
          border: 1px solid rgba(10, 44, 75, 0.12);
          box-shadow: var(--shadow);
          clip-path: polygon(0 0, 90% 0, 100% 10%, 100% 100%, 10% 100%, 0 90%);
        }

        .toyota-home-page .aboutbox::before {
          content: "";
          position: absolute;
          inset: 18px;
          border: 1px solid rgba(178, 123, 52, 0.32);
          pointer-events: none;
        }

        .toyota-home-page .aboutbox img {
          position: relative;
          z-index: 1;
          display: block;
          width: min(100%, 430px);
          height: auto;
          max-height: 205px;
          margin: 0 auto 30px;
          padding: 0;
          object-fit: contain;
          object-position: center;
          background: #ffffff;
          filter: none;
        }

        .toyota-home-page .aboutbox .yrs {
          position: relative;
          z-index: 1;
          display: inline-block;
          padding: 14px 20px;
          background: var(--gold);
          color: #fff;
          font-family: "EB Garamond", serif;
          font-size: 1.42rem;
          font-weight: 600;
        }

        /* WHY + SUPPLY */
        .toyota-home-page .why4,
        .toyota-home-page .supply {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          margin-top: 46px;
        }

        .toyota-home-page .wc,
        .toyota-home-page .scard {
          position: relative;
          overflow: hidden;
          min-width: 0;
          padding: 34px 30px;
          background: #fff;
          border: 1px solid var(--line);
          box-shadow: var(--shadow);
          clip-path: polygon(0 0, 92% 0, 100% 8%, 100% 100%, 8% 100%, 0 92%);
        }

        .toyota-home-page .wc::before,
        .toyota-home-page .scard::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 58px;
          background: var(--gold);
        }

        .toyota-home-page .wc .ic,
        .toyota-home-page .scard .si {
          width: 54px;
          height: 54px;
          display: grid;
          place-items: center;
          margin-bottom: 23px;
          background: var(--ice);
          border: 1px solid var(--line);
          color: var(--gold);
          font-size: 1.3rem;
          clip-path: polygon(0 0, 82% 0, 100% 18%, 100% 100%, 0 100%);
        }

        .toyota-home-page .wc h3,
        .toyota-home-page .scard h3 {
          margin: 0 0 11px;
          color: var(--navy);
          font-family: "EB Garamond", serif;
          font-size: 1.43rem;
          line-height: 1.2;
        }

        .toyota-home-page .wc p,
        .toyota-home-page .scard p {
          margin: 0;
          color: var(--muted);
          font-size: 0.88rem;
          line-height: 1.75;
        }

        /* PRODUCTS / INDUSTRIES / APPLICATIONS / BLOG */
        .toyota-home-page .isec-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 26px;
        }

        .toyota-home-page .isec {
          position: relative;
          overflow: hidden;
          min-width: 0;
          min-height: 238px;
          padding: 35px 33px;
          display: flex;
          flex-direction: column;
          background: #fff;
          border: 1px solid var(--line);
          color: var(--ink);
          box-shadow: var(--shadow);
        }

        .toyota-home-page .isec::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: var(--navy);
        }

        .toyota-home-page .isec::after {
          content: "";
          position: absolute;
          right: -32px;
          bottom: -32px;
          width: 92px;
          height: 92px;
          border: 1px solid rgba(178, 123, 52, 0.24);
          transform: rotate(45deg);
          pointer-events: none;
        }

        .toyota-home-page .isec .k {
          margin-bottom: 19px;
          color: var(--gold);
          font-size: 0.64rem;
          font-weight: 800;
          letter-spacing: 0.20em;
          text-transform: uppercase;
        }

        .toyota-home-page .isec b {
          margin-bottom: 13px;
          color: var(--navy);
          font-family: "EB Garamond", serif;
          font-size: 1.52rem;
          line-height: 1.2;
        }

        .toyota-home-page .isec .d {
          flex: 1;
          color: var(--muted);
          font-size: 0.89rem;
          line-height: 1.75;
        }

        .toyota-home-page .isec .go {
          position: relative;
          z-index: 1;
          margin-top: 23px;
          color: var(--gold);
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 0.10em;
          text-transform: uppercase;
        }


        /* Image cards used only for Products and Industries on the home page */
        .toyota-home-page .isec.image-card {
          min-height: 360px;
          justify-content: flex-end;
          padding: 34px 32px 30px;
          border: 0;
          background: var(--navy-deep);
          color: #fff;
          box-shadow: 0 22px 48px -24px rgba(6, 24, 43, 0.55);
          clip-path: polygon(0 0, 92% 0, 100% 8%, 100% 100%, 0 100%);
          isolation: isolate;
        }

        .toyota-home-page .isec.image-card .card-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transform: scale(1.01);
        }

        .toyota-home-page .isec.image-card::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 1;
          width: auto;
          height: auto;
          background: linear-gradient(180deg, rgba(6, 24, 43, 0.08) 20%, rgba(6, 24, 43, 0.52) 58%, rgba(6, 24, 43, 0.94) 100%);
          pointer-events: none;
        }

        .toyota-home-page .isec.image-card::after {
          content: none;
        }

        .toyota-home-page .isec.image-card > .k,
        .toyota-home-page .isec.image-card > b,
        .toyota-home-page .isec.image-card > .d,
        .toyota-home-page .isec.image-card > .go {
          position: relative;
          z-index: 2;
        }


        .toyota-home-page .isec.image-card .k {
          margin-bottom: 8px;
          color: var(--gold-light);
          text-shadow: 0 1px 12px rgba(0,0,0,.35);
        }

        .toyota-home-page .isec.image-card b {
          margin-bottom: 10px;
          color: #fff;
          font-size: 1.7rem;
          text-shadow: 0 2px 16px rgba(0,0,0,.5);
        }

        .toyota-home-page .isec.image-card .d {
          flex: 0 0 auto;
          color: rgba(255,255,255,.88);
          line-height: 1.6;
          text-shadow: 0 1px 10px rgba(0,0,0,.45);
        }

        .toyota-home-page .isec.image-card .go {
          margin-top: 16px;
          color: var(--gold-light);
        }

                /* REVIEWS */
        .toyota-home-page .revs {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 26px;
          margin-top: 46px;
        }

        .toyota-home-page .rev {
          min-width: 0;
          padding: 35px;
          background: #fff;
          border: 1px solid var(--line);
          box-shadow: var(--shadow);
          clip-path: polygon(0 0, 94% 0, 100% 6%, 100% 100%, 6% 100%, 0 94%);
        }

        .toyota-home-page .rev .stars {
          margin-bottom: 19px;
          color: var(--gold);
          font-size: 1rem;
          letter-spacing: 4px;
        }

        .toyota-home-page .rev > p {
          margin: 0 0 25px;
          color: #39434e;
          font-family: "EB Garamond", serif;
          font-size: 1.16rem;
          font-style: italic;
          line-height: 1.65;
        }

        .toyota-home-page .rev .who {
          padding-top: 18px;
          display: flex;
          flex-direction: column;
          gap: 3px;
          border-top: 1px solid var(--line);
        }

        .toyota-home-page .rev .who b {
          color: var(--navy);
          font-size: 0.9rem;
        }

        .toyota-home-page .rev .who span {
          color: var(--muted);
          font-size: 0.79rem;
        }

        .toyota-home-page .rev .who .ind {
          color: var(--gold);
          font-weight: 700;
        }

        /* FAQ */
        .toyota-home-page .faq {
          max-width: 980px;
          margin: 42px auto 0;
        }

        .toyota-home-page .faq details {
          margin-top: 15px;
          padding: 0;
          background: rgba(255, 255, 255, 0.86);
          border: 1px solid var(--line);
        }

        .toyota-home-page .faq details[open] {
          background: #fff;
          border-color: var(--line-gold);
          box-shadow: var(--shadow);
        }

        .toyota-home-page .faq summary {
          padding: 24px 28px;
          list-style: none;
          cursor: pointer;
        }

        .toyota-home-page .faq summary::-webkit-details-marker {
          display: none;
        }

        .toyota-home-page .faq summary h3 {
          display: inline;
          margin: 0;
          color: var(--navy);
          font-family: "EB Garamond", serif;
          font-size: 1.27rem;
          font-weight: 600;
        }

        .toyota-home-page .faq summary::after {
          content: "+";
          float: right;
          color: var(--gold);
          font-size: 1.35rem;
        }

        .toyota-home-page .faq details[open] summary::after {
          content: "−";
        }

        .toyota-home-page .faq details > p {
          margin: 0;
          padding: 0 28px 26px;
          color: var(--muted);
          font-size: 0.91rem;
          line-height: 1.8;
        }

        /* CTA BAND */
        .toyota-home-page .band {
          position: relative;
          overflow: hidden;
          background: var(--navy-deep);
          color: #fff;
        }

        .toyota-home-page .band::before {
          content: "";
          position: absolute;
          top: -72px;
          left: -72px;
          width: 225px;
          height: 225px;
          border: 1px solid rgba(229, 168, 85, 0.24);
          transform: rotate(45deg);
        }

        .toyota-home-page .band .wrap {
          position: relative;
          z-index: 1;
          padding-top: 88px;
          padding-bottom: 88px;
          text-align: center;
        }

        .toyota-home-page .band h2 {
          max-width: 22ch;
          margin: 0 auto;
          color: #fff;
        }

        .toyota-home-page .band p {
          max-width: 58ch;
          margin: 18px auto 30px;
          color: #c8d2dc;
          line-height: 1.8;
        }

        .toyota-home-page .band .acts {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 13px;
        }

        @media (max-width: 1320px) {
          .toyota-home-page .wrap {
            padding-left: 30px;
            padding-right: 30px;
          }
        }

        @media (max-width: 1120px) {
          .toyota-home-page .about {
            grid-template-columns: 1fr;
            gap: 54px;
          }

          .toyota-home-page .why4,
          .toyota-home-page .supply {
            grid-template-columns: repeat(2, 1fr);
          }

          .toyota-home-page .isec-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .toyota-home-page .revs {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 720px) {
          .toyota-home-page .wrap {
            padding-left: 24px;
            padding-right: 24px;
          }

          .toyota-home-page .ihero .wrap {
            padding-top: 78px;
            padding-bottom: 82px;
          }

          .toyota-home-page .ihero::before,
          .toyota-home-page .ihero::after {
            opacity: 0.45;
          }

          .toyota-home-page .stats .in {
            grid-template-columns: 1fr;
            padding: 22px 24px;
          }

          .toyota-home-page .stats .in > div {
            padding: 23px 12px;
            border-right: 0;
            border-bottom: 1px solid var(--line);
          }

          .toyota-home-page .stats .in > div:last-child {
            border-bottom: 0;
          }

          .toyota-home-page main section {
            padding: 90px 0;
          }

          .toyota-home-page .why4,
          .toyota-home-page .supply,
          .toyota-home-page .isec-grid {
            grid-template-columns: 1fr;
          }

          .toyota-home-page .aboutbox {
            min-height: 300px;
            padding: 32px 28px;
          }

          .toyota-home-page .aboutbox img {
            width: min(100%, 380px);
            max-height: 180px;
            margin-bottom: 24px;
          }

          .toyota-home-page .isec {
            min-height: auto;
          }

          .toyota-home-page .isec.image-card {
            min-height: 330px;
            padding: 28px 24px 24px;
          }

          .toyota-home-page .sec-top {
            align-items: flex-start;
          }

          .toyota-home-page .band .wrap {
            padding-top: 70px;
            padding-bottom: 70px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .toyota-home-page * {
            scroll-behavior: auto !important;
          }
        }
        }
      `}</style>

      <SEO {...homeSeo} />

      <div dangerouslySetInnerHTML={{ __html: HOME_MARKUP }} />
    </div>
  );
}
