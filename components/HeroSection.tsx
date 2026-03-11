import { siteConfig } from "@/lib/data";

export function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-[100dvh] flex items-center relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_60%,rgba(6,182,212,0.06),transparent_50%)]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between gap-8">
        {/* Left side — text */}
        <div className="flex-1 relative z-10">
          <p className="font-mono text-cyan-500 text-sm tracking-[0.2em] mb-4">
            @{siteConfig.username}
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold text-slate-100 mb-2">
            {siteConfig.name}
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 mb-2">
            {siteConfig.title}
          </p>
          <p className="text-sm text-slate-500 mb-8 max-w-md">
            {siteConfig.subtitle}
          </p>
          <div className="flex gap-4">
            <a
              href="#projects"
              className="px-5 py-2.5 bg-cyan-500/15 border border-cyan-500/30 rounded-md text-cyan-400 text-sm font-medium hover:bg-cyan-500/20 transition-all duration-300"
            >
              View Projects
            </a>
            <a
              href={siteConfig.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-md text-slate-400 text-sm font-medium hover:border-cyan-500/30 hover:text-cyan-400 transition-all duration-300"
            >
              GitHub Profile
            </a>
          </div>
        </div>

        {/* Right side — terminal icon */}
        <div className="hidden sm:flex flex-shrink-0 items-center justify-center">
          <div className="relative">
            {/* Outer pulse ring */}
            <div className="absolute inset-0 rounded-full border border-cyan-500/20 animate-pulse-ring" />
            {/* Main circle */}
            <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full border border-cyan-500/15 bg-cyan-500/[0.03] flex items-center justify-center">
              <span className="font-mono text-3xl lg:text-4xl text-cyan-500">
                &gt;<span className="animate-blink">_</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
