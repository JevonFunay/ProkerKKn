"use client";

import { motion } from "framer-motion";
import { CalendarDays, UserCheck, ArrowLeft, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { ProgramData } from "@/data/content";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
});

export default function ProkerDetailContent({ program }: { program: ProgramData }) {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#faf9f6] pt-20 lg:pt-24">

        {/* Page header */}
        <section className="bg-white border-b border-slate-200 py-10 lg:py-14 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-50 rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none opacity-60" />

          <div className="relative max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20">
            <motion.div {...fadeUp(0)}>
              <Link
                href="/#program"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-primary-600 transition-colors mb-6 group"
              >
                <ArrowLeft size={13} className="group-hover:-translate-x-0.5 transition-transform" />
                Kembali ke Program Kerja
              </Link>

              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${program.categoryColor}`}>
                  {program.category}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest bg-slate-100 text-slate-500 px-3 py-1 rounded-full">
                  Proker Individu
                </span>
              </div>

              <h1 className="font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-tight">
                {program.title}
              </h1>
              <p className="text-slate-500 mt-3 text-sm leading-relaxed max-w-2xl">
                {program.shortDesc}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Hero image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative overflow-hidden"
          style={{ height: 380 }}
        >
          <img
            src={program.image}
            alt={program.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#faf9f6]" />
        </motion.div>

        {/* Main content */}
        <section className="py-10 pb-24">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

              {/* Left: narrative */}
              <div className="lg:col-span-2 space-y-8">

                <motion.div {...fadeUp(0.18)}>
                  <h2 className="font-bold text-slate-900 text-lg mb-3">Tentang Program</h2>
                  <p className="text-slate-500 text-sm sm:text-base leading-relaxed border-l-2 border-primary-300 pl-4">
                    {program.fullDesc}
                  </p>
                </motion.div>

                <motion.div {...fadeUp(0.26)}>
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle2 size={15} className="text-primary-600" />
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">
                      Poin Pelaksanaan
                    </span>
                  </div>
                  <ul className="space-y-2.5">
                    {program.highlights.map((point, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 size={16} className="text-primary-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-600 leading-snug">{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* Right: sidebar */}
              <motion.div
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white border border-slate-200 rounded-2xl p-5 h-fit lg:sticky lg:top-28"
              >
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-4">
                  Info Program
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0">
                      <CalendarDays size={15} className="text-primary-700" />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                        Timeline
                      </p>
                      <p className="text-sm font-semibold text-slate-800 mt-0.5">{program.timeline}</p>
                    </div>
                  </div>

                  <div className="h-px bg-slate-100" />

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0">
                      <UserCheck size={15} className="text-primary-700" />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                        Penanggung Jawab
                      </p>
                      <p className="text-sm font-semibold text-slate-800 mt-0.5">{program.pj}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <Link
                    href="/#program"
                    className="w-full inline-flex items-center justify-center gap-2 bg-primary-700 hover:bg-primary-800 text-white font-semibold px-4 py-3 rounded-xl transition-all duration-300 text-sm shadow-md shadow-primary-900/15"
                  >
                    <ArrowLeft size={14} />
                    Kembali ke Program Kerja
                  </Link>
                </div>
              </motion.div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
