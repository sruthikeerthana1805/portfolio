// ============================================================
// EDIT THIS FILE ONLY. Everything else is styling/structure —
// you don't need to touch any other file to make this yours.
// ============================================================

export const config = {
  name: "Sruthi",
  initial: "S",
  eyebrow: "Available for internships",
  tagline: "Computer Science Engineering student building full-stack apps, GenAI projects, and browser-based games.",

  about: {
    line1:
      "Hi! I'm a Computer Science Engineering student at BVRIT Hyderabad, passionate about building technology that solves real-world problems.",
    line2:
      "I enjoy working with Python, Java, JavaScript, AI/ML, and game development — and I love turning ideas into working projects.",
  },

  skills: ["Python", "JavaScript", "Java", "React", "Node.js", "Flutter", "SQL", "Three.js"],

  email: "sruthikeerthana1805@gmail.com",
  location: "Hyderabad, Telangana, India",

  socials: [
    { label: "GitHub", href: "https://github.com/sruthikeerthana1805" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/ch-sruthi-743526374" },
  ],

  // Get a free key at web3forms.com (no signup needed) so the contact
  // form actually delivers messages to your inbox.
  formAccessKey: "7e479abb-0ad3-4bcd-aae0-345bac631849",

  projects: [
    {
      title: "Echo-Location 3D",
      description: "Browser-based 3D first-person maze game — Three.js, procedural maze, echo-pulse reveal mechanic, 5 levels.",
      tags: ["Three.js", "Vite"],
      colorFrom: "#3f6b52",
      colorTo: "#1c3a2e",
      github: "https://github.com/sruthikeerthana1805/echo-location-3d",
      live: "",
    },
    {
      title: "Smart Health Dashboard",
      description: "Full-stack hospital command-center dashboard for a national-level government hackathon — React, Node/Express, GraphQL, Socket.io.",
      tags: ["React", "Node.js", "GraphQL"],
      colorFrom: "#D4A237",
      colorTo: "#8a6a1f",
      github: "https://github.com/sruthikeerthana1805/smart_health",
      live: "",
    },
    {
      title: "CampusConnect",
      description: "College event management platform — discover, register, and track campus events with real-time notifications.",
      tags: ["JavaScript", "HTML/CSS"],
      colorFrom: "#6c5ce7",
      colorTo: "#3a2e8a",
      github: "https://github.com/sruthikeerthana1805/CampusConnect",
      live: "",
    },
    {
      title: "Game Finder",
      description: "Game recommendation site — filter by genre, platform, and mood to find your next game.",
      tags: ["JavaScript", "HTML/CSS"],
      colorFrom: "#E8735F",
      colorTo: "#a3402f",
      github: "https://github.com/sruthikeerthana1805/GAME-RECOMMENATIONS",
      live: "",
    },
  ],
};

export type Project = (typeof config.projects)[number];
