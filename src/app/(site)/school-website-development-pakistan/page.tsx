import { pageMeta } from "@/lib/seo";
import { servicePages } from "@/lib/services";
import ServiceLanding from "@/components/site/ServiceLanding";

export const metadata = pageMeta(
  "School Website Development Pakistan",
  "Premium school website development in Pakistan — online admissions, results, news and SEO for 'school in Lahore' and beyond. Designed by WordbitX.",
  "/school-website-development-pakistan"
);

export default function Page() {
  return <ServiceLanding data={servicePages[4]} />;
}
