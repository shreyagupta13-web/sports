"use client";

import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { season: "2021", wins: 8 },
  { season: "2022", wins: 11 },
  { season: "2023", wins: 13 },
  { season: "2024", wins: 15 },
];

export function TeamStats() {
  return (
    <div className="h-[280px] rounded-3xl border border-border bg-bg-secondary/70 p-6">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="season" stroke="#64748b" />
          <YAxis stroke="#64748b" />
          <Tooltip
            contentStyle={{
              background: "#0d1117",
              border: "1px solid #1e2d3d",
            }}
          />
          <Line type="monotone" dataKey="wins" stroke="#b5ff2d" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
