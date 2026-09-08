"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { searchIndex } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/icons";
import { Button } from "@/components/ui";

const recentKey = "meridian.recentSearches";

export function SearchPalette({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const [recent, setRecent] = useState<string[]>([]);
  const [showRecent, setShowRecent] = useState(true);

  useEffect(() => {
    if (open) {
      setQuery("");
      setActive(0);
      setShowRecent(true);
      setTimeout(() => inputRef.current?.focus(), 30);
      try {
        setRecent(JSON.parse(localStorage.getItem(recentKey) || "[]"));
      } catch {
        setRecent([]);
      }
    }
  }, [open]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return searchIndex
      .filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          item.section.toLowerCase().includes(q) ||
          item.keywords.toLowerCase().includes(q)
      )
      .slice(0, 8);
  }, [query]);

  const grouped = useMemo(() => {
    const map = new Map<string, typeof results>();
    for (const r of results) {
      if (!map.has(r.section)) map.set(r.section, []);
      map.get(r.section)!.push(r);
    }
    return Array.from(map.entries());
  }, [results]);

  if (!open) return null;

  const saveRecent = (item: string) => {
    const next = [item, ...recent.filter((r) => r !== item)].slice(0, 5);
    setRecent(next);
    try {
      localStorage.setItem(recentKey, JSON.stringify(next));
    } catch {
      /* noop */
    }
  };

  const go = (href: string, title: string) => {
    saveRecent(title);
    onClose();
    window.location.href = href;
  };

  const flatResults = results;
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") onClose();
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, flatResults.length - 1));
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    }
    if (e.key === "Enter" && flatResults[active]) {
      go(flatResults[active].href, flatResults[active].title);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center bg-navy-950/40 p-4 pt-[10vh] backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="animate-scale-in w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-[0_40px_90px_-20px_rgba(8,22,51,0.5)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-navy-900/10 px-5">
          <Icon.Search className="h-5 w-5 shrink-0 text-slate-400" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder="Search programs, courses, faculty, events, FAQs…"
            className="h-16 w-full bg-transparent text-base outline-none placeholder:text-slate-400"
          />
          <button
            onClick={onClose}
            className="rounded-lg border border-navy-900/10 px-2 py-1 text-xs text-slate-500 hover:bg-slate-50"
          >
            ESC
          </button>
        </div>

        <div className="max-h-[52vh] overflow-y-auto p-3">
          {!query && (
            <div className="space-y-4 p-2">
              <p className="px-1 text-xs font-semibold uppercase tracking-widest text-slate-400">
                Recent searches
              </p>
              {recent.length ? (
                <div className="flex flex-wrap gap-2">
                  {recent.map((r) => (
                    <button
                      key={r}
                      onClick={() => {
                        setQuery(r);
                        setShowRecent(false);
                      }}
                      className="flex items-center gap-2 rounded-full border border-navy-900/10 px-3 py-1.5 text-sm text-slate-600 hover:bg-slate-50"
                    >
                      <Icon.Clock className="h-3.5 w-3.5" /> {r}
                    </button>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-slate-500">No recent searches yet.</p>
              )}
              <p className="px-1 pt-2 text-xs font-semibold uppercase tracking-widest text-slate-400">
                Browse categories
              </p>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {["Program", "Faculty", "Event", "Course", "FAQ", "Journal"].map((s) => (
                  <button
                    key={s}
                    onClick={() => setQuery(s)}
                    className="flex items-center gap-2 rounded-xl border border-navy-900/10 px-3 py-2.5 text-sm font-medium text-slate-600 hover:border-navy-900/20 hover:bg-navy-50/50"
                  >
                    <Icon.Layers className="h-4 w-4 text-mint" /> {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {query.trim() && flatResults.length === 0 && (
            <div className="flex flex-col items-center gap-2 px-4 py-12 text-center">
              <Icon.Search className="h-8 w-8 text-slate-300" />
              <p className="font-medium text-navy-900">No results found</p>
              <p className="max-w-sm text-sm text-slate-500">
                Try a different keyword, or ask LearnMate AI for help finding what you need.
              </p>
              <Button
                variant="outline"
                size="sm"
                className="mt-2"
                onClick={() => {
                  onClose();
                  window.location.href = "/portal/assistant";
                }}
              >
                Ask LearnMate AI <Icon.Robot className="h-4 w-4" />
              </Button>
            </div>
          )}

          {query.trim() && flatResults.length > 0 && (
            <div className="space-y-4">
              {grouped.map(([section, items]) => (
                <div key={section}>
                  <p className="px-2 pb-1 text-xs font-semibold uppercase tracking-widest text-slate-400">
                    {section}
                  </p>
                  <div>
                    {items.map((r, i) => {
                      const idx = flatResults.findIndex((f) => f === r);
                      return (
                        <button
                          key={`${section}-${r.id}`}
                          onClick={() => go(r.href, r.title)}
                          onMouseEnter={() => setActive(idx)}
                          className={cn(
                            "flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-left transition-colors",
                            active === idx && "bg-navy-50"
                          )}
                        >
                          <span className="flex items-center gap-3">
                            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-slate-500 shadow-sm">
                              <Icon.ArrowUpRight className="h-4 w-4" />
                            </span>
                            <span className="text-sm font-medium text-navy-900">{r.title}</span>
                          </span>
                          <span className="text-xs text-slate-400">{r.section}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {query.trim() && flatResults.length > 0 && (
          <div className="flex items-center justify-between border-t border-navy-900/10 px-5 py-2.5 text-xs text-slate-400">
            <span>↑↓ to navigate · Enter to open</span>
            <span className="flex items-center gap-1.5">
              <Icon.Sparkles className="h-3.5 w-3.5 text-mint" /> Powered by Meridian Search
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
