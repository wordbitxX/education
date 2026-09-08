// ============================================================================
// Meridian Academy — DEMO DATA LAYER
// All people, figures, results and testimonials are FICTIONAL demo content.
// WordbitX is the fictional technology partner for this concept platform.
// ============================================================================

export const brand = {
  name: "Meridian Academy",
  short: "Meridian",
  tagline: "Where Learning Becomes Possibility",
  partner: "WordbitX",
  partnerUrl: "https://www.wordbitxtech.com/",
  estd: 2012,
  campuses: ["Lahore Campus", "Islamabad Campus", "Karachi Campus"],
};

export const campusCities = ["Lahore", "Islamabad", "Karachi"];

// WordbitX Software Company — contact
export const contact = {
  // Primary (Pakistan)
  phone: "+92 325 1888841",
  phoneHref: "tel:+923251888841",
  whatsapp: "https://wa.me/923251888841",
  // Secondary (USA)
  phoneUsa: "+1 (929) 619-7699",
  phoneUsaHref: "tel:+19296197699",
  phoneUsaWhatsapp: "https://wa.me/19296197699",
  email: "info@wordbitxtech.com",
  website: "wordbitxtech.com",
};

export const regions = [
  {
    code: "PK",
    name: "Pakistan",
    cities: ["Lahore", "Islamabad", "Karachi", "Rawalpindi", "Faisalabad"],
    focus:
      "School ERP, online admissions, parent portals and tuition-center management for schools, academies and coaching institutes.",
    keywords: [
      "school management software Pakistan",
      "school ERP Lahore",
      "school website design Karachi",
      "academy management system Islamabad",
      "school admission system",
    ],
  },
  {
    code: "AE",
    name: "United Arab Emirates",
    cities: ["Dubai", "Abu Dhabi"],
    focus:
      "Bilingual school and academy platforms with fee management, admissions and parent communication for the UAE market.",
    keywords: ["school management system UAE", "academy management software Dubai", "school ERP Abu Dhabi"],
  },
  {
    code: "SA",
    name: "Saudi Arabia",
    cities: ["Riyadh", "Jeddah"],
    focus:
      "Education platforms for schools and private academies, with Arabic-first interfaces and full RTL support.",
    keywords: ["school ERP Saudi Arabia", "school website Riyadh", "school management software Jeddah"],
  },
  {
    code: "UK",
    name: "United Kingdom",
    cities: ["London", "Manchester", "Birmingham"],
    focus:
      "Student information systems, LMS and admissions for UK schools, colleges and tutoring providers.",
    keywords: ["education software UK", "school LMS UK", "school management software London"],
  },
  {
    code: "US",
    name: "United States",
    cities: ["Nationwide"],
    focus:
      "School management, student portals and LMS built for US K-12 schools, colleges and edtech teams.",
    keywords: ["school management software US", "student information system", "education app development"],
  },
  {
    code: "CA",
    name: "Canada",
    cities: ["Toronto", "Vancouver"],
    focus:
      "Modern school platforms — admissions, portals, attendance and fee management for Canadian institutions.",
    keywords: ["school management software Canada", "parent portal Toronto", "school ERP Canada"],
  },
  {
    code: "AU",
    name: "Australia",
    cities: ["Sydney", "Melbourne"],
    focus:
      "Education technology for Australian schools and RTOs — websites, portals, LMS and school management systems.",
    keywords: ["school ERP Australia", "education app development Sydney", "school website Melbourne"],
  },
];

// ----------------------------- TEACHERS -----------------------------------
export type Teacher = {
  id: string;
  name: string;
  initial: string;
  role: string;
  subject: string;
  email: string;
  years: number;
  color: string;
  bio: string;
  qualifications: string[];
};

export const teachers: Teacher[] = [
  {
    id: "t1",
    name: "Dr. Sarah Wilson",
    initial: "SW",
    role: "Principal, Academic Excellence",
    subject: "Physics",
    email: "s.wilson@meridian.demo",
    years: 18,
    color: "#0e2440",
    bio: "Dr. Wilson leads academic strategy and curriculum design, championing inquiry-led learning across all stages.",
    qualifications: ["PhD Education (Cantab)", "MSc Physics"],
  },
  {
    id: "t2",
    name: "Daniel Carter",
    initial: "DC",
    role: "Head of Mathematics",
    subject: "Mathematics",
    email: "d.carter@meridian.demo",
    years: 12,
    color: "#0f766e",
    bio: "Daniel builds mathematical confidence through problem-based learning and real-world applications.",
    qualifications: ["BSc Mathematics (Hons)", "PGCE"],
  },
  {
    id: "t3",
    name: "Emma Roberts",
    initial: "ER",
    role: "Head of Languages & Literature",
    subject: "English",
    email: "e.roberts@meridian.demo",
    years: 11,
    color: "#b8863b",
    bio: "Emma is passionate about literacy, storytelling and nurturing confident communicators.",
    qualifications: ["BA English Literature", "MA Comparative Literature"],
  },
  {
    id: "t4",
    name: "Ahmed Raza",
    initial: "AR",
    role: "Senior Faculty — Computer Science",
    subject: "Computer Science",
    email: "a.raza@meridian.demo",
    years: 9,
    color: "#234163",
    bio: "Ahmed leads the digital learning and coding pathway, from computational thinking to AI foundations.",
    qualifications: ["BSc Computer Science", "MSc AI"],
  },
  {
    id: "t5",
    name: "Sofia Martinez",
    initial: "SM",
    role: "Head of Science",
    subject: "Chemistry & Biology",
    email: "s.martinez@meridian.demo",
    years: 14,
    color: "#0f766e",
    bio: "Sofia brings laboratory science to life with hands-on investigation and sustainability projects.",
    qualifications: ["BSc Biochemistry", "MA Science Education"],
  },
  {
    id: "t6",
    name: "Omar Farooq",
    initial: "OF",
    role: "Head of Humanities",
    subject: "History & Global Studies",
    email: "o.farooq@meridian.demo",
    years: 10,
    color: "#16304c",
    bio: "Omar develops critical thinkers who connect history, geography and global citizenship.",
    qualifications: ["BA History", "MA International Relations"],
  },
  {
    id: "t7",
    name: "Layla Hassan",
    initial: "LH",
    role: "Early Years Lead",
    subject: "Early Years & Play-based Learning",
    email: "l.hassan@meridian.demo",
    years: 13,
    color: "#b8863b",
    bio: "Layla designs warm, exploratory environments where the youngest learners thrive.",
    qualifications: ["BA Early Childhood Education", "Montessori Diploma"],
  },
  {
    id: "t8",
    name: "Noah Bennett",
    initial: "NB",
    role: "Director of Arts & Culture",
    subject: "Visual Arts & Music",
    email: "n.bennett@meridian.demo",
    years: 16,
    color: "#2b527a",
    bio: "Noah leads our creative programme, from studio practice to festival staging.",
    qualifications: ["BFA", "MA Arts Education"],
  },
];

// ----------------------------- STUDENTS ------------------------------------
export type Student = {
  id: string;
  name: string;
  initial: string;
  grade: string;
  section: string;
  house: string;
  color: string;
  attendance: number;
  gpa: number;
};

export const students: Student[] = [
  { id: "s1", name: "Ayaan Khan", initial: "AK", grade: "Grade 9", section: "A", house: "Phoenix", color: "#0f766e", attendance: 97, gpa: 3.8 },
  { id: "s2", name: "Sara Ahmed", initial: "SA", grade: "Grade 10", section: "B", house: "Aurora", color: "#2b527a", attendance: 96, gpa: 3.9 },
  { id: "s3", name: "Hamza Malik", initial: "HM", grade: "Grade 9", section: "A", house: "Phoenix", color: "#b8863b", attendance: 92, gpa: 3.5 },
  { id: "s4", name: "Zara Iqbal", initial: "ZI", grade: "Grade 8", section: "C", house: "Comet", color: "#0f766e", attendance: 98, gpa: 4.0 },
  { id: "s5", name: "Emaan Sheikh", initial: "ES", grade: "Grade 11", section: "A", house: "Aurora", color: "#234163", attendance: 95, gpa: 3.7 },
  { id: "s6", name: "Bilal Aslam", initial: "BA", grade: "Grade 10", section: "B", house: "Comet", color: "#16304c", attendance: 90, gpa: 3.2 },
  { id: "s7", name: "Areeba Tariq", initial: "AT", grade: "Grade 12", section: "A", house: "Phoenix", color: "#0f766e", attendance: 99, gpa: 3.95 },
  { id: "s8", name: "Daniyal Qureshi", initial: "DQ", grade: "Grade 7", section: "C", house: "Aurora", color: "#2b527a", attendance: 94, gpa: 3.4 },
];

