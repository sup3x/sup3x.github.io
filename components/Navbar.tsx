"use client";

import { useState, useEffect, useCallback } from "react";
import { useActiveSection } from "@/lib/useActiveSection";

const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "tech", label: "Tech" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const activeSection = useActiveSection();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = useCallback((id: string) => {
    setIsMobileOpen(false);
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (!isMobileOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      const nav = document.getElementById("navbar");
      if (nav && !nav.contains(e.target as Node)) {
        setIsMobileOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMobileOpen]);

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#030712]/80 backdrop-blur-xl border-b border-cyan-500/10 shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between">
        <button
          onClick={() => handleLinkClick("home")}
          className="font-mono font-bold text-lg tracking-wider group"
        >
          <span className="gradient-text-animated group-hover:animate-text-glow transition-all">sup3x</span>
        </button>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleLinkClick(link.id)}
                className={`relative text-sm transition-all duration-300 pb-1 group ${
                  activeSection === link.id
                    ? "text-cyan-400"
                    : "text-slate-400 hover:text-cyan-400"
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-cyan-400 to-cyan-600 transition-all duration-300 ${
                    activeSection === link.id ? "w-full shadow-[0_0_8px_rgba(6,182,212,0.4)]" : "w-0 group-hover:w-full"
                  }`}
                />
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="md:hidden text-slate-400 hover:text-cyan-400 transition-colors"
          aria-label={isMobileOpen ? "Close menu" : "Open menu"}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {isMobileOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile panel */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileOpen ? "max-h-80 bg-[#030712]/95 backdrop-blur-xl border-b border-cyan-500/10" : "max-h-0"
        }`}
      >
        <ul className="px-4 pb-4 space-y-1">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleLinkClick(link.id)}
                className={`block w-full text-left py-3 text-sm transition-all duration-300 ${
                  activeSection === link.id
                    ? "text-cyan-400 pl-3 border-l-2 border-cyan-500/50"
                    : "text-slate-400 hover:text-cyan-400 hover:pl-3"
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
