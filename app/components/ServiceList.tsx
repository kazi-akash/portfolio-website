const services = [
  { label: "BRANDING", lineColor: "border-black/15" },
  { label: "UI/UX", lineColor: "border-[#1248fc]" },
  { label: "WEBFLOW", lineColor: "border-black/15" },
  { label: "MARKATING", lineColor: "border-[#1248fc]" },
  { label: "GRAPIC DESIGN", lineColor: "border-black/15" },
];

export default function ServiceList() {
  return (
    <section className="mx-auto max-w-[1260px] px-6 py-24">
      <div>
        {services.map((service) => (
          <a
            key={service.label}
            href="#contact"
            className={`group flex items-center justify-between border-b py-6 ${service.lineColor}`}
          >
            <span className="font-pixel text-2xl font-medium sm:text-3xl">
              {service.label}
            </span>
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6 shrink-0 stroke-black stroke-2 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
              fill="none"
            >
              <path d="M7 17L17 7M17 7H9M17 7V15" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        ))}
      </div>
    </section>
  );
}
