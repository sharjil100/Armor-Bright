"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import SectionHeading from "../SectionHeading";

const REVIEWS = [
  {
    name: "Marcus & Elena R.",
    location: "Lake Norman, NC",
    quote:
      "Truly invisible during the day. At night, our home is the most stunning on the block. Worth every penny.",
  },
  {
    name: "David T.",
    location: "Scottsdale, AZ",
    quote:
      "The install crew was meticulous. App is beautiful. We've already shown it off to half the neighborhood.",
  },
  {
    name: "Priya & Sam K.",
    location: "Westchester, NY",
    quote:
      "We didn't want anything that screamed 'Christmas lights.' Armor Bright nailed the architectural look we wanted.",
  },
  {
    name: "Jordan W.",
    location: "Park City, UT",
    quote:
      "Held up through two brutal winters with zero issues. The warranty alone made the decision easy.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Loved by Homeowners"
          title={
            <>
              The kind of lighting that{" "}
              <span className="text-gradient">earns referrals.</span>
            </>
          }
        />

        <div className="mt-14 grid md:grid-cols-2 gap-5">
          {REVIEWS.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.06 }}
              className="relative glass rounded-2xl p-7 hover:border-[var(--accent)]/40 transition-colors"
            >
              <Quote className="absolute top-6 right-6 size-8 text-[var(--accent)]/20" />
              <div className="flex items-center gap-1 text-[var(--gold)]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-lg leading-relaxed text-white/90">
                &ldquo;{r.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="size-10 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-2)] flex items-center justify-center text-sm font-semibold">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-medium">{r.name}</div>
                  <div className="text-xs text-[var(--muted)]">{r.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
