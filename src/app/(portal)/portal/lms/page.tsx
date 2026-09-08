"use client";

import { useMemo, useState } from "react";
import PortalShell from "@/components/portal/PortalShell";
import { Panel, Tag, Table } from "@/components/portal/blocks";
import { toast } from "@/components/portal/Toast";
import { useI18n } from "@/lib/i18n";
import { LineChart } from "@/components/portal/charts";
import { Button, Progress, Donut } from "@/components/ui";
import { Icon } from "@/components/icons";
import { courses, resources, assignments, onlineClasses, type Course } from "@/lib/data";
import { cn } from "@/lib/utils";

const quiz = [
  { q: "What is the discriminant of a quadratic equation?", a: ["b² − 4ac", "b² + 4ac", "−b/2a", "4ac − b²"], correct: 0 },
  { q: "How many solutions does a quadratic with discriminant = 0 have?", a: ["None", "One (repeated)", "Two distinct", "Infinite"], correct: 1 },
  { q: "A quadratic opens upward when…", a: ["a < 0", "a > 0", "a = 0", "c < 0"], correct: 1 },
];

export default function LmsPage() {
  const { t } = useI18n();
  const [selected, setSelected] = useState(courses[0]);
  const [doneMap, setDoneMap] = useState<Record<string, boolean>>({});
  const [quizOpen, setQuizOpen] = useState(false);
  const [qIdx, setQIdx] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const isDone = (c: Course, l: Course["lessonsList"][number]) =>
    doneMap[`${c.id}-${l.title}`] ?? l.done;

  const courseProgress = (c: Course) => {
    const doneCount = c.lessonsList.filter((l) => isDone(c, l)).length;
    return Math.round((doneCount / c.lessonsList.length) * 100);
  };

  const toggleLesson = (c: Course, l: Course["lessonsList"][number]) => {
    const key = `${c.id}-${l.title}`;
    const next = !isDone(c, l);
    setDoneMap((m) => ({ ...m, [key]: next }));
    toast(next ? `Lesson completed: ${l.title}` : `Lesson reopened: ${l.title}`);
  };

  const filtered = useMemo(() => courses, []);

  const openQuiz = () => {
    setQuizOpen(true);
    setQIdx(0);
    setScore(0);
    setDone(false);
    setPicked(null);
  };

  const answer = () => {
    if (picked === quiz[qIdx].correct) setScore((s) => s + 1);
    setPicked(null);
    if (qIdx + 1 < quiz.length) setQIdx((i) => i + 1);
    else {
      setDone(true);
      toast("Quiz completed — score saved to progress");
    }
  };

  const progress = courseProgress(selected);
  const doneCount = selected.lessonsList.filter((l) => isDone(selected, l)).length;

  return (
    <PortalShell portal="lms" user="Ayaan Khan" role="Student · Learning Hub">
      <div className="mb-6 rounded-2xl bg-navy-950 p-6 text-white">
        <p className="text-sm text-teal-300">{t("Learning Hub")}</p>
        <h1 className="font-serif text-2xl font-semibold">{t("Your courses & learning")}</h1>
        <p className="text-sm text-slate-300">4 active courses · {selected.lessonsList.length - doneCount} lessons left in “{selected.title.split("—")[0].trim()}”</p>
      </div>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <KpiMini icon="BookOpen" label={t("Courses")} value={courses.length} tone="#0f766e" />
        <KpiMini icon="Check" label={t("Lessons done")} value={courses.reduce((a, c) => a + c.lessonsList.filter((l) => isDone(c, l)).length, 0)} tone="#2b527a" />
        <KpiMini icon="Clock" label={t("Time this week")} value="3h 20m" tone="#b8863b" />
        <KpiMini icon="Trophy" label={t("Quiz score")} value="85%" tone="#16304c" />
      </div>

      {/* Courses */}
      <div className="mt-6" id="continue">
        <Panel title={t("Continue learning")} id="courses">
          <div className="grid gap-4 sm:grid-cols-2">
            {filtered.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelected(c)}
                className={cn(
                  "rounded-xl border p-4 text-left transition-all",
                  selected.id === c.id ? "border-mint bg-mint-soft/40 ring-1 ring-mint" : "border-navy-900/8 bg-white hover:border-navy-900/20"
                )}
              >
                <div className="flex items-center justify-between">
                  <Tag tone={courseProgress(c) === 100 ? "mint" : "navy"}>{c.subject}</Tag>
                  {selected.id === c.id && <Icon.Check className="h-4 w-4 text-mint" />}
                </div>
                <p className="mt-2 font-medium text-navy-950">{c.title}</p>
                <p className="text-xs text-slate-500">{c.teacher} · {c.duration}</p>
                <div className="mt-3 flex items-center gap-2">
                  <Progress value={courseProgress(c)} className="flex-1" />
                  <span className="text-xs font-medium">{courseProgress(c)}%</span>
                </div>
              </button>
            ))}
          </div>
        </Panel>
      </div>

      {/* Selected course detail */}
      <div className="mt-6 grid gap-5 lg:grid-cols-3">
        <Panel title={t("Lessons")} className="lg:col-span-2">
          <p className="mb-3 text-xs text-slate-400">Tap a lesson to mark it complete — your progress updates instantly.</p>
          <div className="space-y-2.5">
            {selected.lessonsList.map((l, i) => {
              const d = isDone(selected, l);
              return (
                <button
                  key={l.title}
                  onClick={() => toggleLesson(selected, l)}
                  className={cn(
                    "flex w-full items-center gap-3 rounded-xl border p-3 text-left transition-all",
                    d ? "border-navy-900/8" : "border-mint/40 bg-mint-soft/30 hover:bg-mint-soft/50"
                  )}
                >
                  <span className={cn("flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs", d ? "bg-mint text-white" : "border border-navy-900/15 bg-white text-slate-400")}>
                    {d ? <Icon.Check className="h-4 w-4" /> : i + 1}
                  </span>
                  <div className="flex-1">
                    <p className={cn("text-sm font-medium", d ? "text-navy-950" : "text-navy-900")}>{l.title}</p>
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <Tag tone="neutral">{l.type}</Tag> {l.duration}
                    </div>
                  </div>
                  <Icon.Play className="h-4 w-4 shrink-0 text-slate-300" />
                </button>
              );
            })}
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            <Button onClick={openQuiz}><Icon.Lightbulb className="h-4 w-4" /> {t("Practice quiz")}</Button>
            <Button variant="outline" onClick={() => toast("Resources downloading (demo)")}><Icon.Download className="h-4 w-4" /> {t("Download resources")}</Button>
          </div>
        </Panel>

        <div className="space-y-5">
          <Panel title={t("Progress")}>
            <div className="flex flex-col items-center">
              <Donut value={progress} size={130} label="complete" />
              <div className="mt-4 w-full space-y-2">
                <Row l="Lessons" v={`${doneCount}/${selected.lessonsList.length}`} />
                <Row l="Duration" v={selected.duration} />
                <Row l="Certificate" v={progress === 100 ? "Earned" : "Locked"} />
              </div>
            </div>
          </Panel>
          <Panel title={t("Assignments")} id="assignments">
            <div className="space-y-2">
              {assignments.slice(0, 3).map((a) => (
                <div key={a.id} className="flex items-center justify-between rounded-lg border border-navy-900/8 p-2.5">
                  <div><p className="text-sm font-medium text-navy-950">{a.title}</p><p className="text-xs text-slate-500">{a.subject}</p></div>
                  <Tag tone={a.status === "Graded" ? "mint" : a.status === "Pending" ? "gold" : "navy"}>{a.status}</Tag>
                </div>
              ))}
            </div>
          </Panel>
        </div>
      </div>

      {/* Quiz modal */}
      {quizOpen && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-navy-950/60 p-4 backdrop-blur-sm" onClick={() => setQuizOpen(false)}>
          <div className="animate-scale-in w-full max-w-lg rounded-3xl bg-white p-6 sm:p-8" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-navy-950">{t("Practice quiz")} · {selected.title}</p>
              <button onClick={() => setQuizOpen(false)} className="text-slate-400 hover:text-navy-950"><Icon.X className="h-5 w-5" /></button>
            </div>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-100">
              <div className="h-full rounded-full bg-mint transition-all duration-300" style={{ width: `${((done ? quiz.length : qIdx + 1) / quiz.length) * 100}%` }} />
            </div>

            {done ? (
              <div className="flex flex-col items-center gap-3 py-8 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-mint-soft"><Icon.Trophy className="h-8 w-8 text-mint" /></div>
                <h3 className="font-serif text-2xl font-semibold text-navy-950">Quiz complete</h3>
                <p className="text-slate-600">You scored {score} / {quiz.length}</p>
                <Button onClick={() => setQuizOpen(false)}>Close</Button>
              </div>
            ) : (
              <div className="mt-6">
                <p className="text-sm text-slate-400">Question {qIdx + 1} of {quiz.length}</p>
                <h3 className="mt-2 text-lg font-semibold text-navy-950">{quiz[qIdx].q}</h3>
                <div className="mt-4 space-y-2.5">
                  {quiz[qIdx].a.map((opt, i) => (
                    <button
                      key={opt}
                      onClick={() => setPicked(i)}
                      className={cn(
                        "flex w-full items-center gap-3 rounded-xl border p-3 text-left transition",
                        picked === i ? "border-mint bg-mint-soft" : "border-navy-900/10 hover:border-navy-900/30"
                      )}
                    >
                      <span className={cn("flex h-6 w-6 items-center justify-center rounded-full border text-xs", picked === i ? "border-mint bg-mint text-white" : "border-slate-300")}>
                        {String.fromCharCode(65 + i)}
                      </span>
                      {opt}
                    </button>
                  ))}
                </div>
                <Button onClick={answer} disabled={picked === null} className="mt-5 w-full">
                  {qIdx + 1 === quiz.length ? "Submit quiz" : "Next"}
                </Button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Online classes */}
      <div className="mt-6">
        <Panel title="Online Classes" action={<Tag tone="mint">Live · integration-ready</Tag>}>
          <div className="grid gap-3 md:grid-cols-3">
            {onlineClasses.map((c) => (
              <div key={c.join} className="rounded-2xl border border-navy-900/8 bg-ivory p-4">
                <div className="flex items-center justify-between">
                  <Tag tone="navy">{c.klass}</Tag>
                  <span className="flex items-center gap-1.5 text-[11px] font-medium text-red-500"><span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-red-500" /> {c.date}</span>
                </div>
                <p className="mt-2 text-sm font-semibold text-navy-950">{c.title}</p>
                <p className="text-xs text-slate-500">{c.teacher} · {c.time}</p>
                <Button size="sm" className="mt-3 w-full" onClick={() => toast("Joining live class (integration-ready)")} icon>
                  Join Class
                </Button>
              </div>
            ))}
          </div>
        </Panel>
      </div>

      {/* Resources */}
      <div className="mt-6" id="resources">
        <Panel title={t("Resources & materials")} action={<Button size="sm" variant="outline" onClick={() => toast("All resources downloading (demo)")}><Icon.Download className="h-4 w-4" /> {t("Download all")}</Button>}>
          <Table
            head={["Material", "Subject", "Type", "Size", ""]}
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

      {/* Progress */}
      <div className="mt-6" id="progress">
        <Panel title={t("Overall learning progress")}>
          <div className="grid gap-5 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <LineChart data={[40, 52, 61, 68, 74, 82, 90]} labels={["W1", "W2", "W3", "W4", "W5", "W6", "W7"]} height={160} tone="#0f766e" />
            </div>
            <div className="space-y-2.5">
              <Row l="Courses started" v="4" />
              <Row l="Completion" v={`${Math.round(courses.reduce((a, c) => a + courseProgress(c), 0) / courses.length)}%`} />
              <Row l="Hours logged" v="18.5h" />
              <Row l="Avg. quiz score" v="85%" />
              <Row l="Certificates" v={`${courses.filter((c) => courseProgress(c) === 100).length}`} />
            </div>
          </div>
        </Panel>
      </div>
    </PortalShell>
  );
}

function KpiMini({ icon, label, value, tone }: { icon: "BookOpen" | "Check" | "Clock" | "Trophy"; label: string; value: string | number; tone: string }) {
  const Cmp = Icon[icon];
  return (
    <div className="rounded-2xl border border-navy-900/8 bg-white p-5">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg" style={{ backgroundColor: `${tone}18`, color: tone }}>
        <Cmp className="h-4 w-4" />
      </div>
      <div className="mt-2.5 text-xl font-semibold text-navy-950">{value}</div>
      <div className="text-xs text-slate-500">{label}</div>
    </div>
  );
}

function Row({ l, v }: { l: string; v: string }) {
  return (
    <div className="flex items-center justify-between rounded-lg bg-cream px-3 py-2 text-sm">
      <span className="text-slate-500">{l}</span>
      <span className="font-medium text-navy-950">{v}</span>
    </div>
  );
}
