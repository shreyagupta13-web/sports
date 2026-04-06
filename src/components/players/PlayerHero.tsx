import Image from "next/image";
import { SportBadge } from "@/components/ui/SportBadge";
import type { Player } from "@/types/player";
import { sports } from "@/lib/data/seed";

export function PlayerHero({ player }: { player: Player }) {
  const sport = sports.find((item) => item.id === player.sport_id);

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={player.banner_photo ?? "/images/hero/cricket.svg"}
          alt={player.full_name}
          fill
          sizes="100vw"
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/70 to-transparent" />
      </div>
      <div className="relative mx-auto grid w-full max-w-6xl gap-8 px-6 py-20 lg:grid-cols-[1fr_1fr]">
        <div className="space-y-5">
          <SportBadge sport={sport?.name ?? "Sport"} />
          <h1 className="font-display text-4xl uppercase tracking-wide sm:text-6xl">
            {player.full_name}
          </h1>
          <p className="text-sm uppercase tracking-[0.3em] text-text-secondary">
            {player.position} · Jersey {player.jersey_number ?? "00"}
          </p>
          <div className="flex gap-4">
            <button className="rounded-full bg-accent-lime px-4 py-2 text-xs font-semibold text-black">
              Follow
            </button>
            <button className="rounded-full border border-border px-4 py-2 text-xs uppercase tracking-[0.2em] text-text-secondary">
              Share Profile
            </button>
          </div>
        </div>
        <div className="relative flex justify-center">
          <Image
            src={player.profile_photo ?? "/images/players/player-1.svg"}
            alt={player.full_name}
            width={360}
            height={520}
            className="h-[420px] w-auto rounded-[32px] object-cover"
          />
          <span className="absolute -right-6 bottom-10 font-stat text-7xl text-white/20">
            {player.jersey_number ?? "00"}
          </span>
        </div>
      </div>
    </section>
  );
}
