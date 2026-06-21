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
    <section id="program" className="py-24 lg:py-32 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20 relative" ref={ref}>

        {/* Editorial section header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="block font-black text-[7rem] lg:text-[10rem] leading-none text-white/[0.035] tracking-tighter select-none -mb-8 lg:-mb-12">
            02
          </span>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-primary-400 font-black text-xs tracking-[0.25em] uppercase">
              Realisasi Aksi
            </span>
            <div className="h-px flex-1 bg-white/[0.08]" />
          </div>
          <h2 className="font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight">
            Program Kerja{" "}
            <span className="text-white/20">Utama</span>
          </h2>
        </motion.div>

        {/* Bento Grid — card 0 and 6 span 2 cols on lg */}
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
