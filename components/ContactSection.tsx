import { siteConfig } from "@/lib/data";
import { AnimatedSection } from "./AnimatedSection";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 sm:py-28 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.05),transparent_60%)]" />
      <div className="absolute inset-0 dot-grid opacity-30" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <AnimatedSection delay={100} animation="scale">
          {/* Terminal prompt decoration */}
          <div className="font-mono text-xs text-slate-600 mb-6 space-y-1">
            <p>
              <span className="text-cyan-500/50">$</span> echo &quot;hello world&quot;
            </p>
            <p className="text-cyan-400/40">hello world</p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <h2 className="text-3xl sm:text-5xl font-bold text-slate-100 mb-4">
            Let&apos;s{" "}
            <span className="gradient-text-animated">connect</span>
          </h2>
          <p className="text-slate-500 mb-10 max-w-md mx-auto text-sm leading-relaxed">
            Open to collaborations, interesting projects, and conversations about tech.
            Feel free to reach out.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={300}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={siteConfig.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2.5 px-8 py-4 bg-cyan-500/15 border border-cyan-500/30 rounded-lg text-cyan-400 font-medium hover:bg-cyan-500/25 hover:shadow-[0_0_40px_rgba(6,182,212,0.2)] hover:-translate-y-0.5 transition-all duration-300"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300"
              >
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub Profile
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300"
                aria-hidden="true"
              >
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>

            <a
              href="mailto:sup3x@users.noreply.github.com"
              className="group relative inline-flex items-center gap-2.5 px-8 py-4 bg-white/5 border border-white/10 rounded-lg text-slate-400 font-medium hover:border-cyan-500/30 hover:text-cyan-400 hover:bg-cyan-500/5 hover:-translate-y-0.5 transition-all duration-300"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="group-hover:scale-110 transition-transform duration-300"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              Send Email
            </a>
          </div>
        </AnimatedSection>

        {/* Terminal decoration */}
        <AnimatedSection delay={500} animation="fade">
          <div className="mt-14 font-mono text-[10px] text-slate-700 space-y-0.5">
            <p><span className="text-cyan-500/30">$</span> echo &quot;Thanks for visiting!&quot;</p>
            <p className="text-slate-600">Thanks for visiting!</p>
            <p className="text-cyan-500/20 mt-1">$ exit 0</p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
