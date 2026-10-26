import { Outlet } from "react-router";

import { usePageMeta } from "../../seo/usePageMeta";
import Footer from "./Footer";
import Header from "./Header";
import Ourcoustmers from "./Ourcoustmer";

export default function MainLayout() {
  usePageMeta();

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Ourcoustmers />
      <Footer />
    </>
  );
}
