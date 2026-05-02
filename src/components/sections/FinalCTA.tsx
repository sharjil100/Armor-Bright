"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone, Sparkles } from "lucide-react";

const PHONE_DISPLAY = "(216) 284-9265";
const PHONE_TEL = "+12162849265";

export default function FinalCTA() {
  return (
    <section className="relative py-24 sm:py-36 overflow-hidden">
      {/* Cinematic glow backdrop */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 size-[900px] rounded-full bg-[var(--accent)]/25 blur-[160px]" />
        <div className="absolute -bottom-40 left-1/4 size-[600px] rounded-full bg-[var(--accent-2)]/25 blur-[160px]" />
        <div className="absolute -bottom-32 right-1/4 size-[520px] rounded-full bg-[var(--gold)]/15 blur-[140px]" />
        {/* Top + bottom fade so it blends */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[var(--background)] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[var(--background)] to-transparent" />
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full glass-strong px-3.5 py-1.5 text-xs font-medium tracking-wider uppercase text-[var(--accent)]"
        >
          <Sparkles className="size-3.5" />
          Ready When You Are
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.05, ease: "easeOut" }}
          className="mt-6 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight leading-[1.05]"
        >
          Make Your Home{" "}
          <span className="text-gradient">Shine Year-Round</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="mt-6 text-lg sm:text-xl text-[var(--muted)] max-w-2xl mx-auto leading-relaxed"
        >
          Permanent roofline lighting for everyday curb appeal, holidays,
          security, and special occasions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a href="#quote" className="btn-primary">
            Get Free Estimate
            <ArrowRight className="size-4" />
          </a>
          <a href={`tel:${PHONE_TEL}`} className="btn-secondary">
            <Phone className="size-4" />
            Call Now
          </a>
        </motion.div>

        <motion.a
          href={`tel:${PHONE_TEL}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-6 inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-white transition-colors"
        >
          or call us directly at{" "}
          <span className="font-semibold text-white tracking-wide">
            {PHONE_DISPLAY}
          </span>
        </motion.a>
      </div>
    </section>
  );
}
