"use client";

import { motion } from "framer-motion";
import { AnimatedPortfolioTitle } from "./animated-title";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="text-center z-20"
      >
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-[var(--forest-accent)] text-sm md:text-base tracking-[0.3em] uppercase mb-8 font-sans"
        >
          Welcome to my creative space
        </motion.p>

        <AnimatedPortfolioTitle />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-lg md:text-xl mt-8 tracking-wider font-serif italic"
          style={{ color: "rgb(207,231,243)" }}
        >
          - by Akina -
        </motion.p>
      </motion.div>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        onClick={scrollToAbout}
        className="absolute bottom-12 z-20 flex flex-col items-center gap-2 text-[var(--forest-accent)] hover:text-[var(--forest-light)] transition-colors cursor-pointer"
        aria-label="Scroll to About section"
      >
        <span className="text-sm tracking-widest uppercase font-sans">Explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.button>
    </div>
  );
}
