import { pageMeta } from "@/lib/seo";
import { servicePages } from "@/lib/services";
import ServiceLanding from "@/components/site/ServiceLanding";

export const metadata = pageMeta(
  "School Management System in Pakistan",
  "A complete, Pakistan-ready school management system — admissions, PKR fees, attendance, exams and portals for schools, academies and multi-campus groups. By WordbitX."
);

export default function Page() {
  return <ServiceLanding data={servicePages[0]} />;
}
