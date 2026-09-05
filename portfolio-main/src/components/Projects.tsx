"use client";

import { config, type Project } from "@/config";

function ProjectCard({ project, alt }: { project: Project; alt: boolean }) {
  return (
    <div
      className={`torn-card ${alt ? "alt" : ""} bg-paper text-ink p-8 transition-transform duration-300 hover:-translate-y-1.5 hover:-rotate-[0.4deg]`}
    >
      <div
        className="h-[150px] rounded-sm mb-5 flex items-center justify-center font-serif-display text-5xl text-white/90"
        style={{ background: `linear-gradient(135deg, ${project.colorFrom}, ${project.colorTo})` }}
      >
        {project.title.charAt(0)}
      </div>
      <h3 className="font-serif-display text-2xl mb-2">{project.title}</h3>
      <p className="text-sm opacity-75 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4.5">
        {project.tags.map((tag) => (
          <span key={tag} className="text-[11.5px] bg-paper-dim px-2.5 py-1 rounded-sm">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex gap-4 text-[13px] font-semibold">
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="border-b-[1.5px] border-ink">
            GitHub
          </a>
        )}
        {project.live && (
          <a href={project.live} target="_blank" rel="noopener noreferrer" className="border-b-[1.5px] border-ink">
            Live
          </a>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-30 px-8 max-w-[1160px] mx-auto">
      <div className="text-sm font-semibold text-gold mb-2.5">Selected Work</div>
      <h2 className="font-serif-display text-[clamp(34px,4.6vw,52px)] max-w-[14ch] mb-11">
        Things I&apos;ve built
      </h2>
      <div className="grid sm:grid-cols-2 gap-9 gap-x-8">
        {config.projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} alt={i % 2 === 1} />
        ))}
      </div>
    </section>
  );
}
