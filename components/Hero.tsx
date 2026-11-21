"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, FileText, Github, Linkedin, Mail, Sparkles, Terminal, CheckCircle2, Cpu } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio";

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section className="relative min-h-[94vh] flex items-center pt-28 pb-20 overflow-hidden bg-background">
      {/* Background Ambience & Fine Radial Lights */}
      <div className="absolute top-1/4 left-1/4 w-[550px] h-[550px] bg-champagne-400/[0.045] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-bronze-dark/[0.07] rounded-full blur-[130px] pointer-events-none" />
      
      {/* Fine Background Grid with subtle crosshairs */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Decorative Technical Coordinates */}
      <div className="hidden xl:flex absolute top-28 left-12 items-center gap-2 text-[10px] font-mono text-ivory-subtle/40 tracking-[0.2em]">
        <span>LOC // INDORE [22.7196° N]</span>
        <span className="text-champagne-400/40">•</span>
        <span>STATUS // ENGAGING</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-champagne-400/30 bg-white/[0.02] backdrop-blur-sm w-fit mb-6 shadow-[0_0_20px_rgba(212,175,55,0.08)]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-champagne-300">
                HELLO, I&apos;M
              </span>
              <span className="text-white/20">|</span>
              <span className="text-[10px] font-mono text-ivory-subtle uppercase">
                AI/ML Engineer
              </span>
            </div>

            {/* Large Name Heading */}
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-ivory mb-5 leading-[1.06]">
              Shailendra <br />
              <span className="bg-gradient-to-r from-ivory via-champagne-200 to-champagne-400 bg-clip-text text-transparent">
                Patidar
              </span>
            </h1>

            {/* Professional Headline */}
            <div className="flex items-center gap-2.5 mb-6">
              <Terminal className="w-4 h-4 text-champagne-400 flex-shrink-0" />
              <h2 className="text-sm sm:text-base md:text-lg font-medium text-champagne-300/90 tracking-wide">
                Python Developer <span className="text-champagne-500/50 mx-1">|</span> AI/ML Enthusiast <span className="text-champagne-500/50 mx-1">|</span> Generative AI Explorer
              </h2>
            </div>

            {/* Narrative Bio */}
            <p className="text-base sm:text-lg text-ivory-muted leading-relaxed max-w-2xl mb-9 font-sans font-light">
              I am dedicated to building intelligent applications and practical software solutions. Exploring modern Retrieval-Augmented Generation (RAG) architectures, machine learning classifiers, and robust asynchronous Python backends that bridge high-level data models with seamless user experiences.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-5 mb-10">
              <Link
                href="/projects"
                className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider text-background-dark bg-champagne-400 hover:bg-champagne-300 transition-all duration-300 shadow-[0_0_25px_rgba(212,175,55,0.3)] hover:shadow-[0_0_40px_rgba(212,175,55,0.5)] hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-champagne-400"
              >
                <span>Explore My Work</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>

              <Link
                href="/resume-contact"
                className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider text-ivory bg-white/[0.03] border border-white/15 hover:border-champagne-400/60 hover:bg-white/[0.06] transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-champagne-400"
              >
                <FileText className="w-4 h-4 text-champagne-400" />
                <span>View My Resume</span>
              </Link>
            </div>

            {/* Social Icons & Direct Links */}
            <div className="flex items-center gap-6 pt-6 border-t border-white/10">
              <span className="text-xs uppercase tracking-[0.2em] text-ivory-subtle font-mono">
                Connect
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full border border-white/10 hover:border-champagne-400/80 bg-white/[0.02] text-ivory-muted hover:text-champagne-300 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full border border-white/10 hover:border-champagne-400/80 bg-white/[0.02] text-ivory-muted hover:text-champagne-300 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-2.5 rounded-full border border-white/10 hover:border-champagne-400/80 bg-white/[0.02] text-ivory-muted hover:text-champagne-300 transition-colors"
                  aria-label="Send Direct Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Premium Editorial Portrait Frame with 3D Tilt */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div
              className="relative w-full max-w-[380px] sm:max-w-[420px] aspect-[4/5] group perspective-1000"
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={handleMouseLeave}
              style={{
                perspective: "1000px",
              }}
            >
              {/* Outer Decorative Floating Frames */}
              <div
                className="absolute inset-0 rounded-2xl border border-champagne-400/30 transition-transform duration-700 ease-out"
                style={{
                  transform: isHovered
                    ? `translate(${mousePos.x * 20 + 8}px, ${mousePos.y * 20 + 8}px)`
                    : "translate(6px, 6px)",
                }}
              />
              <div
                className="absolute inset-0 rounded-2xl border border-white/10 transition-transform duration-700 ease-out"
                style={{
                  transform: isHovered
                    ? `translate(${mousePos.x * -20 - 8}px, ${mousePos.y * -20 - 8}px)`
                    : "translate(-6px, -6px)",
                }}
              />

              {/* Main Image Container */}
              <div
                className="relative w-full h-full rounded-2xl overflow-hidden bg-background-card border border-champagne-400/40 shadow-2xl z-10 transition-transform duration-500 ease-out"
                style={{
                  transform: isHovered
                    ? `rotateY(${mousePos.x * 12}deg) rotateX(${-mousePos.y * 12}deg)`
                    : "rotateY(0deg) rotateX(0deg)",
                }}
              >
                <Image
                  src="/images/profile.jpg"
                  alt="Shailendra Patidar - Portrait Photograph Placeholder"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 420px"
                  className={`object-cover object-center transition-all duration-700 ease-out ${
                    isHovered ? "scale-105 contrast-[1.05]" : "scale-100"
                  }`}
                />

                {/* Editorial Vignette & Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent opacity-80" />
                <div className="absolute inset-0 bg-champagne-400/[0.04] mix-blend-overlay" />

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-background-dark/90 backdrop-blur-md border border-white/10">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-serif text-sm font-semibold text-ivory">
                      Shailendra Patidar
                    </span>
                    <span className="text-[10px] font-mono text-champagne-400 uppercase tracking-wider">
                      Portfolio 2026
                    </span>
                  </div>
                  <p className="text-xs text-ivory-subtle">
                    AI/ML Intern @ Encoresky Technologies
                  </p>
                </div>
              </div>

              {/* Floating Credential Micro-badge 1: Top Right */}
              <div
                className="absolute -top-4 -right-4 z-20 px-3.5 py-1.5 rounded-xl bg-background-dark/95 border border-champagne-400/40 backdrop-blur-md shadow-2xl flex items-center gap-2 transition-transform duration-500 ease-out"
                style={{
                  transform: isHovered
                    ? `translate(${mousePos.x * 30}px, ${mousePos.y * 30}px)`
                    : "translate(0, 0)",
                }}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[11px] font-mono text-ivory font-medium">
                  4 AI Systems Built
                </span>
              </div>

              {/* Floating Credential Micro-badge 2: Bottom Left */}
              <div
                className="absolute -bottom-4 -left-4 z-20 px-3.5 py-1.5 rounded-xl bg-background-dark/95 border border-champagne-400/40 backdrop-blur-md shadow-2xl flex items-center gap-2 transition-transform duration-500 ease-out"
                style={{
                  transform: isHovered
                    ? `translate(${mousePos.x * -25}px, ${mousePos.y * -25}px)`
                    : "translate(0, 0)",
                }}
              >
                <Cpu className="w-3.5 h-3.5 text-champagne-400" />
                <span className="text-[11px] font-mono text-champagne-300">
                  RAG &amp; FastAPI Pipelines
                </span>
              </div>

              {/* Ambient Glow behind the photo */}
              <div
                className={`absolute -inset-6 bg-champagne-400/15 rounded-3xl blur-2xl -z-10 transition-opacity duration-700 ${
                  isHovered ? "opacity-100" : "opacity-40"
                }`}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
