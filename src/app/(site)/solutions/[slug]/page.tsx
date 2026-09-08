import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { segments, getSegment } from "@/lib/segments";
import { brand } from "@/lib/data";
import { img } from "@/lib/images";
import { Icon } from "@/components/icons";
import { Container, Section, SectionHeading, Button, Badge, Reveal } from "@/components/ui";
import Breadcrumbs from "@/components/site/Breadcrumbs";
import { FaqAccordion } from "@/components/home";
import { CallStrip, CallInline } from "@/components/site/CallStrip";

export function generateStaticParams() {
  return segments.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = getSegment(slug);
  if (!s) return {};
  return {
    title: s.metaTitle,
    description: s.metaDesc,
    alternates: { canonical: `/solutions/${s.slug}` },
    openGraph: { title: `${s.metaTitle} · WordbitX`, description: s.metaDesc, type: "article" },
    twitter: { card: "summary_large_image", title: s.metaTitle, description: s.metaDesc },
  };
}

export default async function SegmentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getSegment(slug);
  if (!s) notFound();
  const Cmp = Icon[s.icon];
  const related = s.related.map(getSegment).filter(Boolean);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: s.h1,
        serviceType: "Education management software",
        description: s.metaDesc,
        provider: { "@type": "Organization", name: "WordbitX Software Company", url: brand.partnerUrl },
        areaServed: "Pakistan",
      },
      {
        "@type": "FAQPage",
        mainEntity: s.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <div className="relative overflow-hidden bg-navy-950 pb-20 pt-36 text-white sm:pt-40">
        <div className="hero-grid-dark absolute inset-0 opacity-60" aria-hidden />
        <div className="absolute -right-32 top-10 h-80 w-80 rounded-full blur-3xl" style={{ background: "rgba(15,118,110,0.28)" }} aria-hidden />
        <Container className="relative">
          <Breadcrumbs items={[{ label: "Solutions", href: "/solutions" }, { label: s.title }]} />
          <div className="mt-8 grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-teal-200">
                <Cmp className="h-4 w-4" /> {s.title}
              </span>
              <h1 className="mt-5 font-serif text-[clamp(2rem,4.6vw,3.4rem)] leading-[1.06] tracking-tight">
                {s.h1}
              </h1>
              <p className="mt-5 max-w-xl leading-relaxed text-slate-300">{s.hero}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button href="/contact" icon>Request a Free Demo</Button>
                <Button href="/portal/admin" variant="outline-light">
                  See live dashboard
                </Button>
              </div>
              <CallInline tone="dark" className="mt-5" />
              <div className="mt-8 flex flex-wrap gap-6 border-t border-white/10 pt-6">
                {s.stats.map((st) => (
                  <div key={st.l}>
                    <p className="font-serif text-2xl font-semibold text-teal-300">{st.v}</p>
                    <p className="text-xs text-slate-400">{st.l}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl border border-white/10 shadow-[0_40px_90px_-40px_rgba(0,0,0,0.8)]">
              <img
                src={img(s.image, 1000, 750)}
                alt={`${s.title} using WordbitX education management platform in Pakistan`}
                className="aspect-[4/3] w-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </Container>
      </div>

      {/* Challenges */}
      <Section className="bg-white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading eyebrow="The challenge" title={`What ${s.title.toLowerCase()} struggle with today`} />
              <ul className="mt-7 space-y-3">
                {s.challenges.map((c) => (
                  <li key={c} className="flex items-start gap-3 rounded-xl border border-navy-900/8 bg-ivory p-4">
                    <Icon.X className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                    <span className="text-sm leading-relaxed text-slate-700">{c}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SectionHeading eyebrow="The outcome" title="What changes with WordbitX" />
              <ul className="mt-7 space-y-3">
                {s.outcomes.map((o) => (
                  <li key={o} className="flex items-start gap-3 rounded-xl border border-mint/20 bg-mint-soft/40 p-4">
                    <Icon.CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-mint" />
                    <span className="text-sm leading-relaxed text-slate-700">{o}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* Modules */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Modules"
            title={`Built for ${s.title.toLowerCase()}`}
            description={`The modules that matter most for your institution type — part of the wider WordbitX education ERP.`}
            align="center"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {s.modules.map((m, i) => {
              const MIcon = Icon[m.icon];
              return (
                <Reveal key={m.t} delay={(i % 3) * 70}>
                  <div className="group h-full rounded-2xl border border-navy-900/8 bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-navy-900/20 hover:shadow-[0_28px_60px_-28px_rgba(8,22,51,0.35)]">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-50 text-navy-700 transition-colors group-hover:bg-navy-900 group-hover:text-white">
                      <MIcon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-4 font-semibold text-navy-950">{m.t}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{m.d}</p>
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
          <SectionHeading eyebrow="FAQ" title={`${s.title} — common questions`} align="center" />
          <div className="mt-8">
            <FaqAccordion items={s.faqs} />
          </div>
        </Container>
      </Section>

      {/* Related + CTA */}
      <Section className="bg-navy-950 text-white">
        <Container>
          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-300">WordbitX Software Company</p>
              <h2 className="mt-2 font-serif text-3xl font-semibold">Ready to digitize your institution?</h2>
              <p className="mt-2 max-w-xl text-slate-300">
                Explore the full working demo, or ask WordbitX to walk your team through it with your
                own institution's data mocked in.
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

          {related.length > 0 && (
            <div className="mt-12 border-t border-white/10 pt-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Also built for</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {related.map((r) => r && (
                  <Link key={r.slug} href={`/solutions/${r.slug}`} className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.05] p-4 transition hover:bg-white/[0.1]">
                    <span className="text-sm font-medium">{r.title}</span>
                    <Icon.ArrowUpRight className="h-4 w-4 text-slate-400 transition group-hover:text-teal-300" />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </Container>
      </Section>
    </>
  );
}
