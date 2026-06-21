"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { UserRound, UsersRound, X, Globe } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function IconInstagram({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function IconLinkedin({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

interface TeamMember {
  name: string;
  role: string;
  instagram: string;
  linkedin: string;
  website: string;
}

const teamMembers: TeamMember[] = [
  { name: "Lidwina Cahya Dewi",           role: "Ketua Kelompok", instagram: "", linkedin: "", website: "" },
  { name: "Reynathania Nonie Tangkedatu", role: "Bendahara",       instagram: "", linkedin: "", website: "" },
  { name: "Jevon Christian Putra Funay",  role: "PDD",             instagram: "", linkedin: "", website: "" },
  { name: "Elisabeth Liliana Devi",       role: "Sekretaris",      instagram: "", linkedin: "", website: "" },
  { name: "Gatot Subroto Simbolon",       role: "Humas",           instagram: "", linkedin: "", website: "" },
  { name: "Kelpin Saktara Tirta",         role: "Perkap",          instagram: "", linkedin: "", website: "" },
];

const memberGradients = [
  "from-teal-400 to-cyan-600",
  "from-blue-400 to-indigo-600",
  "from-amber-400 to-orange-500",
  "from-rose-400 to-pink-600",
  "from-violet-400 to-purple-600",
  "from-emerald-400 to-teal-600",
];

interface MemberModalProps {
  member: TeamMember | null;
  index: number;
  onClose: () => void;
}

