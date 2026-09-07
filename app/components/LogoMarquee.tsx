const logos = ["Acme", "Globex", "Umbrella", "Initech", "Hooli", "Stark Ind."];

export default function LogoMarquee() {
  const doubled = [...logos, ...logos];

  return (
    <section className="overflow-hidden border-y border-black/10 py-8">
      <div className="flex w-max animate-[marquee_25s_linear_infinite] gap-16">
        {doubled.map((logo, i) => (
          <span
            key={`${logo}-${i}`}
            className="text-lg font-semibold whitespace-nowrap text-black/30"
          >
            {logo}
          </span>
        ))}
      </div>
    </section>
  );
}
