"use client";

import { useState } from "react";
import Link from "next/link";
import { brand, contact, pakistanCities } from "@/lib/data";
import { Icon, type IconName } from "@/components/icons";
import { Container, Section, Button, Badge } from "@/components/ui";
import PageHeader from "@/components/site/PageHeader";
import { WhatsAppButtons } from "@/components/site/CallStrip";

const subjects = [
  "Book a platform demo",
  "School management software enquiry",
  "Admission enquiry (demo school)",
  "Pricing & proposal",
  "Partnership",
  "Support",
];

const institutions = ["School", "Academy / Coaching Center", "College", "University", "Madrasa", "Multi-Campus Group", "Other"];

const quickLinks: { icon: IconName; label: string; href: string }[] = [
  { icon: "Layout", label: "Admin dashboard demo", href: "/portal/admin" },
  { icon: "Users", label: "Parent portal demo", href: "/portal/parent" },
  { icon: "GraduationCap", label: "Online admissions", href: "/admissions/apply" },
  { icon: "Award", label: "Result portal", href: "/results" },
];

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    institution: "School",
    subject: "Book a platform demo",
    message: "",
  });

  const set = (k: keyof typeof form, v: string) => setForm((f) => ({ ...f, [k]: v }));

  return (
    <>
      <PageHeader
        light
        eyebrow="Contact WordbitX"
        title="Let's digitize your institution"
        description="Book a free demo, ask about school management software, or explore the live platform. Our team responds within one working day."
        breadcrumbs={[{ label: "Contact" }]}
      >
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href={contact.phoneHref}
            className="inline-flex items-center gap-2.5 rounded-full bg-white px-5 py-3 text-sm font-bold text-navy-950 transition hover:-translate-y-0.5"
          >
            <Icon.Phone className="h-4 w-4 text-mint" /> {contact.phone}
            <span className="rounded bg-mint px-1.5 py-0.5 text-[9px] font-bold uppercase text-white">PK</span>
          </a>
          <a
            href={contact.phoneUsaHref}
            className="inline-flex items-center gap-2.5 rounded-full border border-white/25 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            <Icon.Globe className="h-4 w-4 text-teal-300" /> {contact.phoneUsa}
            <span className="rounded bg-white/15 px-1.5 py-0.5 text-[9px] font-bold uppercase text-slate-300">USA</span>
          </a>
        </div>
      </PageHeader>

      {/* ===== Main grid ===== */}
      <Section className="bg-white">
        <Container>
          <div className="grid gap-8 lg:grid-cols-12">
            {/* Left: contact details */}
            <aside className="space-y-4 lg:col-span-4">
              <div className="rounded-2xl border border-navy-900/10 bg-ivory p-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                  WordbitX Software Company
                </p>
                <h2 className="mt-1.5 font-serif text-xl font-semibold text-navy-950">
                  Talk to our team
                </h2>

                <div className="mt-5 space-y-3">
                  <a href={contact.phoneHref} className="flex items-center gap-3 rounded-xl border border-mint/30 bg-mint-soft/50 p-3.5 transition hover:border-mint">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-mint text-white">
                      <Icon.Phone className="h-4.5 w-4.5" />
                    </span>
                    <span className="min-w-0">
                      <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                        Pakistan <span className="rounded bg-mint px-1 text-[8px] text-white">PRIMARY</span>
                      </span>
                      <span className="block truncate text-[15px] font-bold text-navy-950">{contact.phone}</span>
                    </span>
                  </a>

                  <a href={contact.phoneUsaHref} className="flex items-center gap-3 rounded-xl border border-navy-900/12 bg-white p-3.5 transition hover:border-navy-900/30">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-white">
                      <Icon.Globe className="h-4.5 w-4.5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[10px] font-bold uppercase tracking-widest text-slate-400">
                        USA / International
                      </span>
                      <span className="block truncate text-[15px] font-bold text-navy-900">{contact.phoneUsa}</span>
                    </span>
                  </a>

                  <a href={`mailto:${contact.email}`} className="flex items-center gap-3 rounded-xl border border-navy-900/12 bg-white p-3.5 transition hover:border-navy-900/30">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-navy-50 text-navy-700">
                      <Icon.Mail className="h-4.5 w-4.5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[10px] font-bold uppercase tracking-widest text-slate-400">Email</span>
                      <span className="block truncate text-sm font-semibold text-navy-950">{contact.email}</span>
                    </span>
                  </a>

                  <a href={brand.partnerUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-xl border border-navy-900/12 bg-white p-3.5 transition hover:border-navy-900/30">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-navy-50 text-navy-700">
                      <Icon.ExternalLink className="h-4.5 w-4.5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[10px] font-bold uppercase tracking-widest text-slate-400">Website</span>
                      <span className="block truncate text-sm font-semibold text-navy-950">{contact.website}</span>
                    </span>
                  </a>
                </div>

                <div className="mt-5 border-t border-navy-900/10 pt-4">
                  <p className="mb-2.5 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    Chat on WhatsApp
                  </p>
                  <WhatsAppButtons />
                </div>
              </div>

              {/* Quick demo links */}
              <div className="rounded-2xl border border-navy-900/10 bg-white p-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                  Explore before you call
                </p>
                <div className="mt-3.5 space-y-2">
                  {quickLinks.map((q) => {
                    const Cmp = Icon[q.icon];
                    return (
                      <Link
                        key={q.href}
                        href={q.href}
                        className="group flex items-center gap-3 rounded-xl bg-ivory px-3.5 py-2.5 transition hover:bg-navy-50"
                      >
                        <Cmp className="h-4 w-4 shrink-0 text-mint" />
                        <span className="flex-1 text-sm font-medium text-navy-950">{q.label}</span>
                        <Icon.ArrowRight className="h-3.5 w-3.5 text-slate-400 transition group-hover:translate-x-0.5 group-hover:text-mint" />
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Coverage */}
              <div className="rounded-2xl bg-navy-950 p-6 text-white">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-teal-300">Coverage</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  Serving schools, academies, colleges and universities across Pakistan — and
                  institutions in the UAE, Saudi Arabia, UK, USA, Canada and Australia.
                </p>
                <div className="mt-3.5 flex flex-wrap gap-1.5">
                  {pakistanCities.slice(0, 6).map((c) => (
                    <span key={c} className="rounded-full bg-white/[0.07] px-2.5 py-1 text-[11px] text-slate-300">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </aside>

            {/* Right: form */}
            <div className="lg:col-span-8">
              <div className="rounded-2xl border border-navy-900/10 bg-white p-6 shadow-[0_20px_50px_-32px_rgba(8,22,51,0.3)] sm:p-8">
                {sent ? (
                  <div className="animate-scale-in flex flex-col items-center gap-4 rounded-2xl bg-mint-soft/60 px-6 py-16 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-mint text-white">
                      <Icon.CheckCircle className="h-8 w-8" />
                    </div>
                    <h2 className="font-serif text-2xl font-semibold text-navy-950">Message sent</h2>
                    <p className="max-w-md text-sm leading-relaxed text-slate-600">
                      Thank you{form.name ? `, ${form.name.split(" ")[0]}` : ""}. This is a simulated
                      demo form — no message was actually sent. In a live deployment this reaches
                      the WordbitX team instantly.
                    </p>
                    <div className="mt-2 flex flex-wrap justify-center gap-3">
                      <Button variant="outline" size="sm" onClick={() => setSent(false)}>
                        Send another
                      </Button>
                      <a
                        href={contact.phoneHref}
                        className="inline-flex items-center gap-2 rounded-full bg-navy-950 px-5 py-2 text-sm font-semibold text-white"
                      >
                        <Icon.Phone className="h-4 w-4" /> Call {contact.phone}
                      </a>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <h2 className="font-serif text-2xl font-semibold text-navy-950">Request a free demo</h2>
                        <p className="mt-1 text-sm text-slate-500">
                          Tell us about your institution — we'll tailor the walkthrough.
                        </p>
                      </div>
                      <Badge tone="gold">Demo form</Badge>
                    </div>

                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                      <Field label="Your name">
                        <input
                          value={form.name}
                          onChange={(e) => set("name", e.target.value)}
                          className="inp-c"
                          placeholder="Full name"
                        />
                      </Field>
                      <Field label="Email">
                        <input
                          type="email"
                          value={form.email}
                          onChange={(e) => set("email", e.target.value)}
                          className="inp-c"
                          placeholder="you@example.com"
                        />
                      </Field>
                      <Field label="Phone / WhatsApp">
                        <input
                          value={form.phone}
                          onChange={(e) => set("phone", e.target.value)}
                          className="inp-c"
                          placeholder="+92 3xx xxxxxxx"
                        />
                      </Field>
                      <Field label="Institution type">
                        <select
                          value={form.institution}
                          onChange={(e) => set("institution", e.target.value)}
                          className="inp-c"
                        >
                          {institutions.map((i) => (
                            <option key={i}>{i}</option>
                          ))}
                        </select>
                      </Field>
                      <div className="sm:col-span-2">
                        <Field label="Subject">
                          <select
                            value={form.subject}
                            onChange={(e) => set("subject", e.target.value)}
                            className="inp-c"
                          >
                            {subjects.map((s) => (
                              <option key={s}>{s}</option>
                            ))}
                          </select>
                        </Field>
                      </div>
                      <div className="sm:col-span-2">
                        <Field label="Message">
                          <textarea
                            rows={5}
                            value={form.message}
                            onChange={(e) => set("message", e.target.value)}
                            className="inp-c resize-y"
                            placeholder="How can we help? Tell us about your campuses, student count and the modules you need."
                          />
                        </Field>
                      </div>
                    </div>

                    <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-navy-900/8 pt-5">
                      <Button onClick={() => setSent(true)} icon>
                        Send message
                      </Button>
                      <span className="flex items-center gap-1.5 text-xs text-slate-400">
                        <Icon.ShieldCheck className="h-4 w-4 text-mint" />
                        Your details are never shared. Demo form — nothing is stored.
                      </span>
                    </div>
                  </>
                )}
              </div>

              {/* Response promise */}
              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                {[
                  { icon: "Clock" as IconName, t: "< 1 working day", d: "Typical response time" },
                  { icon: "Video" as IconName, t: "30-minute demo", d: "Live walkthrough of every module" },
                  { icon: "FileText" as IconName, t: "Written proposal", d: "Scope, timeline and pricing" },
                ].map((x) => {
                  const Cmp = Icon[x.icon];
                  return (
                    <div key={x.t} className="rounded-2xl border border-navy-900/8 bg-ivory p-5">
                      <Cmp className="h-5 w-5 text-mint" />
                      <p className="mt-2.5 text-sm font-bold text-navy-950">{x.t}</p>
                      <p className="text-xs text-slate-500">{x.d}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ===== Demo school note ===== */}
      <Section className="bg-cream py-14">
        <Container>
          <div className="flex flex-col items-center justify-between gap-5 rounded-2xl border border-navy-900/8 bg-white p-6 sm:flex-row sm:p-8">
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-50 text-navy-700">
                <Icon.Info className="h-5 w-5" />
              </span>
              <div>
                <p className="font-semibold text-navy-950">Looking for the demo school's admissions?</p>
                <p className="mt-0.5 text-sm text-slate-600">
                  {brand.name} is a fictional institution used to demonstrate this platform. Try the
                  full online admission journey with a live application ID.
                </p>
              </div>
            </div>
            <div className="flex shrink-0 flex-wrap gap-2">
              <Button href="/admissions/apply" size="sm">Apply online</Button>
              <Button href="/admissions/track" size="sm" variant="outline">Track application</Button>
            </div>
          </div>
        </Container>
      </Section>

      <style jsx global>{`
        .inp-c {
          width: 100%;
          border-radius: 0.75rem;
          border: 1px solid rgba(10, 18, 32, 0.12);
          background: #fff;
          padding: 0.7rem 0.9rem;
          font-size: 0.9rem;
          color: #0b1220;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .inp-c:focus {
          border-color: #0f766e;
          box-shadow: 0 0 0 3px rgba(15, 118, 110, 0.12);
        }
      `}</style>
    </>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-navy-950">{label}</span>
      {children}
    </label>
  );
}
