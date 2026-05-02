"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, EyeOff, Sparkles, MoveHorizontal } from "lucide-react";
import SectionHeading from "../SectionHeading";

export default function HiddenInstall() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50); // % position of divider — left shows DAY, right shows NIGHT
  const [dragging, setDragging] = useState(false);

  // Subtle auto-sweep until user interacts
  useEffect(() => {
    if (dragging) return;
    let raf = 0;
    let dir = 1;
    let v = pos;
    const tick = () => {
      v += dir * 0.06;
      if (v > 65) dir = -1;
      if (v < 38) dir = 1;
      setPos(v);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dragging]);

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging || !wrapRef.current) return;
    const r = wrapRef.current.getBoundingClientRect();
    const pct = ((e.clientX - r.left) / r.width) * 100;
    setPos(Math.max(2, Math.min(98, pct)));
  };

  return (
    <section id="hidden" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Copy */}
          <div className="lg:col-span-5">
            <SectionHeading
              align="left"
              eyebrow="Discreet by Design"
              title={
                <>
                  Hidden by Day.{" "}
                  <span className="text-gradient">Bright by Night.</span>
                </>
              }
              description="Designed to blend into your roofline during the day and transform your home after sunset."
            />

            <div className="mt-8 space-y-4">
              <div className="glass rounded-2xl p-5 flex gap-4">
                <div className="shrink-0 size-11 rounded-xl bg-gradient-to-br from-amber-200/20 to-amber-400/10 border border-amber-200/30 flex items-center justify-center">
                  <EyeOff className="size-5 text-amber-200" />
                </div>
                <div>
                  <h3 className="font-semibold">Hidden by Day</h3>
                  <p className="text-sm text-[var(--muted)] mt-1 leading-relaxed">
                    Discreet installation that blends into your roofline.
                  </p>
                </div>
              </div>
              <div className="glass rounded-2xl p-5 flex gap-4">
                <div className="shrink-0 size-11 rounded-xl bg-gradient-to-br from-[var(--accent)]/20 to-[var(--accent-2)]/10 border border-[var(--accent)]/30 flex items-center justify-center">
                  <Sparkles className="size-5 text-[var(--accent)]" />
                </div>
                <div>
                  <h3 className="font-semibold">Bright by Night</h3>
                  <p className="text-sm text-[var(--muted)] mt-1 leading-relaxed">
                    Clean, permanent lighting that makes your home stand out.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <a href="#process" className="btn-primary">
                See Installation Options
                <ArrowRight className="size-4" />
              </a>
            </div>
          </div>

          {/* Comparison slider */}
          <div className="lg:col-span-7">
            <div
              ref={wrapRef}
              onPointerDown={(e) => {
                setDragging(true);
                (e.currentTarget as HTMLDivElement).setPointerCapture(e.pointerId);
                const r = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
                setPos(Math.max(2, Math.min(98, ((e.clientX - r.left) / r.width) * 100)));
              }}
              onPointerUp={(e) => {
                setDragging(false);
                (e.currentTarget as HTMLDivElement).releasePointerCapture(e.pointerId);
              }}
              onPointerLeave={() => setDragging(false)}
              onPointerMove={onPointerMove}
              className="relative aspect-[16/10] rounded-3xl overflow-hidden glass-strong cursor-ew-resize select-none shadow-[0_30px_120px_-30px_rgba(0,0,0,0.7)]"
            >
              {/* DAY (base) */}
              <Image
                src="/assets/armor-bright/hidden-install/hidden-by-day.png"
                alt="Armor Bright lighting hidden in the soffit during the day"
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover object-center pointer-events-none"
              />

              {/* NIGHT (clipped from divider rightward) */}
              <div
                className="absolute inset-0"
                style={{ clipPath: `inset(0 0 0 ${pos}%)` }}
              >
                <Image
                  src="/assets/armor-bright/hidden-install/bright-by-night.png"
                  alt="Armor Bright lighting brilliantly lit at night"
                  fill
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="object-cover object-center pointer-events-none"
                />
              </div>

              {/* Divider line + handle */}
              <motion.div
                className="absolute top-0 bottom-0 w-px bg-white/85"
                style={{
                  left: `${pos}%`,
                  boxShadow: "0 0 24px rgba(63,169,255,0.85)",
                }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="size-12 rounded-full glass-strong flex items-center justify-center glow-blue ring-1 ring-white/20">
                    <MoveHorizontal className="size-5 text-white" />
                  </div>
                </div>
              </motion.div>

              {/* Labels */}
              <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full glass-strong text-xs uppercase tracking-wider text-amber-100">
                Day · Hidden
              </div>
              <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full glass-strong text-xs uppercase tracking-wider text-[var(--accent)]">
                Night · Bright
              </div>

              {/* Hint */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-full glass-strong text-xs text-white/70">
                Drag to compare
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
