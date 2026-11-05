import { brand } from "@/lib/data";
import { Icon } from "@/components/icons";
import { Container, Section, SectionHeading } from "@/components/ui";
import PageHeader from "@/components/site/PageHeader";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("Safeguarding & Policies", "A concept overview of the safeguarding and policy framework at Meridian Academy. Fictional demo content.", "/about/policies");

const categories = [
  { icon: "ShieldCheck" as const, t: "Child Safeguarding", items: ["Designated safeguarding lead", "Clear reporting and escalation", "Safer recruitment checks", "Staff & visitor training"] },
  { icon: "Heart" as const, t: "Wellbeing & Inclusion", items: ["Anti-bullying approach", "Inclusive learning support", "Wellbeing curriculum", "Confidential student support"] },
  { icon: "Mail" as const, t: "Data & Privacy", items: ["Access and consent controls", "Staff-only role permissions", "Secure data handling", "Transparent records access"] },
  { icon: "Alert" as const, t: "Health & Safety", items: ["Campus security and supervision", "First-aid trained staff", "Site risk assessments", "Transport safety procedures"] },
];

export default function PoliciesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Safeguarding & Policies"
        title="Keeping every child safe and supported"
        description="A concept overview of our safeguarding and policy framework. This is illustrative content for a fictional institution — not a real legal or compliance document."
        breadcrumbs={[{ label: "About", href: "/about" }, { label: "Policies" }]}
      />
      <Section className="bg-white">
        <Container>
          <div className="grid gap-5 md:grid-cols-2">
            {categories.map((c) => {
              const Cmp = Icon[c.icon];
              return (
                <div key={c.t} className="rounded-2xl border border-navy-900/8 bg-white p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-mint-soft text-mint">
                    <Cmp className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-serif text-xl font-semibold text-navy-950">{c.t}</h3>
                  <ul className="mt-4 space-y-2.5">
                    {c.items.map((i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                        <Icon.Check className="mt-0.5 h-4 w-4 shrink-0 text-mint" /> {i}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="mt-12 rounded-3xl bg-navy-950 p-8 text-white sm:p-10">
            <h3 className="font-serif text-2xl font-semibold">Privacy-ready architecture</h3>
            <p className="mt-3 max-w-3xl leading-relaxed text-slate-300">
              This concept platform is designed with role-based access, protected routes and a
              secure API foundation, so real deployments can be built on a privacy-ready
              foundation. This demo uses fictional student data only, and it does not claim any
              formal certification or legal compliance.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {["Role-based access", "Secure routes", "Input validation", "Audit-ready design"].map((x) => (
                <span key={x} className="rounded-full border border-white/15 px-4 py-1.5 text-sm text-slate-200">
                  {x}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </Section>
      <Section className="bg-cream">
        <Container size="narrow">
          <div className="rounded-2xl border border-navy-900/8 bg-white p-6 text-center">
            <p className="text-sm text-slate-500">
              Have a concern? Families are always encouraged to speak with their child's class
              teacher or our wellbeing team. <span className="text-slate-400">(Fictional demo contact)</span>
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
