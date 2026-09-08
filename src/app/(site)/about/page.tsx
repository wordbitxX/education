import { brand, leadership, teachers, facilities } from "@/lib/data";
import { img } from "@/lib/images";
import { Icon } from "@/components/icons";
import { Container, Section, SectionHeading, Reveal, Badge } from "@/components/ui";
import PageHeader from "@/components/site/PageHeader";
import WordbitCase from "@/components/site/WordbitCase";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "About Meridian Academy",
  `${brand.name} is a fictional international school ecosystem demonstrating a complete school management platform. Learn about our philosophy, leadership, faculty and campus.`
);

const timeline = [
  { year: "2012", title: "A single classroom", text: "The academy opens with one campus and a conviction that learning should be personal." },
  { year: "2016", title: "Three campuses", text: "City, Garden and North campuses open, serving a wider community of learners." },
  { year: "2021", title: "The digital ecosystem", text: "Portals, LMS and a connected platform bring the whole school into one experience." },
  { year: "2026", title: "An international standard", text: "A premium ecosystem spanning admissions to examinations and an AI assistant." },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About the academy"
        title="A school built around the way young people actually learn"
        description="Meridian Academy is a fictional, internationally-styled learning ecosystem — created to demonstrate what a complete education platform looks and feels like. Below, every word, name and number is demo content."
        breadcrumbs={[{ label: "About" }]}
      />

      {/* Intro + image */}
      <Section className="bg-white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeading
                eyebrow="Who we are"
                title="Three campuses. Nine programme families. One philosophy."
              />
              <div className="mt-6 space-y-4 leading-relaxed text-slate-600">
                <p>
                  We started with a simple question: what if a school could be as thoughtful about
                  the experience of learning as it is about the outcome? The answer shaped
                  everything — small cohorts, brilliant teachers, spaces designed for curiosity,
                  and a technology layer that keeps every part of school life in harmony.
                </p>
                <p>
                  Today our concept ecosystem connects admissions, students, parents, teachers and
                  administration through a single premium platform. It is an illustration, by{" "}
                  <a href={brand.partnerUrl} target="_blank" rel="noreferrer" className="text-mint underline-offset-4 hover:underline">
                    WordbitX
                  </a>
                  , of what modern education technology can deliver.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { v: "3", l: "Campuses" },
                  { v: "9", l: "Programmes" },
                  { v: "1", l: "Platform" },
                ].map((s) => (
                  <div key={s.l} className="rounded-xl bg-cream p-4 text-center">
                    <div className="font-serif text-3xl font-semibold text-navy-950">{s.v}</div>
                    <div className="text-xs text-slate-500">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="overflow-hidden rounded-3xl">
                <img
                  src={img("elementary", 1000, 900)}
                  alt="Students learning collaboratively in a bright classroom"
                  className="aspect-[5/4] w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 rounded-2xl bg-navy-950 p-5 text-white shadow-xl sm:-right-6">
                <p className="font-serif text-2xl font-semibold">Est. {brand.estd}</p>
                <p className="text-xs text-slate-400">A fictional concept academy</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Philosophy values */}
      <Section>
        <Container>
          <SectionHeading eyebrow="Academic philosophy" title="What we believe" align="center" />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              { icon: "Compass" as const, t: "Understand first, then memorise", d: "Concepts, context and application before recall. Understanding is the foundation of durable knowledge." },
              { icon: "Users" as const, t: "Know every learner", d: "One-to-one relationships, pastoral care and data-informed progress mean no child falls through the cracks." },
              { icon: "Sparkles" as const, t: "Delight, not drudgery", d: "We protect curiosity. Great lessons are engaging, well-paced and human." },
            ].map((v, i) => {
              const Cmp = Icon[v.icon];
              return (
                <Reveal key={v.t} delay={i * 80}>
                  <div className="h-full rounded-2xl border border-navy-900/8 bg-white p-7">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-mint-soft text-mint">
                      <Cmp className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 font-serif text-xl font-semibold text-navy-950">{v.t}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{v.d}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Timeline */}
      <Section className="bg-navy-950 text-white">
        <Container>
          <SectionHeading eyebrow="Our story" title="A decade of growing" tone="light" />
          <div className="mt-12 grid gap-8 md:grid-cols-4">
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={i * 90}>
                <div className="border-l-2 border-teal-600/40 pl-5">
                  <span className="font-serif text-3xl font-semibold text-teal-300">{t.year}</span>
                  <h3 className="mt-2 font-semibold text-white">{t.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{t.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Faculty preview */}
      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <SectionHeading
              eyebrow="Guided by people"
              title="Leadership with real classroom roots"
              description="Our leadership team are educators first — people who have taught, led and designed learning for decades."
            />
            <div className="grid gap-4 sm:grid-cols-3">
              {leadership.map((l) => (
                <div key={l.id} className="rounded-2xl border border-navy-900/8 bg-white p-5 text-center">
                  <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full text-lg font-semibold text-white" style={{ backgroundColor: l.color }}>
                    {l.initial}
                  </span>
                  <h3 className="mt-3 text-sm font-semibold text-navy-950">{l.name}</h3>
                  <p className="mt-0.5 text-xs text-slate-500">{l.role}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Facilities strip */}
      <Section className="bg-cream">
        <Container>
          <div className="flex items-end justify-between gap-6">
            <SectionHeading eyebrow="The campus" title="Facilities that support how we learn" />
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {facilities.map((f, i) => (
              <Reveal key={f.title} delay={i * 60}>
                <div className="group overflow-hidden rounded-2xl border border-navy-900/8 bg-white">
                  <img src={img(f.image)} alt={f.title} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="p-4">
                    <Badge tone="mint">{f.tag}</Badge>
                    <h3 className="mt-2 font-semibold text-navy-950">{f.title}</h3>
                    <p className="mt-1 text-xs text-slate-500">{f.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <WordbitCase compact />
    </>
  );
}
