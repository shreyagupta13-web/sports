import { notFound } from "next/navigation";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PlayerHero } from "@/components/players/PlayerHero";
import { PlayerBadges } from "@/components/players/PlayerBadges";
import { StatsRadarChart } from "@/components/players/StatsRadarChart";
import { SkillBars } from "@/components/players/SkillBars";
import { AchievementTimeline } from "@/components/players/AchievementTimeline";
import { PlayerGrid } from "@/components/players/PlayerGrid";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import {
  getAchievements,
  getGallery,
  getPlayerBySlug,
  getPlayers,
  getPlayerSkills,
  getPlayerStats,
} from "@/lib/data";

export default async function PlayerProfile({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const player = await getPlayerBySlug(slug);
  if (!player) {
    notFound();
  }

  const [skills, stats, achievements, gallery, players] = await Promise.all([
    getPlayerSkills(player.id),
    getPlayerStats(player.id),
    getAchievements(),
    getGallery(),
    getPlayers(),
  ]);

  const playerAchievements = achievements.filter(
    (achievement) => achievement.sport_id === player.sport_id
  );
  const relatedPlayers = players.filter(
    (other) => other.id !== player.id && other.sport_id === player.sport_id
  );
  const playerGallery = gallery.filter(
    (item) => item.sport_id === player.sport_id
  );

  return (
    <div className="flex flex-col gap-16">
      <PlayerHero player={player} />

      <section className="mx-auto w-full max-w-6xl space-y-10 px-6">
        <SectionHeading
          title="About"
          subtitle="Athlete bio and membership details."
        />
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-border bg-bg-secondary/70 p-6 text-sm text-text-secondary">
            {player.bio ??
              "SG Sports athlete with relentless focus and arena-level energy."}
          </div>
          <div className="space-y-4 rounded-3xl border border-border bg-bg-secondary/70 p-6 text-sm text-text-secondary">
            <PlayerBadges player={player} />
            <p>Hometown: {player.hometown ?? "-"}</p>
            <p>State: {player.state ?? "-"}</p>
            <p>Membership since: {player.membership_date ?? "-"}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl space-y-10 px-6">
        <SectionHeading title="Career Statistics" />
        <div className="grid gap-6 md:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="rounded-3xl border border-border bg-bg-secondary/70 p-6 text-center"
            >
              <p className="font-stat text-3xl text-accent-lime">
                {stat.stat_value}
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.3em] text-text-secondary">
                {stat.stat_key}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl space-y-10 px-6">
        <SectionHeading title="Skill Profile" />
        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <StatsRadarChart skills={skills} />
          <SkillBars skills={skills} />
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl space-y-10 px-6">
        <SectionHeading title="My Journey" />
        <AchievementTimeline achievements={playerAchievements} />
      </section>

      <section className="mx-auto w-full max-w-6xl space-y-10 px-6">
        <SectionHeading title="Gallery" />
        <GalleryGrid items={playerGallery} />
      </section>

      <section className="mx-auto w-full max-w-6xl space-y-10 px-6 pb-16">
        <SectionHeading title="Related Players" />
        <PlayerGrid players={relatedPlayers} />
      </section>
    </div>
  );
}
