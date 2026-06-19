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
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop"
          alt="Pemandangan pesisir Karangnongko"
          className="w-full h-full object-cover scale-110"
        />
      </motion.div>
      <div className="hero-overlay absolute inset-0" />

      {/* Floating Ambient Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="float-slow absolute -top-20 -left-20 w-96 h-96 rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, #34d399 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="float-medium absolute top-1/3 -right-32 w-80 h-80 rounded-full opacity-15"
          style={{
            background: "radial-gradient(circle, #fbbf24 0%, transparent 70%)",
            filter: "blur(50px)",
          }}
        />
        <div
          className="float-fast absolute -bottom-10 left-1/4 w-64 h-64 rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, #6ee7b7 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
      </div>

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
          <span className="text-sm text-white/90 font-medium">
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
          className="text-lg sm:text-xl text-white/75 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
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
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo("#program")}
            className="cta-pulse inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary-600/30 cursor-pointer"
          >
            Eksplorasi Program
            <ArrowRight size={18} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo("#potensi")}
            className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/25 text-white font-semibold px-8 py-4 rounded-xl transition-colors duration-300 cursor-pointer"
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
        className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/50 text-xs tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown size={20} className="text-white/50" />
        </motion.div>
      </motion.div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 64"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-12 sm:h-16"
        >
          <path
            d="M0,32 C240,64 480,0 720,32 C960,64 1200,0 1440,32 L1440,64 L0,64 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
