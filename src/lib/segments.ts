import type { IconName } from "@/components/icons";

/* ============================================================================
   AUDIENCE SEGMENTS — /solutions/[slug]
   Each segment is a full SEO landing page targeting WordbitX education keywords.
   ========================================================================== */

export type Segment = {
  slug: string;
  icon: IconName;
  title: string;
  cardText: string;
  h1: string;
  metaTitle: string;
  metaDesc: string;
  hero: string;
  image: string;
  stats: { v: string; l: string }[];
  challenges: string[];
  modules: { icon: IconName; t: string; d: string }[];
  outcomes: string[];
  faqs: { q: string; a: string }[];
  related: string[];
};

export const segments: Segment[] = [
  {
    slug: "schools",
    icon: "GraduationCap",
    title: "Schools",
    cardText: "K-12 private schools — classes, sections, timetables, report cards and daily parent communication.",
    h1: "School Management Software for Pakistani Schools",
    metaTitle: "School Management Software for Schools",
    metaDesc:
      "WordbitX school management software for Pakistani private schools — admissions, attendance, PKR fee challans, exams, report cards and parent portal. Request a free demo.",
    hero: "From a single-branch primary school in Multan to a 2,000-student institution in Lahore — run admissions, attendance, fees, exams and parent communication from one platform built by WordbitX Software Company.",
    image: "classroom",
    stats: [
      { v: "K-12", l: "Full coverage" },
      { v: "PKR", l: "Fee challans" },
      { v: "FBISE / BISE", l: "Grading ready" },
    ],
    challenges: [
      "Attendance registers that never reach parents the same day",
      "Fee registers, Excel sheets and manual challan writing",
      "Result compilation taking days at the end of every term",
      "Parents calling the office for information they should already have",
    ],
    modules: [
      { icon: "IdCard", t: "Student Management", d: "One verified record per student — admission to leaving certificate." },
      { icon: "Clipboard", t: "Digital Attendance", d: "Marked in seconds; absence alerts reach parents instantly." },
      { icon: "Receipt", t: "Fee Challans in PKR", d: "Monthly tuition, transport and exam fees with defaulter tracking." },
      { icon: "Award", t: "Exams & Report Cards", d: "Marks entry, grading and printable report cards per term." },
      { icon: "Users", t: "Parent Portal", d: "Attendance, homework, fees and results on the parent's phone." },
      { icon: "Calendar", t: "Timetable", d: "Class, teacher and room scheduling with conflict detection." },
    ],
    outcomes: [
      "Office staff save hours every week on fees and attendance",
      "Parents get same-day visibility of their child's school day",
      "Term results compiled in hours instead of days",
      "Complete academic history for every student, always available",
    ],
    faqs: [
      { q: "Which examination boards are supported?", a: "Grading is configurable — FBISE, BISE Lahore/Karachi and Cambridge O-Level style grading can all be set per class group." },
      { q: "Can we migrate our existing student data?", a: "Yes. WordbitX migrates students, parents, fee balances and past results, then verifies them with your team before go-live." },
      { q: "How long does implementation take?", a: "A typical single-campus school goes live in 4–8 weeks including migration and staff training." },
    ],
    related: ["academies", "colleges", "multi-campus"],
  },
  {
    slug: "academies",
    icon: "Lightbulb",
    title: "Academies & Coaching Centers",
    cardText: "Batches, entry tests, monthly fees and fast result publishing for tuition centers and test-prep academies.",
    h1: "Academy & Coaching Center Management Software",
    metaTitle: "Academy Management Software for Coaching Centers",
    metaDesc:
      "Academy management software in Pakistan by WordbitX — batches, entry tests, monthly PKR fee cycles, attendance and instant result publishing for coaching centers.",
    hero: "Academies run on batches, not classrooms — and on monthly cash flow, not term reports. WordbitX builds academy management software designed around exactly how tuition centers and test-prep institutes in Pakistan actually operate.",
    image: "engaged",
    stats: [
      { v: "Batch-first", l: "Enrolment model" },
      { v: "Monthly", l: "Fee cycles" },
      { v: "Same-day", l: "Result publishing" },
    ],
    challenges: [
      "Students enrolled in multiple batches with different fees",
      "Monthly fee collection leaking without systematic reminders",
      "Entry test results taking days to compile and announce",
      "No easy way to prove progress to fee-paying parents",
    ],
    modules: [
      { icon: "Grid", t: "Batches & Seats", d: "Multiple batches per student with per-batch fees and timetables." },
      { icon: "Pencil", t: "Entry Tests", d: "Schedule, score and rank entry tests; publish merit lists fast." },
      { icon: "Coins", t: "Monthly Fee Cycles", d: "Recurring PKR fees with JazzCash/Easypaisa options and reminders." },
      { icon: "TrendingUp", t: "Result Sheets", d: "Weekly and monthly tests published to students and parents." },
      { icon: "Chat", t: "Parent Communication", d: "WhatsApp/SMS-ready attendance and result updates build retention." },
      { icon: "Branch", t: "Multi-Branch", d: "Every branch isolated, the owner sees the combined picture." },
    ],
    outcomes: [
      "Fee leakage reduced through systematic monthly reminders",
      "Entry test admissions processed in a single day",
      "Parents see progress — improving retention and referrals",
      "Owners get real cash-flow visibility across every branch",
    ],
    faqs: [
      { q: "How is this different from school software?", a: "Batch-based enrolment, entry-test flows and monthly fee cycles replace the term-based school model — the workflow matches how academies really run." },
      { q: "Can students join multiple batches?", a: "Yes — a student can be enrolled in several batches, each with its own timetable, attendance and fee." },
      { q: "Do we get a website with online admissions?", a: "Most academy clients launch with a matching website, online admission form and results page built by WordbitX." },
    ],
    related: ["schools", "education-groups", "colleges"],
  },
  {
    slug: "colleges",
    icon: "BookOpen",
    title: "Colleges",
    cardText: "Programs, intakes, semesters, course registration and transcripts for degree colleges.",
    h1: "College Management Software in Pakistan",
    metaTitle: "College Management Software & Student Information System",
    metaDesc:
      "College management software Pakistan by WordbitX — programs, semesters, course registration, CGPA results, transcripts and PKR fee management for degree colleges.",
    hero: "Degree colleges juggle intakes, semesters, course registration and departmental results. WordbitX college management software gives every department its own workflow while the registrar and accounts office see one accurate picture.",
    image: "interactive",
    stats: [
      { v: "Semester", l: "Based structure" },
      { v: "CGPA", l: "Auto-calculated" },
      { v: "Per-program", l: "Fee structures" },
    ],
    challenges: [
      "Course registration handled on paper each semester",
      "CGPA calculated manually across multiple result sheets",
      "Different fee structures per program creating accounting chaos",
      "Transcript requests taking weeks to fulfil",
    ],
    modules: [
      { icon: "Layers", t: "Programs & Intakes", d: "Multi-program structure with intakes and semester progression." },
      { icon: "Notebook", t: "Course Registration", d: "Students register per semester within credit and seat limits." },
      { icon: "Award", t: "CGPA & Results", d: "Credit-weighted CGPA calculated automatically from verified marks." },
      { icon: "Certificate", t: "Transcripts", d: "Generate verified transcripts and degree records on demand." },
      { icon: "Receipt", t: "Program-wise Fees", d: "Separate fee structures per program, semester and category." },
      { icon: "Lock", t: "Department Access", d: "Each department manages its own faculty, classes and results." },
    ],
    outcomes: [
      "Semester registration completed online, not in queues",
      "Transcripts issued the same day from verified data",
      "Accounts reconcile program-wise fees without spreadsheets",
      "Department heads work independently, registrar sees everything",
    ],
    faqs: [
      { q: "Does it calculate CGPA automatically?", a: "Yes — credit-based CGPA is calculated per program with configurable grade points and displayed on transcripts." },
      { q: "Can departments work independently?", a: "Yes. Role-based access lets each department manage its own classes, faculty and results while the registrar has full oversight." },
      { q: "Is it suitable for HEC-affiliated colleges?", a: "The semester, credit and transcript structures follow standard higher-education patterns and are fully configurable to your affiliation requirements." },
    ],
    related: ["universities", "schools", "education-groups"],
  },
  {
    slug: "universities",
    icon: "Compass",
    title: "Universities",
    cardText: "Departments, faculties, examination workflows and student records at enterprise scale.",
    h1: "University Management System in Pakistan",
    metaTitle: "University Management System & Student Information System",
    metaDesc:
      "University management system Pakistan by WordbitX — faculties, departments, course catalog, examination workflows, transcripts and enterprise reporting at scale.",
    hero: "Universities need more than school software scaled up. WordbitX builds enterprise university management systems with faculties, departments, examination workflows, research administration and the security a registrar's office expects.",
    image: "library",
    stats: [
      { v: "Enterprise", l: "Scale & security" },
      { v: "Faculty", l: "Level structure" },
      { v: "Audit-ready", l: "Access logs" },
    ],
    challenges: [
      "Thousands of concurrent users across faculties and campuses",
      "Examination workflows spanning marking, moderation and publication",
      "Student records that must remain verifiable for decades",
      "Compliance-grade access control and audit trails",
    ],
    modules: [
      { icon: "Building", t: "Faculties & Departments", d: "Full institutional hierarchy with delegated administration." },
      { icon: "Notebook", t: "Course Catalog", d: "Programs, courses, credits and prerequisite management." },
      { icon: "Award", t: "Examination Workflows", d: "Date sheets, invigilation, marking, moderation and publication." },
      { icon: "IdCard", t: "Student Records", d: "Admission to convocation — a verified lifelong academic record." },
      { icon: "PieChart", t: "Institutional Analytics", d: "Enrolment, performance and finance reporting for leadership." },
      { icon: "Lock", t: "Enterprise Security", d: "Role-based access, audit logs and institution-level data isolation." },
    ],
    outcomes: [
      "Examination cycles run to a defined, auditable process",
      "Departments operate autonomously within one system",
      "Leadership gets institutional analytics without data requests",
      "Student records stay verifiable and secure for the long term",
    ],
    faqs: [
      { q: "Can it handle thousands of concurrent users?", a: "Yes — the architecture is built for large concurrent usage with per-department data views and centralized reporting." },
      { q: "Does it support multiple campuses?", a: "Yes — multi-campus management with centralized administration and isolated per-campus data." },
      { q: "How is sensitive student data secured?", a: "Role-based access, secure authentication, audit logging and institution-level data isolation form the security foundation. We do not claim certifications we have not obtained." },
    ],
    related: ["colleges", "education-groups", "madaris"],
  },
  {
    slug: "madaris",
    icon: "Moon",
    title: "Madaris",
    cardText: "Nazra, Hifz and Qirat tracking alongside general subjects — with regular parent updates.",
    h1: "Madrasa Management System — Hifz, Nazra & Dars-e-Nizami",
    metaTitle: "Madrasa Management System Pakistan",
    metaDesc:
      "Madrasa management software by WordbitX — Hifz sabaq/sabqi/manzil tracking, Nazra progress, Dars-e-Nizami records, boarding and parent updates in Urdu and English.",
    hero: "Madaris have their own academic rhythm — daily sabaq, sabqi and manzil, Nazra progression and Dars-e-Nizami stages. WordbitX builds madrasa management software that respects that structure while adding modern records, fees and parent communication.",
    image: "elementary",
    stats: [
      { v: "Hifz", l: "Daily tracking" },
      { v: "اردو", l: "Urdu support" },
      { v: "Boarding", l: "Hostel module" },
    ],
    challenges: [
      "Hifz progress recorded in personal notebooks, easily lost",
      "Parents living far away with no visibility of daily progress",
      "Boarding, meals and attendance managed entirely on paper",
      "Donations and fee support tracked without proper records",
    ],
    modules: [
      { icon: "Book", t: "Hifz & Nazra Tracking", d: "Daily sabaq, sabqi and manzil records with para-wise progress." },
      { icon: "Notebook", t: "Dars-e-Nizami Records", d: "Stage-wise academic records alongside general subjects." },
      { icon: "Bed", t: "Hostel & Boarding", d: "Room allocation, boarding attendance and guardian records." },
      { icon: "Chat", t: "Parent Updates (Urdu)", d: "Regular progress messages to families in Urdu or English." },
      { icon: "Coins", t: "Fees & Support", d: "Fee records with scholarship and support tracking in PKR." },
      { icon: "Certificate", t: "Certificates", d: "Completion and Hifz certificates generated from verified records." },
    ],
    outcomes: [
      "Every student's Hifz progress recorded and never lost",
      "Distant families receive regular, meaningful progress updates",
      "Boarding and attendance managed with proper accountability",
      "Transparent records for fees, support and completion",
    ],
    faqs: [
      { q: "Does it support Urdu?", a: "Yes — the interface and communications support Urdu and English, with a right-to-left ready layout." },
      { q: "Can it track daily Hifz progress?", a: "Yes — daily sabaq, sabqi and manzil are recorded per student with para-wise and juz-wise progress views." },
      { q: "Can we manage boarding students?", a: "Yes — the hostel module covers room allocation, boarding attendance and guardian contact records." },
    ],
    related: ["schools", "education-groups", "academies"],
  },
  {
    slug: "education-groups",
    icon: "Building",
    title: "Multi-Campus Groups",
    cardText: "Run every branch from one login — centralized reports with isolated campus data.",
    h1: "Multi-Campus Education Management for School Groups",
    metaTitle: "Multi-Campus School Management System",
    metaDesc:
      "Multi-campus education ERP by WordbitX — run 2 to 50 branches from one platform with isolated campus data, centralized reporting, consolidated fees and group-level analytics.",
    hero: "Education groups need branch autonomy and head-office control at the same time. WordbitX multi-campus education ERP keeps each campus's data isolated while giving the group office consolidated students, staff, fees, attendance and results.",
    image: "classroom",
    stats: [
      { v: "2–50+", l: "Campuses" },
      { v: "Isolated", l: "Campus data" },
      { v: "One", l: "Head-office view" },
    ],
    challenges: [
      "Each branch keeping its own records in its own format",
      "Group-level reporting requiring days of manual consolidation",
      "No consistent fee structure or policy across campuses",
      "Head office learning about problems weeks too late",
    ],
    modules: [
      { icon: "Branch", t: "Campus Switching", d: "One login, switch campuses instantly — data stays isolated." },
      { icon: "PieChart", t: "Centralized Reporting", d: "Consolidated students, fees, attendance and results in one view." },
      { icon: "Coins", t: "Group Finance", d: "Compare collection, outstanding and expenses across all branches." },
      { icon: "Users", t: "Group HR", d: "Staff, payroll and transfers managed across the whole network." },
      { icon: "Lock", t: "Role-Based Access", d: "Campus admins see their branch; group admins see everything." },
      { icon: "Cloud", t: "Cloud-Based", d: "Every branch on the same version, always in sync, always backed up." },
    ],
    outcomes: [
      "Group reports available instantly instead of after weeks",
      "Consistent policies and fee structures across all campuses",
      "Underperforming branches identified early, not at year end",
      "Adding a new campus takes days, not a new system",
    ],
    faqs: [
      { q: "How many campuses can the platform handle?", a: "The architecture supports networks from two branches to fifty or more, with per-campus isolation and group-level consolidation." },
      { q: "Can each campus have different fees?", a: "Yes — every campus can define its own fee structures, classes and timetables while the group office sees the combined finance picture." },
      { q: "Is campus data really isolated?", a: "Yes. Campus staff only access their own branch. Only group-level roles see consolidated data across the network." },
    ],
    related: ["schools", "colleges", "universities"],
  },
];

