"use client";

import { useMemo } from "react";
import type { Player } from "@/types/player";
import { PlayerFilters } from "@/components/players/PlayerFilters";
import { PlayerGrid } from "@/components/players/PlayerGrid";
import { useFilterStore } from "@/store/useFilterStore";

export function PlayersDirectory({ players }: { players: Player[] }) {
  const filters = useFilterStore();

  const positions = useMemo(() => {
    const unique = new Set(
      players.map((player) => player.position).filter(Boolean) as string[]
    );
    return Array.from(unique);
  }, [players]);

  const filtered = useMemo(() => {
    return players
      .filter((player) => {
        if (filters.sport !== "all") {
          if (!player.sport_id?.toLowerCase().includes(filters.sport)) {
            return false;
          }
        }
        if (filters.status !== "all") {
          const statusValue = player.membership_status ?? "active";
          if (statusValue !== filters.status) {
            return false;
          }
        }
        if (filters.gender !== "all" && player.gender) {
          if (player.gender !== filters.gender) {
            return false;
          }
        }
        if (filters.position !== "all" && player.position) {
          if (player.position.toLowerCase() !== filters.position.toLowerCase()) {
            return false;
          }
        }
        if (filters.query) {
          return player.full_name
            .toLowerCase()
            .includes(filters.query.toLowerCase());
        }
        return true;
      })
      .sort((a, b) => {
        switch (filters.sort) {
          case "jersey":
            return (a.jersey_number ?? 0) - (b.jersey_number ?? 0);
          case "newest":
            return (
              new Date(b.membership_date ?? "2000-01-01").getTime() -
              new Date(a.membership_date ?? "2000-01-01").getTime()
            );
          default:
            return a.full_name.localeCompare(b.full_name);
        }
      });
  }, [players, filters]);

  return (
    <div className="space-y-8">
      <PlayerFilters positions={positions} />
      <PlayerGrid players={filtered} />
    </div>
  );
}
