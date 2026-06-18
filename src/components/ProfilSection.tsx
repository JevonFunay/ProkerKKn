"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, ClipboardList, Users, Anchor, Calendar } from "lucide-react";
import { statsData } from "@/data/content";

const iconMap = {
  ClipboardList,
  Users,
  Anchor,
  Calendar,
};

const iconColors = [
  "bg-primary-100 text-primary-600",
  "bg-blue-100 text-blue-600",
  "bg-amber-100 text-amber-600",
  "bg-rose-100 text-rose-600",
];

export default function ProfilSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="profil" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary-600 font-semibold text-sm tracking-widest uppercase mb-3">
            Tentang Kami
          </span>
          <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 mb-4">
            Profil <span className="gradient-text">KKN Kelompok 44</span>
          </h2>
          <div className="w-16 h-1 bg-primary-500 rounded-full mx-auto" />
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=800&h=600&fit=crop"
                alt="Aktivitas posko KKN"
                className="w-full h-80 lg:h-[28rem] object-cover rounded-2xl shadow-xl"
              />
              {/* Decorative accent */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary-100 rounded-2xl -z-10" />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-amber-100 rounded-2xl -z-10" />

              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center">
                    <MapPin size={20} className="text-primary-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Lokasi</p>
                    <p className="text-sm font-bold text-slate-900">
                      RT 02 / RW 01
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <h3 className="font-bold text-2xl sm:text-3xl text-slate-900 mb-6">
              Penguatan Mitigasi Bencana & Digitalisasi Pesisir
            </h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              KKN Kelompok 44 Universitas Kristen Duta Wacana berfokus pada{" "}
              <strong className="text-slate-800">
                penguatan mitigasi bencana gempa bumi adaptif
              </strong>{" "}
              dan{" "}
              <strong className="text-slate-800">
                penyusunan basis data infrastruktur pesisir
              </strong>{" "}
              di Dusun Karangnongko, Pacitan. Program dirancang berbasis kebutuhan
              riil masyarakat dengan pendekatan partisipatif.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              Selama satu bulan penuh, tim melaksanakan 7 program kerja yang
              mencakup edukasi kebencanaan, digitalisasi pemetaan, pemberdayaan
              ekonomi kreatif, serta promosi kesehatan masyarakat.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {statsData.map((stat, i) => {
                const Icon = iconMap[stat.icon];
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                    className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl"
                  >
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${iconColors[i]}`}
                    >
                      <Icon size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">{stat.label}</p>
                      <p className="text-sm font-bold text-slate-900">
                        {stat.value}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
