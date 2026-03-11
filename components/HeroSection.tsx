"use client";

import { siteConfig } from "@/lib/data";
import { useEffect, useState } from "react";

const roles = [
  "Developer",
  "AI Explorer",
  "Automation Builder",
  "Open Source Contributor",
  "System Tinkerer",
];

export function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 40);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="min-h-[100dvh] flex items-center relative overflow-hidden"
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg" />

      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_60%,rgba(6,182,212,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(6,182,212,0.04),transparent_40%)]" />

      {/* Scan line */}
      <div className="scan-line" />

      {/* Floating particles */}
      <div className="absolute top-1/4 left-[10%] w-1 h-1 bg-cyan-500/30 rounded-full animate-float" />
      <div className="absolute top-1/3 right-[15%] w-1.5 h-1.5 bg-cyan-400/20 rounded-full animate-float-slow" />
      <div className="absolute bottom-1/3 left-[20%] w-1 h-1 bg-cyan-500/25 rounded-full animate-float-delayed" />
      <div className="absolute top-[60%] right-[25%] w-0.5 h-0.5 bg-cyan-400/30 rounded-full animate-float" />
      <div className="absolute top-[20%] right-[40%] w-1 h-1 bg-cyan-500/15 rounded-full animate-float-slow" />
      <div className="absolute bottom-[20%] left-[45%] w-1.5 h-1.5 bg-cyan-400/20 rounded-full animate-float-delayed" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between gap-8 relative z-10">
        {/* Left side — text */}
        <div className="flex-1">
          <div className="font-mono text-cyan-500/60 text-xs tracking-widest mb-6 flex items-center gap-2">
            <span className="w-6 h-px bg-cyan-500/40" />
            WELCOME
          </div>

          <p className="font-mono text-cyan-400 text-sm tracking-[0.2em] mb-4">
            @{siteConfig.username}
          </p>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-slate-100 mb-3">
            {siteConfig.name}
            <span className="gradient-text">.</span>
          </h1>

          <div className="text-lg sm:text-xl text-slate-400 mb-2 flex items-center gap-1">
            <span className="font-mono text-cyan-500/60">&gt;</span>{" "}
            <span>{displayed}</span>
            <span className="animate-blink text-cyan-400 font-mono">|</span>
          </div>

          <p className="text-sm text-slate-500 mb-10 max-w-md leading-relaxed">
            {siteConfig.subtitle}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group px-6 py-3 bg-cyan-500/15 border border-cyan-500/30 rounded-md text-cyan-400 text-sm font-medium hover:bg-cyan-500/25 hover:shadow-[0_0_25px_rgba(6,182,212,0.15)] transition-all duration-300"
            >
              <span className="mr-2 font-mono text-cyan-500/60 group-hover:text-cyan-400 transition-colors">$</span>
              View Projects
            </a>
            <a
              href={siteConfig.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group px-6 py-3 bg-white/5 border border-white/10 rounded-md text-slate-400 text-sm font-medium hover:border-cyan-500/30 hover:text-cyan-400 hover:bg-cyan-500/5 transition-all duration-300"
            >
              <span className="mr-2 font-mono text-slate-600 group-hover:text-cyan-500/60 transition-colors">~</span>
              GitHub Profile
            </a>
          </div>

          {/* Terminal status line */}
          <div className="mt-12 font-mono text-xs text-slate-600 flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/60 animate-pulse" />
              online
            </span>
            <span className="text-slate-700">|</span>
            <span>ready for collaboration</span>
          </div>
        </div>

        {/* Right side — terminal window */}
        <div className="hidden md:flex flex-shrink-0 items-center justify-center">
          <div className="relative">
            {/* Outer glow */}
            <div className="absolute -inset-4 rounded-2xl bg-cyan-500/[0.03] blur-xl" />

            {/* Terminal window */}
            <div className="relative w-64 lg:w-72 bg-bg-card border border-cyan-500/15 rounded-lg overflow-hidden animate-glow">
              {/* Title bar */}
              <div className="flex items-center gap-2 px-4 py-2.5 bg-cyan-500/[0.06] border-b border-cyan-500/10">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                <span className="ml-2 font-mono text-[10px] text-slate-600">sup3x@dev ~</span>
              </div>

              {/* Terminal body */}
              <div className="p-4 font-mono text-xs space-y-2">
                <div className="text-slate-500">
                  <span className="text-cyan-500">$</span> whoami
                </div>
                <div className="text-slate-300">sup3x</div>

                <div className="text-slate-500 mt-1">
                  <span className="text-cyan-500">$</span> cat interests.txt
                </div>
                <div className="text-cyan-400/80">AI</div>
                <div className="text-cyan-400/70">Automation</div>
                <div className="text-cyan-400/60">Systems</div>
                <div className="text-cyan-400/50">Open Source</div>

                <div className="text-slate-500 mt-1">
                  <span className="text-cyan-500">$</span> echo $STATUS
                </div>
                <div className="text-emerald-400/80">Building cool stuff...</div>

                <div className="flex items-center gap-1 text-slate-500 mt-1">
                  <span className="text-cyan-500">$</span>
                  <span className="animate-blink text-cyan-400">_</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] font-mono text-slate-600 tracking-widest">SCROLL</span>
        <div className="w-px h-8 bg-gradient-to-b from-cyan-500/40 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
