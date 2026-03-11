import { projects } from "@/lib/data";
import { AnimatedSection } from "./AnimatedSection";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection delay={200}>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-12">
            Projects
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <AnimatedSection key={project.slug} delay={300 + index * 100}>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-bg-card border border-cyan-500/15 rounded-md overflow-hidden hover:border-cyan-500/30 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)] transition-all duration-300 group"
              >
                {/* Terminal bar */}
                <div className="bg-cyan-500/[0.08] px-4 py-2 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-500/60" />
                  <span className="font-mono text-xs text-cyan-500">
                    {project.slug}
                  </span>
                </div>

                {/* Card body */}
                <div className="p-5">
                  <h3 className="text-base font-semibold text-slate-100 mb-2">
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
                        className="px-2 py-0.5 bg-cyan-500/10 rounded text-xs text-cyan-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* GitHub link */}
                  <span className="text-sm text-cyan-500 group-hover:text-cyan-400 transition-colors">
                    → View on GitHub
                  </span>
                </div>
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
