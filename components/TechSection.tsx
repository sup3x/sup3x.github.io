"use client";

import { techItems } from "@/lib/data";
import { AnimatedSection } from "./AnimatedSection";

export function TechSection() {
  return (
    <section id="tech" className="py-20 sm:py-28 relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* Glow accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/[0.02] rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedSection delay={100} animation="fade-right">
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-2">
              Tech & Interests
            </h2>
            <p className="font-mono text-xs text-slate-500 mb-3">
              <span className="text-cyan-500/50">$</span> cat ~/skills.json | jq &apos;.interests[]&apos;
            </p>
            <div className="w-20 h-px bg-gradient-to-r from-cyan-500/50 to-transparent" />
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {techItems.map((item, index) => (
            <AnimatedSection key={item.name} delay={200 + index * 80} animation={index % 3 === 0 ? "scale" : "fade-up"}>
              <div className="group gradient-border rounded-lg p-5 text-center hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] hover:-translate-y-1 transition-all duration-300 cursor-default">
                <div className="text-3xl mb-3 group-hover:scale-125 group-hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.3)] transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-sm font-semibold text-slate-100 mb-1.5 group-hover:text-cyan-400 transition-colors duration-300">
                  {item.name}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed group-hover:text-slate-400 transition-colors duration-300">
                  {item.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Marquee ticker */}
        <AnimatedSection delay={800} animation="fade">
          <div className="mt-16 overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap">
              {[...Array(2)].map((_, setIndex) => (
                <div key={setIndex} className="flex items-center gap-8 mr-8">
                  {["TypeScript", "Python", "React", "Next.js", "Node.js", "Docker", "Kubernetes", "Rust", "Go", "PostgreSQL", "Redis", "Linux", "Git", "AWS", "TensorFlow", "Bash"].map(
                    (tech) => (
                      <span
                        key={`${setIndex}-${tech}`}
                        className="font-mono text-xs text-slate-600 hover:text-cyan-400 transition-colors duration-300 cursor-default flex items-center gap-2"
                      >
                        <span className="w-1 h-1 rounded-full bg-cyan-500/30" />
                        {tech}
                      </span>
                    )
                  )}
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
