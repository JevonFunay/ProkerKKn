"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { smoothScrollTo } from "@/lib/smoothScroll";

const RADIUS = 20;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    return smoothProgress.on("change", (v) => setProgress(v));
  }, [smoothProgress]);

  const dashOffset = CIRCUMFERENCE * (1 - progress);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => smoothScrollTo(0)}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 flex items-center justify-center cursor-pointer"
          aria-label="Kembali ke atas"
        >
          {/* Circular progress ring SVG */}
          <svg
            className="absolute inset-0 w-full h-full -rotate-90"
            viewBox="0 0 48 48"
          >
            {/* Track */}
            <circle
              cx="24"
              cy="24"
              r={RADIUS}
              fill="none"
              stroke="rgba(5,150,105,0.2)"
              strokeWidth="3"
            />
            {/* Progress */}
            <circle
              cx="24"
              cy="24"
              r={RADIUS}
              fill="none"
              stroke="#059669"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray={CIRCUMFERENCE}
              strokeDashoffset={dashOffset}
              style={{ transition: "stroke-dashoffset 0.1s ease" }}
            />
          </svg>

          {/* Button center */}
          <div className="relative z-10 w-9 h-9 bg-primary-600 hover:bg-primary-700 text-white rounded-xl shadow-lg flex items-center justify-center transition-colors duration-200">
            <ArrowUp size={18} />
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
