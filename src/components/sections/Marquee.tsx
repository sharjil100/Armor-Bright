"use client";

import { motion } from "framer-motion";

const ITEMS = [
  "Hidden by Day",
  "Brilliant by Night",
  "16M Colors",
  "50+ Scenes",
  "App Controlled",
  "Lifetime Warranty",
  "Pro Installation",
  "Wi-Fi Smart",
];

export default function Marquee() {
  return (
    <div className="relative py-10 border-y border-[var(--border)] bg-black/20 overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[var(--background)] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[var(--background)] to-transparent z-10 pointer-events-none" />
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
        className="flex gap-12 whitespace-nowrap"
      >
        {[...ITEMS, ...ITEMS, ...ITEMS].map((it, i) => (
          <div key={i} className="flex items-center gap-12">
            <span className="text-2xl sm:text-3xl font-semibold tracking-tight text-white/30 hover:text-white transition-colors">
              {it}
            </span>
            <span className="size-2 rounded-full bg-[var(--accent)]/40" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
