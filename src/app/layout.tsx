import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://dusunkarangnongko.vercel.app";

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
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
  },
  title: "Dusun Karangnongko, Pacitan - Profil & E-Portofolio KKN",
  description:
    "Pusat informasi resmi, potensi desa, pariwisata, UMKM, dan rekam jejak program kerja KKN Kelompok 44 di Dusun Karangnongko, Desa Watukarung, Kabupaten Pacitan.",
  keywords: [
    "Dusun Karangnongko",
    "Desa Watukarung",
    "Pacitan",
    "Wisata Karangnongko",
    "UMKM Watukarung",
    "KKN Karangnongko",
    "KKN UKDW",
  ],
  authors: [{ name: "KKN Kelompok 44 Universitas Kristen Duta Wacana" }],
  creator: "KKN Kelompok 44 UKDW",
  openGraph: {
    title: "Dusun Karangnongko, Pacitan - Profil & E-Portofolio KKN",
    description:
      "Pusat informasi resmi dan potensi desa Dusun Karangnongko, Desa Watukarung, Kabupaten Pacitan.",
    url: SITE_URL,
    siteName: "Karangnongko Hub",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dusun Karangnongko, Pacitan - Profil & E-Portofolio KKN",
    description:
      "Pusat informasi resmi dan potensi desa Dusun Karangnongko, Desa Watukarung, Kabupaten Pacitan.",
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
  verification: {
    // Kode verifikasi Google Search Console (baris 83)
    // Ganti value di bawah dengan kode unik alfanumerik dari Google Search Console Anda
    google: "rcC9eFW_7a0lFzIFh0dhbI7PF05e7S4n0rVYf79ch8E",
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
