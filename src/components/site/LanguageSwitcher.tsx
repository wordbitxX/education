"use client";

import { useEffect, useRef, useState } from "react";
import { useI18n, languages } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/icons";

export default function LanguageSwitcher({
  tone = "light",
  className,
}: {
  tone?: "light" | "dark";
  className?: string;
}) {
  const { lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const current = languages.find((l) => l.code === lang)!;

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  return (
    <div ref={ref} className={cn("relative", className)}>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Change language"
        aria-expanded={open}
        className={cn(
          "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium transition",
          tone === "dark"
            ? "border-white/25 text-white hover:bg-white/10"
            : "border-navy-900/15 text-slate-600 hover:border-navy-900/40 hover:text-navy-950"
        )}
      >
        <Icon.Globe className="h-3.5 w-3.5" />
        <span>{current.native}</span>
        <Icon.ChevronDown className={cn("h-3 w-3 transition-transform", open && "rotate-180")} />
      </button>

      {open && (
        <div
          className={cn(
            "animate-scale-in absolute z-50 mt-2 w-40 origin-top overflow-hidden rounded-xl border shadow-[0_20px_50px_-15px_rgba(8,22,51,0.45)]",
            tone === "dark" ? "border-white/12 bg-navy-900" : "border-navy-900/10 bg-white",
            "ltr:right-0 rtl:left-0"
          )}
        >
          {languages.map((l) => (
            <button
              key={l.code}
              onClick={() => {
                setLang(l.code);
                setOpen(false);
              }}
              dir={l.dir}
              className={cn(
                "flex w-full items-center justify-between gap-2 px-3.5 py-2.5 text-sm transition",
                tone === "dark"
                  ? lang === l.code
                    ? "bg-white/10 font-semibold text-white"
                    : "text-slate-300 hover:bg-white/5"
                  : lang === l.code
                    ? "bg-navy-50 font-semibold text-navy-950"
                    : "text-slate-600 hover:bg-slate-50"
              )}
            >
              <span className="flex flex-col items-start leading-tight">
                <span>{l.native}</span>
                {l.code !== "en" && (
                  <span className={cn("text-[10px]", tone === "dark" ? "text-slate-500" : "text-slate-400")}>
                    {l.label}
                  </span>
                )}
              </span>
              {lang === l.code && <Icon.Check className="h-3.5 w-3.5 shrink-0 text-teal-400" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
