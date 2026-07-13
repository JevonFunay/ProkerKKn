"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, ClipboardList, Anchor, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";
import { statsData } from "@/data/content";

const iconMap: Record<string, React.ReactNode> = {
  Users:         <Users size={18} />,
  ClipboardList: <ClipboardList size={18} />,
  Anchor:        <Anchor size={18} />,
  MapPin:        <MapPin size={18} />,
};

export default function ProfilDusunSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="dusun" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20" ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-2 h-2 rounded-full bg-primary-500 flex-shrink-0" />
            <span className="text-xs font-bold text-primary-700 tracking-[0.22em] uppercase">
              Tentang Dusun
            </span>
            <div className="h-px flex-1 bg-slate-200" />
          </div>
          <h2 className="font-black text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight">
            Mengenal{" "}
            <span className="text-slate-300">Karangnongko</span>
          </h2>
          <p className="mt-4 text-slate-500 leading-relaxed text-base sm:text-lg max-w-2xl">
            Dusun Karangnongko terletak di Desa Watukarung, Kecamatan Pringkuku, Kabupaten Pacitan,
            dengan mayoritas penduduk bermata pencaharian sebagai nelayan.
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {statsData.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.07 }}
              className="p-5 bg-slate-50 border border-slate-100 rounded-2xl flex flex-col gap-3"
            >
              <div className="w-9 h-9 rounded-xl bg-primary-100 flex items-center justify-center text-primary-700 flex-shrink-0">
                {iconMap[stat.icon]}
              </div>
              <div>
                <p className="font-black text-slate-900 text-lg sm:text-xl leading-tight">
                  {stat.value}
                </p>
                <p className="text-xs text-slate-400 font-medium mt-0.5 leading-snug">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.45 }}
        >
          <Link
            href="/desa"
            className="group inline-flex items-center gap-2 bg-primary-700 hover:bg-primary-800 text-white font-semibold text-sm px-6 py-3.5 rounded-2xl transition-all duration-300 shadow-md shadow-primary-900/15 hover:shadow-lg"
          >
            Lihat Profil Dusun Lengkap
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-200" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
