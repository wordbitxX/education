"use client";

import Link from "next/link";
import { useState } from "react";
import { brand, contact } from "@/lib/data";
import { img } from "@/lib/images";
import { useI18n } from "@/lib/i18n";
import { segments, benefits, moduleGroups } from "@/lib/segments";
import { Icon, type IconName } from "@/components/icons";
import { Container, Section, SectionHeading, Button, Badge, Reveal, Counter } from "@/components/ui";
import { LineChart, BarChart } from "@/components/portal/charts";
import { FaqAccordion } from "@/components/home";
import { CallStrip, CallInline } from "@/components/site/CallStrip";

const roles: { icon: IconName; title: string; desc: string; href: string; color: string }[] = [
  { icon: "Layout", title: "Admin Portal", desc: "Complete institution control — users, academics, finance and reports.", href: "/portal/admin", color: "#16304c" },
  { icon: "Target", title: "Principal Portal", desc: "Institution performance, attendance, fees, academics and analytics.", href: "/portal/admin", color: "#0e2440" },
  { icon: "BookOpen", title: "Teacher Portal", desc: "Attendance, marks, homework, timetable and student performance.", href: "/portal/teacher", color: "#b8863b" },
  { icon: "Users", title: "Parent Portal", desc: "Fees, attendance, results, homework, notices and communication.", href: "/portal/parent", color: "#2b527a" },
  { icon: "User", title: "Student Portal", desc: "Classes, timetable, assignments, attendance and results.", href: "/portal/student", color: "#0f766e" },
];

const payments: { icon: IconName; name: string; note: string; ready: string }[] = [
  { icon: "Smartphone", name: "JazzCash", note: "Mobile wallet", ready: "Integration ready" },
  { icon: "Smartphone", name: "Easypaisa", note: "Mobile wallet", ready: "Integration ready" },
  { icon: "Bank", name: "Bank Transfer", note: "IBAN / online banking", ready: "Live" },
  { icon: "Coins", name: "Cash / Counter", note: "Challan-based payment", ready: "Live" },
  { icon: "Receipt", name: "Digital Fee Challans", note: "Generated & shared instantly", ready: "Live" },
  { icon: "Bell", name: "Automated Reminders", note: "Due-date nudges to parents", ready: "Live" },
  { icon: "Chat", name: "WhatsApp / SMS Alerts", note: "Fee & attendance notifications", ready: "Integration ready" },
  { icon: "CreditCard", name: "Online Payments", note: "Card / digital checkout", ready: "Integration ready" },
];

const campuses = [
  { name: "Lahore Campus", students: 1120, staff: 62 },
  { name: "Islamabad Campus", students: 640, staff: 38 },
  { name: "Faisalabad Campus", students: 480, staff: 28 },
  { name: "Multan Campus", students: 340, staff: 21 },
  { name: "Karachi Campus", students: 266, staff: 15 },
];