export function getSegment(slug: string) {
  return segments.find((s) => s.slug === slug);
}

/* ============================================================================
   BENEFIT PAGES — /platform/[slug]
   ========================================================================== */

export type Benefit = {
  slug: string;
  icon: IconName;
  title: string;
  cardText: string;
  metaTitle: string;
  metaDesc: string;
  hero: string;
  before: string[];
  after: string[];
  how: { icon: IconName; t: string; d: string }[];
  metric: { v: string; l: string }[];
  faqs: { q: string; a: string }[];
};

export const benefits: Benefit[] = [
  {
    slug: "save-administrative-time",
    icon: "Clock",
    title: "Save Administrative Time",
    cardText: "Automate the routine so your team spends minutes, not hours.",
    metaTitle: "Save Administrative Time with School Management Software",
    metaDesc:
      "Reduce school admin workload with WordbitX education ERP — automated attendance, fee challans, result compilation and reporting for Pakistani institutions.",
    hero: "Most school offices lose the majority of their week to work a system should be doing: writing challans, compiling attendance, chasing fees and typing results. Automating that work is the single fastest return on an education ERP.",
    before: [
      "Fee challans written or typed one student at a time",
      "Attendance registers collected and totalled by hand",
      "Term results compiled across dozens of spreadsheets",
      "Every parent question answered by searching paper files",
    ],
    after: [
      "Challans generated for an entire class in one click",
      "Attendance totalled live, with alerts already sent",
      "Result sheets built automatically from entered marks",
      "Parents answer their own questions in the portal",
    ],
    how: [
      { icon: "Zap", t: "Bulk generation", d: "Challans, report cards and certificates produced in batches." },
      { icon: "Clipboard", t: "One-tap attendance", d: "Teachers mark a class in under a minute from any device." },
      { icon: "PieChart", t: "Reports on demand", d: "Ten standard reports ready without building a spreadsheet." },
    ],
    metric: [
      { v: "1-click", l: "Class-wide challans" },
      { v: "< 1 min", l: "Class attendance" },
      { v: "10", l: "Standard reports" },
    ],
    faqs: [
      { q: "How much admin time can a school realistically save?", a: "It depends on your current process, but the biggest gains are always in fee challan generation, attendance totalling and result compilation — tasks that move from hours to minutes." },
      { q: "Do staff need training?", a: "WordbitX includes staff training as part of implementation. Most office staff are comfortable within a few days." },
    ],
  },
  {
    slug: "reduce-manual-work",
    icon: "CheckCircle",
    title: "Reduce Manual Work",
    cardText: "One record, entered once — no more re-typing across registers.",
    metaTitle: "Reduce Manual Work in Schools — Education ERP",
    metaDesc:
      "Stop duplicate data entry with WordbitX education ERP — one student record flows through admissions, attendance, fees, exams and reporting automatically.",
    hero: "The real cost of manual work is not the typing — it is the errors. When the same student is entered into an admission register, a fee register, an attendance sheet and a result sheet, four versions of the truth appear.",
    before: [
      "Student details re-typed into four different registers",
      "Fee balances that disagree between office and accounts",
      "Marks copied by hand from teacher sheets to result sheets",
      "Corrections that have to be made in several places",
    ],
    after: [
      "Enter a student once at admission — everything else inherits it",
      "One fee ledger shared by office, accounts and parents",
      "Teachers enter marks directly; results build themselves",
      "Correct once, corrected everywhere",
    ],
    how: [
      { icon: "IdCard", t: "Single student record", d: "Admission creates the record every module then uses." },
      { icon: "Layers", t: "Connected modules", d: "Fees, attendance and exams read the same underlying data." },
      { icon: "ShieldCheck", t: "Validation built in", d: "Input validation prevents the errors paper never catches." },
    ],
    metric: [
      { v: "1×", l: "Data entry, not 4×" },
      { v: "0", l: "Duplicate ledgers" },
      { v: "Live", l: "Corrections everywhere" },
    ],
    faqs: [
      { q: "What happens to our existing paper records?", a: "WordbitX migrates your current student, fee and result data into the system, then verifies it with your team before you go live." },
      { q: "Can teachers enter marks themselves?", a: "Yes — teachers enter marks in the teacher portal and results compile automatically after approval." },
    ],
  },
  {
    slug: "improve-parent-communication",
    icon: "MessageCircle",
    title: "Improve Parent Communication",
    cardText: "Alerts and notices reach families the moment they happen.",
    metaTitle: "Improve School Parent Communication — Parent Portal & WhatsApp",
    metaDesc:
      "Improve parent communication with WordbitX parent portal — instant attendance alerts, fee reminders, results and notices via app, WhatsApp and SMS.",
    hero: "In Pakistan, parents are on their phones — not reading printed circulars in a school bag. Communication that arrives the same hour builds trust; communication that arrives a week later erodes it.",
    before: [
      "Circulars printed and sent home in school bags",
      "Absences discovered by parents at the end of the day",
      "Fee reminders delivered by phone calls from the office",
      "Result day the only time parents see academic progress",
    ],
    after: [
      "Notices published to every parent instantly",
      "Absence alerts sent within the period it happened",
      "Automated fee reminders before and after the due date",
      "Progress visible every single day in the parent portal",
    ],
    how: [
      { icon: "Smartphone", t: "Mobile-first parent portal", d: "Attendance, fees, homework and results in one app-like view." },
      { icon: "Chat", t: "WhatsApp / SMS ready", d: "Connect your gateway and reach every family where they are." },
      { icon: "Megaphone", t: "Targeted announcements", d: "Send to all, a class, a section or just parents." },
    ],
    metric: [
      { v: "Same-hour", l: "Absence alerts" },
      { v: "3", l: "Channels: app, SMS, WhatsApp" },
      { v: "Targeted", l: "By class or section" },
    ],
    faqs: [
      { q: "Do you provide WhatsApp and SMS integration?", a: "The platform is integration-ready for WhatsApp Business and SMS gateways. WordbitX connects your chosen provider during implementation." },
      { q: "What if parents don't use smartphones?", a: "SMS reaches every family, and the portal works on any basic browser — no app installation required." },
    ],
  },
  {
    slug: "track-fees-easily",
    icon: "Wallet",
    title: "Track Fees Easily",
    cardText: "Challans, payments and defaulters in one live view.",
    metaTitle: "School Fee Management Software — Challans & Defaulters",
    metaDesc:
      "Fee management software for schools in Pakistan — PKR challans, JazzCash and Easypaisa options, automated reminders and live defaulter tracking by WordbitX.",
    hero: "Fee collection is the financial backbone of every private institution. When challans, payments and defaulters live in separate registers, money quietly leaks — and nobody notices until the month closes.",
    before: [
      "Outstanding balances known only after month-end closing",
      "Defaulters identified by manually scanning a register",
      "Reminders sent inconsistently, if at all",
      "Receipts written by hand with no searchable record",
    ],
    after: [
      "Live collection and outstanding figures at any moment",
      "Defaulter list generated automatically with one click",
      "Automated reminders before and after the due date",
      "Every receipt digital, searchable and reprintable",
    ],
    how: [
      { icon: "Receipt", t: "Digital fee challans", d: "Generated per class or student, shared instantly to parents." },
      { icon: "Bank", t: "Local payment options", d: "Cash, bank transfer, JazzCash and Easypaisa — integration ready." },
      { icon: "Alert", t: "Defaulter tracking", d: "Live list with amounts, due dates and one-tap reminders." },
    ],
    metric: [
      { v: "PKR", l: "Native currency" },
      { v: "Live", l: "Outstanding view" },
      { v: "1-tap", l: "Reminders" },
    ],
    faqs: [
      { q: "Does it support JazzCash and Easypaisa?", a: "The fee module is integration-ready for JazzCash, Easypaisa and card gateways. WordbitX connects your chosen provider — we do not claim live integrations that are not configured." },
      { q: "Can we apply discounts and scholarships?", a: "Yes — discounts, fines, sibling concessions and scholarships are all configurable per student." },
    ],
  },
  {
    slug: "centralize-student-records",
    icon: "Users",
    title: "Centralize Student Records",
    cardText: "Every student's academic history in one verified place.",
    metaTitle: "Student Management System — Centralized Student Records",
    metaDesc:
      "Centralize student records with WordbitX student management system — admissions, documents, attendance, fees, results and academic history in one secure profile.",
    hero: "A student's record is the institution's most valuable asset — and the easiest to lose. Files move between offices, staff change, and years later nobody can produce a verified academic history.",
    before: [
      "Records split across admission files, fee registers and result sheets",
      "Documents stored in cabinets, vulnerable to loss and damage",
      "Alumni record requests taking weeks to fulfil",
      "No single view of a student's full journey",
    ],
    after: [
      "One profile holding admission, academics, fees and documents",
      "Documents stored digitally and retrieved in seconds",
      "Alumni records produced immediately on request",
      "Complete, verified history from admission to leaving",
    ],
    how: [
      { icon: "IdCard", t: "Unified profile", d: "Personal, academic, financial and family data in one place." },
      { icon: "File", t: "Document vault", d: "B-Form, certificates and photos stored against the student." },
      { icon: "Cloud", t: "Cloud backup", d: "Records survive staff changes, office moves and hardware failure." },
    ],
    metric: [
      { v: "1", l: "Profile per student" },
      { v: "Seconds", l: "Record retrieval" },
      { v: "Backed up", l: "Cloud storage" },
    ],
    faqs: [
      { q: "Can we store scanned documents?", a: "Yes — B-Form, birth certificates, previous results and photographs are stored securely against each student profile." },
      { q: "Who can access student records?", a: "Access is role-based. Teachers see their students, accounts see fee data, and only authorised administrators see the full record." },
    ],
  },
  {
    slug: "improve-academic-visibility",
    icon: "TrendingUp",
    title: "Improve Academic Visibility",
    cardText: "Attendance and result trends surface issues early.",
    metaTitle: "Academic Performance Analytics for Schools",
    metaDesc:
      "Track academic performance with WordbitX education ERP — attendance trends, subject-wise analysis, class comparisons and early-warning indicators for schools.",
    hero: "By the time a struggling student appears in a term result, a whole term has passed. Visibility means seeing the attendance dip and the falling test scores while there is still time to intervene.",
    before: [
      "Problems discovered only at the end of term",
      "No comparison between classes, sections or teachers",
      "Subject-level decline invisible until board results",
      "Decisions made on impression rather than data",
    ],
    after: [
      "Attendance and performance trends visible weekly",
      "Class, section and subject comparisons on one screen",
      "Early-warning indicators for at-risk students",
      "Leadership decisions grounded in actual institutional data",
    ],
    how: [
      { icon: "PieChart", t: "Performance analytics", d: "Subject, class and campus-level result analysis." },
      { icon: "Alert", t: "Early-warning flags", d: "Low attendance and declining scores surfaced automatically." },
      { icon: "Robot", t: "AI insights", d: "Ask which classes need attention and get a grounded answer." },
    ],
    metric: [
      { v: "Weekly", l: "Trend visibility" },
      { v: "Subject-wise", l: "Analysis" },
      { v: "Automatic", l: "Risk flags" },
    ],
    faqs: [
      { q: "What kind of analytics are included?", a: "Attendance trends, fee collection, subject-wise performance, class comparisons, admissions and campus performance — all visualised in the admin dashboard." },
      { q: "Is there AI-based analysis?", a: "The platform includes an AI insights panel that answers questions like 'which classes have low attendance'. It is presented as a demo capability until connected to a live AI service." },
    ],
  },
  {
    slug: "manage-multiple-campuses",
    icon: "Building",
    title: "Manage Multiple Campuses",
    cardText: "Every branch isolated, the group office in control.",
    metaTitle: "Multi-Campus School Management from One Platform",
    metaDesc:
      "Manage multiple school campuses from one platform — isolated branch data, centralized reporting, group finance and consolidated analytics by WordbitX.",
    hero: "Growing from one campus to five should not mean running five disconnected systems. Multi-campus management gives each branch autonomy while the group office keeps a single, consolidated view.",
    before: [
      "Each campus running its own records in its own format",
      "Group reports requiring days of manual consolidation",
      "Inconsistent fee structures and policies across branches",
      "Head office always working with out-of-date numbers",
    ],
    after: [
      "One platform, one standard, every campus in sync",
      "Consolidated group reports available instantly",
      "Policies and structures applied consistently or per branch",
      "Head office sees today's numbers, not last month's",
    ],
    how: [
      { icon: "Branch", t: "Campus switching", d: "Switch branches in one click — data remains isolated." },
      { icon: "PieChart", t: "Group consolidation", d: "Students, fees, attendance and results across the network." },
      { icon: "Lock", t: "Scoped permissions", d: "Campus admins see their branch; group roles see everything." },
    ],
    metric: [
      { v: "2–50+", l: "Campuses supported" },
      { v: "Isolated", l: "Per-branch data" },
      { v: "Instant", l: "Group reports" },
    ],
    faqs: [
      { q: "Is each campus's data really separate?", a: "Yes. Campus staff can only access their own branch. Only group-level roles see consolidated data across the network." },
      { q: "Can a new campus be added later?", a: "Yes — adding a campus is a configuration step, not a new implementation project." },
    ],
  },
  {
    slug: "access-data-anywhere",
    icon: "Globe",
    title: "Access Data Anywhere",
    cardText: "Cloud-based — the office, home or the field.",
    metaTitle: "Cloud-Based School Management System",
    metaDesc:
      "Cloud-based school management software by WordbitX — access students, fees, attendance and reports from any device, with secure role-based access and backups.",
    hero: "School decisions do not only happen at a desk. A principal reviewing attendance from home, an owner checking collection while travelling, a teacher marking from the classroom — cloud access makes the institution work wherever its people are.",
    before: [
      "Data locked inside one computer in the accounts office",
      "Reports only available when a specific staff member is present",
      "No backup beyond a local hard drive",
      "Remote work impossible during closures or emergencies",
    ],
    after: [
      "Secure access from any device, anywhere",
      "Reports available to authorised roles at any time",
      "Automatic cloud backups protecting institutional data",
      "Operations continue during closures and emergencies",
    ],
    how: [
      { icon: "Cloud", t: "Cloud hosting", d: "Web-based platform, always current, always available." },
      { icon: "Smartphone", t: "Any device", d: "Desktop, tablet and mobile — fully responsive interfaces." },
      { icon: "ShieldCheck", t: "Secure access", d: "Role-based permissions and secure authentication on every device." },
    ],
    metric: [
      { v: "Any device", l: "Desktop / tablet / mobile" },
      { v: "Automatic", l: "Cloud backups" },
      { v: "Role-based", l: "Secure access" },
    ],
    faqs: [
      { q: "Is our data safe in the cloud?", a: "Data is protected with role-based access, secure authentication and regular backups. We describe only the controls actually implemented — no certification claims." },
      { q: "Can we host it on our own servers?", a: "Yes — WordbitX can deploy on your infrastructure if your institution requires on-premise hosting." },
    ],
  },
];

