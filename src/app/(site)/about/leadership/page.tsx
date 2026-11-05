import { leadership } from "@/lib/data";
import { Icon } from "@/components/icons";
import { Container, Section, SectionHeading } from "@/components/ui";
import PageHeader from "@/components/site/PageHeader";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("Leadership", "Meet the fictional leadership team behind Meridian Academy.", "/about/leadership");

export default function LeadershipPage() {
  return (
    <>
      <PageHeader
        eyebrow="Leadership"
        title="Educators who lead from the classroom"
        description="Our senior team are teachers first, leaders second — and every one of them still mentors students."
        breadcrumbs={[{ label: "About", href: "/about" }, { label: "Leadership" }]}
      />
      <Section>
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {leadership.map((l, i) => (
              <div key={l.id} className="rounded-2xl border border-navy-900/8 bg-white p-8">
                <span className="flex h-20 w-20 items-center justify-center rounded-2xl text-xl font-semibold text-white" style={{ backgroundColor: l.color }}>
                  {l.initial}
                </span>
                <h3 className="mt-5 font-serif text-xl font-semibold text-navy-950">{l.name}</h3>
                <p className="mt-1 text-sm text-mint">{l.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{l.bio}</p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {l.qualifications.map((q) => (
                    <span key={q} className="rounded-full bg-navy-50 px-2.5 py-1 text-[11px] font-medium text-navy-700">
                      {q}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-14 rounded-3xl bg-navy-950 p-8 text-white sm:p-12">
            <div className="grid items-center gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <SectionHeading
                  eyebrow="From the desk of the Principal"
                  title="A note from Dr. Sarah Wilson"
                  tone="light"
                />
                <p className="mt-6 text-lg leading-relaxed text-slate-300">
                  "Education is at its best when a child feels known. Our philosophy is simple:
                  understand first, challenge kindly, and never underestimate what a young person
                  can do when they are supported and trusted. I hope this platform gives you a
                  window into that belief."
                </p>
              </div>
              <div className="flex flex-col items-center justify-center gap-3 text-center">
                <span className="flex h-24 w-24 items-center justify-center rounded-full text-2xl font-semibold text-white" style={{ backgroundColor: leadership[0].color }}>
                  {leadership[0].initial}
                </span>
                <div>
                  <p className="font-medium">{leadership[0].name}</p>
                  <p className="text-sm text-slate-400">{leadership[0].role}</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
