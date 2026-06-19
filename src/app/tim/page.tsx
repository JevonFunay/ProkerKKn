import type { Metadata } from "next";
import TimContent from "@/components/TimContent";

export const metadata: Metadata = {
  title: "Profil Tim Kelompok 44 | E-Portofolio KKN",
  description:
    "Profil Dosen Pembimbing Lapangan dan anggota KKN Kelompok 44 Universitas Kristen Duta Wacana.",
};

export default function TimPage() {
  return <TimContent />;
}
