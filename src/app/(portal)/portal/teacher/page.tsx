"use client";

import { useState } from "react";
import PortalShell from "@/components/portal/PortalShell";
import { Panel, KPI, Tag, Avatar, Table } from "@/components/portal/blocks";
import { BarChart } from "@/components/portal/charts";
import { toast } from "@/components/portal/Toast";
import { useI18n } from "@/lib/i18n";
import { Donut, Button, Progress } from "@/components/ui";
import { Icon } from "@/components/icons";
import TimetableBoard from "@/components/portal/TimetableBoard";
import { students, resources, onlineClasses } from "@/lib/data";
import { cn } from "@/lib/utils";

type Att = "present" | "late" | "absent";

export default function TeacherPortal() {
  const { t } = useI18n();
  const [att, setAtt] = useState<Record<string, Att>>({});
  const [saved, setSaved] = useState(false);
  const [assignList, setAssignList] = useState([
    { title: "Quadratics problem set", subject: "Mathematics", class: "Grade 9-A", due: "16 Mar", status: "Open" },
    { title: "Graphing worksheet", subject: "Mathematics", class: "Grade 9-B", due: "18 Mar", status: "Open" },
    { title: "Revision sheet", subject: "Mathematics", class: "Grade 10-A", due: "20 Mar", status: "Draft" },
  ]);
  const [newTitle, setNewTitle] = useState("");
  const [published, setPublished] = useState(false);

  const myStudents = students.slice(0, 6);
  const presentCount = Object.values(att).filter((v) => v !== "absent").length;
  const marked = Object.keys(att).length;

  const addAssignment = () => {
    if (!newTitle.trim()) return;
    setAssignList((l) => [{ title: newTitle, subject: "Mathematics", class: "Grade 9-A", due: "24 Mar", status: "Open" }, ...l]);
    setNewTitle("");
    toast("Assignment created & shared with Grade 9-A");
  };

  return (
    <PortalShell portal="teacher" user="Daniel Carter" role="Head of Mathematics">
      <div className="mb-6 rounded-2xl bg-navy-950 p-6 text-white">
        <p className="text-sm text-teal-300">{t("Teacher workspace")}</p>
        <h1 className="font-serif text-2xl font-semibold">Welcome, Mr. Carter</h1>
        <p className="text-sm text-slate-300">4 classes today · 10:00 break · House activity 13:25</p>
      </div>
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-navy-900/8 bg-white p-4">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-red-500"><Icon.Clock className="h-5 w-5" /></span>
          <div>
            <p className="text-sm font-semibold text-navy-950">Leave requested: 1 day (annual)</p>
            <p className="text-xs text-slate-500">24 Mar · Approved by Principal</p>
          </div>
        </div>
        <Button size="sm" variant="outline" onClick={() => toast("Leave application submitted to Principal (demo)")}><Icon.Plus className="h-4 w-4" /> Apply for leave</Button>
      </div>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <KPI icon="Users" label={t("My Classes")} value="4" tone="#0f766e" sub="128 students" />
        <KPI icon="Clipboard" label={t("Attendance to mark")} value={marked ? `${marked}/${myStudents.length}` : "Class 9-A"} tone="#b8863b" sub="today" />
        <KPI icon="Calculator" label={t("Pending marks")} value={published ? "0" : "2"} tone="#16304c" sub="classes" />
        <KPI icon="TrendingUp" label={t("Class average")} value="84%" tone="#2b527a" sub="+3% this term" />
      </div>

      {/* My classes + today */}
      <div className="mt-6 grid gap-5 lg:grid-cols-3" id="overview">
        <Panel title={t("My Classes")}>
          <div className="space-y-2.5">
            {[
              { c: "Grade 9-A", n: 26, avg: 84 },
              { c: "Grade 9-B", n: 24, avg: 81 },
              { c: "Grade 10-A", n: 26, avg: 88 },
              { c: "Grade 10-B", n: 28, avg: 86 },
            ].map((x) => (
              <div key={x.c} className="rounded-xl border border-navy-900/8 p-3">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-navy-950">{x.c}</p>
                  <Tag tone="navy">{x.n} students</Tag>
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <Progress value={x.avg} className="flex-1" tone="gold" />
                  <span className="text-xs font-medium text-navy-950">{x.avg}%</span>
                </div>
              </div>
            ))}
          </div>
        </Panel>
        <Panel title={t("Today's timetable")} className="lg:col-span-2" id="classes">
          <TimetableBoard compact />
        </Panel>
      </div>

      {/* Online classes */}
      <div className="mt-6">
        <Panel title="Online Classes" action={<Tag tone="mint">Video platform · integration-ready</Tag>}>
          <div className="grid gap-3 md:grid-cols-3">
            {onlineClasses.slice(0, 2).map((c) => (
              <div key={c.join} className="rounded-2xl border border-navy-900/8 bg-ivory p-4">
                <div className="flex items-center justify-between">
                  <Tag tone="navy">{c.klass}</Tag>
                  <span className="flex items-center gap-1.5 text-[11px] font-medium text-red-500"><span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-red-500" /> {c.date} {c.time}</span>
                </div>
                <p className="mt-2 text-sm font-semibold text-navy-950">{c.title}</p>
                <p className="text-xs text-slate-500">Hosted by you · meeting link generated automatically</p>
                <Button size="sm" className="mt-3 w-full" onClick={() => toast("Joining your live class (integration-ready)")} icon>
                  Join Class
                </Button>
              </div>
            ))}
          </div>
        </Panel>
      </div>

      {/* Attendance */}
      <div className="mt-6" id="attendance">
        <Panel
          title={t("Mark attendance · Grade 9-A")}
          action={
            <Button
              size="sm"
              onClick={() => {
                setSaved(true);
                toast(`Attendance saved — ${presentCount} present, ${myStudents.length - presentCount} flagged`);
              }}
              disabled={marked === 0}
            >
              {saved ? t("Saved ✓") : `${t("Save")} (${presentCount} present)`}
            </Button>
          }
        >
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {myStudents.map((s) => {
              const v = att[s.id] ?? "present";
              return (
                <div key={s.id} className="flex items-center justify-between rounded-xl border border-navy-900/8 p-3">
                  <div className="flex items-center gap-2">
                    <Avatar name={s.name} tone={s.color} size="sm" />
                    <div><p className="text-sm font-medium text-navy-950">{s.name}</p><p className="text-[11px] text-slate-400">{s.grade} · {s.section}</p></div>
                  </div>
                  <div className="flex gap-1">
                    {(["present", "late", "absent"] as Att[]).map((o) => (
                      <button
                        key={o}
                        onClick={() => { setAtt((a) => ({ ...a, [s.id]: o })); setSaved(false); }}
                        className={cn(
                          "h-7 w-7 rounded-full text-xs font-semibold transition",
                          v === o ? "text-white" : "text-slate-400 hover:bg-slate-100",
                          o === "present" && v === o && "bg-mint",
                          o === "late" && v === o && "bg-gold",
                          o === "absent" && v === o && "bg-red-500"
                        )}
                      >
                        {o === "present" ? "P" : o === "late" ? "L" : "A"}
                      </button>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-4 flex flex-wrap gap-3 text-xs text-slate-500">
            <span className="flex items-center gap-1.5"><span className="h-3 w-3 rounded-full bg-mint" /> Present</span>
            <span className="flex items-center gap-1.5"><span className="h-3 w-3 rounded-full bg-gold" /> Late</span>
            <span className="flex items-center gap-1.5"><span className="h-3 w-3 rounded-full bg-red-500" /> Absent</span>
          </div>
        </Panel>
      </div>

      {/* Assignments */}
      <div className="mt-6" id="assignments">
        <Panel
          title={t("Assignments")}
          action={
            <div className="flex items-center gap-2">
              <input
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && addAssignment()}
                placeholder="New assignment title"
                className="h-9 w-40 rounded-full border border-navy-900/12 bg-white px-4 text-sm outline-none focus:border-mint sm:w-56"
              />
              <Button size="sm" onClick={addAssignment}><Icon.Plus className="h-4 w-4" /> {t("Create")}</Button>
            </div>
          }
        >
          <Table
            head={["Assignment", "Class", "Due", "Status", ""]}
            rows={assignList.map((a) => [
              <span key="t" className="font-medium text-navy-950">{a.title}</span>,
              <span key="c" className="text-slate-600">{a.class}</span>,
              <span key="d" className="text-slate-500">{a.due}</span>,
              <Tag key="s" tone={a.status === "Open" ? "mint" : a.status === "Draft" ? "neutral" : "navy"}>{a.status}</Tag>,
              <button
                key="x"
                onClick={() => toast(`Sending "${a.title}" to ${a.class} (demo)`)}
                className="text-slate-400 hover:text-mint"
                aria-label="Share assignment"
              >
                <Icon.Send className="h-4 w-4" />
              </button>,
            ])}
          />
        </Panel>
      </div>

      {/* Marks entry */}
      <div className="mt-6 grid gap-5 lg:grid-cols-2" id="marks">
        <Panel title={t("Marks entry · Grade 9-A")}>
          <Table
            head={["Student", "Test", "Exam", "Total"]}
            rows={[
              { name: "Ayaan Khan", test: 88, exam: 82 },
              { name: "Hamza Malik", test: 74, exam: 78 },
              { name: "Sara Ahmed", test: 91, exam: 86 },
              { name: "Zara Iqbal", test: 95, exam: 93 },
            ].map((m) => [
              <span key="n" className="font-medium text-navy-950">{m.name}</span>,
              <span key="t" className="text-slate-600">{m.test}</span>,
              <span key="e" className="text-slate-600">{m.exam}</span>,
              <span key="to" className="font-semibold text-navy-950">{(m.test + m.exam) / 2}</span>,
            ])}
          />
          <Button
            size="sm"
            variant="outline"
            className="mt-4"
            onClick={() => {
              setPublished(true);
              toast("Results published to student & parent portals");
            }}
          >
            {published ? "Published ✓" : t("Publish results")}
          </Button>
        </Panel>
        <Panel title={t("Class performance")}>
          <div className="mb-4 flex items-center gap-6">
            <Donut value={86} size={110} label="pass rate" />
            <div className="flex-1 space-y-2">
              <div className="flex items-center justify-between text-sm"><span className="text-slate-500">Above average</span><span className="font-medium text-mint">64%</span></div>
              <div className="flex items-center justify-between text-sm"><span className="text-slate-500">At average</span><span className="font-medium text-navy-950">29%</span></div>
              <div className="flex items-center justify-between text-sm"><span className="text-slate-500">Needs support</span><span className="font-medium text-red-500">7%</span></div>
            </div>
          </div>
          <BarChart data={[72, 78, 81, 84, 80, 86, 88]} labels={["W1", "W2", "W3", "W4", "W5", "W6", "W7"]} tone="#b8863b" />
        </Panel>
      </div>

      {/* Exams + lesson plans */}
      <div className="mt-6 grid gap-5 lg:grid-cols-2" id="exams">
        <Panel title={t("Exams to invigilate")}>
          <Table
            head={["Exam", "Class", "Date", "Weight"]}
            rows={[
              ["Mock · Mathematics", "Grade 9-A", "18 Mar", "25%"],
              ["Mock · Mathematics", "Grade 9-B", "18 Mar", "25%"],
              ["Terminal · Mathematics", "Grade 10-A", "25 Mar", "30%"],
            ].map((r) => [
              <span key="e" className="font-medium text-navy-950">{r[0]}</span>,
              <span key="c" className="text-slate-600">{r[1]}</span>,
              <span key="d" className="text-slate-500">{r[2]}</span>,
              <Tag key="w" tone="navy">{r[3]}</Tag>,
            ])}
          />
        </Panel>
        <Panel title={t("Lesson plans")} id="lessons">
          <div className="space-y-2.5">
            {[
              { t: "Quadratics: completing the square", d: "Week 7 · Grade 9-A" },
              { t: "Graphing quadratic functions", d: "Week 7 · Grade 9-B" },
              { t: "Algebra: simultaneous equations", d: "Week 8 · Grade 10-A" },
            ].map((l) => (
              <div key={l.t} className="flex items-center justify-between rounded-xl border border-navy-900/8 p-3">
                <div><p className="text-sm font-medium text-navy-950">{l.t}</p><p className="text-xs text-slate-500">{l.d}</p></div>
                <button onClick={() => toast(`Opening "${l.t}" (demo)`)} className="text-slate-400 hover:text-mint" aria-label="Open lesson plan">
                  <Icon.BookOpen className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
          <Button size="sm" variant="outline" className="mt-4" onClick={() => toast("New lesson plan started (demo)")}>
            <Icon.Plus className="h-4 w-4" /> {t("New lesson plan")}
          </Button>
        </Panel>
      </div>

      {/* Resources */}
      <div className="mt-6" id="resources">
        <Panel title={t("Learning resources")} action={<Button size="sm" variant="outline" onClick={() => toast("Upload dialog (demo)")}><Icon.Upload className="h-4 w-4" /> {t("Upload")}</Button>}>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {resources.map((r) => (
              <div key={r.title} className="rounded-xl border border-navy-900/8 p-4">
                <div className="flex items-center gap-2"><Icon.File className="h-4 w-4 text-mint" /><span className="text-sm font-medium text-navy-950">{r.title}</span></div>
                <p className="mt-1 text-xs text-slate-500">{r.subject} · {r.size}</p>
              </div>
            ))}
          </div>
        </Panel>
      </div>
    </PortalShell>
  );
}
