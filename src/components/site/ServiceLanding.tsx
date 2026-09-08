import Link from "next/link";
import { brand } from "@/lib/data";
import { Icon } from "@/components/icons";
import { Container, Section, SectionHeading, Button, Badge } from "@/components/ui";
import { FaqAccordion } from "@/components/home";
import PageHeader from "@/components/site/PageHeader";
import { CallStrip, WhatsAppButtons } from "@/components/site/CallStrip";
import type { ServicePage } from "@/lib/services";

export default function ServiceLanding({ data }: { data: ServicePage }) {
  return (
    <>
      <PageHeader
        eyebrow={data.eyebrow}
        title={data.h1}
        description={data.sub}
        breadcrumbs={[{ label: "Solutions", href: "/solutions" }, { label: data.h1 }]}
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/contact" icon>Book a Demo</Button>
          <Button href="/" variant="ghost">Explore the live demo</Button>
        </div>
        <div className="mt-6">
          <CallStrip />
          <WhatsAppButtons message={`Hello WordbitX, I'm interested in: ${data.h1}`} className="mt-3" />
        </div>
      </PageHeader>

      <Section className="bg-white">
        <Container size="narrow">
          <p className="text-lg leading-relaxed text-slate-600">{data.intro}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            <Badge tone="mint">Made in Pakistan · for Pakistan</Badge>
            <Badge tone="navy">Custom-built, not template</Badge>
            <Badge tone="gold">WordbitX Education</Badge>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-5 sm:grid-cols-2">
            {data.benefits.map((b, i) => (
              <div key={b.t} className="rounded-2xl border border-navy-900/8 bg-ivory p-7">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy-900 font-serif text-sm font-semibold text-white">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-4 font-serif text-xl font-semibold text-navy-950">{b.t}</h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{b.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <SectionHeading eyebrow="Features" title="What's included" />
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {data.features.map((f) => (
                <div key={f} className="flex items-center gap-3 rounded-xl border border-navy-900/8 bg-white p-4">
                  <Icon.CheckCircle className="h-5 w-5 shrink-0 text-mint" />
                  <span className="text-sm font-medium text-navy-950">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-cream">
        <Container size="narrow">
          <SectionHeading eyebrow="FAQs" title="Common questions" align="center" />
          <div className="mt-8">
            <FaqAccordion items={data.faqs} />
          </div>
        </Container>
      </Section>

      <Section className="bg-navy-950 text-white">
        <Container>
          <div className="flex flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-left">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-300">WordbitX</p>
              <h2 className="mt-2 font-serif text-3xl font-semibold">See it running — not just on a slide</h2>
              <p className="mt-2 max-w-xl text-slate-300">
                This entire site and its portals are a working concept. Ask us to walk your team
                through it, or book a demo with your own data mocked in.
              </p>
            </div>
            <div className="flex shrink-0 flex-col items-center gap-4 lg:items-end">
              <div className="flex flex-wrap justify-center gap-3">
                <Button href="/contact" variant="light" icon>Book a Demo</Button>
                <Button
                  href={brand.partnerUrl}
                  variant="outline-light"
                >
                  wordbitxtech.com
                </Button>
              </div>
              <CallStrip tone="dark" />
            </div>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-2 lg:justify-start">
            <Link href="/solutions" className="rounded-full border border-white/15 px-4 py-1.5 text-sm text-slate-300 hover:bg-white/10">Solutions by region</Link>
            <Link href="/wordbitx" className="rounded-full border border-white/15 px-4 py-1.5 text-sm text-slate-300 hover:bg-white/10">WordbitX case study</Link>
            <Link href="/journal" className="rounded-full border border-white/15 px-4 py-1.5 text-sm text-slate-300 hover:bg-white/10">Education blog</Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
