import { pageMeta } from "@/lib/seo";
import { servicePages } from "@/lib/services";
import ServiceLanding from "@/components/site/ServiceLanding";

export const metadata = pageMeta(
  "Academy Management System Pakistan",
  "Academy & coaching institute management system — batches, entry tests, monthly fees, results and parent communication. Built by WordbitX.",
  "/academy-management-system-pakistan"
);

export default function Page() {
  return <ServiceLanding data={servicePages[3]} />;
}
