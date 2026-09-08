import { NextRequest, NextResponse } from "next/server";
import { programs, faqs, courses, events, brand } from "@/lib/data";

// ─────────────────────────────────────────────────────────────────────────────
// LearnMate AI — API-ready assistant endpoint.
// This demo returns deterministic, grounded responses built from Meridian's own
// content. To connect a real LLM later, replace the `generateReply` body with a
// call to your chosen model (OpenAI, Anthropic, Gemini, or a self-hosted model)
// passing the same message + context. The contract stays identical.
// ─────────────────────────────────────────────────────────────────────────────

type Intent = { reply: string; sources: { title: string; href: string }[]; tag?: string };

const knowledge: { keys: string[]; reply: string; href: string; title: string }[] = [
  ...programs.map((p) => ({
    keys: p.title.toLowerCase().split(" "),
    reply: `${p.title} is open for applications (${p.ages}, ${p.grades}). ${p.short}. You can start an application at any time — it takes about 10 minutes.`,
    href: `/programs/${p.slug}`,
    title: p.title,
  })),
  ...faqs.map((f) => ({
    keys: f.q.toLowerCase().split(" "),
    reply: f.a,
    href: `/admissions#faqs`,
    title: f.q,
  })),
  ...courses.map((c) => ({
    keys: c.title.toLowerCase().split(" "),
    reply: `You can study "${c.title}" in your Learning Hub. ${c.description}`,
    href: `/portal/lms`,
    title: c.title,
  })),
  { keys: ["fee", "fees", "pay", "invoice", "cost", "tuition"], reply: "You can view the current fee, outstanding amount, invoices and download receipts under Fees in the Parent Portal. Payments there are a simulated demo checkout and never process real card details.", href: "/portal/parent#fees", title: "Fees & invoices" },
  { keys: ["attendance", "absent", "present", "late"], reply: "Attendance is marked by teachers and appears instantly. You can see a term summary, recent records and monthly trends under Attendance in both the Student and Parent portals.", href: "/portal/student#attendance", title: "Attendance" },
  { keys: ["timetable", "schedule", "period", "classes today"], reply: "The weekly timetable is under Timetable. Today you have Mathematics, Chemistry and English Literature before break — the full day grid is interactive by day.", href: "/portal/student#timetable", title: "Timetable" },
  { keys: ["exam", "exam", "test", "result", "grade", "marks"], reply: "Upcoming exams and recent results live under Exams & Results in the Student Portal, with subject-wise marks, grade visualisation and a printable report card.", href: "/portal/student#exams", title: "Exams & results" },
  { keys: ["homework", "assignment", "task", "due"], reply: "Your open assignments and homework are listed under Assignments. Each shows its subject, teacher, due date, status and grade once marked.", href: "/portal/student#assignments", title: "Assignments" },
  { keys: ["admission", "admissions", "apply", "enrol", "enroll", "join"], reply: "Admissions use a simple online system: choose a programme, complete student and guardian details, upload documents, pick a campus and submit. You'll receive an application ID to track progress.", href: "/admissions/apply", title: "Online admissions" },
  { keys: ["document", "documents", "upload", "birth"], reply: "You'll need the student's photograph, birth certificate, previous school reports and a guardian ID. These are uploaded in step five of the application.", href: "/admissions", title: "Document checklist" },
  { keys: ["campus", "location", "where", "address", "visit"], reply: `${brand.name} has three campuses: ${brand.campuses.join(", ")}. You can book a visit through the contact page and explore facilities under Campus.`, href: "/campus", title: "Campuses" },
  { keys: ["safeguard", "safe", "privacy", "policy", "data"], reply: "Child safeguarding, wellbeing and data privacy policies are outlined on the Safeguarding page. This demo uses fictional data only and is built with role-based access.", href: "/about/policies", title: "Safeguarding & policies" },
  { keys: ["event", "calendar", "sports", "festival"], reply: `${events.length} events are currently listed, including Sports Day and the Arts Festival. Everything flows into the portal calendar with reminders.`, href: "/events", title: "Events" },
  { keys: ["lms", "course", "learn", "hub", "lesson", "quiz"], reply: "Your Learning Hub brings together courses, lessons, quizzes and assignments with progress tracking for each one.", href: "/portal/lms", title: "Learning Hub" },
  { keys: ["teacher", "faculty", "staff", "who teaches"], reply: `Our faculty are subject specialists. You can meet them on the Faculty page — for example ${programs.length > 0 ? "Mathematics is led by Daniel Carter" : ""}.`, href: "/about/faculty", title: "Faculty" },
  { keys: ["transport", "bus", "pickup", "drop"], reply: "A supervised transport concept serves designated routes with live location tracking shown in the Parent Portal.", href: "/portal/parent#messages", title: "Transport" },
  { keys: ["ai", "learnmate", "assistant", "help"], reply: "I'm LearnMate, your study assistant. I can find resources, explain school processes, help you navigate the portal and answer questions about programmes and admissions. I'm here to support — your teachers remain at the centre of learning.", href: "/portal/assistant", title: "About LearnMate" },
];

