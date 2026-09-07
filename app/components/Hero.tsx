const tags = [
  "Webflow",
  "Product Design",
  "Web Design",
  "Mockup",
  "Figma",
  "Brand Design",
];

export default function Hero() {
  return (
    <section className="mx-auto max-w-[1260px] px-6 pt-16 pb-24 text-center">
      <div className="mx-auto mb-6 flex max-w-fit flex-wrap items-center justify-center gap-2 rounded-full border border-black/10 bg-white/60 px-4 py-2">
        {tags.map((tag, i) => (
          <span key={tag} className="flex items-center text-xs font-medium text-black/60">
            {tag}
            {i < tags.length - 1 && <span className="mx-2 text-black/20">•</span>}
          </span>
        ))}
      </div>

      <h1 className="mx-auto max-w-3xl font-pixel text-4xl leading-tight font-semibold sm:text-5xl md:text-6xl">
        Crafting Digital Designs that Elevate SaaS &amp; AI Innovators
      </h1>

      <p className="mx-auto mt-6 max-w-xl text-base text-black/60">
        Helping ambitious founders turn ideas into striking, conversion-ready
        products through design that feels as good as it looks.
      </p>

      <div className="mt-8 flex items-center justify-center gap-4">
        <a
          href="#contact"
          className="rounded-full bg-[#1248fc] px-7 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          Get started
        </a>
        <a
          href="#portfolio"
          className="rounded-full border border-black/15 px-7 py-3 text-sm font-medium text-black transition-colors hover:bg-black/5"
        >
          View work
        </a>
      </div>

      <div className="mx-auto mt-16 aspect-video w-full max-w-4xl overflow-hidden rounded-3xl bg-gradient-to-br from-[#1248fc]/10 via-black/5 to-black/10" />
    </section>
  );
}
