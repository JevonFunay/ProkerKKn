"use client";

import { motion } from "framer-motion";
import { MapPin, Users, Home, Anchor, ArrowLeft, Navigation } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Leaflet mengakses `window`, jadi hanya dirender di client
const DusunMap = dynamic(() => import("@/components/DusunMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-slate-100 text-slate-400 text-sm">
      Memuat peta…
    </div>
  ),
});

const infoCards = [
  {
    icon: MapPin,
    label: "Lokasi",
    value: "Desa Watukarung, Kec. Pringkuku, Kab. Pacitan",
    color: "bg-emerald-50 text-emerald-700",
  },
  {
    icon: Home,
    label: "Kepala Keluarga",
    value: "69 KK",
    color: "bg-teal-50 text-teal-700",
  },
  {
    icon: Users,
    label: "Jumlah Jiwa",
    value: "±169 Jiwa",
    color: "bg-amber-50 text-amber-700",
  },
  {
    icon: Anchor,
    label: "Mata Pencaharian",
    value: "Nelayan & Berkebun",
    color: "bg-orange-50 text-orange-700",
  },
];

const infoSections = [
  {
    title: "Kondisi Geografis",
    content:
      "Karangnongko merupakan satu dari tujuh dusun di Desa Watukarung, bersama Dusun Tekil, Dokgarut, Sempon, Kenul, Ketro, dan Gumulharjo. Desa Watukarung memiliki luas sekitar 582,6 hektare dan berbatasan langsung dengan Samudera Hindia di sisi selatan, berjarak kurang lebih 28 km dari pusat Kota Pacitan. Topografi wilayah berupa perbukitan karst dan lahan pesisir sempit yang dipenuhi batu karang alami. Kawasan ini berada di atas zona subduksi lempeng Indo-Australia sehingga rawan gempa bumi, namun permukiman dusun yang diapit perbukitan relatif lebih terlindung dari terjangan tsunami dibandingkan pesisir terbuka.",
  },
  {
    title: "Mata Pencaharian",
    content:
      "Mayoritas penduduk bermata pencaharian sebagai nelayan tangkap dengan hasil laut berupa tuna, cakalang, hingga lobster. Pertanian menjadi usaha sampingan, meski kerap terkendala serangan hama monyet dan babi hutan. Seiring berkembangnya pariwisata, sebagian warga juga mengelola warung, homestay, dan jasa bagi wisatawan.",
  },
  {
    title: "Pariwisata & UMKM",
    content:
      "Desa Watukarung dikenal hingga mancanegara berkat Pantai Watukarung, spot selancar kelas dunia dengan ombak yang dapat mencapai enam meter. Di sekitarnya terdapat Pantai Kasap yang dijuluki Raja Ampat-nya Pacitan serta wisata Sungai Cokel. Dari sisi UMKM, produk unggulan Dusun Karangnongko adalah rengginang beras ketan yang diproduksi secara rumahan.",
  },
  {
    title: "Mitigasi Bencana",
    content:
      "Sebagai wilayah rawan bencana, Dusun Karangnongko membutuhkan sistem mitigasi gempa yang memadai. Program KKN Kelompok 44 UKDW turut berfokus pada penyuluhan dan pembuatan Tas Siaga Bencana.",
  },
];

export default function DesaContent() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#faf9f6] pt-20 lg:pt-24">

        {/* Page header */}
        <section className="bg-white border-b border-slate-200 py-10 lg:py-14 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-50 rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none opacity-60" />

          <div className="relative max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                href="/#profil"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-primary-600 transition-colors mb-6 group"
              >
                <ArrowLeft size={13} className="group-hover:-translate-x-0.5 transition-transform" />
                Kembali ke Beranda
              </Link>

              <div className="flex items-center gap-3 mb-3">
                <span className="w-2 h-2 rounded-full bg-primary-500 flex-shrink-0" />
                <span className="text-xs font-bold text-primary-700 tracking-[0.22em] uppercase">
                  Profil Wilayah
                </span>
              </div>
              <h1 className="font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight">
                Dusun{" "}
                <span className="text-slate-300">Karangnongko</span>
              </h1>
              <p className="text-slate-500 mt-3 text-sm">
                Desa Watukarung · Kecamatan Pringkuku · Kabupaten Pacitan · Jawa Timur
              </p>
            </motion.div>
          </div>
        </section>

        {/* Info cards */}
        <section className="py-10">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-3"
            >
              {infoCards.map((card) => {
                const Icon = card.icon;
                return (
                  <div key={card.label} className="bg-white border border-slate-200 rounded-2xl p-5">
                    <div className={`w-8 h-8 rounded-xl ${card.color} bg-opacity-20 flex items-center justify-center mb-3`}>
                      <Icon size={15} />
                    </div>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">{card.label}</p>
                    <p className="text-sm font-bold text-slate-800 leading-snug">{card.value}</p>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Google Maps */}
        <section className="pb-10">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Navigation size={13} className="text-primary-600" />
                <span className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">Peta Lokasi</span>
              </div>

              <div className="w-full rounded-3xl overflow-hidden border border-slate-200 shadow-sm relative z-0" style={{ height: 420 }}>
                <DusunMap />
              </div>

              {/* Tombol buka di Google Maps */}
              <div className="mt-3 flex justify-end">
                <a
                  href="https://maps.app.goo.gl/E2bttjCJmwN5L3o96"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white border border-slate-200 hover:border-primary-300 hover:bg-primary-50 text-slate-600 hover:text-primary-700 text-xs font-semibold px-4 py-2.5 rounded-xl transition-all duration-200 shadow-sm"
                >
                  <Navigation size={13} />
                  Buka di Google Maps
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Info sections */}
        <section className="pb-20">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {infoSections.map((section, i) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.25 + i * 0.07 }}
                  className="bg-white border border-slate-200 rounded-2xl p-6"
                >
                  <h3 className="font-bold text-sm text-slate-900 mb-3">{section.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{section.content}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
