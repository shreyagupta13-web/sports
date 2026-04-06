import type { PlayerSkill } from "@/types/player";
import { ProgressBar } from "@/components/ui/ProgressBar";

export function SkillBars({ skills }: { skills: PlayerSkill[] }) {
  return (
    <div className="space-y-4">
      {skills.map((skill) => (
        <ProgressBar
          key={skill.id}
          label={skill.skill_name}
          value={skill.score}
        />
      ))}
    </div>
  );
}
