"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProgramSection from "@/components/ProgramSection";
import PotensiSection from "@/components/PotensiSection";
import ProfilDusunSection from "@/components/ProfilDusunSection";
import BeritaSection from "@/components/BeritaSection";
import ProfilSection from "@/components/ProfilSection";
import Footer from "@/components/Footer";
import DetailModal from "@/components/DetailModal";
import BackToTop from "@/components/BackToTop";
import type { ProgramData, PotensiData } from "@/data/content";

export default function Home() {
  const [modalData, setModalData] = useState<ProgramData | PotensiData | null>(null);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProfilDusunSection />
        <BeritaSection />
        <ProfilSection />
        <ProgramSection />
        <PotensiSection onCardClick={(data) => setModalData(data)} />
      </main>
      <Footer />
      <BackToTop />
      <DetailModal data={modalData} onClose={() => setModalData(null)} />
    </>
  );
}
