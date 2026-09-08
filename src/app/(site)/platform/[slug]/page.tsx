import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { benefits, getBenefit } from "@/lib/segments";
import { brand } from "@/lib/data";
import { Icon } from "@/components/icons";
import { Container, Section, SectionHeading, Button, Reveal } from "@/components/ui";
import Breadcrumbs from "@/components/site/Breadcrumbs";
import { FaqAccordion } from "@/components/home";
import { CallStrip, CallInline } from "@/components/site/CallStrip";

export function generateStaticParams() {
  return benefits.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const b = getBenefit(slug);
  if (!b) return {};
  return {
    title: b.metaTitle,
    description: b.metaDesc,
    alternates: { canonical: `/platform/${b.slug}` },
    openGraph: { title: `${b.metaTitle} · WordbitX`, description: b.metaDesc, type: "article" },
    twitter: { card: "summary_large_image", title: b.metaTitle, description: b.metaDesc },
  };
}

export default async function BenefitPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const b = getBenefit(slug);
  if (!b) notFound();
  const Cmp = Icon[b.icon];
  const others = benefits.filter((x) => x.slug !== b.slug).slice(0, 4);

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: b.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <div className="relative overflow-hidden bg-navy-950 pb-20 pt-36 text-white sm:pt-40">
        <div className="hero-grid-dark absolute inset-0 opacity-60" aria-hidden />
        <div className="absolute -left-24 top-4 h-80 w-80 rounded-full blur-3xl" style={{ background: "rgba(15,118,110,0.25)" }} aria-hidden />
        <Container className="relative">
          <Breadcrumbs items={[{ label: "Platform", href: "/#modules" }, { label: b.title }]} />
          <div className="mt-8 max-w-3xl">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-500/15 text-teal-300">
              <Cmp className="h-7 w-7" />
            </span>
            <h1 className="mt-5 font-serif text-[clamp(2rem,4.6vw,3.4rem)] leading-[1.06] tracking-tight">
              {b.title}
            </h1>
            <p className="mt-5 leading-relaxed text-slate-300">{b.hero}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button href="/contact" icon>Request a Free Demo</Button>
              <Button href="/portal/admin" variant="outline-light">
                See it in the dashboard
              </Button>
            </div>
            <CallInline tone="dark" className="mt-5" />
          </div>
          <div className="mt-10 grid gap-4 border-t border-white/10 pt-8 sm:grid-cols-3">
            {b.metric.map((m) => (
              <div key={m.l}>
                <p className="font-serif text-3xl font-semibold text-teal-300">{m.v}</p>
                <p className="mt-1 text-sm text-slate-400">{m.l}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Before / After */}
      <Section className="bg-white">
        <Container>
          <SectionHeading
            eyebrow="Before & after"
            title="What actually changes day to day"
            description="A realistic view of how the workflow shifts once the platform is in place."
            align="center"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-red-100 bg-red-50/40 p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-red-500">Without a platform</p>
              <ul className="mt-5 space-y-3">
                {b.before.map((x) => (
                  <li key={x} className="flex items-start gap-3">
                    <Icon.X className="mt-0.5 h-4 w-4 shrink-0 text-red-400" />
                    <span className="text-sm leading-relaxed text-slate-700">{x}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-mint/20 bg-mint-soft/40 p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-mint">With WordbitX</p>
              <ul className="mt-5 space-y-3">
                {b.after.map((x) => (
                  <li key={x} className="flex items-start gap-3">
                    <Icon.CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-mint" />
                    <span className="text-sm leading-relaxed text-slate-700">{x}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* How */}
      <Section>
        <Container>
          <SectionHeading eyebrow="How it works" title="The features behind it" align="center" />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {b.how.map((h, i) => {
              const HIcon = Icon[h.icon];
              return (
                <Reveal key={h.t} delay={i * 80}>
                  <div className="h-full rounded-2xl border border-navy-900/8 bg-white p-7">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-mint-soft text-mint">
                      <HIcon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-4 font-semibold text-navy-950">{h.t}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{h.d}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section className="bg-cream">
        <Container size="narrow">
          <SectionHeading eyebrow="FAQ" title="Questions about this" align="center" />
          <div className="mt-8">
            <FaqAccordion items={b.faqs} />
          </div>
        </Container>
      </Section>

      {/* CTA + others */}
      <Section className="bg-navy-950 text-white">
        <Container>
          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-300">WordbitX Software Company</p>
              <h2 className="mt-2 font-serif text-3xl font-semibold">See it working, not on a slide</h2>
              <p className="mt-2 max-w-xl text-slate-300">
                Every capability described here runs in the live demo — explore it or book a
                walkthrough with WordbitX.
              </p>
            </div>
            <div className="flex shrink-0 flex-col items-center gap-4 lg:items-end">
              <div className="flex flex-wrap justify-center gap-3">
                <Button href="/contact" variant="light" icon>Request a Free Demo</Button>
                <Button href={brand.partnerUrl} variant="outline-light">
                  Talk to WordbitX
                </Button>
              </div>
              <CallStrip tone="dark" />
            </div>
          </div>
          <div className="mt-12 border-t border-white/10 pt-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">More platform benefits</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {others.map((o) => {
                const OIcon = Icon[o.icon];
                return (
                  <Link key={o.slug} href={`/platform/${o.slug}`} className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.05] p-4 transition hover:bg-white/[0.1]">
                    <OIcon className="h-4 w-4 shrink-0 text-teal-300" />
                    <span className="flex-1 text-sm font-medium">{o.title}</span>
                    <Icon.ArrowUpRight className="h-3.5 w-3.5 text-slate-400 transition group-hover:text-teal-300" />
                  </Link>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
