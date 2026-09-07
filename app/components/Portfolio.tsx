const projects = [
  { title: "Innovative Branding Solutions", category: "Branding", description: "Transforming brand identities through dynamic design and bold concepts." },
  { title: "SaaS Dashboard Redesign", category: "UI/UX", description: "A cleaner, faster dashboard experience built for daily active users." },
  { title: "Launch Site for AI Startup", category: "Webflow", description: "A high-converting marketing site shipped in under two weeks." },
  { title: "Growth Campaign Visuals", category: "Marketing", description: "Visual system powering a multi-channel growth campaign." },
  { title: "Print & Digital Identity", category: "Graphic Design", description: "Cohesive identity system spanning print, web, and social." },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="mx-auto max-w-[1260px] px-6 py-24">
      <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <h2 className="font-pixel text-3xl font-semibold sm:text-4xl">
          Selected Work
        </h2>
        <a
          href="#contact"
          className="text-sm font-medium text-[#1248fc] hover:underline"
        >
          Start a project →
        </a>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group overflow-hidden rounded-3xl bg-white/70 ring-1 ring-black/5"
          >
            <div className="aspect-[4/3] bg-gradient-to-br from-black/5 to-[#1248fc]/10 transition-transform duration-300 group-hover:scale-[1.02]" />
            <div className="p-6">
              <span className="text-xs font-medium text-[#1248fc]">
                {project.category}
              </span>
              <h3 className="mt-2 text-lg font-semibold">{project.title}</h3>
              <p className="mt-2 text-sm text-black/60">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
