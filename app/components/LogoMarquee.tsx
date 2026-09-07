const brands = [
  {
    name: "CloudWatch",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-[#1f1f1f]">
        <ellipse cx="12" cy="14" rx="9" ry="6" />
      </svg>
    ),
  },
  {
    name: "Acme Corp",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-[#1f1f1f]">
        <path d="M12 2c1 3 2 4 5 5-3 1-4 2-5 5-1-3-2-4-5-5 3-1 4-2 5-5z" />
      </svg>
    ),
  },
  {
    name: "Polymath",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-[#1f1f1f] stroke-2">
        <circle cx="12" cy="12" r="8" />
      </svg>
    ),
  },
  {
    name: "Craftgraph",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-[#1f1f1f]">
        <circle cx="12" cy="6" r="2.4" />
        <circle cx="12" cy="18" r="2.4" />
        <circle cx="6" cy="12" r="2.4" />
        <circle cx="18" cy="12" r="2.4" />
      </svg>
    ),
  },
];

function PixelQuote({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 64 48"
      className={`h-10 w-14 shrink-0 fill-[#1248fc] ${flip ? "rotate-180" : ""}`}
      shapeRendering="crispEdges"
    >
      <rect x="4" y="0" width="8" height="8" />
      <rect x="0" y="8" width="8" height="8" />
      <rect x="0" y="16" width="8" height="16" />
      <rect x="0" y="32" width="8" height="8" />
      <rect x="8" y="32" width="8" height="8" />
      <rect x="16" y="24" width="8" height="8" />
      <rect x="8" y="16" width="8" height="8" />

      <rect x="32" y="0" width="8" height="8" />
      <rect x="28" y="8" width="8" height="8" />
      <rect x="28" y="16" width="8" height="16" />
      <rect x="28" y="32" width="8" height="8" />
      <rect x="36" y="32" width="8" height="8" />
      <rect x="44" y="24" width="8" height="8" />
      <rect x="36" y="16" width="8" height="8" />
    </svg>
  );
}

export default function LogoMarquee() {
  return (
    <section className="mx-auto flex max-w-[1260px] items-center justify-center gap-8 px-6 py-16">
      <PixelQuote />

      <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
        {brands.map((brand) => (
          <div key={brand.name} className="flex items-center gap-2">
            {brand.icon}
            <span className="text-lg font-semibold text-[#1f1f1f]">
              {brand.name}
            </span>
          </div>
        ))}
      </div>

      <PixelQuote flip />
    </section>
  );
}
