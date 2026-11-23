"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BrainCircuit, Code2, Server, Database, Layout, Sparkles, CheckCircle2, Search, X, Bot } from "lucide-react";
import { SKILL_CATEGORIES } from "@/data/portfolio";

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  "Programming": <Code2 className="w-5 h-5 text-champagne-400" />,
  "Frontend": <Layout className="w-5 h-5 text-champagne-400" />,
  "Backend": <Server className="w-5 h-5 text-champagne-400" />,
  "Database": <Database className="w-5 h-5 text-champagne-400" />,
  "AI/ML": <BrainCircuit className="w-5 h-5 text-champagne-400" />,
  "Generative AI": <Sparkles className="w-5 h-5 text-champagne-400" />,
  "Agentic AI": <Bot className="w-5 h-5 text-champagne-400" />,
};

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = ["All", ...SKILL_CATEGORIES.map((cat) => cat.title)];

  // Filter skills based on tab and search query
  const filteredCategories = useMemo(() => {
    let result =
      activeTab === "All"
        ? SKILL_CATEGORIES
        : SKILL_CATEGORIES.filter((cat) => cat.title === activeTab);

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result
        .map((cat) => ({
          ...cat,
          skills: cat.skills.filter(
            (s) =>
              s.name.toLowerCase().includes(q) ||
              s.description.toLowerCase().includes(q) ||
              s.category.toLowerCase().includes(q)
          ),
        }))
        .filter((cat) => cat.skills.length > 0);
    }

    return result;
  }, [activeTab, searchQuery]);

  const totalFilteredSkills = useMemo(() => {
    return filteredCategories.reduce((acc, cat) => acc + cat.skills.length, 0);
  }, [filteredCategories]);

  return (
    <section id="skills" className="relative py-28 bg-background border-t border-white/5 overflow-hidden">
      {/* Subtle Ambient Light */}
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-champagne-400/[0.03] rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-champagne-400 font-semibold mb-4 px-3.5 py-1.5 rounded-full bg-champagne-400/10 border border-champagne-400/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-ivory tracking-tight mb-5">
            Architectural Proficiencies &amp; Tooling
          </h2>
          <p className="text-ivory-muted text-base sm:text-lg leading-relaxed font-light mb-8">
            Structured across foundational programming, backend APIs, machine learning pipelines, Generative AI models, and Agentic AI workflows.
          </p>

          {/* Search & Filter Bar */}
          <div className="w-full max-w-xl flex items-center gap-3 p-2 rounded-2xl bg-background-card/90 border border-white/10 shadow-card-subtle mb-8">
            <Search className="w-4 h-4 text-champagne-400 ml-3 flex-shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search capabilities (e.g. RAG, Python, AI Agents, FastAPI)..."
              className="w-full bg-transparent text-sm text-ivory placeholder:text-ivory-subtle focus:outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="p-1 rounded-full text-ivory-subtle hover:text-ivory mr-1"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-full bg-background-card/80 border border-white/5">
            {categories.map((category) => {
              const isActive = activeTab === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveTab(category)}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-medium tracking-wider transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-champagne-400 ${
                    isActive
                      ? "text-background-dark font-semibold shadow-gold-glow"
                      : "text-ivory-muted hover:text-ivory"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeSkillTab"
                      className="absolute inset-0 bg-champagne-400 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{category}</span>
                </button>
              );
            })}
          </div>

          {/* Real-time Result Counter */}
          <div className="text-[11px] font-mono text-ivory-subtle mt-4">
            Showing <span className="text-champagne-300 font-semibold">{totalFilteredSkills}</span> verified capabilities
          </div>
        </div>

        {/* Skill Groups Grid */}
        <div className="space-y-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeTab}-${searchQuery}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="space-y-10"
            >
              {filteredCategories.length === 0 ? (
                <div className="text-center py-16 p-8 rounded-3xl bg-background-card/50 border border-white/5">
                  <p className="text-ivory-muted text-sm font-mono">
                    No capabilities matched &ldquo;{searchQuery}&rdquo;. Try searching for Python, RAG, or AI Agents.
                  </p>
                </div>
              ) : (
                filteredCategories.map((cat) => (
                  <div
                    key={cat.title}
                    className="p-8 sm:p-10 rounded-3xl bg-background-card/75 border border-white/5 hover:border-champagne-400/25 transition-all duration-500 shadow-card-subtle"
                  >
                    {/* Category Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-white/5 gap-3">
                      <div className="flex items-center gap-3.5">
                        <div className="p-2.5 rounded-xl bg-champagne-400/10 border border-champagne-400/20">
                          {CATEGORY_ICONS[cat.title] || <BrainCircuit className="w-5 h-5 text-champagne-400" />}
                        </div>
                        <div>
                          <h3 className="font-serif text-2xl font-bold text-ivory">
                            {cat.title}
                          </h3>
                          <p className="text-xs text-ivory-subtle mt-0.5">
                            {cat.description}
                          </p>
                        </div>
                      </div>
                      <span className="text-[11px] font-mono text-champagne-400 tracking-widest uppercase self-start sm:self-auto font-semibold">
                        {cat.skills.length} Capabilities
                      </span>
                    </div>

                    {/* Skills Grid within Category */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {cat.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="group p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-champagne-400/40 hover:bg-white/[0.04] transition-all duration-300 relative overflow-hidden"
                        >
                          {/* Hover Accent Bar */}
                          <div className="absolute top-0 left-0 w-1 h-full bg-champagne-400 scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300" />
                          
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="font-semibold text-sm text-ivory group-hover:text-champagne-300 transition-colors">
                              {skill.name}
                            </h4>
                            <CheckCircle2 className="w-3.5 h-3.5 text-champagne-400/40 group-hover:text-champagne-400 transition-colors" />
                          </div>
                          <p className="text-xs text-ivory-muted leading-relaxed font-light">
                            {skill.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))
              )}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
