import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProgressBar } from "@/components/ui/ProgressBar";

export default function DashboardPage() {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-10 px-6 py-16">
      <SectionHeading title="Member Dashboard" subtitle="Welcome back, athlete." />
      <div className="rounded-3xl border border-border bg-bg-secondary/70 p-6">
        <p className="text-sm text-text-secondary">
          Profile completion
        </p>
        <div className="mt-4">
          <ProgressBar label="Completion" value={72} />
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[
          { label: "My Profile", href: "/profile" },
          { label: "My Stats", href: "/dashboard" },
          { label: "My Achievements", href: "/my-achievements" },
          { label: "My Events", href: "/events" },
          { label: "My Gallery", href: "/gallery" },
        ].map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="rounded-3xl border border-border bg-bg-secondary/70 p-6 text-sm uppercase tracking-[0.3em] text-text-secondary"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
