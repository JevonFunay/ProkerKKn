"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { smoothScrollToElement } from "@/lib/smoothScroll";

const marqueeItems = [
  "Dusun Karangnongko",
  "KKN Kelompok 44",
  "Mitigasi Bencana Gempa Bumi",
  "Pemetaan Digital Google Maps",
  "Pemberdayaan Ibu PKK",
  "Pesisir Selatan Pacitan",
  "UKDW Genap 2025/2026",
  "7 Program Kerja",
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.65], ["0%", "-12%"]);

  return (
    <section
      id="beranda"
      ref={sectionRef}
      className="relative min-h-screen flex flex-col overflow-hidden bg-black"
    >
      {/* Parallax Background */}
      <motion.div className="absolute inset-0 w-full h-full" style={{ y: bgY }}>
        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1920&h=1080&fit=crop"
          alt="Suasana Dusun Karangnongko"
          className="w-full h-full object-cover scale-110"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/55 to-black/92" />

      {/* Oversized watermark */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none flex items-center">
        <span className="text-[32vw] font-black text-white/[0.03] uppercase tracking-tighter whitespace-nowrap leading-none pl-4">
          KKN
        </span>
      </div>

      {/* Main editorial content */}
      <motion.div
        className="relative z-10 flex-1 flex flex-col justify-center px-6 sm:px-10 lg:px-20 max-w-[1400px] mx-auto w-full"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        {/* Location line */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="h-px w-10 bg-primary-500 flex-shrink-0" />
          <MapPin size={12} className="text-primary-400 flex-shrink-0" />
          <span className="text-white/40 text-xs font-semibold tracking-[0.2em] uppercase">
            Desa Watukarung · Kec. Pringkuku · Kab. Pacitan
          </span>
        </motion.div>

        {/* Headline with clipped reveal */}
        <div className="overflow-hidden mb-1">
          <motion.h1
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="font-black text-[clamp(2.6rem,8vw,7.5rem)] text-white leading-[0.85] tracking-tight"
          >
            E-Portofolio
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-10">
          <motion.h1
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
            className="font-black text-[clamp(2.6rem,8vw,7.5rem)] leading-[0.85] tracking-tight"
          >
            <span className="shimmer-text">KKN</span>
            <span className="text-white/10"> ×</span>
          </motion.h1>
        </div>

        {/* Description + CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="flex flex-col sm:flex-row sm:items-end gap-8 sm:gap-20 max-w-5xl"
        >
          <p className="text-white/40 text-sm leading-relaxed max-w-[280px]">
            Pusat data pengabdian masyarakat, mitigasi bencana, dan potensi
            wilayah Dusun Karangnongko — UKDW 2026.
          </p>
          <div className="flex items-center gap-6 flex-shrink-0">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => smoothScrollToElement("#program", 80)}
              className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-400 text-white font-bold px-7 py-3.5 rounded-full transition-colors duration-200 cursor-pointer text-sm tracking-wide"
            >
              Lihat Program <ArrowRight size={14} />
            </motion.button>
            <motion.button
              whileHover={{ x: 3 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => smoothScrollToElement("#profil", 80)}
              className="text-white/40 hover:text-white/80 font-semibold text-sm transition-colors cursor-pointer"
            >
              Profil KKN →
            </motion.button>
          </div>
        </motion.div>

        {/* UKDW stamp */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-14 flex items-center gap-3"
        >
          <div className="h-px w-8 bg-white/10" />
          <span className="text-white/20 text-[10px] tracking-[0.4em] uppercase font-medium">
            Universitas Kristen Duta Wacana · Semester Genap 2025/2026
          </span>
        </motion.div>
      </motion.div>

      {/* Marquee strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.5 }}
        className="relative z-10 border-t border-white/[0.07] py-3 overflow-hidden"
      >
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="flex-shrink-0 px-8 text-white/20 text-[10px] font-bold tracking-[0.3em] uppercase"
            >
              {item}
              <span className="ml-8 text-primary-600/40">◆</span>
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
