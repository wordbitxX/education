import { brand } from "@/lib/data";
import { Icon } from "@/components/icons";
import { Container, Section, SectionHeading, Button } from "@/components/ui";
import PageHeader from "@/components/site/PageHeader";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("Careers", "Join a fictional international academy. A concept careers page for Meridian Academy.");

const roles = [
  { title: "Head of Science", dept: "STEM", type: "Full-time", tag: "Leadership" },
  { title: "Early Years Educator", dept: "Early Years", type: "Full-time", tag: "Teaching" },
  { title: "Mathematics Teacher", dept: "Mathematics", type: "Full-time", tag: "Teaching" },
  { title: "Technology & Coding Lead", dept: "Technology", type: "Full-time", tag: "Teaching" },
  { title: "Student Wellbeing Coordinator", dept: "Student Life", type: "Full-time", tag: "Support" },
  { title: "Admissions Advisor", dept: "Operations", type: "Full-time", tag: "Office" },
];

export default function CareersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Careers"
        title="Do the best work of your career"
        description="We are always looking for exceptional educators and professionals who share our belief in personal, connected learning. This is a fictional concept careers page."
        breadcrumbs={[{ label: "About", href: "/about" }, { label: "Careers" }]}
      />
      <Section>
        <Container>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {roles.map((r) => (
              <div key={r.title} className="flex flex-col rounded-2xl border border-navy-900/8 bg-white p-7">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-navy-50 px-2.5 py-1 text-[11px] font-medium text-navy-700">{r.tag}</span>
                  <span className="text-xs text-slate-400">{r.type}</span>
                </div>
                <h3 className="mt-4 font-serif text-lg font-semibold text-navy-950">{r.title}</h3>
                <p className="mt-1 text-sm text-mint">{r.dept}</p>
                <div className="mt-5 flex items-center justify-between border-t border-navy-900/8 pt-4">
                  <span className="text-xs text-slate-400">Fictional vacancy</span>
                  <span className="flex items-center gap-1.5 text-sm font-medium text-mint">
                    View role <Icon.ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 rounded-3xl bg-navy-950 p-8 text-white sm:p-12">
            <div className="grid items-center gap-8 lg:grid-cols-2">
              <div>
                <SectionHeading eyebrow="Join our community" title="Why teach at a concept academy?" tone="light" />
                <p className="mt-4 leading-relaxed text-slate-300">
                  A culture of trust, modern tools that remove admin friction, real professional
                  growth and the chance to shape a school that treats teaching as a craft.
                </p>
              </div>
              <div className="space-y-4">
                {["Small classes, real mentorship", "A technology platform that supports teaching", "Strong wellbeing and work-life balance", "Ongoing specialist development"].map((x) => (
                  <div key={x} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.05] p-4">
                    <Icon.CheckCircle className="h-5 w-5 shrink-0 text-teal-300" />
                    <span className="text-sm">{x}</span>
                  </div>
                ))}
              </div>
            </div>
            <Button href="/contact" variant="light" className="mt-8" icon>
              Register your interest
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
