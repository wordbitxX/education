import { pageMeta } from "@/lib/seo";
import { servicePagesExtra } from "@/lib/services";
import ServiceLanding from "@/components/site/ServiceLanding";

export const metadata = pageMeta(
  "School Management Software Pakistan",
  "School management software for Pakistani schools — classes, sections, board-aligned results, PKR fee challans and parent communication. By WordbitX."
);

export default function Page() {
  return <ServiceLanding data={servicePagesExtra[0]} />;
}
