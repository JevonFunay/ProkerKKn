"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
} from "framer-motion";

export default function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springCfg = { stiffness: 350, damping: 35 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [7, -7]), springCfg);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-7, 7]), springCfg);

  // Spotlight gradient mengikuti kursor
  const glareX = useTransform(x, [-0.5, 0.5], ["15%", "85%"]);
  const glareY = useTransform(y, [-0.5, 0.5], ["15%", "85%"]);
  const glare  = useMotionTemplate`radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.22) 0%, transparent 62%)`;
  const glareOpacity = useSpring(0, { stiffness: 300, damping: 30 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top)  / rect.height - 0.5);
  };

  const onEnter = () => glareOpacity.set(1);

  const onLeave = () => {
    x.set(0);
    y.set(0);
    glareOpacity.set(0);
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      style={{ perspective: "900px" }}
      className="h-full"
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d", willChange: "transform" }}
        className="relative h-full"
      >
        {children}

        {/* Spotlight overlay — di atas semua konten, tidak intercept klik */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none z-10"
          style={{ background: glare, opacity: glareOpacity }}
        />
      </motion.div>
    </div>
  );
}
