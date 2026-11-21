"use client";

import Image from "next/image";
import { ArrowUpRight, Github, Layers } from "lucide-react";
import { Project } from "@/types/portfolio";

interface ProjectCardProps {
  project: Project;
  index: number;
  onSelect: (project: Project) => void;
}

export default function ProjectCard({ project, index, onSelect }: ProjectCardProps) {
  const indexStr = String(index + 1).padStart(2, "0");

  return (
    <div className="group relative rounded-3xl bg-background-card/90 border border-white/5 hover:border-champagne-400/40 transition-all duration-500 overflow-hidden flex flex-col justify-between shadow-card-subtle hover:shadow-[0_12px_45px_rgba(212,175,55,0.12)] hover:-translate-y-1">
      {/* Visual Header */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-black/60 border-b border-white/5">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
        />

        {/* Ambient Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-background-card via-transparent to-transparent opacity-80" />

        {/* Index & Category Pill */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
          <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest text-champagne-300 bg-background-dark/85 backdrop-blur-md border border-champagne-400/30">
            {project.category}
          </span>
          <span className="font-serif italic text-xs text-champagne-400/80 font-bold px-2 py-0.5 rounded-full bg-background-dark/70">
            NO. {indexStr}
          </span>
        </div>
      </div>

      {/* Content Body */}
      <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
        <div>
          <div className="text-[10px] font-mono text-champagne-400/80 tracking-widest uppercase mb-1">
            PROJECT // {indexStr}
          </div>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-ivory mb-2 group-hover:text-champagne-300 transition-colors">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm text-ivory-muted leading-relaxed mb-6 font-light">
            {project.description}
          </p>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.technologies.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-0.5 rounded-full text-[11px] font-mono text-ivory-subtle bg-white/[0.03] border border-white/5 group-hover:border-champagne-400/20 transition-colors"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono text-champagne-400 bg-champagne-400/10">
                +{project.technologies.length - 5}
              </span>
            )}
          </div>
        </div>

        {/* Actions & Interaction */}
        <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-3">
          <button
            onClick={() => onSelect(project)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-champagne-300 hover:text-ivory transition-colors group/btn"
          >
            <Layers className="w-3.5 h-3.5 text-champagne-400" />
            <span>Inspect Architecture</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-champagne-400 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </button>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-white/10 hover:border-champagne-400/60 bg-white/[0.02] text-ivory-muted hover:text-champagne-300 transition-colors"
            aria-label={`${project.title} Source Code`}
          >
            <Github className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
