"use client";

import { useState } from "react";
import { transportRoutes, libraryBooks, libraryStats, storeProducts } from "@/lib/data";
import { toast } from "@/components/portal/Toast";
import { Panel, Tag, Table } from "@/components/portal/blocks";
import { Button } from "@/components/ui";
import { Icon } from "@/components/icons";
import { formatCurrency } from "@/lib/utils";

export default function Ops() {
  const [stock, setStock] = useState(storeProducts.map((p) => p.stock));
  const [orders, setOrders] = useState(0);

  const placeOrder = (i: number) => {
    if (stock[i] <= 0) return;
    setStock((s) => s.map((v, j) => (j === i ? v - 1 : v)));
    setOrders((o) => o + 1);
    toast(`Order placed: ${storeProducts[i].name} · ${formatCurrency(storeProducts[i].price)}`);
  };

  return (
    <div className="space-y-6">
      {/* Transport */}
      <Panel id="transport" title="School Transport" action={<Tag tone="mint">GPS tracking · integration-ready</Tag>}>
        <div className="grid gap-4 md:grid-cols-3">
          {transportRoutes.map((r) => (
            <div key={r.bus} className="rounded-2xl border border-navy-900/8 bg-ivory p-5">
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy-900 text-white"><Icon.Bus className="h-5 w-5" /></span>
                <Tag tone="navy">{r.bus}</Tag>
              </div>
              <p className="mt-3 text-sm font-medium text-navy-950">{r.route}</p>
              <p className="text-xs text-slate-500">Driver: {r.driver}</p>
              <div className="mt-3 grid grid-cols-3 gap-2 text-center text-xs">
                <div className="rounded-lg bg-white p-2"><p className="font-semibold text-navy-950">{r.stops}</p><p className="text-slate-400">Stops</p></div>
                <div className="rounded-lg bg-white p-2"><p className="font-semibold text-navy-950">{r.students}</p><p className="text-slate-400">Students</p></div>
                <div className="rounded-lg bg-white p-2"><p className="font-semibold text-navy-950">{r.pickup}</p><p className="text-slate-400">Pickup</p></div>
              </div>
              <p className="mt-3 flex items-center justify-between text-xs text-slate-500">
                <span>Transport fee</span>
                <span className="font-semibold text-navy-950">{formatCurrency(r.fee)} / month</span>
              </p>
            </div>
          ))}
        </div>
      </Panel>

      {/* Library */}
      <Panel id="library" title="Library">
        <div className="mb-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {[
            { l: "Total books", v: libraryStats.total.toLocaleString() },
            { l: "Currently issued", v: libraryStats.issued },
            { l: "Returned (this term)", v: libraryStats.returned.toLocaleString() },
            { l: "Overdue", v: libraryStats.overdue, alert: true },
          ].map((x) => (
            <div key={x.l} className="rounded-xl bg-cream p-3 text-center">
              <p className={`text-lg font-semibold ${x.alert ? "text-red-500" : "text-navy-950"}`}>{x.v}</p>
              <p className="text-[11px] text-slate-500">{x.l}</p>
            </div>
          ))}
        </div>
        <Table
          head={["Book", "Author", "ISBN", "Copies", "Issued", ""]}
          rows={libraryBooks.map((b) => [
            <span key="t" className="font-medium text-navy-950">{b.title}</span>,
            <span key="a" className="text-slate-600">{b.author}</span>,
            <span key="i" className="font-mono text-xs text-slate-400">{b.isbn}</span>,
            <span key="c" className="text-slate-600">{b.copies}</span>,
            <span key="is" className="text-slate-600">{b.issued}</span>,
            <button key="x" onClick={() => toast(`Issuing "${b.title}" to student (demo)`)} className="text-xs font-medium text-mint hover:underline">Issue</button>,
          ])}
        />
      </Panel>

      {/* Store / POS */}
      <Panel
        id="store"
        title="School Store (POS)"
        action={<Tag tone="navy">{orders} order{orders === 1 ? "" : "s"} this session</Tag>}
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {storeProducts.map((p, i) => (
            <div key={p.name} className="flex flex-col rounded-2xl border border-navy-900/8 bg-ivory p-4">
              <p className="flex-1 text-sm font-medium text-navy-950">{p.name}</p>
              <p className="mt-1 text-xs text-slate-500">
                Stock: <span className={stock[i] < 20 ? "font-semibold text-red-500" : "font-semibold text-navy-950"}>{stock[i]}</span>
              </p>
              <div className="mt-3 flex items-center justify-between">
                <span className="font-semibold text-navy-950">{formatCurrency(p.price)}</span>
                <Button size="sm" variant="outline" onClick={() => placeOrder(i)}>Order</Button>
              </div>
            </div>
          ))}
        </div>
      </Panel>
    </div>
  );
}
