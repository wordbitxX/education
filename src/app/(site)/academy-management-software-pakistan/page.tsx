import { pageMeta } from "@/lib/seo";
import { servicePagesExtra } from "@/lib/services";
import ServiceLanding from "@/components/site/ServiceLanding";

export const metadata = pageMeta(
  "Academy Management Software Pakistan",
  "Academy & coaching center management software — batches, entry tests, monthly PKR fees and fast result publishing for Pakistani academies. By WordbitX.",
  "/academy-management-software-pakistan"
);

export default function Page() {
  return <ServiceLanding data={servicePagesExtra[2]} />;
}
