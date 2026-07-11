"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { CalendarDays, ChevronLeft, ChevronRight, Clock, X } from "lucide-react";

interface BeritaItem {
  id: number;
  judul: string;
  hari: string;
  tanggal: string;
  jam: string;
  lokasi: string;
  kategori: string;
  kategoriColor: string;
  penjelasan: string;
  image: string;
}

const berita: BeritaItem[] = [
  {
    id: 1,
    judul: "Pelatihan Batik Jumputan Teknik Shibori Berhasil Digelar untuk Ibu-Ibu PKK",
    hari: "Rabu",
    tanggal: "15 Juli 2026",
    jam: "09.00 – 12.00 WIB",
    lokasi: "Balai Dusun Karangnongko",
    kategori: "Laporan Kegiatan",
    kategoriColor: "bg-primary-100 text-primary-700",
    penjelasan:
      "Ibu-ibu PKK Dusun Karangnongko mengikuti pelatihan pewarnaan kain teknik Shibori yang dipandu Lidwina Cahya. Peserta antusias mempraktikkan teknik ikat, lipat, dan celup untuk menghasilkan kain bermotif indah bernilai jual tinggi. Kegiatan ini merupakan bagian dari program pemberdayaan ekonomi kreatif yang bertujuan membuka peluang wirausaha bagi ibu rumah tangga di lingkungan desa.",
    image: "/ProkerWina.webp",
  },
  {
    id: 2,
    judul: "Posyandu Lansia & Cek Kesehatan Gratis Disambut Antusias Warga",
    hari: "Kamis",
    tanggal: "9 Juli 2026",
    jam: "08.00 – 11.00 WIB",
    lokasi: "Balai Dusun Karangnongko",
    kategori: "Laporan Kegiatan",
    kategoriColor: "bg-primary-100 text-primary-700",
    penjelasan:
      "Elisabeth Liliana bersama tim Kelompok 44 menggelar senam anti-hipertensi dan cek kesehatan gratis untuk lansia Dusun Karangnongko. Kegiatan mencakup pemeriksaan tekanan darah, gula darah, serta edukasi pola hidup sehat guna mencegah komplikasi hipertensi. Warga lanjut usia menyambut program ini dengan antusias dan berharap kegiatan serupa dapat rutin dilaksanakan.",
    image: "/prokerlili2.webp",
  },
  {
    id: 3,
    judul: "Dua Program Berjalan Bersamaan: Edukasi Keuangan & Edukasi QRIS untuk UMKM",
    hari: "Rabu",
    tanggal: "8 Juli 2026",
    jam: "09.00 – 12.00 WIB",
    lokasi: "Balai Dusun Karangnongko",
    kategori: "Laporan Kegiatan",
    kategoriColor: "bg-primary-100 text-primary-700",
    penjelasan:
      "Reynathania Nonie dan Kelpin Saktara Tirta menyelenggarakan dua program dalam satu sesi: edukasi pengelolaan keuangan metode amplop dan sosialisasi QRIS untuk UMKM dan masyarakat. Ibu-ibu PKK dan pelaku usaha Dusun Karangnongko antusias mengikuti keduanya. Metode amplop membantu warga memisahkan pos pengeluaran secara fisik, sementara edukasi QRIS memperkenalkan cara bertransaksi digital yang praktis menggunakan satu kode QR untuk berbagai aplikasi pembayaran.",
    image: "/prokerreyna.webp",
  },
];

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%" }),
  center: { x: 0 },
  exit:  (dir: number) => ({ x: dir > 0 ? "-100%" : "100%" }),
};
const SLIDE_TRANSITION = { type: "spring", damping: 32, stiffness: 280, mass: 0.9 } as const;

