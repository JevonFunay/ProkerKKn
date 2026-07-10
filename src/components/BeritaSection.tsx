"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CalendarDays } from "lucide-react";

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

// Overdamped spring: no bounce, smooth glide
const SPRING = { type: "spring", damping: 50, stiffness: 280, mass: 1 } as const;

// Fixed row heights so the grid wrapper never changes size → footer stays put.
// Row 1 (featured): 440px  |  Row 2 (compact): 265px  |  gap: 16px  →  total: 721px
const ROW_FEATURED = 440;
const ROW_COMPACT = 265;
const IMG_FEATURED = 250;
const IMG_COMPACT = 155;

export default function BeritaSection() {
  const [selectedId, setSelectedId] = useState<number>(berita[0].id);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  // Selected card is always first → CSS grid auto-places it in row 1 (col-span-2).
  // The other two cards fall into row 2 (col-span-1 each).
  const sorted = [
    berita.find((b) => b.id === selectedId)!,
    ...berita.filter((b) => b.id !== selectedId),
  ];

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

        {/* Grid — gridTemplateRows pins the total height to a constant value.
            Cards animate position+size with `layout`; footer never moves.        */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.2 }}
          className="grid grid-cols-2 gap-4"
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
                {/* Image — nested layout syncs height animation with the card's layout animation */}
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

                  {/* Badge fades via opacity — no layout impact */}
                  <motion.span
                    animate={{ opacity: featured ? 1 : 0 }}
                    transition={{ duration: 0.22, delay: featured ? 0.2 : 0 }}
                    className="absolute bottom-3 left-3 text-[10px] font-semibold px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-slate-600 pointer-events-none select-none"
                  >
                    Sedang Ditampilkan
                  </motion.span>
                </motion.div>

                {/* Content area — flex-1 fills the row height remainder.
                    overflow-hidden clips any internal layout changes so they
                    never propagate to the grid or the page.                   */}
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

                  {/* Description: h-0 in compact so it takes no space (clipped by parent
                      overflow-hidden). Switches to flex-1 in featured to fill remaining
                      content height. Opacity cross-fades independently.               */}
                  <motion.p
                    animate={{ opacity: featured ? 1 : 0 }}
                    transition={{ duration: 0.3, delay: featured ? 0.15 : 0 }}
                    className={`text-slate-500 text-sm leading-relaxed overflow-hidden ${
                      featured ? "flex-1" : "h-0"
                    }`}
                  >
                    {item.ringkasan}
                  </motion.p>

                  {/* Hint: h-0 in featured (no space), visible in compact */}
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
