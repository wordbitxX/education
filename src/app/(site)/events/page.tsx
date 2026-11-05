import { events } from "@/lib/data";
import { img } from "@/lib/images";
import { Icon } from "@/components/icons";
import { Container, Section, SectionHeading, Badge, Button } from "@/components/ui";
import PageHeader from "@/components/site/PageHeader";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("School Events", "Explore upcoming events at Meridian Academy: sports day, parent-teacher conferences, workshops, competitions and festivals.", "/events");

export default function EventsPage() {
  const sorted = [...events].sort((a, b) => a.date.localeCompare(b.date));
  const categories = ["All", ...Array.from(new Set(events.map((e) => e.category)))];

  return (
    <>
      <PageHeader
        eyebrow="School events"
        title="Life happens here"
        description="Sports, festivals, workshops, conferences and competitions — the moments that make school unforgettable."
        breadcrumbs={[{ label: "Events" }]}
      />
      <Section className="bg-white">
        <Container>
          <div className="mb-8 flex flex-wrap gap-2">
            {categories.map((c, i) => (
              <span key={c} className="flex items-center gap-1.5 rounded-full border border-navy-900/10 px-3.5 py-1.5 text-sm text-slate-600">
                {i !== 0 && <Icon.Hash className="h-3 w-3 text-mint" />} {c}
              </span>
            ))}
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {sorted.map((e, i) => (
              <article key={e.id} id={e.id} className="group overflow-hidden rounded-2xl border border-navy-900/8 bg-white scroll-mt-32 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_56px_-28px_rgba(8,22,51,0.4)]">
                <div className="relative overflow-hidden">
                  <img src={img(e.image, 900, 600)} alt={e.title} loading="lazy" className="aspect-[16/9] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute left-4 top-4 flex items-center gap-2">
                    <span className="rounded-xl bg-white/92 px-3 py-2 text-center shadow-sm backdrop-blur">
                      <span className="block text-xl font-semibold leading-none text-navy-950">{new Date(e.date).getDate()}</span>
                      <span className="block text-[10px] uppercase text-slate-500">{new Date(e.date).toLocaleString("en", { month: "short" })}</span>
                    </span>
                    <Badge tone="outline" className="border-white/40 bg-white/85 text-navy-900">{e.category}</Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="font-serif text-xl font-semibold text-navy-950">{e.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{e.description}</p>
                  <div className="mt-4 flex flex-wrap gap-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1.5"><Icon.Calendar className="h-3.5 w-3.5 text-mint" /> {e.date}</span>
                    <span className="flex items-center gap-1.5"><Icon.Clock className="h-3.5 w-3.5 text-mint" /> {e.time}</span>
                    <span className="flex items-center gap-1.5"><Icon.MapPin className="h-3.5 w-3.5 text-mint" /> {e.location}</span>
                  </div>
                  {e.registration && (
                    <div className="mt-5 border-t border-navy-900/8 pt-4">
                      <Button href="/admissions/track" size="sm" icon>Register interest</Button>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-navy-950 text-white">
        <Container>
          <div className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
            <SectionHeading eyebrow="Calendar" title="Never miss a moment" tone="light" description="Events flow straight into the student and parent portals, with reminders in real time." />
            <Button href="/portal/parent" variant="light" icon className="shrink-0">See the portal calendar</Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