// Simulated "children" per parent account
export const demoStudents = [students[0], students[1], students[2]];
export const focusStudent = students[0];

// ----------------------------- PROGRAMS -----------------------------------
export type Program = {
  id: string;
  slug: string;
  category: string;
  title: string;
  short: string;
  description: string;
  ages: string;
  grades: string;
  duration: string;
  subjects: string[];
  curriculum: string;
  outcomes: string[];
  schedule: string[];
  capacity: string;
  image: string;
  featured?: boolean;
  faqs: { q: string; a: string }[];
};

export const programCategories = [
  "Early Years",
  "Primary",
  "Middle School",
  "Secondary",
  "O-Level & Equivalent",
  "A-Level & Higher Secondary",
  "Foundation Programs",
  "Professional & Skill Courses",
  "Academy & Tuition Programs",
];

export const programs: Program[] = [
  {
    id: "p1",
    slug: "early-years",
    category: "Early Years",
    title: "Early Years Programme",
    short: "Play-based foundation for ages 3–5",
    description:
      "A warm, richly sensory environment where curiosity is the engine of learning. Children explore, create and socialise through guided play, stories, nature and early numeracy.",
    ages: "Ages 3–5",
    grades: "Nursery · KG I · KG II",
    duration: "3 years",
    curriculum: "Inquiry-led play curriculum aligned to early learning goals, blending Montessori principles with modern developmental practice.",
    subjects: ["Communication & Literacy", "Early Numeracy", "World Discovery", "Expressive Arts", "Physical Development", "Personal & Social Wellbeing"],
    outcomes: [
      "Confident communicators and storytellers",
      "Foundational numeracy and early reading",
      "Independent and self-regulated learners",
      "Curiosity, empathy and resilience",
    ],
    schedule: ["Half-day option 8:30–12:30", "Full day 8:30–14:30", "Extended care available until 17:00"],
    capacity: "Maximum 18 children per class with 3 educators",
    image: "/images/campus-classroom.jpg",
    featured: true,
    faqs: [
      { q: "What is the class size?", a: "Each early years class is capped at 18 children with a lead educator and two support educators." },
      { q: "Is there a nap and meal routine?", a: "Yes. The full day includes rest time, a nutritious lunch and supervised snack breaks." },
    ],
  },
  {
    id: "p2",
    slug: "primary",
    category: "Primary",
    title: "Primary School Programme",
    short: "Structured, joyful learning for ages 6–10",
    description:
      "Our primary years build strong literacy, numeracy and learning habits while keeping the joy of discovery central. A single class teacher guides pastoral care across core subjects.",
    ages: "Ages 6–10",
    grades: "Grades 1–5",
    duration: "5 years",
    curriculum: "A balanced national-and-international curriculum with thematic projects, dedicated reading and weekly enrichment blocks.",
    subjects: ["English", "Mathematics", "Science", "Social Studies", "Urdu", "Art & Music", "PE & Wellbeing", "Computing"],
    outcomes: [
      "Fluent readers and confident writers",
      "Strong problem-solving in mathematics",
      "Scientific curiosity through investigation",
      "Digital literacy and digital citizenship",
    ],
    schedule: ["School day 8:20–14:40", "Enrichment club until 15:40", "Two outdoor break periods daily"],
    capacity: "Maximum 26 children per class",
    image: "/images/campus-lab.jpg",
    featured: true,
    faqs: [
      { q: "How are subjects delivered?", a: "Core subjects are taught by the class teacher, with specialist teachers for computing, music, art and physical education." },
    ],
  },
  {
    id: "p3",
    slug: "middle-school",
    category: "Middle School",
    title: "Middle School Programme",
    short: "Bridging years for ages 11–13",
    description:
      "A transformative phase where students move to specialist teachers and begin managing projects, study skills and increasing independence across a broader curriculum.",
    ages: "Ages 11–13",
    grades: "Grades 6–8",
    duration: "3 years",
    curriculum: "Specialist taught curriculum with increased depth, cross-disciplinary projects and a structured study-skills programme.",
    subjects: ["English", "Mathematics", "Physics", "Chemistry", "Biology", "History", "Geography", "Computer Science", "Languages", "Visual Arts"],
    outcomes: [
      "Independent note-taking and revision",
      "Confident group collaboration",
      "Evidence-based scientific enquiry",
      "A foundation for IGCSE-minded learning",
    ],
    schedule: ["School day 8:00–15:00", "Rotating double period for practicals", "House activities every Friday"],
    capacity: "Maximum 28 students per class",
    image: "/images/campus-library.jpg",
    featured: true,
    faqs: [
      { q: "Are there house and leadership opportunities?", a: "Every student belongs to one of our houses, with house competitions, sports and student council roles from Grade 6." },
    ],
  },
  {
    id: "p4",
    slug: "secondary",
    category: "Secondary",
    title: "Secondary School Programme",
    short: "Academic depth for ages 14–16",
    description:
      "Students choose a pathway balancing examinations with skills, research and reflection. We coach study habits, time management and academic honesty alongside rigorous teaching.",
    ages: "Ages 14–16",
    grades: "Grades 9–10",
    duration: "2 years",
    curriculum: "An internationally benchmarked curriculum with optional subjects, coursework and terminal assessment.",
    subjects: ["Core Sciences", "Mathematics", "English Language & Literature", "Humanities", "World Languages", "Computer Science", "Business Studies", "Art & Design"],
    outcomes: [
      "Deep subject mastery and examination readiness",
      "Research and extended-writing skills",
      "Disciplined revision and planning",
      "Clear pathways to higher secondary study",
    ],
    schedule: ["School day 8:00–15:30", "Twilight revision clinics", "Mock examination weeks"],
    capacity: "Maximum 24 students per class",
    image: "/images/campus-sports.jpg",
    featured: true,
    faqs: [
      { q: "How are students prepared for examinations?", a: "Through structured revision frames, past-paper practice, marked feedback and scheduled mock examinations." },
    ],
  },
  {
    id: "p5",
    slug: "olevel-equivalent",
    category: "O-Level & Equivalent",
    title: "O-Level & Equivalent",
    short: "Focused external examination pathway",
    description:
      "A rigorous preparation programme leading to internationally recognised O-Level qualifications, delivered by subject specialists with small cohorts and individual tracking.",
    ages: "Ages 15–17",
    grades: "O-Level / Grade 10–11",
    duration: "1–2 years",
    curriculum: "Cambridge-style syllabus with seven subject options, practical components and internal moderation.",
    subjects: ["Mathematics", "Physics", "Chemistry", "Biology", "English", "Urdu", "Computer Science", "Business Studies", "Global Perspectives"],
    outcomes: [
      "International qualification readiness",
      "Examiner-style technique and mental discipline",
      "Portfolio and practical assessment competence",
      "Guaranteed progression to A-Level",
    ],
    schedule: ["Block timetabled subjects", "Small cohorts of 16", "Weekly assessment cadence"],
    capacity: "Maximum 16 students per subject group",
    image: "/images/campus-study.jpg",
    faqs: [
      { q: "Which board is this aligned to?", a: "This is a fictional, internal demonstration pathway. Our real-world equivalent programmes follow internationally benchmarked syllabi." },
    ],
  },
  {
    id: "p6",
    slug: "alevel-higher-secondary",
    category: "A-Level & Higher Secondary",
    title: "A-Level & Higher Secondary",
    short: "University-facing preparation for ages 16–19",
    description:
      "A mature, seminar-style environment preparing students for competitive university admission through depth, independent research and mentorship.",
    ages: "Ages 16–19",
    grades: "A-Level / Grade 12–13",
    duration: "2 years",
    curriculum: "A modular A-Level-style curriculum with subject-specific mentoring, UCAS-style guidance and super-curricular enrichment.",
    subjects: ["Mathematics", "Further Mathematics", "Physics", "Chemistry", "Biology", "Economics", "Computer Science", "English Literature", "Psychology"],
    outcomes: [
      "University-ready analytical writing",
      "Independent research and interview readiness",
      "Strong personal statements and portfolios",
      "Mentorship toward target universities",
    ],
    schedule: ["Seminar-based delivery", "Individual tutorials weekly", "Super-curricular club programme"],
    capacity: "Maximum 14 students per subject",
    image: "/images/campus-lib.jpg",
    faqs: [
      { q: "Do students receive university guidance?", a: "Yes. A dedicated mentor works with each student on university research, applications, personal statements and interview preparation." },
    ],
  },
  {
    id: "p7",
    slug: "foundation",
    category: "Foundation Programs",
    title: "Foundation & Bridge Programmes",
    short: "Intensive support to accelerate learning",
    description:
      "Short, focused programmes that build core skills, confidence and exam readiness — ideal for students transferring systems or preparing for scholarship assessments.",
    ages: "Ages 8–18",
    grades: "Years 3–13 (by readiness, not age only)",
    duration: "8–16 weeks",
    curriculum: "A diagnostic-to-delivery model. Baseline assessment, personalised learning plan, small-group tuition and progress checkpoints.",
    subjects: ["Mathematics", "English & Literacy", "Science Foundations", "Study Skills", "Exam Technique"],
    outcomes: [
      "Closing skill gaps with measurable progress",
      "Confidence growth and positive study identity",
      "Clear diagnostic starting points",
      "Seamless transition into main programmes",
    ],
    schedule: ["Weekday intensive blocks", "After-school and weekend cohorts", "One-to-one tutoring options"],
    capacity: "Group of 6–8 students",
    image: "/images/campus-compute.jpg",
    faqs: [
      { q: "Is this programme age-gated?", a: "No. We place students by readiness using a baseline assessment rather than age alone." },
    ],
  },
  {
    id: "p8",
    slug: "professional-skill",
    category: "Professional & Skill Courses",
    title: "Professional & Skill Courses",
    short: "Practical skill development for life and work",
    description:
      "Evening and weekend courses designed for learners and working professionals — creative production, technology, languages, entrepreneurship and public speaking.",
    ages: "Ages 16+",
    grades: "Open enrolment",
    duration: "6–12 weeks",
    curriculum: "Project-based micro-credentials delivered in intensive studio sessions with portfolio outcomes.",
    subjects: ["Creative Design", "Web & App Development", "Digital Media", "Public Speaking", "Entrepreneurship", "Business English", "Data Skills"],
    outcomes: [
      "Real portfolio and capstone projects",
      "Applied, industry-relevant skills",
      "Certificate of completion (concept)",
      "Network with peers and mentors",
    ],
    schedule: ["Evening cohorts 18:00–20:30", "Weekend intensives", "Flexible blended format"],
    capacity: "Cohorts of 12–20 participants",
    image: "/images/campus-hall.jpg",
    faqs: [
      { q: "Are these recognised qualifications?", a: "These are concept demonstrations in this demo platform. Any real credentialing would require formal accreditation, which we would never claim without it." },
    ],
  },
  {
    id: "p9",
    slug: "academy-tuition",
    category: "Academy & Tuition Programs",
    title: "Academy & Tuition Programmes",
    short: "Targeted supplementary learning support",
    description:
      "Flexible after-school tuition for students who want extra depth in a subject — exam focused, personalised and continuously tracked.",
    ages: "Ages 6–18",
    grades: "Grades 1–13",
    duration: "Per-term enrolment",
    curriculum: "Personalised sessions built on the school's curriculum and each student's current attainment data.",
    subjects: ["Mathematics", "English", "Chemistry", "Physics", "Biology", "Computer Science"],
    outcomes: [
      "Targeted gaps closed with data",
      "Improved confidence and attainment",
      "Flexible scheduling around school hours",
      "Transparent parent progress reporting",
    ],
    schedule: ["After-school 15:00–17:00", "Weekend academy", "One-to-one sessions"],
    capacity: "Small group or one-to-one",
    image: "/images/campus-canteen.jpg",
    faqs: [
      { q: "How is tuition personalised?", a: "We begin with a diagnostic and build a learning plan reviewed weekly through the parent portal." },
    ],
  },
];

