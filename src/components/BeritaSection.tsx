"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { CalendarDays, ChevronLeft, ChevronRight } from "lucide-react";

interface BeritaItem {
  id: number;
  judul: string;
  tanggal: string;
  kategori: string;
  kategoriColor: string;
  ringkasan: string;
  image: string;
}

const berita: BeritaItem[] = [
  {
    id: 1,
    judul: "Pelatihan Batik Jumputan Teknik Shibori Berhasil Digelar untuk Ibu-Ibu PKK",
    tanggal: "15 Juli 2026",
    kategori: "Laporan Kegiatan",
    kategoriColor: "bg-primary-100 text-primary-700",
    ringkasan:
      "Ibu-ibu PKK Dusun Karangnongko mengikuti pelatihan pewarnaan kain teknik Shibori yang dipandu Lidwina Cahya. Peserta antusias mempraktikkan teknik ikat, lipat, dan celup untuk menghasilkan kain bermotif indah bernilai jual tinggi.",
    image: "/ProkerWina.webp",
  },
  {
    id: 2,
    judul: "Posyandu Lansia & Cek Kesehatan Gratis Disambut Antusias Warga",
    tanggal: "9 Juli 2026",
    kategori: "Laporan Kegiatan",
    kategoriColor: "bg-primary-100 text-primary-700",
    ringkasan:
      "Elisabeth Liliana bersama tim Kelompok 44 menggelar senam anti-hipertensi dan cek kesehatan gratis untuk lansia Dusun Karangnongko. Kegiatan mencakup pemeriksaan tekanan darah, gula darah, serta edukasi pola hidup sehat guna mencegah komplikasi hipertensi.",
    image: "/prokerlili2.webp",
  },
  {
    id: 3,
    judul: "Dua Program Berjalan Bersamaan: Edukasi Keuangan & Pelatihan Pelayanan UMKM",
    tanggal: "8 Juli 2026",
    kategori: "Laporan Kegiatan",
    kategoriColor: "bg-primary-100 text-primary-700",
    ringkasan:
      "Reynathania Nonie dan Kelpin Saktara menyelenggarakan dua program secara bersamaan dalam satu kegiatan: edukasi pengelolaan keuangan metode amplop dan pelatihan kualitas pelayanan UMKM. Ibu-ibu PKK dan pelaku usaha Dusun Karangnongko antusias mengikuti keduanya.",
    image: "/prokerreyna.webp",
  },
];

const SPRING = { type: "spring", damping: 50, stiffness: 280, mass: 1 } as const;
const ROW_FEATURED = 440;
const ROW_COMPACT = 265;
const IMG_FEATURED = 250;
const IMG_COMPACT = 155;

