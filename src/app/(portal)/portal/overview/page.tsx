import { brand } from "@/lib/data";
import { Icon, type IconName } from "@/components/icons";
import { Container, Section, SectionHeading, Card } from "@/components/ui";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("Portals", `Access the ${brand.name} student, parent, teacher and admin portals plus the LMS and LearnMate AI assistant.`, "/portal/overview");

const portals: { key: string; title: string; desc: string; icon: IconName; color: string; href: string }[] = [
  { key: "student", title: "Student Portal", desc: "Timetable, assignments, exams, attendance, courses and progress in one place.", icon: "User", color: "#0f766e", href: "/portal/student" },
  { key: "parent", title: "Parent Portal", desc: "Follow your child's day — attendance, homework, fees, exams and messages.", icon: "Users", color: "#2b527a", href: "/portal/parent" },
  { key: "teacher", title: "Teacher Portal", desc: "Classes, attendance, assignments, marks entry, lesson plans and resources.", icon: "BookOpen", color: "#b8863b", href: "/portal/teacher" },
  { key: "admin", title: "Admin Dashboard", desc: "Run the institution: students, admissions, teachers, fees, attendance, exams.", icon: "Layout", color: "#16304c", href: "/portal/admin" },
  { key: "lms", title: "Learning Hub (LMS)", desc: "Courses, lessons, quizzes, assignments, resources and progress tracking.", icon: "Layers", color: "#0f766e", href: "/portal/lms" },
  { key: "assistant", title: "LearnMate AI", desc: "An AI assistant that helps you find resources, understand processes and more.", icon: "Robot", color: "#16304c", href: "/portal/assistant" },
];

export default function PortalOverview() {
  return (
    <>
      <Section className="bg-navy-950 text-white">
        <Container className="pb-0 pt-20">
          <SectionHeading eyebrow="Meridian ecosystem" title="Choose your space" tone="light" description="Each portal is a polished, mobile-first experience built for its audience. All data is fictional demo content." />
        </Container>
      </Section>
      <Section className="-mt-12">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {portals.map((p) => {
              const Cmp = Icon[p.icon];
              return (
                <a key={p.key} href={p.href} className="group">
                  <Card hover className="h-full">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl text-white" style={{ backgroundColor: p.color }}>
                      <Cmp className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 font-serif text-xl font-semibold text-navy-950">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.desc}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-mint">
                      Open <Icon.ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Card>
                </a>
              );
            })}
          </div>
        </Container>
      </Section>
    </>
  );
}
