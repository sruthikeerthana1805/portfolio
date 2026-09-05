"use client";

import { config } from "@/config";

export default function About() {
  return (
    <section id="about" className="py-30 px-8 max-w-[1160px] mx-auto">
      <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-16 items-start">
        <div>
          <div className="text-sm font-semibold text-gold mb-2.5">About</div>
          <h2 className="font-serif-display text-[clamp(34px,4.6vw,52px)] max-w-[14ch] mb-11">
            A little about me
          </h2>
          <p className="text-[17px] opacity-85 max-w-[56ch]">{config.about.line1}</p>
          <p className="text-[17px] opacity-85 max-w-[56ch] mt-4">{config.about.line2}</p>
        </div>
        <div>
          <div className="text-sm font-semibold text-gold mb-2.5">Skills</div>
          <div className="flex flex-wrap gap-2.5 mt-2">
            {config.skills.map((skill) => (
              <span key={skill} className="border border-line px-3.5 py-2 text-[13px] rounded-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
