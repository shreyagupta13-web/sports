import { SectionHeading } from "@/components/ui/SectionHeading";
import { TeamCard } from "@/components/teams/TeamCard";
import { getTeams } from "@/lib/data";

export default async function AdminTeamsPage() {
  const teams = await getTeams();

  return (
    <div className="space-y-8">
      <SectionHeading title="Teams" subtitle="Manage squad details." />
      <div className="grid gap-6 md:grid-cols-2">
        {teams.map((team) => (
          <TeamCard key={team.id} team={team} />
        ))}
      </div>
    </div>
  );
}
