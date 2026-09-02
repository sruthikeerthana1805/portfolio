"use client";

import { useState } from "react";

export interface Project {
  id: string;
  title: string;
  image: string;
  color: string;
  glowColor: string;
  githubUrl?: string;
  liveUrl?: string;
}

const PROJECTS: Project[] = [
  {
    id: "echo-location-3d",
    title: "Echo-Location 3D",
    color: "#10B981",
    glowColor: "rgba(16, 185, 129, 0.35)",
    // TODO: replace with a real screenshot of the game
    image: "/images/project-zenith.png",
    githubUrl: "https://github.com/sruthikeerthana1805/echo-location-3d",
  },
  {
    id: "smart-health-dashboard",
    title: "Smart Health Dashboard",
    color: "#6366F1",
    glowColor: "rgba(99, 102, 241, 0.35)",
    // TODO: replace with a real screenshot of the dashboard
    image: "/images/project-nexus.png",
    githubUrl: "https://github.com/sruthikeerthana1805",
  },
  {
    id: "rural-venture-navigator",
    title: "Rural Venture Navigator",
    color: "#D4A373",
    glowColor: "rgba(212, 163, 115, 0.35)",
    // TODO: replace with a real screenshot of the app
    image: "/images/mocha-miso.png",
    githubUrl: "https://github.com/sruthikeerthana1805",
  },
  {
    id: "gesture-control-cv",
    title: "Gesture-Control CV",
    color: "#FC6B2F",
    glowColor: "rgba(252, 107, 47, 0.35)",
    // TODO: replace with a real screenshot of it in action
    image: "/images/project-flux.png",
    githubUrl: "https://github.com/sruthikeerthana1805",
  },
];

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="projects"
      className="relative pt-32 pb-24 md:pt-48 md:pb-36 overflow-hidden"
      style={{ fontFamily: "var(--font-poppins), sans-serif" }}
    >
      {/* Divider */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-iron to-transparent"
        aria-hidden="true"
      />

      {/* Dynamic ambient background glow */}
      <div
        className="absolute top-1/3 -left-48 w-96 h-96 rounded-full opacity-25 pointer-events-none blur-[140px] transition-all duration-700"
        style={{
          backgroundColor:
            hoveredIndex !== null
              ? PROJECTS[hoveredIndex]?.color || "var(--ember)"
              : "var(--ember)",
        }}
      />

      <div className="section-container relative z-10">
        {/* Minimal Section Header */}
        <div className="mb-12 md:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-[2px] bg-ember inline-block rounded-full" />
            <span className="text-ember text-xs font-bold tracking-[0.25em] uppercase">
              Featured Work
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight">
            Selected Projects
          </h2>
        </div>

        {/* Pure Image Grid View */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {PROJECTS.map((project, i) => (
            <a
              key={project.id}
              href={project.liveUrl || project.githubUrl || "#"}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-white/10 group hover:border-white/30 transition-all duration-500 shadow-2xl bg-obsidian block cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Glowing gradient hover overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at center, ${project.glowColor} 0%, transparent 75%)`,
                }}
              />

              {/* External Link Overlay Badge */}
              <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md p-3 rounded-full text-white border border-white/15 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-lg">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
