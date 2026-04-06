"use client";

import { motion } from "framer-motion";

export function AnimatedIcon({ color = "var(--accent-lime)" }: { color?: string }) {
  return (
    <motion.svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      animate={{ rotate: [0, 6, -6, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    >
      <circle cx="18" cy="18" r="16" stroke={color} strokeWidth="2" />
      <path
        d="M10 18L16 24L26 12"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
  );
}
