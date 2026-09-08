import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Icon, type IconName } from "@/components/icons";

export function Panel({
  children,
  className,
  title,
  action,
  id,
}: {
  children: ReactNode;
  className?: string;
  title?: ReactNode;
  action?: ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className={cn("scroll-mt-24 rounded-2xl border border-navy-900/8 bg-white p-5 sm:p-6", className)}>
      {(title || action) && (
        <div className="mb-4 flex items-center justify-between gap-4">
          {title && <h2 className="font-semibold text-navy-950">{title}</h2>}
          {action}
        </div>
      )}
      {children}
    </section>
  );
}

export function KPI({
  icon,
  label,
  value,
  sub,
  tone = "#0f766e",
  className,
}: {
  icon: IconName;
  label: string;
  value: ReactNode;
  sub?: ReactNode;
  tone?: string;
  className?: string;
}) {
  const Cmp = Icon[icon];
  return (
    <div className={cn("rounded-2xl border border-navy-900/8 bg-white p-5", className)}>
      <div className="flex items-center justify-between">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl" style={{ backgroundColor: `${tone}18`, color: tone }}>
          <Cmp className="h-5 w-5" />
        </span>
        {sub && <span className="text-xs text-slate-400">{sub}</span>}
      </div>
      <div className="mt-3 text-2xl font-semibold tracking-tight text-navy-950">{value}</div>
      <div className="text-sm text-slate-500">{label}</div>
    </div>
  );
}

export function Tag({ children, tone = "neutral" }: { children: ReactNode; tone?: "mint" | "navy" | "gold" | "red" | "neutral" }) {
  return (
    <span className={cn(
      "inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium",
      tone === "mint" && "bg-mint-soft text-mint",
      tone === "navy" && "bg-navy-50 text-navy-700",
      tone === "gold" && "bg-gold-soft text-gold",
      tone === "red" && "bg-red-50 text-red-600",
      tone === "neutral" && "bg-slate-100 text-slate-600",
    )}>
      {children}
    </span>
  );
}

export function Avatar({ name, tone = "#0f766e", size = "md" }: { name: string; tone?: string; size?: "sm" | "md" | "lg" }) {
  const init = name.split(" ").map((n) => n[0]).slice(0, 2).join("");
  return (
    <span
      className={cn("inline-flex items-center justify-center rounded-full font-semibold text-white", size === "sm" ? "h-8 w-8 text-xs" : size === "lg" ? "h-14 w-14 text-lg" : "h-10 w-10 text-sm")}
      style={{ backgroundColor: tone }}
    >
      {init}
    </span>
  );
}

export function Table({ head, rows }: { head: string[]; rows: ReactNode[][] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[560px] text-left text-sm">
        <thead>
          <tr className="border-b border-navy-900/8 text-xs uppercase tracking-wide text-slate-400">
            {head.map((h) => (
              <th key={h} className="px-3 py-3 font-semibold">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-b border-navy-900/5 last:border-0 hover:bg-navy-50/40">
              {r.map((c, j) => (
                <td key={j} className="px-3 py-3">{c}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
