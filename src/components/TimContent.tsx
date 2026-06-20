"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { UserRound, UsersRound, X, Globe } from "lucide-react";

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
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface TeamMember {
  name: string;
  role: string;
  instagram: string;
  linkedin: string;
  website: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Lidwina Cahya Dewi",
    role: "Ketua Kelompok",
    instagram: "",
    linkedin: "",
    website: "",
  },
  {
    name: "Reynathania Nonie Tangkedatu",
    role: "Bendahara",
    instagram: "",
    linkedin: "",
    website: "",
  },
  {
    name: "Jevon Christian Putra Funay",
    role: "PDD",
    instagram: "",
    linkedin: "",
    website: "",
  },
  {
    name: "Elisabeth Liliana Devi",
    role: "Sekretaris",
    instagram: "",
    linkedin: "",
    website: "",
  },
  {
    name: "Gatot Subroto Simbolon",
    role: "Humas",
    instagram: "",
    linkedin: "",
    website: "",
  },
  {
    name: "Kelpin Saktara Tirta",
    role: "Perkap",
    instagram: "",
    linkedin: "",
    website: "",
  },
];

const memberGradients = [
  "from-sky-400 to-blue-500",
  "from-blue-400 to-indigo-500",
  "from-orange-400 to-coral-500",
  "from-rose-400 to-pink-500",
  "from-cyan-400 to-sky-500",
  "from-violet-400 to-purple-500",
];

const memberGradientsBg = [
  "from-sky-50 to-blue-50",
  "from-blue-50 to-indigo-50",
  "from-orange-50 to-amber-50",
  "from-rose-50 to-pink-50",
  "from-cyan-50 to-sky-50",
  "from-violet-50 to-purple-50",
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
    {
      key: "instagram",
      label: "Instagram",
      url: member.instagram,
      icon: IconInstagram,
      color: "bg-gradient-to-br from-pink-500 to-orange-400",
    },
    {
      key: "linkedin",
      label: "LinkedIn",
      url: member.linkedin,
      icon: IconLinkedin,
      color: "bg-blue-600",
    },
    {
      key: "website",
      label: "Website",
      url: member.website,
      icon: Globe,
      color: "bg-slate-600",
    },
  ];

  return (
    <AnimatePresence>
      {member && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center"
          role="dialog"
          aria-modal="true"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="relative z-10 w-full max-w-sm sm:mx-4 bg-white rounded-t-3xl sm:rounded-3xl overflow-hidden shadow-2xl"
          >
            {/* Drag handle (mobile) */}
            <div className="sm:hidden flex justify-center pt-3 pb-1">
              <div className="w-10 h-1 rounded-full bg-slate-200" />
            </div>

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-9 h-9 bg-slate-100 hover:bg-slate-200 rounded-full flex items-center justify-center transition-all duration-200 hover:rotate-90 cursor-pointer"
              aria-label="Tutup"
            >
              <X size={18} className="text-slate-600" />
            </button>

            {/* Header gradient strip */}
            <div
              className={`bg-gradient-to-br ${memberGradientsBg[index % memberGradients.length]} px-6 pt-6 pb-8 text-center`}
            >
              {/* Avatar */}
              <div
                className={`w-24 h-24 mx-auto rounded-full bg-gradient-to-br ${memberGradients[index % memberGradients.length]} flex items-center justify-center shadow-lg mb-4`}
              >
                <UserRound size={44} className="text-white" strokeWidth={1.6} />
              </div>
              <h2 className="font-bold text-xl text-slate-900 leading-snug">
                {member.name}
              </h2>
              <span className="inline-block mt-2 text-xs font-semibold text-primary-600 bg-primary-50 border border-primary-100 px-3 py-1 rounded-full">
                {member.role}
              </span>
            </div>

            {/* Social Media Links */}
            <div className="px-6 py-6">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">
                Social Media
              </p>

              {hasSocial ? (
                <div className="space-y-3">
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
                          className="flex items-center gap-3 p-3 rounded-xl border border-slate-100 hover:border-primary-200 hover:bg-primary-50 transition-colors duration-200 group"
                        >
                          <div
                            className={`w-9 h-9 ${social.color} rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm`}
                          >
                            <Icon size={18} className="text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-xs text-slate-400 font-medium">
                              {social.label}
                            </p>
                            <p className="text-sm font-semibold text-slate-700 group-hover:text-primary-600 truncate transition-colors">
                              {social.url.replace(/^https?:\/\/(www\.)?/, "")}
                            </p>
                          </div>
                        </motion.a>
                      );
                    })}
                </div>
              ) : (
                <div className="text-center py-6 text-slate-400">
                  <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Globe size={22} className="text-slate-300" />
                  </div>
                  <p className="text-sm">Belum ada social media yang ditambahkan.</p>
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

      {/* Member detail modal */}
      <MemberModal
        member={selected?.member ?? null}
        index={selected?.index ?? 0}
        onClose={() => setSelected(null)}
      />

      <main className="min-h-screen bg-slate-50 pt-24 lg:pt-28">
        {/* Header */}
        <section className="bg-white relative overflow-hidden">
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

        {/* Team Members */}
        <section className="py-16 lg:py-24">
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
              <p className="text-slate-400 text-sm mt-2">
                Klik kartu untuk melihat detail & social media
              </p>
              <div className="w-14 h-1 bg-primary-500 rounded-full mx-auto mt-4" />
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {teamMembers.map((member, i) => (
                <motion.button
                  key={member.name}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{
                    y: -6,
                    boxShadow: "0 16px 32px -8px rgba(2,132,199,0.18)",
                    transition: { duration: 0.25 },
                  }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setSelected({ member, index: i })}
                  className="bg-white border border-slate-100 rounded-2xl shadow-sm p-5 sm:p-6 text-center cursor-pointer w-full group hover:border-primary-200 transition-colors duration-200"
                >
                  {/* Colored gradient avatar */}
                  <div
                    className={`w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full bg-gradient-to-br ${memberGradients[i % memberGradients.length]} flex items-center justify-center mb-4 shadow-md group-hover:scale-105 transition-transform duration-300`}
                  >
                    <UserRound size={38} className="text-white" strokeWidth={1.8} />
                  </div>
                  <h3 className="font-bold text-sm sm:text-base text-slate-900 leading-snug break-words">
                    {member.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-primary-600 font-medium mt-2">
                    {member.role}
                  </p>
                  <p className="text-xs text-slate-400 mt-3 flex items-center justify-center gap-1">
                    <span>Lihat profil</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-200 inline-block">→</span>
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
