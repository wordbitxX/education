import type { ReactNode } from "react";
import { brand } from "@/lib/data";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <span className="hidden">{brand.partner}</span>
    </div>
  );
}
