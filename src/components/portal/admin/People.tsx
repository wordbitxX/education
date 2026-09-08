"use client";

import { useState } from "react";
import { students, guardians, hrEmployees, studentProfile } from "@/lib/data";
import { toast } from "@/components/portal/Toast";
import { useI18n } from "@/lib/i18n";
import { Panel, KPI, Tag, Avatar, Table } from "@/components/portal/blocks";
import { Button, Progress } from "@/components/ui";
import { Icon } from "@/components/icons";
import { formatCurrency, formatDate } from "@/lib/utils";

export default function People() {
  const { t } = useI18n();
  const [roster, setRoster] = useState(students.map((s) => ({ ...s, active: true, promoted: false })));
  const [query, setQuery] = useState("");
  const [viewing, setViewing] = useState<string | null>(null);
  const [addOpen, setAddOpen] = useState(false);
  const [newStudent, setNewStudent] = useState({ name: "", klass: "Grade 9", parent: "", phone: "" });
  const [slipFor, setSlipFor] = useState<typeof hrEmployees[0] | null>(null);

  const filtered = roster.filter((s) => s.name.toLowerCase().includes(query.toLowerCase()) && s.active);
  const view = roster.find((s) => s.id === viewing);

  const addStudent = () => {
    if (!newStudent.name.trim()) return;
    setRoster((r) => [
      {
        id: "s" + Date.now(),
        name: newStudent.name,
        initial: newStudent.name.split(" ").map((n) => n[0]).slice(0, 2).join(""),
        grade: newStudent.klass,
        section: "A",
        house: "Phoenix",
        color: "#0f766e",
        attendance: 100,
        gpa: 0,
        active: true,
        promoted: false,
      },
      ...r,
    ]);
    setAddOpen(false);
    toast(`${newStudent.name} added to ${newStudent.klass} (demo)`);
    setNewStudent({ name: "", klass: "Grade 9", parent: "", phone: "" });
  };

  return (
    <div className="space-y-6">
      {/* Student management */}
      <Panel
        id="students"
        title={t("Student management") + ` · ${roster.filter((s) => s.active).length}`}
        action={
          <div className="flex items-center gap-2">
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search students…" className="h-9 rounded-full border border-navy-900/12 bg-white px-4 text-sm outline-none focus:border-mint" />
            <Button size="sm" onClick={() => setAddOpen(true)}><Icon.Plus className="h-4 w-4" /> Add Student</Button>
          </div>
        }
      >
        <Table
          head={["Student", "Grade", "Section", "House", "Attendance", "GPA", "Actions"]}
          rows={filtered.map((s) => [
            <span key="n" className="flex items-center gap-2 font-medium text-navy-950">
              <Avatar name={s.name} tone={s.color} size="sm" /> {s.name}
              {s.promoted && <Tag tone="mint">Promoted</Tag>}
            </span>,
            <span key="g" className="text-slate-600">{s.grade}</span>,
            <span key="se" className="text-slate-600">{s.section}</span>,
            <span key="h" className="text-slate-500">{s.house}</span>,
            <div key="at" className="flex items-center gap-2"><Progress value={s.attendance} className="w-16" /><span className="text-xs font-medium">{s.attendance}%</span></div>,
            <span key="gpa" className="font-semibold text-navy-950">{s.gpa || "—"}</span>,
            <div key="x" className="flex gap-1">
              <button onClick={() => setViewing(s.id)} title="View profile" className="rounded-md bg-cream p-1.5 text-slate-500 hover:text-mint"><Icon.Eye className="h-3.5 w-3.5" /></button>
              <button onClick={() => { setRoster((r) => r.map((x) => x.id === s.id ? { ...x, promoted: true, grade: s.grade.replace("Grade ", "Grade ") } : x)); toast(`${s.name} promoted to next grade`); }} title="Promote" className="rounded-md bg-cream p-1.5 text-slate-500 hover:text-mint"><Icon.TrendingUp className="h-3.5 w-3.5" /></button>
              <button onClick={() => toast(`${s.name} transferred — move to another class (demo)`)} title="Transfer" className="rounded-md bg-cream p-1.5 text-slate-500 hover:text-mint"><Icon.ArrowUpRight className="h-3.5 w-3.5" /></button>
              <button onClick={() => { setRoster((r) => r.map((x) => x.id === s.id ? { ...x, active: false } : x)); toast(`${s.name} deactivated`); }} title="Deactivate" className="rounded-md bg-cream p-1.5 text-slate-500 hover:text-red-500"><Icon.X className="h-3.5 w-3.5" /></button>
            </div>,
          ])}
        />
      </Panel>

      {/* Student profile drawer */}
      {view && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-navy-950/50 p-4 backdrop-blur-sm" onClick={() => setViewing(null)}>
          <div className="animate-scale-in w-full max-w-lg rounded-3xl bg-white p-6" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-xl font-semibold text-navy-950">Student Profile</h3>
              <button onClick={() => setViewing(null)} className="text-slate-400 hover:text-navy-950"><Icon.X className="h-5 w-5" /></button>
            </div>
            <div className="mt-4 flex items-center gap-4 rounded-2xl bg-ivory p-4">
              <Avatar name={view.name} tone={view.color} size="lg" />
              <div>
                <p className="font-semibold text-navy-950">{view.name}</p>
                <p className="text-sm text-slate-500">{view.grade} · Section {view.section} · Roll {studentProfile.roll}</p>
                <p className="text-xs text-slate-400">{studentProfile.id}</p>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
              {[
                ["Student ID", studentProfile.id],
                ["Admission Date", formatDate(studentProfile.admissionDate)],
                ["Blood Group", studentProfile.bloodGroup],
                ["Phone", studentProfile.phone],
              ].map(([l, v]) => (
                <div key={l} className="rounded-lg bg-cream px-3 py-2">
                  <p className="text-[10px] uppercase text-slate-400">{l}</p>
                  <p className="font-medium text-navy-950">{v}</p>
                </div>
              ))}
              <div className="col-span-2 rounded-lg bg-cream px-3 py-2">
                <p className="text-[10px] uppercase text-slate-400">Address</p>
                <p className="font-medium text-navy-950">{studentProfile.address}</p>
              </div>
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2 text-center">
              <div className="rounded-lg bg-mint-soft px-3 py-2"><p className="text-sm font-semibold text-mint">{view.attendance}%</p><p className="text-[10px] text-slate-500">Attendance</p></div>
              <div className="rounded-lg bg-cream px-3 py-2"><p className="text-sm font-semibold text-navy-950">Paid</p><p className="text-[10px] text-slate-500">Fees</p></div>
              <div className="rounded-lg bg-cream px-3 py-2"><p className="text-sm font-semibold text-navy-950">{view.gpa || "—"}</p><p className="text-[10px] text-slate-500">GPA</p></div>
            </div>
            <p className="mt-4 text-[11px] text-slate-400">Full record — homework, results, fees and documents — available in the student portal. Fictional demo data.</p>
          </div>
        </div>
      )}

      {/* Add student modal */}
      {addOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-navy-950/50 p-4 backdrop-blur-sm" onClick={() => setAddOpen(false)}>
          <div className="animate-scale-in w-full max-w-md rounded-3xl bg-white p-6" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-xl font-semibold text-navy-950">Add Student</h3>
              <button onClick={() => setAddOpen(false)} className="text-slate-400 hover:text-navy-950"><Icon.X className="h-5 w-5" /></button>
            </div>
            <div className="mt-4 space-y-3">
              <label className="block"><span className="mb-1 block text-sm font-medium text-navy-950">Full name</span>
                <input value={newStudent.name} onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })} placeholder="e.g. Hina Shahid" className="w-full rounded-xl border border-navy-900/12 px-4 py-2.5 text-sm outline-none focus:border-mint" />
              </label>
              <label className="block"><span className="mb-1 block text-sm font-medium text-navy-950">Class</span>
                <select value={newStudent.klass} onChange={(e) => setNewStudent({ ...newStudent, klass: e.target.value })} className="w-full rounded-xl border border-navy-900/12 px-4 py-2.5 text-sm outline-none focus:border-mint">
                  {["Grade 7", "Grade 8", "Grade 9", "Grade 10", "Grade 11", "Grade 12"].map((c) => <option key={c}>{c}</option>)}
                </select>
              </label>
              <div className="grid grid-cols-2 gap-3">
                <label className="block"><span className="mb-1 block text-sm font-medium text-navy-950">Parent name</span>
                  <input value={newStudent.parent} onChange={(e) => setNewStudent({ ...newStudent, parent: e.target.value })} placeholder="Parent" className="w-full rounded-xl border border-navy-900/12 px-4 py-2.5 text-sm outline-none focus:border-mint" />
                </label>
                <label className="block"><span className="mb-1 block text-sm font-medium text-navy-950">Phone</span>
                  <input value={newStudent.phone} onChange={(e) => setNewStudent({ ...newStudent, phone: e.target.value })} placeholder="+92 3xx xxxxxxx" className="w-full rounded-xl border border-navy-900/12 px-4 py-2.5 text-sm outline-none focus:border-mint" />
                </label>
              </div>
            </div>
            <div className="mt-5 flex gap-3">
              <Button onClick={addStudent} icon>Save student</Button>
              <Button variant="ghost" onClick={() => setAddOpen(false)}>Cancel</Button>
            </div>
          </div>
        </div>
      )}

      {/* Guardians */}
      <Panel title={t("Parents") + " / Guardians"}>
        <Table
          head={["Guardian", "Phone", "WhatsApp", "Children", "Outstanding Fees"]}
          rows={guardians.map((g) => [
            <div key="n">
              <p className="font-medium text-navy-950">{g.name}</p>
              <p className="text-[11px] text-slate-400">{g.relation} · {g.email}</p>
            </div>,
            <span key="p" className="text-slate-600">{g.phone}</span>,
            <span key="w" className="flex items-center gap-1 text-xs text-[#25D366]"><Icon.Send className="h-3 w-3" /> {g.whatsapp}</span>,
            <span key="c" className="text-slate-600">{g.children.join(", ")}</span>,
            <span key="o" className="font-semibold" style={{ color: g.outstanding ? "#e11d48" : "#0f766e" }}>
              {g.outstanding ? formatCurrency(g.outstanding) : "Cleared"}
            </span>,
          ])}
        />
      </Panel>

      {/* HR & Payroll */}
      <Panel id="hr" title="HR & Payroll" action={<Button size="sm" variant="outline" onClick={() => toast("March payroll run complete — 85 slips generated (demo)")}><Icon.Wallet className="h-4 w-4" />Run Payroll</Button>}>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          <KPI icon="Users" label="Employees" value="85" tone="#16304c" />
          <KPI icon="Calendar" label="On leave today" value="3" tone="#b8863b" />
          <KPI icon="Wallet" label="Monthly payroll" value="PKR 14.2M" tone="#0f766e" />
          <KPI icon="CheckCircle" label="Payroll status" value="March ✓" tone="#2b527a" />
        </div>
        <div className="mt-5">
          <Table
            head={["Employee", "Dept", "Phone", "Joining", "Basic", "Net Salary", "Slip"]}
            rows={hrEmployees.map((e) => {
              const net = e.basic + e.allowance - e.deduction;
              return [
                <div key="n"><p className="font-medium text-navy-950">{e.name}</p><p className="text-[11px] text-slate-400">{e.id} · Leave: {e.leave}</p></div>,
                <span key="d" className="text-slate-600">{e.dept}</span>,
                <span key="p" className="text-xs text-slate-500">{e.phone}</span>,
                <span key="j" className="text-xs text-slate-500">{formatDate(e.join)}</span>,
                <span key="b" className="text-slate-600">{formatCurrency(e.basic)}</span>,
                <span key="n" className="font-semibold text-navy-950">{formatCurrency(net)}</span>,
                <button key="s" onClick={() => setSlipFor(e)} className="text-mint"><Icon.FileText className="h-4 w-4" /></button>,
              ];
            })}
          />
        </div>
      </Panel>

      {/* Salary slip modal */}
      {slipFor && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-navy-950/50 p-4 backdrop-blur-sm" onClick={() => setSlipFor(null)}>
          <div className="animate-scale-in w-full max-w-md rounded-3xl bg-white p-6" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-xl font-semibold text-navy-950">Salary Slip · March 2026</h3>
              <button onClick={() => setSlipFor(null)} className="text-slate-400 hover:text-navy-950"><Icon.X className="h-5 w-5" /></button>
            </div>
            <div className="mt-4 space-y-2 rounded-xl bg-cream p-4 text-sm">
              <div className="flex justify-between"><span className="text-slate-500">Employee</span><span className="font-medium text-navy-950">{slipFor.name} ({slipFor.id})</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Department</span><span className="font-medium text-navy-950">{slipFor.dept}</span></div>
              <div className="flex justify-between border-t border-navy-900/10 pt-2"><span className="text-slate-500">Basic Salary</span><span className="font-medium text-navy-950">{formatCurrency(slipFor.basic)}</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Allowances</span><span className="font-medium text-mint">+ {formatCurrency(slipFor.allowance)}</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Deductions</span><span className="font-medium text-red-500">− {formatCurrency(slipFor.deduction)}</span></div>
              <div className="flex justify-between border-t border-navy-900/10 pt-2"><span className="font-semibold text-navy-950">Net Salary</span><span className="font-semibold text-navy-950">{formatCurrency(slipFor.basic + slipFor.allowance - slipFor.deduction)}</span></div>
            </div>
            <div className="mt-4 flex gap-3">
              <Button onClick={() => { window.print(); }} icon>Print Slip</Button>
              <Button variant="ghost" onClick={() => setSlipFor(null)}>Close</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
