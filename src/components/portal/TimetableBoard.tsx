"use client";

import { useState } from "react";
import { timetableSlots, weekDays } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/icons";

export default function TimetableBoard({ compact = false }: { compact?: boolean }) {
  const [day, setDay] = useState<string>("Mon");
  const slots = timetableSlots.filter((s) => s.day === day);

  return (
    <div>
      <div className="no-scrollbar flex gap-2 overflow-x-auto pb-3">
        {weekDays.map((d) => (
          <button
            key={d}
            onClick={() => setDay(d)}
            className={cn(
              "whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors",
              day === d ? "bg-navy-900 text-white" : "border border-navy-900/10 bg-white text-slate-600 hover:border-navy-900/30"
            )}
          >
            {d}
            <span className="ml-1 hidden text-[10px] opacity-70 sm:inline">
              {new Date("2026-03-09").toLocaleDateString("en", { weekday: "short" })}
            </span>
          </button>
        ))}
      </div>

      <div className={cn("grid gap-2.5", compact ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3")}>
        {slots.map((s, i) => (
          <div
            key={`${s.day}-${s.time}-${s.title}`}
            className={cn(
              "animate-fade-up rounded-xl border p-4",
              s.type === "break" ? "border-dashed border-navy-900/15 bg-cream" : "border-navy-900/8 bg-white hover:border-navy-900/20"
            )}
            style={{ animationDelay: `${i * 40}ms` }}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-slate-400">{s.time}</span>
              <Icon.Clock className="h-3.5 w-3.5 text-slate-300" />
            </div>
            <p className={cn("mt-2 font-semibold", s.type === "break" ? "text-navy-600" : "text-navy-950")}>{s.title}</p>
            {s.type !== "break" && (
              <div className="mt-1 flex flex-wrap gap-x-3 gap-y-0.5 text-xs text-slate-500">
                <span className="flex items-center gap-1"><Icon.User className="h-3 w-3" /> {s.teacher}</span>
                <span className="flex items-center gap-1"><Icon.MapPin className="h-3 w-3" /> {s.room}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
