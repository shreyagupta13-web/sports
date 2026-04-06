import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatCard } from "@/components/ui/StatCard";

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-16 px-6 py-16">
      <SectionHeading
        title="Our Story"
        subtitle="From a single cricket squad in 2005 to a multi-sport powerhouse for athletes across India."
      />
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-3xl border border-border bg-bg-secondary/70 p-6">
          <p className="text-xs uppercase tracking-[0.3em] text-text-secondary">
            2005
          </p>
          <h3 className="mt-4 font-display text-xl uppercase tracking-wide">
            Founding Year
          </h3>
          <p className="mt-2 text-sm text-text-secondary">
            SG Sports began as a cricket collective and expanded with elite
            coaching and facility upgrades.
          </p>
        </div>
        <div className="rounded-3xl border border-border bg-bg-secondary/70 p-6">
          <p className="text-xs uppercase tracking-[0.3em] text-text-secondary">
            2012
          </p>
          <h3 className="mt-4 font-display text-xl uppercase tracking-wide">
            National Impact
          </h3>
          <p className="mt-2 text-sm text-text-secondary">
            SG athletes entered national circuits across football, badminton, and
            athletics.
          </p>
        </div>
        <div className="rounded-3xl border border-border bg-bg-secondary/70 p-6">
          <p className="text-xs uppercase tracking-[0.3em] text-text-secondary">
            Today
          </p>
          <h3 className="mt-4 font-display text-xl uppercase tracking-wide">
            Elite Arena
          </h3>
          <p className="mt-2 text-sm text-text-secondary">
            12 sports, 320+ athletes, and a live-performance culture.
          </p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-border bg-bg-secondary/70 p-6">
          <h3 className="font-display text-xl uppercase tracking-wide">
            Mission
          </h3>
          <p className="mt-3 text-sm text-text-secondary">
            Deliver world-class coaching, data-driven growth, and an inspiring
            community that elevates every SG athlete.
          </p>
        </div>
        <div className="rounded-3xl border border-border bg-bg-secondary/70 p-6">
          <h3 className="font-display text-xl uppercase tracking-wide">
            Vision
          </h3>
          <p className="mt-3 text-sm text-text-secondary">
            Build India's most respected multi-sport club where champions are
            made.
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Coaches" value="24" />
        <StatCard label="Facilities" value="9" />
        <StatCard label="Sponsors" value="14" />
        <StatCard label="Regional Camps" value="36" />
      </div>
    </div>
  );
}
