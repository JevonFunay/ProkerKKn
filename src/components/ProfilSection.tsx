"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, ClipboardList, Users, Anchor, Calendar } from "lucide-react";
import { statsData } from "@/data/content";

const iconMap = {
  ClipboardList,
  Users,
  Anchor,
  Calendar,
};

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

export default function ProfilSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="profil" className="py-20 lg:py-28 bg-[#0f0f0f] relative overflow-hidden">
      {/* Subtle top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/15 rounded-full px-4 py-2 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-400" />
            <span className="text-primary-400 font-bold text-xs tracking-widest uppercase">
              Tentang Kami
            </span>
          </div>
          <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Profil <span className="gradient-text">KKN Kelompok 44</span>
          </h2>
          <div className="flex items-center justify-center gap-1.5 mt-2">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary-600/50" />
            <span className="w-1.5 h-1.5 rounded-full bg-primary-500/60" />
            <span className="w-2 h-2 rounded-full bg-primary-400/80" />
            <span className="w-1.5 h-1.5 rounded-full bg-primary-500/60" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary-600/50" />
          </div>
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
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden rounded-2xl"
                style={{ boxShadow: "0 0 0 1px rgba(255,255,255,0.08), 0 24px 60px rgba(0,0,0,0.6)" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=800&h=600&fit=crop"
                  alt="Aktivitas posko KKN"
                  className="w-full h-80 lg:h-[28rem] object-cover transition-transform duration-500 hover:scale-105"
                />
              </motion.div>
              {/* Decorative corner accents */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary-500/10 rounded-2xl -z-10" />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-amber-500/10 rounded-2xl -z-10" />

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="absolute bottom-6 left-6 bg-black/70 backdrop-blur-md border border-white/10 rounded-xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary-500/20 flex items-center justify-center">
                    <MapPin size={20} className="text-primary-400" />
                  </div>
                  <div>
                    <p className="text-xs text-white/50 font-medium">Lokasi</p>
                    <p className="text-sm font-bold text-white">RT 02 / RW 01</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <h3 className="font-bold text-2xl sm:text-3xl text-white mb-6">
              Penguatan Mitigasi Bencana & Digitalisasi Pesisir
            </h3>
            <p className="text-white/60 leading-relaxed mb-6">
              Kuliah Kerja Nyata (KKN) Kelompok 44 dilaksanakan di Dusun
              Karangnongko, Desa Watukarung, Kec. Pringkuku, Kabupaten Pacitan.
              Mengingat lokasi dusun yang berada di pesisir selatan, fokus utama
              kami adalah peningkatan kesiapsiagaan mitigasi bencana gempa bumi.
              Selain itu, kami juga melakukan pemetaan digital dan pemberdayaan
              masyarakat untuk menunjang potensi desa.
            </p>
            <p className="text-white/60 leading-relaxed mb-8">
              Selama satu bulan penuh, tim melaksanakan 7 program kerja yang
              mencakup edukasi kebencanaan, digitalisasi pemetaan, pemberdayaan
              ekonomi kreatif, serta promosi kesehatan masyarakat.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {statsData.map((stat, i) => {
                const Icon = iconMap[stat.icon];
                const cardStyle = [
                  { icon: "bg-primary-500/20 text-primary-400", val: "text-primary-400" },
                  { icon: "bg-blue-500/20 text-blue-400",       val: "text-blue-400"    },
                  { icon: "bg-amber-500/20 text-amber-400",     val: "text-white"       },
                  { icon: "bg-rose-500/20 text-rose-400",       val: "text-white"       },
                ][i];
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                    className="p-4 rounded-xl bg-white/[0.05] border border-white/[0.08]"
                  >
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center mb-3 ${cardStyle.icon}`}>
                      <Icon size={18} />
                    </div>
                    {i === 0 ? (
                      <p className={`text-3xl font-black ${cardStyle.val} mb-0.5 leading-none`}>
                        <CountUp target={7} />
                      </p>
                    ) : i === 1 ? (
                      <p className={`text-3xl font-black ${cardStyle.val} mb-0.5 leading-none`}>
                        ±<CountUp target={50} />
                      </p>
                    ) : (
                      <p className={`text-sm font-bold ${cardStyle.val} mb-0.5 leading-snug`}>
                        {stat.value}
                      </p>
                    )}
                    <p className="text-xs text-white/40 font-medium">{stat.label}</p>
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
