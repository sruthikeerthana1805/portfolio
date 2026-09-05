"use client";

import { useState } from "react";
import { config } from "@/config";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: config.formAccessKey,
          subject: `Portfolio inquiry from ${form.name}`,
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-30 px-8 max-w-[1160px] mx-auto">
      <div className="text-sm font-semibold text-gold mb-2.5">Contact</div>
      <h2 className="font-serif-display text-[clamp(34px,4.6vw,52px)] max-w-[14ch] mb-11">
        Let&apos;s build something
      </h2>

      <div className="bg-ink-soft border border-line p-12 md:p-12 grid md:grid-cols-2 gap-12">
        <form onSubmit={handleSubmit}>
          <label htmlFor="c-name" className="text-xs uppercase tracking-wide opacity-55">
            Name
          </label>
          <input
            id="c-name"
            required
            value={form.name}
            onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
            className="w-full bg-transparent border-b border-line focus:border-gold outline-none text-[15px] py-3 mb-5"
          />

          <label htmlFor="c-email" className="text-xs uppercase tracking-wide opacity-55">
            Email
          </label>
          <input
            id="c-email"
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
            className="w-full bg-transparent border-b border-line focus:border-gold outline-none text-[15px] py-3 mb-5"
          />

          <label htmlFor="c-msg" className="text-xs uppercase tracking-wide opacity-55">
            Message
          </label>
          <textarea
            id="c-msg"
            rows={4}
            required
            value={form.message}
            onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
            className="w-full bg-transparent border-b border-line focus:border-gold outline-none text-[15px] py-3 mb-5 resize-none"
          />

          <button
            type="submit"
            disabled={status === "sending"}
            className="px-6 py-3.5 rounded-sm text-sm font-semibold bg-gold text-ink hover:bg-rose transition-colors disabled:opacity-60"
          >
            {status === "sending" ? "Sending..." : status === "sent" ? "Message Sent ✓" : "Send Message"}
          </button>

          {status === "sent" && (
            <p className="text-sm mt-3" style={{ color: "#2f9d8f" }}>
              Thanks! Your message has been sent.
            </p>
          )}
          {status === "error" && (
            <p className="text-sm mt-3 text-rose">
              Something went wrong — email me directly at {config.email}
            </p>
          )}
        </form>

        <div>
          <p className="text-sm opacity-70 mb-1.5">Email</p>
          <p className="text-lg mb-6">{config.email}</p>
          <p className="text-sm opacity-70 mb-1.5">Location</p>
          <p className="text-lg">{config.location}</p>
          <div className="flex gap-3.5 mt-6">
            {config.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border border-line flex items-center justify-center text-xs hover:border-gold hover:text-gold transition-colors"
              >
                {s.label.slice(0, 2)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