// ----------------------------- TIMETABLE ----------------------------------
export type TimetableSlot = {
  time: string;
  day: "Mon" | "Tue" | "Wed" | "Thu" | "Fri";
  title: string;
  teacher: string;
  room: string;
  type: "class" | "break" | "lab" | "activity";
};

export const timetableSlots: TimetableSlot[] = [
  { time: "08:00–08:45", day: "Mon", title: "Mathematics", teacher: "Daniel Carter", room: "R-12", type: "class" },
  { time: "08:00–08:45", day: "Tue", title: "English Literature", teacher: "Emma Roberts", room: "R-04", type: "class" },
  { time: "08:00–08:45", day: "Wed", title: "Physics", teacher: "Dr. Sarah Wilson", room: "Lab 1", type: "lab" },
  { time: "08:00–08:45", day: "Thu", title: "Computer Science", teacher: "Ahmed Raza", room: "IT Lab", type: "lab" },
  { time: "08:00–08:45", day: "Fri", title: "History", teacher: "Omar Farooq", room: "R-07", type: "class" },
  { time: "08:50–09:35", day: "Mon", title: "Chemistry", teacher: "Sofia Martinez", room: "Lab 2", type: "lab" },
  { time: "08:50–09:35", day: "Tue", title: "Mathematics", teacher: "Daniel Carter", room: "R-12", type: "class" },
  { time: "08:50–09:35", day: "Wed", title: "English Literature", teacher: "Emma Roberts", room: "R-04", type: "class" },
  { time: "08:50–09:35", day: "Thu", title: "Biology", teacher: "Sofia Martinez", room: "Lab 2", type: "lab" },
  { time: "08:50–09:35", day: "Fri", title: "Global Studies", teacher: "Omar Farooq", room: "R-07", type: "class" },
  { time: "09:40–10:25", day: "Mon", title: "English Literature", teacher: "Emma Roberts", room: "R-04", type: "class" },
  { time: "09:40–10:25", day: "Tue", title: "Physics", teacher: "Dr. Sarah Wilson", room: "Lab 1", type: "lab" },
  { time: "09:40–10:25", day: "Wed", title: "Mathematics", teacher: "Daniel Carter", room: "R-12", type: "class" },
  { time: "09:40–10:25", day: "Thu", title: "Chemistry", teacher: "Sofia Martinez", room: "Lab 2", type: "lab" },
  { time: "09:40–10:25", day: "Fri", title: "Computer Science", teacher: "Ahmed Raza", room: "IT Lab", type: "lab" },
  { time: "10:30–10:55", day: "Mon", title: "Morning Break", teacher: "—", room: "Courtyard", type: "break" },
  { time: "10:30–10:55", day: "Tue", title: "Morning Break", teacher: "—", room: "Courtyard", type: "break" },
  { time: "10:30–10:55", day: "Wed", title: "Morning Break", teacher: "—", room: "Courtyard", type: "break" },
  { time: "10:30–10:55", day: "Thu", title: "Morning Break", teacher: "—", room: "Courtyard", type: "break" },
  { time: "10:30–10:55", day: "Fri", title: "Morning Break", teacher: "—", room: "Courtyard", type: "break" },
  { time: "11:00–11:45", day: "Mon", title: "Biology", teacher: "Sofia Martinez", room: "Lab 2", type: "lab" },
  { time: "11:00–11:45", day: "Tue", title: "Computer Science", teacher: "Ahmed Raza", room: "IT Lab", type: "lab" },
  { time: "11:00–11:45", day: "Wed", title: "History", teacher: "Omar Farooq", room: "R-07", type: "class" },
  { time: "11:00–11:45", day: "Thu", title: "Mathematics", teacher: "Daniel Carter", room: "R-12", type: "class" },
  { time: "11:00–11:45", day: "Fri", title: "Physical Education", teacher: "Daniel Carter", room: "Sports Hall", type: "activity" },
  { time: "11:50–12:35", day: "Mon", title: "Physics", teacher: "Dr. Sarah Wilson", room: "Lab 1", type: "lab" },
  { time: "11:50–12:35", day: "Tue", title: "Chemistry", teacher: "Sofia Martinez", room: "Lab 2", type: "lab" },
  { time: "11:50–12:35", day: "Wed", title: "Biology", teacher: "Sofia Martinez", room: "Lab 2", type: "lab" },
  { time: "11:50–12:35", day: "Thu", title: "English Literature", teacher: "Emma Roberts", room: "R-04", type: "class" },
  { time: "11:50–12:35", day: "Fri", title: "Mathematics", teacher: "Daniel Carter", room: "R-12", type: "class" },
  { time: "12:40–13:20", day: "Mon", title: "Lunch", teacher: "—", room: "Dining Hall", type: "break" },
  { time: "12:40–13:20", day: "Tue", title: "Lunch", teacher: "—", room: "Dining Hall", type: "break" },
  { time: "12:40–13:20", day: "Wed", title: "Lunch", teacher: "—", room: "Dining Hall", type: "break" },
  { time: "12:40–13:20", day: "Thu", title: "Lunch", teacher: "—", room: "Dining Hall", type: "break" },
  { time: "12:40–13:20", day: "Fri", title: "Lunch", teacher: "—", room: "Dining Hall", type: "break" },
  { time: "13:25–14:10", day: "Mon", title: "Computer Science", teacher: "Ahmed Raza", room: "IT Lab", type: "lab" },
  { time: "13:25–14:10", day: "Tue", title: "Global Studies", teacher: "Omar Farooq", room: "R-07", type: "class" },
  { time: "13:25–14:10", day: "Wed", title: "Art & Music", teacher: "Noah Bennett", room: "Studio", type: "activity" },
  { time: "13:25–14:10", day: "Thu", title: "History", teacher: "Omar Farooq", room: "R-07", type: "class" },
  { time: "13:25–14:10", day: "Fri", title: "House Activity", teacher: "All Staff", room: "Hall", type: "activity" },
];

