"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { MobileMenu } from "@/components/layout/MobileMenu";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Players", href: "/players" },
  { label: "Teams", href: "/teams" },
  { label: "Achievements", href: "/achievements" },
  { label: "Events", href: "/events" },
  { label: "News", href: "/news" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition ${
        isScrolled
          ? "bg-bg-secondary/90 backdrop-blur border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-accent-lime/20 text-accent-lime flex items-center justify-center font-display text-lg">
            SG
          </div>
          <div>
            <p className="font-display text-lg uppercase tracking-[0.2em]">
              SG Sports
            </p>
            <p className="text-xs text-text-secondary">Elite Club Hub</p>
          </div>
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm uppercase tracking-[0.2em] text-text-secondary transition hover:text-text-primary"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <Link
            href="/register"
            className="rounded-full bg-accent-lime px-4 py-2 text-sm font-semibold text-black shadow-[0_0_18px_rgba(181,255,45,0.4)] transition hover:translate-y-[-1px]"
          >
            Join the Club
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-border bg-bg-secondary p-2 text-text-primary lg:hidden"
          onClick={() => setIsOpen((current) => !current)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>
      <MobileMenu open={isOpen} onClose={() => setIsOpen(false)} links={navLinks} />
    </header>
  );
}
