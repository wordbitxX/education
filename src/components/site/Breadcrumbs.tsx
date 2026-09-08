import Link from "next/link";
import { Fragment } from "react";
import { Icon } from "@/components/icons";

export type Crumb = { label: string; href?: string };

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex flex-wrap items-center gap-1.5 text-sm text-slate-500"
    >
      <Link href="/" className="transition hover:text-navy-950">
        Home
      </Link>
      {items.map((item, i) => (
        <Fragment key={item.label}>
          <Icon.ChevronRight className="h-3.5 w-3.5 text-slate-300" />
          {item.href ? (
            <Link href={item.href} className="transition hover:text-navy-950">
              {item.label}
            </Link>
          ) : (
            <span className="font-medium text-navy-950">{item.label}</span>
          )}
        </Fragment>
      ))}
    </nav>
  );
}
