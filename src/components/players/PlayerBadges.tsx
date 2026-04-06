import { Badge } from "@/components/ui/Badge";
import type { Player } from "@/types/player";

export function PlayerBadges({ player }: { player: Player }) {
  return (
    <div className="flex flex-wrap gap-3">
      {player.is_captain ? <Badge label="Captain" /> : null}
      {player.membership_status ? (
        <Badge label={player.membership_status} />
      ) : null}
      {player.years_in_club ? (
        <Badge label={`${player.years_in_club} yrs`} />
      ) : null}
    </div>
  );
}
