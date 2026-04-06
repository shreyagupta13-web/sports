import type { Player } from "@/types/player";
import { PlayerCard } from "@/components/players/PlayerCard";
import { sports } from "@/lib/data/seed";

export function TeamRoster({ players }: { players: Player[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {players.map((player) => {
        const sportName =
          sports.find((sport) => sport.id === player.sport_id)?.name ??
          "Sport";
        return (
          <PlayerCard key={player.id} player={player} sportName={sportName} />
        );
      })}
    </div>
  );
}
