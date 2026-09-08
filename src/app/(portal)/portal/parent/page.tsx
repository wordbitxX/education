"use client";

import { useState } from "react";
import PortalShell from "@/components/portal/PortalShell";
import { Panel, KPI, Tag, Avatar } from "@/components/portal/blocks";
import { toast } from "@/components/portal/Toast";
import { useI18n } from "@/lib/i18n";
import { Donut, Button } from "@/components/ui";
import { Icon } from "@/components/icons";
import { demoStudents, invoices, feeSummary, assignments, exams, attendanceHistory, announcements, events } from "@/lib/data";
import { cn, formatCurrency, formatDate } from "@/lib/utils";

type ThreadMsg = { from: string; msg: string; time: string };

const initialThread: ThreadMsg[] = [
  { from: "Daniel Carter", msg: "Great progress on quadratics this week — please keep up the practice.", time: "09:12" },
  { from: "Emma Roberts", msg: "Your essay received A. Lovely voice in the final paragraph.", time: "Yesterday" },
  { from: "Noah Bennett", msg: "Art festival photo consent needed by Friday.", time: "Mon" },
];

export default function ParentPortal() {
  const { t } = useI18n();
  const [child, setChild] = useState(0);
  const [paid, setPaid] = useState(false);
  const [payOpen, setPayOpen] = useState(false);
  const [payDone, setPayDone] = useState(false);
  const [thread, setThread] = useState<ThreadMsg[]>(initialThread);
  const [composeTo, setComposeTo] = useState<string>("Daniel Carter");
  const [draft, setDraft] = useState("");
  const [payMethod, setPayMethod] = useState("bank");
  const current = demoStudents[child];
  const outstanding = feeSummary.outstanding;

  const sendMessage = () => {
    if (!draft.trim()) return;
    setThread((th) => [{ from: "You", msg: draft.trim(), time: "Just now" }, ...th]);
    setDraft("");
    setComposeTo("");
    toast("Message sent to " + composeTo);
  };

  return (
    <PortalShell portal="parent" user="Ayesha Khan" role="Parent of 3 students">
      {/* Child switcher */}
      <div className="mb-6 rounded-2xl bg-navy-950 p-6 text-white">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-teal-300">{t("Today with")}</p>
            <h1 className="font-serif text-2xl font-semibold">{current.name}</h1>
            <p className="text-sm text-slate-300">{current.grade} · Section {current.section} · House {current.house}</p>
          </div>
          <div className="flex gap-2">
            {demoStudents.map((s, i) => (
              <button
                key={s.id}
                onClick={() => { setChild(i); toast("Switched to " + s.name); }}
                className={cn(
                  "flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm transition",
                  child === i ? "border-teal-300 bg-teal-500/20 text-white" : "border-white/20 text-slate-300 hover:border-white/50"
                )}
              >
                <Avatar name={s.name} tone={s.color} size="sm" /> {s.name.split(" ")[0]}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* KPI */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4" id="overview">
        <KPI icon="CheckCircle" label={t("Attendance")} value={`${current.attendance}%`} tone="#2b527a" sub="this term" />
        <KPI icon="Clipboard" label={t("Homework")} value={assignments.filter((a) => a.status === "Pending").length} tone="#b8863b" sub="due this week" />
        <KPI icon="Trophy" label={t("Upcoming exams")} value={exams.length} tone="#16304c" sub="next 2 weeks" />
        <KPI icon="Wallet" label={t("Fees outstanding")} value={paid ? formatCurrency(0) : formatCurrency(outstanding)} tone="#0f766e" sub={paid ? "Paid today" : `due ${formatDate(feeSummary.nextDue)}`} />
      </div>

      {/* Fee summary + pay */}
      <div className="mt-6 grid gap-5 lg:grid-cols-3" id="fees">
        <Panel title={t("Fee summary")} className="lg:col-span-1">
          <div className="space-y-3">
            <Row l="Current fee" v={formatCurrency(feeSummary.current)} />
            <div className="flex items-center justify-between border-b border-navy-900/8 pb-3">
              <span className="text-sm text-slate-500">{t("Paid to date")}</span>
              <span className="font-medium text-mint">{formatCurrency(feeSummary.paid)}</span>
            </div>
            <Row l={t("Outstanding")} v={paid ? formatCurrency(0) : formatCurrency(feeSummary.outstanding)} strong />
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <Icon.Calendar className="h-3.5 w-3.5" /> Next invoice due {formatDate(feeSummary.nextDue)}
            </div>
            {feeSummary.discountApplied && (
              <div className="flex items-center gap-2 rounded-lg bg-gold-soft px-3 py-2 text-xs font-medium text-gold">
                <Icon.Star className="h-3.5 w-3.5" /> Sibling discount applied (concept)
              </div>
            )}
            <button
              onClick={() => { setPayOpen(true); setPayDone(false); }}
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-mint px-4 py-2.5 text-sm font-medium text-white transition hover:bg-[#0c6359]"
            >
              <Icon.CreditCard className="h-4 w-4" /> {paid ? t("View receipt") : t("Pay now")}
            </button>
          </div>
        </Panel>

        <Panel title={t("Invoices & receipts")} className="lg:col-span-2">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[540px] text-left text-sm">
              <thead>
                <tr className="border-b border-navy-900/8 text-xs uppercase text-slate-400">
                  <th className="px-3 py-3">Invoice</th>
                  <th className="px-3 py-3">Term</th>
                  <th className="px-3 py-3">Amount</th>
                  <th className="px-3 py-3">Status</th>
                  <th className="px-3 py-3"></th>
                </tr>
              </thead>
              <tbody>
                {invoices.map((inv) => (
                  <tr key={inv.id} className="border-b border-navy-900/5 hover:bg-navy-50/40">
                    <td className="px-3 py-3 font-medium text-navy-950">{inv.id}</td>
                    <td className="px-3 py-3 text-slate-600">{inv.term}</td>
                    <td className="px-3 py-3 font-medium text-navy-950">{formatCurrency(inv.amount)}</td>
                    <td className="px-3 py-3"><Tag tone={inv.status === "Paid" ? "mint" : "gold"}>{inv.status}</Tag></td>
                    <td className="px-3 py-3">
                      <button
                        onClick={() => toast(`Downloading receipt ${inv.id} (demo)`)}
                        className="text-slate-400 hover:text-mint"
                        aria-label="Download receipt"
                      >
                        <Icon.Download className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Panel>
      </div>

      {/* Children detail */}
      <div className="mt-6 grid gap-5 lg:grid-cols-3" id="children">
        <Panel title={t("Child profile")}>
          <div className="flex items-center gap-4">
            <Avatar name={current.name} tone={current.color} size="lg" />
            <div>
              <p className="font-semibold text-navy-950">{current.name}</p>
              <p className="text-sm text-slate-500">{current.grade} · {current.section}</p>
              <p className="text-xs text-slate-400">{current.house} house</p>
            </div>
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-cream p-3 text-center">
              <div className="text-lg font-semibold text-navy-950">{current.attendance}%</div>
              <div className="text-xs text-slate-500">{t("Attendance")}</div>
            </div>
            <div className="rounded-xl bg-cream p-3 text-center">
              <div className="text-lg font-semibold text-navy-950">{current.gpa}</div>
              <div className="text-xs text-slate-500">GPA</div>
            </div>
          </div>
        </Panel>
        <div className="lg:col-span-2">
          <div id="timetable" />
          <Panel title={t("Today & timetable")}>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2.5">
                {[
                  { t: "Mathematics", time: "08:00", r: "R-12" },
                  { t: "Physics", time: "08:50", r: "Lab 1" },
                  { t: "English", time: "09:40", r: "R-04" },
                ].map((c) => (
                  <div key={c.t} className="flex items-center justify-between rounded-lg border border-navy-900/8 p-3">
                    <div><p className="text-sm font-medium text-navy-950">{c.t}</p><p className="text-xs text-slate-500">{c.time} · {c.r}</p></div>
                    <Icon.ArrowUpRight className="h-4 w-4 text-slate-300" />
                  </div>
                ))}
              </div>
              <div className="space-y-2.5" id="homework">
                {assignments.slice(0, 3).map((a) => (
                  <div key={a.id} className="rounded-lg border border-navy-900/8 p-3">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-navy-950">{a.title}</p>
                      {a.status === "Pending" ? <Tag tone="gold">due {a.due.slice(8)}/{a.due.slice(5, 7)}</Tag> : <Tag tone={a.status === "Graded" ? "mint" : "navy"}>{a.status}</Tag>}
                    </div>
                    <p className="text-xs text-slate-500">{a.subject} · {a.teacher}</p>
                  </div>
                ))}
              </div>
            </div>
          </Panel>
          <div id="exams" className="mt-5 scroll-mt-24">
            <Panel title={t("Upcoming exams")}>
              <div className="grid gap-2.5 sm:grid-cols-2">
                {exams.slice(0, 4).map((e) => (
                  <div key={e.id} className="flex items-center justify-between rounded-lg border border-navy-900/8 p-3">
                    <div>
                      <p className="text-sm font-medium text-navy-950">{e.subject}</p>
                      <p className="text-xs text-slate-500">{e.date} · {e.time}</p>
                    </div>
                    <Tag tone="navy">{e.weight}</Tag>
                  </div>
                ))}
              </div>
            </Panel>
          </div>
        </div>
      </div>

      {/* Attendance + calendar */}
      <div className="mt-6 grid gap-5 lg:grid-cols-2" id="attendance">
        <Panel title={t("Attendance history")}>
          <div className="flex items-center gap-6">
            <Donut value={current.attendance} size={120} label="term" />
            <div className="flex-1 space-y-2">
              {attendanceHistory.slice(0, 5).map((r) => (
                <div key={r.date} className="flex items-center justify-between rounded-md bg-cream px-3 py-1.5 text-sm">
                  <span className="text-slate-500">{r.date}</span>
                  <Tag tone={r.status === "present" ? "mint" : r.status === "late" ? "gold" : r.status === "excused" ? "navy" : "red"}>{r.status}</Tag>
                </div>
              ))}
            </div>
          </div>
        </Panel>
        <Panel title={t("School calendar & events")} action={<Button size="sm" variant="ghost" onClick={() => toast(t("Open calendar") + " (demo)")}>{t("Open calendar")}</Button>}>
          <div className="space-y-2.5">
            {events.slice(0, 4).map((e) => (
              <div key={e.id} className="flex items-center justify-between rounded-xl border border-navy-900/8 p-3">
                <div>
                  <p className="text-sm font-medium text-navy-950">{e.title}</p>
                  <p className="text-xs text-slate-500">{e.date} · {e.time}</p>
                </div>
                <Tag tone="neutral">{e.category}</Tag>
              </div>
            ))}
          </div>
        </Panel>
      </div>

      {/* Messages + transport */}
      <div className="mt-6 grid gap-5 lg:grid-cols-2" id="messages">
        <Panel
          title={t("Teacher communication")}
          action={<Button size="sm" variant="outline" onClick={() => { setComposeTo("Daniel Carter"); setDraft(""); }}><Icon.Plus className="h-4 w-4" /> {t("Compose")}</Button>}
        >
          <div className="space-y-2.5">
            {thread.map((m, i) => (
              <div key={i} className="flex items-start gap-3 rounded-xl border border-navy-900/8 p-3">
                <Avatar name={m.from} size="sm" tone={m.from === "You" ? "#0f766e" : "#2b527a"} />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-navy-950">{m.from}</p>
                    <span className="text-[11px] text-slate-400">{m.time}</span>
                  </div>
                  <p className="text-sm text-slate-600">{m.msg}</p>
                </div>
              </div>
            ))}
          </div>
        </Panel>
        <Panel title={t("Transport status (concept)")}>
          <div className="flex items-center gap-4 rounded-xl bg-cream p-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-white"><Icon.Bus className="h-6 w-6" /></span>
            <div className="flex-1">
              <p className="font-medium text-navy-950">Route 3 · {current.name.split(" ")[0]}'s bus</p>
              <p className="text-xs text-slate-500">Estimated arrival 14:10 · On time</p>
            </div>
            <Tag tone="mint">On route</Tag>
          </div>
          <div className="mt-4 space-y-2.5">
            {[
              { l: "Pick-up", v: "07:10 · Garden Stop" },
              { l: "Drop-off", v: "14:35 · Lahore Campus" },
            ].map((x) => (
              <div key={x.l} className="flex items-center justify-between rounded-lg border border-navy-900/8 p-3">
                <span className="text-sm text-slate-500">{x.l}</span>
                <span className="text-sm font-medium text-navy-950">{x.v}</span>
              </div>
            ))}
          </div>
        </Panel>
      </div>

      {/* Announcements */}
      <div className="mt-6">
        <Panel title={t("Announcements & alerts")}>
          <div className="mb-3 flex items-start gap-3 rounded-xl border border-red-100 bg-red-50 p-4">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-red-500">
              <Icon.Alert className="h-4 w-4" />
            </span>
            <div className="flex-1">
              <p className="text-sm font-semibold text-red-700">Your child was marked absent today.</p>
              <p className="text-xs text-red-600">{current.name} · Grade 9, period 2 — sent via Push, SMS and WhatsApp.</p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                <span className="rounded-full bg-white px-2 py-0.5 text-[10px] font-medium text-red-600">Push ✓</span>
                <span className="rounded-full bg-white px-2 py-0.5 text-[10px] font-medium text-red-600">SMS · integration-ready</span>
                <span className="rounded-full bg-white px-2 py-0.5 text-[10px] font-medium text-red-600">WhatsApp · integration-ready</span>
              </div>
            </div>
          </div>
          <div className="space-y-2.5">
            {announcements.map((a) => (
              <div key={a.id} className="flex items-start gap-3 rounded-xl bg-cream p-3">
                <span className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${a.channel === "Alert" ? "bg-red-50 text-red-500" : "bg-white text-navy-600"}`}>
                  {a.channel === "Alert" ? <Icon.Alert className="h-4 w-4" /> : <Icon.Bell className="h-4 w-4" />}
                </span>
                <div className="flex-1">
                  <p className="text-sm font-medium text-navy-950">{a.title}</p>
                  <p className="text-xs text-slate-500">{a.body}</p>
                </div>
                <Tag tone="neutral">{a.audience}</Tag>
              </div>
            ))}
          </div>
        </Panel>
      </div>

      {/* Compose modal */}
      {composeTo && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-navy-950/50 p-4 backdrop-blur-sm" onClick={() => setComposeTo("")}>
          <div className="animate-scale-in w-full max-w-md rounded-3xl bg-white p-6" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-xl font-semibold text-navy-950">{t("Compose")}</h3>
              <button onClick={() => setComposeTo("")} className="text-slate-400 hover:text-navy-950"><Icon.X className="h-5 w-5" /></button>
            </div>
            <label className="mt-4 block">
              <span className="mb-1.5 block text-sm font-medium text-navy-950">To</span>
              <select value={composeTo} onChange={(e) => setComposeTo(e.target.value)} className="w-full rounded-xl border border-navy-900/12 px-4 py-3 text-sm outline-none focus:border-mint">
                <option>Daniel Carter</option>
                <option>Emma Roberts</option>
                <option>Sofia Martinez</option>
                <option>Noah Bennett</option>
              </select>
            </label>
            <label className="mt-3 block">
              <span className="mb-1.5 block text-sm font-medium text-navy-950">Message</span>
              <textarea
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                rows={4}
                placeholder="Write your message…"
                className="w-full rounded-xl border border-navy-900/12 px-4 py-3 text-sm outline-none focus:border-mint"
              />
            </label>
            <div className="mt-4 flex gap-3">
              <Button onClick={sendMessage} icon>Send</Button>
              <Button variant="ghost" onClick={() => setComposeTo("")}>Cancel</Button>
            </div>
          </div>
        </div>
      )}

      {/* Payment modal */}
      {payOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-navy-950/50 p-4 backdrop-blur-sm" onClick={() => setPayOpen(false)}>
          <div className="animate-scale-in w-full max-w-md rounded-3xl bg-white p-6" onClick={(e) => e.stopPropagation()}>
            {payDone ? (
              <div className="flex flex-col items-center gap-3 py-8 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-mint-soft"><Icon.CheckCircle className="h-9 w-9 text-mint" /></div>
                <h3 className="font-serif text-2xl font-semibold text-navy-950">Payment simulated</h3>
                <p className="text-sm text-slate-600">No real payment was processed. This is a demo checkout.</p>
                <div className="mt-2 w-full rounded-xl bg-cream p-4 text-left text-sm">
                  <Row l="Amount" v={formatCurrency(feeSummary.outstanding)} />
                  <Row l="Reference" v="SIM-2026-0048" />
                  <Row l="Status" v="Successful" />
                </div>
                <Button onClick={() => { setPayOpen(false); setPaid(true); toast("Invoice paid — receipt available"); }}>Done</Button>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-xl font-semibold text-navy-950">Mock checkout</h3>
                  <button onClick={() => setPayOpen(false)} className="text-slate-400 hover:text-navy-950"><Icon.X className="h-5 w-5" /></button>
                </div>
                <p className="mt-1 text-xs text-slate-400">Simulated flow — do not enter real card details.</p>
                <div className="mt-4 rounded-xl bg-cream p-4">
                  <Row l="Invoice" v="INV-2026-0151" />
                  <Row l="Amount due" v={formatCurrency(feeSummary.outstanding)} strong />
                </div>
                <p className="mt-4 mb-1.5 text-sm font-medium text-navy-950">Payment method</p>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    { id: "cash", label: "Cash" },
                    { id: "bank", label: "Bank Transfer" },
                    { id: "jazzcash", label: "JazzCash" },
                    { id: "easypaisa", label: "Easypaisa" },
                    { id: "card", label: "Card" },
                  ].map((m) => (
                    <button key={m.id} onClick={() => setPayMethod(m.id)} className={cn("rounded-full px-3 py-1.5 text-xs font-medium transition", payMethod === m.id ? "bg-navy-900 text-white" : "bg-cream text-slate-600 hover:bg-navy-900/10")}>
                      {m.label}
                    </button>
                  ))}
                </div>
                {payMethod === "card" ? (
                  <>
                    <label className="mt-3 block"><span className="mb-1.5 block text-sm font-medium text-navy-950">Card number (demo)</span>
                      <input placeholder="4242 4242 4242 4242" className="w-full rounded-xl border border-navy-900/12 px-4 py-3 text-sm outline-none focus:border-mint" />
                    </label>
                    <div className="mt-3 grid grid-cols-2 gap-3">
                      <label className="block"><span className="mb-1.5 block text-sm font-medium text-navy-950">Expiry</span><input placeholder="12 / 26" className="w-full rounded-xl border border-navy-900/12 px-4 py-3 text-sm outline-none focus:border-mint" /></label>
                      <label className="block"><span className="mb-1.5 block text-sm font-medium text-navy-950">CVC</span><input placeholder="123" className="w-full rounded-xl border border-navy-900/12 px-4 py-3 text-sm outline-none focus:border-mint" /></label>
                    </div>
                  </>
                ) : (
                  <div className="mt-3 rounded-xl bg-navy-50 p-3.5 text-xs leading-relaxed text-slate-600">
                    <span className="font-semibold text-navy-950">
                      {payMethod === "cash" ? "Pay at the campus counter with your challan." : payMethod === "bank" ? "Transfer to: MDB 0000 0000 000 0000, account in the school's name." : payMethod === "jazzcash" ? "Send to 0300-0000000 and share the transaction ID at the office." : "Send to 0301-0000000 and share the transaction ID at the office."}
                    </span>{" "}
                    Payment integration ready — live {payMethod} payment can be enabled in admin settings.
                  </div>
                )}
                <div className="mt-3 flex items-center gap-2 text-xs text-slate-400"><Icon.Shield className="h-4 w-4 text-mint" /> Simulated demo — no real payments are processed.</div>
                <button onClick={() => setPayDone(true)} className="mt-5 w-full rounded-xl bg-mint px-4 py-3 text-sm font-medium text-white transition hover:bg-[#0c6359]">
                  Pay {formatCurrency(feeSummary.outstanding)}
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </PortalShell>
  );
}

function Row({ l, v, strong }: { l: string; v: string; strong?: boolean }) {
  return (
    <div className="flex items-center justify-between border-b border-navy-900/8 py-2 last:border-0">
      <span className="text-sm text-slate-500">{l}</span>
      <span className={cn("text-sm", strong ? "font-semibold text-navy-950" : "font-medium text-navy-950")}>{v}</span>
    </div>
  );
}
