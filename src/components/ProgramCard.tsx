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
  "bg-orange-100 text-orange-700":    "from-orange-500 to-orange-700",
  "bg-amber-100 text-amber-700":      "from-amber-400 to-amber-600",
  "bg-teal-100 text-teal-700":        "from-teal-500 to-teal-700",
  "bg-primary-100 text-primary-700":  "from-primary-600 to-primary-800",
  "bg-lime-100 text-lime-700":        "from-lime-500 to-lime-700",
  "bg-stone-100 text-stone-700":      "from-stone-400 to-stone-600",
  "bg-yellow-100 text-yellow-800":    "from-yellow-500 to-amber-600",
  "bg-emerald-100 text-emerald-700":  "from-emerald-500 to-emerald-700",
  "bg-sky-100 text-sky-700":          "from-sky-500 to-sky-700",
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
  // categoryColor bisa membawa suffix "dark:..." — cocokkan hanya dua token warna dasarnya
  const baseCategoryColor = data.categoryColor.split(" ").slice(0, 2).join(" ");
  const gradient = categoryGradient[baseCategoryColor] ?? "from-primary-600 to-primary-800";

  const motionProps = variants ? { variants } : ownAnimation;

  return (
    <div
      onClick={onClick}
      className="group cursor-pointer transform-gpu hover:-translate-y-1.5 transition-transform duration-300 ease-out"
    >
      <motion.div
        {...motionProps}
        className="rounded-2xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 group-hover:border-primary-300 dark:group-hover:border-primary-700 group-hover:shadow-lg group-hover:shadow-primary-900/10 transition-all duration-300 flex flex-col h-full"
      >
        {/* Top gradient accent strip */}
        <div className={`h-1 bg-gradient-to-r ${gradient}`} />

        {/* Image */}
        <div className={`relative overflow-hidden flex-shrink-0 bg-slate-100 dark:bg-slate-800 ${
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
          } bg-white/90 dark:bg-slate-900/90 flex items-center justify-center border border-white/60 dark:border-white/10 shadow-sm`}>
            <span className={`text-slate-700 dark:text-slate-200 font-black ${compact ? "text-[10px]" : "text-xs"}`}>
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
            className={`font-bold text-slate-900 dark:text-white group-hover:text-primary-700 dark:group-hover:text-primary-400 transition-colors leading-snug line-clamp-2 ${
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
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed line-clamp-2 flex-1 mb-4">
              {data.shortDesc}
            </p>
          )}

          <div className={`flex items-center justify-between border-t border-slate-100 dark:border-white/[0.06] ${compact ? "pt-2.5 mt-2.5" : "pt-3 mt-auto"}`}>
            {compact ? (
              <span className="text-[10px] text-slate-400 dark:text-slate-500">Klik untuk detail</span>
            ) : (
              <span className="text-xs text-slate-400 dark:text-slate-500">
                PJ: <span className="text-slate-600 dark:text-slate-300 font-semibold">{data.pj}</span>
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
