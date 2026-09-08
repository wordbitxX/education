"use client";

import { useId } from "react";
import { cn } from "@/lib/utils";

export function BarChart({
  data,
  labels,
  className,
  tone = "#0f766e",
  max,
}: {
  data: number[];
  labels?: string[];
  className?: string;
  tone?: string;
  max?: number;
}) {
  const m = max ?? Math.max(...data) * 1.15;
  return (
    <div className={cn("flex items-end gap-2", className)}>
      {data.map((v, i) => (
        <div key={i} className="flex flex-1 flex-col items-center gap-2">
          <div className="flex w-full flex-1 items-end">
            <div
              className="bar w-full rounded-t-md"
              style={{ height: `${(v / m) * 100}%`, backgroundColor: tone, opacity: 0.55 + (v / m) * 0.45 }}
            />
          </div>
          {labels && <span className="text-[10px] text-slate-400">{labels[i]}</span>}
        </div>
      ))}
    </div>
  );
}

export function LineChart({
  data,
  labels,
  height = 140,
  className,
  tone = "#0f766e",
}: {
  data: number[];
  labels?: string[];
  height?: number;
  className?: string;
  tone?: string;
}) {
  const id = useId();
  const w = 600;
  const h = height;
  const pad = 12;
  const m = Math.max(...data) * 1.1;
  const points = data.map((v, i) => ({
    x: pad + (i * (w - pad * 2)) / (data.length - 1),
    y: h - pad - (v / m) * (h - pad * 2),
  }));
  const line = points.map((p, i) => `${i === 0 ? "M" : "L"}${p.x},${p.y}`).join(" ");
  const area = `${line} L${points[points.length - 1].x},${h - pad} L${points[0].x},${h - pad} Z`;

  return (
    <div className={cn("w-full", className)}>
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full" style={{ height }} preserveAspectRatio="none">
        <defs>
          <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={tone} stopOpacity="0.28" />
            <stop offset="100%" stopColor={tone} stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={area} fill={`url(#${id})`} />
        <path d={line} fill="none" stroke={tone} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        {points.map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r="3.5" fill="#fff" stroke={tone} strokeWidth="2" />
        ))}
      </svg>
      {labels && (
        <div className="mt-1 flex justify-between px-1 text-[10px] text-slate-400">
          {labels.map((l, i) => (
            <span key={i}>{l}</span>
          ))}
        </div>
      )}
    </div>
  );
}

export function MiniList({ items }: { items: { label: string; value: string; color: string }[] }) {
  return (
    <div className="space-y-3">
      {items.map((it) => (
        <div key={it.label} className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-sm text-slate-600">
            <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: it.color }} />
            {it.label}
          </span>
          <span className="font-medium text-navy-950">{it.value}</span>
        </div>
      ))}
    </div>
  );
}
