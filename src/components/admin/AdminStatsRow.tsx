import { StatCard } from "@/components/ui/StatCard";

const stats = [
  { label: "Total Players", value: "320" },
  { label: "Active Members", value: "288" },
  { label: "Upcoming Events", value: "12" },
  { label: "New Enquiries", value: "6" },
];

export function AdminStatsRow() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <StatCard key={stat.label} label={stat.label} value={stat.value} />
      ))}
    </div>
  );
}
