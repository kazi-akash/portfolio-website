import Image from "next/image";

const members = [
  { name: "men/32", role: "Ceo", offset: "md:mt-24" },
  { name: "men/45", role: "Co Founder", offset: "md:mt-40" },
  { name: "men/12", role: "Marketing Director", offset: "md:mt-0" },
  { name: "men/67", role: "Social Media Manager", offset: "md:mt-16" },
  { name: "men/22", role: "UX / UI Designer", offset: "md:mt-8" },
];

const extraCard = { name: "men/78", role: "Project Manager" };

function Stars() {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-4 w-4 fill-white">
          <path d="M10 1.5l2.6 5.4 5.9.8-4.3 4.1 1 5.9L10 14.9l-5.2 2.8 1-5.9L1.5 7.7l5.9-.8z" />
        </svg>
      ))}
    </div>
  );
}

function TeamCard({
  name,
  role,
  className = "",
}: {
  name: string;
  role: string;
  className?: string;
}) {
  return (
    <div
      className={`relative aspect-[3/4] w-full overflow-hidden rounded-2xl ${className}`}
    >
      <Image
        src={`https://randomuser.me/api/portraits/${name}.jpg`}
        alt={role}
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1248fc] via-[#1248fc]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 flex w-full flex-col gap-2 p-4">
        <Stars />
        <span className="text-sm font-medium text-white">{role}</span>
      </div>
    </div>
  );
}

export default function TeamShowcase() {
  return (
    <section className="mx-auto max-w-[1260px] px-6 py-24">
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5">
        <TeamCard name={members[0].name} role={members[0].role} className={members[0].offset} />
        <TeamCard name={members[1].name} role={members[1].role} className={members[1].offset} />

        <div className="flex flex-col gap-6">
          <TeamCard name={members[2].name} role={members[2].role} />
          <TeamCard name={extraCard.name} role={extraCard.role} />
        </div>

        <TeamCard name={members[3].name} role={members[3].role} className={members[3].offset} />
        <TeamCard name={members[4].name} role={members[4].role} className={members[4].offset} />
      </div>
    </section>
  );
}
