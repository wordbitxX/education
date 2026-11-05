import type { Metadata } from "next";
import { brand } from "./data";

export function pageMeta(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      url: path,
      title: `${title} · ${brand.name}`,
      description,
      siteName: brand.name,
    },
    twitter: { title: `${title} · ${brand.name}`, description },
  };
}