export const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri"] as const;

// ----------------------------- ANNOUNCEMENTS ------------------------------
export type Announcement = {
  id: string;
  title: string;
  body: string;
  date: string;
  audience: "All" | "Parents" | "Students" | "Teachers";
  pinned?: boolean;
  unread?: boolean;
  channel: "News" | "Alert" | "Reminder" | "Event";
};

export const announcements: Announcement[] = [
  { id: "a1", title: "Spring Open Day — register your visit", body: "Families are invited to tour our campus, meet our faculty and experience a live lesson. Register in advance.", date: "2026-03-12", audience: "All", pinned: true, channel: "Event", unread: true },
  { id: "a2", title: "Term 2 progress reports released", body: "Progress reports are now available in the student and parent portals. Please review and acknowledge.", date: "2026-03-10", audience: "Parents", channel: "News", unread: true },
  { id: "a3", title: "Mock examination timetable published", body: "The mock exam schedule for Grades 9–12 is live under Exams. Please check your individual timetable.", date: "2026-03-08", audience: "Students", channel: "Reminder", unread: true },
  { id: "a4", title: "Parent–teacher conferences — booking open", body: "Book a one-to-one conference with your child's class teacher for the week of 24 March.", date: "2026-03-06", audience: "Parents", channel: "Event" },
  { id: "a5", title: "Library extended hours during revision", body: "The library will remain open until 19:00 for students preparing for mock examinations.", date: "2026-03-04", audience: "Students", channel: "Alert" },
  { id: "a6", title: "Staff AI-Assisted Teaching workshop", body: "Faculty development session on integrating AI assistants responsibly into planning and feedback.", date: "2026-03-02", audience: "Teachers", channel: "News" },
];

// ----------------------------- EVENTS -------------------------------------
export type SchoolEvent = {
  id: string;
  title: string;
  category: string;
  date: string;
  endDate?: string;
  time: string;
  location: string;
  description: string;
  image: string;
  registration?: boolean;
};

export const events: SchoolEvent[] = [
  { id: "e1", title: "Annual Sports Day", category: "Sports", date: "2026-04-18", time: "08:30–16:00", location: "Meridian Sports Ground", description: "A full day of track, field and house competitions celebrating fitness, teamwork and sportsmanship.", image: "/images/campus-sports.jpg", registration: true },
  { id: "e2", title: "Parent–Teacher Conferences", category: "Academic", date: "2026-03-24", endDate: "2026-03-28", time: "14:00–18:00", location: "City Campus · Hall A", description: "One-to-one conferences between parents and class teachers to review progress, wellbeing and next steps.", image: "/images/campus-classroom.jpg", registration: true },
  { id: "e3", title: "Innovation & Robotics Expo", category: "Technology", date: "2026-04-02", time: "10:00–15:00", location: "Technology Lab", description: "Students showcase robotics, coding and design projects to families and industry mentors.", image: "/images/campus-lab.jpg" },
  { id: "e4", title: "Spring Arts & Music Festival", category: "Arts", date: "2026-04-25", time: "17:00–21:00", location: "Open-Air Theatre", description: "An evening of student performance across music, drama, dance and visual art.", image: "/images/campus-hall.jpg", registration: true },
  { id: "e5", title: "STEM Career Workshop", category: "Workshop", date: "2026-05-09", time: "10:00–13:00", location: "Lecture Theatre", description: "Guest engineers, scientists and founders share pathways in STEM for senior students.", image: "/images/campus-study.jpg" },
  { id: "e6", title: "Community Service Fair", category: "Community", date: "2026-05-16", time: "09:00–12:00", location: "Central Courtyard", description: "Students register for volunteering partnerships and community-contribution projects.", image: "/images/campus-library.jpg" },
  { id: "e7", title: "Creative Writing Competition", category: "Competition", date: "2026-05-22", time: "Open submission", location: "Online", description: "An open writing competition across age groups, judged by our literature faculty and published in Meridian Journal.", image: "/images/campus-canteen.jpg" },
  { id: "e8", title: "Summer Learning Showcase", category: "Academic", date: "2026-06-12", time: "11:00–14:00", location: "City Campus", description: "Celebrating the year of learning: project showcases, awards and community gathering.", image: "/images/campus-compute.jpg" },
];

// ----------------------------- FEES & INVOICES ----------------------------
export type Invoice = {
  id: string;
  term: string;
  amount: number;
  paid: number;
  due: string;
  status: "Paid" | "Due" | "Overdue" | "Partially Paid";
  items: { label: string; amount: number }[];
};

export const invoices: Invoice[] = [
  { id: "INV-2026-0148", term: "Term 1 · 2026", amount: 72000, paid: 72000, due: "2026-01-15", status: "Paid", items: [{ label: "Tuition Fee", amount: 62000 }, { label: "Learning Resources", amount: 5000 }, { label: "Technology Fee", amount: 5000 }] },
  { id: "INV-2026-0149", term: "Term 2 · 2026", amount: 72000, paid: 72000, due: "2026-05-15", status: "Paid", items: [{ label: "Tuition Fee", amount: 62000 }, { label: "Learning Resources", amount: 5000 }, { label: "Technology Fee", amount: 5000 }] },
  { id: "INV-2026-0151", term: "Term 3 · 2026", amount: 72000, paid: 0, due: "2026-09-15", status: "Due", items: [{ label: "Tuition Fee", amount: 62000 }, { label: "Learning Resources", amount: 5000 }, { label: "Technology Fee", amount: 5000 }] },
  { id: "INV-2025-0117", term: "Term 3 · 2025", amount: 68000, paid: 68000, due: "2025-12-15", status: "Paid", items: [{ label: "Tuition Fee", amount: 59000 }, { label: "Learning Resources", amount: 4500 }, { label: "Technology Fee", amount: 4500 }] },
];

export const feeSummary = {
  current: 72000,
  paid: 144000,
  outstanding: 72000,
  nextDue: "2026-09-15",
  discountApplied: true,
};

// ----------------------------- EXAMS & MARKS ------------------------------
export type Exam = {
  id: string;
  title: string;
  subject: string;
  date: string;
  time: string;
  category: "Mock" | "Terminal" | "Internal" | "Assessment";
  weight: string;
  duration: string;
};

export const exams: Exam[] = [
  { id: "x1", title: "Mock Examination", subject: "Mathematics", date: "2026-03-18", time: "09:00–11:30", category: "Mock", weight: "25%", duration: "2h 30m" },
  { id: "x2", title: "Mock Examination", subject: "Physics", date: "2026-03-19", time: "09:00–11:00", category: "Mock", weight: "25%", duration: "2h" },
  { id: "x3", title: "Terminal Assessment", subject: "English Literature", date: "2026-03-23", time: "09:00–11:30", category: "Terminal", weight: "30%", duration: "2h 30m" },
  { id: "x4", title: "Terminal Assessment", subject: "Computer Science", date: "2026-03-24", time: "13:00–15:00", category: "Terminal", weight: "30%", duration: "2h" },
  { id: "x5", title: "Class Test", subject: "Chemistry", date: "2026-03-27", time: "09:00–10:00", category: "Assessment", weight: "10%", duration: "1h" },
];

export type MarksRow = { subject: string; teacher: string; test: number; exam: number; total: number; grade: string; trend: number[] };

