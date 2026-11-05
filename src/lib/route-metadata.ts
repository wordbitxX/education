import type { Metadata } from "next";
import { metadata as rootMetadata } from "@/app/layout";

// Client-rendered pages cannot export metadata themselves.
export function routeMetadata(path: string): Metadata {
  return {
    alternates: { canonical: path },
    openGraph: { ...rootMetadata.openGraph, url: path },
  };
}
