"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { UserRound, UsersRound, X, Globe, Leaf } from "lucide-react";
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
  photo: string;
  photoPosition: string;
  instagram: string;
  linkedin: string;
  website: string;
}

const teamMembers: TeamMember[] = [
  { name: "Lidwina Cahya Dewi",           role: "Ketua Kelompok", photo: "/lidwina.webp", photoPosition: "50% 12%", instagram: "", linkedin: "", website: "" },
  { name: "Reynathania Nonie Tangkedatu", role: "Bendahara",       photo: "/reyna.webp", photoPosition: "50% 8%",  instagram: "", linkedin: "", website: "" },
  { name: "Jevon Christian Putra Funay",  role: "PDD",             photo: "/jevon.webp",  photoPosition: "50% 42%", instagram: "", linkedin: "", website: "" },
  { name: "Elisabeth Liliana Devi",       role: "Sekretaris",      photo: "/lili.webp",   photoPosition: "50% 18%", instagram: "", linkedin: "", website: "" },
  { name: "Gatot Subroto Simbolon",       role: "Humas",           photo: "/gatot.webp",  photoPosition: "50% 28%", instagram: "", linkedin: "", website: "" },
  { name: "Kelpin Saktara Tirta",         role: "Perkap",          photo: "/Kelpin.webp", photoPosition: "50% 22%", instagram: "", linkedin: "", website: "" },
];

