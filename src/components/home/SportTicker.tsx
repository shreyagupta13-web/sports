"use client";

import { motion } from "framer-motion";

const sports = [
  "Cricket",
  "Football",
  "Badminton",
  "Basketball",
  "Kabaddi",
  "Athletics",
  "Volleyball",
  "Swimming",
];

export function SportTicker() {
  return (
    <div className="overflow-hidden border-y border-border bg-bg-secondary/70 py-3">
      <motion.div
        className="flex items-center gap-10 whitespace-nowrap text-xs uppercase tracking-[0.4em] text-text-secondary"
        animate={{ x: [0, -800] }}
        transition={{ duration: 18, ease: "linear", repeat: Infinity }}
      >
        {sports.concat(sports).map((sport, index) => (
          <span key={`${sport}-${index}`} className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-accent-lime" />
            {sport}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
