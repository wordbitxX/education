import { pageMeta } from "@/lib/seo";
import { servicePagesExtra } from "@/lib/services";
import ServiceLanding from "@/components/site/ServiceLanding";

export const metadata = pageMeta(
  "University Management System Pakistan",
  "University management system in Pakistan — departments, faculties, examination workflows, transcripts and student records at enterprise scale. By WordbitX.",
  "/university-management-system-pakistan"
);

export default function Page() {
  return <ServiceLanding data={servicePagesExtra[3]} />;
}
