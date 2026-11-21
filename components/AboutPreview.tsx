"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Cpu, Compass, BookOpen } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio";

export default function AboutPreview() {
  return (
    <section className="relative py-24 bg-[#0a0a0d] border-t border-white/5 overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-champagne-400/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Section Header & Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-champagne-400 font-semibold mb-4">
              <Compass className="w-3.5 h-3.5" />
              <span>About Overview</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-ivory tracking-tight leading-tight mb-6">
              Engineering with curiosity &amp; computational rigor.
            </h2>
            <p className="text-ivory-muted text-base leading-relaxed mb-8 font-light">
              I am an aspiring AI/ML and Python developer actively working on practical architectures. My primary technical focus is exploring the intersection of modern machine learning, vector retrieval mechanisms (RAG), and generative AI applications to solve tangible software challenges.
            </p>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-champagne-300 hover:text-ivory py-2.5 px-6 rounded-full border border-champagne-400/40 hover:border-champagne-300 transition-all duration-300 group bg-white/[0.02]"
            >
              <span>Read Full Narrative &amp; Experience</span>
              <ArrowUpRight className="w-4 h-4 text-champagne-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </motion.div>

          {/* Right: Key Focus Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {/* Card 1 */}
            <div className="p-6 rounded-2xl bg-background-card/80 border border-white/5 hover:border-champagne-400/40 transition-all duration-300 group">
              <div className="w-10 h-10 rounded-xl bg-champagne-400/10 border border-champagne-400/20 flex items-center justify-center text-champagne-300 mb-4 group-hover:scale-105 transition-transform">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-ivory mb-2">
                RAG &amp; LLM Systems
              </h3>
              <p className="text-xs text-ivory-muted leading-relaxed">
                Structuring document ingestion pipelines, dense vector embeddings, and semantic similarity search to ground foundation models without hallucination.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-6 rounded-2xl bg-background-card/80 border border-white/5 hover:border-champagne-400/40 transition-all duration-300 group">
              <div className="w-10 h-10 rounded-xl bg-champagne-400/10 border border-champagne-400/20 flex items-center justify-center text-champagne-300 mb-4 group-hover:scale-105 transition-transform">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-ivory mb-2">
                Applied Machine Learning
              </h3>
              <p className="text-xs text-ivory-muted leading-relaxed">
                Feature normalization, cross-validation, and predictive classification algorithms in Scikit-learn, Pandas, and NumPy for healthcare and data domains.
              </p>
            </div>

            {/* Card 3: Experience Snapshot */}
            <div className="sm:col-span-2 p-6 rounded-2xl bg-gradient-to-br from-background-card to-[#14141c] border border-champagne-400/20 relative overflow-hidden">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-champagne-400 font-semibold">
                    Current Milestone
                  </span>
                  <h4 className="font-serif text-xl font-semibold text-ivory mt-1">
                    AI/ML Intern at Encoresky Technologies
                  </h4>
                  <p className="text-xs text-ivory-muted mt-1">
                    Indore, India • Feb 14, 2026 – Aug 14, 2026
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <span className="inline-block text-xs font-mono text-champagne-300 bg-champagne-400/10 px-3 py-1.5 rounded-full border border-champagne-400/30">
                    Active Internship
                  </span>
                </div>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
