"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface NameRevealProps {
  text: string;
  className?: string;
}

export default function NameReveal({ text, className = "" }: NameRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const letters = text.split("");
  const n = letters.length;
  const arcHeight = 34; // px — how tall the rainbow arch is

  // Precompute each letter's final arc position/rotation once.
  const archY = letters.map((_, i) => {
    const t = n > 1 ? i / (n - 1) - 0.5 : 0; // -0.5 .. 0.5
    return -arcHeight * Math.cos(t * Math.PI); // peaks in the middle
  });
  const archRotate = letters.map((_, i) => {
    const t = n > 1 ? i / (n - 1) - 0.5 : 0;
    return t * 30; // tilt to follow the curve
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      const spans = containerRef.current?.querySelectorAll<HTMLElement>(".name-letter");
      if (!spans) return;

      gsap.fromTo(
        spans,
        { y: -180, opacity: 0, rotate: 0 },
        {
          y: (i) => archY[i],
          rotate: (i) => archRotate[i],
          opacity: 1,
          duration: 1.1,
          stagger: 0.07,
          ease: "bounce.out",
          delay: 3.0,
        }
      );
    }, containerRef);
    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={containerRef} className={`flex items-end justify-center ${className}`}>
      {letters.map((letter, i) => (
        <span key={i} className="name-letter inline-block will-change-transform">
          {letter}
        </span>
      ))}
    </div>
  );
}
