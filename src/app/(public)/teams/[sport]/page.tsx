import { notFound } from "next/navigation";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SportHero } from "@/components/teams/SportHero";
import { TeamRoster } from "@/components/teams/TeamRoster";
import { TeamStats } from "@/components/teams/TeamStats";
import { MedalWall } from "@/components/achievements/MedalWall";
import { UpcomingEvents } from "@/components/home/UpcomingEvents";
import { getAchievements, getEvents, getPlayers, getTeamBySlug } from "@/lib/data";
import { sports } from "@/lib/data/seed";

export default async function TeamPage({
  params,
}: {
  params: Promise<{ sport: string }>;
}) {
  const { sport: sportSlug } = await params;
  const team = await getTeamBySlug(sportSlug);
  if (!team) {
    notFound();
  }

  const [players, achievements, events] = await Promise.all([
    getPlayers(),
    getAchievements(),
    getEvents(),
  ]);

  const sport = sports.find((item) => item.id === team.sport_id);
  const roster = players.filter((player) => player.team_id === team.id);
  const teamAchievements = achievements.filter(
    (achievement) => achievement.team_id === team.id
  );
  const teamEvents = events.filter((event) => event.team_id === team.id);

  return (
    <div className="flex flex-col gap-16">
      <SportHero
        name={team.name}
        banner={sport?.banner_url ?? "/images/hero/cricket.svg"}
        record={`${team.wins ?? 0}W ${team.losses ?? 0}L ${team.draws ?? 0}D`}
      />
      <section className="mx-auto w-full max-w-6xl space-y-10 px-6">
        <SectionHeading title="Team Roster" />
        <TeamRoster players={roster} />
      </section>
      <section className="mx-auto w-full max-w-6xl space-y-10 px-6">
        <SectionHeading title="Team Record" />
        <TeamStats />
      </section>
      <section className="mx-auto w-full max-w-6xl space-y-10 px-6">
        <SectionHeading title="Achievements" />
        <MedalWall achievements={teamAchievements} />
      </section>
      <section className="mx-auto w-full max-w-6xl space-y-10 px-6 pb-16">
        <UpcomingEvents events={teamEvents} />
      </section>
    </div>
  );
}
