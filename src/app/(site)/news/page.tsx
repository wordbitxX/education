import { newsItems, announcements } from "@/lib/data";
import { Container, Section, SectionHeading, Badge, Button, Reveal } from "@/components/ui";
import PageHeader from "@/components/site/PageHeader";
import { pageMeta } from "@/lib/seo";
import { Icon } from "@/components/icons";

export const metadata = pageMeta(
  "School News",
  "Latest news, circulars and notices from Meridian Academy — campus updates, achievements and academic announcements.",
  "/news"
);

export default function NewsPage() {
  return (
    <>
      <PageHeader
        eyebrow="News & Notices"
        title="What's happening at Meridian"
        description="News, circulars and official notices — the same content families see in real time on the parent portal."
        breadcrumbs={[{ label: "News" }]}
      />
      <Section className="bg-white">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {newsItems.map((n, i) => (
              <Reveal key={n.id} delay={(i % 3) * 70}>
                <article className="flex h-full flex-col rounded-2xl border border-navy-900/8 bg-ivory p-6">
                  <div className="flex items-center justify-between">
                    <Badge tone="mint">{n.tag}</Badge>
                    <span className="text-xs text-slate-400">{n.date}</span>
                  </div>
                  <h2 className="mt-3 flex-1 font-serif text-lg font-semibold leading-snug text-navy-950">
                    {n.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{n.excerpt}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <SectionHeading eyebrow="Circulars" title="Official circulars & notices" />
              <div className="mt-8 space-y-3">
                {announcements.map((a) => (
                  <div key={a.id} className="flex items-start gap-3 rounded-xl border border-navy-900/8 bg-white p-4">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-navy-50 text-navy-600">
                      {a.channel === "Alert" ? <Icon.Alert className="h-4 w-4" /> : <Icon.Bell className="h-4 w-4" />}
                    </span>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="text-sm font-medium text-navy-950">{a.title}</p>
                        <Badge tone="neutral">{a.audience}</Badge>
                      </div>
                      <p className="mt-1 text-xs text-slate-500">{a.body}</p>
                      <p className="mt-1 text-[11px] text-slate-400">{a.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col justify-between gap-8">
              <SectionHeading
                eyebrow="Stay informed"
                title="Every notice reaches families instantly"
                description="Announcements are published in the portal with Push, SMS and WhatsApp channels ready — parents never miss a circular."
              />
              <Button href="/portal/parent" icon>Open the parent portal</Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
