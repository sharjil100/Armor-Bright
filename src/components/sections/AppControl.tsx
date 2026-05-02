"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import {
  ArrowRight,
  Palette,
  CalendarClock,
  Gauge,
  Sparkles,
  Globe,
  Check,
} from "lucide-react";
import SectionHeading from "../SectionHeading";

const BULLETS = [
  { icon: Palette, label: "Change colors instantly" },
  { icon: CalendarClock, label: "Set schedules" },
  { icon: Gauge, label: "Adjust brightness" },
  { icon: Sparkles, label: "Save holiday presets" },
  { icon: Globe, label: "Control from anywhere" },
];

export default function AppControl() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-8%", "12%"]);
  const phoneY = useTransform(scrollYProgress, [0, 1], ["6%", "-10%"]);

  return (
    <section
      id="app"
      ref={sectionRef}
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Parallax background */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 -z-10">
        <Image
          src="/assets/armor-bright/app-control/app-control-house-bg.png"
          alt="Home illuminated with Armor Bright lighting"
          fill
          sizes="100vw"
          className="object-cover"
          priority={false}
        />
      </motion.div>
      {/* Dark overlays for readability */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[var(--background)] via-[var(--background)]/70 to-[var(--background)]" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[var(--background)] via-[var(--background)]/85 to-transparent" />
      <div className="absolute inset-0 -z-10 bg-black/30" />

      {/* Ambient glows */}
      <div className="absolute -top-32 -left-20 size-[480px] rounded-full bg-[var(--accent)]/15 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 size-[420px] rounded-full bg-[var(--gold)]/10 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Copy */}
          <div className="lg:col-span-6">
            <SectionHeading
              align="left"
              eyebrow="Smart App Control"
              title={
                <>
                  Control Every Light{" "}
                  <span className="text-gradient">From Your Phone</span>
                </>
              }
              description="Turn your roofline lighting on, change colors, schedule scenes, and switch between presets anytime."
            />

            <ul className="mt-10 space-y-3">
              {BULLETS.map((b, i) => (
                <motion.li
                  key={b.label}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="flex items-center gap-4 glass rounded-2xl px-4 py-3.5 hover:border-[var(--accent)]/40 transition-colors"
                >
                  <div className="shrink-0 size-10 rounded-xl bg-gradient-to-br from-[var(--accent)]/20 to-[var(--accent-2)]/10 border border-[var(--accent)]/30 flex items-center justify-center">
                    <b.icon className="size-5 text-[var(--accent)]" />
                  </div>
                  <span className="text-white/90 font-medium">{b.label}</span>
                  <Check className="ml-auto size-4 text-[var(--accent)]/70" />
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <a href="#quote" className="btn-primary">
                Book Free Estimate
                <ArrowRight className="size-4" />
              </a>
              <a href="#modes" className="btn-secondary">
                View Lighting Modes
              </a>
            </motion.div>
          </div>

          {/* Phone */}
          <motion.div
            style={{ y: phoneY }}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[380px]">
              {/* Glows behind phone */}
              <div className="absolute -inset-12 bg-[var(--accent)]/25 blur-[90px] rounded-full" />
              <div className="absolute -bottom-10 inset-x-10 h-40 bg-[var(--gold)]/15 blur-[70px] rounded-full" />

              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative drop-shadow-[0_30px_80px_rgba(0,0,0,0.7)]"
              >
                <Image
                  src="/assets/armor-bright/app-control/phone-app-ui.png"
                  alt="Armor Bright control app interface on a smartphone"
                  width={760}
                  height={1560}
                  sizes="(min-width: 1024px) 380px, 80vw"
                  className="w-full h-auto select-none"
                  priority={false}
                />
              </motion.div>

              {/* Floating callout chips */}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute -left-4 sm:-left-10 top-24 hidden sm:flex"
              >
                <div className="glass-strong rounded-2xl px-3 py-2 flex items-center gap-2">
                  <span className="size-2 rounded-full bg-[var(--accent)] animate-pulse-glow" />
                  <span className="text-xs">Connected</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="absolute -right-4 sm:-right-10 bottom-32 hidden sm:flex"
              >
                <div className="glass-strong rounded-2xl px-3 py-2 flex items-center gap-2">
                  <span className="size-3 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-2)]" />
                  <span className="text-xs">Tap. Done.</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
