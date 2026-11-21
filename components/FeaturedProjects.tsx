"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { PROJECTS } from "@/data/portfolio";
import { Project } from "@/types/portfolio";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

export default function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="featured-work" className="relative py-28 bg-[#08080b] border-t border-white/5 overflow-hidden">
      {/* Ambient Lighting */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-champagne-400/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-champagne-400 font-semibold mb-4 px-3.5 py-1.5 rounded-full bg-champagne-400/10 border border-champagne-400/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Selected Portfolio</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-ivory tracking-tight leading-tight">
              Featured Engineering Projects
            </h2>
            <p className="text-ivory-muted text-base leading-relaxed mt-4 font-light">
              Practical architectures combining Python, modern FastAPI microservices, computer vision OCR, and Retrieval-Augmented Generation.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-champagne-300 hover:text-ivory py-3 px-6 rounded-full border border-champagne-400/40 hover:border-champagne-300 transition-all duration-300 group self-start md:self-auto bg-white/[0.02]"
          >
            <span>Explore All Projects</span>
            <ArrowUpRight className="w-4 h-4 text-champagne-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={idx}
              onSelect={(p) => setSelectedProject(p)}
            />
          ))}
        </div>

      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
