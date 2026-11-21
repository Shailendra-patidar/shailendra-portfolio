"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowUpRight, Github, ExternalLink, AlertCircle, Cpu, Layers, CheckCircle2 } from "lucide-react";
import { PROJECTS } from "@/data/portfolio";
import { Project } from "@/types/portfolio";
import ProjectModal from "@/components/ProjectModal";
import FinalCTA from "@/components/FinalCTA";

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const categories = ["All", "AI/ML & Healthcare", "Computer Vision & NLP", "Predictive Analytics", "Generative AI & RAG"];

  const filteredProjects =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <div className="pt-32 pb-20 bg-background text-ivory">
      {/* Page Header */}
      <section className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-16">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-champagne-400 font-semibold mb-4 px-3.5 py-1.5 rounded-full bg-champagne-400/10 border border-champagne-400/20">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Technical Showcase</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-ivory mb-6 max-w-3xl leading-[1.1]">
          Systems, Pipelines &amp; Machine Learning Architectures.
        </h1>
        <p className="text-ivory-muted text-lg sm:text-xl max-w-2xl leading-relaxed font-light mb-10">
          In-depth architectural breakdowns of implemented platforms across healthcare intelligence, document OCR, risk classification, and Retrieval-Augmented Generation.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-full bg-background-card/80 border border-white/5 w-fit">
          {categories.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`relative px-4 py-1.5 rounded-full text-xs font-medium tracking-wider transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-champagne-400 ${
                  isActive
                    ? "text-background-dark font-semibold shadow-gold-glow"
                    : "text-ivory-muted hover:text-ivory"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeProjectFilter"
                    className="absolute inset-0 bg-champagne-400 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Deep-Dive Project Showcase List */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-28 space-y-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="space-y-16"
          >
            {filteredProjects.map((project, idx) => (
              <article
                key={project.id}
                className="p-8 sm:p-12 rounded-3xl bg-background-card/80 border border-white/5 hover:border-champagne-400/30 transition-all duration-500 shadow-card-subtle group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  
                  {/* Left: Custom Visual & Tech Overview */}
                  <div className="lg:col-span-6 space-y-4">
                    <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 bg-black/40 group-hover:border-champagne-400/40 transition-colors">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-contain p-3 group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest text-champagne-300 bg-background-dark/85 backdrop-blur-md border border-champagne-400/30">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.technologies.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 rounded-full text-xs font-mono bg-white/[0.03] border border-white/5 text-ivory-subtle group-hover:border-champagne-400/20 transition-colors"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right: Architectural Narrative */}
                  <div className="lg:col-span-6 flex flex-col justify-between">
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-widest text-champagne-400 font-semibold">
                        PROJECT 0{idx + 1}
                      </span>
                      <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-ivory mt-1 mb-3 group-hover:text-champagne-300 transition-colors">
                        {project.title}
                      </h2>
                      <p className="text-sm text-champagne-300/80 mb-6 font-medium">
                        {project.tagline}
                      </p>

                      {/* Problem & Approach Brief */}
                      <div className="space-y-4 mb-6 text-xs sm:text-sm">
                        <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                          <span className="text-rose-400 font-semibold block mb-1 flex items-center gap-1.5 uppercase font-mono text-[11px]">
                            <AlertCircle className="w-3.5 h-3.5" />
                            The Challenge:
                          </span>
                          <p className="text-ivory-muted leading-relaxed font-light">
                            {project.problem}
                          </p>
                        </div>

                        <div className="p-4 rounded-xl bg-white/[0.02] border border-champagne-400/20">
                          <span className="text-champagne-400 font-semibold block mb-1 flex items-center gap-1.5 uppercase font-mono text-[11px]">
                            <Cpu className="w-3.5 h-3.5" />
                            Technical Solution:
                          </span>
                          <p className="text-ivory-muted leading-relaxed font-light">
                            {project.approach}
                          </p>
                        </div>
                      </div>

                      {/* Highlights */}
                      <div className="space-y-2 mb-8">
                        {project.keyFeatures.slice(0, 3).map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2 text-xs text-ivory-muted">
                            <CheckCircle2 className="w-3.5 h-3.5 text-champagne-400 flex-shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-white/5">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-background-dark bg-champagne-400 hover:bg-champagne-300 transition-colors shadow-gold-glow"
                      >
                        <Layers className="w-3.5 h-3.5" />
                        <span>Inspect Architecture</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-ivory bg-white/[0.03] border border-white/10 hover:border-champagne-400/60 transition-colors"
                      >
                        <Github className="w-4 h-4 text-champagne-400" />
                        <span>Repository</span>
                      </a>
                    </div>

                  </div>

                </div>
              </article>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <FinalCTA />
    </div>
  );
}
