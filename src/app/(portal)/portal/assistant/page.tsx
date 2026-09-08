"use client";

import { useRef, useState, useEffect } from "react";
import PortalShell from "@/components/portal/PortalShell";
import { Icon } from "@/components/icons";
import { cn } from "@/lib/utils";
import { useI18n } from "@/lib/i18n";

type Msg = { role: "user" | "ai"; text: string; sources?: { title: string; href: string }[]; thinking?: boolean };

const suggestions = [
  "Explain photosynthesis in simple words",
  "Create 10 MCQs for Class 8 Science",
  "Make a study plan for my exams",
  "Explain this topic in simple English",
  "سائنس کا سبق سمجھائیں (Urdu)",
  "How do online admissions work?",
  "How do I pay the school fee?",
  "Find my attendance for this term",
];

const quickActions = [
  { label: "Open timetable", href: "/portal/student#timetable", icon: "Calendar" as const },
  { label: "My assignments", href: "/portal/student#assignments", icon: "Clipboard" as const },
  { label: "Learning hub", href: "/portal/lms", icon: "BookOpen" as const },
  { label: "View fees", href: "/portal/parent#fees", icon: "Wallet" as const },
];

export default function AssistantPage() {
  const { t } = useI18n();
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: "ai",
      text:
        "Hello Ayaan! I'm LearnMate, your study assistant. I can help you find courses, understand programmes, locate homework and resources, or explain school processes. What would you like to know?",
    },
  ]);
  const [history, setHistory] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const send = async (text?: string) => {
    const message = (text ?? input).trim();
    if (!message || loading) return;
    setInput("");
    setMessages((m) => [...m, { role: "user", text: message }]);
    setLoading(true);
    setHistory((h) => [message, ...h.filter((x) => x !== message)].slice(0, 5));
    try {
      const res = await fetch("/api/assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });
      const data = await res.json();
      setMessages((m) => [...m, { role: "ai", text: data.reply, sources: data.sources }]);
    } catch {
      setMessages((m) => [
        ...m,
        { role: "ai", text: "I'm having trouble connecting right now. Please try again in a moment — or explore a suggested prompt below." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <PortalShell portal="assistant" user="Ayaan Khan" role="LearnMate AI">
      <div className="flex min-h-[calc(100vh-4rem)] flex-col">
        {/* Header */}
        <div className="mx-auto w-full max-w-3xl">
          <div className="rounded-2xl bg-navy-950 p-6 text-white">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-500/20 text-teal-300">
                <Icon.Robot className="h-6 w-6" />
              </span>
              <div>
                <h1 className="font-serif text-2xl font-semibold">LearnMate AI</h1>
                <p className="text-sm text-slate-300">{t("Your personal study assistant · supports, never replaces, your teachers")}</p>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-1.5 text-[11px]">
              <span className="flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1"><span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-teal-300" /> Demo AI capability · API-ready</span>
              <span className="rounded-full bg-white/10 px-2.5 py-1">English · اردو · Roman Urdu</span>
              <span className="rounded-full bg-white/10 px-2.5 py-1">Explain · Quiz · Study plan</span>
            </div>
          </div>
        </div>

        {/* Chat */}
        <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-4 py-5">
          {messages.map((m, i) => (
            <div key={i} className={cn("flex gap-3", m.role === "user" ? "justify-end" : "justify-start")}>
              {m.role === "ai" && (
                <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-teal-500/15 text-mint">
                  <Icon.Robot className="h-4 w-4" />
                </span>
              )}
              <div className={cn("max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed", m.role === "user" ? "bg-navy-900 text-white" : "bg-white border border-navy-900/8 text-slate-700")}>
                {m.text}
                {m.sources && m.sources.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {m.sources.map((s) => (
                      <a key={s.href + s.title} href={s.href} className="inline-flex items-center gap-1.5 rounded-full bg-mint-soft px-3 py-1 text-xs font-medium text-mint hover:bg-mint hover:text-white">
                        <Icon.ArrowUpRight className="h-3 w-3" /> {s.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex gap-3">
              <span className="mt-1 flex h-8 w-8 items-center justify-center rounded-lg bg-teal-500/15 text-mint"><Icon.Robot className="h-4 w-4" /></span>
              <div className="flex items-center gap-1.5 rounded-2xl border border-navy-900/8 bg-white px-4 py-3">
                {[0, 1, 2].map((i) => (
                  <span key={i} className="h-2 w-2 animate-bounce rounded-full bg-mint" style={{ animationDelay: `${i * 150}ms` }} />
                ))}
              </div>
            </div>
          )}
          <div ref={endRef} />
        </div>

        {/* Quick actions */}
        <div className="mx-auto w-full max-w-3xl">
          <div className="mb-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {quickActions.map((a) => {
              const Cmp = Icon[a.icon];
              return (
                <a key={a.href} href={a.href} className="flex items-center gap-2 rounded-xl border border-navy-900/10 bg-white px-3 py-2.5 text-sm font-medium text-slate-600 transition hover:-translate-y-0.5 hover:border-navy-900/25 hover:text-navy-950">
                  <Cmp className="h-4 w-4 text-mint" />
                  <span className="truncate">{a.label}</span>
                </a>
              );
            })}
          </div>

          {/* Suggested prompts */}
          <div className="no-scrollbar mb-3 flex gap-2 overflow-x-auto">
            {suggestions.map((s) => (
              <button
                key={s}
                onClick={() => send(s)}
                disabled={loading}
                className="whitespace-nowrap rounded-full border border-navy-900/10 bg-white px-3.5 py-1.5 text-sm text-slate-600 transition hover:border-mint hover:text-mint disabled:opacity-50"
              >
                {s}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="flex items-center gap-2 rounded-full border border-navy-900/12 bg-white p-1.5 shadow-sm focus-within:border-mint focus-within:ring-2 focus-within:ring-mint/15">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Ask LearnMate anything…"
              className="flex-1 bg-transparent px-3 py-2 text-sm outline-none placeholder:text-slate-400"
            />
            <button
              onClick={() => send()}
              disabled={loading || !input.trim()}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-900 text-white transition hover:bg-navy-800 disabled:opacity-40"
              aria-label="Send"
            >
              <Icon.Send className="h-4 w-4" />
            </button>
          </div>
          <p className="mt-2 text-center text-[11px] text-slate-400">
            LearnMate is a supportive assistant and does not replace your teachers. Responses come from Meridian Academy's own content.
          </p>
        </div>
      </div>
    </PortalShell>
  );
}
