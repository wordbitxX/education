"use client";

import PortalShell from "@/components/portal/PortalShell";
import { Panel, KPI, Tag, Table } from "@/components/portal/blocks";
import { LineChart } from "@/components/portal/charts";
import { Donut, Button, Progress, Badge } from "@/components/ui";
import { toast } from "@/components/portal/Toast";
import { useI18n } from "@/lib/i18n";
import TimetableBoard from "@/components/portal/TimetableBoard";
import { Icon } from "@/components/icons";
import { focusStudent, assignments, marks, exams, attendanceHistory, courses, resources, announcements, onlineClasses } from "@/lib/data";

export default function StudentPortal() {
  const { t } = useI18n();
  const student = focusStudent;
  const averageGrade = (marks.reduce((a, m) => a + m.total, 0) / marks.length).toFixed(1);
  const pending = assignments.filter((a) => a.status === "Pending");

  return (
    <PortalShell portal="student" user={student.name} role={`${student.grade} · ${student.section}`}>
      {/* Greeting */}
      <div className="mb-6 flex flex-col gap-4 rounded-2xl bg-navy-950 p-6 text-white sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-teal-300">{t("Welcome back")}</p>
          <h1 className="font-serif text-2xl font-semibold">{student.name}</h1>
          <p className="text-sm text-slate-300">{student.grade} · Section {student.section} · House {student.house}</p>
        </div>
        <div className="flex gap-3">
          <Button href="#attendance" variant="light" size="sm">{t("Attendance")}</Button>
          <Button href="#lms" variant="outline-light" size="sm">
            {t("Continue learning")}
          </Button>
        </div>
      </div>

      {/* KPI row */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <KPI icon="Calendar" label={t("Classes today")} value="7" tone="#0f766e" sub="08:00–15:30" />
        <KPI icon="Clipboard" label={t("Assignments due")} value={pending.length} tone="#b8863b" sub="this week" />
        <KPI icon="CheckCircle" label={t("Attendance")} value={`${student.attendance}%`} tone="#2b527a" sub="this term" />
        <KPI icon="Trophy" label={t("Overall grade")} value={averageGrade} tone="#16304c" sub="out of 100" />
      </div>

      {/* Overview: today + progress */}
      <div className="mt-6 grid gap-5 lg:grid-cols-3" id="overview">
        <Panel title={t("Today's classes")} className="lg:col-span-1">
          <div className="space-y-2.5">
            {[
              { t: "Mathematics", time: "08:00", r: "R-12" },
              { t: "Chemistry", time: "08:50", r: "Lab 2" },
              { t: "English Literature", time: "09:40", r: "R-04" },
            ].map((c) => (
              <div key={c.t} className="flex items-center justify-between rounded-xl bg-cream p-3">
                <div>
                  <p className="text-sm font-medium text-navy-950">{c.t}</p>
                  <p className="text-xs text-slate-500">{c.time} · {c.r}</p>
                </div>
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-mint text-white">
                  <Icon.ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-slate-400">{t("Weekly timetable")} ↓</p>
        </Panel>

        <Panel title={t("Academic progress")} className="lg:col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <div className="text-sm text-slate-500">Term 2 performance trend</div>
            <Tag tone="mint">+4.2% vs last term</Tag>
          </div>
          <LineChart data={[72, 78, 80, 83, 81, 86, 86]} labels={["W1", "W2", "W3", "W4", "W5", "W6", "W7"]} height={150} />
          <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { l: "Completed", v: "68%", c: "#0f766e" },
              { l: "On track", v: "82%", c: "#2b527a" },
              { l: "Streak", v: "12 days", c: "#b8863b" },
              { l: "Class rank", v: "Top 15%", c: "#16304c" },
            ].map((x) => (
              <div key={x.l} className="rounded-xl border border-navy-900/8 p-3">
                <div className="text-lg font-semibold text-navy-950">{x.v}</div>
                <div className="flex items-center gap-1.5 text-xs text-slate-500"><span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: x.c }} />{x.l}</div>
              </div>
            ))}
          </div>
        </Panel>
      </div>

      {/* Timetable */}
      <div className="mt-6" id="timetable">
        <Panel title={t("Weekly timetable")}>
          <TimetableBoard />
        </Panel>
      </div>

      {/* Assignments */}
      <div className="mt-6" id="assignments">
        <Panel
          title={t("Assignments & homework")}
          action={<Button size="sm" variant="outline" onClick={() => toast(t("All tasks") + " · 6 total")}>{t("All tasks")}</Button>}
        >
          <Table
            head={["Task", "Subject", "Due", "Status", "Grade"]}
            rows={assignments.map((a) => [
              <span key="t" className="font-medium text-navy-950">{a.title}</span>,
              <span key="s" className="text-slate-600">{a.subject}</span>,
              <span key="d" className="text-slate-500">{a.due} {a.status === "Pending" && <Tag tone="gold">due soon</Tag>}</span>,
              a.status === "Pending" ? <Tag key="st" tone="gold">Pending</Tag> : a.status === "Graded" ? <Tag key="st" tone="mint">Graded</Tag> : <Tag key="st" tone="navy">Submitted</Tag>,
              <span key="g" className="font-semibold text-navy-950">{a.grade}</span>,
            ])}
          />
        </Panel>
      </div>

      {/* Exams & results */}
      <div className="mt-6 grid gap-5 lg:grid-cols-2" id="exams">
        <Panel title={t("Upcoming exams")}>
          <div className="space-y-2.5">
            {exams.map((e) => (
              <div key={e.id} className="flex items-center justify-between rounded-xl border border-navy-900/8 p-3">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-50 text-navy-700"><Icon.Trophy className="h-5 w-5" /></span>
                  <div>
                    <p className="text-sm font-medium text-navy-950">{e.subject}</p>
                    <p className="text-xs text-slate-500">{e.title} · {e.date}</p>
                  </div>
                </div>
                <Tag tone="navy">{e.weight}</Tag>
              </div>
            ))}
          </div>
        </Panel>
        <Panel title={t("Recent results")}>
          <Table
            head={["Subject", "Test", "Exam", "Total", "Grade"]}
            rows={marks.map((m) => [
              <span key="s" className="font-medium text-navy-950">{m.subject}</span>,
              <span key="t" className="text-slate-600">{m.test}</span>,
              <span key="e" className="text-slate-600">{m.exam}</span>,
              <span key="tot" className="font-semibold text-navy-950">{m.total}</span>,
              <Tag key="g" tone="mint">{m.grade}</Tag>,
            ])}
          />
        </Panel>
      </div>

      {/* Attendance */}
      <div className="mt-6 grid gap-5 lg:grid-cols-3" id="attendance">
        <Panel title={t("Attendance")}>
          <div className="flex flex-col items-center">
            <Donut value={student.attendance} size={140} label="this term" />
            <div className="mt-4 grid w-full grid-cols-3 gap-2 text-center">
              {[
                { l: "Present", v: "52", c: "#0f766e" },
                { l: "Late", v: "3", c: "#b8863b" },
                { l: "Absent", v: "2", c: "#e11d48" },
              ].map((x) => (
                <div key={x.l} className="rounded-xl bg-cream p-2">
                  <div className="text-base font-semibold" style={{ color: x.c }}>{x.v}</div>
                  <div className="text-[10px] text-slate-500">{x.l}</div>
                </div>
              ))}
            </div>
          </div>
        </Panel>
        <Panel title={t("Last 12 records")} className="lg:col-span-2">
          <div className="mb-4 flex flex-wrap gap-2">
            {attendanceHistory.map((r) => (
              <span key={r.date} className="flex flex-col items-center gap-1">
                <span className={`flex h-9 w-9 items-center justify-center rounded-lg text-xs font-semibold ${r.status === "present" ? "bg-mint-soft text-mint" : r.status === "late" ? "bg-gold-soft text-gold" : r.status === "excused" ? "bg-navy-50 text-navy-600" : "bg-red-50 text-red-500"}`}>
                  {r.status === "present" ? "✓" : r.status === "late" ? "L" : r.status === "excused" ? "E" : "A"}
                </span>
                <span className="text-[9px] text-slate-400">{r.date.slice(8)}/{r.date.slice(5, 7)}</span>
              </span>
            ))}
          </div>
          <LineChart data={[92, 94, 90, 96, 93, 97, 95]} labels={["Mar", "Feb", "Jan", "Dec", "Nov", "Oct", "Sep"]} height={110} tone="#2b527a" />
        </Panel>
      </div>

      {/* LMS / courses */}
      <div className="mt-6" id="lms">
        <Panel title={t("My courses")} action={<Button size="sm" variant="outline" href="/portal/lms">{t("Open Learning Hub")}</Button>}>
          <div className="grid gap-4 md:grid-cols-2">
            {courses.map((c) => (
              <div key={c.id} className="rounded-xl border border-navy-900/8 p-4">
                <div className="flex items-center justify-between">
                  <Tag tone={c.progress === 100 ? "mint" : "navy"}>{c.subject}</Tag>
                  <span className="text-xs text-slate-400">{c.level}</span>
                </div>
                <p className="mt-2 font-medium text-navy-950">{c.title}</p>
                <p className="text-xs text-slate-500">{c.teacher} · {c.duration}</p>
                <div className="mt-3 flex items-center gap-2">
                  <Progress value={c.progress} className="flex-1" />
                  <span className="text-xs font-medium text-navy-950">{c.progress}%</span>
                </div>
              </div>
            ))}
          </div>
        </Panel>
      </div>

      {/* Online classes */}
      <div className="mt-6">
        <Panel title="Online Classes" action={<Tag tone="mint">Integration-ready</Tag>}>
          <div className="grid gap-3 md:grid-cols-2">
            {onlineClasses.slice(0, 2).map((c) => (
              <div key={c.join} className="flex items-center justify-between gap-3 rounded-2xl border border-navy-900/8 bg-ivory p-4">
                <div>
                  <p className="text-sm font-semibold text-navy-950">{c.title}</p>
                  <p className="text-xs text-slate-500">{c.teacher} · {c.date} {c.time}</p>
                </div>
                <Button size="sm" onClick={() => toast("Joining live class (integration-ready)")} icon>Join</Button>
              </div>
            ))}
          </div>
        </Panel>
      </div>

      {/* Resources */}
      <div className="mt-6" id="resources">
        <Panel title={t("Study resources")} action={<Button size="sm" variant="outline" onClick={() => toast(t("Download all") + " (demo)")}>{t("Download all")}</Button>}>
          <Table
            head={["Resource", "Subject", "Type", "Size", ""]}
            rows={resources.map((r) => [
              <span key="t" className="flex items-center gap-2 font-medium text-navy-950"><Icon.File className="h-4 w-4 text-mint" /> {r.title}</span>,
              <span key="s" className="text-slate-600">{r.subject}</span>,
              <Tag key="ty" tone="neutral">{r.type}</Tag>,
              <span key="z" className="text-slate-500">{r.size}</span>,
              <button key="d" onClick={() => toast(`Downloading ${r.title} (demo)`)} className="text-slate-400 hover:text-mint" aria-label="Download">
                <Icon.Download className="h-4 w-4" />
              </button>,
            ])}
          />
        </Panel>
      </div>

      {/* Announcements */}
      <div className="mt-6" id="announcements">
        <Panel title={t("Announcements")} action={<Button size="sm" variant="ghost" onClick={() => toast(t("View all") + " · 6 total")}>{t("View all")}</Button>}>
          <div className="space-y-2.5">
            {announcements.slice(0, 4).map((a) => (
              <div key={a.id} className="flex items-start gap-3 rounded-xl bg-cream p-3">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-navy-600"><Icon.Bell className="h-4 w-4" /></span>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium text-navy-950">{a.title}</p>
                    <Badge tone="neutral">{a.channel}</Badge>
                  </div>
                  <p className="text-xs text-slate-500">{a.body}</p>
                  <p className="mt-0.5 text-[11px] text-slate-400">{a.date} · {a.audience}</p>
                </div>
              </div>
            ))}
          </div>
        </Panel>
      </div>
    </PortalShell>
  );
}
