import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SportBadge } from "@/components/ui/SportBadge";
import { Reveal } from "@/components/ui/Reveal";
import type { Player } from "@/types/player";
import { sports } from "@/lib/data/seed";

export function FeaturedPlayers({ players }: { players: Player[] }) {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-16">
      <SectionHeading title="Spotlight Athletes" subtitle="Meet the SG stars making headlines across sports." />
      <div className="mt-10 flex gap-6 overflow-x-auto pb-4">
        {players.map((player, index) => {
          const sport = sports.find((item) => item.id === player.sport_id);
          return (
            <Reveal key={player.id} delay={index * 0.05}>
              <Link
                href={`/players/${player.slug}`}
                className="group min-w-[240px] rounded-3xl border border-border bg-bg-secondary/70 p-5 transition hover:-translate-y-2 hover:border-accent-lime"
              >
                <div className="relative overflow-hidden rounded-2xl bg-bg-elevated">
                  <Image
                    src={player.profile_photo ?? "/images/players/player-1.svg"}
                    alt={player.full_name}
                    width={240}
                    height={320}
                    className="h-56 w-full object-cover grayscale transition group-hover:grayscale-0"
                  />
                  <span className="absolute right-4 bottom-4 font-stat text-3xl text-white/60">
                    {player.jersey_number ?? "00"}
                  </span>
                </div>
                <div className="mt-4 space-y-2">
                  {sport ? <SportBadge sport={sport.name} /> : null}
                  <h3 className="font-display text-xl uppercase tracking-wide">
                    {player.full_name}
                  </h3>
                  <p className="text-sm text-text-secondary">
                    {player.position ?? "Athlete"}
                  </p>
                </div>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
