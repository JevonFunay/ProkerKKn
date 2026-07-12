"use client";

import { motion } from "framer-motion";
import { MapPin, Users, Home, Anchor, ArrowLeft, Navigation } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// pb param: references CID 0x2e7bddcd63ba8b79:0x59c29dad64bd3216
// → Google Maps renders administrative boundary outline for this place
const MAPS_EMBED =
  "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4000!2d110.9836164!3d-8.2189295!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7bddcd63ba8b79%3A0x59c29dad64bd3216!2sKarangnongko%2C%20Watukarung%2C%20Kec.%20Pringkuku%2C%20Kabupaten%20Pacitan%2C%20Jawa%20Timur!5e1!3m2!1sid!2sid!4v1751980000000!5m2!1sid!2sid";

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
      "Dusun Karangnongko terletak di kawasan pesisir selatan Pulau Jawa yang berada di atas zona aktif lempeng tektonik Indo-Australia, menjadikan wilayah ini rentan terhadap bencana gempa bumi, namun untuk tsunami itu tidak terlalu rentan karena mengingat dusun ini berada di antara gunung jadi sulit untuk sampai. Topografi wilayah berupa perbukitan dan lahan pesisir sempit yang dipenuhi oleh batu karang alami.",
  },
  {
    title: "Mata Pencaharian",
    content:
      "Mayoritas penduduk bermata pencaharian sebagai nelayan tangkap. Pertanian menjadi usaha sampingan, meski kerap terkendala serangan hama monyet dan babi hutan. Beberapa warga juga mengandalkan usaha warung dan jasa.",
  },
  {
    title: "UMKM & Potensi Lokal",
    content:
      "Salah satu produk unggulan Dusun Karangnongko adalah rengginang beras ketan — makanan tradisional yang diproduksi secara rumahan.",
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

              <div className="w-full rounded-3xl overflow-hidden border border-slate-200 shadow-sm" style={{ height: 420 }}>
                <iframe
                  title="Peta Dusun Karangnongko"
                  src={MAPS_EMBED}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
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
