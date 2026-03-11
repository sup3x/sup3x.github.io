import { techItems } from "@/lib/data";
import { AnimatedSection } from "./AnimatedSection";

export function TechSection() {
  return (
    <section id="tech" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection delay={200}>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-12">
            Tech & Interests
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {techItems.map((item, index) => (
            <AnimatedSection key={item.name} delay={300 + index * 100}>
              <div className="bg-bg-card border border-cyan-500/15 rounded-md p-5 text-center hover:scale-[1.02] hover:border-cyan-500/30 transition-all duration-300">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-sm font-semibold text-slate-100 mb-1">
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
