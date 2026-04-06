import type { Achievement } from "@/types/achievement";
import { TrophyCard } from "@/components/achievements/TrophyCard";

export function MedalWall({ achievements }: { achievements: Achievement[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {achievements.map((achievement) => (
        <TrophyCard key={achievement.id} achievement={achievement} />
      ))}
    </div>
  );
}
