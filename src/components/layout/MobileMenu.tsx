"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function MobileMenu({
  open,
  onClose,
  links,
}: {
  open: boolean;
  onClose: () => void;
  links: Array<{ label: string; href: string }>;
}) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-40 flex flex-col bg-bg-primary/95 px-6 py-10 backdrop-blur"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="flex flex-col gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-2xl font-display uppercase tracking-[0.2em] text-text-primary"
                onClick={onClose}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="mt-auto flex flex-col gap-4">
            <ThemeToggle />
            <Link
              href="/register"
              className="rounded-full bg-accent-lime px-4 py-2 text-center text-sm font-semibold text-black"
              onClick={onClose}
            >
              Join the Club
            </Link>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
