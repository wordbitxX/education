import { journalPosts } from "@/lib/data";
import { img } from "@/lib/images";
import { Icon } from "@/components/icons";
import { Container, Section, SectionHeading, Badge, Reveal } from "@/components/ui";
import PageHeader from "@/components/site/PageHeader";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Journal & Resources",
  "Plain-language guides on school management software, school ERP, parent portals, student portals, school LMS and education technology — from WordbitX."
);

export default function JournalPage() {
  return (
    <>
      <PageHeader
        eyebrow="Journal & resources"
        title="Ideas for modern education"
        description="Practical, jargon-free guides on school management software, ERP, portals, LMS and the technology that runs a modern institution."
        breadcrumbs={[{ label: "Journal" }]}
      />
      <Section className="bg-white">
        <Container>
          <div className="mb-8 flex flex-wrap gap-2">
            {["All", "EdTech", "Comparison", "Portals", "Admissions", "LMS", "Operations", "AI", "Guide"].map((c, i) => (
              <span key={c} className={`rounded-full border px-3.5 py-1.5 text-sm ${i === 0 ? "border-navy-900 bg-navy-900 text-white" : "border-navy-900/10 text-slate-600"}`}>
                {c}
              </span>
            ))}
          </div>

          {/* Featured */}
          <Reveal>
            <a href={`/journal/${journalPosts[0].id}`} className="group grid overflow-hidden rounded-3xl border border-navy-900/8 bg-white lg:grid-cols-2">
              <div className="overflow-hidden">
                <img src={img(journalPosts[0].image, 1000, 750)} alt={journalPosts[0].title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="flex flex-col justify-center p-8 sm:p-12">
                <div className="flex items-center gap-2">
                  <Badge tone="mint">{journalPosts[0].category}</Badge>
                  <Badge tone="navy">{journalPosts[0].tag}</Badge>
                </div>
                <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-navy-950">{journalPosts[0].title}</h2>
                <p className="mt-3 text-slate-600">{journalPosts[0].excerpt}</p>
                <div className="mt-6 flex items-center gap-4 text-sm text-slate-400">
                  <span>{journalPosts[0].read} read</span>
                  <span>·</span>
                  <span>{journalPosts[0].date}</span>
                </div>
                <span className="mt-6 inline-flex items-center gap-2 font-medium text-mint">
                  Read article <Icon.ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </a>
          </Reveal>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {journalPosts.slice(1).map((p, i) => (
              <Reveal key={p.id} delay={(i % 3) * 70}>
                <a href={`/journal/${p.id}`} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-navy-900/8 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_52px_-26px_rgba(8,22,51,0.4)]">
                  <div className="overflow-hidden">
                    <img src={img(p.image, 700, 500)} alt={p.title} loading="lazy" className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-2">
                      <Badge tone="neutral">{p.category}</Badge>
                    </div>
                    <h3 className="mt-3 flex-1 font-serif text-lg font-semibold leading-snug text-navy-950 group-hover:text-navy-800">{p.title}</h3>
                    <p className="mt-2 line-clamp-2 text-sm text-slate-600">{p.excerpt}</p>
                    <div className="mt-4 flex items-center gap-3 text-xs text-slate-400">
                      <span>{p.read} read</span><span>·</span><span>{p.date}</span>
                    </div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-navy-950 text-white">
        <Container>
          <div className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
            <SectionHeading
              eyebrow="Built by WordbitX"
              title="We build these systems"
              tone="light"
              description="WordbitX designs and develops custom education websites, portals, LMS platforms and school management software."
            />
            <a href="https://www.wordbitxtech.com/" target="_blank" rel="noreferrer" className="shrink-0 rounded-full bg-white px-6 py-3 text-sm font-medium text-navy-950 transition hover:-translate-y-0.5 hover:shadow-lg">
              Explore WordbitX →
            </a>
          </div>
        </Container>
      </Section>
    </>
  );
}
