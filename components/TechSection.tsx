import { techItems } from "@/lib/data";
import { AnimatedSection } from "./AnimatedSection";

export function TechSection() {
  return (
    <section id="tech" className="py-20 sm:py-28 relative">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-40" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedSection delay={100}>
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-2">
              Tech & Interests
            </h2>
            <p className="font-mono text-xs text-slate-500">
              <span className="text-cyan-500/50">$</span> cat ~/skills.json | jq
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {techItems.map((item, index) => (
            <AnimatedSection key={item.name} delay={200 + index * 80}>
              <div className="group bg-bg-card border border-cyan-500/15 rounded-md p-5 text-center hover:border-cyan-500/30 hover:shadow-[0_0_25px_rgba(6,182,212,0.08)] hover:-translate-y-0.5 transition-all duration-300">
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-sm font-semibold text-slate-100 mb-1.5 group-hover:text-cyan-400 transition-colors">
                  {item.name}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
