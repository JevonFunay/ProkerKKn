import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://karangnongko.vercel.app";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Place",
  name: "Dusun Karangnongko",
  description:
    "Dusun Karangnongko terletak di Desa Watukarung, Kecamatan Pringkuku, Kabupaten Pacitan, Jawa Timur. Wilayah pesisir selatan dengan mata pencaharian utama nelayan dan potensi UMKM rengginang beras ketan.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Dusun Karangnongko",
    addressLocality: "Desa Watukarung, Kecamatan Pringkuku",
    addressRegion: "Kabupaten Pacitan, Jawa Timur",
    addressCountry: "ID",
  },
  url: SITE_URL,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Dusun Karangnongko, Pacitan — Profil & Potensi Desa",
    template: "%s | Dusun Karangnongko",
  },
  description:
    "Profil lengkap Dusun Karangnongko, Desa Watukarung, Kecamatan Pringkuku, Kabupaten Pacitan — informasi potensi desa, UMKM lokal, program KKN Kelompok 44 UKDW, dan peta digital wilayah.",
  keywords: [
    "Dusun Karangnongko",
    "Karangnongko Pacitan",
    "Desa Watukarung",
    "Kecamatan Pringkuku",
    "Kabupaten Pacitan",
    "profil desa Karangnongko",
    "potensi desa Karangnongko",
    "wisata pesisir Pacitan selatan",
    "UMKM Karangnongko rengginang",
    "KKN Karangnongko UKDW",
    "lokasi KKN Pacitan",
    "mitigasi bencana gempa Pacitan",
    "nelayan Karangnongko",
    "Watukarung Pringkuku Pacitan",
  ],
  authors: [{ name: "KKN Kelompok 44 — Universitas Kristen Duta Wacana" }],
  creator: "KKN Kelompok 44 UKDW",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: SITE_URL,
    siteName: "E-Portofolio KKN Karangnongko",
    title: "Dusun Karangnongko, Pacitan — Profil & Potensi Desa",
    description:
      "Profil lengkap Dusun Karangnongko, Desa Watukarung, Kecamatan Pringkuku, Kabupaten Pacitan — potensi desa, UMKM lokal, dan dokumentasi program KKN Kelompok 44 UKDW.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dusun Karangnongko, Pacitan — Profil & Potensi Desa",
    description:
      "Profil lengkap Dusun Karangnongko — potensi desa, UMKM lokal, dan dokumentasi program KKN Kelompok 44 UKDW.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
  },
  category: "education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
