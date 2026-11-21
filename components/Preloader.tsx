"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check if user already saw the preloader in this session
    const hasSeen = sessionStorage.getItem("sp_preloader_seen");
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (hasSeen || prefersReduced) {
      setLoading(false);
      return;
    }

    // Animate progress smoothly with natural progression
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setLoading(false);
            sessionStorage.setItem("sp_preloader_seen", "true");
          }, 350);
          return 100;
        }
        const step = Math.floor(Math.random() * 12) + 6;
        return Math.min(prev + step, 100);
      });
    }, 55);

    return () => clearInterval(interval);
  }, []);

  const handleSkip = () => {
    setLoading(false);
    sessionStorage.setItem("sp_preloader_seen", "true");
  };

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key="cinematic-preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: -30,
            transition: { duration: 0.65, ease: [0.65, 0, 0.35, 1] },
          }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-between py-12 px-6 bg-[#070709] text-ivory select-none"
        >
          {/* Top Telemetry Bar */}
          <div className="w-full max-w-5xl flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.25em] text-ivory-subtle">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-champagne-400 animate-ping" />
              SYSTEM PROTOCOL // ONLINE
            </span>
            <button
              onClick={handleSkip}
              className="text-champagne-400/80 hover:text-champagne-300 transition-colors uppercase tracking-widest cursor-pointer hover:underline"
            >
              Skip Intro [ESC]
            </button>
          </div>

          {/* Center Brand Monogram Reveal */}
          <div className="relative z-10 flex flex-col items-center my-auto">
            {/* Ambient subtle light particle glow */}
            <motion.div
              animate={{
                scale: [1, 1.25, 1],
                opacity: [0.25, 0.55, 0.25],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute w-80 h-80 rounded-full bg-champagne-400/10 blur-[90px] pointer-events-none"
            />

            {/* Monogram Ring */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative w-28 h-28 md:w-32 md:h-32 rounded-full border border-champagne-400/30 flex items-center justify-center mb-8 backdrop-blur-sm bg-background-card/40 shadow-[0_0_45px_rgba(212,175,55,0.18)]"
            >
              {/* Spinning Decorative Border Segment */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-4px] rounded-full border-t border-r border-champagne-400/70 border-b-transparent border-l-transparent"
              />

              {/* Monogram SP */}
              <motion.span
                initial={{ opacity: 0, y: 10, letterSpacing: "0.2em" }}
                animate={{ opacity: 1, y: 0, letterSpacing: "0.05em" }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="font-serif text-3xl md:text-4xl font-bold bg-gradient-to-r from-ivory via-champagne-300 to-champagne-400 bg-clip-text text-transparent"
              >
                SP
              </motion.span>
            </motion.div>

            {/* Name Heading */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-center mb-8"
            >
              <h2 className="font-serif text-2xl md:text-3xl font-light tracking-[0.25em] text-ivory uppercase">
                Shailendra Patidar
              </h2>
              <p className="text-xs uppercase tracking-[0.35em] text-champagne-400/80 mt-1 font-sans">
                Python Developer &amp; AI/ML Specialist
              </p>
            </motion.div>

            {/* Thin Animated Loading Progress Bar */}
            <div className="w-64 md:w-72">
              <div className="relative h-[2px] w-full bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-champagne-400 via-ivory to-champagne-300 rounded-full"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: "easeOut" }}
                />
              </div>

              {/* Counter percentage & discreet status */}
              <div className="flex justify-between items-center mt-3.5 text-[11px] tracking-widest text-ivory-subtle uppercase font-mono">
                <span>Initializing Modules</span>
                <span className="text-champagne-400 font-semibold">{progress}%</span>
              </div>
            </div>
          </div>

          {/* Bottom Telemetry Bar */}
          <div className="w-full max-w-5xl flex items-center justify-between text-[10px] font-mono text-ivory-subtle/70">
            <span>INDORE, INDIA [22.7196° N, 75.8577° E]</span>
            <span>NEXT.JS APP ROUTER // PRODUCTION BUILD</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
