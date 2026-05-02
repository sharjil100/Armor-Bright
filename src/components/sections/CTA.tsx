"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Clock,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const TRUST_POINTS = [
  {
    icon: ShieldCheck,
    title: "Transparent pricing",
    desc: "Fixed quote — no hidden fees, no upsell pressure.",
  },
  {
    icon: Clock,
    title: "Fast response",
    desc: "We follow up within one business day.",
  },
  {
    icon: Sparkles,
    title: "Custom plan",
    desc: "Designed around your home's exact roofline.",
  },
];

export default function CTA() {
  return (
    <section id="quote" className="relative py-24 sm:py-32">
      {/* Soft gradient backdrop */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-40 left-1/4 size-[500px] rounded-full bg-[var(--accent)]/15 blur-[140px]" />
        <div className="absolute bottom-0 right-1/4 size-[420px] rounded-full bg-[var(--gold)]/10 blur-[120px]" />
        <div className="absolute inset-0 bg-grid opacity-40" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[2rem] glass-strong"
        >
          <div className="grid lg:grid-cols-12 gap-10 p-7 sm:p-10 lg:p-14">
            {/* Trust copy */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs font-medium tracking-wider uppercase text-[var(--accent)]">
                <span className="size-1.5 rounded-full bg-[var(--accent)] animate-pulse-glow" />
                Free Estimate
              </div>
              <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.1]">
                Get Your{" "}
                <span className="text-gradient">Free Lighting Estimate</span>
              </h2>
              <p className="mt-5 text-lg text-[var(--muted)] max-w-lg leading-relaxed">
                Tell us about your home and we&rsquo;ll help you plan the right
                permanent roofline lighting setup.
              </p>

              <ul className="mt-8 space-y-3">
                {TRUST_POINTS.map((t) => (
                  <li
                    key={t.title}
                    className="flex items-start gap-3"
                  >
                    <div className="shrink-0 size-9 rounded-xl bg-gradient-to-br from-[var(--accent)]/20 to-[var(--accent-2)]/10 border border-[var(--accent)]/30 flex items-center justify-center">
                      <t.icon className="size-4 text-[var(--accent)]" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">
                        {t.title}
                      </div>
                      <div className="text-sm text-[var(--muted)]">
                        {t.desc}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-8 hidden lg:flex items-center gap-3 text-sm text-[var(--muted)]">
                <CheckCircle2 className="size-4 text-[var(--accent)]" />
                Trusted by 500+ luxury homeowners.
              </div>
            </div>

            {/* Form */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="lg:col-span-7 glass rounded-2xl p-6 sm:p-8 space-y-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Name" required>
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    className={inputClass}
                  />
                </Field>
                <Field label="Phone" required>
                  <input
                    type="tel"
                    required
                    placeholder="(555) 010-7788"
                    className={inputClass}
                  />
                </Field>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Email" required>
                  <input
                    type="email"
                    required
                    placeholder="you@home.com"
                    className={inputClass}
                  />
                </Field>
                <Field label="City" required>
                  <input
                    type="text"
                    required
                    placeholder="Austin, TX"
                    className={inputClass}
                  />
                </Field>
              </div>

              <Field label="Lighting Goal">
                <div className="relative">
                  <select
                    defaultValue=""
                    className={`${inputClass} appearance-none pr-10 bg-[var(--background-2)]`}
                  >
                    <option value="" disabled>
                      Select your primary goal
                    </option>
                    <option>Curb Appeal</option>
                    <option>Holiday Lighting</option>
                    <option>Security / Visibility</option>
                    <option>All Year Use</option>
                    <option>Not Sure Yet</option>
                  </select>
                  <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[var(--muted)]">
                    ▾
                  </span>
                </div>
              </Field>

              <Field label="Message">
                <textarea
                  rows={4}
                  placeholder="Tell us about your home, square footage, or anything we should know."
                  className={`${inputClass} resize-none`}
                />
              </Field>

              <button type="submit" className="btn-primary w-full mt-2">
                Request Free Estimate
                <ArrowRight className="size-4" />
              </button>

              <p className="text-xs text-center text-[var(--muted)] pt-1">
                No pressure. Just a clear estimate for your home.
              </p>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const inputClass =
  "w-full rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/30 transition";

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-wider text-[var(--muted)]">
        {label}
        {required && <span className="text-[var(--accent)] ml-1">*</span>}
      </span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}
