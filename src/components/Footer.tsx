"use client";

import { BookOpen, CalendarDays, MapPin } from "lucide-react";
import { navLinks } from "@/data/content";

export default function Footer() {
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-slate-900 text-white/70">
      {/* Top */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Branding */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-9 h-9 rounded-xl bg-primary-600 flex items-center justify-center text-white font-bold text-lg">
                K
              </span>
              <span className="font-bold text-xl text-white">
                Dusun Karangnongko
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              E-Portofolio dokumentasi digital realisasi program pengabdian
              masyarakat KKN Kelompok 44, Dusun Karangnongko.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Navigasi
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollTo(e, link.href)}
                    className="text-sm hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* KKN Info */}
          <div>
            <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Program KKN
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <BookOpen size={16} className="text-primary-400 flex-shrink-0" />
                LPPM Universitas Kristen Duta Wacana
              </li>
              <li className="flex items-center gap-2">
                <CalendarDays
                  size={16}
                  className="text-primary-400 flex-shrink-0"
                />
                KKN Genap 2026 — Juni s/d Juli
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-primary-400 flex-shrink-0" />
                Dusun Karangnongko, Pacitan
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/50">
            &copy; 2026 Kelompok 44 KKN UKDW. Seluruh hak cipta dilindungi.
          </p>
          <p className="text-xs text-white/40">
            Dibuat dengan ❤️ oleh Tim Kelompok 44
          </p>
        </div>
      </div>
    </footer>
  );
}
