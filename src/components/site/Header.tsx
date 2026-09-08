"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Icon, type IconName } from "@/components/icons";
import { brand, contact } from "@/lib/data";
import { useI18n } from "@/lib/i18n";
import { SearchPalette } from "./SearchPalette";
import LanguageSwitcher from "./LanguageSwitcher";

const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Academics", href: "/programs" },
  { label: "Admissions", href: "/admissions" },
  { label: "Campus", href: "/campus" },
  { label: "Events", href: "/events" },
  { label: "Contact", href: "/contact" },
];

const moreNav = [
  { label: "News & Notices", href: "/news", desc: "Latest school updates" },
  { label: "Faculty", href: "/about/faculty", desc: "Meet the teaching team" },
  { label: "Gallery", href: "/gallery", desc: "Campus life in pictures" },
  { label: "Downloads", href: "/downloads", desc: "Prospectus & forms" },
  { label: "Results", href: "/results", desc: "Check result online" },
  { label: "Solutions", href: "/solutions", desc: "For every institution" },
  { label: "Journal", href: "/journal", desc: "Education insights" },
  { label: "Case Study", href: "/wordbitx", desc: "How WordbitX built this" },
];

const portalLinks: { label: string; href: string; icon: IconName; desc: string }[] = [
  { label: "Student Portal", href: "/portal/student", icon: "User", desc: "Timetable, tasks, results" },
  { label: "Parent Portal", href: "/portal/parent", icon: "Users", desc: "Fees, attendance, messages" },
  { label: "Teacher Portal", href: "/portal/teacher", icon: "BookOpen", desc: "Attendance, marks, homework" },
  { label: "Admin Dashboard", href: "/portal/admin", icon: "Layout", desc: "Full institution control" },
  { label: "LearnMate AI", href: "/portal/assistant", icon: "Robot", desc: "AI study assistant" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<"portals" | "more" | null>(null);
  const lastY = useRef(0);
  const pathname = usePathname();
  const { t } = useI18n();

  /* scroll: shrink + hide on scroll-down, reveal on scroll-up */
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 8);
      if (y > 240 && y > lastY.current + 6) setHidden(true);
      else if (y < lastY.current - 6 || y < 120) setHidden(false);
      lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
      if (e.key === "Escape") setOpenMenu(null);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobile ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobile]);

  useEffect(() => {
    setOpenMenu(null);
    setMobile(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-transform duration-300 ease-out",
          hidden && !openMenu ? "-translate-y-full" : "translate-y-0"
        )}
      >
        {/* ── Utility bar ── */}
        <div
          className={cn(
            "overflow-hidden bg-navy-950 text-white transition-all duration-300",
            scrolled ? "max-h-0 opacity-0" : "max-h-12 opacity-100"
          )}
        >
          <div className="mx-auto flex max-w-[88rem] items-center justify-between gap-3 px-4 py-2 sm:px-6 lg:px-8">
            <p className="flex min-w-0 items-center gap-2 text-[11px] text-slate-400">
              <span className="h-1.5 w-1.5 shrink-0 animate-pulse-dot rounded-full bg-teal-400" />
              <span className="truncate">
                {t("Concept demo — designed & developed by")}{" "}
                <a
                  href={brand.partnerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-teal-300 hover:underline"
                >
                  WordbitX
                </a>
              </span>
            </p>
            <div className="flex shrink-0 items-center gap-3">
              <a
                href={contact.phoneHref}
                className="flex items-center gap-1.5 text-[11px] font-semibold text-white transition hover:text-teal-300"
              >
                <Icon.Phone className="h-3 w-3 text-teal-300" />
                <span className="hidden sm:inline">{contact.phone}</span>
                <span className="sm:hidden">Call</span>
              </a>
              <span className="hidden text-slate-700 lg:inline">|</span>
              <a
                href={contact.phoneUsaHref}
                className="hidden text-[11px] text-slate-400 transition hover:text-teal-300 lg:inline"
              >
                USA {contact.phoneUsa}
              </a>
              <LanguageSwitcher tone="dark" />
            </div>
          </div>
        </div>

        {/* ── Main bar ── */}
        <div
          className={cn(
            "border-b bg-white transition-all duration-300",
            scrolled
              ? "border-navy-900/10 shadow-[0_4px_24px_-8px_rgba(8,22,51,0.16)]"
              : "border-navy-900/8"
          )}
        >
          <div className="mx-auto max-w-[88rem] px-4 sm:px-6 lg:px-8">
            <div
              className={cn(
                "flex items-center justify-between gap-4 transition-all duration-300",
                scrolled ? "h-16" : "h-[4.5rem]"
              )}
            >
              {/* Logo */}
              <Link href="/" className="group flex shrink-0 items-center gap-3">
                <span
                  className={cn(
                    "flex items-center justify-center rounded-xl bg-navy-950 text-white transition-all duration-300",
                    scrolled ? "h-9 w-9" : "h-11 w-11"
                  )}
                >
                  <Icon.GraduationCap className={cn("transition-all", scrolled ? "h-4.5 w-4.5" : "h-5.5 w-5.5")} />
                </span>
                <span className="flex flex-col leading-none">
                  <span
                    className={cn(
                      "font-serif font-semibold tracking-tight text-navy-950 transition-all duration-300",
                      scrolled ? "text-[16px]" : "text-[18px]"
                    )}
                  >
                    {brand.name}
                  </span>
                  <span className="mt-1 text-[9px] font-bold uppercase tracking-[0.18em] text-mint">
                    Learning Ecosystem
                  </span>
                </span>
              </Link>

              {/* Desktop nav */}
              <nav className="hidden items-center xl:flex">
                {nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "relative px-3.5 py-2 text-[13.5px] font-medium transition-colors",
                      isActive(item.href) ? "text-navy-950" : "text-slate-600 hover:text-navy-950"
                    )}
                  >
                    {t(item.label)}
                    <span
                      className={cn(
                        "absolute inset-x-3.5 -bottom-0.5 h-0.5 rounded-full bg-mint transition-transform duration-300",
                        isActive(item.href) ? "scale-x-100" : "scale-x-0"
                      )}
                    />
                  </Link>
                ))}

                {/* More */}
                <div className="relative">
                  <button
                    onClick={() => setOpenMenu(openMenu === "more" ? null : "more")}
                    className={cn(
                      "flex items-center gap-1 px-3.5 py-2 text-[13.5px] font-medium transition-colors",
                      openMenu === "more" ? "text-navy-950" : "text-slate-600 hover:text-navy-950"
                    )}
                  >
                    More
                    <Icon.ChevronDown className={cn("h-3.5 w-3.5 transition-transform", openMenu === "more" && "rotate-180")} />
                  </button>
                  {openMenu === "more" && (
                    <>
                      <div className="fixed inset-0 z-10" onClick={() => setOpenMenu(null)} />
                      <div className="animate-scale-in absolute left-1/2 top-[calc(100%+0.9rem)] z-20 w-[30rem] -translate-x-1/2 origin-top rounded-2xl border border-navy-900/10 bg-white p-2 shadow-[0_28px_70px_-24px_rgba(8,22,51,0.45)]">
                        <div className="grid grid-cols-2 gap-0.5">
                          {moreNav.map((m) => (
                            <Link
                              key={m.href + m.label}
                              href={m.href}
                              className="rounded-xl px-3.5 py-2.5 transition hover:bg-navy-50"
                            >
                              <span className="block text-sm font-semibold text-navy-950">{m.label}</span>
                              <span className="block text-[11px] text-slate-500">{m.desc}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </nav>

              {/* Right actions */}
              <div className="flex shrink-0 items-center gap-1">
                <button
                  onClick={() => setSearchOpen(true)}
                  aria-label="Search"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition hover:bg-navy-50 hover:text-navy-950"
                >
                  <Icon.Search className="h-[18px] w-[18px]" />
                </button>

                {/* Portals */}
                <div className="relative hidden sm:block">
                  <button
                    onClick={() => setOpenMenu(openMenu === "portals" ? null : "portals")}
                    className={cn(
                      "flex items-center gap-1.5 rounded-lg px-3 py-2 text-[13.5px] font-medium transition",
                      openMenu === "portals" ? "bg-navy-50 text-navy-950" : "text-slate-600 hover:bg-navy-50 hover:text-navy-950"
                    )}
                  >
                    {t("Portals")}
                    <Icon.ChevronDown className={cn("h-3.5 w-3.5 transition-transform", openMenu === "portals" && "rotate-180")} />
                  </button>
                  {openMenu === "portals" && (
                    <>
                      <div className="fixed inset-0 z-10" onClick={() => setOpenMenu(null)} />
                      <div className="animate-scale-in absolute right-0 top-[calc(100%+0.9rem)] z-20 w-72 origin-top-right rounded-2xl border border-navy-900/10 bg-white p-2 shadow-[0_28px_70px_-24px_rgba(8,22,51,0.45)]">
                        {portalLinks.map((p) => {
                          const Cmp = Icon[p.icon];
                          return (
                            <Link
                              key={p.href}
                              href={p.href}
                              className="flex items-start gap-3 rounded-xl px-3 py-2.5 transition hover:bg-navy-50"
                            >
                              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-mint-soft text-mint">
                                <Cmp className="h-4 w-4" />
                              </span>
                              <span>
                                <span className="block text-sm font-semibold text-navy-950">{t(p.label)}</span>
                                <span className="block text-[11px] text-slate-500">{p.desc}</span>
                              </span>
                            </Link>
                          );
                        })}
                        <Link
                          href="/portal/overview"
                          className="mt-1 flex items-center justify-center gap-1.5 rounded-xl bg-navy-50 py-2.5 text-xs font-semibold text-navy-900 transition hover:bg-navy-100"
                        >
                          View all portals <Icon.ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </>
                  )}
                </div>

                <Link
                  href="/contact"
                  className="ml-1 hidden items-center gap-2 rounded-lg bg-navy-950 px-4 py-2.5 text-[13.5px] font-semibold text-white transition hover:bg-navy-800 lg:inline-flex"
                >
                  Book a Demo
                </Link>
                <Link
                  href="/admissions/apply"
                  className="group ml-1 hidden items-center gap-1.5 rounded-lg border border-navy-900/15 px-4 py-2.5 text-[13.5px] font-semibold text-navy-950 transition hover:border-navy-900 hover:bg-navy-950 hover:text-white sm:inline-flex"
                >
                  {t("Apply")}
                  <Icon.ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>

                <button
                  onClick={() => setMobile(true)}
                  aria-label="Open menu"
                  className="ml-1 flex h-10 w-10 items-center justify-center rounded-lg border border-navy-900/12 text-navy-950 transition hover:bg-navy-50 xl:hidden"
                >
                  <Icon.Menu className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ── Mobile drawer ── */}
      <div
        className={cn(
          "fixed inset-0 z-[70] transition-all duration-300 xl:hidden",
          mobile ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        <div className="absolute inset-0 bg-navy-950/40 backdrop-blur-sm" onClick={() => setMobile(false)} />
        <div
          className={cn(
            "absolute right-0 top-0 flex h-full w-[88%] max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300",
            mobile ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex items-center justify-between border-b border-navy-900/10 px-5 py-4">
            <span className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-navy-950 text-white">
                <Icon.GraduationCap className="h-4.5 w-4.5" />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-serif text-base font-semibold text-navy-950">{brand.name}</span>
                <span className="mt-0.5 text-[8px] font-bold uppercase tracking-[0.18em] text-mint">
                  Learning Ecosystem
                </span>
              </span>
            </span>
            <button onClick={() => setMobile(false)} className="flex h-9 w-9 items-center justify-center rounded-lg hover:bg-navy-50">
              <Icon.X className="h-5 w-5" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto p-4">
            <p className="px-3 pb-1 text-[10px] font-bold uppercase tracking-widest text-slate-400">Menu</p>
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center justify-between rounded-xl px-3 py-3 text-[15px] font-medium transition",
                  isActive(item.href) ? "bg-navy-50 text-navy-950" : "text-slate-700 hover:bg-navy-50"
                )}
              >
                {t(item.label)}
                <Icon.ChevronRight className="h-4 w-4 text-slate-400" />
              </Link>
            ))}

            <p className="mt-4 px-3 pb-1 text-[10px] font-bold uppercase tracking-widest text-slate-400">More</p>
            <div className="grid grid-cols-2 gap-1">
              {moreNav.map((m) => (
                <Link
                  key={m.href + m.label}
                  href={m.href}
                  className="rounded-xl px-3 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-navy-50 hover:text-navy-950"
                >
                  {m.label}
                </Link>
              ))}
            </div>

            <p className="mt-4 px-3 pb-1 text-[10px] font-bold uppercase tracking-widest text-slate-400">Portals</p>
            <div className="grid grid-cols-2 gap-2">
              {portalLinks.slice(0, 4).map((p) => {
                const Cmp = Icon[p.icon];
                return (
                  <Link
                    key={p.href}
                    href={p.href}
                    className="flex items-center gap-2 rounded-xl border border-navy-900/10 px-3 py-2.5 text-[13px] font-medium text-slate-700 transition hover:border-navy-900/25 hover:bg-navy-50"
                  >
                    <Cmp className="h-4 w-4 shrink-0 text-mint" />
                    <span className="truncate">{p.label.replace(" Portal", "").replace(" Dashboard", "")}</span>
                  </Link>
                );
              })}
            </div>
          </nav>

          <div className="space-y-2 border-t border-navy-900/10 p-4">
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 rounded-xl bg-navy-950 px-5 py-3 text-sm font-semibold text-white"
            >
              Book a Free Demo <Icon.ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/admissions/apply"
              className="flex items-center justify-center gap-2 rounded-xl border border-navy-900/15 px-5 py-3 text-sm font-semibold text-navy-950"
            >
              {t("Apply for Admission")}
            </Link>
            <div className="flex items-center justify-between gap-2 pt-1">
              <a href={contact.phoneHref} className="flex items-center gap-2 text-sm font-semibold text-mint">
                <Icon.Phone className="h-4 w-4" /> {contact.phone}
              </a>
              <LanguageSwitcher />
            </div>
            <p className="pt-1 text-center text-[11px] text-slate-400">
              USA {contact.phoneUsa} · Powered by WordbitX
            </p>
          </div>
        </div>
      </div>

      <SearchPalette open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