export default function BeritaSection() {
  const [selectedId, setSelectedId] = useState<number>(berita[0].id);
  const [mobileIdx, setMobileIdx] = useState(0);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  // Desktop: selected card always first → col-span-2 featured slot
  const sorted = [
    berita.find((b) => b.id === selectedId)!,
    ...berita.filter((b) => b.id !== selectedId),
  ];

  const mobilePrev = () => setMobileIdx((i) => (i - 1 + berita.length) % berita.length);
  const mobileNext = () => setMobileIdx((i) => (i + 1) % berita.length);

  return (
    <section id="berita" className="py-24 lg:py-32 bg-[#faf9f6] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20" ref={ref}>

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-2 h-2 rounded-full bg-primary-500 flex-shrink-0" />
            <span className="text-xs font-bold text-primary-700 tracking-[0.22em] uppercase">
              Update Terkini
            </span>
            <div className="h-px flex-1 bg-slate-200" />
          </div>
          <h2 className="font-black text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight">
            Berita{" "}
            <span className="text-slate-300">Terbaru</span>
          </h2>
        </motion.div>

        {/* ── MOBILE: simple card carousel, no layout animation ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:hidden"
        >
          <div className="relative rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={mobileIdx}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                {/* Photo */}
                <div className="relative overflow-hidden bg-slate-100" style={{ height: 210 }}>
                  <img
                    src={berita[mobileIdx].image}
                    alt={berita[mobileIdx].judul}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <span className={`absolute top-3 left-3 text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${berita[mobileIdx].kategoriColor}`}>
                    {berita[mobileIdx].kategori}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center gap-1.5 text-slate-400 text-xs mb-2">
                    <CalendarDays size={11} />
                    {berita[mobileIdx].tanggal}
                  </div>
                  <h3 className="font-black text-slate-900 text-base leading-snug mb-3">
                    {berita[mobileIdx].judul}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {berita[mobileIdx].ringkasan}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Mobile nav: arrows + dots */}
          <div className="flex items-center justify-between mt-4 px-1">
            <button
              onClick={mobilePrev}
              className="w-9 h-9 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-500 hover:border-primary-300 hover:text-primary-600 transition-colors cursor-pointer"
            >
              <ChevronLeft size={16} />
            </button>

            <div className="flex gap-2">
              {berita.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setMobileIdx(i)}
                  className={`rounded-full transition-all duration-300 cursor-pointer ${
                    i === mobileIdx
                      ? "w-5 h-2 bg-primary-500"
                      : "w-2 h-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={mobileNext}
              className="w-9 h-9 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-500 hover:border-primary-300 hover:text-primary-600 transition-colors cursor-pointer"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </motion.div>

        {/* ── DESKTOP: 3-card grid with card-swap layout animation ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.2 }}
          className="hidden md:grid grid-cols-2 gap-4"
          style={{ gridTemplateRows: `${ROW_FEATURED}px ${ROW_COMPACT}px` }}
        >
          {sorted.map((item, i) => {
            const featured = i === 0;

            return (
              <motion.div
                key={item.id}
                layout
                transition={SPRING}
                style={{ borderRadius: featured ? 24 : 16 }}
                className={`flex flex-col overflow-hidden bg-white border ${
                  featured
                    ? "col-span-2 border-slate-200 shadow-sm"
                    : "col-span-1 border-slate-200 hover:border-primary-300 hover:shadow-md cursor-pointer transition-colors duration-200"
                }`}
                onClick={() => !featured && setSelectedId(item.id)}
              >
                <motion.div
                  layout
                  transition={SPRING}
                  style={{ height: featured ? IMG_FEATURED : IMG_COMPACT }}
                  className="relative overflow-hidden bg-slate-100 flex-shrink-0"
                >
                  <img
                    src={item.image}
                    alt={item.judul}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />

                  <span className={`absolute top-3 left-3 text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${item.kategoriColor}`}>
                    {item.kategori}
                  </span>

                  <motion.span
                    animate={{ opacity: featured ? 1 : 0 }}
                    transition={{ duration: 0.22, delay: featured ? 0.2 : 0 }}
                    className="absolute bottom-3 left-3 text-[10px] font-semibold px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-slate-600 pointer-events-none select-none"
                  >
                    Sedang Ditampilkan
                  </motion.span>
                </motion.div>

                <div className={`flex-1 overflow-hidden flex flex-col ${featured ? "p-6" : "p-3.5"}`}>
                  <div className={`flex items-center gap-1 text-slate-400 mb-1.5 flex-shrink-0 ${featured ? "text-xs" : "text-[9px]"}`}>
                    <CalendarDays size={featured ? 12 : 9} />
                    {item.tanggal}
                  </div>

                  <h3 className={`font-black text-slate-900 leading-snug flex-shrink-0 ${
                    featured
                      ? "text-xl sm:text-2xl mb-3"
                      : "text-xs sm:text-sm line-clamp-2 mb-auto"
                  }`}>
                    {item.judul}
                  </h3>

                  <motion.p
                    animate={{ opacity: featured ? 1 : 0 }}
                    transition={{ duration: 0.3, delay: featured ? 0.15 : 0 }}
                    className={`text-slate-500 text-sm leading-relaxed overflow-hidden ${
                      featured ? "flex-1" : "h-0"
                    }`}
                  >
                    {item.ringkasan}
                  </motion.p>

                  <motion.p
                    animate={{ opacity: featured ? 0 : 1 }}
                    transition={{ duration: 0.18 }}
                    className={`text-[9px] sm:text-[10px] text-primary-600 font-semibold flex-shrink-0 ${
                      featured ? "h-0 pointer-events-none" : "mt-auto"
                    }`}
                  >
                    Ketuk untuk tampilkan ↑
                  </motion.p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
