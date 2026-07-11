"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, Leaf } from "lucide-react";
import { smoothScrollToElement } from "@/lib/smoothScroll";

export default function Hero() {
  return (
    <section
      id="beranda"
      className="min-h-screen bg-[#faf9f6] flex items-center pb-16 relative overflow-hidden"
      style={{ paddingTop: "calc(env(safe-area-inset-top) + 5rem)" }}
    >
      {/* Decorative background blobs */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-primary-50 rounded-full -translate-y-1/3 translate-x-1/3 pointer-events-none opacity-70" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-50/60 rounded-full translate-y-1/3 -translate-x-1/3 pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-primary-100/30 rounded-full -translate-y-1/2 pointer-events-none blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: Text content */}
          <div className="order-2 lg:order-1">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex items-center gap-3 mb-7"
            >
              <span className="h-px w-8 bg-primary-500 flex-shrink-0" />
              <Leaf size={12} className="text-primary-600 flex-shrink-0" />
              <span className="text-xs font-bold text-primary-700 tracking-[0.22em] uppercase">
                KKN Kelompok 44 · Pacitan · 2026
              </span>
            </motion.div>

            {/* Headline */}
            <div className="overflow-hidden mb-1">
              <motion.h1
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.85, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="font-black text-[clamp(2.6rem,7vw,6.5rem)] text-slate-900 leading-[0.87] tracking-tight"
              >
                E-Portofolio
              </motion.h1>
            </div>
            <div className="overflow-hidden pb-3 mb-8">
              <motion.h1
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.85, delay: 0.36, ease: [0.22, 1, 0.36, 1] }}
                className="font-black text-[clamp(1.8rem,4.5vw,4.5rem)] leading-[0.9] tracking-tight text-primary-700"
              >
                Karangnongko
              </motion.h1>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="text-slate-500 text-base leading-relaxed max-w-sm mb-9"
            >
              Pusat data pengabdian masyarakat, mitigasi bencana, dan potensi
              wilayah Dusun Karangnongko — UKDW 2026.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="flex items-center gap-6 mb-12"
            >
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => smoothScrollToElement("#program", 80)}
                className="inline-flex items-center gap-2 bg-primary-700 hover:bg-primary-800 text-white font-bold px-7 py-3.5 rounded-full text-sm shadow-md shadow-primary-900/20 transition-colors duration-200 cursor-pointer"
              >
                Lihat Program <ArrowRight size={14} />
              </motion.button>
              <motion.button
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => smoothScrollToElement("#profil", 80)}
                className="text-slate-500 hover:text-slate-800 font-semibold text-sm transition-colors cursor-pointer"
              >
                Profil KKN →
              </motion.button>
            </motion.div>

            {/* Mini stats strip */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75 }}
              className="flex items-center gap-5 sm:gap-8 pt-8 border-t border-slate-200 overflow-hidden"
            >
              <div className="flex-shrink-0">
                <p className="text-xl sm:text-2xl font-black text-slate-900">7</p>
                <p className="text-[10px] sm:text-xs text-slate-400 font-medium mt-0.5 uppercase tracking-wider">Program Kerja</p>
              </div>
              <div className="h-8 w-px bg-slate-200 flex-shrink-0" />
              <div className="flex-shrink-0">
                <p className="text-xl sm:text-2xl font-black text-slate-900">±50</p>
                <p className="text-[10px] sm:text-xs text-slate-400 font-medium mt-0.5 uppercase tracking-wider">Kepala Keluarga</p>
              </div>
              <div className="h-8 w-px bg-slate-200 flex-shrink-0" />
              <div className="flex-shrink-0">
                <p className="text-xl sm:text-2xl font-black text-slate-900">Pacitan</p>
                <p className="text-[10px] sm:text-xs text-slate-400 font-medium mt-0.5 uppercase tracking-wider">Lokasi KKN</p>
              </div>
            </motion.div>
          </div>

          {/* Right: Photo with organic blob frame */}
          <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end pt-16 lg:pt-0">
            {/* Decorative circles behind photo */}
            <div className="absolute -z-10 -top-10 -right-4 lg:-right-8 w-64 h-64 bg-primary-100 rounded-full opacity-60" />
            <div className="absolute -z-10 -bottom-10 -left-4 w-48 h-48 bg-amber-100/70 rounded-full" />

            {/* Organic blob image */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div
                className="overflow-hidden shadow-2xl shadow-primary-900/15 w-[280px] h-[340px] sm:w-[340px] sm:h-[420px] lg:w-[400px] lg:h-[500px]"
                style={{ borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" }}
              >
                <img
                  src="/hero.webp"
                  alt="Suasana Dusun Karangnongko"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating location card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="absolute -bottom-5 -left-4 sm:-left-8 bg-white rounded-2xl p-3.5 shadow-xl border border-slate-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin size={16} className="text-primary-700" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Lokasi</p>
                    <p className="text-sm font-bold text-slate-800">Dusun Karangnongko</p>
                  </div>
                </div>
              </motion.div>

              {/* UKDW floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1, type: "spring" }}
                className="absolute -top-3 -right-3 sm:-right-6 bg-primary-700 text-white rounded-full px-3.5 py-2 text-[10px] font-black tracking-widest uppercase shadow-lg"
              >
                UKDW · 2026
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
