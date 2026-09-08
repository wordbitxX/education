import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { journalPosts, brand } from "@/lib/data";
import { img } from "@/lib/images";
import { Icon } from "@/components/icons";
import { Container, Section, Badge, Button } from "@/components/ui";
import Breadcrumbs from "@/components/site/Breadcrumbs";
import { pageMeta } from "@/lib/seo";

type Block = { h?: string; p?: string; list?: string[] };
type Article = { blocks: Block[]; takeaways: string[]; related: string[] };

const content: Record<string, Article> = {
  "what-is-school-management-software": {
    blocks: [
      { p: "School management software is a connected platform that runs the day-to-day operations of an educational institution. Rather than a single tool, it is usually a suite of modules — admissions, student records, attendance, timetabling, fees, examinations, communication and analytics — that share one source of truth." },
      { h: "Beyond spreadsheets and registers", p: "Most schools start with spreadsheets, paper registers and separate apps for every job. Over time this creates silos: attendance in one place, fees in another, results in a third. School management software joins them together, so a parent question, an exam result and a fee statement all draw from the same accurate record." },
      { h: "Who uses it", list: ["Administrators for reporting and oversight", "Teachers for attendance, marks and lesson planning", "Parents for visibility of their child's day", "Students for timetable, tasks and results", "Finance teams for invoicing and collections"] },
      { p: "In practice, a good system reduces admin hours, improves accuracy and gives leaders reliable insight to make better decisions." },
    ],
    takeaways: ["One connected record of truth", "Modular: admissions, attendance, fees, exams, LMS", "Role-based access for staff, parents and students"],
    related: ["school-erp-vs-traditional-administration", "how-to-choose-school-management-software"],
  },
  "school-erp-vs-traditional-administration": {
    blocks: [
      { p: "The difference between a school ERP and traditional administration is not just technology — it is the shift from reactive record-keeping to proactive, data-informed operations." },
      { h: "Traditional administration", p: "Paper registers, separate spreadsheets and manual handovers. Processes can work, but they depend on staff memory, duplicate data entry and slow communication. Reporting is often retrospective and time-consuming." },
      { h: "A connected ERP", p: "Every module writes to the same record. An absence recorded by a teacher instantly appears in the parent portal and in attendance analytics. A fee payment updates the ledger and the receipt in real time. Burdensome, repetitive work is automated or removed." },
      { list: ["Less double-entry and fewer errors", "Real-time visibility for families and staff", "Consistent, audit-ready records", "Time returned to teaching and support"] },
    ],
    takeaways: ["From silos to a single source of truth", "Real-time, not retrospective", "Reduces repetitive manual admin"],
    related: ["what-is-school-management-software", "digital-transformation-in-education"],
  },
  "benefits-of-a-parent-portal": {
    blocks: [
      { p: "A parent portal is the digital window a family has into their child's school day. Done well, it builds trust and reduces the questions that fill an office's time." },
      { h: "What a parent can see", list: ["Today's timetable and the day's classes", "Attendance and punctuality", "Homework and upcoming assignments", "Upcoming exams and recent results", "Fee status and downloadable invoices", "Messages from teachers and announcements"] },
      { h: "Why it matters", p: "Parents feel informed and involved rather than chasing information. Schools answer fewer repetitive enquiries, and communication is timely rather than delayed to the next printed newsletter." },
      { p: "A polished parent experience also makes an institution feel modern and premium — a genuine point of difference for families choosing a school." },
    ],
    takeaways: ["Transparency and trust for families", "Reduces repetitive office enquiries", "A point of difference when choosing a school"],
    related: ["why-schools-need-a-student-portal", "how-online-school-admissions-work"],
  },
  "how-online-school-admissions-work": {
    blocks: [
      { p: "An online admission system turns a multi-week, paperwork-heavy process into an organised digital journey that a family can complete at home — and that a school can track end to end." },
      { h: "A typical digital journey", list: ["Select the programme and campus", "Enter student and guardian details", "Share the academic background", "Upload supporting documents", "Schedule an interview or assessment", "Receive a decision and enrolment pack"] },
      { h: "Tracking and transparency", p: "A key advantage is the application ID. Families see exactly where they are in the process — received, under review, documents, interview, decision — without calling to ask." },
      { p: "For the school, the same data flows into student records, so enrolling a successful applicant is a matter of a few clicks rather than a re-keying exercise." },
    ],
    takeaways: ["A guided journey families can complete at home", "Transparent status via application ID", "Data flows straight into student records"],
    related: ["what-is-school-management-software", "school-ERP-vs-traditional-administration"],
  },
  "why-schools-need-a-student-portal": {
    blocks: [
      { p: "A student portal gives learners ownership of their own education. Instead of waiting to be told, students can see their timetable, tasks, resources and results in one place." },
      { h: "Building independence", p: "When a student can see what is due, when the next exam is and how they are progressing, they develop the self-management and study skills that carry into further study and work." },
      { h: "What to include", list: ["Personal timetable and today's classes", "Assignments, homework and submission status", "Learning resources and course content", "Exams, results and progress trends", "Attendance and announcements"] },
      { p: "More than convenience, a thoughtful student portal supports wellbeing — students stay organised and feel in control rather than overwhelmed." },
    ],
    takeaways: ["Students take ownership of their learning", "Everything in one organised place", "Supports study skills and wellbeing"],
    related: ["benefits-of-a-parent-portal", "school-lms-guide"],
  },
  "school-lms-guide": {
    blocks: [
      { p: "A learning management system (LMS) is where teaching and learning happen online — the place courses live, lessons are delivered and students complete work." },
      { h: "What an LMS does", list: ["Organise courses and lessons", "Deliver video, reading and interactive content", "Host assignments, quizzes and feedback", "Track student progress and completion", "Give teachers and parents visibility"] },
      { h: "Choosing an LMS", p: "Look beyond the feature list. Consider how well it fits the school's curriculum, how students actually experience it, how easily teachers can use it, and whether progress flows through to reporting the school already relies on." },
      { p: "The best result is an LMS that feels less like a separate product and more like a natural part of the school's ecosystem." },
    ],
    takeaways: ["Where learning content and tasks live", "Progress and completion tracking", "Must fit the curriculum and teacher workflow"],
    related: ["why-schools-need-a-student-portal", "digital-transformation-in-education"],
  },
  "school-attendance-management-systems": {
    blocks: [
      { p: "Attendance is more than a register — it is one of the most reliable early indicators of engagement and wellbeing. A modern attendance system treats it as live operational data." },
      { h: "From register to insight", p: "A teacher marks a class in moments from a device. The record updates immediately: parents can see a late arrival, the attendance team can spot patterns, and leaders can review class-level analytics." },
      { h: "Beyond counting", list: ["Real-time records for every student", "Punctuality and pattern tracking", "Class and teacher attendance analytics", "Notification to families on absence", "Data that supports safeguarding conversations"] },
    ],
    takeaways: ["Attendance is live operational data", "Supports safety and wellbeing", "Class-level and individual analytics"],
    related: ["what-is-school-management-software", "school-erp-vs-traditional-administration"],
  },
  "digital-transformation-in-education": {
    blocks: [
      { p: "Digital transformation in education is not about buying more technology. It is about rethinking how an institution works so that people can focus on what matters most — teaching and supporting students." },
      { h: "Where to start", p: "Begin with the operational core: a single record for students, the automated joining of admissions to enrolments, and the day-to-day loop of attendance, communication and reporting. Then add the experience layer: portals for students and parents, and an LMS for learning." },
      { h: "A sensible roadmap", list: ["Audit current processes and pain points", "Implement the core record and modules", "Open secure portals to families and staff", "Add an LMS and learning content", "Use data to improve and report"] },
      { p: "The goal is a calmer, more transparent institution — with less friction and better decisions." },
    ],
    takeaways: ["Processes first, technology second", "Core module footprint, then experience layer", "Less friction, better decisions"],
    related: ["school-erp-vs-traditional-administration", "how-to-choose-school-management-software"],
  },
  "ai-in-education": {
    blocks: [
      { p: "Interest in AI in education has grown quickly, but the most valuable applications are the least flashy: removing small frictions and making information easy to find. The best principle is that AI should augment people — not replace them." },
      { h: "Practical uses in a school", list: ["A student assistant that helps find resources and understand processes", "Conversational answers to admissions and policy questions", "Support for lesson planning and feedback (with teacher review)", "Quick summaries of attendance or results for staff"] },
      { h: "Responsible adoption", p: "AI tools should be transparent, grounded in a school's own information, and always clearly secondary to human judgement. Teachers remain the centre of learning; an AI assistant is an aid, never a substitute. Responsible adoption also means being honest about what the technology can and cannot do." },
    ],
    takeaways: ["Augment people, never replace them", "Best value in removing small frictions", "Be transparent about capability and limits"],
    related: ["school-lms-guide", "digital-transformation-in-education"],
  },
  "how-to-choose-school-management-software": {
    blocks: [
      { p: "Choosing school management software is a long-term decision. A clear framework makes it easier to compare options honestly and avoid paying for modules you will never use." },
      { h: "A decision framework", list: ["Map the modules you genuinely need", "Test the experience for parents, students and teachers", "Check reporting and analytics depth", "Understand data, privacy and role permissions", "Consider integration and total cost of ownership", "Ask about onboarding, training and support"] },
      { h: "Look for a partner, not just a product", p: "The best vendors understand education and will work with your team through migration and adoption. Choose a company that will be there after go-live — that is often more important than a long feature list." },
    ],
    takeaways: ["Map real needs before comparing", "Judge by user experience, not features alone", "Choose a partner for the long term"],
    related: ["what-is-school-management-software", "digital-transformation-in-education"],
  },
};

