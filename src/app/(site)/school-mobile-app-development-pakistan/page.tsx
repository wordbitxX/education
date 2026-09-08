import { pageMeta } from "@/lib/seo";
import { servicePages } from "@/lib/services";
import ServiceLanding from "@/components/site/ServiceLanding";

export const metadata = pageMeta(
  "School Mobile App Development Pakistan",
  "Android & iOS school mobile apps for parents, students and teachers — attendance alerts, fee challans, homework and results. Built by WordbitX."
);

export default function Page() {
  return <ServiceLanding data={servicePages[5]} />;
}
