import { SectionHeading } from "@/components/ui/SectionHeading";
import { MedalWall } from "@/components/achievements/MedalWall";
import { getAchievements } from "@/lib/data";

export default async function MyAchievementsPage() {
  const achievements = await getAchievements();

  return (
    <div className="mx-auto w-full max-w-6xl space-y-10 px-6 py-16">
      <SectionHeading title="My Achievements" subtitle="Personal honours and trophies." />
      <MedalWall achievements={achievements} />
    </div>
  );
}
