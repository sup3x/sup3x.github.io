import { stats } from "@/lib/data";
import { AnimatedSection } from "./AnimatedSection";
import { CountUp } from "./CountUp";

export function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28 relative">
      {/* Dot grid background */}
      <div className="absolute inset-0 dot-grid opacity-50" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedSection delay={100} animation="fade-right">
          <h2 className="font-mono text-cyan-500 text-sm mb-2">
            <span className="text-slate-500">&gt; </span>cat about.md
          </h2>
          <div className="w-16 h-px bg-gradient-to-r from-cyan-500/50 to-transparent mb-8" />
        </AnimatedSection>

        <div className="grid lg:grid-cols-[1fr,auto] gap-12 items-start">
          {/* Text content */}
          <AnimatedSection delay={200}>
            <div className="border-l-2 border-cyan-500/30 pl-6 space-y-4">
              <p className="text-slate-200 leading-relaxed text-lg">
                Hey, I&apos;m <span className="gradient-text font-semibold">Kerim</span> — a developer
                who loves building things that actually work.
              </p>
              <p className="text-slate-400 leading-relaxed">
                I spend most of my time experimenting with{" "}
                <span className="text-cyan-400/80 font-medium">AI tools</span>,{" "}
                <span className="text-cyan-400/80 font-medium">automating workflows</span>, and tinkering with
                systems at a low level. I like exploring how software works under the hood and
                turning rough ideas into practical, useful tools.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Whether it&apos;s training a neural network, writing a CLI tool, or setting up a
                deployment pipeline — I&apos;m always building something. Currently focused on{" "}
                <span className="text-cyan-400/80 font-medium">AI integrations</span> and{" "}
                <span className="text-cyan-400/80 font-medium">developer tooling</span>.
              </p>

              {/* Terminal-style tags */}
              <div className="flex flex-wrap gap-2 pt-3">
                {["ai-enthusiast", "automation-builder", "open-source", "system-tinkerer", "always-learning"].map(
                  (tag, i) => (
                    <AnimatedSection key={tag} delay={400 + i * 80} animation="scale">
                      <span className="font-mono text-xs px-2.5 py-1 bg-cyan-500/10 border border-cyan-500/15 rounded text-cyan-400/70 hover:bg-cyan-500/20 hover:border-cyan-500/30 hover:text-cyan-400 transition-all duration-300 cursor-default">
                        #{tag}
                      </span>
                    </AnimatedSection>
                  )
                )}
              </div>
            </div>
          </AnimatedSection>

          {/* Stats */}
          <div className="flex lg:flex-col gap-6">
            {stats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={300 + i * 150} animation="fade-left">
                <div className="gradient-border rounded-md p-5 text-center min-w-[130px] hover:shadow-[0_0_25px_rgba(6,182,212,0.1)] transition-all duration-300 group">
                  <div className="text-2xl font-bold gradient-text mb-1 group-hover:scale-110 transition-transform duration-300">
                    <CountUp end={stat.value} />
                  </div>
                  <div className="text-xs text-slate-500 font-mono">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
