import { SectionHeading } from "@/components/ui/SectionHeading";
import { PlayersDirectory } from "@/components/players/PlayersDirectory";
import { getPlayers } from "@/lib/data";

export default async function PlayersPage() {
  const players = await getPlayers();

  return (
    <div className="mx-auto w-full max-w-6xl space-y-10 px-6 py-16">
      <SectionHeading
        title="Players Directory"
        subtitle="Browse the SG Sports roster across every squad and discipline."
      />
      <PlayersDirectory players={players} />
    </div>
  );
}
