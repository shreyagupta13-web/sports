import { AdminStatsRow } from "@/components/admin/AdminStatsRow";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <SectionHeading title="Admin Dashboard" subtitle="Control centre for SG Sports operations." />
      <AdminStatsRow />
      <div className="rounded-3xl border border-border bg-bg-secondary/70 p-6">
        <h3 className="font-display text-lg uppercase tracking-wide">
          Recent Activity
        </h3>
        <ul className="mt-4 space-y-2 text-sm text-text-secondary">
          <li>New enquiry from Aarav Singh.</li>
          <li>Cricket XI achievement added.</li>
          <li>Gallery updated with 12 photos.</li>
        </ul>
      </div>
    </div>
  );
}
