import type { Metadata } from "next";
import ProkerUtamaContent from "@/components/ProkerUtamaContent";

export const metadata: Metadata = {
  title: "Sayembara Tas Siaga Bencana — KKN Kelompok 44",
  description:
    "Detail program kerja utama KKN Kelompok 44 UKDW: Sayembara Tas Siaga Bencana Gempa Bumi di Dusun Karangnongko, Pacitan.",
};

export default function ProkerUtamaPage() {
  return <ProkerUtamaContent />;
}
