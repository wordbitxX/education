"use client";

import { useState } from "react";
import { reportList, rolesMatrix, onlineClasses, paymentMethods, brand } from "@/lib/data";
import { toast } from "@/components/portal/Toast";
import { Panel, Tag } from "@/components/portal/blocks";
import { Button } from "@/components/ui";
import { Icon } from "@/components/icons";

const aiQuestions = [
  "Which classes have low attendance?",
  "Show fee defaulters.",
  "Which subjects have declining results?",
  "Summarize this month's school performance.",
];

const aiAnswers: Record<string, string> = {
  "Which classes have low attendance?":
    "Grade 9-B (92%), Grade 8-C (92%) and Grade 10-B (96%) are the lowest this month. Grade 9-B has dropped 3% since January — mostly absences on Mondays. Suggested action: send a batch reminder to parents before Friday.",
  "Show fee defaulters.":
    "4 families are currently overdue: Emaan Sheikh (PKR 72,000 — due Jan 31), Bilal Aslam (PKR 46,500 — due Feb 15), Daniyal Qureshi (PKR 25,000) and Hamza Malik (PKR 18,500). Total outstanding: PKR 162,000. I can queue WhatsApp reminders for all four parents.",
  "Which subjects have declining results?":
    "Chemistry (Grade 9, −4% vs Term 1) and History (Grade 10, −3%) are trending down, while Computer Science and English Literature continue to improve. Chemistry's decline tracks with the new practical unit — a revision session may help.",
  "Summarize this month's school performance.":
    "February summary: attendance 94.6% (best in 4 months), fee collection 95% of billed, 23 active admissions (6 ready for test), 0 staff attrition, 2 exams scheduled for March. Overall: a strong month — the only attention item is Grade 9-B attendance.",
};

