"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Lighting Modes", href: "#modes" },
  { label: "App Control", href: "#app" },
  { label: "Benefits", href: "#benefits" },
  { label: "FAQ", href: "#faq" },
  { label: "Free Estimate", href: "#quote" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between rounded-full px-3 sm:px-5 py-2.5 transition-all duration-500 ${
            scrolled
              ? "bg-[var(--background)]/70 backdrop-blur-xl border border-white/10 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.6)]"
              : "bg-[var(--background)]/30 backdrop-blur-md border border-white/5"
          }`}
        >
          {/* Logo (icon mark only inside the site) */}
          <Link
            href="#top"
            className="flex items-center group shrink-0 -my-6"
            aria-label="Armor Bright"
          >
            <div className="relative h-24 w-24 sm:h-32 sm:w-32 lg:h-40 lg:w-40">
              <div className="absolute inset-0 rounded-full bg-[var(--accent)]/35 blur-2xl opacity-60 group-hover:opacity-100 transition" />
              <Image
                src="/logos/logo-1.png"
                alt="Armor Bright"
                fill
                sizes="(min-width: 1024px) 160px, (min-width: 640px) 128px, 96px"
                className="object-contain relative"
                priority
              />
            </div>
          </Link>

          {/* Center links */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="px-3.5 py-2 text-sm text-[var(--muted)] hover:text-white transition-colors rounded-full hover:bg-white/5"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Right CTA */}
          <div className="flex items-center gap-3">
            <Link
              href="#quote"
              className="hidden sm:inline-flex btn-primary text-sm py-2.5 px-5"
            >
              Get Free Estimate
            </Link>
            <button
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden inline-flex size-10 items-center justify-center rounded-full glass"
              aria-label="Open menu"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden mt-2 rounded-3xl bg-[var(--background)]/85 backdrop-blur-xl border border-white/10 p-4"
            >
              <div className="flex flex-col">
                {NAV_LINKS.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="px-4 py-3 text-sm text-[var(--muted)] hover:text-white rounded-2xl hover:bg-white/5"
                  >
                    {l.label}
                  </Link>
                ))}
                <Link
                  href="#quote"
                  onClick={() => setOpen(false)}
                  className="mt-2 btn-primary justify-center"
                >
                  Get Free Estimate
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
