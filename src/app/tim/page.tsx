import type { Metadata } from "next";
import { GraduationCap, UserRound, UsersRound } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Profil Tim Kelompok 44 | E-Portofolio KKN",
  description:
    "Profil Dosen Pembimbing Lapangan dan anggota KKN Kelompok 44 Universitas Kristen Duta Wacana.",
};

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

export default function TimPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-50 pt-24 lg:pt-28">
        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-18 text-center">
            <span className="inline-flex items-center gap-2 text-primary-600 font-semibold text-sm tracking-widest uppercase mb-4">
              <UsersRound size={16} />
              Profil Tim
            </span>
            <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 mb-4">
              Profil <span className="gradient-text">Kelompok 44</span>
            </h1>
            <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Mahasiswa Kuliah Kerja Nyata Universitas Kristen Duta Wacana -
              Periode Genap 2025/2026
            </p>
          </div>
        </section>

        <section className="py-14 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto bg-white border border-slate-100 rounded-2xl shadow-sm p-8 text-center">
              <div className="w-28 h-28 mx-auto rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mb-5">
                <GraduationCap size={52} strokeWidth={1.8} />
              </div>
              <p className="text-xs font-semibold text-primary-600 uppercase tracking-widest mb-2">
                DPL
              </p>
              <h2 className="font-bold text-xl text-slate-900 leading-snug">
                {dpl.name}
              </h2>
              <p className="text-sm text-slate-500 mt-2">{dpl.role}</p>
            </div>
          </div>
        </section>

        <section className="pb-20 lg:pb-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="font-bold text-2xl sm:text-3xl text-slate-900">
                Anggota Tim
              </h2>
              <div className="w-14 h-1 bg-primary-500 rounded-full mx-auto mt-4" />
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {teamMembers.map((member) => (
                <article
                  key={member.name}
                  className="bg-white border border-slate-100 rounded-2xl shadow-sm p-5 sm:p-6 text-center"
                >
                  <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mb-4">
                    <UserRound size={38} strokeWidth={1.8} />
                  </div>
                  <h3 className="font-bold text-sm sm:text-base text-slate-900 leading-snug break-words">
                    {member.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-primary-600 font-medium mt-2">
                    {member.role}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
