"use client";

import { useState } from "react";
import Link from "next/link";
import { programs, programCategories, testimonials, faqs, events } from "@/lib/data";
import { cn, formatDate } from "@/lib/utils";
import { Icon } from "@/components/icons";
import { Button, Badge, Eyebrow } from "@/components/ui";

/* ----------------------- Programs explorer ------------------------------ */
export function ProgramsExplorer() {
  const [cat, setCat] = useState<string>("All");
  const filtered = cat === "All" ? programs : programs.filter((p) => p.category === cat);

  return (
    <div>
      <div className="no-scrollbar mb-8 flex gap-2 overflow-x-auto pb-1">
        {["All", ...programCategories].map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={cn(
              "whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium transition-colors",
              cat === c
                ? "border-navy-900 bg-navy-900 text-white"
                : "border-navy-900/15 bg-white text-slate-600 hover:border-navy-900/40"
            )}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p, i) => (
          <Link
            key={p.id}
            href={`/programs/${p.slug}`}
            className="animate-fade-up group flex flex-col rounded-2xl border border-navy-900/8 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-navy-900/15 hover:shadow-[0_26px_52px_-26px_rgba(8,22,51,0.4)]"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <div className="flex items-start justify-between">
              <Badge tone="mint">{p.category}</Badge>
              <span className="text-xs text-slate-400">{p.ages}</span>
            </div>
            <h3 className="mt-4 font-serif text-xl font-semibold leading-tight text-navy-950">
              {p.title}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{p.short}</p>
            <div className="mt-5 flex items-center gap-2 text-sm font-medium text-mint">
              <span className="link-underline">Explore programme</span>
              <Icon.ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

/* ----------------------- Testimonials (DEMO) ---------------------------- */
export function Testimonials() {
  const [idx, setIdx] = useState(0);
  const t = testimonials[idx];
  return (
    <div className="rounded-3xl border border-navy-900/8 bg-white p-8 sm:p-12">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
        <Eyebrow tone="accent">Testimonials</Eyebrow>
        <Badge tone="gold">Clearly marked demo content</Badge>
      </div>
      <div className="mt-8 min-h-[180px]">
        <Icon.Star className="h-8 w-8 text-gold" />
        <blockquote className="mt-4 max-w-3xl font-serif text-2xl leading-snug text-navy-950 sm:text-3xl">
          &ldquo;{t.quote}&rdquo;
        </blockquote>
      </div>
      <div className="mt-8 flex items-center justify-between border-t border-navy-900/8 pt-6">
        <div className="flex items-center gap-3">
          <span
            className="flex h-11 w-11 items-center justify-center rounded-full text-sm font-semibold text-white"
            style={{ backgroundColor: t.color }}
          >
            {t.name
              .split(" ")
              .map((w) => w[0])
              .slice(0, 2)
              .join("")}
          </span>
          <div>
            <div className="font-medium text-navy-950">{t.name}</div>
            <div className="text-xs text-slate-500">{t.role}</div>
          </div>
        </div>
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`Testimonial ${i + 1}`}
              className={cn(
                "h-2 rounded-full transition-all",
                i === idx ? "w-7 bg-navy-900" : "w-2 bg-slate-200"
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ----------------------- FAQ accordion ---------------------------------- */
export function FaqAccordion({ items = faqs }: { items?: typeof faqs }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-navy-900/8 rounded-2xl border border-navy-900/8 bg-white">
      {items.map((f, i) => (
        <div key={f.q}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
          >
            <span className="font-medium text-navy-950">{f.q}</span>
            <span
              className={cn(
                "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-navy-900/15 transition-transform duration-300",
                open === i && "rotate-45 bg-navy-900 text-white border-navy-900"
              )}
            >
              <Icon.Plus className="h-4 w-4" />
            </span>
          </button>
          <div
            className={cn(
              "grid transition-all duration-300 ease-out",
              open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            )}
          >
            <div className="overflow-hidden">
              <p className="px-6 pb-5 text-sm leading-relaxed text-slate-600">{f.a}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ----------------------- Upcoming events list ---------------------------- */
export function EventList({ limit = 3 }: { limit?: number }) {
  const upcoming = [...events].sort((a, b) => a.date.localeCompare(b.date)).slice(0, limit);
  return (
    <div className="space-y-4">
      {upcoming.map((e) => (
        <Link
          key={e.id}
          href={`/events#${e.id}`}
          className="group flex items-center gap-4 rounded-2xl border border-navy-900/8 bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-navy-900/15 hover:shadow-lg sm:gap-5 sm:p-5"
        >
          <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-xl bg-navy-50 text-center">
            <span className="text-xl font-semibold text-navy-900">
              {new Date(e.date).getDate()}
            </span>
            <span className="text-[10px] uppercase tracking-wide text-slate-500">
              {new Date(e.date).toLocaleString("en", { month: "short" })}
            </span>
          </div>
          <div className="min-w-0 flex-1">
            <Badge tone="neutral">{e.category}</Badge>
            <h3 className="mt-1 truncate font-medium text-navy-950 group-hover:text-navy-800">
              {e.title}
            </h3>
            <p className="flex items-center gap-2 text-xs text-slate-500">
              <Icon.Clock className="h-3.5 w-3.5" /> {e.time} · <Icon.MapPin className="h-3.5 w-3.5" /> {e.location}
            </p>
          </div>
          <Icon.ArrowUpRight className="h-5 w-5 shrink-0 text-slate-300 transition group-hover:text-mint" />
        </Link>
      ))}
    </div>
  );
}

/* ----------------------- Announcement ticker ---------------------------- */
export function AnnouncementTicker() {
  return (
    <div className="border-y border-navy-900/8 bg-white">
      <div className="mx-auto flex max-w-7xl items-center px-4 sm:px-8">
        <span className="flex shrink-0 items-center gap-2 py-3 pr-4 text-xs font-bold uppercase tracking-widest text-mint">
          <Icon.Bell className="h-4 w-4 animate-pulse-dot" /> Noticeboard
        </span>
        <div className="mask-fade-y relative flex-1 overflow-hidden">
          <div className="animate-ticker flex w-max items-center gap-10 py-3">
            {[...events, ...events].map((e, i) => (
              <span key={i} className="flex items-center gap-2 whitespace-nowrap text-sm text-slate-600">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                {e.title} — {formatDate(e.date)}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export { Button };
