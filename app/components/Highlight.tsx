import Image from "next/image";

const stats = [
  { value: "100+", label: "Projec Done" },
  { value: "200+", label: "Review" },
  { value: "40+", label: "Countrys" },
];

export default function Highlight() {
  return (
    <section className="mx-auto max-w-[1260px] px-6 py-12">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="relative min-h-[520px] overflow-hidden rounded-[24px]">
          <Image
            src="/images/highlight-sec-3/highlight.png"
            alt="Client portrait"
            fill
            className="object-cover"
          />
        </div>

        <div className="flex min-h-[520px] flex-col justify-between rounded-[24px] bg-[#1248fc] p-10">
          <p className="text-2xl leading-snug font-medium text-white sm:text-3xl">
            Absolutely love this product! I wasn&rsquo;t expecting much at
            first, but it totally exceeded my expectations. The build quality
            feels premium, the packaging was neat, and it works exactly as
            described. Shipping was fast too. Highly recommended!
          </p>

          <div className="flex items-center gap-10">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-pixel text-3xl font-bold text-white sm:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
