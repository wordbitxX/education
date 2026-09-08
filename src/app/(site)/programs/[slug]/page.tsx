import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { programs, teachers, brand } from "@/lib/data";
import { img } from "@/lib/images";
import { Icon } from "@/components/icons";
import { Container, Section, SectionHeading, Button, Badge, Reveal } from "@/components/ui";
import Breadcrumbs from "@/components/site/Breadcrumbs";
import { FaqAccordion } from "@/components/home";
import { pageMeta } from "@/lib/seo";

export function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = programs.find((x) => x.slug === slug);
  if (!p) return {};
  return pageMeta(p.title, `${p.short} at ${brand.name}. ${p.description}`);
}

export default async function ProgramPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const program = programs.find((p) => p.slug === slug);
  if (!program) notFound();

  const relatedFaculty = teachers.filter((t) =>
    program.subjects.some((s) => s.toLowerCase().includes(t.subject.split(" ")[0].toLowerCase()))
  ).slice(0, 3);

  return (
    <>
      <div className="pt-28">
        <Container>
          <Breadcrumbs items={[{ label: "Programs", href: "/programs" }, { label: program.title }]} />
        </Container>
      </div>

      {/* Hero */}
      <section className="pb-16 pt-8 sm:pt-12">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge tone="mint">{program.category}</Badge>
                <Badge tone="navy">{program.ages}</Badge>
              </div>
              <h1 className="mt-4 font-serif text-[clamp(2.2rem,5vw,3.5rem)] leading-[1.05] tracking-tight text-navy-950">
                {program.title}
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">{program.description}</p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button href="/admissions/apply" icon>
                  Apply for this program
                </Button>
                <Button href="/admissions" variant="ghost">Admission info</Button>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-4">
                <Info label="Grades" value={program.grades} />
                <Info label="Duration" value={program.duration} />
                <Info label="Capacity" value={program.capacity.split(" ").slice(0, 1).join(" ")} />
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl">
              <img src={img(program.image, 1100, 850)} alt={program.title} className="aspect-[5/4] w-full object-cover" loading="eager" />
            </div>
          </div>
        </Container>
      </section>

      {/* Overview + curriculum */}
      <Section className="bg-white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <SectionHeading eyebrow="Curriculum" title="How the programme is structured" />
              <p className="mt-5 leading-relaxed text-slate-600">{program.curriculum}</p>
              <h3 className="mt-10 text-sm font-semibold uppercase tracking-widest text-slate-500">Subjects</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {program.subjects.map((s) => (
                  <span key={s} className="rounded-full border border-navy-900/10 bg-cream px-3.5 py-1.5 text-sm text-navy-900">
                    {s}
                  </span>
                ))}
              </div>

              <h3 className="mt-10 text-sm font-semibold uppercase tracking-widest text-slate-500">Learning outcomes</h3>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {program.outcomes.map((o) => (
                  <li key={o} className="flex items-start gap-3 text-sm text-slate-700">
                    <Icon.CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-mint" /> {o}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-navy-900/8 bg-cream p-6">
                <h3 className="flex items-center gap-2 font-semibold text-navy-950"><Icon.Clock className="h-5 w-5 text-mint" /> Schedule concept</h3>
                <ul className="mt-4 space-y-2.5">
                  {program.schedule.map((s) => (
                    <li key={s} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-mint" /> {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-5 rounded-2xl border border-navy-900/8 bg-white p-6">
                <h3 className="flex items-center gap-2 font-semibold text-navy-950"><Icon.Users className="h-5 w-5 text-mint" /> Class size</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{program.capacity}</p>
              </div>
            </div>
          </div>

          {relatedFaculty.length > 0 && (
            <div className="mt-16">
              <SectionHeading eyebrow="Faculty for this programme" title="Taught by specialists" />
              <div className="mt-8 grid gap-5 sm:grid-cols-3">
                {relatedFaculty.map((t) => (
                  <Reveal key={t.id}>
                    <div className="rounded-2xl border border-navy-900/8 bg-white p-6">
                      <div className="flex items-center gap-3">
                        <span className="flex h-12 w-12 items-center justify-center rounded-full text-sm font-semibold text-white" style={{ backgroundColor: t.color }}>{t.initial}</span>
                        <div>
                          <p className="font-semibold text-navy-950">{t.name}</p>
                          <p className="text-xs text-slate-500">{t.subject}</p>
                        </div>
                      </div>
                      <p className="mt-3 text-sm text-slate-600">{t.bio}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          )}
        </Container>
      </Section>

      {/* FAQs */}
      <Section>
        <Container size="narrow">
          <SectionHeading eyebrow="Programme FAQs" title="Common questions" align="center" />
          <div className="mt-8">
            <FaqAccordion items={program.faqs} />
          </div>
          <div className="mt-10 rounded-2xl bg-navy-950 p-8 text-center text-white">
            <h3 className="font-serif text-2xl font-semibold">Ready to begin?</h3>
            <p className="mt-2 text-slate-300">Application for {program.title} is open.</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Button href="/admissions/apply" variant="light" icon>Start application</Button>
              <Button href="/admissions/track" variant="outline-light">Track an application</Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-navy-900/8 bg-white p-4">
      <div className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">{label}</div>
      <div className="mt-1 text-sm font-medium text-navy-950">{value}</div>
    </div>
  );
}
