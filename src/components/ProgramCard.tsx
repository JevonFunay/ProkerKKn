"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { ProgramData, PotensiData } from "@/data/content";

interface ProgramCardProps {
  data: ProgramData | PotensiData;
  index: number;
  onClick: () => void;
}

const categoryGradient: Record<string, string> = {
  "bg-red-100 text-red-700":         "from-red-500 to-rose-600",
  "bg-amber-100 text-amber-700":     "from-amber-400 to-orange-500",
  "bg-emerald-100 text-emerald-700": "from-emerald-500 to-teal-600",
  "bg-purple-100 text-purple-700":   "from-purple-500 to-violet-600",
  "bg-pink-100 text-pink-700":       "from-pink-500 to-rose-400",
  "bg-blue-100 text-blue-700":       "from-blue-500 to-sky-600",
  "bg-cyan-100 text-cyan-700":       "from-cyan-500 to-teal-500",
  "bg-sky-100 text-sky-700":         "from-sky-500 to-blue-600",
  "bg-lime-100 text-lime-700":       "from-lime-500 to-green-600",
};

export default function ProgramCard({ data, index, onClick }: ProgramCardProps) {
  const badgeNumber = String(index + 1).padStart(2, "0");
  const gradient = categoryGradient[data.categoryColor] ?? "from-primary-500 to-primary-700";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.1, 0.5) }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      onClick={onClick}
      className="group cursor-pointer rounded-2xl overflow-hidden bg-[#1c1c1c] border border-white/[0.07] hover:border-white/15 transition-all duration-300"
      style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.4)" }}
    >
      {/* Colored accent strip */}
      <div className={`h-1 bg-gradient-to-r ${gradient}`} />

      {/* Image */}
      <div className="relative overflow-hidden h-48">
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />

        {/* Large decorative number watermark */}
        <div className="absolute -right-1 top-0 text-8xl font-black text-white/[0.07] leading-none select-none pointer-events-none">
          {badgeNumber}
        </div>

        {/* Small number badge */}
        <div className="absolute top-3 left-3 w-8 h-8 rounded-lg bg-black/60 backdrop-blur-sm flex items-center justify-center border border-white/10">
          <span className="text-white font-black text-xs">{badgeNumber}</span>
        </div>

        {/* Category badge */}
        <div className={`absolute bottom-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full bg-gradient-to-r ${gradient} text-white shadow-lg`}>
          {data.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-bold text-base text-white mb-2 group-hover:text-primary-400 transition-colors leading-snug line-clamp-2">
          {data.title}
        </h3>
        <p className="text-white/50 text-sm leading-relaxed line-clamp-2 mb-4">
          {data.shortDesc}
        </p>
        <div className="flex items-center justify-between pt-3 border-t border-white/[0.08]">
          <span className="text-xs text-white/35">
            PJ: <span className="text-white/60 font-semibold">{data.pj}</span>
          </span>
          <span className="text-xs font-semibold text-primary-400 flex items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Detail <ArrowUpRight size={12} />
          </span>
        </div>
      </div>
    </motion.div>
  );
}
