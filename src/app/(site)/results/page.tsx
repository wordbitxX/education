import { pageMeta } from "@/lib/seo";
import ResultsSearch from "./ResultsSearch";

export const metadata = pageMeta(
  "Check Results",
  "Check your school result online — search by Student ID, Roll Number, Class and Academic Session. Meridian Academy result portal."
);

export default function ResultsPage() {
  return <ResultsSearch />;
}
