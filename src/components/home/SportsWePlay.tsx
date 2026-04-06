import Link from "next/link";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export type SportCard = {
  id: string;
  name: string;
  slug: string;
  accent_color: string;
  banner_url: string;
  description: string;
};

export function SportsWePlay({ sports }: { sports: SportCard[] }) {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-16">
      <SectionHeading title="Our Arena" subtitle="Multi-sport squads with dedicated training and fierce competition." />
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {sports.map((sport, index) => (
          <Reveal key={sport.id} delay={index * 0.05}>
            <Link
              href={`/teams/${sport.slug}`}
              className="group relative overflow-hidden rounded-3xl border border-border bg-bg-secondary/70 p-6 transition hover:-translate-y-1"
              style={{ boxShadow: `0 0 24px ${sport.accent_color}22` }}
            >
              <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100" style={{ boxShadow: `0 0 32px ${sport.accent_color}55 inset` }} />
              <Image
                src={sport.banner_url}
                alt={sport.name}
                width={420}
                height={240}
                className="h-32 w-full rounded-2xl object-cover"
              />
              <div className="mt-5">
                <h3 className="font-display text-2xl uppercase tracking-wide">
                  {sport.name}
                </h3>
                <p className="mt-2 text-sm text-text-secondary">
                  {sport.description}
                </p>
              </div>
              <div className="mt-6 flex items-center justify-between text-xs uppercase tracking-[0.3em] text-text-secondary">
                <span>View Team</span>
                <span style={{ color: sport.accent_color }}>+</span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
