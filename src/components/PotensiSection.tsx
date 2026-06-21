"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ProgramCard from "./ProgramCard";
import { potensiDesa } from "@/data/content";
import type { PotensiData } from "@/data/content";

interface PotensiSectionProps {
  onCardClick: (data: PotensiData) => void;
}

export default function PotensiSection({ onCardClick }: PotensiSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="potensi" className="py-20 lg:py-28 section-potensi-bg relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/15 rounded-full px-4 py-2 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="text-emerald-400 font-bold text-xs tracking-widest uppercase">
              Potensi Berkelanjutan
            </span>
          </div>
          <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Potensi Desa & <span className="gradient-text">Keberlanjutan</span>
          </h2>
          <p className="text-white/45 max-w-2xl mx-auto">
            Ide pengembangan berkelanjutan di luar program kerja yang dapat
            menunjang potensi Dusun Karangnongko.
          </p>
          <div className="flex items-center justify-center gap-1.5 mt-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-emerald-600/50" />
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/60" />
            <span className="w-2 h-2 rounded-full bg-emerald-400/80" />
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/60" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-emerald-600/50" />
          </div>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {potensiDesa.map((item, i) => (
            <ProgramCard
              key={item.id}
              data={item}
              index={i}
              onClick={() => onCardClick(item)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
