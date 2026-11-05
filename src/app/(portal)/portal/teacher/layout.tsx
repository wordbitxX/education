import type { ReactNode } from "react";
import { routeMetadata } from "@/lib/route-metadata";

export const metadata = routeMetadata("/portal/teacher");

export default function RouteLayout({ children }: { children: ReactNode }) {
  return children;
}
