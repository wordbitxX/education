import type { Metadata } from "next";
import Link from "next/link";
import { brand, wordbitxCapabilities, regions } from "@/lib/data";
import { Icon, type IconName } from "@/components/icons";
import { Container, Section, SectionHeading, Button, Reveal, Badge, Counter } from "@/components/ui";
import PageHeader from "@/components/site/PageHeader";
import ShareCard from "@/components/site/ShareCard";
import { CallStrip } from "@/components/site/CallStrip";

export const metadata: Metadata = {
  title: "School Management Software Development — WordbitX Case Study",
  description:
    "How WordbitX builds complete school & academy ecosystems: school website, online admissions, student/parent/teacher portals, admin dashboard, LMS, attendance, exams, fee management and AI assistants. A concept demo — school management software development company, LMS development and education app development by WordbitX.",
  alternates: { canonical: "https://education.wordbitx.pk/wordbitx" },
  openGraph: {
    url: "https://education.wordbitx.pk/wordbitx",
    type: "article",
    title: "We can build your entire digital education ecosystem — WordbitX",
    description:
      "A complete school management platform concept: website, portals, LMS, AI and admin — designed & developed by WordbitX (wordbitx.com).",
    images: [
      {
        url: "https://images.pexels.com/photos/29659894/pexels-photo-29659894.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1200&h=630",
        width: 1200,
        height: 630,
        alt: "School management platform concept by WordbitX",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WordbitX — School Management Platform Concept",
    description:
      "Website + portals + LMS + AI assistant. A complete education ecosystem, concept demo by WordbitX.",
  },
};

const modules: { icon: IconName; label: string; href: string }[] = [
  { icon: "Globe", label: "Premium school website", href: "/" },
  { icon: "GraduationCap", label: "Online admissions & tracking", href: "/admissions" },
  { icon: "User", label: "Student portal", href: "/portal/student" },
  { icon: "Users", label: "Parent portal", href: "/portal/parent" },
  { icon: "BookOpen", label: "Teacher portal", href: "/portal/teacher" },
  { icon: "Layout", label: "Admin dashboard", href: "/portal/admin" },
  { icon: "Layers", label: "LMS — courses, quizzes, progress", href: "/portal/lms" },
  { icon: "CheckCircle", label: "Attendance & analytics", href: "/portal/admin#attendance" },
  { icon: "Trophy", label: "Exams & report cards", href: "/portal/admin#exams" },
  { icon: "Wallet", label: "Fee management", href: "/portal/parent#fees" },
  { icon: "Robot", label: "LearnMate AI assistant", href: "/portal/assistant" },
  { icon: "Send", label: "Communication & notifications", href: "/portal/admin#communication" },
];

const stack = [
  "Next.js (App Router)",
  "PostgreSQL + Drizzle ORM",
  "Tailwind CSS design system",
  "Role-based access control",
  "API-ready AI assistant",
  "SEO + structured data",
  "English / Arabic (RTL)",
  "Mobile-first responsive",
];

const caseStudySchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WordbitX builds complete school management ecosystems",
  description:
    "A concept demonstration of a complete school & academy digital platform: website, admissions, portals, LMS, attendance, exams, fees and AI assistant.",
  datePublished: "2026-03-10",
  author: { "@type": "Organization", name: "WordbitX", url: brand.partnerUrl },
  publisher: { "@type": "Organization", name: "WordbitX", url: brand.partnerUrl },
  isPartOf: { "@type": "WebSite", name: "Meridian Academy — Concept by WordbitX", url: "https://education.wordbitx.pk/" },
};

export default function WordbitxPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema) }}
      />
      <PageHeader
        light
        eyebrow="WordbitX · Case Study / Concept Demo"
        title={
          <>
            We can build your <span className="text-teal-300">entire</span> digital education
            ecosystem
          </>
        }
        description="This entire platform — the website, admissions, portals, LMS, fees and AI — is a WordbitX concept demonstration. It shows how a school, academy, tuition center or college can move from a static site to a connected, data-informed institution."
        breadcrumbs={[{ label: "WordbitX Case Study" }]}
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href={brand.partnerUrl} variant="light" icon>
            Build Your Education Platform
          </Button>
          <Button
            href="/"
            variant="outline-light"
          >
            Re-explore the demo
          </Button>
        </div>
      </PageHeader>

      {/* Stats */}
      <Section className="pb-10">
        <Container>
          <div className="grid grid-cols-2 gap-6 rounded-3xl border border-navy-900/8 bg-white p-8 sm:grid-cols-4">
            {[
              { v: 30, s: "+", l: "Pages & screens" },
              { v: 12, s: "", l: "Platform modules" },
              { v: 2, s: "", l: "Languages (EN / AR)" },
              { v: 7, s: "", l: "Regions covered" },
            ].map((x) => (
              <div key={x.l} className="text-center">
                <div className="font-serif text-4xl font-semibold text-navy-950">
                  <Counter value={x.v} suffix={x.s} />
                </div>
                <p className="mt-1 text-sm text-slate-500">{x.l}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Challenge / Solution */}
      <Section className="pt-10">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-3xl border border-navy-900/8 bg-white p-8">
                <Badge tone="gold">Challenge</Badge>
                <h2 className="mt-4 font-serif text-2xl font-semibold text-navy-950">
                  A modern institution needs more than a static website
                </h2>
                <p className="mt-3 leading-relaxed text-slate-600">
                  Schools and academies juggle admissions, attendance, fees, exams, communication
                  and learning — often across spreadsheets, phone calls and paper. Families want
                  real-time visibility. Teachers want less admin. Administrators want reliable
                  data. None of that is possible with a brochure site.
                </p>
              </div>
            </Reveal>
            <Reveal delay={90}>
              <div className="h-full rounded-3xl bg-navy-950 p-8 text-white">
                <Badge tone="mint">Solution</Badge>
                <h2 className="mt-4 font-serif text-2xl font-semibold">
                  One unified digital ecosystem
                </h2>
                <p className="mt-3 leading-relaxed text-slate-300">
                  WordbitX designs and develops a single platform connecting students, parents,
                  teachers and administration — with role-based access, a shared source of truth
                  and an API-ready AI layer. This demo is that system, built end to end.
                </p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {wordbitxCapabilities.map((c) => (
                    <span key={c} className="rounded-full border border-white/12 px-2.5 py-1 text-xs text-slate-300">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Modules grid */}
      <Section className="bg-white">
        <Container>
          <SectionHeading
            eyebrow="Everything in this demo"
            title="Twelve modules, one platform"
            description="Click any module to open the real, working demo — every one runs on fictional demo data."
            align="center"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {modules.map((m, i) => {
              const Cmp = Icon[m.icon];
              return (
                <Reveal key={m.label} delay={(i % 3) * 60}>
                  <Link
                    href={m.href}
                    className="group flex h-full items-center gap-4 rounded-2xl border border-navy-900/8 bg-ivory p-5 transition-all duration-300 hover:-translate-y-1 hover:border-navy-900/20 hover:shadow-[0_24px_50px_-26px_rgba(8,22,51,0.35)]"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-white transition group-hover:bg-mint">
                      <Cmp className="h-5 w-5" />
                    </span>
                    <span className="flex-1 text-sm font-medium text-navy-950">{m.label}</span>
                    <Icon.ArrowUpRight className="h-4 w-4 text-slate-300 transition group-hover:text-mint" />
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Stack + regions */}
      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Technology"
                title="Built with production patterns"
                description="The same architecture we ship for real clients — clean, scalable, secure by design."
              />
              <div className="mt-6 flex flex-wrap gap-2">
                {stack.map((s) => (
                  <span key={s} className="rounded-full border border-navy-900/12 bg-white px-3.5 py-1.5 text-sm text-slate-700">
                    {s}
                  </span>
                ))}
              </div>
              <div className="mt-8 rounded-2xl border border-navy-900/8 bg-cream p-5">
                <p className="text-sm leading-relaxed text-slate-600">
                  <span className="font-semibold text-navy-950">Security & privacy-ready:</span>{" "}
                  role-based access, protected routes, input validation and a secure API
                  foundation — designed so real deployments can be verified and extended
                  responsibly.
                </p>
              </div>
            </div>
            <div>
              <SectionHeading
                eyebrow="Where we work"
                title="Pakistan first, worldwide second"
                description="Anchored in Lahore, Islamabad and Karachi — with delivery for the GCC, UK, USA, Canada and Australia."
              />
              <div className="mt-6 space-y-2.5">
                {regions.map((r) => (
                  <Link
                    key={r.code}
                    href="/solutions"
                    className="group flex items-center justify-between rounded-xl border border-navy-900/8 bg-white p-4 transition hover:border-navy-900/25"
                  >
                    <span className="flex items-center gap-3">
                      <span className="flex h-8 w-12 items-center justify-center rounded-lg bg-navy-900 text-xs font-bold text-white">
                        {r.code}
                      </span>
                      <span className="text-sm font-medium text-navy-950">{r.name}</span>
                    </span>
                    <Icon.ArrowUpRight className="h-4 w-4 text-slate-300 transition group-hover:text-mint" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Share + CTA */}
      <Section className="bg-cream">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            <ShareCard />
            <div className="flex flex-col justify-between rounded-3xl bg-navy-950 p-8 text-white">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-300">WordbitX</p>
                <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight">
                  Need a School Management Platform Like This?
                </h2>
                <p className="mt-3 leading-relaxed text-slate-300">
                  WordbitX builds custom education websites, portals, LMS platforms and school
                  management software — for schools, academies, tuition centers and colleges.
                </p>
                <p className="mt-4 text-xs text-slate-500">
                  Disclaimer: Meridian Academy is a fictional concept demonstration, not a claim
                  of an existing client delivery.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href={brand.partnerUrl} variant="light" icon>
                  Build Your Education Platform
                </Button>
                <Button href="/solutions" variant="outline-light">
                  Solutions by region
                </Button>
              </div>
              <CallStrip tone="dark" layout="stack" className="mt-6" />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
