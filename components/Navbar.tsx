"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Resume & Contact", href: "/resume-contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#09090b]/90 backdrop-blur-md border-b border-champagne-400/15 py-3.5 shadow-2xl"
            : "bg-transparent py-6 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Logo / Monogram */}
          <Link
            href="/"
            className="group flex items-center gap-3.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne-400 rounded-sm"
          >
            <div className="w-10 h-10 rounded-full border border-champagne-400/40 flex items-center justify-center transition-all duration-300 group-hover:border-champagne-400 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] bg-background-card/50">
              <span className="font-serif text-sm font-bold tracking-wider text-champagne-300 group-hover:text-champagne-200">
                {PERSONAL_INFO.initials}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-base font-semibold text-ivory tracking-wide group-hover:text-champagne-300 transition-colors">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-ivory-subtle">
                AI/ML & Python
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-background-card/60 backdrop-blur-sm border border-white/5 rounded-full px-4 py-1.5 shadow-card-subtle">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-1.5 text-xs font-medium tracking-wider uppercase transition-colors duration-300 rounded-full focus:outline-none focus-visible:ring-1 focus-visible:ring-champagne-400 ${
                    isActive ? "text-ivory font-semibold" : "text-ivory-muted hover:text-ivory"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-white/10 border border-champagne-400/30 rounded-full shadow-[0_0_15px_rgba(212,175,55,0.15)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-champagne-400 shadow-[0_0_6px_rgba(212,175,55,0.9)]" />
                    )}
                    {link.name}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Right Action: "Let's Talk" CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/resume-contact#contact"
              className="relative inline-flex items-center justify-center gap-2 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-ivory bg-transparent border border-champagne-400/50 rounded-full hover:border-champagne-300 transition-all duration-300 group overflow-hidden shadow-[0_0_15px_rgba(212,175,55,0.12)] hover:shadow-[0_0_25px_rgba(212,175,55,0.25)] focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne-400"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-champagne-500/10 via-champagne-400/20 to-champagne-300/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative z-10 text-champagne-300 group-hover:text-ivory font-medium">
                Let&apos;s Talk
              </span>
              <ArrowUpRight className="relative z-10 w-3.5 h-3.5 text-champagne-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Hamburger Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full border border-champagne-400/30 text-champagne-300 hover:text-ivory hover:border-champagne-300 transition-colors focus:outline-none focus:ring-2 focus:ring-champagne-400"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 top-[73px] z-40 bg-[#09090b]/98 backdrop-blur-xl border-t border-champagne-400/15 p-6 flex flex-col justify-between md:hidden"
          >
            <div className="flex flex-col gap-4 mt-6">
              <span className="text-xs uppercase tracking-[0.25em] text-champagne-400/80 mb-2">
                Menu Navigation
              </span>
              {NAV_LINKS.map((link, idx) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * idx, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between text-2xl font-serif py-3 border-b border-white/5 transition-colors ${
                        isActive
                          ? "text-champagne-400 font-semibold pl-2"
                          : "text-ivory-muted hover:text-ivory"
                      }`}
                    >
                      <span>{link.name}</span>
                      <ArrowUpRight
                        className={`w-5 h-5 ${
                          isActive ? "text-champagne-400" : "text-ivory-subtle"
                        }`}
                      />
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col gap-4">
              <Link
                href="/resume-contact#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3.5 rounded-full bg-champagne-400 text-background-dark font-semibold text-sm uppercase tracking-wider shadow-gold-glow"
              >
                Let&apos;s Talk
              </Link>
              <div className="text-center text-xs text-ivory-subtle">
                {PERSONAL_INFO.email}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
