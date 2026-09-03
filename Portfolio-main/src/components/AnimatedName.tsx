"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface AnimatedNameProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  /** Seconds to wait before the reveal starts — sync with the rest of the hero intro timeline. */
  startDelay?: number;
}

/**
 * Stylised hero name reveal: letters flip up into place with a springy
 * stagger, then the finished word carries a slow cyan → emerald shimmer.
 */
export default function AnimatedName({
  text,
  className = "",
  style,
  startDelay = 3.0,
}: AnimatedNameProps) {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const letters =
      wrapRef.current?.querySelectorAll<HTMLSpanElement>(".name-letter");
    if (!letters || !letters.length) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: startDelay });

      tl.fromTo(
        letters,
        { yPercent: 130, rotateX: -100, opacity: 0, scale: 0.55 },
        {
          yPercent: 0,
          rotateX: 0,
          opacity: 1,
          scale: 1,
          duration: 1.1,
          stagger: 0.075,
          ease: "back.out(1.7)",
        },
        0
      );

      // Kick the shimmer sweep in once the reveal settles.
      tl.call(
        () => {
          wrapRef.current?.classList.add("name-shimmer-active");
        },
        undefined,
        "+=0.1"
      );
    }, wrapRef);

    return () => ctx.revert();
  }, [startDelay]);

  return (
    <div
      ref={wrapRef}
      className={`name-gradient-shimmer inline-flex ${className}`}
      style={{ perspective: "700px", ...style }}
      aria-label={text}
    >
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="name-letter inline-block"
          style={{ transformOrigin: "bottom center" }}
          aria-hidden="true"
        >
          {char}
        </span>
      ))}
    </div>
  );
}
