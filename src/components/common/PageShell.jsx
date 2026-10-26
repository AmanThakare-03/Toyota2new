export default function PageShell({
  title,
  eyebrow = "TOYOTA CHEMICAL INDUSTRIES",
  children,
}) {
  return (
    <section className="min-h-[55vh] bg-white px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-5 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#B27B34]">
          {eyebrow}
        </div>

        <h1 className="font-serif text-4xl font-bold text-[#0A2C4B] sm:text-5xl">
          {title}
        </h1>

        <div className="mt-8 max-w-3xl text-base leading-8 text-slate-600">
          {children}
        </div>
      </div>
    </section>
  );
}