function generateReply(message: string): Intent {
  const m = message.toLowerCase();

  // Urdu support (demo) — اردو
  if (/[؀-ۿ]/.test(message)) {
    return {
      reply:
        "میرا نام LearnMate ہے۔ میں آپ کی اسٹڈی میں مدد کر سکتا ہوں — ٹاپیکس سمجھانا، کویز بنانا، اسٹڈی پلان بنانا۔ برائے مہربانی اپنا سوال انگریزی یا اردو میں پوچھیں۔ یہ ایک ڈیمو AI ہے — اس سے معلّمین کا بديل نہیں ہے۔",
      sources: [{ title: "LearnMate AI", href: "/portal/assistant" }],
      tag: "urdu",
    };
  }

  // Explain a topic (demo)
  if (m.includes("photosynthesis")) {
    return {
      reply:
        "Photosynthesis, simply: plants make their own food using sunlight, water and carbon dioxide, and release oxygen. It happens in the chlorophyll (the green pigment) inside leaf cells. A plant needs: sunlight, water (from roots), CO2 (from air) → produces glucose (food) and oxygen. Exam tip: the balanced equation is 6CO2 + 6H2O → C6H12O6 + 6O2 (in the presence of chlorophyll and sunlight).",
      sources: [
        { title: "Science · Study resources", href: "/portal/lms" },
        { title: "Biology lesson — Grade 10", href: "/portal/lms" },
      ],
      tag: "explain",
    };
  }

  // Generate quiz / MCQs (demo)
  if (m.includes("mcq") || m.includes("create 10") || m.includes("generate quiz")) {
    return {
      reply:
        "Here are 5 sample MCQs for Class 8 Science (demo — in production I generate the full 10 from your syllabus):\n1. Which gas do plants absorb? (a) O2 (b) CO2 ✓ (c) N2\n2. The site of photosynthesis is the: (a) Root (b) Leaf ✓ (c) Flower\n3. Which vitamin is made in skin by sunlight? (a) A (b) C (c) D ✓\n4. Sound travels fastest in: (a) Air (b) Water (c) Solids ✓\n5. Which organ filters blood? (a) Liver (b) Kidney ✓ (c) Lungs\n\nWant me to convert these into a practice quiz in your Learning Hub?",
      sources: [{ title: "LMS Quizzes", href: "/portal/lms" }],
      tag: "quiz",
    };
  }

  // Study plan (demo)
  if (m.includes("study plan") || m.includes("revision plan")) {
    return {
      reply:
        "Here's a 7-day exam prep plan (demo):\nDay 1: Mathematics — quadratics + 20 practice problems\nDay 2: Physics — circuits, 1 lab worksheet\nDay 3: Chemistry — periodic table + 15 MCQs\nDay 4: English — 1 model essay + vocabulary list\nDay 5: Biology — diagrams practice + flashcards\nDay 6: Past-paper full test (timed) + review\nDay 7: Light revision of weak topics + rest\n\nRule of thumb: 45-minute focus blocks with 10-minute breaks. I can adapt this to your actual exam dates from the portal.",
      sources: [{ title: "Upcoming exams", href: "/portal/student#exams" }],
      tag: "study-plan",
    };
  }
  // Best matching knowledge
  let best: (typeof knowledge)[number] | null = null;
  let bestScore = 0;
  for (const k of knowledge) {
    let score = 0;
    for (const key of k.keys) {
      if (m.includes(key)) score += key.length > 3 ? 2 : 1;
    }
    if (score > bestScore) {
      bestScore = score;
      best = k;
    }
  }

  if (!best) {
    const near = [...programs]
      .map((p) => ({ p, score: p.title.toLowerCase().split(" ").reduce((s, w) => s + (m.includes(w) ? 1 : 0), 0) }))
      .sort((a, b) => b.score - a.score)[0];
    return {
      reply:
        "I couldn't find an exact match yet, but here's how I can help: I can explain programmes and admissions, find courses and resources, show you where attendance, fees, exams and homework live, or walk you through school policies. Try one of the suggested prompts, or ask me about a specific programme.",
      sources: [],
      tag: "general",
    };
  }

  return {
    reply: best.reply,
    sources: [{ title: best.title, href: best.href }],
    tag: best.title.toLowerCase().includes("fee") || best.title.toLowerCase().includes("attendance") ? "process" : undefined,
  };
}

export async function POST(req: NextRequest) {
  const { message } = await req.json().catch(() => ({ message: "" }));
  const text = typeof message === "string" && message.trim() ? message.trim() : "";
  const intent = generateReply(text);
  // Simulated network latency so the UI can demonstrate loading states.
  await new Promise((r) => setTimeout(r, 450));
  return NextResponse.json({
    assistant: "LearnMate AI",
    mode: "concept",
    disclaimer:
      "LearnMate is a supportive assistant; it does not replace your teachers. Responses are generated from Meridian Academy's own content.",
    ...intent,
  });
}

export async function GET() {
  return NextResponse.json({
    service: "LearnMate AI",
    status: "ready",
    documentation:
      "POST /api/assistant with { message: string }. Returns grounded suggestions, sources and a disclaimer. Swap the generator for a real LLM in production.",
    example: { message: "How do online admissions work?" },
  });
}
