"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CalendarDays, UserCheck, ArrowUpRight } from "lucide-react";
import ProgramCard from "./ProgramCard";
import TiltCard from "./TiltCard";
import { programKerja } from "@/data/content";
import type { ProgramData } from "@/data/content";

const featuredGradient = "from-orange-500 to-orange-700";

// Module-level constants = stable references across re-renders
// Framer Motion never sees these as "changed", preventing animation resets
const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

const cardVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.45 } },
};

interface ProgramSectionProps {
  onCardClick: (data: ProgramData) => void;
}

export default function ProgramSection({ onCardClick }: ProgramSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  // Separate ref for the card grid so it animates when the grid itself is in view
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-60px" });
  const featured = programKerja[0];
  const rest = programKerja.slice(1);

  return (
    <section id="program" className="py-24 lg:py-32 bg-[#faf9f6] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20 relative" ref={ref}>

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-2 h-2 rounded-full bg-accent-500 flex-shrink-0" />
            <span className="text-xs font-bold text-accent-500 tracking-[0.22em] uppercase">
              Realisasi Aksi
            </span>
            <div className="h-px flex-1 bg-slate-200" />
          </div>
          <h2 className="font-black text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight">
            Program{" "}
            <span className="text-slate-300">Kerja</span>
          </h2>
        </motion.div>

        {/* ── Featured: Proker Utama ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.2 }}
          className="mb-12"
        >
          <TiltCard>
          <div
            className="group cursor-pointer rounded-3xl overflow-hidden bg-white border border-slate-200 hover:border-primary-300 hover:shadow-2xl hover:shadow-primary-900/8 transition-all duration-300"
            onClick={() => onCardClick(featured)}
          >
            {/* Top gradient strip */}
            <div className={`h-1.5 bg-gradient-to-r ${featuredGradient}`} />

            <div className="grid grid-cols-1 md:grid-cols-5">
              {/* Image */}
              <div className="md:col-span-2 relative overflow-hidden h-56 md:h-auto min-h-[260px] bg-slate-100">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ willChange: "transform" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

                {/* Number badge */}
                <div className="absolute top-4 left-4 w-9 h-9 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center border border-white/60 shadow-sm">
                  <span className="text-slate-700 font-black text-xs">01</span>
                </div>

                {/* Proker Utama badge */}
                <div className="absolute top-4 right-4 bg-primary-700 text-white text-[11px] font-bold px-3 py-1.5 rounded-full shadow-md">
                  Proker Utama
                </div>

                {/* Category badge */}
                <div className={`absolute bottom-4 left-4 text-xs font-bold px-3 py-1.5 rounded-full bg-gradient-to-r ${featuredGradient} text-white shadow`}>
                  {featured.category}
                </div>
              </div>

              {/* Content */}
              <div className="md:col-span-3 p-8 lg:p-10 flex flex-col">
                <h3 className="font-black text-xl sm:text-2xl lg:text-[1.6rem] text-slate-900 mb-4 leading-snug group-hover:text-primary-700 transition-colors">
                  {featured.title}
                </h3>

                <p className="text-slate-500 leading-relaxed text-sm sm:text-base mb-6">
                  {featured.fullDesc}
                </p>

                {/* Meta cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 mt-auto">
                  <div className="flex items-start gap-2.5 p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                    <CalendarDays size={14} className="text-primary-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-0.5">
                        Timeline
                      </p>
                      <p className="text-xs font-semibold text-slate-700">{featured.timeline}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                    <UserCheck size={14} className="text-primary-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-0.5">
                        Penanggung Jawab
                      </p>
                      <p className="text-xs font-semibold text-slate-700">{featured.pj}</p>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <button
                  className="self-start flex items-center gap-1.5 text-sm font-bold text-primary-700 hover:text-primary-800 transition-colors group/btn"
                  onClick={(e) => { e.stopPropagation(); onCardClick(featured); }}
                >
                  Lihat Detail Lengkap
                  <ArrowUpRight size={15} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </div>
          </TiltCard>
        </motion.div>

        {/* ── Sub-header ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] whitespace-nowrap">
            Program Kerja Lainnya
          </span>
          <div className="h-px flex-1 bg-slate-200" />
        </motion.div>

        {/* ── Small cards grid ── */}
        {/* gridRef on wrapper div so useInView tracks the grid position */}
        <div ref={gridRef}>
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-3 gap-4"
            variants={gridVariants}
            initial="hidden"
            animate={gridInView ? "visible" : "hidden"}
          >
            {rest.map((item, i) => (
              <TiltCard key={item.id}>
                <ProgramCard
                  data={item}
                  index={i + 1}
                  onClick={() => onCardClick(item)}
                  compact
                  variants={cardVariants}
                />
              </TiltCard>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
