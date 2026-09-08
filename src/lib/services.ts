export type ServicePage = {
  slug: string;
  h1: string;
  eyebrow: string;
  sub: string;
  intro: string;
  benefits: { t: string; d: string }[];
  features: string[];
  faqs: { q: string; a: string }[];
};

export const WHATSAPP = "https://wa.me/923001234567?text=Hello%20WordbitX%2C%20I%27m%20interested%20in%20a%20school%20management%20platform";

export const servicePagesExtra: ServicePage[] = [
  {
    slug: "school-management-software-pakistan",
    h1: "School Management Software for Pakistani Schools",
    eyebrow: "School Management Software · Pakistan",
    sub: "Purpose-built for private schools in Pakistan — classes, sections, board-aligned results, PKR fees and parent communication in one system.",
    intro:
      "Pakistani private schools run on a mix of registers, spreadsheets and WhatsApp groups. This school management software replaces that with one connected system — admissions to report cards, fee challans to parent alerts — designed around how schools in Lahore, Karachi and Islamabad actually operate.",
    benefits: [
      { t: "Board-aligned results", d: "FBISE, BISE Lahore, Karachi and Cambridge-style grading — all configurable per class and per session." },
      { t: "PKR-first finance", d: "Monthly tuition, admission, transport and exam fees with challans, discounts and defaulter tracking in Rs." },
      { t: "Parents stay close", d: "Attendance alerts, homework and fee due reminders reach families on WhatsApp and SMS." },
      { t: "Grows with you", d: "Start with one campus and add branches without changing your workflow." },
    ],
    features: [
      "Admissions with entry test scheduling",
      "Classes, sections & timetables",
      "Digital attendance with alerts",
      "Exams, marks entry & report cards",
      "Fee challans in PKR",
      "Parent & teacher portals",
    ],
    faqs: [
      { q: "Which boards does it support?", a: "Grading is fully configurable — FBISE, BISE boards and Cambridge/O-Level style grading are all supported per class group." },
      { q: "Can it handle our existing student database?", a: "Yes. We migrate students, parents, results and fee balances, then verify line-by-line before go-live." },
      { q: "Is there Urdu support?", a: "Yes — the interface and content support English and Urdu, with an RTL-ready layout." },
    ],
  },
  {
    slug: "college-management-software-pakistan",
    h1: "College Management Software in Pakistan",
    eyebrow: "College Management · Pakistan",
    sub: "Degree colleges — programs, semesters, course registration, attendance, exams and transcripts, managed in one platform.",
    intro:
      "Degree colleges in Pakistan juggle intakes, semesters, course registration and results across multiple programs. This college management software gives every department its own workflow while the registrar, accounts and administration see one accurate picture.",
    benefits: [
      { t: "Semester-driven", d: "Intakes, programs, semesters and course registration built the way HEC-aligned colleges run." },
      { t: "Transcripts that are easy", d: "Result sheets, CGPA calculation and transcript generation from verified marks." },
      { t: "Fee by program", d: "Different fee structures per program, semester and category — with challans and reminders." },
      { t: "Department control", d: "Each department head manages their own classes, faculty and results within one system." },
    ],
    features: [
      "Programs, intakes & semesters",
      "Course registration & sections",
      "Faculty workloads & timetables",
      "Exams & CGPA results",
      "Transcript & degree management",
      "College fees in PKR",
    ],
    faqs: [
      { q: "Does it support CGPA calculations?", a: "Yes — credit-based CGPA is calculated automatically per program, with configurable grade points." },
      { q: "Can departments work independently?", a: "Yes. Role-based access lets each department manage its own classes and results while the registrar sees everything." },
      { q: "How do transcripts work?", a: "Transcripts are generated from verified semester results and can be printed or shared digitally." },
    ],
  },
  {
    slug: "academy-management-software-pakistan",
    h1: "Academy Management Software in Pakistan",
    eyebrow: "Academies & Coaching Centers",
    sub: "Tuition centers, coaching institutes and test-prep academies — batches, entry tests, monthly fees and fast result publishing.",
    intro:
      "From a single-room tuitions center in Multan to a test-prep academy in Lahore, academies need batches more than classrooms and monthly cash flow more than term reports. This academy management software is built around that reality — flexible batches, entry tests and fee cycles parents can pay with JazzCash or Easypaisa.",
    benefits: [
      { t: "Batch-first", d: "Students join multiple batches with per-batch timetables, fees and attendance." },
      { t: "Entry tests that scale", d: "Schedule, score and rank entry tests; publish admission lists in minutes." },
      { t: "Cash flow visibility", d: "Monthly cycles, defaults and reminders — see exactly who paid and who's due." },
      { t: "Parents engaged", d: "Result sheets and attendance reach parents on WhatsApp, building trust and retention." },
    ],
    features: [
      "Batches & seat management",
      "Entry test scheduling & scoring",
      "Monthly fee cycles in PKR",
      "Attendance & result sheets",
      "Parent communication portal",
      "Multi-branch support",
    ],
    faqs: [
      { q: "Is it different from school software?", a: "Yes — batch-based enrolment, test-prep flows and monthly fee cycles replace the term-based school model." },
      { q: "Can we run multiple branches?", a: "Yes — each branch has its own batches and fees, with a combined owner view." },
      { q: "Do we get a website too?", a: "Most academy clients launch with a matching admissions website, results page and online application form." },
    ],
  },
  {
    slug: "university-management-system-pakistan",
    h1: "University Management System in Pakistan",
    eyebrow: "Universities & Higher Education",
    sub: "Departments, faculties, programs, courses, exams and student records — an enterprise system for higher education institutions.",
    intro:
      "Universities need more than a school system scaled up: faculties, departments, research, multiple campuses and thousands of concurrent users. This university management system provides the modular, role-based foundation for departments, examinations, results and student records — with the security and reporting a registrar's office expects.",
    benefits: [
      { t: "Department-first design", d: "Each department manages its own programs, courses and faculty within one enterprise system." },
      { t: "Examination workflows", d: "Date sheets, invigilation, marking, moderation and result publication in defined stages." },
      { t: "Student records that last", d: "From admission to convocation — a verified academic record for every student." },
      { t: "Enterprise security", d: "Role-based access, audit trails and school-level data isolation across the institution." },
    ],
    features: [
      "Faculties, departments & programs",
      "Course catalog & registration",
      "Examination & results workflows",
      "Student information records",
      "Faculty workloads & timetables",
      "Analytics & institutional reporting",
    ],
    faqs: [
      { q: "Can it handle thousands of students?", a: "Yes — the architecture is built for large concurrent usage, with per-department data views and centralized reporting." },
      { q: "Does it support multiple campuses?", a: "Yes — multi-campus management with centralized administration and isolated campus data." },
      { q: "How is data secured?", a: "Role-based access, secure authentication, audit logs and institution-level data isolation form the security foundation." },
    ],
  },
  {
    slug: "education-management-system-pakistan",
    h1: "Education Management System for Every Institution",
    eyebrow: "Education Management · Pakistan",
    sub: "One platform for schools, colleges, academies, universities and madaris — built by WordbitX for the Pakistani education market.",
    intro:
      "The Pakistani education market is diverse: a 400-student school in Faisalabad, a 2,000-student college group in Lahore, a Hifz-e-Quran madaris in Peshawar, a test-prep academy in Karachi. This education management system is modular by design — enable the modules your institution needs today and switch on more as you grow.",
    benefits: [
      { t: "One vendor, every stage", d: "Manage a school and its affiliated college under one login and one data foundation." },
      { t: "Modular by design", d: "Pay for the modules you use — fees and attendance today, LMS and hostels next term." },
      { t: "Built for Pakistan", d: "PKR, local payment options, Urdu support and academic structures that match the local reality." },
      { t: "Mobile-first", d: "Parents, students and staff use it on their phones — where Pakistan actually is." },
    ],
    features: [
      "Admissions to results in one flow",
      "PKR fees with local payment options",
      "WhatsApp / SMS / push notifications",
      "Multi-campus & multi-institution",
      "Role-based portals for every user",
      "Analytics & institutional reporting",
    ],
    faqs: [
      { q: "Can one platform cover a school group?", a: "Yes — multi-campus management isolates each institution's data while the group office sees consolidated reports." },
      { q: "Which modules can we start with?", a: "Most institutions begin with students, attendance and fees, then add exams, LMS and communication as they go." },
      { q: "Is it cloud-based?", a: "Yes — web-based with role-based access, so administrators work from any device and data is backed up." },
    ],
  },
];

