"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProfilSection from "@/components/ProfilSection";
import ProgramSection from "@/components/ProgramSection";
import PotensiSection from "@/components/PotensiSection";
import BeritaSection from "@/components/BeritaSection";
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
        <ProfilSection />
        <ProgramSection />
        <PotensiSection onCardClick={(data) => setModalData(data)} />
        <BeritaSection />
      </main>
      <Footer />
      <BackToTop />
      <DetailModal data={modalData} onClose={() => setModalData(null)} />
    </>
  );
}
