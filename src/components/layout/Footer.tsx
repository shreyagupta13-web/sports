import Link from "next/link";

const quickLinks = [
  { label: "About", href: "/about" },
  { label: "Players", href: "/players" },
  { label: "Teams", href: "/teams" },
  { label: "Achievements", href: "/achievements" },
  { label: "News", href: "/news" },
];

const sportsLinks = [
  { label: "Cricket", href: "/teams/cricket" },
  { label: "Football", href: "/teams/football" },
  { label: "Badminton", href: "/teams/badminton" },
  { label: "Basketball", href: "/teams/basketball" },
  { label: "Kabaddi", href: "/teams/kabaddi" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-secondary">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-full bg-accent-lime/20 text-accent-lime flex items-center justify-center font-display text-lg">
              SG
            </div>
            <div>
              <p className="font-display text-lg uppercase tracking-[0.2em]">
                SG Sports Club
              </p>
              <p className="text-xs text-text-secondary">
                Where Champions Train
              </p>
            </div>
          </div>
          <p className="text-sm text-text-secondary">
            The official digital arena for SG Sports. Follow the teams, track the
            athletes, and relive every victory.
          </p>
        </div>

        <div>
          <h3 className="font-heading text-sm uppercase tracking-[0.2em] text-text-primary">
            Quick Links
          </h3>
          <div className="mt-4 flex flex-col gap-2 text-sm text-text-secondary">
            {quickLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-accent-lime">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-heading text-sm uppercase tracking-[0.2em] text-text-primary">
            Sports
          </h3>
          <div className="mt-4 flex flex-col gap-2 text-sm text-text-secondary">
            {sportsLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-accent-lime">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-heading text-sm uppercase tracking-[0.2em] text-text-primary">
            Contact
          </h3>
          <div className="mt-4 space-y-2 text-sm text-text-secondary">
            <p>SG Sports Arena, Marine Drive, Mumbai</p>
            <p>+91 98765 43210</p>
            <p>hello@sgsports.club</p>
            <div className="flex gap-3 pt-2">
              <span className="h-8 w-8 rounded-full border border-border" />
              <span className="h-8 w-8 rounded-full border border-border" />
              <span className="h-8 w-8 rounded-full border border-border" />
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-border py-4 text-center text-xs text-text-secondary">
        SG Sports Club. All rights reserved.
      </div>
    </footer>
  );
}
