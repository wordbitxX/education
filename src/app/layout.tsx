import type { Metadata, Viewport } from "next";
import { Fraunces, Inter, Tajawal, Noto_Nastaliq_Urdu } from "next/font/google";
import type { ReactNode } from "react";
import { brand } from "@/lib/data";
import { I18nProvider } from "@/lib/i18n";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  variable: "--font-tajawal",
  weight: ["400", "500", "700", "800"],
  display: "swap",
});

const nastaliq = Noto_Nastaliq_Urdu({
  subsets: ["arabic"],
  variable: "--font-nastaliq",
  weight: ["400", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://education.wordbitx.pk"),
  title: {
    default: "Education Management Platform for Pakistan — School, College & Academy ERP by WordbitX",
    template: `%s · WordbitX Education Technology`,
  },
  description:
    "WordbitX builds complete education management platforms for Pakistan: school management software, school ERP, college management systems, academy management software and university systems — admissions, students, PKR fees, attendance, exams, staff, parents and multi-campus management in one platform. Request a free demo at wordbitx.com.",
  keywords: [
    "school management software Pakistan",
    "school management system Pakistan",
    "school ERP Pakistan",
    "education management software Pakistan",
    "college management software Pakistan",
    "academy management software Pakistan",
    "university management system Pakistan",
    "student management system Pakistan",
    "fee management software for schools",
    "school ERP software",
    "education ERP Pakistan",
    "school management software",
    "school management system",
    "school ERP software",
    "academy management software",
    "school website development",
    "education software development",
    "parent portal",
    "student portal",
    "teacher portal",
    "school admission system",
    "online admission system",
    "school fee management software",
    "school attendance system",
    "school LMS",
    "learning management system",
    "education technology",
    "school management software development company",
    "LMS development company",
    "education app development",
  ],
  category: "Education Technology",
  openGraph: {
    type: "website",
    siteName: `${brand.name} — Concept by ${brand.partner}`,
    url: "https://education.wordbitx.pk/",
    title: `${brand.name} — A Complete School & Academy Digital Ecosystem by ${brand.partner}`,
    description:
      "Online admissions, student, parent, teacher & admin portals, LMS, attendance, exams, fees and an AI assistant — a premium EdTech concept demo by WordbitX (wordbitx.com).",
    locale: "en_US",
    images: [
      {
        url: "https://images.pexels.com/photos/29659894/pexels-photo-29659894.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1200&h=630",
        width: 1200,
        height: 630,
        alt: `${brand.name} — school management platform concept by ${brand.partner}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${brand.name} — School Management Platform Concept by ${brand.partner}`,
    description:
      "A complete education ecosystem: portals, LMS, admissions, fees, AI assistant — built by WordbitX.",
    images: [
      "https://images.pexels.com/photos/29659894/pexels-photo-29659894.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1200&h=630",
    ],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#0e2440",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationalOrganization",
      "@id": "https://education.wordbitx.pk/#org",
      name: brand.name,
      slogan: "Where Learning Becomes Possibility",
      description:
        "A fictional premium international academy. This platform is a concept demonstration of a school management ecosystem.",
      fictional: true,
      address: { "@type": "PostalAddress", addressLocality: "Lahore", addressCountry: "PK" },
      areaServed: ["Pakistan", "United Arab Emirates", "Saudi Arabia", "United Kingdom", "United States", "Canada", "Australia"],
    },
    {
      "@type": "Organization",
      "@id": "https://wordbitx.com/#org",
      name: "WordbitX Software Company",
      url: brand.partnerUrl,
      telephone: "+92-325-1888841",
      description:
        "WordbitX Software Company builds education ERP, school management software, college management systems, academy management software, LMS, mobile apps and websites for educational institutions in Pakistan and abroad.",
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+92-325-1888841",
          contactType: "sales",
          areaServed: ["PK", "AE", "SA"],
          availableLanguage: ["English", "Urdu", "Arabic"],
        },
        {
          "@type": "ContactPoint",
          telephone: "+1-929-619-7699",
          contactType: "sales",
          areaServed: ["US", "CA", "GB", "AU"],
          availableLanguage: ["English"],
        },
      ],
    },
    {
      "@type": "SoftwareApplication",
      name: "WordbitX Education Management Platform",
      applicationCategory: "EducationalApplication",
      operatingSystem: "Web, Android, iOS",
      description:
        "A complete education management platform for schools, academies, colleges, universities and madaris: admissions, students, PKR fee management, attendance, exams, results, staff, parent communication and multi-campus management.",
      publisher: { "@id": "https://wordbitx.com/#org" },
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "PKR",
        description: "Free demo available on request",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://education.wordbitx.pk/#website",
      name: `${brand.name} — Concept by WordbitX`,
      url: "https://education.wordbitx.pk/",
      publisher: { "@id": "https://wordbitx.com/#org" },
    },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" dir="ltr" className={`${inter.variable} ${fraunces.variable} ${tajawal.variable} ${nastaliq.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="font-sans antialiased">
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
