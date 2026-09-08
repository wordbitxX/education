import type { ReactNode } from "react";
import { Container } from "@/components/ui";
import Breadcrumbs, { type Crumb } from "./Breadcrumbs";

export default function PageHeader({
  eyebrow,
  title,
  description,
  breadcrumbs,
  children,
  light = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  breadcrumbs?: Crumb[];
  children?: ReactNode;
  light?: boolean;
}) {
  return (
    <div
      className={
        light
          ? "relative overflow-hidden bg-navy-950 pb-16 pt-32 text-white sm:pb-20 sm:pt-40"
          : "relative overflow-hidden bg-cream pb-14 pt-32 sm:pt-40"
      }
    >
      {!light && <div className="hero-grid absolute inset-0" aria-hidden />}
      {light && <div className="hero-grid-dark absolute inset-0" aria-hidden />}
      <div
        className="absolute -right-24 -top-24 h-72 w-72 rounded-full blur-3xl"
        style={{ background: light ? "rgba(15,118,110,0.18)" : "rgba(15,118,110,0.1)" }}
        aria-hidden
      />
      <Container className="relative">
        {breadcrumbs && (
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbs} />
          </div>
        )}
        {eyebrow && (
          <span
            className={
              "mb-4 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] " +
              (light ? "text-teal-300" : "text-mint")
            }
          >
            <span className="h-px w-6 bg-current" /> {eyebrow}
          </span>
        )}
        <h1 className="max-w-3xl font-serif text-[clamp(2.2rem,5vw,3.75rem)] leading-[1.05] tracking-tight">
          {title}
        </h1>
        {description && (
          <p
            className={
              "mt-5 max-w-2xl text-base leading-relaxed sm:text-lg " +
              (light ? "text-slate-300" : "text-slate-600")
            }
          >
            {description}
          </p>
        )}
        {children}
      </Container>
    </div>
  );
}
