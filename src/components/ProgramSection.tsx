"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ProgramCard from "./ProgramCard";
import { programKerja } from "@/data/content";
import type { ProgramData } from "@/data/content";

interface ProgramSectionProps {
  onCardClick: (data: ProgramData) => void;
}

export default function ProgramSection({ onCardClick }: ProgramSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="program" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary-600 font-semibold text-sm tracking-widest uppercase mb-3">
            Realisasi Aksi
          </span>
          <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 mb-4">
            Program Kerja{" "}
            <span className="gradient-text">Utama</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto mt-4">
            Tujuh program kerja strategis yang menjadi fondasi pengabdian
            masyarakat di Dusun Karangnongko.
          </p>
          <div className="w-16 h-1 bg-primary-500 rounded-full mx-auto mt-6" />
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programKerja.map((item, i) => (
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