const faqs = [
  { q: "What is a school management system in Pakistan?", a: "It is a digital platform that runs a school's daily operations — admissions, student records, attendance, exams, report cards, PKR fees and parent communication — in one connected system, replacing registers and spreadsheets. WordbitX builds these systems for institutions across Pakistan." },
  { q: "How does school ERP software help educational institutions?", a: "School ERP software removes duplicate data entry, gives every department the same accurate data, automates fee challans and reports, and frees staff from manual work so they can focus on teaching and students." },
  { q: "Can the system manage school fees and challans?", a: "Yes — fee structures, digital challans, invoices, receipts, discounts, fines and defaulter tracking, all in PKR, with automated reminders and JazzCash, Easypaisa and bank payment options." },
  { q: "Can schools manage multiple campuses?", a: "Yes. Each campus keeps isolated data while the head office sees consolidated students, staff, fees, attendance and results across all branches — ideal for multi-campus education groups." },
  { q: "Does the platform support parents and teachers?", a: "Yes. Parents get a mobile-first portal for fees, attendance, results and messages. Teachers get attendance marking, marks entry, homework and timetable tools." },
  { q: "Can academies use an education management system?", a: "Absolutely — academies and coaching centers use batch-based enrolment, entry tests, monthly PKR fee cycles and fast result publishing, all natively supported." },
  { q: "Can colleges and universities use the platform?", a: "Yes — programs, semesters, course registration, CGPA results, transcripts and department-level access are supported for higher education institutions." },
  { q: "Who develops this education management platform?", a: "WordbitX Software Company — an education software development company building school management software, school ERP, LMS, mobile apps and custom education systems. Visit wordbitxtech.com to request a demo." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const recentAdmissions = [
  { name: "Muhammad Abdullah", program: "Grade 10 · Lahore", status: "Approved" },
  { name: "Ayesha Fatima", program: "Primary · Islamabad", status: "Interview" },
  { name: "Ali Raza", program: "O-Level · Karachi", status: "New" },
  { name: "Hamza Ahmed", program: "Grade 8 · Faisalabad", status: "Test" },
  { name: "Eman Khan", program: "A-Level · Multan", status: "Approved" },
];

export default function HomePage() {
  const { t } = useI18n();
  const [tab, setTab] = useState("academic");
  const activeGroup = moduleGroups.find((g) => g.id === tab)!;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ==================== HERO ==================== */}
      <header className="relative overflow-hidden bg-navy-950 pb-20 pt-36 text-white sm:pb-24 sm:pt-40">
        <div className="hero-grid-dark absolute inset-0 opacity-50" aria-hidden />
        <div className="absolute -left-40 -top-10 h-[30rem] w-[30rem] rounded-full blur-3xl" style={{ background: "rgba(15,118,110,0.22)" }} aria-hidden />
        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full blur-3xl" style={{ background: "rgba(43,82,122,0.35)" }} aria-hidden />

        <Container className="relative grid items-center gap-14 lg:grid-cols-12">
          {/* Copy — tight & premium */}
          <div className="lg:col-span-5">
            <div className="animate-fade-up">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-teal-300">
                <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-teal-300" />
                WordbitX · Education ERP
              </span>

              <h1 className="mt-6 font-serif text-[clamp(2.4rem,4.4vw,3.75rem)] font-semibold leading-[1.05] tracking-tight">
                Complete Education
                <br />
                Management Platform
                <br />
                <span className="text-teal-300">for Pakistan</span>
              </h1>

              <p className="mt-5 max-w-md text-base leading-relaxed text-slate-300">
                Admissions, fees, attendance, exams and parents — one platform for schools,
                academies, colleges and universities.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Button href="/contact" size="lg" icon>{t("Request a Free Demo")}</Button>
                <Button href="#modules" size="lg" variant="outline-light">
                  {t("Explore Platform")}
                </Button>
              </div>

              <CallInline tone="dark" className="mt-6" />

              <div className="mt-6 flex flex-wrap gap-1.5">
                {segments.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/solutions/${s.slug}`}
                    className="rounded-full border border-white/12 px-3 py-1 text-[11px] font-medium text-slate-400 transition hover:border-teal-300/60 hover:text-teal-200"
                  >
                    {s.title.split(" &")[0]}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Visual — real photo + floating dashboard */}
          <div className="lg:col-span-7">
            <div className="animate-scale-in relative">
              <div className="overflow-hidden rounded-[1.75rem] border border-white/10 shadow-[0_50px_110px_-45px_rgba(0,0,0,0.9)]">
                <img
                  src={img("classroom", 1200, 860)}
                  alt="Students and teacher in a modern Pakistani school classroom using the WordbitX education management platform"
                  className="aspect-[7/5] w-full object-cover"
                  loading="eager"
                  fetchPriority="high"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-navy-950/75 via-navy-950/15 to-transparent" />
              </div>

              {/* Floating: KPI panel */}
              <div className="absolute -bottom-8 left-3 w-[16.5rem] rounded-2xl border border-white/10 bg-navy-950/85 p-4 shadow-[0_30px_70px_-25px_rgba(0,0,0,0.9)] backdrop-blur-xl sm:left-6">
                <div className="flex items-center justify-between">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-slate-400">Live overview</p>
                  <span className="flex items-center gap-1 text-[9px] font-medium text-teal-300">
                    <span className="h-1 w-1 animate-pulse-dot rounded-full bg-teal-300" /> 5 campuses
                  </span>
                </div>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  {[
                    { l: "Students", v: "2,846" },
                    { l: "Attendance", v: "94.8%" },
                    { l: "Collected", v: "Rs 18.6M" },
                    { l: "Teachers", v: "164" },
                  ].map((k) => (
                    <div key={k.l} className="rounded-lg bg-white/[0.07] px-2.5 py-2">
                      <p className="text-sm font-semibold">{k.v}</p>
                      <p className="text-[9px] text-slate-400">{k.l}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating: fee paid */}
              <div className="animate-float absolute -right-2 top-8 flex items-center gap-2.5 rounded-2xl bg-white p-3 text-navy-950 shadow-[0_24px_55px_-18px_rgba(0,0,0,0.7)] sm:right-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-mint-soft text-mint">
                  <Icon.Receipt className="h-4.5 w-4.5" />
                </span>
                <div>
                  <p className="text-xs font-bold leading-tight">Rs 18,500 paid</p>
                  <p className="text-[10px] text-slate-500">Ayesha Fatima · Easypaisa</p>
                </div>
              </div>

              {/* Floating: alert */}
              <div className="animate-float absolute -right-1 bottom-16 flex items-center gap-2.5 rounded-2xl bg-white p-3 text-navy-950 shadow-[0_24px_55px_-18px_rgba(0,0,0,0.7)]" style={{ animationDelay: "1.4s" }}>
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-red-50 text-red-500">
                  <Icon.Bell className="h-4.5 w-4.5" />
                </span>
                <div>
                  <p className="text-xs font-bold leading-tight">Absence alert sent</p>
                  <p className="text-[10px] text-slate-500">WhatsApp · 4 parents</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </header>

      {/* ==================== TRUST STRIP ==================== */}
      <Section className="border-b border-navy-900/8 bg-white py-10 sm:py-12">
        <Container>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="grid grid-cols-3 gap-6 sm:flex sm:gap-12">
              {[
                { v: 2846, s: "", l: "Students" },
                { v: 164, s: "", l: "Teachers" },
                { v: 94.8, s: "%", l: "Attendance", d: 1 },
                { v: 86, s: "", l: "Classes" },
                { v: 5, s: "", l: "Branches" },
              ].map((x) => (
                <div key={x.l}>
                  <p className="font-serif text-3xl font-semibold text-navy-950 sm:text-4xl">
                    <Counter value={x.v} suffix={x.s} decimals={x.d ?? 0} />
                  </p>
                  <p className="mt-0.5 text-xs text-slate-500 sm:text-sm">{x.l}</p>
                </div>
              ))}
            </div>
            <Badge tone="gold" className="w-fit">Configurable demo values</Badge>
          </div>
        </Container>
      </Section>

      {/* ==================== AUDIENCES (clickable) ==================== */}
      <Section className="bg-ivory">
        <Container>
          <SectionHeading
            eyebrow="Target audience"
            title="Built for Every Type of Educational Institution"
            description="From a 40-student tuition center to a multi-campus education group — explore how the platform fits your institution."
            align="center"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {segments.map((s, i) => {
              const Cmp = Icon[s.icon];
              return (
                <Reveal key={s.slug} delay={(i % 3) * 80}>
                  <Link
                    href={`/solutions/${s.slug}`}
                    className="group flex h-full flex-col rounded-2xl border border-navy-900/8 bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-navy-900/25 hover:shadow-[0_30px_65px_-30px_rgba(8,22,51,0.45)]"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-white transition-colors duration-300 group-hover:bg-mint">
                      <Cmp className="h-6 w-6" />
                    </span>
                    <h3 className="mt-4 font-serif text-xl font-semibold text-navy-950">{s.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{s.cardText}</p>
                    <span className="mt-5 flex items-center gap-1.5 text-sm font-medium text-mint">
                      Explore solution
                      <Icon.ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* ==================== MODULES (real icons) ==================== */}
      <Section id="modules" className="bg-navy-950 text-white">
        <Container>
          <SectionHeading
            eyebrow="Education ERP modules"
            title="Everything Your Institution Needs"
            description="Thirty-seven modules across five areas — enable what you need today, switch on more as you grow."
            tone="light"
            align="center"
          />
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {moduleGroups.map((g) => {
              const Cmp = Icon[g.icon];
              return (
                <button
                  key={g.id}
                  onClick={() => setTab(g.id)}
                  className={
                    "flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300 " +
                    (tab === g.id
                      ? "border-teal-300 bg-teal-500/15 text-white"
                      : "border-white/15 text-slate-400 hover:border-white/40 hover:text-white")
                  }
                >
                  <Cmp className="h-4 w-4" /> {g.label}
                </button>
              );
            })}
          </div>
          <div key={activeGroup.id} className="animate-fade-up mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {activeGroup.items.map((m) => {
              const MIcon = Icon[m.icon];
              return (
                <div
                  key={m.label}
                  className="group flex items-center gap-3.5 rounded-xl border border-white/10 bg-white/[0.04] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-teal-300/40 hover:bg-white/[0.08]"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-500/12 text-teal-300 transition-colors duration-300 group-hover:bg-teal-500/25">
                    <MIcon className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-medium">{m.label}</span>
                </div>
              );
            })}
          </div>
          <p className="mt-7 text-center text-xs text-slate-500">
            {activeGroup.label} · {activeGroup.items.length} modules
          </p>
        </Container>
      </Section>

      {/* ==================== DASHBOARD DEMO ==================== */}
      <Section>
        <Container>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Live demo"
              title="An Enterprise Dashboard, Not a Spreadsheet"
              description="Real, working demo data running on the platform — open it and click around."
            />
            <Button href="/portal/admin" icon>Open full dashboard</Button>
          </div>

          <div className="mt-10 overflow-hidden rounded-3xl border border-navy-900/10 bg-white shadow-[0_40px_90px_-40px_rgba(8,22,51,0.35)]">
            <div className="flex items-center justify-between border-b border-navy-900/8 bg-ivory px-5 py-3">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-gold" />
                <span className="h-3 w-3 rounded-full bg-mint" />
              </div>
              <p className="font-mono text-xs text-slate-400">admin · WordbitX Education Platform</p>
              <span className="flex items-center gap-1.5 text-[11px] font-medium text-mint">
                <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-mint" /> Live
              </span>
            </div>

            <div className="grid gap-6 p-6 lg:grid-cols-3">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:col-span-2">
                {[
                  { l: "Students", v: "2,846", c: "#0f766e", i: "Users" as IconName },
                  { l: "Teachers", v: "164", c: "#2b527a", i: "BookOpen" as IconName },
                  { l: "Attendance", v: "94.8%", c: "#16304c", i: "Clipboard" as IconName },
                  { l: "Fee Collected", v: "Rs 18.6M", c: "#0f766e", i: "Coins" as IconName },
                  { l: "Outstanding", v: "Rs 3.2M", c: "#e11d48", i: "Alert" as IconName },
                  { l: "Active Classes", v: "86", c: "#b8863b", i: "Grid" as IconName },
                ].map((k) => {
                  const KIcon = Icon[k.i];
                  return (
                    <div key={k.l} className="rounded-2xl border border-navy-900/8 p-4">
                      <KIcon className="h-4 w-4" style={{ color: k.c }} />
                      <p className="mt-2 text-xl font-semibold tracking-tight" style={{ color: k.c }}>{k.v}</p>
                      <p className="text-xs text-slate-500">{k.l}</p>
                    </div>
                  );
                })}
              </div>
              <div className="rounded-2xl border border-navy-900/8 p-4">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">Fee collection (Rs M)</p>
                <BarChart data={[12.2, 14.1, 11.8, 15.6, 16.9, 18.6]} labels={["Oct", "Nov", "Dec", "Jan", "Feb", "Mar"]} tone="#0f766e" className="h-36" />
              </div>
              <div className="rounded-2xl border border-navy-900/8 p-4 lg:col-span-2">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">Recent admissions</p>
                <div className="space-y-2">
                  {recentAdmissions.map((a) => (
                    <div key={a.name} className="flex items-center justify-between rounded-lg bg-ivory px-3.5 py-2.5">
                      <div>
                        <p className="text-sm font-medium text-navy-950">{a.name}</p>
                        <p className="text-[11px] text-slate-500">{a.program}</p>
                      </div>
                      <Badge tone={a.status === "Approved" ? "mint" : a.status === "New" ? "neutral" : "gold"}>{a.status}</Badge>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl border border-navy-900/8 p-4">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">Upcoming exams</p>
                <div className="space-y-2">
                  {[
                    { s: "Mid Term · Grade 10", d: "18 Mar" },
                    { s: "Monthly Test · Grade 9", d: "15 Mar" },
                    { s: "O-Level Mock", d: "24 Mar" },
                  ].map((e) => (
                    <div key={e.s} className="flex items-center justify-between rounded-lg bg-ivory px-3.5 py-2.5">
                      <p className="text-sm font-medium text-navy-950">{e.s}</p>
                      <span className="text-xs text-slate-500">{e.d}</span>
                    </div>
                  ))}
                </div>
                <p className="mb-2 mt-4 text-xs font-semibold uppercase tracking-wide text-slate-400">Notifications</p>
                <div className="space-y-1.5 text-xs text-slate-600">
                  <p className="flex items-center gap-2"><Icon.Alert className="h-3.5 w-3.5 text-red-400" /> 12 fee reminders pending</p>
                  <p className="flex items-center gap-2"><Icon.CheckCircle className="h-3.5 w-3.5 text-mint" /> March payroll approved</p>
                  <p className="flex items-center gap-2"><Icon.Users className="h-3.5 w-3.5 text-navy-500" /> 23 admissions in pipeline</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ==================== ROLES ==================== */}
      <Section className="bg-white">
        <Container>
          <SectionHeading
            eyebrow="Role-based portals"
            title="One Platform. Every Role."
            description="Each user gets the right workspace — no clutter, no missing information."
            align="center"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {roles.map((r, i) => {
              const Cmp = Icon[r.icon];
              return (
                <Reveal key={r.title} delay={i * 60}>
                  <Link
                    href={r.href}
                    className="group flex h-full flex-col rounded-2xl border border-navy-900/8 bg-ivory p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-navy-900/20 hover:bg-white hover:shadow-xl"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl text-white" style={{ backgroundColor: r.color }}>
                      <Cmp className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 font-semibold text-navy-950">{r.title}</h3>
                    <p className="mt-1.5 flex-1 text-sm leading-relaxed text-slate-600">{r.desc}</p>
                    <span className="mt-4 flex items-center gap-1.5 text-sm font-medium text-mint">
                      Open <Icon.ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* ==================== FEES ==================== */}
      <Section className="bg-ivory">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeading
                eyebrow="Finance"
                title="Fee Collection Made Simple"
                description="From challan to confirmation — school fee management in Pakistani Rupees, with the payment options your parents already use."
              />
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {payments.map((p) => {
                  const PIcon = Icon[p.icon];
                  return (
                    <div key={p.name} className="flex items-center gap-3 rounded-xl border border-navy-900/8 bg-white p-4">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-navy-50 text-navy-700">
                        <PIcon className="h-4.5 w-4.5" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-semibold text-navy-950">{p.name}</p>
                        <p className="truncate text-[11px] text-slate-500">{p.note}</p>
                      </div>
                      <Badge tone={p.ready === "Live" ? "mint" : "gold"}>{p.ready === "Live" ? "Live" : "Ready"}</Badge>
                    </div>
                  );
                })}
              </div>
              <Button href="/platform/track-fees-easily" variant="ghost" icon className="mt-6 pl-0">
                How fee tracking works
              </Button>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-3xl border-2 border-navy-900/90 bg-white">
                <div className="flex items-center justify-between bg-navy-950 px-5 py-4 text-white">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10"><Icon.GraduationCap className="h-4.5 w-4.5" /></span>
                    <div>
                      <p className="text-sm font-semibold">{brand.name}</p>
                      <p className="text-[10px] uppercase tracking-widest text-slate-400">Fee Challan</p>
                    </div>
                  </div>
                  <p className="font-mono text-xs text-slate-300">CH-2026-0481</p>
                </div>
                <div className="space-y-2.5 px-5 py-5 text-sm">
                  <div className="flex justify-between"><span className="text-slate-500">Student</span><span className="font-medium text-navy-950">Muhammad Abdullah · Grade 9</span></div>
                  <div className="flex justify-between"><span className="text-slate-500">Monthly Tuition</span><span className="font-medium text-navy-950">Rs 18,500</span></div>
                  <div className="flex justify-between"><span className="text-slate-500">Transport Fee</span><span className="font-medium text-navy-950">Rs 6,500</span></div>
                  <div className="flex justify-between"><span className="text-slate-500">Scholarship</span><span className="font-medium text-mint">− Rs 3,000</span></div>
                  <div className="flex justify-between border-t-2 border-navy-900/80 pt-2.5"><span className="font-semibold text-navy-950">Total Due</span><span className="font-semibold text-navy-950">Rs 22,000</span></div>
                  <div className="flex justify-between"><span className="text-slate-500">Pay via</span><span className="font-medium text-navy-950">JazzCash / Easypaisa / Bank</span></div>
                </div>
                <div className="flex items-center justify-between border-t border-navy-900/10 bg-ivory px-5 py-3">
                  <p className="text-[11px] text-slate-500">Due: 15 March 2026</p>
                  <Badge tone="gold">Reminder sent via WhatsApp</Badge>
                </div>
              </div>
              <div className="animate-float absolute -bottom-5 -right-3 flex items-center gap-2.5 rounded-2xl bg-white p-3.5 shadow-[0_24px_50px_-20px_rgba(8,22,51,0.4)]">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-mint-soft text-mint"><Icon.CheckCircle className="h-4.5 w-4.5" /></span>
                <div>
                  <p className="text-xs font-semibold text-navy-950">Rs 22,000 received</p>
                  <p className="text-[11px] text-slate-500">Receipt #R-2026-1182</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ==================== MOBILE ==================== */}
      <Section className="bg-navy-950 text-white">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Mobile apps"
                title="Education Management in Your Pocket"
                tone="light"
                description="Parent, teacher, student and admin apps — the same data on the phone, where Pakistan's families actually are."
              />
              <div className="mt-8 grid grid-cols-2 gap-3">
                {([
                  { i: "Clipboard", l: "Attendance" },
                  { i: "Wallet", l: "Fees" },
                  { i: "Award", l: "Results" },
                  { i: "Notebook", l: "Homework" },
                  { i: "Bell", l: "Notifications" },
                  { i: "Calendar", l: "Timetable" },
                  { i: "Megaphone", l: "Announcements" },
                  { i: "Video", l: "Online Classes" },
                ] as { i: IconName; l: string }[]).map((f) => {
                  const FIcon = Icon[f.i];
                  return (
                    <span key={f.l} className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm">
                      <FIcon className="h-4 w-4 text-teal-300" /> {f.l}
                    </span>
                  );
                })}
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                <Badge tone="mint">Android Ready</Badge>
                <Badge tone="mint">iOS Ready</Badge>
                <Badge tone="outline" className="border-white/20 text-slate-300">App development by WordbitX</Badge>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
              {[
                { role: "Parent", color: "#2b527a", rows: [["Attendance", "97%"], ["Fees due", "Rs 18.5K"], ["Homework", "2 due"]] },
                { role: "Teacher", color: "#b8863b", rows: [["Mark att.", "9-A ✓"], ["Marks", "Pending"], ["Leave", "1 day"]] },
                { role: "Student", color: "#0f766e", rows: [["Today", "7 classes"], ["Quiz", "85%"], ["Result", "A+"]] },
                { role: "Admin", color: "#16304c", rows: [["Students", "2,846"], ["Fees", "Rs 18.6M"], ["Alerts", "12"]] },
              ].map((p) => (
                <div key={p.role} className="flex flex-col items-center">
                  <div className="w-full max-w-[9.5rem] rounded-[1.6rem] border-4 bg-white p-1.5 shadow-[0_30px_60px_-25px_rgba(0,0,0,0.7)]" style={{ borderColor: p.color }}>
                    <div className="overflow-hidden rounded-[1.2rem] bg-ivory">
                      <div className="flex items-center gap-1.5 px-3 py-2.5" style={{ backgroundColor: p.color }}>
                        <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
                        <span className="text-[9px] font-semibold text-white">{p.role} App</span>
                      </div>
                      <div className="space-y-1.5 p-2.5">
                        {p.rows.map(([l, v]) => (
                          <div key={l} className="flex items-center justify-between rounded-lg bg-white px-2 py-1.5 shadow-sm">
                            <span className="text-[8px] text-slate-500">{l}</span>
                            <span className="text-[8px] font-bold text-navy-950">{v}</span>
                          </div>
                        ))}
                        <div className="flex gap-1 pt-1">
                          {[0, 1, 2, 3].map((d) => (
                            <span key={d} className="h-1 flex-1 rounded-full" style={{ backgroundColor: d === 0 ? p.color : "#e5e1d8" }} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 text-xs font-medium text-slate-300">{p.role} App</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ==================== MULTI-CAMPUS ==================== */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Enterprise"
            title="Manage Multiple Campuses From One Platform"
            description="Example: a 5-campus education network — every branch isolated, the head office in full control."
            align="center"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <div className="space-y-3 lg:col-span-2">
              {campuses.map((c, i) => (
                <Reveal key={c.name} delay={i * 60}>
                  <div className="flex items-center justify-between rounded-2xl border border-navy-900/8 bg-white p-4 transition hover:border-navy-900/20 hover:shadow-md">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy-50 text-navy-700"><Icon.MapPin className="h-5 w-5" /></span>
                      <div>
                        <p className="text-sm font-semibold text-navy-950">{c.name}</p>
                        <p className="text-xs text-slate-500">{c.students.toLocaleString()} students · {c.staff} staff</p>
                      </div>
                    </div>
                    <Badge tone="mint">Active</Badge>
                  </div>
                </Reveal>
              ))}
              <Button href="/solutions/education-groups" variant="ghost" icon className="pl-0">
                Multi-campus solution details
              </Button>
            </div>
            <Reveal delay={120}>
              <div className="h-full rounded-3xl bg-navy-950 p-7 text-white">
                <p className="text-xs font-semibold uppercase tracking-widest text-teal-300">Head office sees</p>
                <div className="mt-5 space-y-3">
                  {([
                    { i: "Users", l: "Students" },
                    { i: "IdCard", l: "Staff" },
                    { i: "Coins", l: "Fees" },
                    { i: "Clipboard", l: "Attendance" },
                    { i: "Award", l: "Exams" },
                    { i: "PieChart", l: "Reports" },
                  ] as { i: IconName; l: string }[]).map((x) => {
                    const XIcon = Icon[x.i];
                    return (
                      <div key={x.l} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3">
                        <span className="flex items-center gap-2.5 text-sm font-medium"><XIcon className="h-4 w-4 text-teal-300" /> {x.l}</span>
                        <Icon.Check className="h-4 w-4 text-teal-300" />
                      </div>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* ==================== ANALYTICS ==================== */}
      <Section className="bg-white">
        <Container>
          <SectionHeading
            eyebrow="Analytics"
            title="Powerful Insights. Better Decisions."
            description="Attendance, fees, admissions and campus performance — visualized the way an institution head actually reads them."
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {[
              { t: "Student Growth", b: "+164% in 6 months", type: "line", data: [1080, 1320, 1610, 1950, 2320, 2640, 2846], labels: ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar"], tone: "#0f766e" },
              { t: "Fee Collection (Rs M)", b: "95% collection rate", type: "bar", data: [12.2, 14.1, 11.8, 15.6, 16.9, 18.6], labels: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar"], tone: "#2b527a" },
              { t: "Attendance Trends (%)", b: "94.8% today", type: "line", data: [92.1, 93.4, 93.1, 94.2, 94.6, 94.8], labels: ["W1", "W2", "W3", "W4", "W5", "W6"], tone: "#b8863b" },
              { t: "Campus Performance", b: "5 campuses", type: "bar", data: [1120, 640, 480, 340, 266], labels: ["LHR", "ISB", "FSB", "MUX", "KHI"], tone: "#16304c" },
            ].map((c) => (
              <div key={c.t} className="rounded-2xl border border-navy-900/8 bg-ivory p-6">
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-sm font-semibold text-navy-950">{c.t}</p>
                  <Badge tone="mint">{c.b}</Badge>
                </div>
                {c.type === "line" ? (
                  <LineChart data={c.data} labels={c.labels} height={170} tone={c.tone} />
                ) : (
                  <BarChart data={c.data} labels={c.labels} tone={c.tone} className="h-44" />
                )}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ==================== BENEFITS (clickable) ==================== */}
      <Section className="bg-cream">
        <Container>
          <SectionHeading
            eyebrow="Value"
            title="Why Educational Institutions Choose a Digital Platform"
            description="Click any benefit to see exactly how it works — the before, the after, and the features behind it."
            align="center"
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b, i) => {
              const Cmp = Icon[b.icon];
              return (
                <Reveal key={b.slug} delay={(i % 4) * 60}>
                  <Link
                    href={`/platform/${b.slug}`}
                    className="group flex h-full flex-col rounded-2xl border border-navy-900/8 bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-navy-900/25 hover:shadow-[0_28px_60px_-30px_rgba(8,22,51,0.4)]"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-mint-soft text-mint transition-colors duration-300 group-hover:bg-mint group-hover:text-white">
                      <Cmp className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 font-semibold text-navy-950">{b.title}</h3>
                    <p className="mt-1.5 flex-1 text-sm leading-relaxed text-slate-600">{b.cardText}</p>
                    <span className="mt-4 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-mint">
                      Learn more <Icon.ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* ==================== FAQ ==================== */}
      <Section>
        <Container size="narrow">
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            description="Answers for school, academy and college administrators considering an education management platform in Pakistan."
            align="center"
          />
          <div className="mt-10">
            <FaqAccordion items={faqs} />
          </div>
        </Container>
      </Section>

      {/* ==================== FINAL CTA ==================== */}
      <Section className="bg-navy-950 text-white">
        <Container>
          <div className="rounded-3xl bg-white/[0.06] p-10 ring-1 ring-white/10 sm:p-14">
            <div className="grid items-center gap-8 lg:grid-cols-2">
              <div>
                <h2 className="font-serif text-3xl font-semibold leading-tight sm:text-4xl">
                  Ready to Digitize Your Institution?
                </h2>
                <p className="mt-4 max-w-xl leading-relaxed text-slate-300">
                  Give your school, academy, college or university a smarter way to manage
                  academics, administration, finance and communication.
                </p>
              </div>
              <div className="flex flex-col items-start gap-3 lg:items-end">
                <div className="flex flex-wrap gap-3 lg:justify-end">
                  <Button href="/contact" size="lg" icon>{t("Request a Free Demo")}</Button>
                  <Button href={brand.partnerUrl} size="lg" variant="outline-light">
                    Talk to WordbitX
                  </Button>
                </div>
                <CallStrip tone="dark" />
              </div>
            </div>
            <p className="mt-8 border-t border-white/10 pt-6 text-xs text-slate-400">
              WordbitX Software Company · wordbitxtech.com · Concept demonstration with fictional
              demo data — no existing clients are implied.
            </p>
          </div>
        </Container>
      </Section>

      {/* ==================== LIVE DEMO STRIP ==================== */}
      <div className="border-t border-navy-900/8 bg-white">
        <Container className="flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
          <p className="text-sm text-slate-600">
            <span className="font-semibold text-navy-950">Explore the live demo:</span> running on{" "}
            <Link href="/about" className="font-medium text-mint hover:underline">{brand.name}</Link> (fictional) —
            website, admissions, portals, LMS and result portal.
          </p>
          <div className="flex flex-wrap gap-2">
            <Button href="/portal/overview" size="sm" variant="outline">Open all portals</Button>
            <Button href="/admissions" size="sm" variant="ghost">Try online admissions</Button>
          </div>
        </Container>
      </div>
    </>
  );
}
