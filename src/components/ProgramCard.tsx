"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { ProgramData, PotensiData } from "@/data/content";

interface ProgramCardProps {
  data: ProgramData | PotensiData;
  index: number;
  onClick: () => void;
  featured?: boolean;
  compact?: boolean;
  variants?: Variants;
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

// Own entrance: pure opacity fade, zero transform to prevent GPU layer blink
const ownAnimation = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: "-40px" } as const,
  transition: { duration: 0.45 },
};

export default function ProgramCard({
  data,
  index,
  onClick,
  featured = false,
  compact = false,
  variants,
}: ProgramCardProps) {
  const badgeNumber = String(index + 1).padStart(2, "0");
  const gradient = categoryGradient[data.categoryColor] ?? "from-primary-600 to-primary-800";

  const motionProps = variants ? { variants } : ownAnimation;

  return (
    <div
      onClick={onClick}
      className="group cursor-pointer transform-gpu hover:-translate-y-1.5 transition-transform duration-300 ease-out"
    >
      <motion.div
        {...motionProps}
        className="rounded-2xl overflow-hidden bg-white border border-slate-200 group-hover:border-primary-300 group-hover:shadow-lg group-hover:shadow-primary-900/10 transition-all duration-300 flex flex-col h-full"
      >
        {/* Top gradient accent strip */}
        <div className={`h-1 bg-gradient-to-r ${gradient}`} />

        {/* Image */}
        <div className={`relative overflow-hidden flex-shrink-0 bg-slate-100 ${
          compact ? "h-28 sm:h-32" : featured ? "h-60 sm:h-72" : "h-44"
        }`}>
          <img
            src={data.image}
            alt={data.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent" />

          {/* Number badge */}
          <div className={`absolute top-2.5 left-2.5 ${
            compact ? "w-6 h-6 rounded-md" : "w-8 h-8 rounded-lg"
          } bg-white/90 flex items-center justify-center border border-white/60 shadow-sm`}>
            <span className={`text-slate-700 font-black ${compact ? "text-[10px]" : "text-xs"}`}>
              {badgeNumber}
            </span>
          </div>

          {!compact && (
            <div className={`absolute bottom-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full bg-gradient-to-r ${gradient} text-white shadow`}>
              {data.category}
            </div>
          )}
        </div>

        {/* Content */}
        <div className={`flex flex-col flex-1 ${compact ? "p-3.5" : "p-5"}`}>
          <h3
            className={`font-bold text-slate-900 group-hover:text-primary-700 transition-colors leading-snug line-clamp-2 ${
              compact
                ? "text-xs sm:text-sm mb-1.5"
                : featured
                ? "text-base sm:text-lg mb-2"
                : "text-sm sm:text-base mb-2"
            }`}
          >
            {data.title}
          </h3>

          {compact ? (
            <span className={`self-start text-[10px] font-bold px-2 py-0.5 rounded-full ${data.categoryColor} mb-auto`}>
              {data.category}
            </span>
          ) : (
            <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 flex-1 mb-4">
              {data.shortDesc}
            </p>
          )}

          <div className={`flex items-center justify-between border-t border-slate-100 ${compact ? "pt-2.5 mt-2.5" : "pt-3 mt-auto"}`}>
            {compact ? (
              <span className="text-[10px] text-slate-400">Klik untuk detail</span>
            ) : (
              <span className="text-xs text-slate-400">
                PJ: <span className="text-slate-600 font-semibold">{data.pj}</span>
              </span>
            )}
            <span className="text-xs font-semibold text-primary-600 flex items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              {compact ? "+" : "Detail"} <ArrowUpRight size={12} />
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
