"use client";

import { motion } from "framer-motion";
import {
  ArrowUpFromLine,
  Smartphone,
  EyeOff,
  PartyPopper,
  Moon,
  Wrench,
} from "lucide-react";
import SectionHeading from "../SectionHeading";

const CARDS = [
  {
    icon: ArrowUpFromLine,
    title: "No More Ladders",
    desc: "No seasonal climbing, hanging, removing, or storing lights.",
  },
  {
    icon: Smartphone,
    title: "App-Controlled",
    desc: "Change colors, schedules, and scenes from your phone.",
  },
  {
    icon: EyeOff,
    title: "Discreet Install",
    desc: "Lights blend into the roofline during the day.",
  },
  {
    icon: PartyPopper,
    title: "Holiday Ready",
    desc: "Christmas, Halloween, patriotic holidays, and custom events.",
  },
  {
    icon: Moon,
    title: "Better Night Visibility",
    desc: "Keep your home visible and welcoming after dark.",
  },
  {
    icon: Wrench,
    title: "Professional Finish",
    desc: "Clean installation designed to look built-in, not temporary.",
  },
];

export default function Features() {
  return (
    <section id="benefits" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Homeowners Choose Us"
          title={
            <>
              Installed Once.{" "}
              <span className="text-gradient-gold">Used All Year.</span>
            </>
          }
          description="Permanent roofline lighting is more than holiday decor — it's a year-round upgrade for safety, curb appeal, and convenience."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CARDS.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.06 }}
              className="group relative glass rounded-2xl p-7 overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-[var(--gold)]/40"
            >
              {/* Warm hover glow */}
              <div className="pointer-events-none absolute -top-24 -right-24 size-56 rounded-full bg-[var(--gold)]/0 group-hover:bg-[var(--gold)]/15 blur-3xl transition-all duration-700" />
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-0 group-hover:ring-1 group-hover:ring-[var(--gold)]/20 transition-all duration-500" />

              <div className="relative">
                <div className="size-12 rounded-xl bg-gradient-to-br from-[var(--gold)]/15 to-[var(--warm)]/5 border border-[var(--gold)]/25 flex items-center justify-center transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(244,201,135,0.45)] group-hover:border-[var(--gold)]/60">
                  <c.icon
                    className="size-6 text-[var(--gold)]"
                    strokeWidth={1.6}
                  />
                </div>
                <h3 className="mt-5 text-lg font-semibold tracking-tight">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">
                  {c.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
