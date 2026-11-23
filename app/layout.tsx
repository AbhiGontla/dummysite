import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap", preload: false });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | AC, Plumbing, Electrical & Maintenance in Dubai`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "technical services Dubai",
    "maintenance company Dubai",
    "AC maintenance Dubai",
    "plumbing services Dubai",
    "electrical services Dubai",
    "carpentry Dubai",
    "false ceiling Dubai",
    "tiling works Dubai",
    "MEP services Dubai",
    "villa maintenance Dubai",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — Complete Technical Solutions in Dubai`,
    description: site.description,
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
    images: ["/images/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg", apple: "/favicon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#0F172A",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: site.name,
  description: site.description,
  url: site.url,
  telephone: site.phone,
  email: site.email,
  image: `${site.url}/images/og-image.jpg`,
  priceRange: "AED",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Business Bay",
    addressLocality: "Dubai",
    addressCountry: "AE",
  },
  areaServed: "Dubai",
  openingHours: "Mo-Sa 08:00-20:00",
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "120" },
  sameAs: Object.values(site.social),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <head>
        <link rel="preload" as="image" href="/images/hero-mobile.webp" media="(max-width: 767px)" fetchPriority="high" />
        <link rel="preload" as="image" href="/images/hero.webp" media="(min-width: 768px)" fetchPriority="high" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
