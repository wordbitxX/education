"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import { notifications, brand } from "@/lib/data";
import { cn, initials } from "@/lib/utils";
import { Icon, type IconName } from "@/components/icons";
import { useI18n } from "@/lib/i18n";
import LanguageSwitcher from "@/components/site/LanguageSwitcher";
import { Toaster, toast } from "./Toast";

export type PortalKey = "student" | "parent" | "teacher" | "admin" | "lms" | "assistant";

export type PortalNavItem = { label: string; href: string; icon: IconName };

const portalMeta: Record<PortalKey, { title: string; nav: PortalNavItem[] }> = {
  student: {
    title: "Student Portal",
    nav: [
      { label: "Overview", href: "#overview", icon: "Home" },
      { label: "Timetable", href: "#timetable", icon: "Calendar" },
      { label: "Assignments", href: "#assignments", icon: "Clipboard" },
      { label: "Exams & Results", href: "#exams", icon: "Trophy" },
      { label: "Attendance", href: "#attendance", icon: "CheckCircle" },
      { label: "My Courses", href: "#lms", icon: "BookOpen" },
      { label: "Resources", href: "#resources", icon: "FileText" },
      { label: "Announcements", href: "#announcements", icon: "Bell" },
    ],
  },
  parent: {
    title: "Parent Portal",
    nav: [
      { label: "Overview", href: "#overview", icon: "Home" },
      { label: "Attendance", href: "#attendance", icon: "CheckCircle" },
      { label: "Fees & Invoices", href: "#fees", icon: "Wallet" },
      { label: "Exams & Results", href: "#exams", icon: "Trophy" },
      { label: "Homework", href: "#homework", icon: "Clipboard" },
      { label: "My Children", href: "#children", icon: "Users" },
      { label: "Today & Timetable", href: "#timetable", icon: "Calendar" },
      { label: "Messages", href: "#messages", icon: "MessageCircle" },
    ],
  },
  teacher: {
    title: "Teacher Portal",
    nav: [
      { label: "Overview", href: "#overview", icon: "Home" },
      { label: "My Classes", href: "#classes", icon: "Users" },
      { label: "Attendance", href: "#attendance", icon: "Clipboard" },
      { label: "Assignments", href: "#assignments", icon: "FileText" },
      { label: "Marks Entry", href: "#marks", icon: "Calculator" },
      { label: "Exams", href: "#exams", icon: "Trophy" },
      { label: "Lesson Plans", href: "#lessons", icon: "BookOpen" },
      { label: "Resources", href: "#resources", icon: "Download" },
    ],
  },
  admin: {
    title: "Admin Dashboard",
    nav: [
      { label: "Overview", href: "#overview", icon: "Home" },
      { label: "Students", href: "#students", icon: "Users" },
      { label: "Admissions CRM", href: "#admissions", icon: "GraduationCap" },
      { label: "Teachers", href: "#teachers", icon: "BookOpen" },
      { label: "Fees & Finance", href: "#fees", icon: "Wallet" },
      { label: "Attendance", href: "#attendance", icon: "CheckCircle" },
      { label: "Exams", href: "#exams", icon: "Trophy" },
      { label: "Timetable", href: "#timetable", icon: "Calendar" },
      { label: "Transport", href: "#transport", icon: "Bus" },
      { label: "Library", href: "#library", icon: "Book" },
      { label: "HR & Payroll", href: "#hr", icon: "Users" },
      { label: "Store", href: "#store", icon: "Wallet" },
      { label: "Communication", href: "#communication", icon: "Send" },
      { label: "Reports", href: "#reports", icon: "FileText" },
      { label: "Settings", href: "#settings", icon: "Settings" },
    ],
  },
  lms: {
    title: "Learning Hub",
    nav: [
      { label: "My Courses", href: "#courses", icon: "BookOpen" },
      { label: "Continue Learning", href: "#continue", icon: "Play" },
      { label: "Quizzes", href: "#progress", icon: "Lightbulb" },
      { label: "Assignments", href: "#assignments", icon: "Clipboard" },
      { label: "Resources", href: "#resources", icon: "FileText" },
      { label: "Progress", href: "#progress", icon: "TrendingUp" },
    ],
  },
  assistant: { title: "LearnMate AI", nav: [] },
};

const portalSwitch: { key: PortalKey; label: string }[] = [
  { key: "student", label: "Student Portal" },
  { key: "parent", label: "Parent Portal" },
  { key: "teacher", label: "Teacher Portal" },
  { key: "admin", label: "Admin Dashboard" },
];

