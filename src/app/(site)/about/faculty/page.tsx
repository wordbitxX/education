import { teachers } from "@/lib/data";
import { Icon } from "@/components/icons";
import { Container, Section, SectionHeading, Reveal, Badge } from "@/components/ui";
import PageHeader from "@/components/site/PageHeader";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("Faculty", "Meet the fictional teaching faculty of Meridian Academy. A concept demo showcasing faculty profiles.");

export default function FacultyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our faculty"
        title="The people behind the learning"
        description="A team of subject specialists, mentors and researchers. This faculty roster is purely illustrative demo content."
        breadcrumbs={[{ label: "About", href: "/about" }, { label: "Faculty" }]}
      />
      <Section>
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {teachers.map((t, i) => (
              <Reveal key={t.id} delay={i * 50}>
                <div className="flex h-full flex-col rounded-2xl border border-navy-900/8 bg-white p-7">
                  <div className="flex items-center gap-4">
                    <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl text-xl font-semibold text-white" style={{ backgroundColor: t.color }}>
                      {t.initial}
                    </span>
                    <div>
                      <h3 className="font-serif text-lg font-semibold text-navy-950">{t.name}</h3>
                      <p className="text-xs text-mint">{t.role}</p>
                    </div>
                  </div>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">{t.bio}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    <Badge tone="neutral">{t.subject}</Badge>
                    <Badge tone="navy">{t.years} yrs</Badge>
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-xs text-slate-400">
                    <Icon.Mail className="h-3.5 w-3.5" /> {t.email}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 rounded-3xl bg-cream p-8 sm:p-12">
            <div className="grid items-center gap-6 lg:grid-cols-2">
              <SectionHeading
                eyebrow="Continuous development"
                title="Teachers who keep learning too"
                description="We invest in every educator with ongoing professional development, specialist training and a culture of peer feedback — including how to use AI responsibly as a teaching aid."
              />
              <div className="grid grid-cols-2 gap-4">
                {["Specialist subject training", "Mentoring & coaching", "Responsible AI in teaching", "Research & innovation days"].map((x) => (
                  <div key={x} className="flex items-center gap-2 rounded-xl bg-white p-4 text-sm font-medium text-navy-950">
                    <Icon.CheckCircle className="h-5 w-5 shrink-0 text-mint" /> {x}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
