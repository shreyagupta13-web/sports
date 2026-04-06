import { SectionHeading } from "@/components/ui/SectionHeading";
import { AchievementFilter } from "@/components/achievements/AchievementFilter";
import { MedalWall } from "@/components/achievements/MedalWall";
import { StatCard } from "@/components/ui/StatCard";
import { getAchievements } from "@/lib/data";

export default async function AchievementsPage() {
  const achievements = await getAchievements();
  const gold = achievements.filter((item) => item.medal_type === "gold").length;
  const silver = achievements.filter((item) => item.medal_type === "silver").length;
  const bronze = achievements.filter((item) => item.medal_type === "bronze").length;

  return (
    <div className="mx-auto w-full max-w-6xl space-y-10 px-6 py-16">
      <SectionHeading
        title="Trophy Room"
        subtitle="The honours board celebrating SG Sports achievements."
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Gold" value={String(gold)} />
        <StatCard label="Silver" value={String(silver)} />
        <StatCard label="Bronze" value={String(bronze)} />
        <StatCard label="National Titles" value="8" />
      </div>
      <AchievementFilter />
      <MedalWall achievements={achievements} />
    </div>
  );
}
