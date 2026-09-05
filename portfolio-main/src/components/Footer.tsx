"use client";

import { config } from "@/config";

export default function Footer() {
  return (
    <footer className="py-10 text-center text-[13px] opacity-50">
      © {new Date().getFullYear()} {config.name}
    </footer>
  );
}