function MemberModal({ member, index, onClose }: MemberModalProps) {
  if (!member) return null;

  const hasSocial = member.instagram || member.linkedin || member.website;

  const socials = [
    { key: "instagram", label: "Instagram", url: member.instagram, icon: IconInstagram, color: "bg-gradient-to-br from-pink-500 to-orange-400" },
    { key: "linkedin",  label: "LinkedIn",  url: member.linkedin,  icon: IconLinkedin,  color: "bg-blue-600" },
    { key: "website",   label: "Website",   url: member.website,   icon: Globe,         color: "bg-white/10" },
  ];

  return (
    <AnimatePresence>
      {member && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center"
          role="dialog"
          aria-modal="true"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/75 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="relative z-10 w-full max-w-sm sm:mx-4 bg-[#141414] border border-white/[0.08] rounded-t-3xl sm:rounded-3xl overflow-hidden shadow-2xl"
            style={{ boxShadow: "0 -8px 60px rgba(0,0,0,0.8)" }}
          >
            {/* Drag handle */}
            <div className="sm:hidden flex justify-center pt-3 pb-1">
              <div className="w-10 h-1 rounded-full bg-white/10" />
            </div>

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-9 h-9 bg-white/[0.06] hover:bg-white/10 border border-white/[0.08] rounded-full flex items-center justify-center transition-all duration-200 hover:rotate-90 cursor-pointer"
              aria-label="Tutup"
            >
              <X size={16} className="text-white/60" />
            </button>

            {/* Header */}
            <div className="px-6 pt-8 pb-6 text-center border-b border-white/[0.06]">
              {/* Gradient strip accent */}
              <div className={`h-px w-16 mx-auto bg-gradient-to-r ${memberGradients[index % memberGradients.length]} mb-6 rounded-full`} />

              {/* Avatar */}
              <div
                className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-br ${memberGradients[index % memberGradients.length]} flex items-center justify-center shadow-lg mb-4`}
              >
                <UserRound size={38} className="text-white" strokeWidth={1.6} />
              </div>
              <h2 className="font-bold text-xl text-white leading-snug">
                {member.name}
              </h2>
              <span className="inline-block mt-2 text-xs font-semibold text-primary-400 bg-primary-500/10 border border-primary-500/20 px-3 py-1 rounded-full">
                {member.role}
              </span>
            </div>

            {/* Social links */}
            <div className="px-6 py-6">
              <p className="text-[10px] font-bold text-white/25 uppercase tracking-[0.3em] mb-4">
                Social Media
              </p>

              {hasSocial ? (
                <div className="space-y-2">
                  {socials
                    .filter((s) => s.url)
                    .map((social) => {
                      const Icon = social.icon;
                      return (
                        <motion.a
                          key={social.key}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ x: 4 }}
                          whileTap={{ scale: 0.97 }}
                          className="flex items-center gap-3 p-3 rounded-xl border border-white/[0.06] hover:border-primary-500/30 hover:bg-primary-500/5 transition-colors duration-200 group"
                        >
                          <div className={`w-9 h-9 ${social.color} rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm`}>
                            <Icon size={16} className="text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-[10px] text-white/30 font-medium uppercase tracking-wider">
                              {social.label}
                            </p>
                            <p className="text-sm font-semibold text-white/70 group-hover:text-primary-400 truncate transition-colors">
                              {social.url.replace(/^https?:\/\/(www\.)?/, "")}
                            </p>
                          </div>
                        </motion.a>
                      );
                    })}
                </div>
              ) : (
                <div className="text-center py-6">
                  <div className="w-12 h-12 bg-white/[0.04] border border-white/[0.06] rounded-full flex items-center justify-center mx-auto mb-3">
                    <Globe size={20} className="text-white/20" />
                  </div>
                  <p className="text-sm text-white/25">
                    Belum ada social media yang ditambahkan.
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function TimContent() {
  const [selected, setSelected] = useState<{ member: TeamMember; index: number } | null>(null);

  return (
    <>
      <Navbar />

      <MemberModal
        member={selected?.member ?? null}
        index={selected?.index ?? 0}
        onClose={() => setSelected(null)}
      />

      <main className="min-h-screen bg-[#080808] pt-20 lg:pt-24">

        {/* Page header — dark editorial */}
        <section className="relative overflow-hidden border-b border-white/[0.06] py-20 lg:py-24">
          {/* Watermark */}
          <span className="absolute right-6 lg:right-16 top-1/2 -translate-y-1/2 text-[18vw] font-black text-white/[0.025] uppercase tracking-tighter select-none pointer-events-none leading-none">
            TIM
          </span>

          <div className="relative max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <UsersRound size={14} className="text-primary-400 flex-shrink-0" />
                <span className="text-primary-400 font-black text-xs tracking-[0.25em] uppercase">
                  Profil Tim
                </span>
                <div className="h-px w-16 bg-white/[0.08]" />
              </div>
              <h1 className="font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight">
                Profil{" "}
                <span className="text-white/20">Kelompok 44</span>
              </h1>
              <p className="text-white/35 mt-4 max-w-lg text-sm leading-relaxed">
                Mahasiswa Kuliah Kerja Nyata Universitas Kristen Duta Wacana —
                Periode Genap 2025/2026
              </p>
            </motion.div>
          </div>
        </section>

        {/* Member cards */}
        <section className="py-20 lg:py-28">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20">

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[10px] font-bold text-white/20 uppercase tracking-[0.3em] mb-10"
            >
              Klik kartu untuk melihat detail & social media
            </motion.p>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              {teamMembers.map((member, i) => (
                <motion.button
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setSelected({ member, index: i })}
                  className="bg-[#141414] border border-white/[0.07] hover:border-white/14 rounded-2xl p-6 sm:p-8 text-center cursor-pointer w-full group transition-colors duration-300"
                  style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.35)" }}
                >
                  {/* Avatar */}
                  <div
                    className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-gradient-to-br ${memberGradients[i % memberGradients.length]} flex items-center justify-center mb-5 shadow-lg group-hover:scale-105 transition-transform duration-300`}
                  >
                    <UserRound size={32} className="text-white" strokeWidth={1.6} />
                  </div>

                  {/* Name */}
                  <h3 className="font-bold text-sm sm:text-base text-white leading-snug break-words">
                    {member.name}
                  </h3>

                  {/* Role */}
                  <p className="text-xs text-primary-400 font-semibold mt-2">
                    {member.role}
                  </p>

                  {/* CTA hint */}
                  <p className="text-[10px] text-white/20 mt-4 uppercase tracking-widest">
                    Lihat profil{" "}
                    <span className="group-hover:translate-x-1 transition-transform duration-200 inline-block">
                      →
                    </span>
                  </p>
                </motion.button>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
