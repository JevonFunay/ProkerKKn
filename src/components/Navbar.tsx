"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/content";
import { smoothScrollTo, smoothScrollToElement } from "@/lib/smoothScroll";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome   = pathname === "/";

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setMenuOpen(false);
    if (href === "/" && isHome) {
      e.preventDefault();
      smoothScrollTo(0);
      return;
    }
    if (!isHome || !href.startsWith("/#")) return;
    e.preventDefault();
    smoothScrollToElement(href.replace("/", ""), 80);
  };

  return (
    <div
      className="fixed left-1/2 -translate-x-1/2 z-50"
      style={{ top: "calc(env(safe-area-inset-top) + 14px)" }}
    >
      {/* Border-radius tetap 28px di semua state — tidak pernah berubah */}
      <div
        className="rounded-[28px] bg-slate-900/60 backdrop-blur-2xl border border-white/[0.12] shadow-2xl shadow-black/40 overflow-hidden"
      >
        {/* Main pill row */}
        <div className="flex items-center gap-3 px-5 py-3.5 whitespace-nowrap">
          {/* Logo */}
          <Link
            href="/"
            scroll={!isHome}
            onClick={(e) => handleLinkClick(e, "/")}
            className="flex items-center gap-2.5 pr-1"
          >
            <motion.img
              src="/logotransparan.png"
              alt="Logo"
              className="h-8 w-auto brightness-0 invert"
              whileHover={{ scale: 1.08, rotate: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            />
            <span className="font-bold text-[15px] text-white/85 tracking-tight">
              Karangnongko
            </span>
          </Link>

          {/* Divider desktop */}
          <div className="h-4 w-px bg-white/10 hidden md:block" />

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                scroll={!isHome}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-white/50 hover:text-white hover:bg-white/[0.08] text-[13px] font-semibold px-4 py-2 rounded-full transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <motion.button
            whileTap={{ scale: 0.82 }}
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden ml-1 w-9 h-9 flex items-center justify-center text-white/60 hover:text-white rounded-full hover:bg-white/10 transition-all cursor-pointer flex-shrink-0"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {menuOpen ? (
                <motion.span
                  key="x"
                  initial={{ rotate: -90, opacity: 0, scale: 0.7 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 90, opacity: 0, scale: 0.7 }}
                  transition={{ duration: 0.18 }}
                >
                  <X size={18} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0, scale: 0.7 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: -90, opacity: 0, scale: 0.7 }}
                  transition={{ duration: 0.18 }}
                >
                  <Menu size={18} />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Island blooms downward — stagger reveal */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              transition={{ type: "spring", stiffness: 380, damping: 36 }}
              className="md:hidden overflow-hidden"
            >
              <div className="mx-5 h-px bg-white/[0.07]" />
              <nav className="px-4 pt-2 pb-4 min-w-[240px] space-y-0.5">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: -12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: i * 0.07,
                      duration: 0.28,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <Link
                      href={link.href}
                      scroll={!isHome}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className="flex items-center gap-3 py-3 px-4 text-[15px] text-white/55 hover:text-white hover:bg-white/[0.08] rounded-2xl transition-all duration-200 font-medium"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-500/60 flex-shrink-0" />
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
