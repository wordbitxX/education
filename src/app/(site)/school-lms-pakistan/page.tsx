import { pageMeta } from "@/lib/seo";
import { servicePages } from "@/lib/services";
import ServiceLanding from "@/components/site/ServiceLanding";

export const metadata = pageMeta(
  "School LMS Pakistan",
  "School LMS in Pakistan — courses, lessons, study material, assignments, quizzes and progress for schools, academies and tuition centers. By WordbitX."
);

export default function Page() {
  return <ServiceLanding data={servicePages[2]} />;
}
