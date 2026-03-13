"use client";

import { siteConfig } from "@/lib/data";
import { useEffect, useState } from "react";

const roles = [
  "Developer & Open Source Builder",
  "CLI Tool Builder",
  "npm Package Author",
  "DevTools Maker",
];

export function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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

      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-500/[0.04] rounded-full blur-3xl animate-breathe" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-cyan-400/[0.03] rounded-full blur-3xl animate-breathe" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/[0.02] rounded-full blur-3xl animate-breathe" style={{ animationDelay: "1s" }} />

      {/* Scan line */}
      <div className="scan-line" />

      {/* Floating particles */}
      <div className="absolute top-[15%] left-[8%] w-1.5 h-1.5 bg-cyan-500/40 rounded-full animate-float" />
      <div className="absolute top-[25%] right-[12%] w-2 h-2 bg-cyan-400/25 rounded-full animate-float-slow" />
      <div className="absolute bottom-[30%] left-[18%] w-1 h-1 bg-cyan-500/35 rounded-full animate-float-delayed" />
      <div className="absolute top-[55%] right-[22%] w-1 h-1 bg-cyan-400/30 rounded-full animate-float" />
      <div className="absolute top-[18%] right-[35%] w-1.5 h-1.5 bg-cyan-500/20 rounded-full animate-float-slow" />
      <div className="absolute bottom-[20%] left-[40%] w-2 h-2 bg-cyan-400/15 rounded-full animate-float-delayed" />
      <div className="absolute top-[40%] left-[5%] w-1 h-1 bg-cyan-300/20 rounded-full animate-float" style={{ animationDelay: "0.5s" }} />
      <div className="absolute bottom-[15%] right-[8%] w-1.5 h-1.5 bg-cyan-500/25 rounded-full animate-float-slow" style={{ animationDelay: "1s" }} />

      {/* Orbiting elements — hidden on mobile to prevent overflow */}
      <div className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="w-2 h-2 bg-cyan-500/20 rounded-full animate-orbit" />
      </div>
      <div className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="w-1.5 h-1.5 bg-cyan-400/15 rounded-full animate-orbit-reverse" />
      </div>

      <div
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between gap-8 relative z-10"
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 1s ease-out, transform 1s ease-out",
        }}
      >
        {/* Left side — text */}
        <div className="flex-1">
          <div
            className="font-mono text-cyan-500/60 text-xs tracking-widest mb-6 flex items-center gap-2"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateX(0)" : "translateX(-20px)",
              transition: "opacity 0.8s ease-out 0.3s, transform 0.8s ease-out 0.3s",
            }}
          >
            <span className="w-8 h-px bg-gradient-to-r from-cyan-500/60 to-transparent" />
            WELCOME
          </div>

          <p
            className="font-mono text-cyan-400 text-sm tracking-[0.2em] mb-4 animate-text-glow"
            style={{
              opacity: mounted ? 1 : 0,
              transition: "opacity 0.8s ease-out 0.5s",
            }}
          >
            @{siteConfig.username}
          </p>

          <h1
            className="text-4xl sm:text-6xl lg:text-8xl font-bold text-slate-100 mb-3"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(30px)",
              transition: "opacity 0.8s ease-out 0.6s, transform 0.8s ease-out 0.6s",
            }}
          >
            <span className="glitch" data-text={siteConfig.name}>
              {siteConfig.name}
            </span>
            <span className="gradient-text-animated text-5xl sm:text-7xl lg:text-9xl">.</span>
          </h1>

          <div
            className="text-base sm:text-xl text-slate-400 mb-2 flex items-center gap-1 h-7 sm:h-8"
            style={{
              opacity: mounted ? 1 : 0,
              transition: "opacity 0.8s ease-out 0.8s",
            }}
          >
            <span className="font-mono text-cyan-500/60">&gt;</span>{" "}
            <span className="text-slate-300">{displayed}</span>
            <span className="animate-blink text-cyan-400 font-mono text-xl">|</span>
          </div>

          <p
            className="text-xs sm:text-base text-slate-500 mb-8 sm:mb-10 max-w-lg leading-relaxed"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(15px)",
              transition: "opacity 0.8s ease-out 1s, transform 0.8s ease-out 1s",
            }}
          >
            {siteConfig.subtitle}
          </p>

          <div
            className="flex flex-wrap gap-4"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(15px)",
              transition: "opacity 0.8s ease-out 1.2s, transform 0.8s ease-out 1.2s",
            }}
          >
            <a
              href="#projects"
              className="group relative px-5 sm:px-7 py-3 bg-cyan-500/15 border border-cyan-500/30 rounded-md text-cyan-400 text-sm font-medium hover:bg-cyan-500/25 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] hover:-translate-y-0.5 transition-all duration-300"
            >
              <span className="mr-2 font-mono text-cyan-500/60 group-hover:text-cyan-400 transition-colors">$</span>
              View Projects
            </a>
            <a
              href={siteConfig.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group px-5 sm:px-7 py-3 bg-white/5 border border-white/10 rounded-md text-slate-400 text-sm font-medium hover:border-cyan-500/30 hover:text-cyan-400 hover:bg-cyan-500/5 hover:-translate-y-0.5 transition-all duration-300"
            >
              <span className="mr-2 font-mono text-slate-600 group-hover:text-cyan-500/60 transition-colors">~</span>
              GitHub Profile
            </a>
          </div>

          {/* Terminal status line */}
          <div
            className="mt-8 sm:mt-12 font-mono text-[10px] sm:text-xs text-slate-600 flex flex-wrap items-center gap-2 sm:gap-4"
            style={{
              opacity: mounted ? 1 : 0,
              transition: "opacity 1s ease-out 1.5s",
            }}
          >
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80 shadow-[0_0_6px_rgba(16,185,129,0.5)] animate-pulse" />
              online
            </span>
            <span className="text-slate-700">|</span>
            <span>3 packages on npm</span>
          </div>
        </div>

        {/* Right side — terminal window */}
        <div className="hidden md:flex flex-shrink-0 items-center justify-center">
          <div
            className="relative"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateX(0) scale(1)" : "translateX(30px) scale(0.95)",
              transition: "opacity 1s ease-out 0.8s, transform 1s ease-out 0.8s",
            }}
          >
            {/* Outer glow */}
            <div className="absolute -inset-6 rounded-2xl bg-cyan-500/[0.04] blur-2xl animate-breathe" />

            {/* Terminal window */}
            <div className="relative w-72 lg:w-80 bg-bg-card border border-cyan-500/15 rounded-lg overflow-hidden animate-glow-strong">
              {/* Title bar */}
              <div className="flex items-center gap-2 px-4 py-2.5 bg-cyan-500/[0.06] border-b border-cyan-500/10">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/60 hover:bg-red-500 transition-colors" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60 hover:bg-yellow-500 transition-colors" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/60 hover:bg-green-500 transition-colors" />
                </div>
                <span className="ml-2 font-mono text-[10px] text-slate-600">sup3x@dev ~ zsh</span>
              </div>

              {/* Terminal body */}
              <div className="p-4 font-mono text-xs space-y-1.5">
                <div className="text-slate-500">
                  <span className="text-cyan-500">$</span> npx reqbench api.example.com
                </div>
                <div className="pl-2 text-emerald-400/80">200 OK — p95: 241ms</div>

                <div className="text-slate-500 pt-1">
                  <span className="text-cyan-500">$</span> npx envi-switch use staging
                </div>
                <div className="pl-2 text-cyan-400/80">Switched to staging</div>

                <div className="text-slate-500 pt-1">
                  <span className="text-cyan-500">$</span> npx git-poster --theme dark
                </div>
                <div className="pl-2 text-cyan-400/70">Wrote git-poster.svg</div>

                <div className="text-slate-500 pt-1">
                  <span className="text-cyan-500">$</span> npm whoami
                </div>
                <div className="pl-2 text-slate-300">sup3x</div>

                <div className="flex items-center gap-1 text-slate-500 pt-1">
                  <span className="text-cyan-500">$</span>
                  <span className="animate-blink text-cyan-400">_</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{
          opacity: mounted ? 1 : 0,
          transition: "opacity 1.5s ease-out 2s",
        }}
      >
        <span className="text-[10px] font-mono text-slate-600 tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 border border-cyan-500/20 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-cyan-500/50 rounded-full animate-float" />
        </div>
      </div>
    </section>
  );
}
