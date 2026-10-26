import { Navigate, Route, Routes } from "react-router";

import {
  INDUSTRY_PATH,
  LEGACY_REDIRECTS,
  PRODUCT_PATH,
} from "../../config/routes";
import MainLayout from "../../components/layout/MainLayout";

import About from "../../pages/About/About";
import Applications from "../../pages/Applications/Applications";
import BoilerFeedWater from "../../pages/Applications/BoilerFeedWater";
import DealkalisationResin from "../../pages/Applications/DealkalisationResign";
import DMPlantResin from "../../pages/Applications/DMPlantresign";
import MixedBedCondensatePolishing from "../../pages/Applications/MixedBedCondensate";
import ETPWastewaterTreatment from "../../pages/Applications/WasteWater";
import WaterSoftening from "../../pages/Applications/WaterSoftening";
import Blog from "../../pages/Blog/Blog";
import BlogPost from "../../pages/Blog/BlogPost";
import Contact from "../../pages/Contact/Contact";
import Home from "../../pages/Home/Home";
import ChemicalIndustries from "../../pages/Industries/Chemical";
import FoodBeverage from "../../pages/Industries/Foodbeverages";
import Industries from "../../pages/Industries/Industries";
import PaperPulp from "../../pages/Industries/Paperpup";
import PowerThermalPlants from "../../pages/Industries/Powerthermalplant";
import SugarProcessing from "../../pages/Industries/Sugar";
import TextileDye from "../../pages/Industries/Textile";
import {
  LegalNotice,
  Partners,
  PrivacyPolicy,
  Resources,
  Sustainability,
} from "../../pages/Info/InfoPages";
import NotFound from "../../pages/NotFound/NotFound";
import Anion from "../../pages/Products/Anion";
import Cation from "../../pages/Products/Cationanion";
import Mixedbed from "../../pages/Products/Mixedbed";
import Product from "../../pages/Products/Product";
import Specialty from "../../pages/Products/Specialty";
import Watersoftener from "../../pages/Products/Watersoftener";
import QualityCertificate from "../../pages/Quality/QualityCertificate";
import Servicearea from "../../pages/About/Servicearea";

// One canonical route per logical page. Every path is read from
// src/config/routes.js, so each URL exists in exactly one place in the code and
// there is never a second component serving the same logical page. Components
// are imported here rather than listed in the config to keep the config free of
// page dependencies.
const PRODUCT_PAGES = {
  [PRODUCT_PATH.cation]: <Cation />,
  [PRODUCT_PATH.anion]: <Anion />,
  [PRODUCT_PATH.mixedBed]: <Mixedbed />,
  [PRODUCT_PATH.waterSoftener]: <Watersoftener />,
  [PRODUCT_PATH.specialty]: <Specialty />,
};

const INDUSTRY_PAGES = {
  [INDUSTRY_PATH.chemical]: <ChemicalIndustries />,
  [INDUSTRY_PATH.foodBeverage]: <FoodBeverage />,
  [INDUSTRY_PATH.paperPulp]: <PaperPulp />,
  [INDUSTRY_PATH.powerThermal]: <PowerThermalPlants />,
  [INDUSTRY_PATH.sugarRefinery]: <SugarProcessing />,
  [INDUSTRY_PATH.textile]: <TextileDye />,
};

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        {/* Main pages */}
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/manufacturers-in-india" element={<About />} />
        <Route path="/service-area" element={<Servicearea />} />
        <Route path="/contact" element={<Contact />} />

        {/* Products hub + canonical category routes */}
        <Route path="/products" element={<Product />} />
        {Object.entries(PRODUCT_PAGES).map(([path, element]) => (
          <Route key={path} path={path} element={element} />
        ))}

        {/* Blog */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />

        {/* Applications */}
        <Route path="/applications" element={<Applications />} />
        <Route path="/applications/water-softener-resin" element={<WaterSoftening />} />
        <Route
          path="/applications/boiler-feed-water-treatment"
          element={<BoilerFeedWater />}
        />
        <Route path="/applications/dm-plant-resin" element={<DMPlantResin />} />
        <Route
          path="/applications/mixed-bed-condensate-polishing"
          element={<MixedBedCondensatePolishing />}
        />
        <Route
          path="/applications/dealkalisation-resin"
          element={<DealkalisationResin />}
        />
        <Route
          path="/applications/etp-wastewater-treatment"
          element={<ETPWastewaterTreatment />}
        />
        <Route path="/applications/ultrapure-water" element={<Applications />} />

        {/* Industries hub + canonical industry routes */}
        <Route path="/industries" element={<Industries />} />
        {Object.entries(INDUSTRY_PAGES).map(([path, element]) => (
          <Route key={path} path={path} element={element} />
        ))}

        {/* Information pages */}
        <Route path="/partners" element={<Partners />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/quality-compliance" element={<QualityCertificate />} />
        <Route path="/sustainability" element={<Sustainability />} />
        <Route path="/legal-notice" element={<LegalNotice />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />

        {/* Retired product and industry URLs. These are redirects only — they
            must never be used as a link target anywhere in the application.
            The same map drives the Apache rules in public/.htaccess. */}
        {Object.entries(LEGACY_REDIRECTS).map(([from, to]) => (
          <Route key={from} path={from} element={<Navigate to={to} replace />} />
        ))}

        {/* Backward-compatible aliases for previously published URLs */}
        <Route path="/product" element={<Navigate to="/products" replace />} />
        <Route path="/Product" element={<Navigate to="/products" replace />} />
        <Route path="/Product/cation" element={<Navigate to={PRODUCT_PATH.cation} replace />} />
        <Route path="/Product/Anion" element={<Navigate to={PRODUCT_PATH.anion} replace />} />
        <Route path="/Product/Mixedbed" element={<Navigate to={PRODUCT_PATH.mixedBed} replace />} />
        <Route path="/Product/Watersoftener" element={<Navigate to={PRODUCT_PATH.waterSoftener} replace />} />
        <Route path="/Product/Specialty" element={<Navigate to={PRODUCT_PATH.specialty} replace />} />
        <Route
          path="/applications/boiler-feed-water"
          element={<Navigate to="/applications/boiler-feed-water-treatment" replace />}
        />
        <Route
          path="/applications/mixed-bed-polishing"
          element={<Navigate to="/applications/mixed-bed-condensate-polishing" replace />}
        />
        <Route
          path="/applications/organic-removal"
          element={<Navigate to="/applications/etp-wastewater-treatment" replace />}
        />
        <Route
          path="/applications/deakalistion-resign"
          element={<Navigate to="/applications/dealkalisation-resin" replace />}
        />
        <Route
          path="/applications/wastewater-treatment"
          element={<Navigate to="/applications/etp-wastewater-treatment" replace />}
        />
        <Route
          path="/applications/water-softener-resign"
          element={<Navigate to="/applications/water-softener-resin" replace />}
        />
        <Route
          path="/oem-dealer-partners"
          element={<Navigate to="/partners" replace />}
        />
        <Route
          path="/quality-certifications"
          element={<Navigate to="/quality-compliance" replace />}
        />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
