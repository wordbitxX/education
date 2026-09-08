"use client";

import { brand, marks } from "@/lib/data";
import { Icon } from "@/components/icons";
import { Button } from "@/components/ui";

const students = [
  { id: "MA-2024-1001", name: "Ayaan Khan", klass: "Grade 9", section: "A", roll: "07", session: "2025–26" },
  { id: "MA-2024-1042", name: "Bilal Aslam", klass: "Grade 10", section: "B", roll: "15", session: "2025–26" },
];

function gradeFor(total: number) {
  if (total >= 90) return "A+";
  if (total >= 80) return "A";
  if (total >= 70) return "B";
  if (total >= 60) return "C";
  if (total >= 50) return "D";
  return "F";
}

export default function ReportCard({ student }: { student?: (typeof students)[number] }) {
  const s = student ?? students[0];
  const rows = marks.map((m) => ({ ...m, grade: gradeFor(m.total) }));
  const totalMarks = rows.reduce((a, r) => a + r.total, 0);
  const percentage = Math.round((totalMarks / rows.length) * 100);
  const finalGrade = gradeFor(percentage);
  const position = Math.max(1, Math.round((100 - percentage) / 3));

  return (
    <div>
      <div className="no-print mb-4 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-slate-500">
          Configurable grading system (A+ → F). Data shown is fictional demo data.
        </p>
        <div className="flex gap-2">
          <Button size="sm" variant="outline" onClick={() => window.print()}>
            <Icon.Print className="h-4 w-4" /> Print / Download PDF
          </Button>
        </div>
      </div>

      <div className="print-area overflow-hidden rounded-3xl border-2 border-navy-900/90 bg-white">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 bg-navy-950 px-6 py-5 text-white">
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
              <Icon.GraduationCap className="h-6 w-6" />
            </span>
            <div>
              <p className="font-serif text-xl font-semibold leading-tight">{brand.name}</p>
              <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">Term 2 · Progress Report</p>
            </div>
          </div>
          <div className="text-right text-xs text-slate-300">
            <p>Academic Session {s.session}</p>
            <p>Report date: 10 March 2026</p>
          </div>
        </div>

        {/* Student info */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-3 border-b border-navy-900/10 px-6 py-5 sm:grid-cols-4">
          <Info l="Student" v={s.name} />
          <Info l="Class" v={`${s.klass} · Section ${s.section}`} />
          <Info l="Roll No." v={s.roll} />
          <Info l="Student ID" v={s.id} />
        </div>

        {/* Marks table */}
        <div className="px-6 py-5">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b-2 border-navy-900/80 text-xs uppercase tracking-wide text-slate-500">
                <th className="py-2.5 pr-3 font-semibold">Subject</th>
                <th className="py-2.5 pr-3 font-semibold">Teacher</th>
                <th className="py-2.5 pr-3 text-center font-semibold">Test (25)</th>
                <th className="py-2.5 pr-3 text-center font-semibold">Exam (50)</th>
                <th className="py-2.5 pr-3 text-center font-semibold">Total (100)</th>
                <th className="py-2.5 text-center font-semibold">Grade</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.subject} className="border-b border-navy-900/5">
                  <td className="py-2.5 pr-3 font-medium text-navy-950">{r.subject}</td>
                  <td className="py-2.5 pr-3 text-slate-600">{r.teacher}</td>
                  <td className="py-2.5 pr-3 text-center">{Math.round((r.test / 100) * 25)}</td>
                  <td className="py-2.5 pr-3 text-center">{Math.round((r.exam / 100) * 50)}</td>
                  <td className="py-2.5 pr-3 text-center font-semibold text-navy-950">{r.total}</td>
                  <td className="py-2.5 text-center">
                    <span className={`inline-flex min-w-8 justify-center rounded-md px-2 py-0.5 text-xs font-bold ${r.total >= 80 ? "bg-mint-soft text-mint" : r.total >= 70 ? "bg-navy-50 text-navy-700" : "bg-gold-soft text-gold"}`}>
                      {r.grade}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <div className="rounded-xl bg-cream p-3 text-center">
              <p className="text-[10px] uppercase tracking-wide text-slate-500">Overall</p>
              <p className="text-lg font-semibold text-navy-950">{percentage}%</p>
            </div>
            <div className="rounded-xl bg-cream p-3 text-center">
              <p className="text-[10px] uppercase tracking-wide text-slate-500">Final Grade</p>
              <p className="text-lg font-semibold text-mint">{finalGrade}</p>
            </div>
            <div className="rounded-xl bg-cream p-3 text-center">
              <p className="text-[10px] uppercase tracking-wide text-slate-500">Attendance</p>
              <p className="text-lg font-semibold text-navy-950">97%</p>
            </div>
            <div className="rounded-xl bg-cream p-3 text-center">
              <p className="text-[10px] uppercase tracking-wide text-slate-500">Class Position</p>
              <p className="text-lg font-semibold text-navy-950">{position}{position === 1 ? "st" : position === 2 ? "nd" : "rd"} / 26</p>
            </div>
          </div>

          {/* Remarks */}
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-navy-900/10 p-4">
              <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-500">Teacher Remarks</p>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-700">
                A consistent performer who engages actively in class. Encouraged to extend
                practice in advanced problem-solving this term.
              </p>
            </div>
            <div className="rounded-xl border border-navy-900/10 p-4">
              <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-500">Principal Remarks</p>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-700">
                Steady progress with a commendable attitude. We look forward to even greater
                achievements in Term 3.
              </p>
            </div>
          </div>

          {/* Signatures */}
          <div className="mt-8 flex items-end justify-between text-xs text-slate-500">
            <div>
              <div className="w-36 border-b border-navy-900/40 pb-1">Class Teacher</div>
              <p className="mt-1">Daniel Carter · Mathematics</p>
            </div>
            <div>
              <div className="w-36 border-b border-navy-900/40 pb-1">Parent Signature</div>
            </div>
            <div>
              <div className="w-36 border-b border-navy-900/40 pb-1">Principal</div>
              <p className="mt-1">Dr. Sarah Wilson</p>
            </div>
          </div>

          <p className="mt-6 border-t border-navy-900/10 pt-3 text-center text-[10px] text-slate-400">
            {brand.name} · Term 2 Progress Report · Fictional demo document generated by the WordbitX platform
          </p>
        </div>
      </div>
    </div>
  );
}

function Info({ l, v }: { l: string; v: string }) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-wide text-slate-400">{l}</p>
      <p className="text-sm font-semibold text-navy-950">{v}</p>
    </div>
  );
}
