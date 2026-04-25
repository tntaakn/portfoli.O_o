"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function GlassCard({ children, className = "", delay = 0 }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={`
        backdrop-blur-sm 
        bg-[var(--forest-primary)]/20 
        border border-[var(--forest-accent)]/20
        rounded-2xl 
        shadow-[0_8px_32px_rgba(0,0,0,0.5)]
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}
