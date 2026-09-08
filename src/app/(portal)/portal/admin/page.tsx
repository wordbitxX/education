"use client";

import { useState } from "react";
import PortalShell from "@/components/portal/PortalShell";
import AdmissionsCrm from "@/components/portal/admin/AdmissionsCrm";
import Finance from "@/components/portal/admin/Finance";
import People from "@/components/portal/admin/People";
import Ops from "@/components/portal/admin/Ops";
import System from "@/components/portal/admin/System";
import { Panel, KPI, Tag, Table } from "@/components/portal/blocks";
import { BarChart, LineChart } from "@/components/portal/charts";
import { toast } from "@/components/portal/Toast";
import { useI18n } from "@/lib/i18n";
import { Donut, Button, Progress, Counter } from "@/components/ui";
import { Icon } from "@/components/icons";
import { teachers, classAttendance, exams, academicCalendar, examTypes, feeTrend, events } from "@/lib/data";
import { cn, formatCurrency } from "@/lib/utils";

const campuses = ["All Campuses", "Lahore Campus", "Islamabad Campus", "Karachi Campus"] as const;
const scale: Record<string, number> = {
  "All Campuses": 1,
  "Lahore Campus": 0.58,
  "Islamabad Campus": 0.26,
  "Karachi Campus": 0.16,
};

const enrollment = [
  { month: "Sep", value: 1080 },
  { month: "Oct", value: 1122 },
  { month: "Nov", value: 1150 },
  { month: "Dec", value: 1168 },
  { month: "Jan", value: 1199 },
  { month: "Feb", value: 1231 },
  { month: "Mar", value: 1250 },
];