export default function BeritaSection() {
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState(1);
  const [modal, setModal] = useState<BeritaItem | null>(null);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const go = (next: number) => {
    setDir(next > idx ? 1 : -1);
    setIdx(next);
  };
  const prev = () => go((idx - 1 + berita.length) % berita.length);
  const next = () => go((idx + 1) % berita.length);

  // Lock body scroll when modal open
  useEffect(() => {
    document.body.classList.toggle("modal-open", !!modal);
    return () => document.body.classList.remove("modal-open");
  }, [modal]);

  // Close modal on Escape
  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === "Escape") setModal(null); };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, []);

  return (
    <>
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

          {/* Card carousel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Fixed-height card container */}
            <div
              className="relative overflow-hidden rounded-2xl shadow-sm border border-slate-200 cursor-pointer"
              onClick={() => setModal(berita[idx])}
            >
              <AnimatePresence initial={false} custom={dir}>
                <motion.div
                  key={idx}
                  custom={dir}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={SLIDE_TRANSITION}
                  className="absolute inset-0 bg-white flex flex-col"
                >
                  {/* Photo */}
                  <div className="relative overflow-hidden bg-slate-100 h-52 sm:h-64 flex-shrink-0">
                    <img
                      src={berita[idx].image}
                      alt={berita[idx].judul}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <span className={`absolute top-3 left-3 text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${berita[idx].kategoriColor}`}>
                      {berita[idx].kategori}
                    </span>
                  </div>

                  {/* Body — fixed height, no description */}
                  <div className="h-32 overflow-hidden flex flex-col justify-between p-4 sm:p-5">
                    <div>
                      <div className="flex items-center gap-1.5 text-slate-400 text-xs mb-2">
                        <CalendarDays size={11} />
                        {berita[idx].hari}, {berita[idx].tanggal}
                      </div>
                      <h3 className="font-black text-slate-900 text-base sm:text-lg leading-snug line-clamp-2">
                        {berita[idx].judul}
                      </h3>
                    </div>
                    <p className="text-[11px] text-primary-600 font-semibold">
                      Ketuk untuk baca selengkapnya →
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Invisible spacer drives container height */}
              <div className="invisible flex flex-col" aria-hidden>
                <div className="h-52 sm:h-64 flex-shrink-0" />
                <div className="h-32" />
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-4 px-1">
              <button
                onClick={(e) => { e.stopPropagation(); prev(); }}
                className="w-9 h-9 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-500 hover:border-primary-300 hover:text-primary-600 transition-colors cursor-pointer"
                aria-label="Berita sebelumnya"
              >
                <ChevronLeft size={16} />
              </button>

              <div className="flex gap-2">
                {berita.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => go(i)}
                    className={`rounded-full transition-all duration-300 cursor-pointer ${
                      i === idx
                        ? "w-5 h-2 bg-primary-500"
                        : "w-2 h-2 bg-slate-300 hover:bg-slate-400"
                    }`}
                    aria-label={`Berita ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={(e) => { e.stopPropagation(); next(); }}
                className="w-9 h-9 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-500 hover:border-primary-300 hover:text-primary-600 transition-colors cursor-pointer"
                aria-label="Berita berikutnya"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Berita Detail Modal ── */}
      <AnimatePresence>
        {modal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-[100] flex items-end md:items-center justify-center"
            role="dialog"
            aria-modal="true"
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-slate-900/55 backdrop-blur-sm"
              onClick={() => setModal(null)}
            />

            {/* Panel */}
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="relative z-10 w-full max-w-2xl max-h-[94vh] md:max-h-[88vh] bg-white border border-slate-200 rounded-t-3xl md:rounded-3xl overflow-hidden flex flex-col md:mx-4 shadow-2xl shadow-slate-900/25"
            >
              {/* Drag handle mobile */}
              <div className="md:hidden flex justify-center pt-3 pb-1 flex-shrink-0">
                <div className="w-10 h-1 rounded-full bg-slate-200" />
              </div>

              {/* Close button */}
              <button
                onClick={() => setModal(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/90 hover:bg-slate-100 border border-slate-200 rounded-full flex items-center justify-center hover:rotate-90 hover:scale-110 transition-all duration-300 cursor-pointer shadow-sm"
                aria-label="Tutup"
              >
                <X size={18} className="text-slate-500" />
              </button>

              {/* Scrollable content */}
              <div className="overflow-y-auto overscroll-contain flex-1">

                {/* Hero image */}
                <div className="relative overflow-hidden flex-shrink-0" style={{ height: 220 }}>
                  <img
                    src={modal.image}
                    alt={modal.judul}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/70 bg-black/30 backdrop-blur-sm px-2.5 py-1 rounded-full">
                      Laporan Kegiatan
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <span className={`inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full mb-2 ${modal.kategoriColor}`}>
                      {modal.kategori}
                    </span>
                    <h2 className="font-black text-xl sm:text-2xl text-white leading-tight">
                      {modal.judul}
                    </h2>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-7 space-y-5">

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-slate-500 leading-relaxed text-sm sm:text-base"
                  >
                    {modal.penjelasan}
                  </motion.p>

                  <div className="h-px bg-slate-100" />

                  {/* Waktu pelaksanaan */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.18 }}
                  >
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-3">
                      Waktu Pelaksanaan
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <InfoCard
                        icon={<CalendarDays size={15} />}
                        label="Hari"
                        value={modal.hari}
                      />
                      <InfoCard
                        icon={<CalendarDays size={15} />}
                        label="Tanggal"
                        value={modal.tanggal}
                      />
                      <InfoCard
                        icon={<Clock size={15} />}
                        label="Jam"
                        value={modal.jam}
                      />
                    </div>
                  </motion.div>

                  {/* Close CTA */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.26 }}
                    className="pt-1 pb-2"
                  >
                    <button
                      onClick={() => setModal(null)}
                      className="w-full inline-flex items-center justify-center gap-2 bg-primary-700 hover:bg-primary-800 text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-300 shadow-md shadow-primary-900/15 cursor-pointer"
                    >
                      Tutup
                    </button>
                  </motion.div>

                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function InfoCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3 p-3.5 bg-slate-50 border border-slate-100 rounded-xl">
      <div className="w-8 h-8 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0 mt-0.5 text-primary-700">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{label}</p>
        <p className="text-sm font-semibold text-slate-800 mt-0.5 leading-snug">{value}</p>
      </div>
    </div>
  );
}
