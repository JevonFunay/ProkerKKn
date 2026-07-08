"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ProgramCard from "./ProgramCard";
import TiltCard from "./TiltCard";
import { potensiDesa } from "@/data/content";
import type { PotensiData } from "@/data/content";

// Module-level constants = stable references across re-renders
const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const cardVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.45 } },
};

interface PotensiSectionProps {
  onCardClick: (data: PotensiData) => void;
}

export default function PotensiSection({ onCardClick }: PotensiSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-60px" });

  return (
    <section id="potensi" className="py-24 lg:py-32 bg-white relative overflow-hidden">
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
              Potensi Berkelanjutan
            </span>
            <div className="h-px flex-1 bg-slate-200" />
          </div>
          <h2 className="font-black text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight">
            Potensi Desa &{" "}
            <span className="text-slate-300">Keberlanjutan</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div ref={gridRef}>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            variants={gridVariants}
            initial="hidden"
            animate={gridInView ? "visible" : "hidden"}
          >
            {potensiDesa.map((item, i) => (
              <TiltCard key={item.id}>
                <ProgramCard
                  data={item}
                  index={i}
                  onClick={() => onCardClick(item)}
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
