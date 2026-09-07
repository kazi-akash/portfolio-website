import Image from "next/image";

const tags = [
  { label: "Webflow", rotate: "-rotate-6", top: "top-2", left: "left-14" },
  { label: "Product Design", rotate: "-rotate-2", top: "top-14", left: "left-2" },
  { label: "Mockup", rotate: "rotate-6", top: "top-0", left: "left-[62%]" },
  { label: "Web Design", rotate: "rotate-2", top: "top-24", left: "left-[42%]" },
  { label: "Brand Design", rotate: "rotate-12", top: "top-8", left: "left-[78%]" },
  { label: "Figma", rotate: "-rotate-3", top: "top-[168px]", left: "left-[18%]" },
];

const ribbonWords = Array(8).fill("Crative");

export default function Hero() {
  return (
    <section className="mx-auto max-w-[1260px] px-6 pt-12 pb-16">
      <h1 className="font-pixel text-[15vw] leading-[0.85] font-bold tracking-tight text-[#1248fc] sm:text-[10vw] lg:text-[7.5rem]">
        CREATIVE
      </h1>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)]">
        <div className="relative flex min-h-[520px] flex-col justify-end overflow-hidden rounded-[32px] bg-gradient-to-br from-white via-[#dbe4ff] to-[#1248fc] p-8">
          <div className="relative h-[220px] w-full">
            {tags.map((tag) => (
              <span
                key={tag.label}
                className={`absolute ${tag.top} ${tag.left} ${tag.rotate} rounded-full bg-white px-4 py-2 text-xs font-medium whitespace-nowrap text-black shadow-sm`}
              >
                {tag.label}
              </span>
            ))}
          </div>

          <h2 className="font-pixel text-2xl leading-snug font-bold text-white uppercase sm:text-3xl">
            Crafting Digital Designs that Elevate SaaS &amp; AI Innovators
          </h2>
        </div>

        <div className="relative min-h-[520px] overflow-hidden rounded-[32px]">
          <Image
            src="/images/hero-section/hero-right-section.png"
            alt="Creative designer illustration"
            fill
            className="object-cover"
            priority
          />

          <div className="absolute top-8 right-[-100px] w-[420px] rotate-[35deg] bg-[#1248fc] py-2">
            <div className="flex items-center justify-center gap-4 overflow-hidden">
              {ribbonWords.map((word, i) => (
                <span
                  key={i}
                  className="flex items-center gap-4 text-xs font-medium whitespace-nowrap text-white italic"
                >
                  {word}
                  <span className="text-[10px]">▼</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
