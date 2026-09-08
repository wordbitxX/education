"use client";

import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type ButtonHTMLAttributes,
} from "react";
import { cn } from "@/lib/utils";
import { Icon } from "./icons";

/* ----------------------------- Layout ---------------------------------- */
export function Container({
  children,
  className,
  size = "default",
  id,
}: {
  children: ReactNode;
  className?: string;
  size?: "default" | "wide" | "narrow";
  id?: string;
}) {
  return (
    <div
      id={id}
      className={cn(
        "mx-auto w-full px-5 sm:px-8",
        size === "narrow" && "max-w-3xl",
        size === "default" && "max-w-7xl",
        size === "wide" && "max-w-[90rem]",
        className
      )}
    >
      {children}
    </div>
  );
}

export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("py-16 sm:py-24", className)}>
      {children}
    </section>
  );
}

export function Eyebrow({
  children,
  className,
  tone = "default",
}: {
  children: ReactNode;
  className?: string;
  tone?: "default" | "light" | "accent";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em]",
        tone === "default" && "text-mint",
        tone === "light" && "text-teal-200",
        tone === "accent" && "text-navy-600",
        className
      )}
    >
      <span className="h-px w-6 bg-current opacity-60" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "default",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "default" | "light";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {eyebrow && <Eyebrow tone={tone === "light" ? "light" : "default"}>{eyebrow}</Eyebrow>}
      <h2
        className={cn(
          "font-serif text-[clamp(1.85rem,4vw,3rem)] leading-[1.08] tracking-tight",
          tone === "light" ? "text-white" : "text-navy-950"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "max-w-2xl text-base leading-relaxed sm:text-lg",
            align === "center" && "mx-auto",
            tone === "light" ? "text-slate-300" : "text-slate-600"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

/* ----------------------------- Buttons --------------------------------- */
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?:
    | "primary"
    | "secondary"
    | "ghost"
    | "outline"
    | "outline-light"
    | "ghost-light"
    | "light"
    | "link";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
  href?: string;
  icon?: boolean;
};

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  href,
  icon,
  ...props
}: ButtonProps) {
  const cls = cn(
    "group relative inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint/50 disabled:opacity-50",
    size === "sm" && "px-4 py-2 text-sm",
    size === "md" && "px-6 py-3 text-sm",
    size === "lg" && "px-8 py-4 text-base",
    variant === "primary" &&
      "bg-navy-900 text-white shadow-[0_10px_30px_-12px_rgba(14,36,64,0.6)] hover:bg-navy-800 hover:shadow-[0_16px_36px_-12px_rgba(14,36,64,0.55)]",
    variant === "secondary" &&
      "bg-mint text-white shadow-[0_10px_30px_-12px_rgba(15,118,110,0.6)] hover:bg-[#0c6359]",
    variant === "outline" &&
      "border border-navy-900/25 bg-transparent text-navy-900 hover:border-navy-900 hover:bg-navy-900 hover:text-white",
    // For dark / navy backgrounds — white border, fills white with navy text on hover
    variant === "outline-light" &&
      "border border-white/35 bg-transparent text-white hover:border-white hover:bg-white hover:!text-navy-950",
    variant === "light" &&
      "bg-white text-navy-900 shadow-sm hover:bg-navy-50",
    variant === "ghost" && "text-navy-900 hover:bg-navy-900/5",
    variant === "ghost-light" && "text-white hover:bg-white/10",
    variant === "link" && "text-mint underline-offset-4 hover:underline p-0 h-auto",
    className
  );
  if (href) {
    return (
      <a href={href} className={cls}>
        {children}
        {icon && (
          <Icon.ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        )}
      </a>
    );
  }
  return (
    <button className={cls} {...props}>
      {children}
      {icon && (
        <Icon.ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </button>
  );
}

/* ----------------------------- Badge ----------------------------------- */
export function Badge({
  children,
  tone = "neutral",
  className,
}: {
  children: ReactNode;
  tone?: "neutral" | "mint" | "navy" | "gold" | "red" | "outline";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium",
        tone === "neutral" && "bg-slate-100 text-slate-700",
        tone === "mint" && "bg-mint-soft text-mint",
        tone === "navy" && "bg-navy-50 text-navy-700",
        tone === "gold" && "bg-gold-soft text-gold",
        tone === "red" && "bg-red-50 text-red-600",
        tone === "outline" && "border border-current/30 bg-transparent",
        className
      )}
    >
      {children}
    </span>
  );
}

/* ----------------------------- Card ------------------------------------ */
export function Card({
  children,
  className,
  hover = false,
  pad = true,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  pad?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-navy-900/8 bg-white",
        pad && "p-6",
        hover &&
          "transition-all duration-300 hover:-translate-y-1 hover:border-navy-900/15 hover:shadow-[0_24px_50px_-24px_rgba(14,36,64,0.28)]",
        className
      )}
    >
      {children}
    </div>
  );
}

