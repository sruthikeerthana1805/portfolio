"use client";

import { config } from "@/config";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5">
      <span className="font-serif-display text-xl">
        /<span className="text-gold">{config.initial}</span>/
      </span>
      <a
        href="#contact"
        className="border border-paper px-4 py-2 text-sm font-medium rounded-sm transition-colors hover:bg-paper hover:text-ink"
      >
        Let&apos;s talk
      </a>
    </nav>
  );
}
