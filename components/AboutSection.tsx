import { stats } from "@/lib/data";
import { AnimatedSection } from "./AnimatedSection";

export function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28 relative">
      {/* Dot grid background */}
      <div className="absolute inset-0 dot-grid opacity-50" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedSection delay={100}>
          <h2 className="font-mono text-cyan-500 text-sm mb-8">
            <span className="text-slate-500">&gt; </span>cat about.md
          </h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-[1fr,auto] gap-12 items-start">
          {/* Text content */}
          <AnimatedSection delay={200}>
            <div className="border-l-2 border-cyan-500/30 pl-6 space-y-4">
              <p className="text-slate-300 leading-relaxed text-lg">
                Hey, I&apos;m <span className="text-cyan-400 font-medium">Kerim</span> — a developer
                who loves building things that actually work.
              </p>
              <p className="text-slate-400 leading-relaxed">
                I spend most of my time experimenting with{" "}
                <span className="text-cyan-400/80">AI tools</span>,{" "}
                <span className="text-cyan-400/80">automating workflows</span>, and tinkering with
                systems at a low level. I like exploring how software works under the hood and
                turning rough ideas into practical, useful tools.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Whether it&apos;s training a neural network, writing a CLI tool, or setting up a
                deployment pipeline — I&apos;m always building something. Currently focused on AI
                integrations and developer tooling.
              </p>

              {/* Terminal-style tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {["ai-enthusiast", "automation-builder", "open-source", "system-tinkerer", "always-learning"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs px-2.5 py-1 bg-cyan-500/10 border border-cyan-500/15 rounded text-cyan-400/70"
                    >
                      #{tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </AnimatedSection>

          {/* Stats */}
          <AnimatedSection delay={400}>
            <div className="flex lg:flex-col gap-6">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-bg-card border border-cyan-500/15 rounded-md p-5 text-center min-w-[120px] hover:border-cyan-500/30 transition-all duration-300"
                >
                  <div className="text-2xl font-bold gradient-text mb-1">{stat.value}</div>
                  <div className="text-xs text-slate-500 font-mono">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
