"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/icons";
import { Button, Badge, EmptyState } from "@/components/ui";

const sample = "APP-2026-0041";

type App = {
  id: string;
  program: string;
  firstName: string;
  lastName: string;
  campus: string;
  date: string;
  status: string;
};

const statusSteps = ["Submitted", "Under Review", "Documents", "Interview", "Approved"];

const demoStatus: Record<string, string> = {
  "APP-2026-0041": "Under Review",
  "APP-2026-0039": "Documents",
  "APP-2026-0038": "Approved",
};

export default function TrackPage() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<App | null>(null);
  const [notFound, setNotFound] = useState(false);
  const [localApps, setLocalApps] = useState<App[]>([]);

  useEffect(() => {
    try {
      setLocalApps(JSON.parse(localStorage.getItem("meridian.applications") || "[]"));
    } catch {
      /* noop */
    }
  }, []);

  const lookup = (idStr?: string) => {
    const id = (idStr ?? input).trim().toUpperCase();
    if (!id) return;
    const inLocal = localApps.find((a) => a.id.toUpperCase() === id);
    if (inLocal) {
      setResult(inLocal);
      setNotFound(false);
      return;
    }
    // Demo lookup based on the sample set
    const status = demoStatus[id];
    if (status) {
      setResult({
        id,
        program: "Secondary School Programme",
        firstName: "Demo",
        lastName: "Applicant",
        campus: "City Campus",
        date: "2026-03-09",
        status,
      });
      setNotFound(false);
    } else {
      setResult(null);
      setNotFound(true);
    }
  };

  const statusIdx = result ? statusSteps.indexOf(result.status) : -1;
  const pct = statusIdx === -1 ? 0 : Math.round(((statusIdx + 1) / statusSteps.length) * 100);

  return (
    <div className="container px-5 pb-24 pt-28 sm:px-8">
      <div className="mx-auto max-w-3xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-mint">Application tracking</p>
        <h1 className="font-serif text-4xl font-semibold text-navy-950">Track your application</h1>
        <p className="mt-3 text-slate-600">
          Enter the application ID you received at submission to see live status and next steps.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <Icon.Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && lookup()}
              placeholder="e.g. APP-2026-0041"
              className="h-13 w-full rounded-full border border-navy-900/15 bg-white py-3.5 pl-11 pr-4 text-sm outline-none focus:border-mint focus:ring-2 focus:ring-mint/20"
            />
          </div>
          <Button onClick={() => lookup()}>Track</Button>
        </div>
        <button onClick={() => lookup(sample)} className="mt-3 text-sm text-mint underline-offset-4 hover:underline">
          Try a sample ID: {sample}
        </button>

        {notFound && (
          <div className="mt-10">
            <EmptyState
              icon="Search"
              title="We couldn't find that application"
              description="Double-check the application ID, or start a new application. This demo supports the sample ID shown above and any applications submitted here."
              action={<Button href="/admissions/apply" size="sm">Start an application</Button>}
            />
          </div>
        )}

        {result && (
          <div className="animate-fade-up mt-10 rounded-3xl border border-navy-900/8 bg-white p-6 sm:p-8">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge tone="navy">{result.id}</Badge>
                  <Badge tone={result.status === "Approved" ? "mint" : "gold"}>{result.status}</Badge>
                </div>
                <h2 className="mt-3 font-serif text-2xl font-semibold text-navy-950">
                  {result.firstName} {result.lastName}
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  {result.program} · {result.campus}
                </p>
              </div>
              <div className="rounded-2xl bg-cream px-5 py-4 text-center">
                <div className="font-serif text-3xl font-semibold text-mint">{pct}%</div>
                <div className="text-xs text-slate-500">complete</div>
              </div>
            </div>

            {/* Status wizard */}
            <div className="mt-8">
              <div className="relative mb-4 h-1.5 rounded-full bg-slate-100">
                <div className="h-full rounded-full bg-mint transition-all duration-700" style={{ width: `${pct}%` }} />
              </div>
              <div className="grid grid-cols-5 gap-2">
                {statusSteps.map((s, i) => (
                  <div key={s} className="text-center">
                    <span
                      className={cn(
                        "mx-auto flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold",
                        i < statusIdx && "bg-mint text-white",
                        i === statusIdx && "bg-navy-900 text-white",
                        i > statusIdx && "bg-slate-100 text-slate-400"
                      )}
                    >
                      {i < statusIdx ? <Icon.Check className="h-3.5 w-3.5" /> : i + 1}
                    </span>
                    <span className={cn("mt-1.5 block text-[10px] leading-tight", i <= statusIdx ? "text-navy-950" : "text-slate-400")}>{s}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Next steps */}
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                { t: "Documents", d: "Ensure all required documents are uploaded." },
                { t: "Interview", d: "Schedule an age-appropriate interview or assessment." },
                { t: "Decision", d: "You'll receive the outcome by email and portal." },
              ].map((x) => (
                <div key={x.t} className="rounded-xl bg-cream p-4">
                  <p className="font-medium text-navy-950">{x.t}</p>
                  <p className="text-sm text-slate-600">{x.d}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3 border-t border-navy-900/10 pt-5">
              <Button size="sm" variant="outline">Download application</Button>
              <Button size="sm" href="/admissions">Learn about admissions</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

