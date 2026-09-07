import Image from "next/image";

const projects = [
  {
    tag: "BRANDING",
    word: "ART",
    title: "Innovative Branding Solutions",
    description:
      "Transforming brand identities through dynamic design and bold concepts. This project highlights cutting-edge 3D visuals and modern aesthetics that redefine how brands communicate.",
    dark: false,
  },
  {
    tag: "UI/UX",
    word: "FLOW",
    title: "Innovative Branding Solutions",
    description:
      "Transforming brand identities through dynamic design and bold concepts. This project highlights cutting-edge 3D visuals and modern aesthetics that redefine how brands communicate.",
    dark: true,
  },
  {
    tag: "WEBFLOW",
    word: "SITE",
    title: "Innovative Branding Solutions",
    description:
      "Transforming brand identities through dynamic design and bold concepts. This project highlights cutting-edge 3D visuals and modern aesthetics that redefine how brands communicate.",
    dark: false,
  },
];

function ShardGraphic({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 260 200" className="h-40 w-52 sm:h-48 sm:w-64" fill={color}>
      <polygon points="70,10 90,10 40,140 20,140" />
      <polygon points="100,10 120,10 70,160 50,160" />
      <polygon points="130,10 150,10 100,180 80,180" />
      <polygon points="160,10 180,10 130,190 110,190" />
      <polygon points="190,10 210,10 160,170 140,170" />
    </svg>
  );
}

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

      <div className="flex flex-col gap-6">
        {projects.map((project) => (
          <div
            key={project.title + project.word}
            className={`grid grid-cols-1 gap-8 rounded-[32px] p-8 sm:p-12 md:grid-cols-2 ${
              project.dark ? "bg-[#1248fc]" : "bg-white"
            }`}
          >
            <div>
              <span
                className={`inline-block rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide ${
                  project.dark ? "bg-white text-black" : "bg-[#1248fc] text-white"
                }`}
              >
                {project.tag}
              </span>

              <h3
                className={`font-pixel mt-4 text-5xl font-bold sm:text-6xl ${
                  project.dark ? "text-white" : "text-black"
                }`}
              >
                {project.word}
              </h3>

              <div className="relative mt-6 -rotate-2 overflow-hidden rounded-2xl ring-1 ring-black/10">
                <Image
                  src="/images/projects/686bc05d82bddc718559cc21_Frame 28-p-1080.png"
                  alt={project.title}
                  width={640}
                  height={420}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <div className="flex justify-end">
                <ShardGraphic color={project.dark ? "#ffffff" : "#1248fc"} />
              </div>

              <div>
                <h4
                  className={`text-2xl font-semibold ${
                    project.dark ? "text-white" : "text-black"
                  }`}
                >
                  {project.title}
                </h4>
                <p
                  className={`mt-3 text-sm leading-relaxed ${
                    project.dark ? "text-white/80" : "text-black/60"
                  }`}
                >
                  {project.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
