import { AnimatedSection } from "./AnimatedSection";

export function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection delay={100}>
          <h2 className="font-mono text-cyan-500 text-sm mb-6">
            <span className="text-slate-500">&gt; </span>about.md
          </h2>
          <div className="border-l-2 border-cyan-500/30 pl-6 max-w-2xl">
            <p className="text-slate-400 leading-relaxed">
              I&apos;m interested in building things that are useful, experimenting with AI
              tools, automating workflows, and tinkering with systems at a low level.
              I like exploring how software works under the hood and turning ideas
              into practical tools. Always learning, always building.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
