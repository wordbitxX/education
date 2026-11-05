import type { MetadataRoute } from "next";
import { programs, journalPosts } from "@/lib/data";
import { segments, benefits } from "@/lib/segments";

const base = "https://education.wordbitx.pk";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/about",
    "/about/mission",
    "/about/leadership",
    "/about/faculty",
    "/about/policies",
    "/about/careers",
    "/programs",
    "/admissions",
    "/admissions/apply",
    "/admissions/track",
    "/campus",
    "/events",
    "/journal",
    "/contact",
    "/news",
    "/gallery",
    "/downloads",
    "/results",
    "/solutions",
    "/wordbitx",
    "/school-management-system-pakistan",
    "/school-erp-pakistan",
    "/school-lms-pakistan",
    "/academy-management-system-pakistan",
    "/school-website-development-pakistan",
    "/school-mobile-app-development-pakistan",
    "/school-management-software-pakistan",
    "/college-management-software-pakistan",
    "/academy-management-software-pakistan",
    "/university-management-system-pakistan",
    "/education-management-system-pakistan",
    "/portal/overview",
    "/portal/student",
    "/portal/parent",
    "/portal/teacher",
    "/portal/admin",
    "/portal/lms",
    "/portal/assistant",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const programPages = programs.map((p) => ({
    url: `${base}/programs/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const journalPages = journalPosts.map((p) => ({
    url: `${base}/journal/${p.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const segmentPages = segments.map((s) => ({
    url: `${base}/solutions/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const benefitPages = benefits.map((b) => ({
    url: `${base}/platform/${b.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [...staticPages, ...programPages, ...journalPages, ...segmentPages, ...benefitPages];
}
