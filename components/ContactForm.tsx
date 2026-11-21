"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, Copy, Check, Mail, Github, Linkedin, Sparkles, MessageSquare } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio";

const INQUIRY_TOPICS = [
  "AI/ML Role Inquiry",
  "Python Backend Engineering",
  "RAG Pipeline Architecture",
  "Technical Consultation",
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Full name is required";
    if (!formData.email.trim()) {
      errs.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address";
    }
    if (!formData.subject.trim()) errs.subject = "Subject line is required";
    if (!formData.message.trim()) {
      errs.message = "Message content is required";
    } else if (formData.message.trim().length < 15) {
      errs.message = "Please write at least 15 characters";
    }
    return errs;
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSelectTopic = (topic: string) => {
    setFormData((prev) => ({ ...prev, subject: topic }));
    if (errors.subject) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next.subject;
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setStatusMessage(
          data.message || "Thank you. Your message has been transmitted successfully."
        );
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
        setStatusMessage(
          data.error || "Unable to send your message right now. Please reach out directly via email."
        );
      }
    } catch {
      setStatus("error");
      setStatusMessage(
        "Network connection error. Please write directly to " + PERSONAL_INFO.email
      );
    }
  };

  return (
    <div id="contact" className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
      {/* Left: Contact Channels & Credentials */}
      <div className="lg:col-span-5 space-y-6">
        <div>
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-champagne-400 font-semibold mb-4 px-3.5 py-1.5 rounded-full bg-champagne-400/10 border border-champagne-400/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct Communication</span>
          </div>
          <h3 className="font-serif text-3xl font-bold text-ivory mb-4">
            Let&apos;s talk about engineering &amp; collaboration.
          </h3>
          <p className="text-sm text-ivory-muted leading-relaxed font-light mb-8">
            Available for discussions regarding AI/ML internships, Python development projects, Retrieval-Augmented Generation systems, and research partnerships.
          </p>
        </div>

        {/* Email Card with Quick Copy */}
        <div className="p-6 rounded-2xl bg-background-card/90 border border-white/5 hover:border-champagne-400/40 transition-colors shadow-card-subtle">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-champagne-400 font-semibold">
              Primary Electronic Mail
            </span>
            <button
              onClick={handleCopyEmail}
              className="text-xs text-champagne-300 hover:text-ivory flex items-center gap-1 font-mono transition-colors"
              title="Copy email to clipboard"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="text-base font-serif font-semibold text-ivory hover:text-champagne-300 transition-colors flex items-center gap-2"
          >
            <Mail className="w-4 h-4 text-champagne-400" />
            <span>{PERSONAL_INFO.email}</span>
          </a>
        </div>

        {/* Social Link Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* GitHub */}
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl bg-background-card/90 border border-white/5 hover:border-champagne-400/40 transition-colors flex items-center gap-3.5 group shadow-card-subtle"
          >
            <div className="p-2 rounded-xl bg-white/[0.04] text-ivory group-hover:text-champagne-300 transition-colors">
              <Github className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-semibold text-ivory group-hover:text-champagne-300 transition-colors block">
                GitHub
              </span>
              <span className="text-[11px] text-ivory-subtle font-mono">
                Source Repositories
              </span>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl bg-background-card/90 border border-white/5 hover:border-champagne-400/40 transition-colors flex items-center gap-3.5 group shadow-card-subtle"
          >
            <div className="p-2 rounded-xl bg-white/[0.04] text-ivory group-hover:text-champagne-300 transition-colors">
              <Linkedin className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-semibold text-ivory group-hover:text-champagne-300 transition-colors block">
                LinkedIn
              </span>
              <span className="text-[11px] text-ivory-subtle font-mono">
                Professional Network
              </span>
            </div>
          </a>
        </div>
      </div>

      {/* Right: Functional Form */}
      <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-background-card/90 border border-white/10 shadow-card-subtle">
        <h4 className="font-serif text-2xl font-bold text-ivory mb-2">
          Send a Direct Dispatch
        </h4>
        <p className="text-xs text-ivory-muted mb-6 font-light">
          Fill in your details below. Messages are validated and dispatched securely.
        </p>

        {/* Quick Topic Chips */}
        <div className="mb-6">
          <span className="text-[10px] font-mono uppercase tracking-widest text-champagne-400 block mb-2 font-semibold">
            Quick Inquiries (Click to pre-fill)
          </span>
          <div className="flex flex-wrap gap-2">
            {INQUIRY_TOPICS.map((topic) => (
              <button
                key={topic}
                type="button"
                onClick={() => handleSelectTopic(topic)}
                className={`px-3 py-1 rounded-full text-xs font-mono transition-colors border ${
                  formData.subject === topic
                    ? "bg-champagne-400 text-background-dark font-semibold border-champagne-400"
                    : "bg-white/[0.03] text-ivory-muted border-white/10 hover:border-champagne-400/50 hover:text-ivory"
                }`}
              >
                {topic}
              </button>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          {/* Name & Email Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-xs uppercase tracking-wider font-mono text-champagne-300 mb-2">
                Your Full Name *
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Jane Doe"
                className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-ivory text-sm focus:outline-none transition-colors ${
                  errors.name
                    ? "border-rose-500/80 focus:border-rose-500"
                    : "border-white/10 focus:border-champagne-400"
                }`}
              />
              {errors.name && (
                <p className="text-xs text-rose-400 mt-1.5 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.name}</span>
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-xs uppercase tracking-wider font-mono text-champagne-300 mb-2">
                Your Email Address *
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="jane@example.com"
                className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-ivory text-sm focus:outline-none transition-colors ${
                  errors.email
                    ? "border-rose-500/80 focus:border-rose-500"
                    : "border-white/10 focus:border-champagne-400"
                }`}
              />
              {errors.email && (
                <p className="text-xs text-rose-400 mt-1.5 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.email}</span>
                </p>
              )}
            </div>
          </div>

          {/* Subject */}
          <div>
            <label htmlFor="subject" className="block text-xs uppercase tracking-wider font-mono text-champagne-300 mb-2">
              Subject Inquiry *
            </label>
            <input
              id="subject"
              type="text"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              placeholder="e.g. AI/ML Engineering Collaboration"
              className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-ivory text-sm focus:outline-none transition-colors ${
                errors.subject
                  ? "border-rose-500/80 focus:border-rose-500"
                  : "border-white/10 focus:border-champagne-400"
              }`}
            />
            {errors.subject && (
              <p className="text-xs text-rose-400 mt-1.5 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                <span>{errors.subject}</span>
              </p>
            )}
          </div>

          {/* Message */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label htmlFor="message" className="block text-xs uppercase tracking-wider font-mono text-champagne-300">
                Your Message *
              </label>
              <span className="text-[10px] font-mono text-ivory-subtle">
                {formData.message.length} chars (min 15)
              </span>
            </div>
            <textarea
              id="message"
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Share details about the role, project scope, or technical challenge..."
              className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-ivory text-sm focus:outline-none transition-colors resize-none ${
                errors.message
                  ? "border-rose-500/80 focus:border-rose-500"
                  : "border-white/10 focus:border-champagne-400"
              }`}
            />
            {errors.message && (
              <p className="text-xs text-rose-400 mt-1.5 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                <span>{errors.message}</span>
              </p>
            )}
          </div>

          {/* Status Banners */}
          <AnimatePresence>
            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>{statusMessage}</span>
              </motion.div>
            )}

            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="p-4 rounded-xl bg-rose-950/40 border border-rose-500/40 text-rose-300 text-xs flex items-center gap-2"
              >
                <AlertCircle className="w-4 h-4 text-rose-400 flex-shrink-0" />
                <span>{statusMessage}</span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider text-background-dark bg-champagne-400 hover:bg-champagne-300 disabled:opacity-50 transition-all duration-300 shadow-gold-glow hover:shadow-gold-glow-lg focus:outline-none focus:ring-2 focus:ring-champagne-400"
          >
            {status === "submitting" ? (
              <span>Transmitting Dispatch...</span>
            ) : (
              <>
                <Send className="w-3.5 h-3.5" />
                <span>Dispatch Message</span>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
