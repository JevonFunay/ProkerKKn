"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CalendarDays, UserCheck, CheckCircle2, Tag } from "lucide-react";
import type { ProgramData, PotensiData } from "@/data/content";

interface DetailModalProps {
  data: ProgramData | PotensiData | null;
  onClose: () => void;
}

export default function DetailModal({ data, onClose }: DetailModalProps) {
  useEffect(() => {
    document.body.classList.toggle("modal-open", !!data);
    return () => document.body.classList.remove("modal-open");
  }, [data]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  const isPotensi = data ? data.id >= 8 : false;

  return (
    <AnimatePresence>
      {data && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-end md:items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-slate-900/55 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="relative z-10 w-full max-w-2xl max-h-[94vh] md:max-h-[88vh] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-t-3xl md:rounded-3xl overflow-hidden flex flex-col md:mx-4 shadow-2xl shadow-slate-900/25"
          >
            {/* Drag handle (mobile) */}
            <div className="md:hidden flex justify-center pt-3 pb-1 flex-shrink-0">
              <div className="w-10 h-1 rounded-full bg-slate-200 dark:bg-slate-700" />
            </div>

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/90 dark:bg-slate-800/90 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 rounded-full flex items-center justify-center hover:rotate-90 hover:scale-110 transition-all duration-300 cursor-pointer shadow-sm"
              aria-label="Tutup"
            >
              <X size={18} className="text-slate-500 dark:text-slate-300" />
            </button>

            {/* Scrollable content */}
            <div className="overflow-y-auto overscroll-contain flex-1">

              {/* Hero Image */}
              <div className="relative overflow-hidden flex-shrink-0" style={{ height: 220 }}>
                <img
                  src={data.image}
                  alt={data.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent" />

                {/* Type badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/70 bg-black/30 backdrop-blur-sm px-2.5 py-1 rounded-full">
                    {isPotensi ? "Potensi Proker" : "Program Kerja"}
                  </span>
                </div>

                {/* Category + title overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full mb-2 ${data.categoryColor}`}>
                    <Tag size={10} />
                    {data.category}
                  </span>
                  <h2 id="modal-title" className="font-black text-xl sm:text-2xl text-white leading-tight">
                    {data.title}
                  </h2>
                </div>
              </div>

              {/* Content body */}
              <div className="p-5 sm:p-7 space-y-5">

                {/* Tagline */}
                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-primary-700 dark:text-primary-400 font-semibold text-sm leading-relaxed border-l-2 border-primary-400 dark:border-primary-600 pl-3"
                >
                  {data.shortDesc}
                </motion.p>

                {/* Full description */}
                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.18 }}
                  className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm sm:text-base"
                >
                  {data.fullDesc}
                </motion.p>

                {/* Highlights */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.26 }}
                >
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 mb-3">
                    {isPotensi ? "Poin Peluang" : "Poin Pelaksanaan"}
                  </p>
                  <ul className="space-y-2.5">
                    {data.highlights.map((point, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2
                          size={16}
                          className="text-primary-500 dark:text-primary-400 flex-shrink-0 mt-0.5"
                        />
                        <span className="text-sm text-slate-600 dark:text-slate-300 leading-snug">{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Divider */}
                <div className="h-px bg-slate-100 dark:bg-white/[0.06]" />

                {/* Info grid */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.34 }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                >
                  <InfoCard
                    icon={<CalendarDays size={16} />}
                    label="Timeline"
                    value={data.timeline}
                  />
                  <InfoCard
                    icon={<UserCheck size={16} />}
                    label="Penanggung Jawab"
                    value={data.pj}
                  />
                </motion.div>

                {/* Close CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.42 }}
                  className="pt-1 pb-2"
                >
                  <button
                    onClick={onClose}
                    className="w-full inline-flex items-center justify-center gap-2 bg-primary-700 hover:bg-primary-800 text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-300 shadow-md shadow-primary-900/15 hover:shadow-lg cursor-pointer"
                  >
                    Tutup Detail
                  </button>
                </motion.div>

              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function InfoCard({
  icon,
  label,
  value,
  wide,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  wide?: boolean;
}) {
  return (
    <div className={`flex items-start gap-3 p-3.5 bg-slate-50 dark:bg-white/[0.03] border border-slate-100 dark:border-white/[0.06] rounded-xl ${wide ? "sm:col-span-2" : ""}`}>
      <div className="w-8 h-8 rounded-lg bg-primary-100 dark:bg-primary-500/15 flex items-center justify-center flex-shrink-0 mt-0.5 text-primary-700 dark:text-primary-400">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider">{label}</p>
        <p className="text-sm font-semibold text-slate-800 dark:text-slate-100 mt-0.5 leading-snug">{value}</p>
      </div>
    </div>
  );
}
