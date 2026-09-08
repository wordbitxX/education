"use client";

import { useState } from "react";
import { feeStructure, paymentMethods, feeDefaulters } from "@/lib/data";
import { toast } from "@/components/portal/Toast";
import { useI18n } from "@/lib/i18n";
import { Panel, Tag, Table } from "@/components/portal/blocks";
import { Button } from "@/components/ui";
import { Icon } from "@/components/icons";
import { formatCurrency, formatDate } from "@/lib/utils";

export default function Finance() {
  const { t } = useI18n();
  const [paidIds, setPaidIds] = useState<string[]>([]);
  const [challanOpen, setChallanOpen] = useState(false);
  const [method, setMethod] = useState("cash");

  const selectedMethod = paymentMethods.find((m) => m.id === method)!;
  const selectedDefaulter = feeDefaulters[0];

  return (
    <div id="fees" className="grid gap-5 lg:grid-cols-2">
      {/* Fee structure + payment methods */}
      <Panel title={t("Fees & invoices") + " · Fee structure"}>
        <Table
          head={["Head", "Amount (PKR)", "Cycle"]}
          rows={feeStructure.map((f) => [
            <span key="l" className="font-medium text-navy-950">{f.label}</span>,
            <span key="a" className="font-semibold text-navy-950">{formatCurrency(f.amount)}</span>,
            <Tag key="p" tone="neutral">{f.per}</Tag>,
          ])}
        />
        <div className="mt-5">
          <p className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-widest text-slate-400">
            Payment methods <span className="flex items-center gap-1 normal-case text-mint"><Icon.CheckCircle className="h-3.5 w-3.5" /> Payment integration ready</span>
          </p>
          <div className="mt-2 grid grid-cols-2 gap-2">
            {paymentMethods.map((m) => (
              <div key={m.id} className="flex items-center justify-between rounded-lg border border-navy-900/8 bg-white p-2.5">
                <div>
                  <p className="text-xs font-semibold text-navy-950">{m.name}</p>
                  <p className="text-[10px] text-slate-400">{m.desc}</p>
                </div>
                <Tag tone={m.ready ? "mint" : "gold"}>{m.ready ? "Live" : "Ready"}</Tag>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-3">
          {[
            { l: "Total Collected", v: "PKR 3.24M", c: "#0f766e" },
            { l: "Total Due", v: "PKR 486K", c: "#b8863b" },
            { l: "Overdue", v: "PKR 162K", c: "#e11d48" },
          ].map((x) => (
            <div key={x.l} className="rounded-xl bg-cream p-3 text-center">
              <div className="text-sm font-semibold" style={{ color: x.c }}>{x.v}</div>
              <div className="text-[10px] text-slate-500">{x.l}</div>
            </div>
          ))}
        </div>
      </Panel>

      {/* Defaulters */}
      <Panel
        title={t("Fee defaulters") + " · " + feeDefaulters.length + " families"}
        action={<Button size="sm" variant="outline" onClick={() => setChallanOpen(true)}><Icon.FileText className="h-4 w-4" /> Fee challan</Button>}
      >
        <Table
          head={["Student", "Parent", "Phone", "Outstanding", "Due", "Action"]}
          rows={feeDefaulters.map((d) => [
            <div key="s">
              <p className="font-medium text-navy-950">{paidIds.includes(d.id) ? `${d.student} ✓` : d.student}</p>
              <p className="text-[11px] text-slate-400">{d.klass}</p>
            </div>,
            <span key="p" className="text-slate-600">{d.parent}</span>,
            <span key="ph" className="text-xs text-slate-500">{d.phone}</span>,
            <span key="o" className="font-semibold" style={{ color: paidIds.includes(d.id) ? "#0f766e" : "#e11d48" }}>
              {paidIds.includes(d.id) ? "Paid" : formatCurrency(d.outstanding)}
            </span>,
            <span key="du" className="text-xs text-slate-500">{formatDate(d.due)}</span>,
            <div key="a" className="flex gap-1">
              <button
                title="Send reminder"
                onClick={() => toast(`Reminder queued to ${d.parent} via WhatsApp/SMS (integration-ready)`)}
                className="rounded-md bg-cream p-1.5 text-slate-500 hover:text-mint"
              >
                <Icon.Send className="h-3.5 w-3.5" />
              </button>
              <button
                title="Record payment"
                onClick={() => { setPaidIds((p) => [...p, d.id]); toast(`Payment of ${formatCurrency(d.outstanding)} recorded for ${d.student}`); }}
                className="rounded-md bg-cream p-1.5 text-slate-500 hover:text-mint"
              >
                <Icon.CheckCircle className="h-3.5 w-3.5" />
              </button>
            </div>,
          ])}
        />
        <p className="mt-3 flex items-center gap-2 text-[11px] text-slate-400">
          <Icon.Info className="h-3.5 w-3.5" />
          WhatsApp/SMS reminders are integration-ready — enable a provider in Settings.
        </p>
      </Panel>

      {/* Challan modal */}
      {challanOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-navy-950/50 p-4 backdrop-blur-sm" onClick={() => setChallanOpen(false)}>
          <div className="animate-scale-in w-full max-w-md rounded-3xl bg-white p-6" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-xl font-semibold text-navy-950">Fee Challan</h3>
              <button onClick={() => setChallanOpen(false)} className="text-slate-400 hover:text-navy-950"><Icon.X className="h-5 w-5" /></button>
            </div>
            <div className="mt-4 space-y-2 rounded-xl bg-cream p-4 text-sm">
              <div className="flex justify-between"><span className="text-slate-500">Student</span><span className="font-medium text-navy-950">{selectedDefaulter.student} · {selectedDefaulter.klass}</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Parent</span><span className="font-medium text-navy-950">{selectedDefaulter.parent}</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Challan No.</span><span className="font-mono text-xs text-navy-950">CH-2026-0{selectedDefaulter.id.slice(-3)}1</span></div>
              <div className="flex justify-between border-t border-navy-900/10 pt-2"><span className="text-slate-500">Amount due</span><span className="font-semibold text-navy-950">{formatCurrency(selectedDefaulter.outstanding)}</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Due date</span><span className="font-medium text-navy-950">{formatDate(selectedDefaulter.due)}</span></div>
            </div>
            <p className="mt-4 text-[10px] font-semibold uppercase tracking-widest text-slate-400">Payment method</p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {paymentMethods.map((m) => (
                <button key={m.id} onClick={() => setMethod(m.id)} className={method === m.id ? "rounded-full bg-navy-900 px-3 py-1.5 text-xs font-medium text-white" : "rounded-full bg-cream px-3 py-1.5 text-xs text-slate-600 hover:bg-navy-900/10"}>
                  {m.name}
                </button>
              ))}
            </div>
            {selectedMethod.ready === false && (
              <p className="mt-2 flex items-center gap-1.5 text-[11px] text-gold"><Icon.Info className="h-3.5 w-3.5" /> {selectedMethod.name} payment integration ready — enable in Settings.</p>
            )}
            <div className="mt-4 flex gap-3">
              <Button onClick={() => { setChallanOpen(false); toast("Challan generated & shared (demo)"); }} icon>Generate & share</Button>
              <Button variant="ghost" onClick={() => setChallanOpen(false)}>Close</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
