export default function Header() {
  const links = ["About", "Review", "Portfolio"];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#efece5]/90 px-6 py-6 backdrop-blur">
      <div className="mx-auto flex max-w-[1260px] items-center gap-4">
        <a
          href="#"
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white shadow-sm"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6 fill-[#1248fc]">
            <circle cx="8" cy="8" r="5" />
            <circle cx="16" cy="8" r="5" />
            <circle cx="8" cy="16" r="5" />
            <circle cx="16" cy="16" r="5" />
          </svg>
        </a>

        <nav className="flex h-14 flex-1 items-center rounded-full bg-white pl-8 pr-2">
          <div className="flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm font-medium text-black transition-opacity hover:opacity-70"
              >
                {link}
              </a>
            ))}
          </div>

          <div className="ml-auto flex h-full flex-1 items-center justify-end rounded-full bg-gradient-to-r from-white via-white to-[#1248fc] px-8">
            <a
              href="#service"
              className="text-sm font-medium text-white transition-opacity hover:opacity-80"
            >
              Service
            </a>
          </div>
        </nav>

        <a
          href="#contact"
          className="flex h-14 shrink-0 items-center rounded-full bg-[#1248fc] px-8 text-sm font-semibold tracking-wide text-white uppercase transition-opacity hover:opacity-90"
        >
          Contact
        </a>
      </div>
    </header>
  );
}
