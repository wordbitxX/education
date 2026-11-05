import Link from "next/link";
import { regions, brand } from "@/lib/data";
import { segments } from "@/lib/segments";
import { Icon } from "@/components/icons";
import { Container, Section, SectionHeading, Button, Reveal, Badge } from "@/components/ui";
import PageHeader from "@/components/site/PageHeader";
import { CallStrip } from "@/components/site/CallStrip";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "School Management Software Solutions by Region",
  "WordbitX builds school management software, school ERP, LMS and education apps for institutions in Pakistan (Lahore, Islamabad, Karachi), UAE, Saudi Arabia, UK, USA, Canada and Australia.",
  "/solutions"
);

const keywordMap = [
  { kw: "school management software", page: "/solutions" },
  { kw: "school website development", page: "/" },
  { kw: "school admission system / online admission system", page: "/admissions" },
  { kw: "parent portal", page: "/portal/parent" },
  { kw: "student portal", page: "/portal/student" },
  { kw: "teacher portal", page: "/portal/teacher" },
  { kw: "school management system (admin dashboard)", page: "/portal/admin" },
  { kw: "school LMS / learning management system", page: "/portal/lms" },
  { kw: "school attendance system", page: "/portal/admin#attendance" },
  { kw: "school fee management software", page: "/portal/parent#fees" },
  { kw: "school exams & results", page: "/portal/admin#exams" },
  { kw: "AI education assistant", page: "/portal/assistant" },
  { kw: "education software development company", page: "/wordbitx" },
  { kw: "school management software Pakistan / Lahore / Karachi", page: "/solutions#pakistan" },
  { kw: "school management system UAE / Saudi Arabia", page: "/solutions#gcc" },
];

const services = [
  "School & academy website development",
  "Custom school management software (ERP)",
  "Student, parent & teacher portal development",
  "Online admission system",
  "School LMS development",
  "Fee management & invoicing",
  "Attendance & analytics",
  "AI education assistants",
  "Education mobile apps",
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "School Management Platform Development",
  serviceType: "Education technology development",
  description:
    "Custom school websites, portals, LMS and school management software for educational institutions.",
  provider: { "@type": "Organization", name: "WordbitX", url: brand.partnerUrl },
  areaServed: regions.map((r) => r.name),
};

