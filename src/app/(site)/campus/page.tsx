import { facilities, brand, campusCities } from "@/lib/data";
import { img } from "@/lib/images";
import { Icon } from "@/components/icons";
import { Container, Section, SectionHeading, Reveal, Badge } from "@/components/ui";
import PageHeader from "@/components/site/PageHeader";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("Campus & Facilities", `Explore the classrooms, science labs, library, sports, technology, art and student spaces across the ${brand.name} campuses.`, "/campus");

export default function CampusPage() {
  return (
    <>
      <PageHeader
        eyebrow="Campus & facilities"
        title="Spaces that make learning come alive"
        description="Three campuses, each designed around how students learn — with light, quiet, collaboration and discovery woven into every corner."
        breadcrumbs={[{ label: "Campus" }]}
      />

      {/* Immersive facility grid */}
      <Section className="bg-white">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {facilities.map((f, i) => (
              <Reveal key={f.title} delay={(i % 3) * 80}>
                <div className="group overflow-hidden rounded-2xl border border-navy-900/8 bg-white">
                  <div className="relative overflow-hidden">
                    <img
                      src={img(f.image, 800, 600)}
                      alt={f.title}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <Badge tone="outline" className="absolute left-4 top-4 border-white/40 bg-white/85 text-navy-900">
                      {f.tag}
                    </Badge>
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-semibold text-navy-950">{f.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{f.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Campuses */}
      <Section>
        <Container>
          <SectionHeading eyebrow="Our campuses" title="One academy, three homes" align="center" />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {brand.campuses.map((c, i) => (
              <Reveal key={c} delay={i * 80}>
                <div className="rounded-2xl border border-navy-900/8 bg-white p-7">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-50 text-navy-700">
                      <Icon.Building className="h-5 w-5" />
                    </span>
                    <h3 className="font-serif text-lg font-semibold text-navy-950">{c}</h3>
                  </div>
                  <div className="mt-5 space-y-2 text-sm text-slate-600">
                    <p className="flex items-center gap-2"><Icon.MapPin className="h-4 w-4 text-mint" /> {campusCities[i] || "Pakistan"} (fictional)</p>
                    <p className="flex items-center gap-2"><Icon.Users className="h-4 w-4 text-mint" /> Early Years to A-Level</p>
                    <p className="flex items-center gap-2"><Icon.Clock className="h-4 w-4 text-mint" /> 08:00 – 16:00</p>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {["Classrooms", "Labs", "Sports", "Library"].map((x) => (
                      <span key={x} className="rounded-full bg-cream px-2.5 py-1 text-xs text-slate-600">{x}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Transport concept */}
      <Section className="bg-navy-950 text-white">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <SectionHeading
              eyebrow="Transport concept"
              title="A safer journey to and from school"
              tone="light"
              description="A supervised transport service with designated routes and live location tracking — shown as a concept in the Parent Portal."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: "Bus" as const, t: "Designated routes", d: "Curated stops across the city." },
                { icon: "MapPin" as const, t: "Live tracking", d: "See the bus in real time." },
                { icon: "Users" as const, t: "Supervised", d: "Trained staff on every route." },
                { icon: "ShieldCheck" as const, t: "Safe drop-off", d: "Verified pick-up and drop-off." },
              ].map((x) => {
                const Cmp = Icon[x.icon];
                return (
                  <div key={x.t} className="rounded-2xl border border-white/10 bg-white/[0.05] p-5">
                    <Cmp className="h-6 w-6 text-teal-300" />
                    <p className="mt-3 font-medium text-white">{x.t}</p>
                    <p className="text-sm text-slate-400">{x.d}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
