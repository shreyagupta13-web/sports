import Image from "next/image";
import type { Achievement } from "@/types/achievement";
import { Badge } from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils/formatDate";

export function TrophyCard({ achievement }: { achievement: Achievement }) {
  return (
    <div className="rounded-3xl border border-border bg-bg-secondary/70 p-6">
      <Image
        src={achievement.image_url ?? "/images/trophies/trophy-1.svg"}
        alt={achievement.title}
        width={320}
        height={240}
        className="h-40 w-full rounded-2xl object-cover"
      />
      <div className="mt-4 space-y-2">
        <Badge label={achievement.medal_type ?? "honour"} />
        <h3 className="font-display text-lg uppercase tracking-wide">
          {achievement.title}
        </h3>
        <p className="text-xs uppercase tracking-[0.3em] text-text-secondary">
          {achievement.date_achieved ? formatDate(achievement.date_achieved) : ""}
        </p>
      </div>
    </div>
  );
}
