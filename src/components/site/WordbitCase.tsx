"use client";

import Link from "next/link";
import { wordbitxCapabilities } from "@/lib/data";
import { Icon } from "@/components/icons";
import { Button, Container, Section, SectionHeading } from "@/components/ui";

export default function WordbitCase({ compact = false }: { compact?: boolean }) {
  return (
    <Section className="bg-navy-950 text-white" id="case-study">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeading
              eyebrow="WordbitX Concept / Demo"
              title={
                <>
                  Beyond a website:
                  <br />
                  <span className="text-slate-400">a connected education ecosystem.</span>
                </>
              }
              tone="light"
              description="WordbitX builds the whole platform — not just a brochure site. This demo shows how a modern institution can bring its students, parents, teachers and administration into one seamless digital environment."
            />
            <div className="mt-8 space-y-4 border-l-2 border-teal-600/40 pl-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-300">
                  The Challenge
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-400">
                  A modern educational institution needs more than a static website — it needs a
                  unified digital experience beyond the classroom.
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-300">
                  The Solution
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-400">
                  A single ecosystem connecting students, parents, teachers and administration —
                  admissions, portals, LMS, attendance, exams, fees and an AI assistant.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Capabilities
            </p>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {wordbitxCapabilities.map((c) => (
                <span
                  key={c}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/12 bg-white/[0.05] px-3.5 py-1.5 text-sm text-slate-200"
                >
                  <Icon.Check className="h-3.5 w-3.5 text-teal-400" /> {c}
                </span>
              ))}
            </div>
            <div className="mt-8 rounded-2xl bg-white p-6 text-navy-950">
              <p className="font-serif text-xl leading-snug">
                Need a School Management Platform Like This?
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                WordbitX builds custom education websites, portals, LMS platforms and school
                management software.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Button href="https://wordbitx.com/" size="sm" icon>
                  Build Your Education Platform
                </Button>
                <Link
                  href="/journal"
                  className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium text-slate-600 hover:text-navy-950"
                >
                  View the journal <Icon.ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              {!compact && (
                <p className="mt-4 text-xs text-slate-400">
                  This is a concept demonstration, not a claim of an existing client delivery.
                </p>
              )}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
