import { pageMeta } from "@/lib/seo";
import { servicePagesExtra } from "@/lib/services";
import ServiceLanding from "@/components/site/ServiceLanding";

export const metadata = pageMeta(
  "College Management Software Pakistan",
  "College management software in Pakistan — programs, semesters, course registration, CGPA results and transcripts in one platform. By WordbitX."
);

export default function Page() {
  return <ServiceLanding data={servicePagesExtra[1]} />;
}
