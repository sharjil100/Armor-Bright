"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Lightbulb, Sparkles } from "lucide-react";

const PILLS = ["App-Controlled", "Permanent Install", "Year-Round Lighting"];

export default function Hero() {
  const stageRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileOn, setMobileOn] = useState(false);

  // Detect TRUE mobile only — must have NO hover capability AND a coarse pointer.
  // Any desktop (any resolution) or hybrid laptop with a mouse/trackpad keeps
  // the cursor-mask hover reveal.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(hover: none) and (pointer: coarse)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  // Auto slow-reveal cycle for mobile when not toggled on
  useEffect(() => {
    if (!isMobile || mobileOn) return;
    const id = setInterval(() => setMobileOn((v) => !v), 3500);
    return () => clearInterval(id);
  }, [isMobile, mobileOn]);

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isMobile) return;
    const rect = stageRef.current?.getBoundingClientRect();
    if (!rect) return;
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const showFull = isMobile && mobileOn;
  const radius = 320; // px reveal radius
  const maskStyle =
    pos && !isMobile
      ? {
          WebkitMaskImage: `radial-gradient(circle ${radius}px at ${pos.x}px ${pos.y}px, black 40%, rgba(0,0,0,0.6) 60%, transparent 100%)`,
          maskImage: `radial-gradient(circle ${radius}px at ${pos.x}px ${pos.y}px, black 40%, rgba(0,0,0,0.6) 60%, transparent 100%)`,
        }
      : showFull
        ? { WebkitMaskImage: "none", maskImage: "none" }
        : { WebkitMaskImage: "linear-gradient(black, black)", maskImage: "linear-gradient(black, black)", opacity: 0 };

  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex flex-col pt-28 sm:pt-32 pb-10 overflow-hidden"
    >
      {/* Ambient backdrop */}
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 size-[900px] rounded-full bg-[var(--accent)]/10 blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 -right-40 size-[500px] rounded-full bg-[var(--gold)]/10 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex-1 flex flex-col">
        {/* Copy */}
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs font-medium tracking-wider uppercase text-[var(--accent)]"
          >
            <span className="size-1.5 rounded-full bg-[var(--accent)] animate-pulse-glow" />
            Permanent Roofline Lighting
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05, ease: "easeOut" }}
            className="mt-5 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight leading-[1.05]"
          >
            A Dark Home <span className="text-gradient">Feels Unsafe.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="mt-5 text-lg sm:text-xl text-[var(--muted)] leading-relaxed max-w-2xl mx-auto"
          >
            Permanent roofline lighting keeps your home visible, beautiful, and
            ready for every season.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <a href="#quote" className="btn-primary">
              Get Free Estimate
              <ArrowRight className="size-4" />
            </a>
            <a href="#modes" className="btn-secondary">
              See Lighting Modes
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 flex flex-wrap items-center justify-center gap-2"
          >
            {PILLS.map((p) => (
              <span
                key={p}
                className="rounded-full glass px-3.5 py-1.5 text-xs sm:text-sm text-white/80"
              >
                {p}
              </span>
            ))}
          </motion.div>
        </div>

        {/* House stage */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative mt-12 sm:mt-16"
          id="experience"
        >
          <div
            ref={stageRef}
            onPointerMove={onMove}
            onPointerLeave={() => setPos(null)}
            className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-3xl overflow-hidden glass-strong shadow-[0_30px_120px_-30px_rgba(0,0,0,0.7)] cursor-none"
            style={isMobile ? { cursor: "default" } : undefined}
          >
            {/* Lights OFF (base layer) */}
            <Image
              src="/assets/armor-bright/hero/hero-house-lights-off.png"
              alt="Home with roofline lights off — dark"
              fill
              priority
              sizes="(min-width: 1280px) 1200px, 100vw"
              className="object-cover object-center select-none pointer-events-none"
            />

            {/* Lights ON (revealed by cursor mask) */}
            <div
              className="absolute inset-0 transition-opacity duration-500 ease-out"
              style={maskStyle as React.CSSProperties}
            >
              <Image
                src="/assets/armor-bright/hero/hero-house-lights-on.png"
                alt="Home with Armor Bright roofline lights on at night"
                fill
                priority
                sizes="(min-width: 1280px) 1200px, 100vw"
                className="object-cover object-center select-none pointer-events-none"
              />
            </div>

            {/* Soft inner edge glow when revealing */}
            {pos && !isMobile && (
              <div
                className="absolute pointer-events-none rounded-full"
                style={{
                  left: pos.x - radius,
                  top: pos.y - radius,
                  width: radius * 2,
                  height: radius * 2,
                  boxShadow:
                    "inset 0 0 80px 10px rgba(63,169,255,0.35), 0 0 60px rgba(63,169,255,0.25)",
                  border: "1px solid rgba(63,169,255,0.25)",
                }}
              />
            )}

            {/* Cursor indicator */}
            {pos && !isMobile && (
              <div
                className="absolute pointer-events-none size-12 -translate-x-1/2 -translate-y-1/2 rounded-full glass-strong flex items-center justify-center glow-blue transition-transform duration-100"
                style={{ left: pos.x, top: pos.y }}
              >
                <Lightbulb className="size-5 text-[var(--accent)]" />
              </div>
            )}

            {/* Top + bottom gradient for text legibility */}
            <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-black/60 via-black/20 to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 via-black/30 to-transparent pointer-events-none" />

            {/* Hint label desktop */}
            {!isMobile && (
              <AnimatePresence>
                {!pos && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full glass-strong text-xs sm:text-sm text-white/85 flex items-center gap-2"
                  >
                    <Sparkles className="size-4 text-[var(--accent)]" />
                    Move your cursor over the home to turn on the lights
                  </motion.div>
                )}
              </AnimatePresence>
            )}

          </div>

          {/* Mobile-only toggle — placed BELOW the stage so it can't be clipped */}
          {isMobile && (
            <div className="mt-5 flex justify-center">
              <button
                onClick={() => setMobileOn((v) => !v)}
                className="btn-primary text-sm px-5 py-2.5"
              >
                <Lightbulb className="size-4" />
                {mobileOn ? "Turn Off Lights" : "Tap to Turn On Lights"}
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
