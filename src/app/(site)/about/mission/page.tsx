import { brand } from "@/lib/data";
import { Icon } from "@/components/icons";
import { Container, Section, SectionHeading } from "@/components/ui";
import PageHeader from "@/components/site/PageHeader";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Mission & Vision",
  `${brand.name} mission: to make learning personal, connected and full of possibility. Vision, values and commitment to every learner.`
);

export default function MissionPage() {
  return (
    <>
      <PageHeader
        eyebrow="Mission & Vision"
        title="Why we exist"
        description="Our mission, vision and the values that guide every decision we make."
        breadcrumbs={[{ label: "About", href: "/about" }, { label: "Mission & Vision" }]}
      />
      <Section className="bg-white">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl bg-navy-950 p-8 text-white sm:p-10">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                <Icon.Target className="h-6 w-6 text-teal-300" />
              </span>
              <h2 className="mt-6 font-serif text-3xl font-semibold">Our Mission</h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-300">
                To make learning personal, connected and full of possibility — so every student
                leaves with the skills, confidence and character to shape their future.
              </p>
            </div>
            <div className="rounded-3xl bg-mint p-8 text-white sm:p-10">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15">
                <Icon.Compass className="h-6 w-6" />
              </span>
              <h2 className="mt-6 font-serif text-3xl font-semibold">Our Vision</h2>
              <p className="mt-4 text-lg leading-relaxed text-white/90">
                A world where every young person is known, challenged and inspired — and where
                technology quietly removes friction from school life.
              </p>
            </div>
          </div>

          <div className="mt-16">
            <SectionHeading eyebrow="Values" title="What we stand for" align="center" />
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: "Heart" as const, t: "Kindness", d: "We lead with empathy and care in every interaction." },
                { icon: "Lightbulb" as const, t: "Curiosity", d: "We protect the wonder that drives real learning." },
                { icon: "ShieldCheck" as const, t: "Integrity", d: "We are honest, transparent and fair." },
                { icon: "TrendingUp" as const, t: "Excellence", d: "We pursue the highest standards, with humility." },
              ].map((v) => {
                const Cmp = Icon[v.icon];
                return (
                  <div key={v.t} className="rounded-2xl border border-navy-900/8 bg-cream p-6 text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-mint shadow-sm">
                      <Cmp className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 font-serif text-lg font-semibold text-navy-950">{v.t}</h3>
                    <p className="mt-1 text-sm text-slate-600">{v.d}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>
      <Section className="bg-cream">
        <Container size="narrow">
          <div className="rounded-3xl border border-navy-900/8 bg-white p-8 sm:p-12">
            <SectionHeading eyebrow="Commitment" title="Our promise to every family" />
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                "Small classes and genuine one-to-one relationships",
                "Transparent, real-time progress and attendance",
                "Safe, well-designed spaces and supervision",
                "Honest, data-informed conversations about learning",
                "A connected platform for families and staff",
                "A culture where effort and wellbeing are valued equally",
              ].map((p) => (
                <div key={p} className="flex items-start gap-3">
                  <Icon.Check className="mt-0.5 h-5 w-5 shrink-0 text-mint" />
                  <span className="text-sm leading-relaxed text-slate-700">{p}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
