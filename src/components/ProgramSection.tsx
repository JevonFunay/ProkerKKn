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
    <section id="program" className="py-24 lg:py-32 bg-[#faf9f6] relative overflow-hidden">
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
            <span className="w-2 h-2 rounded-full bg-accent-500 flex-shrink-0" />
            <span className="text-xs font-bold text-accent-500 tracking-[0.22em] uppercase">
              Realisasi Aksi
            </span>
            <div className="h-px flex-1 bg-slate-200" />
          </div>
          <h2 className="font-black text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight">
            Program Kerja{" "}
            <span className="text-slate-300">Utama</span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {programKerja.map((item, i) => (
            <div
              key={item.id}
              className={`flex ${
                i === 0
                  ? "md:col-span-2 lg:col-span-2"
                  : i === 6
                  ? "lg:col-span-2"
                  : ""
              }`}
            >
              <ProgramCard
                data={item}
                index={i}
                onClick={() => onCardClick(item)}
                featured={i === 0}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
