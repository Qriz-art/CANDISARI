import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { hotel } from "@/lib/hotel-data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://candisarihotel.com"),
  title: hotel.meta.title,
  description: hotel.meta.description,
  keywords: [
    "Candisari Hotel",
    "Hotel Kebumen",
    "Hotel Bintang 3 Kebumen",
    "Hotel Karanganyar",
    "Hotel Jawa Tengah",
    "Restoran Kebumen",
    "Penginapan Kebumen",
    "Wisata Kebumen",
  ],
  authors: [{ name: "Candisari Hotel & Resto" }],
  creator: "Candisari Hotel & Resto",
  publisher: "Candisari Hotel & Resto",
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
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://candisarihotel.com",
    siteName: "Candisari Hotel & Resto",
    title: hotel.meta.title,
    description: hotel.meta.description,
    images: [
      {
        url: "https://raw.githubusercontent.com/Qriz-art/gudang/main/assets/candisari.png",
        width: 1200,
        height: 630,
        alt: "Candisari Hotel & Resto - Hotel Bintang 3 di Kebumen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: hotel.meta.title,
    description: hotel.meta.description,
    images: ["https://raw.githubusercontent.com/Qriz-art/gudang/main/assets/candisari.png"],
  },
  alternates: {
    canonical: "https://candisarihotel.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Hotel",
  name: hotel.name,
  description: hotel.description,
  url: "https://candisarihotel.com",
  telephone: hotel.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jalan Raya Timur No.Km.2, Ketugon, Purwodeso",
    addressLocality: "Kebumen",
    addressRegion: "Jawa Tengah",
    postalCode: "54362",
    addressCountry: "ID",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -7.6796,
    longitude: 109.6527,
  },
  starRating: {
    "@type": "Rating",
    ratingValue: hotel.rating,
    bestRating: 5,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: hotel.rating,
    reviewCount: hotel.reviews,
    bestRating: 5,
    worstRating: 1,
  },
  priceRange: hotel.priceFormatted,
  checkinTime: hotel.checkIn,
  checkoutTime: hotel.checkOut,
  amenities: hotel.facilities.map((f) => f.name),
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/favicon.png" sizes="any" type="image/png" />
        <link rel="icon" href="/favicon.ico" sizes="16x16" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#1a3a2a" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
