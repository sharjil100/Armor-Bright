"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import {
  Power,
  Sun,
  TreePine,
  Ghost,
  Trophy,
  ShieldCheck,
  Flag,
  ArrowRight,
} from "lucide-react";
import SectionHeading from "../SectionHeading";

type Mode = {
  id: string;
  label: string;
  description: string;
  src: string;
  icon: typeof Sun;
  swatch: string;
  glow: string; // rgba glow color
};

const MODES: Mode[] = [
  {
    id: "off",
    label: "Lights Off",
    description:
      "Perfectly invisible. Your roofline stays clean and untouched during the day.",
    src: "/assets/armor-bright/modes/mode-lights-off.png",
    icon: Power,
    swatch: "from-slate-700 to-slate-950",
    glow: "rgba(120, 130, 160, 0.25)",
  },
  {
    id: "warm",
    label: "Warm White",
    description:
      "Elegant everyday lighting for curb appeal, visibility, and a premium nighttime look.",
    src: "/assets/armor-bright/modes/mode-warm-white.png",
    icon: Sun,
    swatch: "from-amber-100 via-amber-200 to-amber-400",
    glow: "rgba(255, 200, 130, 0.55)",
  },
  {
    id: "christmas",
    label: "Christmas",
    description:
      "Festive red, green, and white lighting without ladders, tangled wires, or seasonal setup.",
    src: "/assets/armor-bright/modes/mode-christmas.png",
    icon: TreePine,
    swatch: "from-red-500 via-emerald-400 to-red-500",
    glow: "rgba(239, 68, 68, 0.5)",
  },
  {
    id: "halloween",
    label: "Halloween",
    description:
      "Orange and purple lighting that gives your home a bold seasonal look.",
    src: "/assets/armor-bright/modes/mode-halloween.png",
    icon: Ghost,
    swatch: "from-orange-500 via-purple-600 to-orange-500",
    glow: "rgba(249, 115, 22, 0.55)",
  },
  {
    id: "gameday",
    label: "Game Day",
    description:
      "Team-inspired color lighting for parties, playoffs, and big nights.",
    src: "/assets/armor-bright/modes/mode-game-day.png",
    icon: Trophy,
    swatch: "from-yellow-400 via-blue-500 to-yellow-400",
    glow: "rgba(59, 130, 246, 0.55)",
  },
  {
    id: "security",
    label: "Security",
    description:
      "Bright white lighting that keeps your home more visible after dark.",
    src: "/assets/armor-bright/modes/mode-security.png",
    icon: ShieldCheck,
    swatch: "from-cyan-200 via-white to-cyan-200",
    glow: "rgba(186, 230, 253, 0.6)",
  },
  {
    id: "patriotic",
    label: "Patriotic",
    description:
      "Red, white, and blue lighting for July 4th, Memorial Day, and national holidays.",
    src: "/assets/armor-bright/modes/mode-patriotic.png",
    icon: Flag,
    swatch: "from-red-500 via-white to-blue-600",
    glow: "rgba(59, 130, 246, 0.55)",
  },
];

export default function Modes() {
  const [active, setActive] = useState<Mode>(MODES[0]);

  return (
    <section id="modes" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-60" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Lighting Modes"
          title={
            <>
              Choose Your{" "}
              <span className="text-gradient">Lighting Mode</span>
            </>
          }
          description="From warm everyday curb appeal to holidays, game nights, and security lighting, your home is ready for every occasion."
        />

        {/* Image preview */}
        <div className="mt-14">
          <div
            className="relative mx-auto max-w-5xl aspect-[16/9] rounded-3xl overflow-hidden border border-white/10 shadow-[0_30px_120px_-30px_rgba(0,0,0,0.7)]"
            style={{
              boxShadow: `0 30px 120px -30px rgba(0,0,0,0.7), 0 0 80px -10px ${active.glow}`,
              transition: "box-shadow 600ms ease",
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.99 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={active.src}
                  alt={`Armor Bright — ${active.label} mode`}
                  fill
                  sizes="(min-width: 1024px) 1024px, 100vw"
                  className="object-cover"
                  priority={active.id === "off"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </motion.div>
            </AnimatePresence>

            {/* Inner colored ring on active mode */}
            <div
              className="absolute inset-0 rounded-3xl pointer-events-none"
              style={{
                boxShadow: `inset 0 0 0 1px ${active.glow}`,
                transition: "box-shadow 500ms ease",
              }}
            />

            {/* Active label */}
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id + "-label"}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35 }}
                >
                  <div className="text-xs tracking-widest uppercase text-white/60">
                    Now showing
                  </div>
                  <div className="mt-1 text-2xl sm:text-3xl font-semibold">
                    {active.label}
                  </div>
                </motion.div>
              </AnimatePresence>
              <div
                className={`size-12 rounded-full bg-gradient-to-br ${active.swatch} ring-2 ring-white/30`}
                style={{ boxShadow: `0 0 30px ${active.glow}` }}
              />
            </div>
          </div>

          {/* Description card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id + "-desc"}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
              className="relative mx-auto max-w-3xl mt-6 glass rounded-2xl p-5 sm:p-6 text-center"
            >
              <p className="text-base sm:text-lg text-white/85 leading-relaxed">
                {active.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mode buttons */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
          {MODES.map((m) => {
            const isActive = m.id === active.id;
            const Icon = m.icon;
            return (
              <button
                key={m.id}
                onClick={() => setActive(m)}
                className={`group relative rounded-2xl px-3 py-4 transition-all duration-300 border text-left ${
                  isActive
                    ? "border-transparent bg-white/[0.06]"
                    : "border-white/[0.06] hover:border-white/15 hover:bg-white/[0.03]"
                }`}
                style={
                  isActive
                    ? {
                        boxShadow: `0 0 0 1px ${m.glow}, 0 0 40px -8px ${m.glow}`,
                      }
                    : undefined
                }
              >
                <div className="flex flex-col items-center gap-2.5 text-center">
                  <div
                    className={`size-10 rounded-xl bg-gradient-to-br ${m.swatch} ring-1 ring-white/20 flex items-center justify-center transition-transform duration-300 group-hover:scale-105`}
                    style={
                      isActive ? { boxShadow: `0 0 24px ${m.glow}` } : undefined
                    }
                  >
                    <Icon className="size-5 text-black/70" strokeWidth={2.25} />
                  </div>
                  <div
                    className={`text-xs sm:text-sm font-medium ${
                      isActive ? "text-white" : "text-white/75"
                    }`}
                  >
                    {m.label}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <a href="#quote" className="btn-primary">
            Get My Free Estimate
            <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
