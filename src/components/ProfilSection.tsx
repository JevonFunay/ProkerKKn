"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, ClipboardList, Users, Anchor, Calendar } from "lucide-react";
import { statsData } from "@/data/content";

const iconMap = { ClipboardList, Users, Anchor, Calendar };

function CountUp({ target, duration = 1.2 }: { target: number; duration?: number }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start: number | null = null;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / (duration * 1000), 1);
      setValue(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
      else setValue(target);
    };
    requestAnimationFrame(step);
  }, [isInView, target, duration]);

  return <span ref={ref}>{value}</span>;
}

const tags = ["Mitigasi Gempa", "Pemetaan Digital", "Batik Shibori", "Senam Lansia", "Literasi Finansial"];

export default function ProfilSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="profil" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Top rule */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20 relative" ref={ref}>

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-2 h-2 rounded-full bg-primary-500 flex-shrink-0" />
            <span className="text-xs font-bold text-primary-700 tracking-[0.22em] uppercase">
              Tentang Kami
            </span>
            <div className="h-px flex-1 bg-slate-200" />
          </div>
          <h2 className="font-black text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight">
            Profil KKN{" "}
            <span className="text-slate-300">Kelompok 44</span>
          </h2>
        </motion.div>

        {/* Stats strip — gap-px dividers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 rounded-2xl overflow-hidden border border-slate-200 mb-20"
        >
          {statsData.map((stat, i) => {
            const Icon = iconMap[stat.icon];
            return (
              <div key={stat.label} className="bg-white p-6 lg:p-8">
                <div className="mb-3">
                  <Icon size={16} className="text-slate-400" />
                </div>
                {i === 0 ? (
                  <p className="text-4xl lg:text-5xl font-black text-primary-700 leading-none mb-2">
                    <CountUp target={7} />
                  </p>
                ) : i === 1 ? (
                  <p className="text-4xl lg:text-5xl font-black text-primary-700 leading-none mb-2">
                    ±<CountUp target={50} />
                  </p>
                ) : (
                  <p className="text-base lg:text-lg font-black text-slate-900 leading-snug mb-2">
                    {stat.value}
                  </p>
                )}
                <p className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="relative order-2 lg:order-1"
          >
            <div className="overflow-hidden rounded-3xl shadow-xl shadow-slate-200/80 border border-slate-100">
              <img
                src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=800&h=600&fit=crop"
                alt="Aktivitas KKN"
                className="w-full h-72 lg:h-[380px] object-cover"
              />
              {/* Overlay strip bottom */}
              <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white/80 to-transparent" />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.75 }}
              className="absolute -bottom-5 -right-3 lg:-right-6 bg-white border border-slate-100 rounded-2xl p-4 shadow-lg"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-primary-100 flex items-center justify-center flex-shrink-0">
                  <MapPin size={15} className="text-primary-700" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">
                    Lokasi Posko
                  </p>
                  <p className="text-sm font-bold text-slate-800">Dusun Karangnongko</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="order-1 lg:order-2"
          >
            <h3 className="font-bold text-2xl sm:text-3xl text-slate-900 mb-6 leading-snug">
              Penguatan Mitigasi Bencana &{" "}
              <span className="text-slate-400">Digitalisasi Pesisir</span>
            </h3>
            <div className="space-y-4 text-slate-500 leading-relaxed text-sm sm:text-base">
              <p>
                KKN Kelompok 44 dilaksanakan di Dusun Karangnongko, Desa
                Watukarung, Kec. Pringkuku, Kabupaten Pacitan — wilayah pesisir
                selatan Jawa yang rentan terhadap bencana gempa bumi dan tsunami.
              </p>
              <p>
                Selama satu bulan penuh, tim melaksanakan 7 program kerja
                mencakup edukasi kebencanaan, digitalisasi pemetaan, pemberdayaan
                ekonomi kreatif, literasi keuangan, serta promosi kesehatan
                masyarakat.
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-8">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-semibold px-3 py-1.5 rounded-full border border-slate-200 text-slate-600 bg-slate-50 hover:border-primary-300 hover:text-primary-700 hover:bg-primary-50 transition-colors duration-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
