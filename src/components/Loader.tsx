"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Loader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Wait for full page load (images, fonts, etc.) — then short reveal hold.
    const minHold = 900; // ms — keeps the brand moment from flashing
    const start = Date.now();

    const finish = () => {
      const elapsed = Date.now() - start;
      const wait = Math.max(0, minHold - elapsed);
      setTimeout(() => setShow(false), wait);
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish, { once: true });
      // Hard cap so we never strand the user
      const cap = setTimeout(finish, 3500);
      return () => {
        clearTimeout(cap);
        window.removeEventListener("load", finish);
      };
    }
  }, []);

  // Lock scroll while visible
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = show ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--background)]"
        >
          {/* Ambient glows */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[700px] rounded-full bg-[var(--accent)]/15 blur-[160px]" />
            <div className="absolute bottom-1/3 left-1/3 size-[400px] rounded-full bg-[var(--accent-2)]/15 blur-[140px]" />
            <div className="absolute top-1/3 right-1/3 size-[360px] rounded-full bg-[var(--gold)]/10 blur-[120px]" />
          </div>

          <div className="relative flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Soft halo behind wordmark */}
              <div className="absolute inset-0 -m-10 bg-[var(--accent)]/20 blur-3xl rounded-full" />
              <div className="relative w-[340px] sm:w-[500px] lg:w-[640px] aspect-[4/1.1]">
                <Image
                  src="/logos/logo-2.png"
                  alt="Armor Bright"
                  fill
                  sizes="(min-width: 1024px) 640px, (min-width: 640px) 500px, 340px"
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>

            {/* Loading shimmer bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="relative mt-10 h-[2px] w-40 sm:w-56 rounded-full overflow-hidden bg-white/10"
            >
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "200%" }}
                transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent"
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