export default function SolutionsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <PageHeader
        eyebrow="WordbitX · Solutions"
        title="Education software for Pakistan, the GCC & worldwide"
        description="The platform you're exploring is one deployment of WordbitX's education technology practice. Below is where we work and what we build in each region — anchored by Pakistan: Lahore, Islamabad and Karachi."
        breadcrumbs={[{ label: "Solutions" }]}
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href={brand.partnerUrl} icon>Get a proposal from WordbitX</Button>
          <Button href="/contact" variant="outline">Book a demo</Button>
        </div>
        <CallStrip className="mt-6" />
      </PageHeader>

      {/* Institution types */}
      <Section className="bg-white">
        <Container>
          <SectionHeading
            eyebrow="By institution type"
            title="Solutions for every kind of institution"
            description="Schools, academies, colleges, universities, madaris and multi-campus groups — each with its own workflow and its own page."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {segments.map((s) => {
              const SIcon = Icon[s.icon];
              return (
                <Link
                  key={s.slug}
                  href={`/solutions/${s.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-navy-900/8 bg-ivory p-6 transition-all duration-300 hover:-translate-y-1 hover:border-navy-900/25 hover:bg-white hover:shadow-lg"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900 text-white transition group-hover:bg-mint">
                    <SIcon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-3.5 font-semibold text-navy-950">{s.title}</h3>
                  <p className="mt-1.5 flex-1 text-sm text-slate-600">{s.cardText}</p>
                  <span className="mt-4 flex items-center gap-1.5 text-sm font-medium text-mint">
                    View solution <Icon.ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Regions */}
      <Section>
        <Container>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {regions.map((r, i) => (
              <Reveal key={r.code} delay={(i % 3) * 70} id={r.code === "PK" ? "pakistan" : r.code === "AE" ? "gcc" : undefined}>
                <div className="flex h-full flex-col rounded-2xl border border-navy-900/8 bg-white p-7">
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-14 items-center justify-center rounded-lg bg-navy-900 text-sm font-bold text-white">
                      {r.code}
                    </span>
                    {i === 0 && <Badge tone="mint">Primary market</Badge>}
                  </div>
                  <h2 className="mt-4 font-serif text-2xl font-semibold text-navy-950">{r.name}</h2>
                  <p className="mt-1 flex flex-wrap gap-1.5 text-xs text-slate-500">
                    {r.cities.map((c) => (
                      <span key={c} className="rounded-full bg-cream px-2 py-0.5">{c}</span>
                    ))}
                  </p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">{r.focus}</p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {r.keywords.map((k) => (
                      <span key={k} className="rounded-full border border-navy-900/10 px-2.5 py-1 text-[11px] text-slate-500">
                        {k}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={brand.partnerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-mint link-underline"
                  >
                    Build in {r.name.split(" ")[0]} <Icon.ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Services */}
      <Section className="bg-navy-950 text-white">
        <Container>
          <SectionHeading
            eyebrow="What WordbitX builds"
            title="Full-stack education engineering"
            tone="light"
            description="From pixel to database — every module in this demo is production-pattern: Next.js, PostgreSQL, role-based access and an API-ready AI layer."
          />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.05] p-4">
                <Icon.CheckCircle className="h-5 w-5 shrink-0 text-teal-300" />
                <span className="text-sm">{s}</span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Keyword → page map */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="SEO architecture"
            title="Keyword-to-page map"
            description="A transparent mapping of the commercial keyword themes this platform targets to the page where each theme is covered."
          />
          <div className="mt-8 overflow-hidden rounded-2xl border border-navy-900/8 bg-white">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-left text-sm">
                <thead>
                  <tr className="border-b border-navy-900/8 bg-cream text-xs uppercase tracking-wide text-slate-500">
                    <th className="px-5 py-3.5 font-semibold">Keyword theme</th>
                    <th className="px-5 py-3.5 font-semibold">Covered on</th>
                    <th className="px-5 py-3.5 font-semibold">Internal link</th>
                  </tr>
                </thead>
                <tbody>
                  {keywordMap.map((k) => (
                    <tr key={k.kw} className="border-b border-navy-900/5 last:border-0">
                      <td className="px-5 py-3 font-medium text-navy-950">{k.kw}</td>
                      <td className="px-5 py-3 text-slate-600">
                        {k.page.startsWith("/portal")
                          ? "Platform portal"
                          : k.page.startsWith("/admissions")
                            ? "Admissions system"
                            : k.page.startsWith("/wordbitx")
                              ? "WordbitX case study"
                              : k.page.startsWith("/programs")
                                ? "Programs"
                                : k.page === "/"
                                  ? "Home"
                                  : "Solutions"}
                      </td>
                      <td className="px-5 py-3">
                        {k.page.startsWith("http") ? null : (
                          <Link href={k.page} className="flex items-center gap-1 text-mint hover:underline">
                            <span className="font-mono text-xs">{k.page}</span>
                            <Icon.ArrowUpRight className="h-3.5 w-3.5" />
                          </Link>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-cream">
        <Container>
          <div className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
            <SectionHeading
              eyebrow="Ready to start?"
              title="Your school. Your platform."
              description="WordbitX designs and develops custom education platforms — no templates, no compromises."
            />
            <div className="flex shrink-0 flex-col items-center gap-4">
              <div className="flex flex-wrap justify-center gap-3">
                <Button href={brand.partnerUrl} icon>Start a project</Button>
                <Button href="/" variant="outline">Explore the demo</Button>
              </div>
              <CallStrip />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
