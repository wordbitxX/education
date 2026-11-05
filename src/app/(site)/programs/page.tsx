import { brand, programCategories, programs } from "@/lib/data";
import { Icon } from "@/components/icons";
import { Container, Section, SectionHeading, Button } from "@/components/ui";
import PageHeader from "@/components/site/PageHeader";
import { ProgramsExplorer } from "@/components/home";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Academic Programs",
  `Explore the academic programs at ${brand.name}: Early Years, Primary, Middle School, Secondary, O-Level, A-Level, Foundation, Professional and Academy programs.`,
  "/programs"
);

export default function ProgramsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Academic programs"
        title="Learn at every stage of life"
        description="Nine programme families, from play-based early years to university-facing A-Level study and professional courses. Filter below to find the right journey."
        breadcrumbs={[{ label: "Programs" }]}
      />
      <Section>
        <Container>
          <ProgramsExplorer />
          <div className="mt-16 grid gap-4 sm:grid-cols-3">
            {programCategories.map((c) => (
              <div key={c} className="flex items-center gap-3 rounded-xl border border-navy-900/8 bg-white p-4">
                <Icon.GraduationCap className="h-5 w-5 shrink-0 text-mint" />
                <span className="text-sm font-medium text-navy-950">{c}</span>
              </div>
            ))}
          </div>
        </Container>
      </Section>
      <Section className="bg-navy-950 text-white">
        <Container>
          <div className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
            <SectionHeading eyebrow="Open for applications" title="Not sure where to begin?" tone="light" description="Our admissions team will help you find the right programme and starting point." />
            <Button href="/admissions" variant="light" icon className="shrink-0">
              Start your enquiry
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
