const quickLinks = ["About Us", "Contact", "Service", "Review"];
const socials = ["Facebook", "Instagram", "Twitter"];

const tags = [
  { label: "Branding", rotate: "-rotate-[20deg]", top: "top-16", left: "left-[2%]" },
  { label: "Brand Design", rotate: "-rotate-[15deg]", top: "top-0", left: "left-[20%]" },
  { label: "Product Design", rotate: "rotate-[15deg]", top: "top-10", left: "left-[42%]" },
  { label: "Web Design", rotate: "-rotate-[15deg]", top: "top-0", left: "left-[70%]" },
  { label: "Mocup", rotate: "-rotate-[10deg]", top: "top-36", left: "left-[45%]" },
  { label: "Figma", rotate: "rotate-0", top: "top-44", left: "left-[68%]" },
];

function LogoMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7 fill-white">
      <circle cx="8" cy="8" r="5" />
      <circle cx="16" cy="8" r="5" />
      <circle cx="8" cy="16" r="5" />
      <circle cx="16" cy="16" r="5" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-[1260px] px-6 py-8">
      <div className="rounded-[32px] bg-white p-4">
        <div className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-2">
          <div className="rounded-[24px] bg-[#efece5] p-8">
            <div className="flex items-center gap-3 rounded-2xl bg-[#1248fc] px-6 py-5">
              <LogoMark />
              <span className="font-pixel text-[110px] leading-[110px] font-bold text-white">
                THORFIN
              </span>
            </div>

            <h4 className="font-pixel mt-12 text-[40px] font-bold">
              QUICK LINKS
            </h4>
            <div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-3">
              <ul className="flex flex-col gap-3">
                {quickLinks.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-base text-black hover:opacity-70">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
              <ul className="flex flex-col gap-3">
                {socials.map((s) => (
                  <li key={s}>
                    <a href="#" className="text-base text-black hover:opacity-70">
                      {s}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative min-h-[420px] overflow-hidden rounded-[24px] bg-[#efece5] p-8">
            <div className="relative h-[220px] w-full">
              {tags.map((tag) => (
                <span
                  key={tag.label}
                  className={`absolute ${tag.top} ${tag.left} ${tag.rotate} z-10 rounded-full bg-[#1248fc] px-4 py-2 text-xs font-medium whitespace-nowrap text-white`}
                >
                  {tag.label}
                </span>
              ))}
            </div>

            <svg
              viewBox="0 0 600 100"
              preserveAspectRatio="none"
              className="absolute bottom-4 left-0 h-[100px] w-full px-8"
            >
              <defs>
                <linearGradient id="thorfinFade" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1248fc" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#1248fc" stopOpacity="0.75" />
                </linearGradient>
              </defs>
              <text
                x="32"
                y="78"
                textLength="536"
                lengthAdjust="spacingAndGlyphs"
                fontSize="90"
                fontWeight="700"
                fontFamily="var(--font-pixelify), sans-serif"
                fill="url(#thorfinFade)"
              >
                THORFIN
              </text>
            </svg>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-2 px-4 py-6 text-base text-black sm:flex-row">
          <span>Design By Wroney Powerd By Webflow</span>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:opacity-70">Change log</a>
            <a href="#" className="hover:opacity-70">Style guide</a>
            <a href="#" className="hover:opacity-70">Licence</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
