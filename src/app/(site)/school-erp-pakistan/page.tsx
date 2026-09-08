import { pageMeta } from "@/lib/seo";
import { servicePages } from "@/lib/services";
import ServiceLanding from "@/components/site/ServiceLanding";

export const metadata = pageMeta(
  "School ERP Software Pakistan",
  "School ERP software for Pakistani schools — admissions, fee challans, HR & payroll, library, transport and store in one connected system. By WordbitX."
);

export default function Page() {
  return <ServiceLanding data={servicePages[1]} />;
}
