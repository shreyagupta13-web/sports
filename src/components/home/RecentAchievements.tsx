import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import type { Achievement } from "@/types/achievement";
import { formatDate } from "@/lib/utils/formatDate";

export function RecentAchievements({ achievements }: { achievements: Achievement[] }) {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-16">
      <SectionHeading title="Honours Board" subtitle="Celebrate the trophies, medals, and milestones powering SG Sports." />
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {achievements.map((achievement, index) => (
          <Reveal key={achievement.id} delay={index * 0.05}>
            <div className="rounded-3xl border border-border bg-bg-secondary/70 p-6">
              <Image
                src={achievement.image_url ?? "/images/trophies/trophy-1.svg"}
                alt={achievement.title}
                width={320}
                height={220}
                className="h-40 w-full rounded-2xl object-cover"
              />
              <div className="mt-4 space-y-2">
                <Badge label={achievement.level ?? "state"} />
                <h3 className="font-display text-xl uppercase tracking-wide">
                  {achievement.title}
                </h3>
                <p className="text-sm text-text-secondary">
                  {achievement.date_achieved ? formatDate(achievement.date_achieved) : ""}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
