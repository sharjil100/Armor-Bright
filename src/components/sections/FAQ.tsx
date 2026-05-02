"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import SectionHeading from "../SectionHeading";

const FAQS = [
  {
    q: "What types of properties does Armor Bright service?",
    a: "Armor Bright services residential homes, commercial buildings, and public areas with tailored lighting solutions.",
  },
  {
    q: "Can you handle large-scale commercial projects?",
    a: "Yes, we specialize in both small and large-scale projects and are equipped to manage extensive commercial lighting installations efficiently.",
  },
  {
    q: "Do you offer energy-efficient lighting options?",
    a: "Absolutely. We offer a variety of energy-efficient lighting options including LED upgrades that not only reduce energy consumption but also lower utility bills and environmental impact.",
  },
  {
    q: "Do you provide warranties on your lighting installations?",
    a: "Yes, all of our lighting installations come with a warranty. Specific warranty details depend on the type of lighting product used and the scope of your project.",
  },
  {
    q: "How do I schedule a consultation?",
    a: "You can schedule a consultation by contacting us via our website, phone, or email.",
  },
  {
    q: "What makes Armor Bright different from other lighting contractors?",
    a: "Armor Bright focuses on custom solutions, quality installations, and exceptional customer service.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/4 -left-32 size-[400px] rounded-full bg-[var(--accent)]/10 blur-[140px]" />
        <div className="absolute bottom-0 -right-32 size-[360px] rounded-full bg-[var(--gold)]/8 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title={
            <>
              Questions, <span className="text-gradient">answered.</span>
            </>
          }
          description="Everything you need to know about Armor Bright permanent roofline lighting."
        />

        <div className="mt-12 space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={f.q}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className={`glass rounded-2xl overflow-hidden transition-colors ${
                  isOpen ? "border-[var(--accent)]/40" : ""
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-medium text-white text-base sm:text-lg">
                    {f.q}
                  </span>
                  <span
                    className={`shrink-0 size-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isOpen
                        ? "bg-[var(--accent)] rotate-45 shadow-[0_0_24px_rgba(63,169,255,0.45)]"
                        : "bg-white/[0.06]"
                    }`}
                  >
                    <Plus className="size-4" />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-[var(--muted)] leading-relaxed">
                        {f.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
