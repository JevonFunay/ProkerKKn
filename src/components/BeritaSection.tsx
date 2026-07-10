"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CalendarDays, ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface BeritaItem {
  id: number;
  judul: string;
  tanggal: string;
  kategori: string;
  kategoriColor: string;
  ringkasan: string;
  image: string;
  href?: string;
}

const berita: BeritaItem[] = [
  // --- Proker yang sudah berjalan ---
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
    judul: "Edukasi Keuangan Metode Amplop Disambut Positif Ibu-Ibu PKK",
    tanggal: "8 Juli 2026",
    kategori: "Laporan Kegiatan",
    kategoriColor: "bg-primary-100 text-primary-700",
    ringkasan:
      "Ibu-ibu PKK Dusun Karangnongko antusias mengikuti pelatihan pengelolaan keuangan rumah tangga dengan metode amplop — teknik sederhana yang memisahkan pos pengeluaran secara fisik tanpa memerlukan aplikasi digital.",
    image: "/ProkerReynaKelpin.webp",
  },
  {
    id: 3,
    judul: "Pelatihan Kualitas Pelayanan UMKM: Pelaku Usaha Dusun Sambut Antusias",
    tanggal: "13 Juli 2026",
    kategori: "Laporan Kegiatan",
    kategoriColor: "bg-primary-100 text-primary-700",
    ringkasan:
      "Kelpin Saktara memandu sesi pelatihan pelayanan prima bagi pelaku warung dan UMKM Dusun Karangnongko. Peserta belajar teknik komunikasi, etika melayani, dan strategi menangani keluhan pelanggan secara efektif.",
    image: "/ProkerReynaKelpin.webp",
  },
];

const featured = berita[0];
const rest = berita.slice(1);

export default function BeritaSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-60px" });

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
            Berita &{" "}
            <span className="text-slate-300">Dokumentasi</span>
          </h2>
        </motion.div>

        {/* Featured article */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.15 }}
          className="mb-8"
        >
          <FeaturedCard item={featured} />
        </motion.div>

        {/* Grid */}
        <div ref={gridRef}>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
            initial="hidden"
            animate={gridInView ? "visible" : "hidden"}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
            }}
          >
            {rest.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}

function FeaturedCard({ item }: { item: BeritaItem }) {
  const Wrapper = item.href ? Link : "div";
  const wrapperProps = item.href ? { href: item.href } : {};

  return (
    // @ts-expect-error — dynamic tag typing
    <Wrapper
      {...wrapperProps}
      className="group cursor-pointer block rounded-3xl overflow-hidden bg-white border border-slate-200 hover:border-primary-300 hover:shadow-2xl hover:shadow-primary-900/8 transition-all duration-300"
    >
      <div className="grid grid-cols-1 md:grid-cols-5">
        {/* Image */}
        <div className="md:col-span-2 relative overflow-hidden h-56 md:h-auto min-h-[260px] bg-slate-100">
          <img
            src={item.image}
            alt={item.judul}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent" />
          <span className={`absolute top-4 left-4 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${item.kategoriColor}`}>
            {item.kategori}
          </span>
        </div>

        {/* Content */}
        <div className="md:col-span-3 p-8 lg:p-10 flex flex-col">
          <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-4">
            <CalendarDays size={12} />
            {item.tanggal}
          </div>

          <h3 className="font-black text-xl sm:text-2xl lg:text-[1.6rem] text-slate-900 mb-4 leading-snug group-hover:text-primary-700 transition-colors">
            {item.judul}
          </h3>

          <p className="text-slate-500 leading-relaxed text-sm sm:text-base mb-8 flex-1">
            {item.ringkasan}
          </p>

          {item.href && (
            <span className="self-start flex items-center gap-1.5 text-sm font-bold text-primary-700 group-hover:text-primary-800 transition-colors">
              Baca Selengkapnya
              <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>
          )}
        </div>
      </div>
    </Wrapper>
  );
}

function NewsCard({ item }: { item: BeritaItem }) {
  const Wrapper = item.href ? Link : "div";
  const wrapperProps = item.href ? { href: item.href } : {};

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.45 } },
      }}
    >
      {/* @ts-expect-error — dynamic tag typing */}
      <Wrapper
        {...wrapperProps}
        className="group cursor-pointer block rounded-2xl overflow-hidden bg-white border border-slate-200 hover:border-primary-300 hover:shadow-lg hover:shadow-primary-900/10 transition-all duration-300 h-full flex flex-col"
      >
        {/* Image */}
        <div className="relative overflow-hidden h-40 bg-slate-100 flex-shrink-0">
          <img
            src={item.image}
            alt={item.judul}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <span className={`absolute top-2.5 left-2.5 text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${item.kategoriColor}`}>
            {item.kategori}
          </span>
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col flex-1">
          <div className="flex items-center gap-1.5 text-[10px] text-slate-400 mb-2">
            <CalendarDays size={10} />
            {item.tanggal}
          </div>

          <h3 className="font-bold text-sm text-slate-900 group-hover:text-primary-700 transition-colors leading-snug line-clamp-3 flex-1 mb-3">
            {item.judul}
          </h3>

          <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 mb-3">
            {item.ringkasan}
          </p>

          <div className="flex items-center justify-end border-t border-slate-100 pt-2.5">
            <span className="text-[10px] font-semibold text-primary-600 flex items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
              Selengkapnya <ArrowUpRight size={10} />
            </span>
          </div>
        </div>
      </Wrapper>
    </motion.div>
  );
}