export function generateStaticParams() {
  return journalPosts.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = journalPosts.find((p) => p.id === slug);
  if (!post) return {};
  return pageMeta(post.title, post.excerpt);
}

export default async function JournalArticle({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = journalPosts.find((p) => p.id === slug);
  if (!post) notFound();
  const article: Article = content[slug] ?? {
    blocks: [
      { p: post.excerpt },
      {
        h: "Why it matters for schools in Pakistan",
        p: "From Lahore to Karachi, schools and academies that digitized early are seeing measurable gains — fewer admin hours, faster fee collection and parents who feel connected day to day. The practical question is not whether to go digital, but in what order: core records first, then the experience layer families actually touch.",
      },
      {
        h: "What to look for",
        list: [
          "Modules that fit your real process — not a forced template",
          "A mobile-first parent experience (most families are on their phones)",
          "PKR billing with cash, bank, JazzCash and Easypaisa options",
          "Urdu-friendly content where your community needs it",
          "A vendor who supports you after launch, not just at sale",
        ],
      },
      {
        p: "If you are comparing platforms, start with a working demo, map your current process against it, and ask for a data-migration plan before signing anything. A good vendor will happily show you the boring screens — reports, defaulters and payroll — not just the brochure.",
      },
    ],
    takeaways: [
      "Map your process before comparing tools",
      "Mobile-first is non-negotiable for parent adoption",
      "Choose a partner who stays after go-live",
    ],
    related: [],
  };
  const related = (article?.related ?? []).map((id) => journalPosts.find((p) => p.id === id)).filter(Boolean);

  return (
    <>
      <div className="pt-28">
        <Container>
          <Breadcrumbs items={[{ label: "Journal", href: "/journal" }, { label: post.title }]} />
        </Container>
      </div>
      <article className="pb-16 pt-10">
        <Container size="narrow">
          <div className="flex flex-wrap items-center gap-2">
            <Badge tone="mint">{post.category}</Badge>
            <Badge tone="navy">{post.tag}</Badge>
            <span className="text-sm text-slate-400">{post.date} · {post.read} read</span>
          </div>
          <h1 className="mt-5 font-serif text-[clamp(2rem,5vw,3.25rem)] leading-[1.08] tracking-tight text-navy-950">
            {post.title}
          </h1>
          <p className="mt-4 text-lg text-slate-600">{post.excerpt}</p>

          <div className="mt-8 overflow-hidden rounded-2xl">
            <img src={img(post.image, 1000, 560)} alt={post.title} className="aspect-[16/9] w-full object-cover" loading="eager" />
          </div>

          <div className="mt-10 space-y-6">
            {article?.blocks.map((b, i) => (
              <div key={i}>
                {b.h && <h2 className="mb-3 mt-8 font-serif text-2xl font-semibold text-navy-950">{b.h}</h2>}
                {b.p && <p className="leading-relaxed text-slate-700">{b.p}</p>}
                {b.list && (
                  <ul className="mt-4 space-y-2.5">
                    {b.list.map((li) => (
                      <li key={li} className="flex items-start gap-3 text-slate-700">
                        <Icon.CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-mint" /> <span>{li}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {article?.takeaways && (
            <div className="mt-10 rounded-2xl bg-cream p-6">
              <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">Key takeaways</p>
              <ul className="mt-3 space-y-2">
                {article.takeaways.map((t) => (
                  <li key={t} className="flex items-start gap-2 text-sm text-navy-950">
                    <Icon.Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-mint" /> {t}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* WordbitX commercial CTA */}
          <div className="mt-8 rounded-3xl bg-navy-950 p-8 text-white sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-300">WordbitX</p>
            <h3 className="mt-2 font-serif text-2xl font-semibold">Build a platform like the one behind this site</h3>
            <p className="mt-2 max-w-lg text-slate-300">
              WordbitX is a school management software and education software development company.
              We design and build custom school websites, portals, LMS and ERP platforms.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button href="https://www.wordbitxtech.com/" variant="light" icon>Build Your Education Platform</Button>
              <Button href="/journal" variant="outline-light">More guides</Button>
            </div>
          </div>

          {related.length > 0 && (
            <div className="mt-12">
              <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">Continue reading</p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {related.filter(Boolean).map((r) => r && (
                  <a key={r.id} href={`/journal/${r.id}`} className="group rounded-2xl border border-navy-900/8 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-lg">
                    <Badge tone="neutral">{r.category}</Badge>
                    <h3 className="mt-2 font-serif text-lg font-semibold text-navy-950 group-hover:text-navy-800">{r.title}</h3>
                    <p className="mt-1 text-sm text-slate-500">{r.read} read</p>
                  </a>
                ))}
              </div>
            </div>
          )}
        </Container>
      </article>
    </>
  );
}
