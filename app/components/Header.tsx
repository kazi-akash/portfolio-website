export default function Header() {
  const links = ["About", "Review", "Portfolio", "Service", "Contact"];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#efece5]/90 backdrop-blur">
      <div className="mx-auto flex max-w-[1260px] items-center justify-between px-6 py-5">
        <a href="#" className="font-pixel text-xl font-semibold tracking-tight">
          Thorfin
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium text-black/70 transition-colors hover:text-black"
            >
              {link}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="rounded-full bg-[#1248fc] px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          Get started
        </a>
      </div>
    </header>
  );
}
