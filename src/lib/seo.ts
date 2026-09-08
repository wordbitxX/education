import type { Metadata } from "next";
import { brand } from "./data";

export function pageMeta(title: string, description: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: `/` },
    openGraph: {
      title: `${title} · ${brand.name}`,
      description,
      siteName: brand.name,
    },
    twitter: { title: `${title} · ${brand.name}`, description },
  };
}
