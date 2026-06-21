"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/content";
import { smoothScrollTo, smoothScrollToElement } from "@/lib/smoothScroll";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const isSolidNav = scrolled || !isHome;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isSolidNav
          ? "bg-black/85 glass-nav shadow-lg shadow-black/30"
          : "bg-transparent"
      }`}
    >
      {/* Scroll Progress Bar */}
      <AnimatePresence>
        {isSolidNav && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/[0.06] overflow-hidden"
          >
            <motion.div
              className="h-full bg-gradient-to-r from-primary-500 via-primary-400 to-accent-400 origin-left"
              style={{ scaleX: scrollYProgress }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            scroll={false}
            onClick={(e) => handleLinkClick(e, "/")}
            className="flex items-center gap-2.5 group"
          >
            <motion.img
              src="/logotransparan.png"
              alt="Logo"
              className="h-10 w-auto object-contain"
              whileHover={{ scale: 1.08, rotate: -3 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            />
            <span className="font-bold text-xl tracking-tight text-white">
              Karangnongko Hub
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                scroll={false}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`relative text-sm font-medium transition-colors group ${
                  isSolidNav
                    ? "text-white/65 hover:text-white"
                    : "text-white/85 hover:text-white"
                }`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-400 rounded-full transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {menuOpen ? (
                <motion.span
                  key="x"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden"
          >
            <div className="px-6 pb-6 pt-2 space-y-1 bg-black/95 glass-nav border-t border-white/[0.08]">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    scroll={false}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="block py-3 text-sm font-medium text-white/70 hover:text-primary-400 hover:pl-2 transition-all"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