export default function AdminPortal() {
  const { t } = useI18n();
  const [campus, setCampus] = useState<(typeof campuses)[number]>("All Campuses");
  const [conflictChecked, setConflictChecked] = useState(false);

  const f = scale[campus];
  const totalStudents = Math.round(1250 * f);
  const totalTeachers = Math.round(85 * f);
  const feesCollected = Math.round(3245000 * f);

  return (
    <PortalShell portal="admin" user="Alex Morgan" role="Administrator">
      {/* Header with campus switcher */}
      <div className="mb-6 rounded-2xl bg-navy-950 p-6 text-white">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm text-teal-300">{t("School management")} · ERP</p>
            <h1 className="font-serif text-2xl font-semibold">{t("Administration overview")}</h1>
            <p className="text-sm text-slate-300">Tuesday, 10 March 2026 · Academic session 2025–26 · Term 2</p>
          </div>
          <div>
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-slate-400">
              {campus === "All Campuses" ? "Head Office View" : "Campus View · data isolated"}
            </p>
            <div className="no-scrollbar flex gap-1.5 overflow-x-auto">
              {campuses.map((c) => (
                <button
                  key={c}
                  onClick={() => setCampus(c)}
                  className={cn(
                    "whitespace-nowrap rounded-full border px-3.5 py-1.5 text-xs font-medium transition",
                    campus === c ? "border-teal-300 bg-teal-500/20 text-white" : "border-white/20 text-slate-300 hover:border-white/50"
                  )}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* KPI cards */}
      <div id="overview">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          <KPI icon="Users" label={t("Total students")} value={<Counter value={totalStudents} />} tone="#0f766e" sub={campus} />
          <KPI icon="BookOpen" label={t("Teachers")} value={totalTeachers} tone="#2b527a" sub="3 campuses" />
          <KPI icon="CheckCircle" label={t("Today's attendance")} value={`${Math.round(94.6 * (campus === "Lahore Campus" ? 1.01 : 1))}%`} tone="#16304c" sub="2 alerts" />
          <KPI icon="Wallet" label={t("Fees collected")} value={formatCurrency(feesCollected)} tone="#0f766e" sub="Term 2" />
          <KPI icon="Alert" label={t("Pending fees")} value={formatCurrency(Math.round(486000 * f))} tone="#e11d48" sub="4 defaulters" />
          <KPI icon="GraduationCap" label={t("New admissions")} value={Math.round(23 * f) || (campus === "All Campuses" ? 23 : 4)} tone="#b8863b" sub="pipeline" />
          <KPI icon="Trophy" label={t("Upcoming exams")} value={exams.length} tone="#2b527a" sub="March" />
          <KPI icon="Calendar" label={t("Upcoming events")} value={events.slice(0, 4).length} tone="#16304c" sub="this month" />
        </div>

        {/* Charts */}
        <div className="mt-6 grid gap-5 lg:grid-cols-3">
          <Panel title="Student Enrollment" className="lg:col-span-1">
            <LineChart data={enrollment.map((e) => e.value)} labels={enrollment.map((e) => e.month)} height={150} tone="#0f766e" />
            <p className="mt-2 text-xs text-slate-400">+170 students since September (demo trend)</p>
          </Panel>
          <Panel title={t("Fee collection trend") + " (%)"} className="lg:col-span-1">
            <BarChart data={feeTrend.map((x) => x.value)} labels={feeTrend.map((x) => x.month)} tone="#2b527a" className="h-44" />
          </Panel>
          <Panel title={t("Attendance today")} className="lg:col-span-1">
            <div className="flex items-center gap-5">
              <Donut value={94.6} size={110} label="overall" />
              <div className="flex-1 space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-slate-500">Present</span><span className="font-medium text-mint">{Math.round(totalStudents * 0.946)}</span></div>
                <div className="flex justify-between"><span className="text-slate-500">Late</span><span className="font-medium text-gold">{Math.round(totalStudents * 0.028)}</span></div>
                <div className="flex justify-between"><span className="text-slate-500">Absent</span><span className="font-medium text-red-500">{Math.round(totalStudents * 0.026)}</span></div>
              </div>
            </div>
          </Panel>
        </div>

        {/* Academic performance */}
        <div className="mt-6">
          <Panel title="Academic Performance · average % by subject (Term 2)">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { s: "Mathematics", v: 86 },
                { s: "English", v: 89 },
                { s: "Computer Science", v: 93 },
                { s: "Chemistry", v: 75, down: true },
              ].map((x) => (
                <div key={x.s} className="rounded-xl border border-navy-900/8 p-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-navy-950">{x.s}</span>
                    {x.down ? <Tag tone="red">−4%</Tag> : <Tag tone="mint">stable</Tag>}
                  </div>
                  <div className="mt-2 flex items-center gap-2">
                    <Progress value={x.v} className="flex-1" tone={x.down ? "gold" : "mint"} />
                    <span className="text-sm font-semibold text-navy-950">{x.v}%</span>
                  </div>
                </div>
              ))}
            </div>
          </Panel>
        </div>
      </div>

      {/* Admissions CRM */}
      <div className="mt-6">
        <AdmissionsCrm />
      </div>

      {/* People: students, guardians, HR */}
      <div className="mt-6">
        <People />
      </div>

      {/* Teachers quick list */}
      <div className="mt-6" id="teachers">
        <Panel title={t("Teacher management")}>
          <Table
            head={["Teacher", "Subject", "Department", "Classes", "Phone", "Leave"]}
            rows={teachers.slice(0, 5).map((tc) => [
              <span key="n" className="font-medium text-navy-950">{tc.name}</span>,
              <span key="s" className="text-slate-600">{tc.subject}</span>,
              <span key="r" className="text-slate-500">{tc.role}</span>,
              <span key="c" className="text-slate-600">{Math.max(2, Math.round(tc.years / 3))}</span>,
              <span key="p" className="text-xs text-slate-500">+92 3xx xxx {tc.id === "t1" ? "0001" : tc.id === "t2" ? "0002" : "0003"}</span>,
              <Tag key="l" tone="mint">0 days</Tag>,
            ])}
          />
        </Panel>
      </div>

      {/* Finance */}
      <div className="mt-6">
        <Finance />
      </div>

      {/* Attendance analytics */}
      <div className="mt-6" id="attendance">
        <Panel title={t("Attendance analytics")} action={<Tag tone="gold">Low attendance alert: Grade 9-B</Tag>}>
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-3">
            {classAttendance.map((c) => (
              <div key={c.className} className="rounded-xl border border-navy-900/8 p-3">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-navy-950">{c.className}</p>
                  <span className={cn("text-sm font-semibold", c.percent < 94 ? "text-red-500" : "text-mint")}>{c.percent}%</span>
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <Progress value={c.percent} className="flex-1" tone={c.percent < 94 ? "gold" : "mint"} />
                  <span className="text-xs text-slate-400">{c.present}/{c.total}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-start gap-3 rounded-xl bg-red-50 p-4">
            <Icon.Alert className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
            <div className="text-sm">
              <p className="font-medium text-red-700">Low attendance alert · Grade 9-B (92%)</p>
              <p className="text-red-600">
                4 students below 90% this month. Parents can be notified automatically.
              </p>
              <Button size="sm" variant="outline" className="mt-2" onClick={() => toast("Absence alerts sent to 4 parents via Push/WhatsApp (integration-ready)")}>
                Notify parents
              </Button>
            </div>
          </div>
        </Panel>
      </div>

      {/* Exams */}
      <div className="mt-6 grid gap-5 lg:grid-cols-2" id="exams">
        <Panel title="Examinations · Date Sheet">
          <Table
            head={["Exam", "Subject", "Date", "Type", "Weight"]}
            rows={exams.map((e) => [
              <span key="t" className="font-medium text-navy-950">{e.title}</span>,
              <span key="s" className="text-slate-600">{e.subject}</span>,
              <span key="d" className="text-slate-500">{e.date}</span>,
              <Tag key="c" tone="navy">{e.category}</Tag>,
              <span key="w" className="text-slate-600">{e.weight}</span>,
            ])}
          />
        </Panel>
        <Panel title="Exam types & Academic calendar">
          <div className="grid gap-3 sm:grid-cols-2">
            {examTypes.map((et) => (
              <div key={et.name} className="rounded-xl border border-navy-900/8 p-3">
                <p className="text-sm font-semibold text-navy-950">{et.name}</p>
                <p className="text-xs text-slate-500">{et.freq} · weight {et.weight}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 max-h-52 space-y-1.5 overflow-y-auto">
            {academicCalendar.map((c) => (
              <div key={c.label} className="flex items-center justify-between rounded-lg bg-ivory px-3 py-2 text-sm">
                <span className="font-medium text-navy-950">{c.label}</span>
                <span className="text-xs text-slate-500">{c.date}</span>
              </div>
            ))}
          </div>
        </Panel>
      </div>

      {/* Timetable & conflicts */}
      <div className="mt-6" id="timetable">
        <Panel
          title="Timetable Management"
          action={
            <Button size="sm" variant="outline" onClick={() => { setConflictChecked(true); toast("Conflict check complete — 0 teacher, room or class conflicts found"); }}>
              <Icon.Search className="h-4 w-4" /> Run conflict check
            </Button>
          }
        >
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { l: "Classes scheduled", v: "42", i: "Layers" as const },
              { l: "Subject slots / week", v: "312", i: "BookOpen" as const },
              { l: "Rooms allocated", v: "38", i: "Building" as const },
              { l: "Teacher assignments", v: "126", i: "Users" as const },
            ].map((x) => {
              const Cmp = Icon[x.i];
              return (
                <div key={x.l} className="flex items-center gap-3 rounded-xl border border-navy-900/8 bg-ivory p-4">
                  <Cmp className="h-5 w-5 text-mint" />
                  <div><p className="text-lg font-semibold text-navy-950">{x.v}</p><p className="text-xs text-slate-500">{x.l}</p></div>
                </div>
              );
            })}
          </div>
          {conflictChecked && (
            <div className="animate-fade-up mt-4 flex items-center gap-3 rounded-xl bg-mint-soft p-4 text-sm text-mint">
              <Icon.CheckCircle className="h-5 w-5 shrink-0" />
              No teacher, room or class conflicts detected across the weekly timetable.
            </div>
          )}
        </Panel>
      </div>

      {/* Ops: transport, library, store */}
      <div className="mt-6">
        <Ops />
      </div>

      {/* System: announcements, AI, online classes, reports, settings */}
      <div className="mt-6">
        <System />
      </div>
    </PortalShell>
  );
}
