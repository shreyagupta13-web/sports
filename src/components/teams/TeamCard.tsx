import Link from "next/link";
import Image from "next/image";
import type { Team } from "@/types/team";
import { sports } from "@/lib/data/seed";

export function TeamCard({ team }: { team: Team }) {
  const sport = sports.find((item) => item.id === team.sport_id);

  return (
    <Link
      href={`/teams/${team.slug}`}
      className="group relative overflow-hidden rounded-3xl border border-border bg-bg-secondary/70 p-6 transition hover:-translate-y-2"
    >
      <Image
        src={sport?.banner_url ?? "/images/hero/cricket.svg"}
        alt={team.name}
        width={420}
        height={240}
        className="h-32 w-full rounded-2xl object-cover"
      />
      <div className="mt-5">
        <h3 className="font-display text-2xl uppercase tracking-wide">
          {team.name}
        </h3>
        <p className="mt-2 text-sm text-text-secondary">
          {sport?.name ?? "Sport"} · Coach {team.coach_name}
        </p>
      </div>
      <div className="mt-6 flex items-center justify-between text-xs uppercase tracking-[0.3em] text-text-secondary">
        <span>
          {team.wins ?? 0}W / {team.losses ?? 0}L / {team.draws ?? 0}D
        </span>
        <span style={{ color: sport?.accent_color ?? "#b5ff2d" }}>+</span>
      </div>
    </Link>
  );
}
