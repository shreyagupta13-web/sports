"use client";

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import type { PlayerSkill } from "@/types/player";

export function StatsRadarChart({ skills }: { skills: PlayerSkill[] }) {
  const data = skills.map((skill) => ({
    skill: skill.skill_name,
    value: skill.score,
  }));

  return (
    <div className="h-[320px] w-full rounded-3xl border border-border bg-bg-secondary/70 p-6">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={data}>
          <PolarGrid stroke="#1e2d3d" />
          <PolarAngleAxis dataKey="skill" tick={{ fill: "#94a3b8", fontSize: 12 }} />
          <Radar
            dataKey="value"
            stroke="#b5ff2d"
            fill="#b5ff2d"
            fillOpacity={0.3}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
