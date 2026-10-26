import { Link } from "react-router";

const recoveryLinks = [
  {
    label: "Products",
    path: "/products",
    detail: "Cation, anion, mixed bed, water softener and specialty resins",
  },
  {
    label: "Applications",
    path: "/applications",
    detail: "Softening, DM plant, condensate polishing and effluent treatment",
  },
  {
    label: "Industries",
    path: "/industries",
    detail: "Chemical, power, food & beverage, paper, sugar and textile",
  },
  {
    label: "Blog",
    path: "/blog",
    detail: "Engineer-first resin selection and troubleshooting guides",
  },
  {
    label: "About Us",
    path: "/about",
    detail: "Manufacturing ion exchange resins in GIDC Vapi since 1972",
  },
  {
    label: "Contact Us",
    path: "/contact",
    detail: "Talk to our technical desk about your water treatment duty",
  },
];

export default function NotFound() {
  return (
    <section className="min-h-[60vh] bg-white px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-5 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#B27B34]">
          404 / Page Not Found
        </div>

        <h1 className="font-serif text-4xl font-bold text-[#0A2C4B] sm:text-5xl">
          This page could not be found
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">
          The page you're looking for doesn't exist or may have been moved.
          Please return to the home page, or choose a section below.
        </p>

        <div className="mt-9 flex flex-wrap gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-[#0A2C4B] px-6 py-4 font-mono text-[10px] font-bold uppercase tracking-wider text-white transition hover:bg-[#1868A8]"
          >
            Back to Home <span className="text-base">→</span>
          </Link>

          <Link
            to="/contact"
            className="inline-flex items-center border border-[#0A2C4B] bg-white px-6 py-4 font-mono text-[10px] font-bold uppercase tracking-wider text-[#0A2C4B] transition hover:bg-[#F6F9FC]"
          >
            Contact Us
          </Link>
        </div>

        <div className="mt-14 border-t border-[#DAE7F1] pt-10">
          <div className="mb-6 font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-[#B27B34]">
            Popular Sections
          </div>

          <div className="grid border border-[#DAE7F1] sm:grid-cols-2 lg:grid-cols-3">
            {recoveryLinks.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="group border-b border-r border-[#DAE7F1] bg-white p-6 transition hover:bg-[#F6F9FC]"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-base font-bold text-[#0A2C4B] transition group-hover:text-[#1868A8]">
                    {item.label}
                  </span>
                  <span className="text-[#B27B34] transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </div>

                <p className="mt-2 text-xs leading-5 text-slate-500">
                  {item.detail}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
