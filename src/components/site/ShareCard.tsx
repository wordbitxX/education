"use client";

import { useState } from "react";
import { Icon } from "@/components/icons";
import { cn } from "@/lib/utils";

const links = [
  { label: "LinkedIn", href: "https://www.linkedin.com/", color: "#0a66c2" },
  { label: "X / Twitter", href: "https://x.com/", color: "#0f1419" },
  { label: "Behance", href: "https://www.behance.net/", color: "#1769ff" },
  { label: "Dribbble", href: "https://dribbble.com/", color: "#ea4c89" },
  { label: "GitHub", href: "https://github.com/", color: "#24292f" },
];

export default function ShareCard() {
  const [copied, setCopied] = useState<"url" | "desc" | null>(null);

  const copy = async (key: "url" | "desc") => {
    const text =
      key === "url"
        ? "https://education.wordbitx.pk/wordbitx"
        : "Meridian Academy — a complete school & academy management platform (website, admissions, portals, LMS, AI assistant) — a WordbitX concept demo. wordbitx.com";
    try {
      await navigator.clipboard.writeText(text);
      setCopied(key);
      setTimeout(() => setCopied(null), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <div className="rounded-3xl bg-white p-6 sm:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mint">Backlink-ready</p>
      <h3 className="mt-2 font-serif text-2xl font-semibold text-navy-950">Share this WordbitX demo</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">
        This page is structured for legitimate promotion — case studies, social proof,
        communities and directories. Copy the share text and post from your own profiles.
      </p>

      <div className="mt-5 space-y-3">
        <div className="flex items-center gap-2 rounded-xl border border-navy-900/10 bg-cream p-3">
          <code className="flex-1 truncate text-xs text-slate-600">https://education.wordbitx.pk/wordbitx</code>
          <button onClick={() => copy("url")} className={cn("rounded-lg px-3 py-1.5 text-xs font-medium transition", copied === "url" ? "bg-mint text-white" : "bg-navy-900 text-white hover:bg-navy-800")}>
            {copied === "url" ? "Copied ✓" : "Copy URL"}
          </button>
        </div>
        <div className="flex items-start gap-2 rounded-xl border border-navy-900/10 bg-cream p-3">
          <p className="flex-1 text-xs leading-relaxed text-slate-600">
            "We built a complete school management platform concept — website, online admissions,
            student/parent/teacher portals, LMS, fees and an AI assistant. Concept demo by
            WordbitX."
          </p>
          <button onClick={() => copy("desc")} className={cn("shrink-0 rounded-lg px-3 py-1.5 text-xs font-medium transition", copied === "desc" ? "bg-mint text-white" : "bg-navy-900 text-white hover:bg-navy-800")}>
            {copied === "desc" ? "Copied ✓" : "Copy text"}
          </button>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-navy-900/12 px-3.5 py-1.5 text-sm font-medium text-slate-700 transition hover:-translate-y-0.5 hover:border-navy-900/40"
          >
            <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: l.color }} />
            {l.label}
            <Icon.ExternalLink className="h-3.5 w-3.5 text-slate-400" />
          </a>
        ))}
      </div>
    </div>
  );
}
