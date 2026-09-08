"use client";

import { useMemo, useState } from "react";
import { programs, brand } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/icons";
import { Button, Badge } from "@/components/ui";

const stepLabels = [
  "Select Program",
  "Student Information",
  "Parent / Guardian",
  "Academic Background",
  "Documents",
  "Preferred Campus",
  "Review",
  "Submit & Confirm",
];

const campusOptions = brand.campuses;
const startTerms = ["Autumn 2026", "Winter 2026", "Spring 2027"];
const curriculumOptions = ["National", "International / IGCSE-style", "Other"];

type FormState = {
  program: string;
  firstName: string;
  lastName: string;
  dob: string;
  gender: string;
  nationality: string;
  parentName: string;
  parentRelation: string;
  email: string;
  phone: string;
  prevSchool: string;
  prevGrade: string;
  curriculum: string;
  needs: string;
  campus: string;
  startTerm: string;
  documents: Record<string, boolean>;
  comment: string;
};

const initial: FormState = {
  program: "",
  firstName: "",
  lastName: "",
  dob: "",
  gender: "",
  nationality: "",
  parentName: "",
  parentRelation: "Parent / Guardian",
  email: "",
  phone: "",
  prevSchool: "",
  prevGrade: "",
  curriculum: "",
  needs: "",
  campus: campusOptions[0],
  startTerm: startTerms[0],
  documents: { photo: false, birth: false, reports: false, id: false },
  comment: "",
};