/* ----------------------------- Stats / counters ------------------------ */
export function Counter({
  value,
  suffix = "",
  prefix = "",
  decimals = 0,
  duration = 1400,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  duration?: number;
}) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            setDisplay(value * eased);
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [value, duration]);

  const formatted = display.toLocaleString("en-GB", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}

/* ----------------------------- Reveal (scroll) ------------------------- */
export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
  id,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li" | "span";
  id?: string;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShown(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      id={id}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "transition-all duration-700 ease-out",
        shown
          ? "translate-y-0 opacity-100"
          : "translate-y-7 opacity-0",
        className
      )}
    >
      {children}
    </Tag>
  );
}

/* ----------------------------- Progress bar ---------------------------- */
export function Progress({
  value,
  className,
  tone = "mint",
  animate = true,
}: {
  value: number;
  className?: string;
  tone?: "mint" | "navy" | "gold";
  animate?: boolean;
}) {
  return (
    <div className={cn("h-2 w-full overflow-hidden rounded-full bg-slate-100", className)}>
      <div
        className={cn(
          "h-full rounded-full transition-[width] duration-1000 ease-out",
          tone === "mint" && "bg-mint",
          tone === "navy" && "bg-navy-700",
          tone === "gold" && "bg-gold"
        )}
        style={{ width: animate ? `${value}%` : "0%" }}
        data-width={value}
      />
    </div>
  );
}

/* ----------------------------- Donut chart ------------------------------ */
export function Donut({
  value,
  size = 120,
  stroke = 12,
  tone = "#0f766e",
  label,
}: {
  value: number;
  size?: number;
  stroke?: number;
  tone?: string;
  label?: string;
}) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const offset = c - (value / 100) * c;
  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={r} stroke="#e8e6df" strokeWidth={stroke} fill="none" />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          stroke={tone}
          strokeWidth={stroke}
          fill="none"
          strokeDasharray={c}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{ transition: "stroke-dashoffset 1.2s cubic-bezier(0.22,1,0.36,1)" }}
        />
      </svg>
      <div className="absolute flex flex-col items-center">
        <span className="text-xl font-semibold text-navy-950">{Math.round(value)}%</span>
        {label && <span className="text-[10px] uppercase tracking-wide text-slate-500">{label}</span>}
      </div>
    </div>
  );
}

/* ----------------------------- Tabs ------------------------------------ */
export function Tabs({
  tabs,
  active,
  onChange,
  className,
  size = "md",
}: {
  tabs: { id: string; label: string }[];
  active: string;
  onChange: (id: string) => void;
  className?: string;
  size?: "sm" | "md";
}) {
  return (
    <div
      className={cn(
        "no-scrollbar flex w-max max-w-full items-center gap-1 overflow-x-auto rounded-full border border-navy-900/10 bg-white p-1",
        className
      )}
    >
      {tabs.map((t) => (
        <button
          key={t.id}
          onClick={() => onChange(t.id)}
          className={cn(
            "whitespace-nowrap rounded-full font-medium transition-all duration-300",
            size === "sm" ? "px-3.5 py-1.5 text-xs" : "px-5 py-2 text-sm",
            active === t.id
              ? "bg-navy-900 text-white shadow-sm"
              : "text-slate-600 hover:text-navy-900"
          )}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}

/* ----------------------------- Skeleton --------------------------------- */
export function Skeleton({ className }: { className?: string }) {
  return <div className={cn("shimmer rounded-lg", className)} />;
}

/* ----------------------------- Stat card -------------------------------- */
export function StatCard({
  icon,
  label,
  value,
  sub,
  tone = "#0f766e",
}: {
  icon: ReactNode;
  label: string;
  value: ReactNode;
  sub?: string;
  tone?: string;
}) {
  return (
    <Card hover className="flex flex-col gap-4">
      <div
        className="flex h-11 w-11 items-center justify-center rounded-xl"
        style={{ backgroundColor: `${tone}18`, color: tone }}
      >
        {icon}
      </div>
      <div>
        <div className="text-2xl font-semibold tracking-tight text-navy-950">{value}</div>
        <div className="mt-0.5 text-sm text-slate-500">{label}</div>
        {sub && <div className="mt-1 text-xs font-medium text-mint">{sub}</div>}
      </div>
    </Card>
  );
}

/* ----------------------------- Loading / empty -------------------------- */
export function EmptyState({
  icon = "Search",
  title,
  description,
  action,
}: {
  icon?: keyof typeof Icon;
  title: string;
  description?: string;
  action?: ReactNode;
}) {
  const Cmp = Icon[icon];
  return (
    <div className="flex flex-col items-center gap-3 rounded-2xl border border-dashed border-navy-900/15 bg-white/60 px-6 py-14 text-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-50 text-navy-400">
        <Cmp className="h-6 w-6" />
      </div>
      <div className="font-medium text-navy-900">{title}</div>
      {description && <p className="max-w-sm text-sm text-slate-500">{description}</p>}
      {action}
    </div>
  );
}

/* ----------------------------- Divider dots ----------------------------- */
export function LetterSpaced({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn("font-medium tracking-[0.02em]", className)}>{children}</p>;
}
