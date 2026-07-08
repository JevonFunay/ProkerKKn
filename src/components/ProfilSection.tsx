"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import Link from "next/link";

function IconInstagram() {
  return (
    <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%" }),
  center: { x: 0 },
  exit:  (dir: number) => ({ x: dir > 0 ? "-100%" : "100%" }),
};

// ── Tambah foto kegiatan KKN di sini ──────────────────────────────────────────
// Upload foto ke folder public/ (jalankan ./convert-photos.sh), lalu tambah entry.
const progressPhotos = [
  { src: "/IMG20260626052844.jpg" },
  { src: "/IMG20260626145924.jpg" },
  { src: "/IMG20260626161949.jpg" },
  { src: "/IMG20260627160316.jpg" },
  { src: "/IMG20260702202526.jpg" },
];
// ──────────────────────────────────────────────────────────────────────────────

export default function ProfilSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [resetKey, setResetKey] = useState(0);
  const total = progressPhotos.length;

  useEffect(() => {
    if (total <= 1) return;
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((c) => (c + 1) % total);
    }, 4000);
    return () => clearInterval(timer);
  }, [total, resetKey]);

  const prev = () => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + total) % total);
    setResetKey((k) => k + 1);
  };
  const next = () => {
    setDirection(1);
    setCurrent((c) => (c + 1) % total);
    setResetKey((k) => k + 1);
  };
  const goTo = (i: number) => {
    setDirection(i > current ? 1 : -1);
    setCurrent(i);
    setResetKey((k) => k + 1);
  };

  return (
    <section id="profil" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20 relative" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Kiri: photo slideshow */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="order-2 lg:order-1 relative"
          >
            <div className="relative w-full rounded-3xl overflow-hidden bg-slate-100 shadow-xl shadow-slate-200/60" style={{ aspectRatio: "4/3" }}>
              <AnimatePresence initial={false} custom={direction}>
                <motion.img
                  key={current}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  src={progressPhotos[current].src}
                  alt="Dokumentasi KKN Kelompok 44"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* Nav arrows — hanya tampil jika lebih dari 1 foto */}
              {total > 1 && (
                <>
                  <button
                    onClick={prev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow transition-all duration-200 cursor-pointer"
                  >
                    <ChevronLeft size={16} className="text-slate-700" />
                  </button>
                  <button
                    onClick={next}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow transition-all duration-200 cursor-pointer"
                  >
                    <ChevronRight size={16} className="text-slate-700" />
                  </button>

                  {/* Dots */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                    {progressPhotos.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => goTo(i)}
                        className={`rounded-full transition-all duration-300 cursor-pointer ${
                          i === current ? "w-4 h-1.5 bg-white" : "w-1.5 h-1.5 bg-white/50"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </motion.div>

          {/* Kanan: teks + tombol */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2 h-2 rounded-full bg-primary-500 flex-shrink-0" />
              <span className="text-xs font-bold text-primary-700 tracking-[0.22em] uppercase">
                Dokumentasi Kegiatan
              </span>
              <div className="h-px flex-1 bg-slate-200" />
            </div>

            <h2 className="font-black text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight mb-6">
              Progress{" "}
              <span className="text-slate-300">KKN Kel. 44</span>
            </h2>

            <p className="text-slate-500 leading-relaxed text-base sm:text-lg mb-10">
              Dokumentasi perjalanan KKN Kelompok 44 UKDW di Dusun Karangnongko —
              dari program kerja, interaksi bersama warga, hingga pengembangan
              potensi desa.
            </p>

            {/* Dua tombol */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://www.instagram.com/kknreguler2026_karangnongko/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary-700 to-teal-600 hover:from-primary-800 hover:to-teal-700 text-white font-semibold text-sm px-6 py-3.5 rounded-2xl transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <IconInstagram />
                Dokumentasi Lengkap
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </a>

              <Link
                href="/desa"
                className="group inline-flex items-center justify-center gap-2 bg-white border border-slate-200 hover:border-primary-300 hover:bg-primary-50 text-slate-700 hover:text-primary-700 font-semibold text-sm px-6 py-3.5 rounded-2xl transition-all duration-300"
              >
                <MapPin size={15} />
                Profil Dusun
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
