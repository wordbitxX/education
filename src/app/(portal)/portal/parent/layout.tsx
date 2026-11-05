import type { ReactNode } from "react";
import { routeMetadata } from "@/lib/route-metadata";

export const metadata = routeMetadata("/portal/parent");

export default function RouteLayout({ children }: { children: ReactNode }) {
  return children;
}
