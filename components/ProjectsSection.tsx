import { projects } from "@/lib/data";
import { AnimatedSection } from "./AnimatedSection";
import { TiltCard } from "./TiltCard";

const statusColors = {
  active: "bg-emerald-500/60 shadow-[0_0_6px_rgba(16,185,129,0.4)]",
  wip: "bg-yellow-500/60 shadow-[0_0_6px_rgba(234,179,8,0.4)]",
  archived: "bg-slate-500/60",
};

const statusLabels = {
  active: "Active",
  wip: "In Progress",
  archived: "Archived",
};

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 sm:py-28 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.03),transparent_70%)]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedSection delay={100}>
          <div className="flex items-center gap-3 mb-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-100">
              Projects
            </h2>
            <span className="font-mono text-xs text-cyan-400 bg-cyan-500/15 border border-cyan-500/20 px-2.5 py-0.5 rounded-full animate-pulse">
              {projects.length}
            </span>
          </div>
          <p className="font-mono text-xs text-slate-500 mb-3">
            <span className="text-cyan-500/50">$</span> ls ~/projects --sort=recent
          </p>
          <div className="w-20 h-px bg-gradient-to-r from-cyan-500/50 to-transparent mb-10" />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <AnimatedSection key={project.slug} delay={200 + index * 100} animation={index % 2 === 0 ? "fade-up" : "scale"}>
              <TiltCard>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-shine block gradient-border rounded-md overflow-hidden hover:shadow-[0_0_40px_rgba(6,182,212,0.12)] transition-all duration-300 group h-full"
                >
                  {/* Terminal bar */}
                  <div className="bg-cyan-500/[0.08] px-4 py-2.5 flex items-center justify-between border-b border-cyan-500/10">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-cyan-500/60" />
                      <span className="font-mono text-xs text-cyan-500">
                        ~/{project.slug}
                      </span>
                    </div>
                    {project.status && (
                      <div className="flex items-center gap-1.5">
                        <div className={`w-1.5 h-1.5 rounded-full ${statusColors[project.status]}`} />
                        <span className="font-mono text-[10px] text-slate-500">
                          {statusLabels[project.status]}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Card body */}
                  <div className="p-4 sm:p-5 relative z-20">
                    <h3 className="text-base font-semibold text-slate-100 mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-400 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 bg-cyan-500/10 border border-cyan-500/10 rounded text-xs text-cyan-400/80 font-mono group-hover:border-cyan-500/25 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* GitHub link */}
                    <span className="text-sm text-cyan-500/70 group-hover:text-cyan-400 transition-colors flex items-center gap-2">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                      </svg>
                      View on GitHub
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="group-hover:translate-x-1 transition-transform duration-300"
                        aria-hidden="true"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </a>
              </TiltCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
