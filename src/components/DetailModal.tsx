"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CalendarDays, Target, UserCheck } from "lucide-react";
import type { ProgramData, PotensiData } from "@/data/content";

interface DetailModalProps {
  data: ProgramData | PotensiData | null;
  onClose: () => void;
}

export default function DetailModal({ data, onClose }: DetailModalProps) {
  useEffect(() => {
    if (data) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
    return () => document.body.classList.remove("modal-open");
  }, [data]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {data && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
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
            className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="relative z-10 w-full max-w-2xl max-h-[92vh] md:max-h-[85vh] bg-white border border-slate-200 rounded-t-3xl md:rounded-3xl overflow-hidden flex flex-col md:mx-4 shadow-2xl shadow-slate-900/20"
          >
            {/* Drag handle (mobile) */}
            <div className="md:hidden flex justify-center pt-3 pb-1">
              <div className="w-10 h-1 rounded-full bg-slate-200" />
            </div>

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-10 h-10 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-full flex items-center justify-center hover:rotate-90 hover:scale-110 transition-all duration-300 cursor-pointer"
              aria-label="Tutup"
            >
              <X size={20} className="text-slate-500" />
            </button>

            {/* Scrollable content */}
            <div className="overflow-y-auto overscroll-contain flex-1">
              {/* Hero Image */}
              <div className="relative overflow-hidden" style={{ maxHeight: 320 }}>
                <img
                  src={data.image}
                  alt={data.title}
                  className="w-full h-56 sm:h-72 md:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-6 right-16">
                  <span className={`inline-block text-xs font-bold px-3 py-1.5 rounded-full shadow ${data.categoryColor}`}>
                    {data.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 space-y-6">
                {/* Title */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                >
                  <h2 id="modal-title" className="font-bold text-2xl sm:text-3xl text-slate-900 mb-1">
                    {data.title}
                  </h2>
                </motion.div>

                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                >
                  <p className="text-slate-500 leading-relaxed">
                    {data.fullDesc}
                  </p>
                </motion.div>

                {/* Info Grid */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                >
                  <InfoCard
                    icon={<CalendarDays size={18} />}
                    label="Timeline Pelaksanaan"
                    value={data.timeline}
                  />
                  <InfoCard
                    icon={<Target size={18} />}
                    label="Target Luaran"
                    value={data.target}
                  />
                  <InfoCard
                    icon={<UserCheck size={18} />}
                    label="Penanggung Jawab"
                    value={data.pj}
                    colSpan
                  />
                </motion.div>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45 }}
                  className="pt-2"
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
  colSpan,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  colSpan?: boolean;
}) {
  return (
    <div
      className={`flex items-start gap-3 p-3 bg-slate-50 border border-slate-100 rounded-xl ${
        colSpan ? "sm:col-span-2" : ""
      }`}
    >
      <div className="w-9 h-9 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0 mt-0.5 text-primary-700">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-xs text-slate-400 font-medium">{label}</p>
        <p className="text-sm font-semibold text-slate-800 mt-0.5">{value}</p>
      </div>
    </div>
  );
}
