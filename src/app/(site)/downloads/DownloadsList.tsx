"use client";

import { downloadItems } from "@/lib/data";
import { toast } from "@/components/portal/Toast";
import { Container, Section, Badge } from "@/components/ui";
import PageHeader from "@/components/site/PageHeader";
import { Icon } from "@/components/icons";
import { Button } from "@/components/ui";

export default function DownloadsList() {
  return (
    <>
      <PageHeader
        eyebrow="Downloads"
        title="Forms, schedules & policies"
        description="Everything a family or partner needs in one place. Files are demo placeholders in this concept."
        breadcrumbs={[{ label: "Downloads" }]}
      />
      <Section className="bg-white">
        <Container size="narrow">
          <div className="space-y-3">
            {downloadItems.map((d) => (
              <div key={d.name} className="flex items-center justify-between gap-4 rounded-2xl border border-navy-900/8 bg-ivory p-5">
                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-50 text-navy-700">
                    <Icon.FileText className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-medium text-navy-950">{d.name}</p>
                    <p className="text-xs text-slate-500">{d.type} · {d.size}</p>
                  </div>
                </div>
                <Button size="sm" variant="outline" onClick={() => toast(`Preparing ${d.name} (demo file)`)}>
                  <Icon.Download className="h-4 w-4" /> Download
                </Button>
              </div>
            ))}
          </div>
          <div className="mt-8 flex items-center gap-3 rounded-2xl bg-navy-50 p-5">
            <Icon.Info className="h-5 w-5 shrink-0 text-navy-600" />
            <p className="text-sm text-slate-600">
              In a live deployment these are real generated PDFs — prospectus, fee challans, report
              cards and printable forms. <Badge tone="navy">Demo</Badge>
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
