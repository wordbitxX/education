import { pageMeta } from "@/lib/seo";
import DownloadsList from "./DownloadsList";

export const metadata = pageMeta(
  "Downloads",
  "Download the Meridian Academy prospectus, fee schedule, academic calendar, admission form and official policies."
);

export default function DownloadsPage() {
  return <DownloadsList />;
}
