"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import { smoothScrollToElement } from "@/lib/smoothScroll";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.65], ["0%", "-12%"]);

  const scrollTo = (href: string) => {
    smoothScrollToElement(href, 80);
  };

  return (
    <section
      id="beranda"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Background Image */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{ y: bgY }}
      >
        <img
          src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=1920&h=1080&fit=crop&q=85"
          alt="Hutan tropis Dusun Karangnongko"
          className="w-full h-full object-cover scale-110"
        />
      </motion.div>
      <div className="hero-overlay absolute inset-0" />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse" />
          <span className="text-sm text-white/90 font-medium tracking-wide">
            Dokumentasi Digital Pengabdian
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight tracking-tight mb-6"
        >
          E-Portofolio KKN
          <br />
          <span className="shimmer-text">Dusun Karangnongko</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
        >
          Pusat data realisasi program pengabdian masyarakat, edukasi mitigasi
          bencana, serta analisis potensi taktis wilayah oleh Kelompok 44.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo("#program")}
            className="cta-pulse inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary-600/30 cursor-pointer"
          >
            Eksplorasi Program
            <ArrowRight size={18} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo("#potensi")}
            className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/25 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/18 transition-colors duration-300 cursor-pointer"
          >
            Analisis Potensi
            <ChevronDown size={18} />
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/40 text-xs tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown size={20} className="text-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
