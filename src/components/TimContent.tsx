"use client";

import { motion } from "framer-motion";
import { GraduationCap, UserRound, UsersRound } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const dpl = {
  name: "dr. Rian Kurniawan Laksono, Sp. T.H.T.B.K.L.",
  role: "Dosen Pembimbing Lapangan",
};

const teamMembers = [
  { name: "Lidwina Cahya Dewi", role: "Ketua Kelompok" },
  { name: "Reynathania Nonie Tangkedatu", role: "Bendahara" },
  { name: "Jevon Christian Putra Funay", role: "PDD" },
  { name: "Elisabeth Liliana Devi", role: "Sekretaris" },
  { name: "Gatot Subroto Simbolon", role: "Humas" },
  { name: "Kelpin Saktara Tirta", role: "Perkap" },
];

const memberGradients = [
  "from-emerald-400 to-teal-500",
  "from-blue-400 to-indigo-500",
  "from-amber-400 to-orange-500",
  "from-rose-400 to-pink-500",
  "from-purple-400 to-violet-500",
  "from-cyan-400 to-sky-500",
];

export default function TimContent() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-50 pt-24 lg:pt-28">
        {/* Header */}
        <section className="bg-white relative overflow-hidden">
          {/* Background dot pattern */}
          <div className="absolute inset-0 bg-dot-grid opacity-60 pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-18 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 text-primary-600 font-semibold text-sm tracking-widest uppercase mb-4">
                <UsersRound size={16} />
                Profil Tim
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 mb-4"
            >
              Profil <span className="gradient-text">Kelompok 44</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-slate-500 max-w-2xl mx-auto leading-relaxed"
            >
              Mahasiswa Kuliah Kerja Nyata Universitas Kristen Duta Wacana —
              Periode Genap 2025/2026
            </motion.p>
          </div>
        </section>

        {/* DPL */}
        <section className="py-14 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 24 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, type: "spring", stiffness: 120 }}
              className="max-w-md mx-auto"
            >
              <motion.div
                whileHover={{
                  y: -6,
                  boxShadow: "0 20px 40px -8px rgba(5,150,105,0.2)",
                  transition: { duration: 0.3 },
                }}
                className="bg-white border border-slate-100 rounded-2xl shadow-sm p-8 text-center"
              >
                {/* Gold-ringed avatar */}
                <div className="relative w-28 h-28 mx-auto mb-5">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-amber-400 to-yellow-500 flex items-center justify-center ring-4 ring-amber-300 ring-offset-4">
                    <GraduationCap size={52} className="text-white" strokeWidth={1.8} />
                  </div>
                  {/* Animated ring pulse */}
                  <motion.div
                    animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                    className="absolute inset-0 rounded-full ring-4 ring-amber-300"
                  />
                </div>
                <p className="text-xs font-semibold text-primary-600 uppercase tracking-widest mb-2">
                  DPL
                </p>
                <h2 className="font-bold text-xl text-slate-900 leading-snug">
                  {dpl.name}
                </h2>
                <p className="text-sm text-slate-500 mt-2">{dpl.role}</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Team Members */}
        <section className="pb-20 lg:pb-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-10"
            >
              <h2 className="font-bold text-2xl sm:text-3xl text-slate-900">
                Anggota Tim
              </h2>
              <div className="w-14 h-1 bg-primary-500 rounded-full mx-auto mt-4" />
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {teamMembers.map((member, i) => (
                <motion.article
                  key={member.name}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{
                    y: -6,
                    boxShadow: "0 16px 32px -8px rgba(5,150,105,0.15)",
                    transition: { duration: 0.25 },
                  }}
                  className="bg-white border border-slate-100 rounded-2xl shadow-sm p-5 sm:p-6 text-center"
                >
                  {/* Colored gradient avatar */}
                  <div
                    className={`w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full bg-gradient-to-br ${memberGradients[i]} flex items-center justify-center mb-4 shadow-md`}
                  >
                    <UserRound size={38} className="text-white" strokeWidth={1.8} />
                  </div>
                  <h3 className="font-bold text-sm sm:text-base text-slate-900 leading-snug break-words">
                    {member.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-primary-600 font-medium mt-2">
                    {member.role}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
