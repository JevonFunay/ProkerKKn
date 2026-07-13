"use client";

import { useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useInView } from "framer-motion";
import { BookOpen, CalendarDays, MapPin } from "lucide-react";
import { navLinks } from "@/data/content";
import { smoothScrollTo, smoothScrollToElement } from "@/lib/smoothScroll";

export default function Footer() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === "/" && isHome) {
      e.preventDefault();
      smoothScrollTo(0);
      return;
    }

    if (!isHome || !href.startsWith("/#")) return;

    e.preventDefault();
    smoothScrollToElement(href.replace("/", ""), 80);
  };

  const columns = [
    {
      delay: 0,
      content: (
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src="/logotransparan.webp" alt="Logo" className="h-10 w-auto object-contain brightness-0 invert" />
            <span className="font-bold text-xl text-white">Dusun Karangnongko</span>
          </div>
          <p className="text-sm leading-relaxed text-white/50">
            E-Portofolio dokumentasi digital realisasi program pengabdian
            masyarakat KKN Kelompok 44, Dusun Karangnongko.
          </p>
        </div>
      ),
    },
    {
      delay: 0.1,
      content: (
        <div>
          <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">
            Navigasi
          </h4>
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  className="text-sm text-white/50 hover:text-primary-400 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ),
    },
    {
      delay: 0.2,
      content: (
        <div>
          <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">
            Program KKN
          </h4>
          <ul className="space-y-3 text-sm text-white/50">
            <li className="flex items-center gap-2">
              <CalendarDays size={16} className="text-primary-400 flex-shrink-0" />
              KKN Reguler 2026 · Juni s/d Juli
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} className="text-primary-400 flex-shrink-0" />
              Dusun Karangnongko, Desa Watukarung, Kec. Pringkuku, Kab. Pacitan
            </li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <footer className="bg-[#1c1917] text-white/55 border-t border-white/[0.06]" ref={ref}>
      {/* Top */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {columns.map(({ delay, content }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay }}
            >
              {content}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="border-t border-white/[0.06]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/35">
            &copy; 2026 Kelompok 44 KKN UKDW. Seluruh hak cipta dilindungi.
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
