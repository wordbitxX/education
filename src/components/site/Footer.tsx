import Link from "next/link";
import { brand, contact } from "@/lib/data";
import { Icon } from "@/components/icons";

const solutions = [
  { label: "School Management Software", href: "/school-management-software-pakistan" },
  { label: "School ERP Pakistan", href: "/school-erp-pakistan" },
  { label: "College Management Software", href: "/college-management-software-pakistan" },
  { label: "University Management System", href: "/university-management-system-pakistan" },
  { label: "Academy Management Software", href: "/academy-management-software-pakistan" },
  { label: "School LMS & Mobile Apps", href: "/school-lms-pakistan" },
];

const platform = [
  { label: "Admin Dashboard", href: "/portal/admin" },
  { label: "Parent Portal", href: "/portal/parent" },
  { label: "Teacher Portal", href: "/portal/teacher" },
  { label: "Student Portal", href: "/portal/student" },
  { label: "Online Admissions", href: "/admissions/apply" },
  { label: "Result Portal", href: "/results" },
];

const company = [
  { label: "Demo School Website", href: "/about" },
  { label: "Solutions", href: "/solutions" },
  { label: "Case Study", href: "/wordbitx" },
  { label: "Education Blog", href: "/journal" },
  { label: "Contact & Demo", href: "/contact" },
  { label: "Security & Privacy", href: "/about/policies" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* ===== Main grid ===== */}
        <div className="grid gap-10 py-14 lg:grid-cols-12 lg:gap-8">
          {/* Brand + contact */}
          <div className="lg:col-span-4">
            <a
              href={brand.partnerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500/15 text-teal-300">
                <Icon.Code className="h-5 w-5" />
              </span>
              <span className="leading-none">
                <span className="block font-serif text-xl font-semibold text-white">WordbitX</span>
                <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.18em] text-teal-300">
                  Software Company
                </span>
              </span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              Education Technology Solutions — school management software, education ERP, LMS,
              portals and mobile apps for institutions in Pakistan and worldwide.
            </p>

            <div className="mt-6 space-y-2.5">
              <a href={contact.phoneHref} className="flex items-center gap-2.5 text-sm font-semibold text-white transition hover:text-teal-300">
                <Icon.Phone className="h-4 w-4 text-teal-300" /> {contact.phone}
                <span className="rounded bg-white/10 px-1.5 py-0.5 text-[9px] font-medium uppercase tracking-wide text-slate-400">PK</span>
              </a>
              <a href={contact.phoneUsaHref} className="flex items-center gap-2.5 text-sm text-slate-400 transition hover:text-teal-300">
                <Icon.Phone className="h-4 w-4 text-slate-500" /> {contact.phoneUsa}
                <span className="rounded bg-white/10 px-1.5 py-0.5 text-[9px] font-medium uppercase tracking-wide text-slate-500">USA</span>
              </a>
              <a href={brand.partnerUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-sm text-slate-400 transition hover:text-teal-300">
                <Icon.Globe className="h-4 w-4 text-slate-500" /> {contact.website}
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <a
                href={brand.partnerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-navy-950 transition hover:-translate-y-0.5"
              >
                Request a Demo <Icon.ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={`${contact.whatsapp}?text=${encodeURIComponent("Hello WordbitX, I'd like a demo of your education platform")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#25D366]/40 px-4 py-2.5 text-sm font-medium text-[#25D366] transition hover:bg-[#25D366] hover:text-white"
              >
                <Icon.Chat className="h-4 w-4" /> WhatsApp
              </a>
            </div>
          </div>

          {/* Link columns */}
          <div className="grid gap-8 sm:grid-cols-3 lg:col-span-8">
            <FooterCol title="Solutions" links={solutions} />
            <FooterCol title="Platform" links={platform} />
            <FooterCol title="Company" links={company} />
          </div>
        </div>

        {/* ===== Bottom bar ===== */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 py-6 sm:flex-row">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} <span className="text-slate-400">WordbitX Software Company</span> · Powered by WordbitX
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-slate-500">
            <Link href="/sitemap.xml" className="transition hover:text-white">Sitemap</Link>
            <Link href="/about/policies" className="transition hover:text-white">Privacy</Link>
            <Link href="/contact" className="transition hover:text-white">Contact</Link>
            <span className="text-slate-600">Demo content · no client relationships implied</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-white">{title}</h3>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l.href + l.label}>
            <Link href={l.href} className="text-[13px] text-slate-400 transition-colors hover:text-white">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
