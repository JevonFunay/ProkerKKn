"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";

interface ThemeToggleProps {
  className?: string;
  /** "icon" = tombol bulat kecil (navbar desktop). "row" = baris berlabel penuh (dropdown mobile). */
  variant?: "icon" | "row";
}

export default function ThemeToggle({ className = "", variant = "icon" }: ThemeToggleProps) {
  // Null sampai mounted — hindari mismatch dengan class yang di-set oleh script inline
  const [isDark, setIsDark] = useState<boolean | null>(null);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
    setIsDark(next);
  };

  const icon = (dark: boolean) => (
    <AnimatePresence mode="wait" initial={false}>
      {dark ? (
        <motion.span
          key="sun"
          initial={{ rotate: -90, opacity: 0, scale: 0.7 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 90, opacity: 0, scale: 0.7 }}
          transition={{ duration: 0.18 }}
          className="inline-flex"
        >
          <Sun size={variant === "row" ? 15 : 17} />
        </motion.span>
      ) : (
        <motion.span
          key="moon"
          initial={{ rotate: 90, opacity: 0, scale: 0.7 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: -90, opacity: 0, scale: 0.7 }}
          transition={{ duration: 0.18 }}
          className="inline-flex"
        >
          <Moon size={variant === "row" ? 15 : 17} />
        </motion.span>
      )}
    </AnimatePresence>
  );

  if (variant === "row") {
    if (isDark === null) {
      return <div className={`h-[46px] ${className}`} aria-hidden />;
    }
    return (
      <button
        onClick={toggle}
        className={`w-full flex items-center justify-between gap-3 py-3 px-4 text-[15px] text-white/55 hover:text-white hover:bg-white/[0.08] rounded-2xl transition-all duration-200 font-medium cursor-pointer ${className}`}
      >
        <span className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-primary-500/60 flex-shrink-0" />
          {isDark ? "Mode Terang" : "Mode Gelap"}
        </span>
        <span className="w-7 h-7 flex items-center justify-center text-white/60">
          {icon(isDark)}
        </span>
      </button>
    );
  }

  if (isDark === null) {
    // Placeholder dengan ukuran sama agar tidak ada layout shift
    return <div className={`w-9 h-9 ${className}`} aria-hidden />;
  }

  return (
    <motion.button
      whileTap={{ scale: 0.82 }}
      onClick={toggle}
      className={`w-9 h-9 flex items-center justify-center text-white/60 hover:text-white rounded-full hover:bg-white/10 transition-all cursor-pointer flex-shrink-0 ${className}`}
      aria-label={isDark ? "Ubah ke mode terang" : "Ubah ke mode gelap"}
    >
      {icon(isDark)}
    </motion.button>
  );
}
