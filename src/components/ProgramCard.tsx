"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { ProgramData, PotensiData } from "@/data/content";

interface ProgramCardProps {
  data: ProgramData | PotensiData;
  index: number;
  onClick: () => void;
  featured?: boolean;
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

export default function ProgramCard({ data, index, onClick, featured = false }: ProgramCardProps) {
  const badgeNumber = String(index + 1).padStart(2, "0");
  const gradient = categoryGradient[data.categoryColor] ?? "from-primary-500 to-primary-700";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.07, 0.4) }}
      whileHover={{ y: -4, transition: { duration: 0.25 } }}
      onClick={onClick}
      className="group cursor-pointer rounded-2xl overflow-hidden bg-[#141414] border border-white/[0.07] hover:border-white/14 transition-all duration-300 flex flex-col h-full"
      style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.4)" }}
    >
      {/* Top gradient strip */}
      <div className={`h-px bg-gradient-to-r ${gradient} opacity-70`} />

      {/* Image */}
      <div className={`relative overflow-hidden flex-shrink-0 ${featured ? "h-60 sm:h-72" : "h-44"}`}>
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414]/85 via-black/10 to-transparent" />

        {/* Number badge */}
        <div className="absolute top-3 left-3 w-8 h-8 rounded-lg bg-black/55 backdrop-blur-sm flex items-center justify-center border border-white/10">
          <span className="text-white font-black text-xs">{badgeNumber}</span>
        </div>

        {/* Category badge */}
        <div
          className={`absolute bottom-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full bg-gradient-to-r ${gradient} text-white shadow`}
        >
          {data.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3
          className={`font-bold text-white mb-2 group-hover:text-primary-400 transition-colors leading-snug line-clamp-2 ${
            featured ? "text-base sm:text-lg" : "text-sm sm:text-base"
          }`}
        >
          {data.title}
        </h3>
        <p className="text-white/40 text-sm leading-relaxed line-clamp-2 flex-1 mb-4">
          {data.shortDesc}
        </p>
        <div className="flex items-center justify-between pt-3 border-t border-white/[0.07] mt-auto">
          <span className="text-xs text-white/28">
            PJ: <span className="text-white/50 font-semibold">{data.pj}</span>
          </span>
          <span className="text-xs font-semibold text-primary-400 flex items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Detail <ArrowUpRight size={12} />
          </span>
        </div>
      </div>
    </motion.div>
  );
}
