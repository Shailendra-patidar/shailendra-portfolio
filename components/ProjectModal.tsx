"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Github, ExternalLink, Cpu, CheckCircle2, Layers, AlertCircle, Copy, Check, Terminal } from "lucide-react";
import { Project } from "@/types/portfolio";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "pipeline" | "stack">("overview");
  const [copiedClone, setCopiedClone] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const cloneCommand = `git clone ${project.githubUrl}.git`;

  const handleCopyClone = () => {
    navigator.clipboard.writeText(cloneCommand);
    setCopiedClone(true);
    setTimeout(() => setCopiedClone(false), 2500);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0e0e13] border border-champagne-400/30 p-6 sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.9)] z-10 text-ivory scrollbar-thin"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/5">
            <span className="inline-block px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-widest text-champagne-400 bg-champagne-400/10 border border-champagne-400/25">
              {project.category}
            </span>

            <div className="flex items-center gap-3">
              <span className="text-[10px] font-mono text-ivory-subtle hidden sm:inline-block">
                Press [ESC] to exit
              </span>
              <button
                onClick={onClose}
                className="p-2 rounded-full border border-white/10 hover:border-champagne-400/60 bg-white/[0.04] text-ivory hover:text-champagne-300 transition-colors focus:outline-none focus:ring-2 focus:ring-champagne-400"
                aria-label="Close project modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          <h3 className="font-serif text-3xl sm:text-4xl font-bold text-ivory mb-2">
            {project.title}
          </h3>
          <p className="text-sm sm:text-base text-champagne-300/90 leading-relaxed mb-6 font-medium">
            {project.tagline}
          </p>

          {/* Tab Navigation */}
          <div className="flex items-center gap-2 border-b border-white/10 pb-3 mb-6">
            {[
              { id: "overview", label: "System Overview" },
              { id: "pipeline", label: "Architecture Flow" },
              { id: "stack", label: "Tech Stack & Highlights" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`px-4 py-1.5 rounded-full text-xs font-mono tracking-wider transition-colors ${
                  activeTab === tab.id
                    ? "bg-champagne-400 text-background-dark font-semibold shadow-gold-glow"
                    : "text-ivory-muted hover:text-ivory bg-white/[0.02]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab 1: Overview */}
          {activeTab === "overview" && (
            <div className="space-y-6">
              {/* Project Visual */}
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 bg-black/50">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain p-2"
                />
              </div>

              {/* Problem & Approach Split */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                  <div className="flex items-center gap-2 text-rose-400 text-xs font-semibold uppercase tracking-wider mb-2">
                    <AlertCircle className="w-4 h-4" />
                    <span>The Problem Solved</span>
                  </div>
                  <p className="text-xs sm:text-sm text-ivory-muted leading-relaxed font-light">
                    {project.problem}
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white/[0.02] border border-champagne-400/20">
                  <div className="flex items-center gap-2 text-champagne-400 text-xs font-semibold uppercase tracking-wider mb-2">
                    <Cpu className="w-4 h-4" />
                    <span>Technical Approach</span>
                  </div>
                  <p className="text-xs sm:text-sm text-ivory-muted leading-relaxed font-light">
                    {project.approach}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Pipeline */}
          {activeTab === "pipeline" && (
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                <div className="flex items-center gap-2 text-champagne-300 text-xs font-semibold uppercase tracking-wider mb-5">
                  <Layers className="w-4 h-4 text-champagne-400" />
                  <span>Sequential System Flow</span>
                </div>
                <div className="space-y-4">
                  {project.architectureOverview.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-3.5 text-xs sm:text-sm text-ivory-muted">
                      <span className="w-6 h-6 rounded-full bg-champagne-400/10 text-champagne-400 border border-champagne-400/30 flex items-center justify-center font-mono text-xs flex-shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="leading-relaxed">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Clone Terminal Box */}
              <div className="p-4 rounded-xl bg-background-dark/95 border border-white/10 flex items-center justify-between gap-4 font-mono text-xs">
                <div className="flex items-center gap-2 overflow-x-auto text-champagne-300/90">
                  <Terminal className="w-4 h-4 text-champagne-400 flex-shrink-0" />
                  <span>{cloneCommand}</span>
                </div>
                <button
                  onClick={handleCopyClone}
                  className="px-3 py-1 rounded-md bg-white/[0.05] hover:bg-white/10 text-ivory flex items-center gap-1.5 flex-shrink-0 transition-colors"
                >
                  {copiedClone ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-[11px] text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="text-[11px]">Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

          {/* Tab 3: Stack & Highlights */}
          {activeTab === "stack" && (
            <div className="space-y-6">
              {/* Tech Stack */}
              <div>
                <h4 className="text-xs uppercase tracking-[0.2em] text-champagne-400 font-semibold mb-3">
                  Verified Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3.5 py-1.5 rounded-full text-xs font-mono bg-white/[0.04] border border-white/10 text-ivory"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h4 className="text-xs uppercase tracking-[0.2em] text-champagne-400 font-semibold mb-3">
                  Key Capabilities &amp; Guardrails
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.keyFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-ivory-muted">
                      <CheckCircle2 className="w-4 h-4 text-champagne-400/80 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Actions & Links Footer */}
          <div className="flex flex-wrap items-center justify-between pt-6 mt-8 border-t border-white/10 gap-4">
            <div className="flex items-center gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-background-dark bg-champagne-400 hover:bg-champagne-300 transition-colors shadow-gold-glow"
              >
                <Github className="w-4 h-4" />
                <span>Source Repository</span>
              </a>

              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-ivory bg-white/[0.03] border border-white/10 hover:border-champagne-400/60 transition-colors"
                >
                  <ExternalLink className="w-4 h-4 text-champagne-400" />
                  <span>Interactive System Demo</span>
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="text-xs text-ivory-subtle hover:text-ivory uppercase tracking-wider underline-offset-4 hover:underline"
            >
              Close Window
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
