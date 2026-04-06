import { Badge } from "@/components/ui/Badge";
import type { Achievement } from "@/types/achievement";
import { formatDate } from "@/lib/utils/formatDate";

export function AchievementTimeline({
  achievements,
}: {
  achievements: Achievement[];
}) {
  return (
    <div className="space-y-6">
      {achievements.map((achievement) => (
        <div key={achievement.id} className="flex gap-6">
          <div className="text-xs uppercase tracking-[0.3em] text-text-secondary">
            {achievement.date_achieved ? formatDate(achievement.date_achieved) : ""}
          </div>
          <div className="flex-1 rounded-2xl border border-border bg-bg-secondary/70 p-5">
            <Badge label={achievement.medal_type ?? "honour"} />
            <h3 className="mt-3 font-display text-lg uppercase tracking-wide">
              {achievement.title}
            </h3>
            <p className="mt-2 text-sm text-text-secondary">
              {achievement.description ?? "SG Sports honour roll moment."}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
