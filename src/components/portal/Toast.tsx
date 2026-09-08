"use client";

import { useEffect, useState } from "react";
import { Icon } from "@/components/icons";

type ToastItem = { id: number; msg: string };

export function toast(msg: string) {
  window.dispatchEvent(new CustomEvent("app-toast", { detail: msg }));
}

export function Toaster() {
  const [items, setItems] = useState<ToastItem[]>([]);

  useEffect(() => {
    const handler = (e: Event) => {
      const msg = (e as CustomEvent<string>).detail;
      const id = Date.now() + Math.random();
      setItems((xs) => [...xs, { id, msg }]);
      setTimeout(() => setItems((xs) => xs.filter((x) => x.id !== id)), 2800);
    };
    window.addEventListener("app-toast", handler);
    return () => window.removeEventListener("app-toast", handler);
  }, []);

  return (
    <div className="pointer-events-none fixed bottom-20 left-1/2 z-[95] flex -translate-x-1/2 flex-col items-center gap-2 lg:bottom-8">
      {items.map((t) => (
        <div
          key={t.id}
          className="animate-scale-in flex items-center gap-2.5 rounded-full bg-navy-950 px-5 py-2.5 text-sm font-medium text-white shadow-[0_20px_50px_-15px_rgba(8,22,51,0.6)]"
        >
          <Icon.CheckCircle className="h-4 w-4 text-teal-300" />
          <span dir="auto">{t.msg}</span>
        </div>
      ))}
    </div>
  );
}
