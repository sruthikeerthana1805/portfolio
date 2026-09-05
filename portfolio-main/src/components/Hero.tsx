"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { config } from "@/config";

export default function Hero() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-reveal",
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, stagger: 0.12, ease: "power3.out", delay: 0.15 }
      );
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <header ref={rootRef} className="relative min-h-screen flex flex-col justify-center px-8 max-w-[1160px] mx-auto">
      <div className="hero-reveal text-sm font-semibold text-gold mb-4">{config.eyebrow}</div>
      <h1 className="hero-reveal font-serif-display text-[clamp(52px,9vw,108px)] max-w-[16ch]">
        <span className="swipe-underline">{config.name}</span>
      </h1>
      <p className="hero-reveal text-lg max-w-[46ch] mt-6 opacity-80">{config.tagline}</p>
      <div className="hero-reveal flex gap-3.5 flex-wrap mt-10">
        <a href="#projects" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-sm text-sm font-semibold bg-gold text-ink hover:bg-rose transition-colors">
          View Projects
        </a>
        <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-sm text-sm font-semibold border border-line hover:border-paper transition-colors">
          Get in Touch
        </a>
      </div>
      <span className="absolute bottom-9 left-8 text-xs opacity-50 [writing-mode:vertical-rl]">SCROLL</span>
    </header>
  );
}
