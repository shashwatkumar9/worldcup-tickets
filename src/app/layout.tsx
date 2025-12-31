import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {
  JsonLd,
  createOrganizationSchema,
  createWebsiteSchema,
} from "@/components/seo/json-ld";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://worldcup-tickets.net";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "WorldCup-Tickets.net | Buy World Cup & Major Sports Tickets",
    template: "%s | WorldCup-Tickets.net",
  },
  description:
    "Compare and buy tickets for FIFA World Cup 2026, Olympic Games, Euro 2028, and all major international sporting events. Find the best prices from trusted ticket partners.",
  keywords: [
    "World Cup tickets",
    "FIFA World Cup 2026",
    "Olympic tickets",
    "Euro 2028 tickets",
    "sports tickets",
    "football tickets",
    "soccer tickets",
    "international sports events",
  ],
  authors: [{ name: "WorldCup-Tickets.net" }],
  creator: "WorldCup-Tickets.net",
  publisher: "WorldCup-Tickets.net",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "WorldCup-Tickets.net",
    title: "WorldCup-Tickets.net | Buy World Cup & Major Sports Tickets",
    description:
      "Compare and buy tickets for FIFA World Cup 2026, Olympic Games, Euro 2028, and all major international sporting events.",
    images: [
      {
        url: `${BASE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "WorldCup-Tickets.net",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WorldCup-Tickets.net | Buy World Cup & Major Sports Tickets",
    description:
      "Compare and buy tickets for FIFA World Cup 2026, Olympic Games, and all major sports events.",
    images: [`${BASE_URL}/og-image.jpg`],
    creator: "@worldcuptickets",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: BASE_URL,
    languages: {
      "en": `${BASE_URL}/en`,
      "de": `${BASE_URL}/de`,
      "fr": `${BASE_URL}/fr`,
      "es": `${BASE_URL}/es`,
      "it": `${BASE_URL}/it`,
      "ar": `${BASE_URL}/ar`,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <JsonLd data={[createOrganizationSchema(), createWebsiteSchema()]} />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
