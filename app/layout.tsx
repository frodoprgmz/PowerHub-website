import type { Metadata, Viewport } from "next";
import { Inter, Oswald } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
});
const _oswald = Oswald({
  subsets: ["latin", "latin-ext"],
  variable: "--font-oswald",
});
const siteUrl = new URL("https://powerhubskomielna.pl");

export const viewport: Viewport = {
  themeColor: "#fafafa",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: "POWERHUB | Siłownia 24/7",
  description:
    "Powerhub - lokalna siłownia czynna 24 godziny na dobę, 7 dni w tygodniu. Nowoczesny sprzęt, strefy treningu, trenerzy personalni. Dołącz do nas!",
  generator: "v0.app",
  keywords: [
    "siłownia",
    "fitness",
    "trening",
    "trener personalny",
    "Powerhub",
    "siłownia 24/7",
  ],
  authors: [{ name: "POWERHUB", url: siteUrl.toString() }],
  openGraph: {
    title: "POWERHUB | Siłownia 24/7",
    description:
      "Powerhub - lokalna siłownia czynna 24 godziny na dobę, 7 dni w tygodniu. Nowoczesny sprzęt i doświadczeni trenerzy.",
    url: siteUrl.toString(),
    siteName: "POWERHUB",
    images: [
      {
        url: "/images/gym-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Wnętrze siłowni POWERHUB",
      },
    ],
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "POWERHUB | Siłownia 24/7",
    description:
      "Powerhub - lokalna siłownia czynna 24 godziny na dobę. Dołącz już dziś!",
    images: ["/images/gym-hero.jpg"],
    creator: "@PowerHub",
  },
  icons: {
    icon: [
      {
        url: "/images/logo.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/images/logo.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/images/logo.png",
        type: "image/png",
      },
    ],
    apple: "/images/logo.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <head>
        <link rel="canonical" href={siteUrl.toString()} />
        <meta name="theme-color" content="#fafafa" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/images/logo.png" sizes="32x32" />
        <link rel="icon" href="/images/logo.png" sizes="16x16" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SportsActivityLocation",
              name: "POWERHUB",
              url: siteUrl.toString(),
              logo: `${siteUrl.toString()}/images/logo.png`,
              image: `${siteUrl.toString()}/images/gym-hero.jpg`,
              description:
                "Powerhub - lokalna siłownia czynna 24 godziny na dobę, 7 dni w tygodniu.",
            }),
          }}
        />
      </head>
      <body
        className={`${_inter.variable} ${_oswald.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