export const marks: MarksRow[] = [
  { subject: "Mathematics", teacher: "Daniel Carter", test: 88, exam: 82, total: 86, grade: "A", trend: [72, 78, 84, 86] },
  { subject: "Physics", teacher: "Dr. Sarah Wilson", test: 79, exam: 84, total: 82, grade: "A", trend: [68, 74, 78, 82] },
  { subject: "English Literature", teacher: "Emma Roberts", test: 91, exam: 88, total: 90, grade: "A", trend: [80, 85, 88, 90] },
  { subject: "Computer Science", teacher: "Ahmed Raza", test: 94, exam: 92, total: 93, grade: "A*", trend: [84, 88, 91, 93] },
  { subject: "Chemistry", teacher: "Sofia Martinez", test: 76, exam: 74, total: 75, grade: "B", trend: [70, 72, 71, 75] },
  { subject: "Biology", teacher: "Sofia Martinez", test: 83, exam: 80, total: 82, grade: "A", trend: [75, 78, 80, 82] },
  { subject: "History", teacher: "Omar Farooq", test: 85, exam: 79, total: 82, grade: "A", trend: [70, 76, 79, 82] },
];

// ----------------------------- ASSIGNMENTS / HOMEWORK ---------------------
export type Assignment = {
  id: string;
  title: string;
  subject: string;
  teacher: string;
  assigned: string;
  due: string;
  status: "Pending" | "Submitted" | "Graded" | "Draft";
  type: "Homework" | "Assignment" | "Project";
  grade: string;
  weight: number;
};

export const assignments: Assignment[] = [
  { id: "as1", title: "Quadratic Equations Problem Set", subject: "Mathematics", teacher: "Daniel Carter", assigned: "2026-03-06", due: "2026-03-16", status: "Pending", type: "Homework", grade: "—", weight: 10 },
  { id: "as2", title: "Essay: The Power of Voice", subject: "English Literature", teacher: "Emma Roberts", assigned: "2026-03-05", due: "2026-03-19", status: "Submitted", type: "Assignment", grade: "A", weight: 15 },
  { id: "as3", title: "Circuit Investigation Lab Sheet", subject: "Physics", teacher: "Dr. Sarah Wilson", assigned: "2026-03-09", due: "2026-03-20", status: "Pending", type: "Homework", grade: "—", weight: 10 },
  { id: "as4", title: "Python Data Visualisation Project", subject: "Computer Science", teacher: "Ahmed Raza", assigned: "2026-02-28", due: "2026-03-13", status: "Graded", type: "Project", grade: "A*", weight: 20 },
  { id: "as5", title: "Research: Renewable Energy", subject: "Chemistry", teacher: "Sofia Martinez", assigned: "2026-03-02", due: "2026-03-15", status: "Graded", type: "Project", grade: "A", weight: 15 },
  { id: "as6", title: "Source Analysis Worksheet", subject: "History", teacher: "Omar Farooq", assigned: "2026-03-08", due: "2026-03-12", status: "Pending", type: "Homework", grade: "—", weight: 5 },
];

// ----------------------------- ATTENDANCE ---------------------------------
export type AttendanceRecord = { date: string; status: "present" | "absent" | "late" | "excused" };
export const attendanceHistory: AttendanceRecord[] = [
  { date: "2026-03-11", status: "present" },
  { date: "2026-03-10", status: "present" },
  { date: "2026-03-09", status: "late" },
  { date: "2026-03-06", status: "present" },
  { date: "2026-03-05", status: "present" },
  { date: "2026-03-04", status: "excused" },
  { date: "2026-03-03", status: "present" },
  { date: "2026-03-02", status: "present" },
  { date: "2026-02-27", status: "present" },
  { date: "2026-02-26", status: "present" },
  { date: "2026-02-25", status: "present" },
  { date: "2026-02-24", status: "late" },
];

export const attendanceByMonth = [
  { month: "Oct", value: 94 },
  { month: "Nov", value: 95 },
  { month: "Dec", value: 91 },
  { month: "Jan", value: 96 },
  { month: "Feb", value: 95 },
  { month: "Mar", value: 97 },
];

// ----------------------------- COURSES (LMS) ------------------------------
export type Course = {
  id: string;
  title: string;
  subject: string;
  teacher: string;
  level: string;
  lessons: number;
  progress: number;
  duration: string;
  description: string;
  lessonsList: { title: string; duration: string; done: boolean; type: "video" | "reading" | "quiz" | "resource" | "lab" }[];
};

export const courses: Course[] = [
  {
    id: "c1",
    title: "Mathematics — Quadratic Functions",
    subject: "Mathematics",
    teacher: "Daniel Carter",
    level: "Grade 9",
    lessons: 8,
    progress: 66,
    duration: "4h 20m",
    description: "Master quadratic equations, graphs, factorisation and real-world applications through worked examples and interactive practice.",
    lessonsList: [
      { title: "Introduction to Quadratics", duration: "12m", done: true, type: "video" },
      { title: "Factorising Quadratic Expressions", duration: "18m", done: true, type: "video" },
      { title: "Completing the Square", duration: "22m", done: true, type: "video" },
      { title: "The Quadratic Formula", duration: "20m", done: true, type: "video" },
      { title: "Graphs of Quadratic Functions", duration: "24m", done: true, type: "reading" },
      { title: "Practice Problem Set", duration: "45m", done: false, type: "quiz" },
      { title: "Real-World Applications", duration: "16m", done: false, type: "video" },
      { title: "End-of-Module Assessment", duration: "40m", done: false, type: "quiz" },
    ],
  },
  {
    id: "c2",
    title: "Physics — Electricity & Circuits",
    subject: "Physics",
    teacher: "Dr. Sarah Wilson",
    level: "Grade 9",
    lessons: 6,
    progress: 45,
    duration: "3h 10m",
    description: "Explore current, voltage and resistance through virtual labs and hands-on circuit investigations.",
    lessonsList: [
      { title: "Electric Charge & Current", duration: "14m", done: true, type: "video" },
      { title: "Voltage & Ohm's Law", duration: "18m", done: true, type: "video" },
      { title: "Series Circuits", duration: "15m", done: true, type: "lab" },
      { title: "Parallel Circuits", duration: "16m", done: false, type: "lab" },
      { title: "Circuit Simulation Lab", duration: "25m", done: false, type: "quiz" },
      { title: "Unit Checkpoint", duration: "30m", done: false, type: "quiz" },
    ],
  },
  {
    id: "c3",
    title: "Computer Science — Data & Algorithms",
    subject: "Computer Science",
    teacher: "Ahmed Raza",
    level: "Grade 9",
    lessons: 7,
    progress: 30,
    duration: "3h 40m",
    description: "Computational thinking, data structures and algorithmic problem-solving with real code demos.",
    lessonsList: [
      { title: "Thinking Like a Computer", duration: "12m", done: true, type: "video" },
      { title: "Lists & Dictionaries in Python", duration: "20m", done: true, type: "video" },
      { title: "Search Algorithms", duration: "22m", done: false, type: "video" },
      { title: "Sorting Algorithms", duration: "26m", done: false, type: "reading" },
      { title: "Coding Lab: Sorting Visualiser", duration: "40m", done: false, type: "quiz" },
      { title: "Big O Notation", duration: "18m", done: false, type: "video" },
      { title: "Module Project", duration: "50m", done: false, type: "resource" },
    ],
  },
  {
    id: "c4",
    title: "English Literature — Voice & Perspective",
    subject: "English",
    teacher: "Emma Roberts",
    level: "Grade 9",
    lessons: 5,
    progress: 100,
    duration: "2h 30m",
    description: "Close reading and creative responses exploring narrative voice, perspective and persuasive writing.",
    lessonsList: [
      { title: "Narrative Voice & Irony", duration: "16m", done: true, type: "video" },
      { title: "Analysing Perspective", duration: "20m", done: true, type: "reading" },
      { title: "Persuasive Writing Toolkit", duration: "18m", done: true, type: "video" },
      { title: "Creative Response Workshop", duration: "28m", done: true, type: "resource" },
      { title: "Unit Reflection", duration: "20m", done: true, type: "quiz" },
    ],
  },
];

