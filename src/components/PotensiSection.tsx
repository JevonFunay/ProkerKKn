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
    <section id="potensi" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary-600 font-semibold text-sm tracking-widest uppercase mb-3">
            Potensi Berkelanjutan
          </span>
          <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 mb-4">
            Potensi Desa &{" "}
            <span className="gradient-text">Keberlanjutan</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto mt-4">
            Ide pengembangan berkelanjutan di luar program kerja yang dapat
            menunjang potensi Dusun Karangnongko.
          </p>
          <div className="w-16 h-1 bg-primary-500 rounded-full mx-auto mt-6" />
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
