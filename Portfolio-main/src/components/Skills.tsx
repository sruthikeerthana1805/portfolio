"use client";

import { useMemo } from "react";
import SectionHeading from "./SectionHeading";
import DriftWall, { DriftWallItem } from "./DriftWall";

interface Skill {
  name: string;
  icon: string;
  category: string;
}

const SKILLS: Skill[] = [
  // Frontend
  { name: "HTML", icon: "https://cdn.simpleicons.org/html5/E34F26", category: "Frontend" },
  { name: "CSS", icon: "https://cdn.simpleicons.org/css/1572B6", category: "Frontend" },
  { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E", category: "Frontend" },
  { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6", category: "Frontend" },
  { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB", category: "Frontend" },
  { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/ffffff", category: "Frontend" },
  { name: "Three.js", icon: "https://cdn.simpleicons.org/threedotjs/ffffff", category: "Frontend" },
  { name: "GSAP", icon: "https://cdn.simpleicons.org/greensock/88CE02", category: "Frontend" },
  { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4", category: "Frontend" },
  { name: "Framer Motion", icon: "https://cdn.simpleicons.org/framer/0055FF", category: "Frontend" },
  // Backend
  { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/5FA04E", category: "Backend" },
  { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB", category: "Backend" },
  { name: "Firebase", icon: "https://cdn.simpleicons.org/firebase/DD2C00", category: "Backend" },
  { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248", category: "Backend" },
  // AI & Automation
  { name: "Claude", icon: "https://cdn.simpleicons.org/anthropic/D97757", category: "AI & Tools" },
  { name: "ChatGPT", icon: "https://api.iconify.design/logos:openai-icon.svg", category: "AI & Tools" },
  { name: "Cursor", icon: "https://cdn.simpleicons.org/cursor/00D8D6", category: "AI & Tools" },
  { name: "n8n", icon: "https://cdn.simpleicons.org/n8n/FF6584", category: "AI & Tools" },
  // Design & DevOps
  { name: "Figma", icon: "https://cdn.simpleicons.org/figma/F24E1E", category: "Design" },
  { name: "Framer", icon: "https://cdn.simpleicons.org/framer/ffffff", category: "Design" },
  { name: "Blender", icon: "https://cdn.simpleicons.org/blender/E87D0D", category: "Design" },
  { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032", category: "DevOps" },
  { name: "GitHub", icon: "https://cdn.simpleicons.org/github/ffffff", category: "DevOps" },
  { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel/ffffff", category: "DevOps" },
];

export default function Skills() {
  const driftWallItems: DriftWallItem[] = useMemo(() => {
    return SKILLS.map((skill) => ({
      image: "/images/skill-tile-bg.png",
      title: skill.name,
      icon: skill.icon,
    }));
  }, []);

  return (
    <section id="skills" className="relative py-24 md:py-36 overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-iron to-transparent"
        aria-hidden="true"
      />

      <div className="section-container">
        <SectionHeading
          eyebrow="Skills & Tools"
          title="My Arsenal"
          subtitle="Technologies I use to bring ideas to life. Interactive 3D drift wall showcasing frontend, backend, design, and AI capabilities."
          align="center"
        />

        {/* DriftWall 3D animated skills container - full screen full bleed */}
        <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen h-screen overflow-hidden -translate-x-12 sm:-translate-x-16">
          <DriftWall
            items={driftWallItems}
            columns={6}
            tileWidth={210}
            tileHeight={138}
            gap={20}
            tilt={14}
            turn={-16}
            perspective={1000}
            depth={100}
            speed={40}
            direction="up"
            variance={0.4}
            parallax={0.6}
            lift={65}
            fade={0.4}
            dim={0.6}
            overlayColor="#050505"
          />
        </div>
      </div>
    </section>
  );
}