export function getBenefit(slug: string) {
  return benefits.find((b) => b.slug === slug);
}

/* ============================================================================
   MODULE GROUPS (icons for home page)
   ========================================================================== */

export const moduleGroups: {
  id: string;
  label: string;
  icon: IconName;
  items: { icon: IconName; label: string }[];
}[] = [
  {
    id: "academic",
    label: "Academic Management",
    icon: "BookOpen",
    items: [
      { icon: "IdCard", label: "Student Management" },
      { icon: "GraduationCap", label: "Admissions" },
      { icon: "Grid", label: "Classes & Sections" },
      { icon: "Book", label: "Subjects" },
      { icon: "Calendar", label: "Timetable" },
      { icon: "Clipboard", label: "Attendance" },
      { icon: "Pencil", label: "Exams" },
      { icon: "Award", label: "Results & Report Cards" },
      { icon: "Notebook", label: "Homework" },
      { icon: "FileText", label: "Assignments" },
      { icon: "Video", label: "LMS / Online Classes" },
    ],
  },
  {
    id: "finance",
    label: "Finance Management",
    icon: "Wallet",
    items: [
      { icon: "Wallet", label: "Fee Management" },
      { icon: "Receipt", label: "Fee Challans" },
      { icon: "CreditCard", label: "Online Fee Collection" },
      { icon: "Alert", label: "Fee Defaulters" },
      { icon: "Coins", label: "Expenses" },
      { icon: "Users", label: "Payroll" },
      { icon: "Bank", label: "Accounts" },
      { icon: "PieChart", label: "Financial Reports" },
    ],
  },
  {
    id: "communication",
    label: "Communication",
    icon: "Send",
    items: [
      { icon: "Chat", label: "WhatsApp Notifications" },
      { icon: "Smartphone", label: "SMS Notifications" },
      { icon: "Bell", label: "Push Notifications" },
      { icon: "Megaphone", label: "Announcements" },
      { icon: "Users", label: "Parent Communication" },
    ],
  },
  {
    id: "admin",
    label: "Administration",
    icon: "Users",
    items: [
      { icon: "User", label: "Teachers & Staff" },
      { icon: "IdCard", label: "HR Management" },
      { icon: "Truck", label: "Transport Management" },
      { icon: "Book", label: "Library Management" },
      { icon: "Box", label: "Inventory" },
      { icon: "Bed", label: "Hostel Management" },
      { icon: "Certificate", label: "Certificates" },
      { icon: "PieChart", label: "Reports & Analytics" },
    ],
  },
  {
    id: "enterprise",
    label: "Enterprise",
    icon: "Layers",
    items: [
      { icon: "Building", label: "Multi-Campus Management" },
      { icon: "Branch", label: "Multiple Branches" },
      { icon: "Lock", label: "Role-Based Access" },
      { icon: "PieChart", label: "Centralized Reporting" },
      { icon: "Cloud", label: "Cloud-Based Management" },
    ],
  },
];
