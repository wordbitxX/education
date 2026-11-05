import { brand, programs } from "@/lib/data";
import { Icon } from "@/components/icons";
import { Container, Section, SectionHeading, Button, Badge } from "@/components/ui";
import PageHeader from "@/components/site/PageHeader";
import { FaqAccordion } from "@/components/home";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Online Admissions",
  `Apply online to ${brand.name} in minutes. A multi-step online admission system with application tracking, document checklist and interview scheduling.`,
  "/admissions"
);

const steps = [
  { n: "01", t: "Select programme", d: "Choose the stage and programme that fits your child's age and needs." },
  { n: "02", t: "Student information", d: "Basic details about the student applying." },
  { n: "03", t: "Parent & guardian", d: "Contact and relationship information for the family." },
  { n: "04", t: "Academic background", d: "Previous school, grades and any learning needs." },
  { n: "05", t: "Upload documents", d: "Birth certificate, photographs and school reports." },
  { n: "06", t: "Preferred campus", d: "Choose your campus and proposed start term." },
  { n: "07", t: "Review & submit", d: "Check everything, then submit your application." },
  { n: "08", t: "Confirmation", d: "Receive an application ID and track progress online." },
];

const checklist = [
  "Recent passport-style photograph",
  "Birth certificate or equivalent",
  "Previous school reports (Years 1+)",
  "Copy of parent/guardian ID",
  "Immunisation record",
  "Any supporting learning or medical needs",
];

const timeline = [
  { stage: "Application received", desc: "We acknowledge your application and issue an application ID.", when: "Day 1" },
  { stage: "Document review", desc: "Our admissions team verifies your submitted documents.", when: "Days 2–4" },
  { stage: "Interview / assessment", desc: "An age-appropriate interview or assessment for the student.", when: "Week 2" },
  { stage: "Decision", desc: "We share the outcome and welcome you onboard.", when: "Week 2–3" },
];

export default function AdmissionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Online admissions"
        title="Begin your child's journey in minutes"
        description="A complete online admission system — apply, upload documents, schedule an interview and track your application, all in one place."
        breadcrumbs={[{ label: "Admissions" }]}
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/admissions/apply" size="lg" icon>Apply for admission</Button>
          <Button href="/admissions/track" size="lg" variant="outline">Track an application</Button>
        </div>
        <div className="mt-6 flex flex-wrap gap-6 text-sm text-slate-500">
          {["9-step online application", "Application ID tracking", "Clear admissions timeline"].map((x) => (
            <span key={x} className="flex items-center gap-2"><Icon.CheckCircle className="h-4 w-4 text-mint" /> {x}</span>
          ))}
        </div>
      </PageHeader>

      {/* Process */}
      <Section className="bg-white">
        <Container>
          <div className="flex items-end justify-between gap-6">
            <SectionHeading eyebrow="How it works" title="Eight simple steps" />
            <div className="hidden shrink-0 items-center gap-2 text-sm text-slate-500 sm:flex">
              <Icon.Clock className="h-4 w-4" /> Approx. 10 minutes
            </div>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.n} className="rounded-2xl border border-navy-900/8 bg-cream p-6">
                <span className="font-serif text-3xl font-semibold text-navy-200">{s.n}</span>
                <h3 className="mt-3 font-semibold text-navy-950">{s.t}</h3>
                <p className="mt-1.5 text-sm text-slate-600">{s.d}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Timeline + checklist */}
      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <SectionHeading eyebrow="Admission timeline" title="From application to welcome" />
              <div className="mt-8 space-y-6">
                {timeline.map((t, i) => (
                  <div key={t.stage} className="relative flex gap-4">
                    {i < timeline.length - 1 && <span className="absolute left-[15px] top-9 h-full w-px bg-navy-900/10" />}
                    <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy-900 text-xs font-semibold text-white">{i + 1}</span>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-semibold text-navy-950">{t.stage}</h3>
                        <Badge tone="mint">{t.when}</Badge>
                      </div>
                      <p className="mt-1 text-sm text-slate-600">{t.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <SectionHeading eyebrow="Document checklist" title="What you'll need" />
              <div className="mt-8 rounded-2xl border border-navy-900/8 bg-white p-6">
                <ul className="space-y-3">
                  {checklist.map((c) => (
                    <li key={c} className="flex items-center justify-between gap-3 rounded-xl bg-cream px-4 py-3 text-sm text-slate-700">
                      <span className="flex items-center gap-3"><Icon.File className="h-4 w-4 text-mint" /> {c}</span>
                      <Icon.Check className="h-4 w-4 text-slate-400" />
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs text-slate-400">Upload documents individually in step 5 of the application.</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Programs open */}
      <Section className="bg-navy-950 text-white">
        <Container>
          <SectionHeading eyebrow="Open programs" title="Programmes currently accepting applications" tone="light" />
          <div className="mt-8 flex flex-wrap gap-2.5">
            {programs.slice(0, 8).map((p) => (
              <a key={p.id} href={`/admissions/apply`} className="rounded-full border border-white/15 px-4 py-2 text-sm text-slate-200 transition hover:bg-white/10">
                {p.title}
              </a>
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQs */}
      <Section className="bg-cream">
        <Container size="narrow" id="faqs">
          <SectionHeading eyebrow="Admission FAQs" title="Questions families ask" align="center" />
          <div className="mt-8">
            <FaqAccordion />
          </div>
        </Container>
      </Section>
    </>
  );
}
