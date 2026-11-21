import { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, BrainCircuit, Target, Sparkles, Building, Calendar, MapPin, CheckCircle2, Quote, ShieldCheck, Terminal, Layers } from "lucide-react";
import Timeline from "@/components/Timeline";
import FinalCTA from "@/components/FinalCTA";
import { PERSONAL_INFO } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "About & Engineering Journey",
  description:
    "Explore the technical background, AI/ML internship at Encoresky Technologies, and engineering philosophy of Shailendra Patidar.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20 bg-background text-ivory">
      {/* Page Header */}
      <section className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-16">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-champagne-400 font-semibold mb-4 px-3.5 py-1.5 rounded-full bg-champagne-400/10 border border-champagne-400/20">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Professional Background</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-ivory mb-6 max-w-3xl leading-[1.08]">
          Architecting systems through algorithmic rigor &amp; reliable engineering.
        </h1>
        <p className="text-ivory-muted text-lg sm:text-xl max-w-2xl leading-relaxed font-light">
          A deep dive into my journey, active AI/ML internship at Encoresky Technologies, technical foundations, and engineering outlook.
        </p>
      </section>

      {/* Executive Quote Block */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-16">
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-background-card via-[#151520] to-background-card border-l-4 border-l-champagne-400 border border-white/5 relative shadow-card-subtle">
          <Quote className="w-8 h-8 text-champagne-400/30 mb-3" />
          <p className="font-serif italic text-lg sm:text-2xl text-ivory leading-relaxed mb-4">
            &ldquo;Machine learning reaches its true potential not in isolated research notebooks, but when it is grounded in real-world data, served via resilient backends, and engineered to solve concrete challenges.&rdquo;
          </p>
          <div className="flex items-center gap-3">
            <span className="w-6 h-[1px] bg-champagne-400" />
            <span className="text-xs uppercase font-mono tracking-widest text-champagne-300">
              Shailendra Patidar — Core Engineering Philosophy
            </span>
          </div>
        </div>
      </section>

      {/* Narrative Grid */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Main Narrative Column */}
          <div className="lg:col-span-7 space-y-10">
            {/* Section 1: Introduction & Philosophy */}
            <div className="p-8 sm:p-10 rounded-3xl bg-background-card/80 border border-white/5 shadow-card-subtle">
              <h2 className="font-serif text-2xl font-bold text-ivory mb-4">
                Professional Introduction
              </h2>
              <div className="space-y-4 text-ivory-muted text-sm sm:text-base leading-relaxed font-light">
                <p>
                  I am <strong className="text-ivory font-medium">Shailendra Patidar</strong>, an aspiring AI/ML and Python Developer based in Indore, India. My development ethos revolves around writing disciplined, maintainable code that transforms raw algorithms into tangible, user-serving digital systems.
                </p>
                <p>
                  Rather than viewing machine learning in isolation as a notebook experiment, I focus on the holistic engineering lifecycle: how models are served asynchronously through FastAPI, how unstructured data is extracted using OCR, how documents are retrieved contextually via dense vector embeddings, and how backends interface with modern frontend clients.
                </p>
              </div>
            </div>

            {/* Section 2: Journey into Programming */}
            <div className="p-8 sm:p-10 rounded-3xl bg-background-card/80 border border-white/5 shadow-card-subtle">
              <h2 className="font-serif text-2xl font-bold text-ivory mb-4">
                My Journey into Programming
              </h2>
              <div className="space-y-4 text-ivory-muted text-sm sm:text-base leading-relaxed font-light">
                <p>
                  My engineering journey began with foundational computer science languages—<span className="text-champagne-300 font-medium">C and C++</span>. Exploring low-level memory allocation, pointer mechanics, and data structures provided an indispensable mental model for computational cost, time complexity, and memory efficiency.
                </p>
                <p>
                  Transitioning to <span className="text-champagne-300 font-medium">Python</span> opened the door to rapid software engineering and data science. I immersed myself in the core numerical ecosystem: NumPy for vector operations, Pandas for dataframe wrangling, and Scikit-learn for statistical modeling. This grounded my interest in building intelligent, data-driven systems.
                </p>
              </div>
            </div>

            {/* Section 3: AI/ML & Generative AI Fascination */}
            <div className="p-8 sm:p-10 rounded-3xl bg-background-card/80 border border-white/5 shadow-card-subtle">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-champagne-400/10 text-champagne-400 border border-champagne-400/20">
                  <BrainCircuit className="w-5 h-5" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-ivory">
                  Interest in AI/ML &amp; Generative AI
                </h2>
              </div>
              <div className="space-y-4 text-ivory-muted text-sm sm:text-base leading-relaxed font-light">
                <p>
                  The advent of large language models transformed how software interacts with knowledge. However, standard LLMs struggle with factual hallucinations and lack access to proprietary enterprise data. This realization led directly to my dedication to <span className="text-champagne-300 font-medium">Retrieval-Augmented Generation (RAG)</span>.
                </p>
                <p>
                  I am fascinated by how semantic chunking strategies, dense vector embeddings, and cosine similarity indexing bridge the gap between static documents and dynamic reasoning. From building OCR pipelines for lab reports to designing vector retrieval for document querying, I concentrate on building verifiable, non-hallucinatory AI systems.
                </p>
              </div>
            </div>

            {/* Section 4: Professional Goals */}
            <div className="p-8 sm:p-10 rounded-3xl bg-background-card/80 border border-white/5 shadow-card-subtle">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-champagne-400/10 text-champagne-400 border border-champagne-400/20">
                  <Target className="w-5 h-5" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-ivory">
                  Professional Goals &amp; Outlook
                </h2>
              </div>
              <div className="space-y-4 text-ivory-muted text-sm sm:text-base leading-relaxed font-light">
                <p>
                  My goal is to evolve into a versatile Machine Learning Systems Engineer capable of designing resilient backend architectures, evaluating production inference pipelines, and deploying high-utility AI applications.
                </p>
                <p>
                  I look forward to contributing to high-standard engineering teams where code quality, algorithmic rigor, and continuous learning are foundational values.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Featured Internship Card & Sticky Summary */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Featured Internship Spotlight */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-background-card via-[#161622] to-background-card border border-champagne-400/30 shadow-[0_12px_40px_rgba(212,175,55,0.12)] relative overflow-hidden">
              <div className="inline-block px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest text-background-dark bg-champagne-400 font-bold mb-4 shadow-gold-glow">
                Featured Experience
              </div>

              <div className="flex items-center gap-3 mb-2">
                <Building className="w-5 h-5 text-champagne-400" />
                <h3 className="font-serif text-2xl font-bold text-ivory">
                  Encoresky Technologies
                </h3>
              </div>
              <p className="text-sm font-semibold text-champagne-300 mb-4">
                AI/ML Intern
              </p>

              <div className="flex flex-col gap-2 text-xs text-ivory-subtle font-mono mb-6 pb-6 border-b border-white/10">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-champagne-400" />
                  <span>Duration: February 14, 2026 – August 14, 2026</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-champagne-400" />
                  <span>Location: Indore, India</span>
                </span>
              </div>

              <div className="space-y-3 mb-6">
                <h4 className="text-xs uppercase tracking-wider text-champagne-400 font-mono font-semibold">
                  Core Focus &amp; Learning
                </h4>
                <div className="space-y-2.5 text-xs text-ivory-muted leading-relaxed">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-champagne-400 flex-shrink-0 mt-0.5" />
                    <span>Developing and testing contextual Retrieval-Augmented Generation (RAG) pipelines for enterprise documents.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-champagne-400 flex-shrink-0 mt-0.5" />
                    <span>Constructing clean, asynchronous FastAPI backend microservices to serve machine learning inference.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-champagne-400 flex-shrink-0 mt-0.5" />
                    <span>Conducting dataset preprocessing, feature engineering, and exploratory analysis in Pandas and NumPy.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-champagne-400 flex-shrink-0 mt-0.5" />
                    <span>Collaborating on practical software solutions combining ML components with modern web user interfaces.</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex flex-wrap gap-1.5">
                {["Python", "FastAPI", "RAG", "Machine Learning", "Pandas", "Scikit-learn"].map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-white/[0.04] text-ivory-muted border border-white/5"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Credentials Card */}
            <div className="p-8 rounded-3xl bg-background-card/80 border border-white/5 shadow-card-subtle">
              <h4 className="font-serif text-xl font-bold text-ivory mb-4">
                At a Glance
              </h4>
              <ul className="space-y-3 text-xs text-ivory-muted font-mono">
                <li className="flex justify-between pb-2 border-b border-white/5">
                  <span className="text-ivory-subtle">Location:</span>
                  <span className="text-ivory font-medium">{PERSONAL_INFO.location}</span>
                </li>
                <li className="flex justify-between pb-2 border-b border-white/5">
                  <span className="text-ivory-subtle">Languages:</span>
                  <span className="text-ivory font-medium">Python, C, C++</span>
                </li>
                <li className="flex justify-between pb-2 border-b border-white/5">
                  <span className="text-ivory-subtle">Backend Core:</span>
                  <span className="text-ivory font-medium">FastAPI, REST APIs</span>
                </li>
                <li className="flex justify-between pb-2 border-b border-white/5">
                  <span className="text-ivory-subtle">Databases:</span>
                  <span className="text-ivory font-medium">MySQL, SQLite</span>
                </li>
                <li className="flex justify-between pb-2 border-b border-white/5">
                  <span className="text-ivory-subtle">Core Focus:</span>
                  <span className="text-champagne-300 font-medium">AI/ML &amp; RAG Systems</span>
                </li>
              </ul>

              <div className="mt-6 pt-4 border-t border-white/10">
                <Link
                  href="/resume-contact"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-background-dark bg-champagne-400 hover:bg-champagne-300 transition-colors shadow-gold-glow"
                >
                  <span>View Verified Resume</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Animated Vertical Journey Timeline */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 mb-28">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-champagne-400 font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Milestones &amp; Evolution</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ivory tracking-tight mb-4">
            Professional &amp; Learning Timeline
          </h2>
          <p className="text-ivory-muted text-sm sm:text-base leading-relaxed font-light">
            Tracing academic foundations, applied machine learning projects, and active industry internship.
          </p>
        </div>

        <Timeline />
      </section>

      <FinalCTA />
    </div>
  );
}
