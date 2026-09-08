import { contact } from "@/lib/data";
import { Icon } from "@/components/icons";
import { cn } from "@/lib/utils";

/**
 * Dual-number contact block for WordbitX Software Company.
 * Primary: Pakistan (+92 325 1888841) · Secondary: USA (+1 929 619 7699)
 */
export function CallStrip({
  tone = "light",
  layout = "row",
  className,
}: {
  tone?: "light" | "dark";
  layout?: "row" | "stack";
  className?: string;
}) {
  const dark = tone === "dark";
  return (
    <div className={cn("flex gap-3", layout === "row" ? "flex-wrap items-center" : "flex-col", className)}>
      {/* Pakistan — primary */}
      <a
        href={contact.phoneHref}
        className={cn(
          "group flex items-center gap-3 rounded-2xl border px-4 py-3 transition hover:-translate-y-0.5",
          dark
            ? "border-white/15 bg-white/[0.06] hover:border-teal-300/50"
            : "border-mint/30 bg-mint-soft/50 hover:border-mint"
        )}
      >
        <span className={cn("flex h-9 w-9 shrink-0 items-center justify-center rounded-xl", dark ? "bg-teal-500/20 text-teal-300" : "bg-mint text-white")}>
          <Icon.Phone className="h-4 w-4" />
        </span>
        <span className="text-left leading-tight">
          <span className={cn("flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-widest", dark ? "text-slate-400" : "text-slate-500")}>
            Pakistan
            <span className={cn("rounded px-1 py-px text-[8px] font-bold", dark ? "bg-teal-500/20 text-teal-300" : "bg-mint text-white")}>
              PRIMARY
            </span>
          </span>
          <span className={cn("block text-[15px] font-bold", dark ? "text-white" : "text-navy-950")}>
            {contact.phone}
          </span>
        </span>
      </a>

      {/* USA — secondary */}
      <a
        href={contact.phoneUsaHref}
        className={cn(
          "group flex items-center gap-3 rounded-2xl border px-4 py-3 transition hover:-translate-y-0.5",
          dark
            ? "border-white/12 bg-white/[0.03] hover:border-white/30"
            : "border-navy-900/12 bg-white hover:border-navy-900/30"
        )}
      >
        <span className={cn("flex h-9 w-9 shrink-0 items-center justify-center rounded-xl", dark ? "bg-white/10 text-slate-300" : "bg-navy-50 text-navy-700")}>
          <Icon.Globe className="h-4 w-4" />
        </span>
        <span className="text-left leading-tight">
          <span className={cn("block text-[10px] font-semibold uppercase tracking-widest", dark ? "text-slate-500" : "text-slate-400")}>
            USA / International
          </span>
          <span className={cn("block text-[15px] font-bold", dark ? "text-slate-200" : "text-navy-900")}>
            {contact.phoneUsa}
          </span>
        </span>
      </a>
    </div>
  );
}

/** Compact inline version — two tel links side by side. */
export function CallInline({ tone = "light", className }: { tone?: "light" | "dark"; className?: string }) {
  const dark = tone === "dark";
  return (
    <div className={cn("flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm", className)}>
      <a
        href={contact.phoneHref}
        className={cn("flex items-center gap-2 font-bold transition", dark ? "text-teal-300 hover:text-white" : "text-mint hover:text-navy-950")}
      >
        <Icon.Phone className="h-4 w-4" /> {contact.phone}
        <span className={cn("rounded px-1.5 py-0.5 text-[9px] font-bold uppercase", dark ? "bg-teal-500/20 text-teal-300" : "bg-mint-soft text-mint")}>PK</span>
      </a>
      <a
        href={contact.phoneUsaHref}
        className={cn("flex items-center gap-2 font-medium transition", dark ? "text-slate-400 hover:text-teal-300" : "text-slate-500 hover:text-navy-950")}
      >
        {contact.phoneUsa}
        <span className={cn("rounded px-1.5 py-0.5 text-[9px] font-bold uppercase", dark ? "bg-white/10 text-slate-400" : "bg-slate-100 text-slate-500")}>USA</span>
      </a>
    </div>
  );
}

/** WhatsApp buttons for both numbers. */
export function WhatsAppButtons({ message, className }: { message?: string; className?: string }) {
  const text = encodeURIComponent(message ?? "Hello WordbitX, I'd like a demo of your education management platform");
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      <a
        href={`${contact.whatsapp}?text=${text}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_28px_-12px_rgba(37,211,102,0.7)] transition hover:-translate-y-0.5"
      >
        <Icon.Chat className="h-4 w-4" /> WhatsApp PK
      </a>
      <a
        href={`${contact.phoneUsaWhatsapp}?text=${text}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full border border-[#25D366]/45 px-5 py-2.5 text-sm font-semibold text-[#25D366] transition hover:bg-[#25D366] hover:text-white"
      >
        <Icon.Chat className="h-4 w-4" /> WhatsApp USA
      </a>
    </div>
  );
}