export default function ApplyPage() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);
  const [appId, setAppId] = useState("");

  const set = (key: keyof FormState, value: string | boolean | Record<string, boolean>) =>
    setForm((f) => ({ ...f, [key]: value }));

  const validateStep = (s: number) => {
    const e: Record<string, boolean> = {};
    if (s === 0 && !form.program) e.program = true;
    if (s === 1) {
      if (!form.firstName) e.firstName = true;
      if (!form.lastName) e.lastName = true;
      if (!form.dob) e.dob = true;
      if (!form.nationality) e.nationality = true;
    }
    if (s === 2) {
      if (!form.parentName) e.parentName = true;
      if (!form.email) e.email = true;
      if (!form.phone) e.phone = true;
    }
    if (s === 4) {
      const docs = Object.values(form.documents);
      if (!docs.includes(true)) e.documents = true;
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const next = () => {
    if (validateStep(step)) setStep((s) => Math.min(s + 1, stepLabels.length - 1));
  };
  const back = () => setStep((s) => Math.max(s - 1, 0));

  const progress = ((step + 1) / stepLabels.length) * 100;

  const submit = () => {
    const id = "APP-" + new Date().getFullYear() + "-" + String(Math.floor(1000 + Math.random() * 9000));
    setAppId(id);
    try {
      const all = JSON.parse(localStorage.getItem("meridian.applications") || "[]");
      all.push({ id, ...form, date: new Date().toISOString(), status: "Under Review" });
      localStorage.setItem("meridian.applications", JSON.stringify(all));
    } catch {
      /* noop */
    }
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const chosenProgram = useMemo(() => programs.find((p) => p.title === form.program), [form.program]);

  if (submitted) {
    return (
      <div className="min-h-screen bg-cream pb-24 pt-28">
        <div className="mx-auto max-w-2xl px-5">
          <div className="animate-scale-in rounded-3xl border border-navy-900/8 bg-white p-8 text-center shadow-sm sm:p-12">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-mint-soft">
              <Icon.CheckCircle className="h-9 w-9 text-mint" />
            </div>
            <h1 className="mt-6 font-serif text-3xl font-semibold text-navy-950">Application submitted</h1>
            <p className="mt-3 text-slate-600">
              Thank you. Your application has been received. Keep your application ID safe to track
              your progress.
            </p>
            <div className="mt-6 flex items-center justify-center gap-3 rounded-2xl bg-navy-950 p-5 text-white">
              <span className="text-2xl font-semibold tracking-wider">{appId}</span>
              <button
                onClick={() => navigator.clipboard?.writeText(appId)}
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 hover:bg-white/20"
                aria-label="Copy application id"
              >
                <Icon.Copy className="h-4 w-4" />
              </button>
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              <Badge tone="mint">{chosenProgram?.title ?? form.program}</Badge>
              <Badge tone="navy">{form.campus}</Badge>
              <Badge tone="gold">{form.startTerm}</Badge>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <Button href="/admissions/track" icon>Track application</Button>
              <Button href="/" variant="outline">Back to home</Button>
            </div>
            <p className="mt-6 text-xs text-slate-400">
              This is a simulated, fictional application for demonstration only. No real application
              is created.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream pb-28 pt-28">
      <div className="mx-auto max-w-3xl px-5">
        <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-mint">Online admission</p>
            <h1 className="font-serif text-3xl font-semibold text-navy-950">Application Form</h1>
          </div>
          <Badge tone="neutral">Step {step + 1} of {stepLabels.length}</Badge>
        </div>

        {/* Progress */}
        <div className="mt-6">
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-white">
            <div className="h-full rounded-full bg-mint transition-all duration-500" style={{ width: `${progress}%` }} />
          </div>
          <div className="no-scrollbar mt-3 flex gap-1.5 overflow-x-auto">
            {stepLabels.map((l, i) => (
              <button
                key={l}
                onClick={() => i < step && setStep(i)}
                className={cn(
                  "whitespace-nowrap rounded-full px-3 py-1 text-xs font-medium",
                  i === step && "bg-navy-900 text-white",
                  i < step && "text-mint hover:bg-mint-soft",
                  i > step && "text-slate-400"
                )}
              >
                {i < step ? <span className="inline-flex items-center gap-1"><Icon.Check className="h-3 w-3" /> {l}</span> : l}
              </button>
            ))}
          </div>
        </div>

        <div key={step} className="animate-fade-up mt-6 rounded-3xl border border-navy-900/8 bg-white p-6 shadow-sm sm:p-8">
          {step === 0 && (
            <div>
              <h2 className="text-lg font-semibold text-navy-950">Select your programme</h2>
              <p className="mt-1 text-sm text-slate-500">Choose the programme the student is applying for.</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {programs.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => set("program", p.title)}
                    className={cn(
                      "rounded-2xl border p-4 text-left transition-all",
                      form.program === p.title
                        ? "border-mint bg-mint-soft ring-1 ring-mint"
                        : "border-navy-900/10 hover:border-navy-900/30"
                    )}
                  >
                    <div className="flex items-center justify-between">
                      <Badge tone="neutral">{p.category}</Badge>
                      {form.program === p.title && <Icon.Check className="h-4 w-4 text-mint" />}
                    </div>
                    <h3 className="mt-2 font-semibold text-navy-950">{p.title}</h3>
                    <p className="text-xs text-slate-500">{p.ages} · {p.grades}</p>
                  </button>
                ))}
              </div>
              {errors.program && <p className="mt-3 text-sm text-red-600">Please select a programme.</p>}
            </div>
          )}

          {step === 1 && (
            <div>
              <h2 className="text-lg font-semibold text-navy-950">Student information</h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <Field label="First name" error={errors.firstName}><input value={form.firstName} onChange={(e) => set("firstName", e.target.value)} className="inp" placeholder="Ayaan" /></Field>
                <Field label="Last name" error={errors.lastName}><input value={form.lastName} onChange={(e) => set("lastName", e.target.value)} className="inp" placeholder="Khan" /></Field>
                <Field label="Date of birth" error={errors.dob}><input type="date" value={form.dob} onChange={(e) => set("dob", e.target.value)} className="inp" /></Field>
                <Field label="Gender"><select value={form.gender} onChange={(e) => set("gender", e.target.value)} className="inp"><option value="">Select</option><option>Female</option><option>Male</option><option>Other</option></select></Field>
                <Field label="Nationality" error={errors.nationality}><input value={form.nationality} onChange={(e) => set("nationality", e.target.value)} className="inp" placeholder="e.g. Pakistani" /></Field>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-lg font-semibold text-navy-950">Parent / guardian information</h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <Field label="Parent / guardian name" error={errors.parentName}><input value={form.parentName} onChange={(e) => set("parentName", e.target.value)} className="inp" placeholder="Full name" /></Field>
                <Field label="Relationship"><select value={form.parentRelation} onChange={(e) => set("parentRelation", e.target.value)} className="inp"><option>Parent / Guardian</option><option>Mother</option><option>Father</option><option>Other</option></select></Field>
                <Field label="Email address" error={errors.email}><input type="email" value={form.email} onChange={(e) => set("email", e.target.value)} className="inp" placeholder="you@example.com" /></Field>
                <Field label="Phone number" error={errors.phone}><input value={form.phone} onChange={(e) => set("phone", e.target.value)} className="inp" placeholder="+92 300 0000000" /></Field>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="text-lg font-semibold text-navy-950">Academic background</h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <Field label="Previous school (if any)"><input value={form.prevSchool} onChange={(e) => set("prevSchool", e.target.value)} className="inp" placeholder="School name" /></Field>
                <Field label="Last attended grade"><input value={form.prevGrade} onChange={(e) => set("prevGrade", e.target.value)} className="inp" placeholder="e.g. Grade 8" /></Field>
                <Field label="Curriculum studied"><select value={form.curriculum} onChange={(e) => set("curriculum", e.target.value)} className="inp"><option value="">Select</option>{curriculumOptions.map((c) => <option key={c}>{c}</option>)}</select></Field>
                <Field label="Learning or medical needs"><input value={form.needs} onChange={(e) => set("needs", e.target.value)} className="inp" placeholder="Any support we should know" /></Field>
              </div>
            </div>
          )}

          {step === 4 && (
            <div>
              <h2 className="text-lg font-semibold text-navy-950">Documents</h2>
              <p className="mt-1 text-sm text-slate-500">Tick each document you are prepared to upload. (Simulated in this demo.)</p>
              <div className="mt-5 space-y-3">
                {[
                  { k: "photo", l: "Passport-style photograph" },
                  { k: "birth", l: "Birth certificate or equivalent" },
                  { k: "reports", l: "Previous school reports" },
                  { k: "id", l: "Parent / guardian ID" },
                ].map((d) => (
                  <button
                    key={d.k}
                    onClick={() => set("documents", { ...form.documents, [d.k]: !form.documents[d.k as keyof typeof form.documents] })}
                    className={cn(
                      "flex w-full items-center justify-between rounded-xl border px-4 py-3.5 text-left transition-all",
                      form.documents[d.k as keyof typeof form.documents]
                        ? "border-mint bg-mint-soft"
                        : "border-dashed border-navy-900/20 hover:border-navy-900/40"
                    )}
                  >
                    <span className="flex items-center gap-3 text-sm">
                      <span className={cn("flex h-6 w-6 items-center justify-center rounded-md border", form.documents[d.k as keyof typeof form.documents] ? "border-mint bg-mint text-white" : "border-slate-300")}>
                        {form.documents[d.k as keyof typeof form.documents] && <Icon.Check className="h-3.5 w-3.5" />}
                      </span>
                      <Icon.File className="h-4 w-4 text-slate-400" /> {d.l}
                    </span>
                    <Icon.Upload className="h-4 w-4 text-slate-400" />
                  </button>
                ))}
              </div>
              {errors.documents && <p className="mt-3 text-sm text-red-600">Please confirm at least one document to continue.</p>}
            </div>
          )}

          {step === 5 && (
            <div>
              <h2 className="text-lg font-semibold text-navy-950">Preferred campus</h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {campusOptions.map((c) => (
                  <button key={c} onClick={() => set("campus", c)} className={cn("rounded-2xl border p-5 text-center transition-all", form.campus === c ? "border-mint bg-mint-soft" : "border-navy-900/10 hover:border-navy-900/30")}>
                    <Icon.Building className="mx-auto h-6 w-6 text-mint" />
                    <p className="mt-2 font-semibold text-navy-950">{c}</p>
                  </button>
                ))}
              </div>
              <h3 className="mt-8 text-sm font-semibold text-navy-950">Proposed start term</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {startTerms.map((t) => (
                  <button key={t} onClick={() => set("startTerm", t)} className={cn("rounded-full border px-4 py-2 text-sm", form.startTerm === t ? "border-mint bg-mint-soft font-medium text-mint" : "border-navy-900/10 text-slate-600 hover:border-navy-900/30")}>{t}</button>
                ))}
              </div>
            </div>
          )}

          {step === 6 && (
            <div>
              <h2 className="text-lg font-semibold text-navy-950">Review your application</h2>
              <div className="mt-5 rounded-2xl bg-cream p-5">
                <ReviewRow label="Programme" value={form.program} />
                <ReviewRow label="Student" value={`${form.firstName} ${form.lastName}`} />
                <ReviewRow label="Date of birth" value={form.dob} />
                <ReviewRow label="Nationality" value={form.nationality} />
                <ReviewRow label="Parent / guardian" value={form.parentName} />
                <ReviewRow label="Email" value={form.email} />
                <ReviewRow label="Phone" value={form.phone} />
                <ReviewRow label="Previous school" value={form.prevSchool || "—"} />
                <ReviewRow label="Campus" value={form.campus} />
                <ReviewRow label="Start term" value={form.startTerm} />
              </div>
              <label className="mt-5 block">
                <span className="text-sm font-medium text-navy-950">Anything else we should know?</span>
                <textarea value={form.comment} onChange={(e) => set("comment", e.target.value)} rows={3} className="inp mt-1.5" placeholder="Optional" />
              </label>
            </div>
          )}

          {step === 7 && (
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-mint-soft">
                <Icon.Send className="h-7 w-7 text-mint" />
              </div>
              <h2 className="mt-5 text-xl font-semibold text-navy-950">Ready to submit?</h2>
              <p className="mx-auto mt-2 max-w-md text-sm text-slate-600">
                By submitting, you acknowledge this is a simulated demo application for {brand.name}.
                No real data is collected or stored.
              </p>
              <div className="mx-auto mt-6 max-w-md rounded-xl border border-navy-900/10 bg-cream p-4 text-left text-sm text-slate-600">
                <p className="font-medium text-navy-950">Summary</p>
                <p className="mt-1">{form.program} · {form.campus} · {form.startTerm}</p>
                <p className="text-slate-500">{form.firstName} {form.lastName}</p>
              </div>
              <Button size="lg" icon onClick={submit} className="mt-6">
                Submit application
              </Button>
            </div>
          )}

          {/* Nav buttons */}
          {step < 7 && (
            <div className="mt-8 flex items-center justify-between border-t border-navy-900/10 pt-5">
              <Button variant="ghost" onClick={back} disabled={step === 0}>Back</Button>
              <Button onClick={next} icon className={step === 6 ? "" : ""}>
                {step === 6 ? "Continue to submission" : "Continue"}
              </Button>
            </div>
          )}
          {step === 7 && (
            <div className="mt-8 flex justify-center border-t border-navy-900/10 pt-5">
              <Button variant="ghost" onClick={back}>Back</Button>
            </div>
          )}
        </div>
      </div>

      <style jsx global>{`
        .inp {
          width: 100%;
          border-radius: 0.75rem;
          border: 1px solid rgba(10, 18, 32, 0.12);
          background: #fff;
          padding: 0.7rem 0.9rem;
          font-size: 0.9rem;
          color: #0b1220;
          outline: none;
          transition: border-color 0.2s;
        }
        .inp:focus { border-color: #0f766e; box-shadow: 0 0 0 3px rgba(15,118,110,0.12); }
      `}</style>
    </div>
  );
}

function Field({ label, error, children }: { label: string; error?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className={cn("mb-1.5 block text-sm font-medium", error ? "text-red-600" : "text-navy-950")}>{label}</span>
      {children}
      {error && <span className="mt-1 text-xs text-red-600">Required</span>}
    </label>
  );
}

function ReviewRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between border-b border-navy-900/5 py-2.5 last:border-0">
      <span className="text-sm text-slate-500">{label}</span>
      <span className="text-sm font-medium text-navy-950">{value || "—"}</span>
    </div>
  );
}
