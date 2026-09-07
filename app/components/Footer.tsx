const quickLinks = ["About us", "Contact", "Service", "Review"];
const services = ["Branding", "Product Design", "Web Design", "Mockup", "Figma", "Brand Design"];
const socials = ["Facebook", "Instagram", "Twitter"];

export default function Footer() {
  return (
    <footer className="border-t border-black/10">
      <div className="mx-auto grid max-w-[1260px] grid-cols-1 gap-10 px-6 py-16 sm:grid-cols-3">
        <div>
          <span className="font-pixel text-xl font-semibold">Thorfin</span>
          <p className="mt-3 max-w-xs text-sm text-black/50">
            Crafting digital designs that elevate SaaS &amp; AI innovators.
          </p>
          <div className="mt-5 flex gap-4">
            {socials.map((s) => (
              <a key={s} href="#" className="text-sm text-black/50 hover:text-black">
                {s}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold">Quick Links</h4>
          <ul className="mt-4 flex flex-col gap-2">
            {quickLinks.map((l) => (
              <li key={l}>
                <a href="#" className="text-sm text-black/50 hover:text-black">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold">Services</h4>
          <ul className="mt-4 flex flex-col gap-2">
            {services.map((s) => (
              <li key={s}>
                <a href="#" className="text-sm text-black/50 hover:text-black">
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-black/10 px-6 py-6 text-center text-xs text-black/40">
        © {new Date().getFullYear()} Thorfin. All rights reserved.
      </div>
    </footer>
  );
}