export default function PortalShell({
  portal,
  user,
  role,
  children,
}: {
  portal: PortalKey;
  user: string;
  role: string;
  children: ReactNode;
}) {
  const meta = portalMeta[portal];
  const [notifOpen, setNotifOpen] = useState(false);
  const [switchOpen, setSwitchOpen] = useState(false);
  const [allRead, setAllRead] = useState(false);
  const { t } = useI18n();

  const isAssistant = portal === "assistant";

  return (
    <div className="min-h-screen bg-[#f6f4ee]">
      {/* Desktop sidebar */}
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 flex-col bg-navy-950 text-white lg:flex">
        <div className="flex items-center gap-2.5 px-5 py-5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10">
            <Icon.GraduationCap className="h-5 w-5" />
          </span>
          <div className="leading-none">
            <p className="font-serif text-[15px] font-semibold">{brand.short}</p>
            <p className="mt-0.5 text-[9px] uppercase tracking-[0.2em] text-slate-400">{meta.title}</p>
          </div>
        </div>
        <div className="mx-4 mb-2 rounded-lg bg-teal-500/10 px-3 py-2 text-[10px] leading-relaxed text-teal-200">
          Demo by WordbitX · Fictional data
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-2">
          {meta.nav.map((n) => {
            const Cmp = Icon[n.icon];
            return (
              <a
                key={n.label + n.href}
                href={n.href}
                className="group mb-0.5 flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
              >
                <Cmp className="h-[18px] w-[18px] text-slate-400 transition group-hover:text-teal-300" />
                {t(n.label)}
              </a>
            );
          })}
          {portal === "student" && (
            <a href="/portal/assistant" className="group mb-0.5 mt-3 flex items-center gap-3 rounded-xl border border-teal-500/30 bg-teal-500/10 px-3 py-2.5 text-sm font-medium text-teal-200 transition hover:bg-teal-500/20">
              <Icon.Robot className="h-[18px] w-[18px]" /> LearnMate AI
            </a>
          )}
        </nav>

        <div className="border-t border-white/10 p-3">
          <Link href="/" className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-slate-400 transition hover:text-white">
            <Icon.Globe className="h-4 w-4" /> {t("Academy website")}
          </Link>
          <div className="mt-1 flex items-center gap-3 rounded-xl bg-white/5 p-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-xs font-semibold">
              {initials(user)}
            </span>
            <div className="min-w-0">
              <p className="truncate text-sm font-medium">{user}</p>
              <p className="truncate text-xs text-slate-400">{role}</p>
            </div>
            <button aria-label="Sign out" className="ml-auto text-slate-400 hover:text-white">
              <Icon.Logout className="h-4 w-4" />
            </button>
          </div>
        </div>
      </aside>

      {/* Main column */}
      <div className="lg:pl-64">
        {/* Top bar */}
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between gap-3 border-b border-navy-900/8 bg-white/80 px-4 backdrop-blur sm:px-6">
          <div className="flex items-center gap-2 lg:hidden">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-navy-900 text-white">
              <Icon.GraduationCap className="h-4 w-4" />
            </span>
            <span className="text-sm font-semibold text-navy-950">{meta.title}</span>
          </div>
          <div className="hidden items-center gap-2 text-sm text-slate-500 lg:flex">
            <span className="font-semibold text-navy-950">{user}</span>
            <span className="text-slate-300">·</span>
            <span>{meta.title}</span>
          </div>

          <div className="flex items-center gap-1.5">
            <LanguageSwitcher />
            <Link
              href="/portal/assistant"
              className="hidden h-9 w-9 items-center justify-center rounded-full text-slate-500 transition hover:bg-navy-50 hover:text-navy-950 sm:flex"
              aria-label="AI assistant"
            >
              <Icon.Robot className="h-[18px] w-[18px] text-mint" />
            </Link>
            <button
              onClick={() => setNotifOpen((v) => !v)}
              className="relative flex h-9 w-9 items-center justify-center rounded-full text-slate-500 transition hover:bg-navy-50 hover:text-navy-950"
              aria-label="Notifications"
            >
              <Icon.Bell className="h-[18px] w-[18px]" />
              {!allRead && <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-red-500" />}
            </button>

            {/* Switch portal */}
            <div className="relative">
              <button
                onClick={() => setSwitchOpen((v) => !v)}
                className="flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium text-slate-600 transition hover:bg-navy-50"
              >
                <Icon.Layout className="h-4 w-4 text-mint" /> {t("Switch")}
                <Icon.ChevronDown className={cn("h-3.5 w-3.5 transition", switchOpen && "rotate-180")} />
              </button>
              {switchOpen && (
                <>
                  <div className="fixed inset-0 z-10" onClick={() => setSwitchOpen(false)} />
                  <div className="animate-scale-in absolute right-0 top-12 z-30 w-52 rounded-2xl border border-navy-900/10 bg-white p-1.5 shadow-xl">
                    {portalSwitch.map((p) => (
                      <Link
                        key={p.key}
                        href={`/portal/${p.key}`}
                        onClick={() => setSwitchOpen(false)}
                        className={cn("flex items-center gap-2 rounded-xl px-3 py-2 text-sm", portal === p.key ? "bg-navy-50 font-medium text-navy-950" : "text-slate-600 hover:bg-slate-50")}
                      >
                        <Icon.Layers className="h-4 w-4 text-mint" /> {t(p.label)}
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>

            <div className="ml-1 flex h-9 w-9 items-center justify-center rounded-full bg-navy-900 text-xs font-semibold text-white">
              {initials(user)}
            </div>
          </div>
        </header>

        {/* Notification dropdown */}
        {notifOpen && (
          <>
            <div className="fixed inset-0 z-20" onClick={() => setNotifOpen(false)} />
            <div className="animate-scale-in fixed right-3 top-16 z-30 w-[min(92vw,360px)] rounded-2xl border border-navy-900/10 bg-white p-2 shadow-[0_30px_70px_-20px_rgba(8,22,51,0.4)]">
              <div className="flex items-center justify-between px-3 py-2">
                <p className="text-sm font-semibold text-navy-950">{t("Notifications")}</p>
                <button onClick={() => setNotifOpen(false)} className="text-slate-400 hover:text-navy-950"><Icon.X className="h-4 w-4" /></button>
              </div>
              <div className="max-h-80 overflow-y-auto">
                {notifications.map((n) => (
                  <div
                    key={n.id}
                    className={cn("flex gap-3 rounded-xl px-3 py-3 transition", !allRead && n.unread && "bg-navy-50/60")}
                  >
                    <span className={cn("mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg", n.kind === "alert" ? "bg-red-50 text-red-500" : n.kind === "success" ? "bg-mint-soft text-mint" : n.kind === "deadline" ? "bg-gold-soft text-gold" : "bg-navy-50 text-navy-600")}>
                      {n.kind === "alert" ? <Icon.Alert className="h-4 w-4" /> : n.kind === "success" ? <Icon.CheckCircle className="h-4 w-4" /> : n.kind === "deadline" ? <Icon.Clock className="h-4 w-4" /> : <Icon.Info className="h-4 w-4" />}
                    </span>
                    <div>
                      <p className="text-sm font-medium text-navy-950">{n.title}</p>
                      <p className="text-xs text-slate-500">{n.body}</p>
                      <p className="mt-1 text-[11px] text-slate-400">{n.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button
                onClick={() => { setAllRead(true); toast(t("Mark all as read")); }}
                className="mt-1 w-full rounded-xl p-2.5 text-sm font-medium text-mint hover:bg-mint-soft"
              >
                {t("Mark all as read")}
              </button>
            </div>
          </>
        )}

        {/* Content */}
        <main className={isAssistant ? "flex min-h-[calc(100vh-4rem)] flex-col" : "p-4 pb-24 sm:p-6 lg:pb-10"}>
          {children}
        </main>
      </div>

      {/* Mobile bottom nav */}
      {!isAssistant && (
        <nav className="fixed inset-x-0 bottom-0 z-40 flex items-stretch justify-around border-t border-navy-900/8 bg-white/95 py-1.5 backdrop-blur lg:hidden">
          {meta.nav.slice(0, 5).map((n) => {
            const Cmp = Icon[n.icon];
            return (
              <a key={n.label} href={n.href} className="flex flex-1 flex-col items-center gap-0.5 py-1 text-slate-500">
                <Cmp className="h-5 w-5" />
                <span className="max-w-16 truncate text-[9px] font-medium">{t(n.label)}</span>
              </a>
            );
          })}
        </nav>
      )}

      <Toaster />
    </div>
  );
}
