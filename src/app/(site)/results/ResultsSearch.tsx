"use client";

import { useState } from "react";
import ReportCard from "@/components/report/ReportCard";
import { toast } from "@/components/portal/Toast";
import { Container, Section, Button, Badge } from "@/components/ui";
import PageHeader from "@/components/site/PageHeader";
import { Icon } from "@/components/icons";

const demoStudents = [
  { id: "MA-2024-1001", name: "Ayaan Khan", klass: "Grade 9", section: "A", roll: "07", session: "2025–26" },
  { id: "MA-2024-1042", name: "Bilal Aslam", klass: "Grade 10", section: "B", roll: "15", session: "2025–26" },
];

export default function ResultsSearch() {
  const [form, setForm] = useState({ sid: "MA-2024-1001", roll: "07", klass: "Grade 9", session: "2025–26" });
  const [found, setFound] = useState<(typeof demoStudents)[number] | null>(demoStudents[0]);
  const [notFound, setNotFound] = useState(false);

  const search = () => {
    const match = demoStudents.find(
      (s) =>
        s.id.toLowerCase() === form.sid.trim().toLowerCase() ||
        s.roll === form.roll.trim()
    );
    if (match) {
      setFound(match);
      setNotFound(false);
    } else {
      setFound(null);
      setNotFound(true);
      toast("Result not found — try a demo ID shown below");
    }
  };

  return (
    <>
      <PageHeader
        eyebrow="Result Portal"
        title="Check your result online"
        description="Enter your Student ID or Roll Number with class and session to view your report card. Demo IDs are provided below."
        breadcrumbs={[{ label: "Results" }]}
      />
      <Section className="bg-white">
        <Container size="narrow">
          <div className="rounded-3xl border border-navy-900/8 bg-ivory p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium text-navy-950">Student ID</span>
                <input value={form.sid} onChange={(e) => setForm({ ...form, sid: e.target.value })} className="w-full rounded-xl border border-navy-900/12 bg-white px-4 py-3 text-sm outline-none focus:border-mint" placeholder="MA-2024-1001" />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium text-navy-950">Roll Number</span>
                <input value={form.roll} onChange={(e) => setForm({ ...form, roll: e.target.value })} className="w-full rounded-xl border border-navy-900/12 bg-white px-4 py-3 text-sm outline-none focus:border-mint" placeholder="07" />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium text-navy-950">Class</span>
                <select value={form.klass} onChange={(e) => setForm({ ...form, klass: e.target.value })} className="w-full rounded-xl border border-navy-900/12 bg-white px-4 py-3 text-sm outline-none focus:border-mint">
                  {["Grade 7", "Grade 8", "Grade 9", "Grade 10", "Grade 11", "Grade 12"].map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </label>
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium text-navy-950">Academic Session</span>
                <select value={form.session} onChange={(e) => setForm({ ...form, session: e.target.value })} className="w-full rounded-xl border border-navy-900/12 bg-white px-4 py-3 text-sm outline-none focus:border-mint">
                  <option>2025–26</option>
                  <option>2024–25</option>
                </select>
              </label>
            </div>
            <Button onClick={search} className="mt-5 w-full" icon>
              Check Result
            </Button>
            <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-slate-500">
              <Badge tone="neutral">Demo IDs</Badge>
              {demoStudents.map((s) => (
                <button
                  key={s.id}
                  onClick={() => { setForm({ sid: s.id, roll: s.roll, klass: s.klass, session: s.session }); setFound(s); setNotFound(false); }}
                  className="rounded-full border border-navy-900/10 px-3 py-1 font-mono text-[11px] hover:border-mint hover:text-mint"
                >
                  {s.id} · Roll {s.roll}
                </button>
              ))}
            </div>
          </div>

          {notFound && (
            <div className="mt-8 flex items-center gap-3 rounded-2xl bg-red-50 p-5 text-sm text-red-700">
              <Icon.Alert className="h-5 w-5 shrink-0" />
              No result matches those details. Check the ID and roll number, or use a demo ID above.
            </div>
          )}

          {found && (
            <div className="mt-10">
              <ReportCard student={found} />
            </div>
          )}
        </Container>
      </Section>
    </>
  );
}