export const resources = [
  { title: "Past Paper Pack — Mathematics (mock)", type: "PDF", size: "2.4 MB", subject: "Mathematics", date: "2026-03-02" },
  { title: "Physics Formula Sheet (Term 2)", type: "PDF", size: "1.1 MB", subject: "Physics", date: "2026-03-01" },
  { title: "Python Starter Notebooks", type: "Notebook", size: "3.8 MB", subject: "Computer Science", date: "2026-02-28" },
  { title: "Essay Marking Rubric", type: "PDF", size: "640 KB", subject: "English", date: "2026-02-26" },
  { title: "Chemistry Lab Safety Guide", type: "PDF", size: "820 KB", subject: "Chemistry", date: "2026-02-24" },
];

// ----------------------------- NOTIFICATIONS ------------------------------
export type Notification = { id: string; title: string; body: string; time: string; kind: "info" | "alert" | "success" | "deadline"; unread: boolean };

export const notifications: Notification[] = [
  { id: "n1", title: "New assignment added", body: "Quadratic Equations Problem Set due 16 March.", time: "2h ago", kind: "deadline", unread: true },
  { id: "n2", title: "Result published", body: "Computer Science project graded A*.", time: "5h ago", kind: "success", unread: true },
  { id: "n3", title: "Fee reminder", body: "Term 3 invoice statement generated.", time: "1d ago", kind: "alert", unread: true },
  { id: "n4", title: "Timetable updated", body: "Thursday Chemistry moved to Lab 2.", time: "2d ago", kind: "info", unread: false },
  { id: "n5", title: "Event reminder", body: "Sports Day registers close 12 April.", time: "3d ago", kind: "info", unread: false },
];

// ----------------------------- FACULTY / LEADERSHIP -----------------------
export const leadership = [teachers[0], teachers[5], teachers[7]];

// ----------------------------- FACILITIES --------------------------------
export const facilities = [
  { title: "Modern Classrooms", desc: "Flexible, light-filled classrooms with writable surfaces and agile furniture.", image: "/images/campus-classroom.jpg", tag: "Learning" },
  { title: "Science Laboratories", desc: "Fully equipped physics, chemistry and biology laboratories with integrated data logging.", image: "/images/campus-lab.jpg", tag: "STEM" },
  { title: "Reading Library", desc: "A quiet, curated library with print and digital collections, study carrels and reading lounges.", image: "/images/campus-library.jpg", tag: "Library" },
  { title: "Sports & Athletics", desc: "Indoor sports hall, outdoor courts and a running track supporting the full athletics programme.", image: "/images/campus-sports.jpg", tag: "Sport" },
  { title: "Technology Labs", desc: "Dedicated computing spaces with robotics kits, 3D printing and creative media suites.", image: "/images/campus-compute.jpg", tag: "Technology" },
  { title: "Art, Music & Studios", desc: "Art studios, music rooms and a performance space for rehearsals and showcases.", image: "/images/campus-hall.jpg", tag: "Arts" },
  { title: "Dining & Nutrition", desc: "A warm, well-supervised cafeteria with fresh, nutritionally balanced daily menus.", image: "/images/campus-canteen.jpg", tag: "Wellbeing" },
  { title: "Student Spaces", desc: "Silent study zones, collaborative commons and wellbeing spaces for every stage.", image: "/images/campus-study.jpg", tag: "Student Life" },
];

// ----------------------------- FAQS ---------------------------------------
export const faqs = [
  { q: "How do I apply for admission?", a: "Start your online application through the Admissions page. Complete the multi-step form, upload supporting documents, and track your application status with the Application ID you receive at submission." },
  { q: "When does the academic year begin?", a: "The academic year is organised into three terms. Admission is accepted throughout the year subject to availability, with the main intake in the autumn term." },
  { q: "Are there scholarships and financial support?", a: "A range of merit and need-based support concepts are available. Eligibility is assessed during the admissions process and is always kept confidential." },
  { q: "How do parents follow their child's progress?", a: "The Parent Portal provides real-time access to attendance, timetable, homework, fee status, results and direct teacher messaging." },
  { q: "Is there a school transport service?", a: "Yes. A transport concept covers designated routes with live location tracking shown as a demo in the Parent Portal." },
  { q: "What curriculum do you follow?", a: "We use a balanced, internationally benchmarked approach that adapts by stage — from inquiry-led early years to examination-focused senior programmes." },
  { q: "How do you use technology and AI in learning?", a: "Technology supports and enriches learning, never replaces teachers. Our AI assistant helps students and parents navigate the platform, find resources and understand school processes." },
  { q: "Can students join mid-academic-year?", a: "Yes, subject to placement spaces. Our Foundation and Bridge programmes also support students transitioning from other systems." },
];

// ----------------------------- WORDbitX CASE STUDY ------------------------
export const wordbitxCapabilities = [
  "Premium website", "Online admissions", "Parent portal", "Student portal", "Teacher portal", "LMS", "Attendance", "Exams & results", "Fee management", "AI assistant", "Admin dashboard",
];

// ----------------------------- SEARCH INDEX -------------------------------
export const searchIndex = [
  ...programs.map((p) => ({ id: p.id, title: p.title, section: "Program", href: `/programs/${p.slug}`, keywords: `${p.category} ${p.short}` })),
  ...teachers.map((t) => ({ id: t.id, title: t.name, section: "Faculty", href: "/about/faculty", keywords: `${t.subject} ${t.role}` })),
  ...events.map((e) => ({ id: e.id, title: e.title, section: "Event", href: `/events#${e.id}`, keywords: e.category })),
  ...faqs.map((f, i) => ({ id: "faq" + i, title: f.q, section: "FAQ", href: "/admissions#faqs", keywords: "admission question help" })),
  ...courses.map((c) => ({ id: c.id, title: c.title, section: "Course", href: "/portal/lms", keywords: `${c.subject} ${c.level}` })),
] as { id: string; title: string; section: string; href: string; keywords: string }[];

// ----------------------------- ATTENDANCE (admin) -------------------------
export const classAttendance = [
  { className: "Grade 9-A", present: 24, total: 26, percent: 92 },
  { className: "Grade 9-B", present: 22, total: 24, percent: 92 },
  { className: "Grade 10-A", present: 25, total: 26, percent: 96 },
  { className: "Grade 10-B", present: 27, total: 28, percent: 96 },
  { className: "Grade 8-C", present: 23, total: 25, percent: 92 },
  { className: "Grade 11-A", present: 21, total: 22, percent: 95 },
];

export const adminStats = {
  students: 1284,
  teachers: 96,
  classes: 42,
  attendance: 94.6,
  pendingAdmissions: 23,
  feeCollected: 3245000,
  upcomingExams: 5,
};

export const feeTrend = [
  { month: "Oct", value: 82 },
  { month: "Nov", value: 78 },
  { month: "Dec", value: 64 },
  { month: "Jan", value: 88 },
  { month: "Feb", value: 91 },
  { month: "Mar", value: 95 },
];

export const applicantData = [
  { name: "Ayaan", id: "APP-2026-0041", program: "Early Years", status: "Under Review", date: "2026-03-09" },
  { name: "Mina", id: "APP-2026-0040", program: "Primary", status: "Interview", date: "2026-03-08" },
  { name: "Rayan", id: "APP-2026-0039", program: "Secondary", status: "Documents", date: "2026-03-07" },
  { name: "Lina", id: "APP-2026-0038", program: "A-Level", status: "Approved", date: "2026-03-05" },
  { name: "Omar", id: "APP-2026-0037", program: "Middle School", status: "Pending", date: "2026-03-04" },
  { name: "Hana", id: "APP-2026-0036", program: "O-Level", status: "Rejected", date: "2026-03-02" },
];

