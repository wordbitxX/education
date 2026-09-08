import { pageMeta } from "@/lib/seo";
import { servicePagesExtra } from "@/lib/services";
import ServiceLanding from "@/components/site/ServiceLanding";

export const metadata = pageMeta(
  "Education Management System Pakistan",
  "A modular education management system for schools, colleges, academies and madaris in Pakistan — PKR fees, local payments, Urdu support. By WordbitX."
);

export default function Page() {
  return <ServiceLanding data={servicePagesExtra[4]} />;
}