const memberGradients = [
  "from-primary-500 to-primary-700",
  "from-teal-400 to-teal-600",
  "from-amber-400 to-orange-500",
  "from-amber-500 to-orange-600",
  "from-lime-400 to-lime-700",
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
    { key: "instagram", label: "Instagram", url: member.instagram, icon: IconInstagram, color: "bg-gradient-to-br from-primary-600 to-teal-600" },
    { key: "linkedin",  label: "LinkedIn",  url: member.linkedin,  icon: IconLinkedin,  color: "bg-teal-700" },
    { key: "website",   label: "Website",   url: member.website,   icon: Globe,         color: "bg-slate-600" },
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
            className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="relative z-10 w-full max-w-sm sm:mx-4 bg-white border border-slate-200 rounded-t-3xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/20"
          >
            {/* Drag handle */}
            <div className="sm:hidden flex justify-center pt-3 pb-1">
              <div className="w-10 h-1 rounded-full bg-slate-200" />
            </div>

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-9 h-9 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-full flex items-center justify-center transition-all duration-200 hover:rotate-90 cursor-pointer"
              aria-label="Tutup"
            >
              <X size={16} className="text-slate-500" />
            </button>

            {/* Header — full-width portrait photo */}
            {member.photo ? (
              <div className="relative w-full overflow-hidden bg-slate-100" style={{ aspectRatio: "3/4" }}>
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${memberGradients[index % memberGradients.length]} z-10`} />
                <img
                  src={member.photo}
                  alt={member.name}
                  className="team-photo w-full h-full object-cover"
                  style={{ objectPosition: member.photoPosition }}
                />
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
                <div className="absolute bottom-4 left-0 right-0 text-center px-6">
                  <h2 className="font-bold text-xl text-slate-900 leading-snug drop-shadow-sm">{member.name}</h2>
                </div>
              </div>
            ) : (
              <div className={`w-full h-40 bg-gradient-to-br ${memberGradients[index % memberGradients.length]} flex items-center justify-center`}>
                <UserRound size={48} className="text-white" strokeWidth={1.4} />
              </div>
            )}
            <div className="px-6 pt-4 pb-5 text-center border-b border-slate-100">
              {!member.photo && (
                <h2 className="font-bold text-xl text-slate-900 leading-snug mb-2">{member.name}</h2>
              )}
              <span className="inline-block text-xs font-semibold text-primary-700 bg-primary-50 border border-primary-200 px-3 py-1 rounded-full">
                {member.role}
              </span>
            </div>

            {/* Social links */}
            <div className="px-6 py-6">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] mb-4">
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
                          className="flex items-center gap-3 p-3 rounded-xl border border-slate-100 hover:border-primary-200 hover:bg-primary-50 transition-colors duration-200 group"
                        >
                          <div className={`w-9 h-9 ${social.color} rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm`}>
                            <Icon size={16} className="text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">
                              {social.label}
                            </p>
                            <p className="text-sm font-semibold text-slate-600 group-hover:text-primary-700 truncate transition-colors">
                              {social.url.replace(/^https?:\/\/(www\.)?/, "")}
                            </p>
                          </div>
                        </motion.a>
                      );
                    })}
                </div>
              ) : (
                <div className="text-center py-6">
                  <div className="w-12 h-12 bg-slate-100 border border-slate-200 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Globe size={20} className="text-slate-400" />
                  </div>
                  <p className="text-sm text-slate-400">
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

      <main className="min-h-screen bg-[#faf9f6] lg:pt-24" style={{ paddingTop: "calc(env(safe-area-inset-top) + 5rem)" }}>

        {/* Page header */}
        <section className="bg-white border-b border-slate-200 py-8 lg:py-12 relative overflow-hidden">
          {/* Decorative background blob */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary-50 rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none opacity-70" />

          <div className="relative max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-2 h-2 rounded-full bg-primary-500 flex-shrink-0" />
                <UsersRound size={14} className="text-primary-600 flex-shrink-0" />
                <span className="text-xs font-bold text-primary-700 tracking-[0.22em] uppercase">
                  Profil Tim
                </span>
                <div className="h-px w-16 bg-slate-200" />
              </div>
              <h1 className="font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight">
                Profil{" "}
                <span className="text-slate-300">Kelompok 44</span>
              </h1>
              <p className="text-slate-500 mt-4 max-w-lg text-sm leading-relaxed">
                Mahasiswa Kuliah Kerja Nyata Universitas Kristen Duta Wacana
                Periode Genap 2025/2026
              </p>
            </motion.div>
          </div>
        </section>

        {/* Member cards */}
        <section className="py-8 lg:py-12">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-10 lg:px-20">

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-3 mb-5"
            >
              <Leaf size={12} className="text-primary-500" />
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">
                Klik kartu untuk melihat detail &amp; social media
              </p>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
              {teamMembers.map((member, i) => (
                <motion.button
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setSelected({ member, index: i })}
                  className="bg-white border border-slate-200 hover:border-primary-300 hover:shadow-lg hover:shadow-primary-900/8 rounded-2xl cursor-pointer w-full group transition-all duration-300 flex flex-col items-center text-center p-4 sm:p-5"
                >
                  {/* Gradient accent line */}
                  <div className={`w-8 h-0.5 bg-gradient-to-r ${memberGradients[i % memberGradients.length]} rounded-full mb-4 opacity-60 group-hover:opacity-100 group-hover:w-12 transition-all duration-300`} />

                  {/* Circular photo */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden ring-2 ring-slate-100 group-hover:ring-primary-200 group-hover:scale-105 transition-all duration-300 mb-3 flex-shrink-0">
                    {member.photo ? (
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="team-photo w-full h-full object-cover"
                        style={{ objectPosition: member.photoPosition }}
                      />
                    ) : (
                      <div className={`w-full h-full bg-gradient-to-br ${memberGradients[i % memberGradients.length]} flex items-center justify-center`}>
                        <UserRound size={28} className="text-white" strokeWidth={1.6} />
                      </div>
                    )}
                  </div>

                  <h3 className="font-bold text-xs sm:text-sm text-slate-900 leading-snug break-words group-hover:text-primary-700 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-[10px] text-primary-600 font-semibold mt-1">
                    {member.role}
                  </p>
                  <p className="text-[9px] text-slate-400 mt-2 uppercase tracking-widest">
                    Lihat profil <span className="group-hover:translate-x-1 transition-transform duration-200 inline-block">→</span>
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