export const journalPosts = [
  { id: "what-is-school-management-software", title: "What Is School Management Software?", category: "EdTech", excerpt: "A plain-language guide to the systems that run a modern school — from admissions to examinations to finance.", date: "2026-02-28", read: "6 min", image: "/images/campus-compute.jpg", tag: "WordbitX" },
  { id: "school-erp-vs-traditional-administration", title: "School ERP vs Traditional School Administration", category: "Comparison", excerpt: "What changes when an institution moves from spreadsheets and registers to a connected education ecosystem?", date: "2026-02-20", read: "7 min", image: "/images/campus-classroom.jpg", tag: "WordbitX" },
  { id: "benefits-of-a-parent-portal", title: "Benefits of a Parent Portal", category: "Portals", excerpt: "How real-time visibility of attendance, fees and progress transforms the parent–school relationship.", date: "2026-02-12", read: "5 min", image: "/images/campus-library.jpg", tag: "WordbitX" },
  { id: "how-online-school-admissions-work", title: "How Online School Admissions Work", category: "Admissions", excerpt: "A step-by-step walkthrough of a modern digital admissions journey from enquiry to enrolment.", date: "2026-02-05", read: "6 min", image: "/images/campus-hall.jpg", tag: "WordbitX" },
  { id: "why-schools-need-a-student-portal", title: "Why Schools Need a Student Portal", category: "Portals", excerpt: "The student experience that builds independence: timetable, tasks, resources, results and progress in one place.", date: "2026-01-28", read: "5 min", image: "/images/campus-study.jpg", tag: "WordbitX" },
  { id: "school-lms-guide", title: "The School LMS Guide", category: "LMS", excerpt: "What a learning management system does, how it supports teachers, and what to look for when choosing one.", date: "2026-01-20", read: "8 min", image: "/images/campus-lab.jpg", tag: "WordbitX" },
  { id: "school-attendance-management-systems", title: "School Attendance Management Systems", category: "Operations", excerpt: "From registers to analytics: how modern attendance systems support safety, wellbeing and insight.", date: "2026-01-12", read: "6 min", image: "/images/campus-sports.jpg", tag: "WordbitX" },
  { id: "digital-transformation-in-education", title: "Digital Transformation in Education", category: "EdTech", excerpt: "The practical roadmap for institutions moving to a connected, data-informed way of working.", date: "2026-01-04", read: "7 min", image: "/images/campus-canteen.jpg", tag: "WordbitX" },
  { id: "ai-in-education", title: "AI in Education: Augmenting, Not Replacing", category: "AI", excerpt: "How AI assistants support students and staff while keeping teachers at the centre of learning.", date: "2025-12-28", read: "9 min", image: "/images/campus-hall.jpg", tag: "WordbitX" },
  { id: "how-to-choose-school-management-software", title: "How to Choose School Management Software", category: "Guide", excerpt: "A decision framework covering modules, data, user experience, support and total cost of ownership.", date: "2025-12-20", read: "8 min", image: "/images/campus-compute.jpg", tag: "WordbitX" },
  { id: "best-school-management-software-in-pakistan", title: "Best School Management Software in Pakistan", category: "EdTech", excerpt: "What Pakistani schools actually need — PKR fees, local payments, Urdu-friendly design — and how to compare vendors honestly.", date: "2026-03-04", read: "7 min", image: "/images/campus-classroom.jpg", tag: "WordbitX" },
  { id: "how-school-management-software-reduces-administrative-work", title: "How School Management Software Reduces Administrative Work", category: "Operations", excerpt: "The registers, spreadsheets and phone calls that disappear when admissions, fees and results share one system.", date: "2026-02-26", read: "6 min", image: "/images/campus-compute.jpg", tag: "WordbitX" },
  { id: "how-to-automate-school-fee-collection", title: "How to Automate School Fee Collection", category: "Fees", excerpt: "From monthly challans to defaulter reminders — a practical fee automation roadmap for schools and academies.", date: "2026-02-18", read: "7 min", image: "/images/campus-study.jpg", tag: "WordbitX" },
  { id: "benefits-of-digital-attendance-for-schools", title: "Benefits of Digital Attendance for Schools", category: "Operations", excerpt: "Instant parent alerts, low-attendance patterns and safeguarding data — what changes when attendance goes digital.", date: "2026-02-10", read: "5 min", image: "/images/campus-sports.jpg", tag: "WordbitX" },
  { id: "school-erp-vs-manual-registers", title: "School ERP vs Manual Registers", category: "Comparison", excerpt: "Where registers still work, where they quietly fail, and the cost of running a school on paper and memory.", date: "2026-02-02", read: "6 min", image: "/images/campus-library.jpg", tag: "WordbitX" },
  { id: "how-parent-portals-improve-school-communication", title: "How Parent Portals Improve School Communication", category: "Portals", excerpt: "The same message, delivered at the right moment — why portals beat printed circulars and group chats.", date: "2026-01-25", read: "5 min", image: "/images/campus-classroom.jpg", tag: "WordbitX" },
  { id: "how-schools-can-digitize-fee-challans", title: "How Schools Can Digitize Fee Challans", category: "Fees", excerpt: "Challan, invoice and receipt in one flow — with JazzCash, Easypaisa and bank transfer options ready to connect.", date: "2026-01-16", read: "6 min", image: "/images/campus-study.jpg", tag: "WordbitX" },
  { id: "best-lms-features-for-pakistani-schools", title: "Best LMS Features for Pakistani Schools", category: "LMS", excerpt: "Beyond video lessons: offline-friendly study material, Urdu content, batch-based academies and progress parents can see.", date: "2026-01-08", read: "7 min", image: "/images/campus-lab.jpg", tag: "WordbitX" },
  { id: "how-to-build-a-school-mobile-app", title: "How to Build a School Mobile App", category: "Mobile", excerpt: "Scope, roles, notifications and the payments that make a school app feel essential to Pakistani families.", date: "2025-12-30", read: "8 min", image: "/images/campus-hall.jpg", tag: "WordbitX" },
  { id: "school-management-system-for-academies", title: "School Management System for Academies & Coaching Centers", category: "Academies", excerpt: "Batches, entry tests and monthly fee cycles — how a coaching institute in Lahore or Karachi can run like a modern school.", date: "2025-12-22", read: "6 min", image: "/images/campus-compute.jpg", tag: "WordbitX" },
];

// ----------------------------- PAKISTAN-READY MODULES ---------------------
export const trustStats = [
  { value: 14, suffix: "", label: "Years of Excellence" },
  { value: 1250, suffix: "+", label: "Students" },
  { value: 85, suffix: "", label: "Teachers" },
  { value: 3, suffix: "", label: "Campuses" },
  { value: 94, suffix: "%", label: "Academic Success Rate" },
];

export const pakistanCities = [
  "Lahore", "Karachi", "Islamabad", "Rawalpindi", "Faisalabad",
  "Multan", "Gujranwala", "Sialkot", "Peshawar", "Quetta",
];

export const academicCalendar = [
  { label: "Term 1 begins", date: "2025-09-01" },
  { label: "Mid Term Exams · T1", date: "2025-11-10" },
  { label: "Winter Break", date: "2025-12-16" },
  { label: "Term 2 begins", date: "2026-01-15" },
  { label: "Mid Term Exams · T2", date: "2026-03-18" },
  { label: "Eid Break", date: "2026-03-19" },
  { label: "Final Term Exams · T2", date: "2026-04-13" },
  { label: "Term 3 begins", date: "2026-05-01" },
  { label: "Annual Examination", date: "2026-06-29" },
];

export const examTypes = [
  { name: "Monthly Test", freq: "Every month", weight: "10%" },
  { name: "Mid Term", freq: "Per term", weight: "30%" },
  { name: "Final Term", freq: "Per term", weight: "40%" },
  { name: "Annual Exam", freq: "Once a year", weight: "20%" },
  { name: "Entry Test", freq: "On admission", weight: "Qualifying" },
];

export const feeStructure = [
  { label: "Monthly Tuition", amount: 18500, per: "per month" },
  { label: "Admission Fee", amount: 45000, per: "one-time" },
  { label: "Technology Fee", amount: 8000, per: "per term" },
  { label: "Transport Fee", amount: 6500, per: "per month" },
  { label: "Examination Fee", amount: 4500, per: "per term" },
  { label: "Activity & Lab Fee", amount: 3000, per: "per term" },
];

export const paymentMethods = [
  { id: "cash", name: "Cash", desc: "Counter / cash on delivery", ready: true },
  { id: "bank", name: "Bank Transfer", desc: "IBAN / online banking", ready: true },
  { id: "jazzcash", name: "JazzCash", desc: "Mobile wallet", ready: false },
  { id: "easypaisa", name: "Easypaisa", desc: "Mobile wallet", ready: false },
  { id: "card", name: "Debit / Credit Card", desc: "Meez / Visa / Mastercard", ready: false },
];

export const feeDefaulters = [
  { student: "Bilal Aslam", id: "MA-2024-1042", klass: "Grade 10-B", parent: "Mr. Aslam", phone: "+92 300 000 0001", outstanding: 46500, due: "2026-02-15" },
  { student: "Daniyal Qureshi", id: "MA-2025-1077", klass: "Grade 7-C", parent: "Mr. Qureshi", phone: "+92 301 000 0002", outstanding: 25000, due: "2026-02-28" },
  { student: "Hamza Malik", id: "MA-2024-1008", klass: "Grade 9-A", parent: "Mr. Malik", phone: "+92 302 000 0003", outstanding: 18500, due: "2026-03-15" },
  { student: "Emaan Sheikh", id: "MA-2023-0987", klass: "Grade 11-A", parent: "Mr. Sheikh", phone: "+92 333 000 0004", outstanding: 72000, due: "2026-01-31" },
];

