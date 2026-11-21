"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Mail } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio";

export default function FinalCTA() {
  return (
    <section className="relative py-28 bg-[#09090b] border-t border-white/5 overflow-hidden text-center">
      {/* Subtle Ambient Radial Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-champagne-400/[0.05] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-champagne-400 font-semibold mb-6 px-4 py-1.5 rounded-full bg-champagne-400/10 border border-champagne-400/20">
          <Sparkles className="w-3.5 h-3.5 text-champagne-400" />
          <span>Collaboration &amp; Opportunities</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-ivory tracking-tight leading-[1.15] mb-6">
          Have an idea? <br />
          <span className="bg-gradient-to-r from-ivory via-champagne-300 to-champagne-400 bg-clip-text text-transparent">
            Let&apos;s build something meaningful.
          </span>
        </h2>

        <p className="text-ivory-muted text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed font-light">
          Whether you are looking to integrate machine learning into an existing application, construct a RAG pipeline, or explore technical opportunities, my inbox is open.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/resume-contact#contact"
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider text-background-dark bg-champagne-400 hover:bg-champagne-300 transition-all duration-300 shadow-[0_0_30px_rgba(212,175,55,0.35)] hover:shadow-[0_0_45px_rgba(212,175,55,0.5)] hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-champagne-400"
          >
            <Mail className="w-4 h-4 text-background-dark" />
            <span>Initiate Conversation</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>

          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="inline-flex items-center gap-2 px-6 py-4 rounded-full text-xs sm:text-sm font-mono text-champagne-300 hover:text-ivory bg-white/[0.02] border border-white/10 hover:border-champagne-400/50 transition-colors"
          >
            {PERSONAL_INFO.email}
          </a>
        </div>
      </div>
    </section>
  );
}
