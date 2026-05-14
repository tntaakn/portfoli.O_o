"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { withBasePath } from "@/lib/utils";

export default function ProjectDetailClient({ project }: { project: Project }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  return (
    <>
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-6 left-6 z-50"
      >
        <Link
          href="/#projects"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--forest-secondary)]/50 backdrop-blur-sm border border-[var(--forest-accent)]/20 text-[var(--forest-accent)] hover:text-[var(--forest-light)] hover:bg-[var(--forest-secondary)]/70 transition-all duration-300"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm font-medium">Back</span>
        </Link>
      </motion.div>

      <div className="max-w-6xl mx-auto px-6 md:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-[var(--forest-secondary)]/30">
              <img
                src={withBasePath(project.galleryImages[selectedImageIndex])}
                alt={`${project.title} - Image ${selectedImageIndex + 1}`}
                className="w-full h-full object-cover transition-all duration-500"
                crossOrigin="anonymous"
              />
            </div>

            <div className="grid grid-cols-3 gap-3">
              {project.galleryImages.slice(0, 3).map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`relative aspect-square overflow-hidden rounded-xl transition-all duration-300 ${selectedImageIndex === index
                    ? "ring-2 ring-offset-2 ring-offset-[var(--forest-primary)]"
                    : "opacity-60 hover:opacity-100"
                    }`}
                >
                  <img
                    src={withBasePath(img)}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                    crossOrigin="anonymous"
                  />
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col space-y-6 pt-0"
          >
            <p className="text-sm tracking-[0.3em] font-medium mb-3" style={{ color: project.color }}>
              {project.category}
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-5xl font-semibold text-[#CFE7F3] leading-tight decoration-solid" style={{ textShadow: `0 0 60px ${project.color}30` }}>
              {project.title}
            </h1>

            <div className="space-y-2">
              <h2 className="text-sm tracking-[0.2em] text-[var(--forest-accent)] uppercase font-semibold">{project.description}</h2>
            </div>

            <div className="space-y-2">
              <h2 className="text-sm tracking-[0.2em] text-[var(--forest-accent)] font-semibold">INTRODUCTION</h2>
              <p className="text-[var(--forest-light)]/80 leading-relaxed text-base font-normal">{project.introduction}</p>
            </div>

            <div className="space-y-2">
              <h2 className="text-sm tracking-[0.2em] text-[var(--forest-accent)] font-semibold">MY ROLE: {project.role}</h2>
              <ul className="space-y-2">
                {project.roleItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full mt-2 flex-shrink-0 bg-[var(--forest-light)]/80" />
                    <p className="text-[var(--forest-light)]/80 leading-relaxed text-sm md:text-base"><span className="font-semibold">{item.title}:</span> {item.description}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-2">
              <h2 className="text-sm tracking-[0.2em] text-[var(--forest-accent)] font-semibold">OUTCOME</h2>
              <p className="text-[var(--forest-light)]/80 leading-relaxed text-base font-normal">{project.outcome}</p>
            </div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }} className="mt-20 space-y-8">
          {project.additionalImages.map((img, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, delay: index * 0.1 }} className="relative w-full overflow-hidden rounded-2xl">
              <img src={withBasePath(img)} alt={`${project.title} - Additional ${index + 1}`} className="w-full h-auto object-cover" crossOrigin="anonymous" />
            </motion.div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mt-20">
          <p className="text-[#CFE7F3] text-sm md:text-base tracking-[0.3em] uppercase mb-8 font-sans">Thanks for watching!</p>
        </motion.div>
      </div>

      <div className="hidden lg:block fixed right-8 top-1/2 -translate-y-1/2 z-20">
        <div className="flex flex-col items-center gap-8">
          <span className="text-xs tracking-[0.3em] text-[#A9C9E2] font-medium" style={{ writingMode: "vertical-rl" }}>AKINA</span>
          <div className="w-px h-24 bg-gradient-to-b from-transparent via-[#7593AF] to-transparent" />
          <span className="text-xs tracking-[0.3em] text-[#A9C9E2] font-medium" style={{ writingMode: "vertical-rl" }}>PROJECTS</span>
        </div>
      </div>

      <style jsx global>{`
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: var(--forest-dark); }
        ::-webkit-scrollbar-thumb { background: var(--forest-secondary); border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: var(--forest-accent); }
        html { scroll-behavior: smooth; }
        ::selection { background: var(--forest-accent); color: var(--forest-dark); }
      `}</style>
    </>
  );
}
