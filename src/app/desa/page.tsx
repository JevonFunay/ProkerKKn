import type { Metadata } from "next";
import DesaContent from "@/components/DesaContent";

export const metadata: Metadata = {
  title: "Profil Dusun Karangnongko",
  description:
    "Profil lengkap Dusun Karangnongko meliputi lokasi, kondisi geografis, mata pencaharian, potensi UMKM, dan peta wilayah dusun.",
};

export default function DesaPage() {
  return <DesaContent />;
}
