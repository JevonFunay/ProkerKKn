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
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      onClick={onClick}
      className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-primary-500/10 transition-shadow duration-300"
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
        {/* Category badge */}
        <div
          className={`absolute top-4 right-4 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm ${data.categoryColor}`}
        >
          {data.category}
        </div>
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-primary-600 transition-colors">
          {data.title}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
          {data.shortDesc}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs text-slate-400 font-medium">
            PJ: {data.pj}
          </span>
          <span className="text-xs font-semibold text-primary-500 flex items-center gap-1 group-hover:gap-2 transition-all">
            Detail Proker
            <ChevronRight size={14} />
          </span>
        </div>
      </div>
    </motion.div>
  );
}
