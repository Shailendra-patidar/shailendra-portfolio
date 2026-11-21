import Link from "next/link";
import { ArrowUpRight, Github, Linkedin, Mail, Heart } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#070709] border-t border-white/5 text-ivory pt-16 pb-12 overflow-hidden">
      {/* Subtle Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-champagne-400/40 to-transparent" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-champagne-400/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/5">
          {/* Brand & Editorial Mission */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full border border-champagne-400/40 flex items-center justify-center bg-background-card/50">
                  <span className="font-serif text-xs font-bold text-champagne-300">
                    {PERSONAL_INFO.initials}
                  </span>
                </div>
                <span className="font-serif text-xl font-bold tracking-wide text-ivory">
                  {PERSONAL_INFO.name}
                </span>
              </div>
              <p className="text-sm text-ivory-muted max-w-sm leading-relaxed mb-6">
                Specializing in Retrieval-Augmented Generation, machine learning pipelines, and robust Python backend systems. Creating intelligent software with precision.
              </p>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs text-ivory-muted tracking-wide font-mono">
                {PERSONAL_INFO.status}
              </span>
            </div>
          </div>

          {/* Navigation Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.25em] text-champagne-400/90 font-semibold mb-6">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { name: "Home", href: "/" },
                { name: "About & Journey", href: "/about" },
                { name: "Featured Projects", href: "/projects" },
                { name: "Resume & Contact", href: "/resume-contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-ivory-muted hover:text-champagne-300 transition-colors flex items-center gap-1.5 group"
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-champagne-400/50 group-hover:text-champagne-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Socials */}
          <div className="md:col-span-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-champagne-400/90 font-semibold mb-6">
              Direct Contact
            </h4>
            <p className="text-sm text-ivory-muted mb-4">
              Open to technical conversations, collaborative research, and engineering roles.
            </p>
            <div className="flex flex-col gap-3 text-sm">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-champagne-300 hover:text-ivory transition-colors flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-champagne-400" />
                <span>{PERSONAL_INFO.email}</span>
              </a>

              <div className="flex items-center gap-4 mt-2">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full border border-white/10 hover:border-champagne-400/60 bg-white/[0.02] text-ivory hover:text-champagne-300 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full border border-white/10 hover:border-champagne-400/60 bg-white/[0.02] text-ivory hover:text-champagne-300 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.resumePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold uppercase tracking-wider text-champagne-300 hover:text-ivory px-4 py-2 rounded-full border border-champagne-400/40 hover:border-champagne-300 transition-colors"
                >
                  View CV
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-ivory-subtle gap-4">
          <p>© {currentYear} {PERSONAL_INFO.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>Crafted with precision &amp; modern engineering</span>
          </p>
          <div className="font-mono text-[11px] text-ivory-subtle">
            Next.js App Router • TypeScript • Tailwind
          </div>
        </div>
      </div>
    </footer>
  );
}
