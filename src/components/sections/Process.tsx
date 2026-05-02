"use client";

import { motion } from "framer-motion";
import {
  ClipboardList,
  PencilRuler,
  HardHat,
  Smartphone,
  ArrowRight,
} from "lucide-react";
import SectionHeading from "../SectionHeading";

const STEPS = [
  {
    icon: ClipboardList,
    label: "Step 01",
    title: "Request Your Estimate",
    desc: "Tell us about your home and lighting goals.",
  },
  {
    icon: PencilRuler,
    label: "Step 02",
    title: "Design Your Roofline Plan",
    desc: "We map the best lighting layout for your home.",
  },
  {
    icon: HardHat,
    label: "Step 03",
    title: "Professional Installation",
    desc: "Your lights are installed cleanly and permanently.",
  },
  {
    icon: Smartphone,
    label: "Step 04",
    title: "Control Everything",
    desc: "Use your app to schedule, change colors, and activate scenes.",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How It Works"
          title={
            <>
              A Simple Process From{" "}
              <span className="text-gradient">Estimate to Installation</span>
            </>
          }
        />

        {/* Timeline */}
        <div className="relative mt-16">
          {/* Connecting line — desktop only */}
          <div className="hidden lg:block absolute top-12 left-[8%] right-[8%] h-px">
            <div className="h-full w-full divider-line" />
          </div>

          <div className="grid gap-6 lg:gap-4 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative flex lg:flex-col items-start lg:items-center gap-5 lg:gap-0 lg:text-center"
              >
                {/* Mobile vertical connector */}
                {i < STEPS.length - 1 && (
                  <div className="lg:hidden absolute left-[31px] top-16 bottom-[-1.5rem] w-px bg-gradient-to-b from-[var(--accent)]/40 via-white/10 to-transparent" />
                )}

                {/* Icon disc */}
                <div className="relative shrink-0">
                  <div className="absolute inset-0 rounded-2xl bg-[var(--accent)] blur-xl opacity-30" />
                  <div className="relative size-16 lg:size-24 rounded-2xl glass-strong flex items-center justify-center glow-blue">
                    <s.icon
                      className="size-7 lg:size-9 text-[var(--accent)]"
                      strokeWidth={1.75}
                    />
                  </div>
                  {/* Step badge for desktop */}
                  <div className="hidden lg:flex absolute -top-2 -right-2 size-7 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-2)] ring-2 ring-[var(--background)] items-center justify-center text-[10px] font-bold">
                    {i + 1}
                  </div>
                </div>

                {/* Copy */}
                <div className="flex-1 lg:mt-6">
                  <p className="text-xs uppercase tracking-widest text-[var(--accent)]">
                    {s.label}
                  </p>
                  <h3 className="mt-1.5 text-lg sm:text-xl font-semibold tracking-tight">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed lg:max-w-[14rem] lg:mx-auto">
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 flex justify-center">
          <a href="#quote" className="btn-primary">
            Start My Free Estimate
            <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
