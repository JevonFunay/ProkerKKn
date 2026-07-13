import type { Metadata } from "next";
import TimContent from "@/components/TimContent";

export const metadata: Metadata = {
  title: "Profil Tim Kelompok 44",
  description:
    "Profil anggota KKN Kelompok 44 Universitas Kristen Duta Wacana, mahasiswa pengabdian masyarakat di Dusun Karangnongko, Desa Watukarung, Kecamatan Pringkuku, Kabupaten Pacitan.",
};

export default function TimPage() {
  return <TimContent />;
}