export const transportRoutes = [
  { bus: "MA-3101", driver: "Rashid Mehmood", route: "Route 1 · Lahore (DHA → Johar Town)", stops: 8, students: 26, pickup: "07:15", fee: 6500 },
  { bus: "MA-3102", driver: "Shafqat Ali", route: "Route 2 · Islamabad (F-10 → F-6)", stops: 7, students: 24, pickup: "07:20", fee: 6500 },
  { bus: "MA-3103", driver: "Imran Baig", route: "Route 3 · Karachi (Clifton → North Nazimabad)", stops: 9, students: 28, pickup: "07:10", fee: 7000 },
];

export const libraryStats = { total: 12400, issued: 342, returned: 2988, overdue: 17 };

export const libraryBooks = [
  { title: "O-Level Mathematics Workbook", author: "Cambridge Series", isbn: "978-1-4718-0001-2", copies: 40, issued: 12 },
  { title: "Physics for Secondary Schools", author: "K. L. Mehta", isbn: "978-8-1754-2014-1", copies: 35, issued: 9 },
  { title: "Bait-o-Sukhan (اردو)", author: "Hafiz Jalaluddin", isbn: "978-9-6980-3014-7", copies: 30, issued: 15 },
  { title: "Computer Science A-Level", author: "S. C. Biggs", isbn: "978-1-1076-8014-3", copies: 25, issued: 7 },
  { title: "English Grammar & Composition", author: "Wren & Martin", isbn: "978-0-3406-8822-5", copies: 45, issued: 18 },
];

export const hrEmployees = [
  { name: "Daniel Carter", id: "EMP-0012", dept: "Mathematics", phone: "+92 300 110 0012", join: "2018-04-01", basic: 120000, allowance: 28000, deduction: 9500, leave: "0 days" },
  { name: "Sofia Martinez", id: "EMP-0027", dept: "Science", phone: "+92 301 110 0027", join: "2019-09-01", basic: 110000, allowance: 24000, deduction: 8200, leave: "1 day" },
  { name: "Layla Hassan", id: "EMP-0031", dept: "Early Years", phone: "+92 302 110 0031", join: "2020-01-15", basic: 95000, allowance: 20000, deduction: 6400, leave: "0 days" },
  { name: "Noah Bennett", id: "EMP-0018", dept: "Arts & Culture", phone: "+92 333 110 0018", join: "2017-08-21", basic: 105000, allowance: 22000, deduction: 7100, leave: "2 days" },
];

export const onlineClasses = [
  { title: "Mathematics · Doubt Session", teacher: "Daniel Carter", klass: "Grade 9", date: "Today", time: "17:00", join: "class.demo/math-9" },
  { title: "Chemistry · Lab Simulation", teacher: "Sofia Martinez", klass: "Grade 10", date: "Tomorrow", time: "16:30", join: "class.demo/chem-10" },
  { title: "English · Essay Workshop", teacher: "Emma Roberts", klass: "Grade 12", date: "Saturday", time: "15:00", join: "class.demo/eng-12" },
];

export const guardians = [
  { name: "Mr. Abdul Khan", relation: "Father", phone: "+92 300 220 0001", whatsapp: "+92 300 220 0001", email: "a.khan@example.com", children: ["Ayaan Khan"], outstanding: 0 },
  { name: "Mrs. Ayesha Ahmed", relation: "Mother", phone: "+92 301 220 0002", whatsapp: "+92 301 220 0002", email: "ayesha.ahmed@example.com", children: ["Sara Ahmed"], outstanding: 18500 },
  { name: "Mr. Kamran Malik", relation: "Father", phone: "+92 302 220 0003", whatsapp: "+92 302 220 0003", email: "k.malik@example.com", children: ["Hamza Malik"], outstanding: 18500 },
];

export const studentProfile = {
  id: "MA-2024-1001",
  roll: "07",
  admissionDate: "2024-08-14",
  bloodGroup: "B+",
  address: "House 42, Street 9, DHA Phase 5, Lahore",
  phone: "+92 300 220 0001",
};

export const rolesMatrix = [
  { role: "Super Admin", modules: "All modules + settings & campuses" },
  { role: "School Admin", modules: "Students, admissions, fees, reports" },
  { role: "Principal", modules: "Academics, exams, results, announcements" },
  { role: "Accountant", modules: "Fees, payroll, store, finance reports" },
  { role: "Teacher", modules: "Classes, attendance, marks, LMS" },
  { role: "Parent", modules: "Children, fees, results, messages" },
  { role: "Student", modules: "Timetable, homework, results, LMS" },
  { role: "HR", modules: "Employees, leave, payroll" },
  { role: "Librarian", modules: "Books, issues, returns" },
  { role: "Transport Manager", modules: "Routes, vehicles, students" },
];

export const reportList = [
  "Student Report", "Attendance Report", "Fee Report", "Defaulter Report", "Exam Report",
  "Teacher Report", "Payroll Report", "Admission Report", "Transport Report", "Library Report",
];

export const storeProducts = [
  { name: "School Uniform (Full Set)", price: 4500, stock: 120 },
  { name: "Textbooks Bundle · Grade 9", price: 8200, stock: 64 },
  { name: "Stationery Kit", price: 1800, stock: 240 },
  { name: "ID Card + Lanyard", price: 450, stock: 400 },
];

export const newsItems = [
  { id: "n1", title: "Meridian Academy opens new technology lab at Lahore Campus", tag: "Campus", date: "2026-03-08", excerpt: "A 40-station computer lab with robotics kits and 3D printers now supports our computing pathway." },
  { id: "n2", title: "Students selected for regional science olympiad", tag: "Achievement", date: "2026-03-02", excerpt: "Five students advance to the regional round after strong showing in the written and practical rounds." },
  { id: "n3", title: "Digital library launched with 12,000+ titles", tag: "Innovation", date: "2026-02-20", excerpt: "Every student now carries the full library on their device, with Urdu and English collections." },
  { id: "n4", title: "Parent satisfaction survey: communication improves", tag: "Community", date: "2026-02-10", excerpt: "Families rate the parent portal as their most-used feature for daily school communication." },
  { id: "n5", title: "Sports Day 2026 registrations open", tag: "Sports", date: "2026-01-28", excerpt: "House competitions, track and field, and family fun zones return this April." },
  { id: "n6", title: "New academic year fee schedule published", tag: "Administration", date: "2026-01-15", excerpt: "Term-wise fee structure for 2026–27 is available in the parent portal and downloads page." },
];

export const galleryItems = [
  { key: "classroom", title: "Interactive classroom, Lahore Campus" },
  { key: "elementary", title: "Primary students during group work" },
  { key: "biology", title: "Biology practical, Grade 10" },
  { key: "library", title: "The reading library" },
  { key: "sports", title: "Sports day practice, Grade 7" },
  { key: "gym", title: "PE & athletics training" },
  { key: "rhythm", title: "Rhythmic gymnastics showcase" },
  { key: "microscope", title: "Science lab preparation" },
  { key: "interactive", title: "Smart-class lesson, Grade 12" },
  { key: "engaged", title: "Debate club, secondary school" },
];

export const downloadItems = [
  { name: "Meridian Prospectus 2026 (PDF)", type: "PDF", size: "6.2 MB" },
  { name: "Fee Schedule 2026–27 (PDF)", type: "PDF", size: "310 KB" },
  { name: "Academic Calendar 2026 (PDF)", type: "PDF", size: "240 KB" },
  { name: "Admission Form — Printable (PDF)", type: "PDF", size: "180 KB" },
  { name: "Safeguarding Policy (PDF)", type: "PDF", size: "420 KB" },
  { name: "Board of Studies by Class (PDF)", type: "PDF", size: "540 KB" },
];

export const testimonials = [
  { quote: "The portal changed how we follow our children's day — attendance, homework, fees and results are all in one elegant place.", name: "A parent of two students", role: "DEMO testimonial", color: "#0f766e" },
  { quote: "Moving from paper-based administration to a connected ecosystem saved our team hours every single week.", name: "School operations lead", role: "DEMO testimonial", color: "#2b527a" },
  { quote: "Students feel more in control of their learning — the timetable, tasks and progress make everything transparent.", name: "Head of senior school", role: "DEMO testimonial", color: "#b8863b" },
];
