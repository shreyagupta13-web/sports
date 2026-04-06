import Image from "next/image";
import Link from "next/link";
import { Crown } from "lucide-react";
import { SportBadge } from "@/components/ui/SportBadge";
import type { Player } from "@/types/player";

export function PlayerCard({
  player,
  sportName,
}: {
  player: Player;
  sportName: string;
}) {
  return (
    <Link
      href={`/players/${player.slug}`}
      className="group rounded-3xl border border-border bg-bg-secondary/70 p-5 transition hover:-translate-y-2 hover:border-accent-lime"
    >
      <div className="relative overflow-hidden rounded-2xl bg-bg-elevated">
        <Image
          src={player.profile_photo ?? "/images/players/player-1.svg"}
          alt={player.full_name}
          width={320}
          height={420}
          className="h-52 w-full object-cover grayscale transition group-hover:grayscale-0"
        />
        {player.is_captain ? (
          <span className="absolute left-4 top-4 flex items-center gap-1 rounded-full bg-accent-gold/20 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-accent-gold">
            <Crown className="h-3 w-3" />
            Captain
          </span>
        ) : null}
        <span className="absolute right-4 bottom-4 font-stat text-3xl text-white/60">
          {player.jersey_number ?? "00"}
        </span>
      </div>
      <div className="mt-4 space-y-2">
        <SportBadge sport={sportName} />
        <h3 className="font-display text-xl uppercase tracking-wide">
          {player.full_name}
        </h3>
        <p className="text-sm text-text-secondary">
          {player.position ?? "Athlete"}
        </p>
      </div>
    </Link>
  );
}