export default function System() {
  const [annTitle, setAnnTitle] = useState("");
  const [annAudience, setAnnAudience] = useState("All");
  const [annScheduled, setAnnScheduled] = useState("");
  const [annList, setAnnList] = useState<{ title: string; audience: string; when: string }[]>([]);
  const [channels, setChannels] = useState({ push: true, sms: true, whatsapp: true, email: false });
  const [school, setSchool] = useState({
    name: brand.name,
    tagline: "Shaping Bright Minds for a Better Future",
    session: "2025–26",
    phone: "+92 42 111 000 000",
    whatsapp: "+92 300 111 0000",
    address: "Lahore Campus · Main Boulevard, Lahore",
    grading: "A+ / A / B / C / D / F",
  });
  const [aiQ, setAiQ] = useState<string | null>(null);

  const publish = () => {
    if (!annTitle.trim()) return;
    setAnnList((l) => [{ title: annTitle, audience: annAudience, when: annScheduled || "Now" }, ...l]);
    setAnnTitle("");
    setAnnScheduled("");
    toast(`Announcement published to ${annAudience} via ${Object.entries(channels).filter(([, v]) => v).map(([k]) => k.toUpperCase()).join(", ")}`);
  };

  return (
    <div className="space-y-6">
      {/* Announcements composer */}
      <Panel id="communication" title={undefined} className="[&>h2]:hidden">
        <div className="mb-4">
          <h2 className="font-semibold text-navy-950">Announcements, Circulars & Notices</h2>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <label className="block"><span className="mb-1.5 block text-sm font-medium text-navy-950">Title</span>
              <input value={annTitle} onChange={(e) => setAnnTitle(e.target.value)} placeholder="e.g. Eid holiday — 19 March" className="w-full rounded-xl border border-navy-900/12 bg-white px-4 py-2.5 text-sm outline-none focus:border-mint" />
            </label>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <label className="block"><span className="mb-1.5 block text-sm font-medium text-navy-950">Audience</span>
                <select value={annAudience} onChange={(e) => setAnnAudience(e.target.value)} className="w-full rounded-xl border border-navy-900/12 bg-white px-4 py-2.5 text-sm outline-none focus:border-mint">
                  {["All", "Teachers", "Students", "Parents", "Class: Grade 9", "Section: 9-A"].map((a) => <option key={a}>{a}</option>)}
                </select>
              </label>
              <label className="block"><span className="mb-1.5 block text-sm font-medium text-navy-950">Schedule (optional)</span>
                <input type="datetime-local" value={annScheduled} onChange={(e) => setAnnScheduled(e.target.value)} className="w-full rounded-xl border border-navy-900/12 bg-white px-4 py-2.5 text-sm outline-none focus:border-mint" />
              </label>
            </div>
          </div>
          <div>
            <p className="mb-2 text-sm font-medium text-navy-950">Channels</p>
            <div className="space-y-2">
              {(["push", "sms", "whatsapp", "email"] as const).map((c) => (
                <label key={c} className="flex items-center justify-between rounded-xl border border-navy-900/8 bg-white px-4 py-2.5">
                  <span className="text-sm font-medium text-slate-700">{c === "push" ? "Push Notification" : c === "sms" ? "SMS" : c === "whatsapp" ? "WhatsApp" : "Email"}</span>
                  <input type="checkbox" checked={channels[c]} onChange={() => setChannels((ch) => ({ ...ch, [c]: !ch[c] }))} className="h-4 w-4 accent-[#0f766e]" />
                </label>
              ))}
            </div>
            <Button onClick={publish} className="mt-3 w-full" icon>Publish announcement</Button>
            <p className="mt-2 text-[11px] text-slate-400">SMS/WhatsApp gateways are integration-ready (Settings → Integrations).</p>
          </div>
        </div>
        {annList.length > 0 && (
          <div className="mt-4 space-y-2">
            {annList.map((a, i) => (
              <div key={i} className="flex items-center justify-between rounded-xl bg-cream px-4 py-2.5">
                <p className="text-sm font-medium text-navy-950">{a.title}</p>
                <div className="flex gap-1.5"><Tag tone="navy">{a.audience}</Tag><Tag tone="mint">{a.when}</Tag></div>
              </div>
            ))}
          </div>
        )}
      </Panel>

      {/* AI Insights */}
      <Panel title="AI Admin Insights" action={<Tag tone="gold">Demo AI — API-ready</Tag>}>
        <div className="flex flex-wrap gap-2">
          {aiQuestions.map((q) => (
            <button key={q} onClick={() => setAiQ(q)} className={aiQ === q ? "rounded-full bg-navy-900 px-4 py-2 text-xs font-medium text-white" : "rounded-full bg-cream px-4 py-2 text-xs font-medium text-slate-600 hover:bg-navy-900/10"}>
              {q}
            </button>
          ))}
        </div>
        {aiQ && (
          <div className="animate-fade-up mt-4 flex gap-3 rounded-2xl bg-navy-950 p-5 text-sm text-slate-200">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-teal-500/20 text-teal-300"><Icon.Robot className="h-4 w-4" /></span>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-teal-300">Insight</p>
              <p className="mt-1 leading-relaxed">{aiAnswers[aiQ]}</p>
            </div>
          </div>
        )}
        {!aiQ && <p className="mt-4 text-sm text-slate-400">Ask a question above — in production this connects to a language model grounded in your live school data.</p>}
      </Panel>

      {/* Online classes */}
      <Panel title="Online Classes" action={<Tag tone="mint">Meeting platform · integration-ready</Tag>}>
        <div className="grid gap-3 md:grid-cols-3">
          {onlineClasses.map((c) => (
            <div key={c.join} className="rounded-2xl border border-navy-900/8 bg-ivory p-4">
              <div className="flex items-center justify-between">
                <Tag tone="navy">{c.klass}</Tag>
                <span className="flex items-center gap-1.5 text-[11px] font-medium text-red-500"><span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-red-500" /> Live {c.date}</span>
              </div>
              <p className="mt-2 text-sm font-semibold text-navy-950">{c.title}</p>
              <p className="text-xs text-slate-500">{c.teacher} · {c.time}</p>
              <Button size="sm" className="mt-3 w-full" onClick={() => toast(`Joining via your video platform (integration-ready)`) } icon>
                Join Class
              </Button>
            </div>
          ))}
        </div>
      </Panel>

      {/* Reports center */}
      <Panel id="reports" title="Reports Center" action={<Tag tone="navy">PDF / Excel export · integration-ready</Tag>}>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
          {reportList.map((r) => (
            <div key={r} className="flex items-center justify-between rounded-xl border border-navy-900/8 bg-white p-3">
              <span className="flex items-center gap-2 text-xs font-medium text-navy-950"><Icon.FileText className="h-4 w-4 text-mint" /> {r}</span>
              <div className="flex gap-1">
                <button onClick={() => toast(`${r} — PDF export (integration-ready)`)} className="rounded-md bg-cream px-1.5 py-1 text-[10px] font-semibold text-slate-500 hover:text-mint">PDF</button>
                <button onClick={() => toast(`${r} — Excel export (integration-ready)`)} className="rounded-md bg-cream px-1.5 py-1 text-[10px] font-semibold text-slate-500 hover:text-mint">XLS</button>
              </div>
            </div>
          ))}
        </div>
      </Panel>

      {/* Settings */}
      <Panel id="settings" title="Settings" action={<Button size="sm" onClick={() => toast("Settings saved (demo)")} icon>Save all</Button>}>
        <div className="grid gap-6 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-slate-400">School profile</p>
            <div className="space-y-3">
              <label className="block"><span className="mb-1 block text-xs font-medium text-slate-500">School name</span>
                <input value={school.name} onChange={(e) => setSchool({ ...school, name: e.target.value })} className="w-full rounded-xl border border-navy-900/12 bg-white px-3.5 py-2.5 text-sm outline-none focus:border-mint" />
              </label>
              <label className="block"><span className="mb-1 block text-xs font-medium text-slate-500">Tagline</span>
                <input value={school.tagline} onChange={(e) => setSchool({ ...school, tagline: e.target.value })} className="w-full rounded-xl border border-navy-900/12 bg-white px-3.5 py-2.5 text-sm outline-none focus:border-mint" />
              </label>
              <div className="grid grid-cols-2 gap-3">
                <label className="block"><span className="mb-1 block text-xs font-medium text-slate-500">Academic session</span>
                  <select value={school.session} onChange={(e) => setSchool({ ...school, session: e.target.value })} className="w-full rounded-xl border border-navy-900/12 bg-white px-3.5 py-2.5 text-sm outline-none focus:border-mint">
                    <option>2025–26</option><option>2026–27</option>
                  </select>
                </label>
                <label className="block"><span className="mb-1 block text-xs font-medium text-slate-500">Grading system</span>
                  <select value={school.grading} onChange={(e) => setSchool({ ...school, grading: e.target.value })} className="w-full rounded-xl border border-navy-900/12 bg-white px-3.5 py-2.5 text-sm outline-none focus:border-mint">
                    <option>A+ / A / B / C / D / F</option>
                    <option>A / B / C / D / E / F</option>
                    <option>1–5 (FBISE)</option>
                    <option>Percentage</option>
                  </select>
                </label>
              </div>
              <label className="block"><span className="mb-1 block text-xs font-medium text-slate-500">Phone</span>
                <input value={school.phone} onChange={(e) => setSchool({ ...school, phone: e.target.value })} className="w-full rounded-xl border border-navy-900/12 bg-white px-3.5 py-2.5 text-sm outline-none focus:border-mint" />
              </label>
              <label className="block"><span className="mb-1 block text-xs font-medium text-slate-500">WhatsApp</span>
                <input value={school.whatsapp} onChange={(e) => setSchool({ ...school, whatsapp: e.target.value })} className="w-full rounded-xl border border-navy-900/12 bg-white px-3.5 py-2.5 text-sm outline-none focus:border-mint" />
              </label>
              <label className="block"><span className="mb-1 block text-xs font-medium text-slate-500">Address</span>
                <input value={school.address} onChange={(e) => setSchool({ ...school, address: e.target.value })} className="w-full rounded-xl border border-navy-900/12 bg-white px-3.5 py-2.5 text-sm outline-none focus:border-mint" />
              </label>
            </div>
          </div>
          <div>
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-slate-400">Roles & permissions (RBAC)</p>
            <div className="overflow-hidden rounded-xl border border-navy-900/8">
              {rolesMatrix.map((r, i) => (
                <div key={r.role} className={`flex items-center justify-between px-4 py-2.5 text-sm ${i % 2 ? "bg-ivory" : "bg-white"}`}>
                  <span className="font-medium text-navy-950">{r.role}</span>
                  <span className="text-right text-xs text-slate-500">{r.modules}</span>
                </div>
              ))}
            </div>
            <p className="mb-3 mt-6 text-[10px] font-semibold uppercase tracking-widest text-slate-400">Payment methods</p>
            <div className="flex flex-wrap gap-2">
              {paymentMethods.map((m) => (
                <span key={m.id} className="flex items-center gap-2 rounded-full border border-navy-900/10 bg-white px-3 py-1.5 text-xs">
                  <span className="font-medium text-navy-950">{m.name}</span>
                  <Tag tone={m.ready ? "mint" : "gold"}>{m.ready ? "Live" : "Integration-ready"}</Tag>
                </span>
              ))}
            </div>
            <p className="mb-3 mt-6 text-[10px] font-semibold uppercase tracking-widest text-slate-400">Security</p>
            <div className="grid grid-cols-2 gap-2">
              {["Role-based access", "Secure authentication", "Data backup", "Audit logs", "Permission management", "School-level data isolation"].map((s) => (
                <span key={s} className="flex items-center gap-2 rounded-lg bg-cream px-3 py-2 text-xs font-medium text-slate-600"><Icon.ShieldCheck className="h-3.5 w-3.5 shrink-0 text-mint" /> {s}</span>
              ))}
            </div>
          </div>
        </div>
      </Panel>
    </div>
  );
}
