"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award, Calendar, MapPin, CheckCircle2, Sparkles } from "lucide-react";
import { TIMELINE_EXPERIENCES } from "@/data/portfolio";

export default function Timeline() {
  return (
    <div className="relative border-l-2 border-champagne-400/25 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
      {TIMELINE_EXPERIENCES.map((item, idx) => {
        const isInternship = item.id === "encoresky-internship";

        return (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="relative group"
          >
            {/* Timeline Node Dot with glow */}
            <div
              className={`absolute -left-[33px] sm:-left-[49px] top-2 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                isInternship
                  ? "bg-champagne-400 border-champagne-300 shadow-[0_0_20px_rgba(212,175,55,0.7)] scale-110"
                  : "bg-background-dark border-champagne-400/60 group-hover:border-champagne-400 group-hover:scale-110"
              }`}
            >
              {item.type === "experience" && (
                <Briefcase className={`w-3 h-3 ${isInternship ? "text-background-dark font-bold" : "text-champagne-400"}`} />
              )}
              {item.type === "education" && (
                <GraduationCap className="w-3 h-3 text-champagne-400" />
              )}
              {item.type === "milestone" && (
                <Award className="w-3 h-3 text-champagne-400" />
              )}
            </div>

            {/* Timeline Card */}
            <div
              className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 ${
                isInternship
                  ? "bg-gradient-to-br from-background-card via-[#161622] to-background-card border-champagne-400/40 shadow-[0_12px_40px_rgba(212,175,55,0.12)]"
                  : "bg-background-card/80 border-white/5 hover:border-champagne-400/30 shadow-card-subtle"
              }`}
            >
              {/* Header Badge & Period */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span
                  className={`text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full ${
                    isInternship
                      ? "text-background-dark bg-champagne-400 font-bold shadow-gold-glow"
                      : "text-champagne-400 bg-champagne-400/10 border border-champagne-400/20"
                  }`}
                >
                  {item.badge || item.type}
                </span>

                <div className="flex items-center gap-3 text-xs text-ivory-subtle font-mono">
                  <span className="flex items-center gap-1.5 text-champagne-300/80">
                    <Calendar className="w-3.5 h-3.5 text-champagne-400" />
                    {item.period}
                  </span>
                  <span className="flex items-center gap-1.5 text-ivory-muted">
                    <MapPin className="w-3.5 h-3.5 text-champagne-400/60" />
                    {item.location}
                  </span>
                </div>
              </div>

              {/* Title & Organization */}
              <h3 className="font-serif text-2xl font-bold text-ivory mb-1">
                {item.title}
              </h3>
              <p className="text-sm font-semibold text-champagne-300/90 mb-4">
                {item.organization}
              </p>

              {/* Summary description */}
              <p className="text-xs sm:text-sm text-ivory-muted leading-relaxed mb-6 font-light">
                {item.description}
              </p>

              {/* Achievements / Responsibilities */}
              <div className="space-y-2 mb-6">
                {item.achievements.map((ach, aIdx) => (
                  <div key={aIdx} className="flex items-start gap-2.5 text-xs text-ivory-muted">
                    <CheckCircle2 className="w-3.5 h-3.5 text-champagne-400/80 flex-shrink-0 mt-0.5" />
                    <span>{ach}</span>
                  </div>
                ))}
              </div>

              {/* Related Skills Tags */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                {item.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-0.5 rounded-full text-[11px] font-mono text-ivory-subtle bg-white/[0.03] border border-white/5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
