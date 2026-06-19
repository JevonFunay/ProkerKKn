"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import type { ProgramData, PotensiData } from "@/data/content";

interface ProgramCardProps {
  data: ProgramData | PotensiData;
  index: number;
  onClick: () => void;
}

export default function ProgramCard({ data, index, onClick }: ProgramCardProps) {
  const badgeNumber = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{
        y: -10,
        boxShadow: "0 24px 48px -8px rgba(5, 150, 105, 0.18), 0 8px 16px -4px rgba(0,0,0,0.08)",
        transition: { duration: 0.3 },
      }}
      onClick={onClick}
      className="card-shine group cursor-pointer bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm transition-colors duration-300 hover:border-primary-200"
    >
      {/* Image */}
      <div className="relative overflow-hidden h-52">
        <motion.img
          src={data.image}
          alt={data.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.5 }}
        />

        {/* Dark gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Number badge */}
        <div className="absolute top-3 left-3 w-9 h-9 rounded-xl bg-black/40 backdrop-blur-sm flex items-center justify-center">
          <span className="text-white font-black text-sm leading-none drop-shadow">
            {badgeNumber}
          </span>
        </div>

        {/* Category badge */}
        <div
          className={`absolute top-3 right-3 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm ${data.categoryColor}`}
        >
          {data.category}
        </div>
      </div>

      {/* Colored left border accent */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary-500 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom rounded-r-full" />

        {/* Content */}
        <div className="p-6">
          <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-primary-600 transition-colors leading-snug">
            {data.title}
          </h3>
          <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
            {data.shortDesc}
          </p>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-xs text-slate-400 font-medium">
              PJ: {data.pj}
            </span>
            <motion.span
              className="text-xs font-semibold text-primary-500 flex items-center gap-1"
              whileHover={{ x: 2 }}
            >
              Detail Proker
              <ChevronRight size={14} />
            </motion.span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
