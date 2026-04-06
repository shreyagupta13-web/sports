import Link from "next/link";
import type { ReactNode } from "react";

const links = [
  { label: "Dashboard", href: "/admin" },
  { label: "Players", href: "/admin/players" },
  { label: "Teams", href: "/admin/teams" },
  { label: "Events", href: "/admin/events" },
  { label: "Achievements", href: "/admin/achievements" },
  { label: "News", href: "/admin/news" },
  { label: "Gallery", href: "/admin/gallery" },
  { label: "Members", href: "/admin/members" },
];

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto flex w-full max-w-6xl gap-6 px-6 py-10">
      <aside className="hidden w-56 flex-shrink-0 flex-col gap-3 rounded-3xl border border-border bg-bg-secondary/70 p-4 text-xs uppercase tracking-[0.3em] text-text-secondary lg:flex">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="hover:text-accent-lime">
            {link.label}
          </Link>
        ))}
      </aside>
      <div className="flex-1 space-y-8">{children}</div>
    </div>
  );
}
