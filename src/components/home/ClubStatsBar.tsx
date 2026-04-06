import { StatCard } from "@/components/ui/StatCard";
import { Reveal } from "@/components/ui/Reveal";

const stats = [
  { label: "Athletes", value: "320+" },
  { label: "Sports", value: "12" },
  { label: "National Champions", value: "8" },
  { label: "Founded", value: "2005" },
];

export function ClubStatsBar() {
  return (
    <section className="relative z-10 -mt-6 px-6">
      <Reveal>
        <div className="mx-auto grid w-full max-w-5xl gap-4 rounded-3xl border border-border bg-bg-secondary/80 px-6 py-6 backdrop-blur sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <StatCard key={stat.label} label={stat.label} value={stat.value} />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
