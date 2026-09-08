"use client";

import { useState } from "react";
import { applicantData } from "@/lib/data";
import { toast } from "@/components/portal/Toast";
import { useI18n } from "@/lib/i18n";
import { Panel, Tag, Avatar, Table } from "@/components/portal/blocks";
import { Button, Progress } from "@/components/ui";
import { Icon } from "@/components/icons";
import { cn, formatDate } from "@/lib/utils";

const STATUSES = ["New", "Under Review", "Test Scheduled", "Interview Scheduled", "Approved", "Rejected", "Enrolled"] as const;
type Status = (typeof STATUSES)[number];

const statusTone: Record<Status, "neutral" | "navy" | "gold" | "mint" | "red"> = {
  New: "neutral",
  "Under Review": "navy",
  "Test Scheduled": "gold",
  "Interview Scheduled": "gold",
  Approved: "mint",
  Rejected: "red",
  Enrolled: "mint",
};

export default function AdmissionsCrm() {
  const { t } = useI18n();
  const [rows, setRows] = useState(
    applicantData.map((a) => ({ ...a, status: a.status === "Under Review" ? "Under Review" : a.status, notes: "" }))
  );
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(rows[0].id);
  const [note, setNote] = useState("");

  const current = rows.find((r) => r.id === selected)!;
  const statusIdx = STATUSES.indexOf(current.status as Status);
  const filtered = rows.filter((r) => filter === "All" || r.status === filter);

  const setStatus = (s: Status) => {
    setRows((rs) => rs.map((r) => (r.id === selected ? { ...r, status: s } : r)));
    toast(`Status updated → ${s}`);
  };

  const saveNote = () => {
    if (!note.trim()) return;
    setRows((rs) => rs.map((r) => (r.id === selected ? { ...r, notes: (r.notes ? r.notes + "\n" : "") + note } : r)));
    setNote("");
    toast("Note added to application");
  };

  return (
    <Panel
      id="admissions"
      title={t("Admissions pipeline") + " (CRM)"}
      action={
        <div className="no-scrollbar flex gap-1.5 overflow-x-auto">
          {["All", ...STATUSES].map((f) => (
            <button key={f} onClick={() => setFilter(f)} className={cn("whitespace-nowrap rounded-full px-3 py-1 text-xs font-medium transition", filter === f ? "bg-navy-900 text-white" : "bg-cream text-slate-600 hover:bg-navy-900/10")}>{f}</button>
          ))}
        </div>
      }
    >
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Table
            head={["Applicant", "Application ID", "Programme", "Received", "Status", ""]}
            rows={filtered.map((a) => [
              <span key="n" className="flex items-center gap-2 font-medium text-navy-950"><Avatar name={a.name} size="sm" tone="#2b527a" /> {a.name}</span>,
              <span key="id" className="font-mono text-xs text-slate-500">{a.id}</span>,
              <span key="p" className="text-slate-600">{a.program}</span>,
              <span key="d" className="text-slate-500">{formatDate(a.date)}</span>,
              <Tag key="s" tone={statusTone[a.status as Status] ?? "neutral"}>{a.status}</Tag>,
              <button key="a" onClick={() => setSelected(a.id)} className={cn("text-xs font-medium", selected === a.id ? "text-mint" : "text-slate-400 hover:text-mint")}>
                {selected === a.id ? "Selected ✓" : "Open"}
              </button>,
            ])}
          />
        </div>

        {/* Detail drawer */}
        <div className="rounded-2xl border border-navy-900/8 bg-ivory p-5">
          <div className="flex items-center gap-3">
            <Avatar name={current.name} tone="#2b527a" size="lg" />
            <div>
              <p className="font-semibold text-navy-950">{current.name}</p>
              <p className="text-xs text-slate-500">{current.id} · {current.program}</p>
              <p className="text-xs text-slate-400">Received {formatDate(current.date)}</p>
            </div>
          </div>

          <p className="mt-4 text-[10px] font-semibold uppercase tracking-widest text-slate-400">Pipeline status</p>
          <div className="mt-2 flex items-center gap-2">
            <Progress value={((statusIdx + 1) / STATUSES.length) * 100} className="flex-1" tone={current.status === "Rejected" ? "navy" : "mint"} />
            <Tag tone={statusTone[current.status as Status] ?? "neutral"}>{current.status}</Tag>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-1.5">
            {STATUSES.map((s) => (
              <button
                key={s}
                onClick={() => setStatus(s)}
                className={cn(
                  "rounded-lg border px-2 py-1.5 text-[11px] font-medium transition",
                  current.status === s ? "border-navy-900 bg-navy-900 text-white" : "border-navy-900/10 bg-white text-slate-600 hover:border-navy-900/40"
                )}
              >
                {s}
              </button>
            ))}
          </div>

          <div className="mt-4 grid gap-2">
            <Button size="sm" variant="outline" onClick={() => toast("Entry test scheduled — 18 Mar, 10:00 (demo)")}>
              <Icon.Calendar className="h-4 w-4" /> Schedule test
            </Button>
            <Button size="sm" variant="outline" onClick={() => toast("Interview scheduled — 19 Mar, 11:00 (demo)")}>
              <Icon.Users className="h-4 w-4" /> Schedule interview
            </Button>
            <Button size="sm" onClick={() => { setStatus("Enrolled"); toast(`${current.name} converted to student · ID MA-2026-1${Math.floor(100 + Math.random() * 899)}`); }}>
              <Icon.GraduationCap className="h-4 w-4" /> Convert to student
            </Button>
          </div>

          <p className="mt-5 text-[10px] font-semibold uppercase tracking-widest text-slate-400">Notes</p>
          {current.notes && <pre className="mt-1 whitespace-pre-wrap rounded-lg bg-white p-3 text-xs text-slate-600">{current.notes}</pre>}
          <div className="mt-2 flex gap-2">
            <input
              value={note}
              onChange={(e) => setNote(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && saveNote()}
              placeholder="Add a note…"
              className="flex-1 rounded-lg border border-navy-900/12 bg-white px-3 py-2 text-xs outline-none focus:border-mint"
            />
            <Button size="sm" onClick={saveNote}>Add</Button>
          </div>
        </div>
      </div>
    </Panel>
  );
}
