import Link from "next/link";
import { PlayerTable } from "@/components/admin/PlayerTable";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getPlayers } from "@/lib/data";

export default async function AdminPlayersPage() {
  const players = await getPlayers();

  return (
    <div className="space-y-8">
      <SectionHeading title="Players" subtitle="Manage player profiles." />
      <Link
        href="/admin/players/add"
        className="inline-flex rounded-full bg-accent-lime px-4 py-2 text-xs font-semibold text-black"
      >
        Add Player
      </Link>
      <PlayerTable players={players} />
    </div>
  );
}
