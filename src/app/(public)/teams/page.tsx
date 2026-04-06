import { SectionHeading } from "@/components/ui/SectionHeading";
import { TeamCard } from "@/components/teams/TeamCard";
import { getTeams } from "@/lib/data";

export default async function TeamsPage() {
  const teams = await getTeams();

  return (
    <div className="mx-auto w-full max-w-6xl space-y-10 px-6 py-16">
      <SectionHeading
        title="Our Squads"
        subtitle="Every sport, every roster, and every competitive edge."
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {teams.map((team) => (
          <TeamCard key={team.id} team={team} />
        ))}
      </div>
    </div>
  );
}
