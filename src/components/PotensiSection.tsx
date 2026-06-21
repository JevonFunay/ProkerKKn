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
    <section id="potensi" className="py-24 lg:py-32 bg-[#0f0f0f] relative overflow-hidden">
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
            03
          </span>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-emerald-400 font-black text-xs tracking-[0.25em] uppercase">
              Potensi Berkelanjutan
            </span>
            <div className="h-px flex-1 bg-white/[0.08]" />
          </div>
          <h2 className="font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight">
            Potensi Desa &{" "}
            <span className="text-white/20">Keberlanjutan</span>
          </h2>
        </motion.div>

        {/* 2×2 grid for 4 items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
