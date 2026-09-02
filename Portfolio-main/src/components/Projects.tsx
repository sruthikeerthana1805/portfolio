"use client";

import { useState } from "react";

export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  color: string;
  glowColor: string;
  githubUrl?: string;
  liveUrl?: string;
}

const PROJECTS: Project[] = [
  {
    id: "echo-location-3d",
    title: "Echo-Location 3D",
    description: "Browser-based 3D first-person maze game — Three.js, procedural maze, echo-pulse reveal mechanic, 5 levels.",
    color: "#10B981",
    glowColor: "rgba(16, 185, 129, 0.35)",
    image: "/images/echo-location-3d.svg",
    githubUrl: "https://github.com/sruthikeerthana1805/echo-location-3d",
  },
  {
    id: "smart-health-dashboard",
    title: "Smart Health Dashboard",
    description: "Full-stack hospital command-center dashboard for a national-level government hackathon — React, Node/Express, GraphQL, Prisma, MongoDB, Socket.io live updates.",
    color: "#2f9d8f",
    glowColor: "rgba(47, 157, 143, 0.35)",
    image: "/images/smart-health-dashboard.svg",
    githubUrl: "https://github.com/sruthikeerthana1805/smart_health",
  },
  {
    id: "campus-connect",
    title: "CampusConnect",
    description: "College event management platform — discover, register, and track campus events with real-time notifications and an admin panel.",
    color: "#764ba2",
    glowColor: "rgba(118, 75, 162, 0.35)",
    image: "/images/campus-connect.svg",
    githubUrl: "https://github.com/sruthikeerthana1805/CampusConnect",
  },
  {
    id: "game-finder",
    title: "Game Finder",
    description: "Game recommendation site — filter by genre, platform, and mood to find your next game.",
    color: "#6c5ce7",
    glowColor: "rgba(108, 92, 231, 0.35)",
    image: "/images/game-finder.svg",
    githubUrl: "https://github.com/sruthikeerthana1805/GAME-RECOMMENATIONS",
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

        {/* Project Grid */}
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
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              ) : (
                <div
                  className="w-full h-full flex flex-col justify-end p-6 md:p-8"
                  style={{
                    background: `linear-gradient(135deg, ${project.color}22 0%, #0a0a0a 100%)`,
                  }}
                >
                  <h3
                    className="text-xl md:text-2xl font-bold text-white mb-2"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-sm text-ash leading-relaxed max-w-md">
                    {project.description}
                  </p>
                </div>
              )}

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