export const servicePages: ServicePage[] = [
  {
    slug: "school-management-system-pakistan",
    h1: "School Management System in Pakistan",
    eyebrow: "School Management System · Pakistan",
    sub: "A complete, Pakistan-ready platform for private schools, academies and multi-campus groups — built and maintained by WordbitX.",
    intro:
      "From Lahore to Karachi, Pakistani schools still juggle fee registers, paper attendance and phone-based parent communication. A modern school management system brings admissions, fees, attendance, exams and portals together in one secure, mobile-first platform — in PKR, with Pakistani payment habits and Urdu-friendly design where needed.",
    benefits: [
      { t: "Cut admin time", d: "Automate fees, attendance and result processing that still run on registers in many schools." },
      { t: "Parents stay informed", d: "Attendance, homework, fees and results reach families the same day." },
      { t: "One source of truth", d: "Students, teachers, fees and results live in a single system — no duplicate spreadsheets." },
      { t: "Multi-campus ready", d: "Run 2, 5 or 50 campuses with isolated data and one head-office view." },
    ],
    features: [
      "Online admissions with application tracking",
      "PKR fee management — challan, invoice, receipt",
      "Attendance with parent absence alerts",
      "Exams, marks entry and printable report cards",
      "Student, parent, teacher & admin portals",
      "Multi-campus management with head-office view",
    ],
    faqs: [
      { q: "Does it work for Pakistani fee structures?", a: "Yes — monthly tuition, admission fees, transport and exam fees, discounts and fines are all configurable, with cash, bank transfer, JazzCash and Easypaisa payment options." },
      { q: "Can it handle multiple campuses?", a: "Yes. Each campus has isolated data while head office sees consolidated students, fees, attendance and results." },
      { q: "Is it mobile-friendly for parents?", a: "The parent experience is designed mobile-first — it feels like an app even in the browser, and a dedicated school mobile app is available." },
    ],
  },
  {
    slug: "school-erp-pakistan",
    h1: "School ERP Software for Pakistani Schools",
    eyebrow: "School ERP · Pakistan",
    sub: "Replace registers and spreadsheets with a connected ERP — admissions, fees, HR & payroll, library, transport and store in one system.",
    intro:
      "A school ERP is the nervous system of the institution. WordbitX builds school ERP systems in Pakistan that connect every department — from the front office to accounts, from the library to the transport fleet — so decisions are made on live data, not memory.",
    benefits: [
      { t: "End-to-end operations", d: "Admissions → enrolment → attendance → fees → results, flowing without re-keying." },
      { t: "Accounting-grade fees", d: "Challans, receipts, defaulters and monthly collection reports out of the box." },
      { t: "HR & payroll built in", d: "Staff attendance, leave, allowances and one-click salary slips in PKR." },
      { t: "Every module, one login", d: "Library, transport, store and reports sit inside the same secure system with role-based access." },
    ],
    features: [
      "Admissions CRM with full pipeline",
      "Fee structure, challan, defaulters & reminders",
      "HR & payroll with salary slips",
      "Library issue/return management",
      "Transport routes, vehicles & drivers",
      "School store / POS for uniforms & books",
    ],
    faqs: [
      { q: "How long does an implementation take?", a: "A typical single-campus school goes live in 4–8 weeks including data migration and staff training. Multi-campus groups are phased." },
      { q: "Can we migrate data from our current spreadsheets?", a: "Yes — students, parents, fees and results are migrated and verified before go-live." },
      { q: "Is our data isolated per school?", a: "Yes. Each institution is a fully isolated tenant — your data is never mixed with other schools." },
    ],
  },
  {
    slug: "school-lms-pakistan",
    h1: "School LMS in Pakistan — Learning Management System",
    eyebrow: "School LMS · Pakistan",
    sub: "Courses, lessons, study material, assignments, quizzes and progress — for schools, academies and tuition centers across Pakistan.",
    intro:
      "Whether you run a tuition center in Faisalabad or an academy in Karachi, students need learning that extends beyond the classroom. A school LMS gives teachers a home for lessons and study material, and students a structured path with assignments, quizzes and measurable progress.",
    benefits: [
      { t: "Learning continues at home", d: "Video lessons, PDF notes and practice sheets available 24/7 on any device." },
      { t: "Teachers save time", d: "Publish once — every student in every class gets the material instantly." },
      { t: "Measurable progress", d: "Quizzes and assignments turn 'did you study?' into real data." },
      { t: "Academy-friendly", d: "Batch-based enrolment suits coaching institutes and test-prep academies." },
    ],
    features: [
      "Courses, lessons & study material",
      "Video lessons and PDF notes",
      "Assignments, homework & grading",
      "Quizzes with automatic marking",
      "Progress dashboards for students & parents",
      "Integration-ready online classes",
    ],
    faqs: [
      { q: "Can teachers create content easily?", a: "Yes — teachers create lessons, upload material and build quizzes from a simple editor, no technical skills needed." },
      { q: "Does it support Urdu content?", a: "The platform supports Urdu and English content, with an RTL-ready interface." },
      { q: "Can parents see their child's LMS progress?", a: "Yes. Course completion, quiz scores and pending assignments appear in the parent portal." },
    ],
  },
  {
    slug: "academy-management-system-pakistan",
    h1: "Academy & Coaching Institute Management System",
    eyebrow: "Academies & Tuition Centers",
    sub: "Purpose-built for academies, tuition centers and coaching institutes — batches, fees, results and parent communication, without school-grade complexity.",
    intro:
      "Academies and coaching institutes run differently from schools: flexible batches, monthly fee cycles, entry tests and high parent engagement. WordbitX builds academy management systems that match how these institutions actually operate — with the same portals and reporting power as a full school ERP.",
    benefits: [
      { t: "Batch-first design", d: "Students join multiple batches with per-batch fees and timetables." },
      { t: "Entry tests & assessments", d: "Run entry tests, monthly MCQs and publish results to parents fast." },
      { t: "Fee reminders that work", d: "Monthly cycles with WhatsApp/SMS-ready defaulter reminders reduce leakage." },
      { t: "Growth-ready", d: "Add branches, exam boards (FBISE, Cambridge) or subjects without rebuilding." },
    ],
    features: [
      "Batches, timetables & seat management",
      "Entry test scheduling & scoring",
      "Monthly fee cycles with reminders",
      "Result sheets & performance analytics",
      "Parent communication portal",
      "Multi-branch management",
    ],
    faqs: [
      { q: "Is it different from a school system?", a: "It's tuned for academies: batch-based enrolment, test-prep assessment flows and flexible fee cycles, while sharing the same secure architecture." },
      { q: "Can we run school and academy under one system?", a: "Yes — multi-brand institutions run both under one admin with separate data views." },
      { q: "Do we get a public website too?", a: "Yes. Most academy clients launch with a matching SEO-ready website, admission form and results page." },
    ],
  },
  {
    slug: "school-website-development-pakistan",
    h1: "School Website Development in Pakistan",
    eyebrow: "School Websites",
    sub: "A premium school website that leads admissions — with admissions, results, news and gallery built in. Designed & developed by WordbitX.",
    intro:
      "Your website is the first interview with every parent. WordbitX designs school websites in Pakistan that don't just look premium — they capture applications, publish results, showcase campus life and feed your school management system, so marketing and operations finally speak to each other.",
    benefits: [
      { t: "Admission-ready", d: "Online application forms with tracking convert visitors into applicants." },
      { t: "SEO for your city", d: "Optimized for 'school in Lahore', 'private school Karachi' and similar local searches." },
      { t: "Results & news publishing", d: "Term results, circulars and events published without developer help." },
      { t: "Matches your platform", d: "Same design language as your portals — a consistent institution online." },
    ],
    features: [
      "Premium, custom design (no templates)",
      "Online admissions + application tracking",
      "Results portal, news & gallery",
      "Programs, faculty & campus pages",
      "SEO, sitemap, schema & performance",
      "English / Arabic / Urdu-ready",
    ],
    faqs: [
      { q: "How long does a school website take?", a: "A complete school website with admissions, results and content pages typically launches in 3–5 weeks." },
      { q: "Can we update content ourselves?", a: "Yes — news, events, results and circulars are managed from the admin dashboard." },
      { q: "Will it rank in Google for our city?", a: "We build SEO foundations — local keywords, structured data, fast performance — and structure content for ranking; results depend on ongoing content and links." },
    ],
  },
  {
    slug: "school-mobile-app-development-pakistan",
    h1: "School Mobile App Development in Pakistan",
    eyebrow: "School Mobile Apps",
    sub: "Android & iOS apps for parents, students and teachers — attendance alerts, fees, homework and results in families' pockets.",
    intro:
      "Parents in Pakistan live on their phones. WordbitX builds school mobile apps that put attendance alerts, fee challans, homework and results exactly where families are — with the mobile-first experience you can already explore in this demo's parent portal.",
    benefits: [
      { t: "Alerts that reach", d: "Absence, fee-due and result notifications arrive as push alerts the moment they happen." },
      { t: "One app, three roles", d: "Parent, student and teacher experiences in a single, branded school app." },
      { t: "Faster fee collection", d: "Challan in the app, payment in one tap — with JazzCash, Easypaisa and cards as integration-ready options." },
      { t: "Your brand, not a template", d: "App name, logo and colors match your institution and your web platform." },
    ],
    features: [
      "Parent, student & teacher apps",
      "Push notifications (attendance, fees, results)",
      "Fee challan & payment flow",
      "Timetable, homework & study material",
      "Result cards & report history",
      "Google Play & App Store release",
    ],
    faqs: [
      { q: "Can parents use it without the app?", a: "Yes — the portals are fully responsive, so families on any phone get the full experience in the browser." },
      { q: "How much does a school app cost in Pakistan?", a: "It depends on scope — most clients bundle the app with their management platform. Ask WordbitX for a proposal." },
      { q: "How long to build a school app?", a: "A branded app connected to the management platform typically ships in 6–10 weeks." },
    ],
  },
];
