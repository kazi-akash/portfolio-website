const stats = [
  { value: "1,098", label: "Projects Done" },
  { value: "9,012", label: "Happy Reviews" },
  { value: "24", label: "Countries Served" },
];

const reviews = [
  { name: "Alex Carter", role: "CEO", quote: "Absolutely love this product! I wasn't expecting much at first, but it totally exceeded my expectations." },
  { name: "Jamie Lin", role: "Co-Founder", quote: "The attention to detail and speed of delivery was unmatched. Our conversion rate jumped within weeks." },
  { name: "Morgan Reyes", role: "Marketing Director", quote: "Every touchpoint felt intentional. It's rare to find design work this polished and this fast." },
  { name: "Sam Okafor", role: "Project Manager", quote: "Communication was smooth from day one and the final product spoke for itself." },
  { name: "Priya Nair", role: "Social Media Manager", quote: "Our engagement doubled after the rebrand. Genuinely impressed with the creative direction." },
  { name: "Chris Dawson", role: "UX/UI Designer", quote: "As a designer myself, I have high standards — this cleared every one of them." },
];

export default function Testimonials() {
  return (
    <section id="review" className="mx-auto max-w-[1260px] px-6 py-24">
      <div className="mb-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="font-pixel text-3xl font-semibold sm:text-4xl">
              {stat.value}
            </div>
            <div className="mt-1 text-sm text-black/50">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <div
            key={review.name}
            className="rounded-3xl bg-white/70 p-6 shadow-sm ring-1 ring-black/5"
          >
            <p className="text-sm leading-relaxed text-black/70">
              &ldquo;{review.quote}&rdquo;
            </p>
            <div className="mt-5 flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-black/10" />
              <div>
                <div className="text-sm font-medium">{review.name}</div>
                <div className="text-xs text-black/50">{review.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
