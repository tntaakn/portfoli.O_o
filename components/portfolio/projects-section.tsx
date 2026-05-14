"use client";

import { motion } from "framer-motion";
import { useState, useRef } from "react";
import Link from "next/link";
import { projects } from "@/data/projects";
import { withBasePath } from "@/lib/utils";
import { useI18n } from "@/context/i18n";

export function ProjectsSection() {
  const { t } = useI18n();
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

  const handleMouseEnter = (projectId: number) => {
    setHoveredProject(projectId);
    const video = videoRefs.current[projectId];
    if (video) {
      video.play().catch(() => { });
    }
  };

  const handleMouseLeave = (projectId: number) => {
    setHoveredProject(null);
    const video = videoRefs.current[projectId];
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  return (
    <section id="projects" className="relative min-h-screen py-20 px-6 md:px-8 z-20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-start gap-8 mb-8">
          <div className="hidden md:flex flex-col items-center pt-2">
            <span
              className="text-sm tracking-[0.3em] text-[#A9C9E2] font-bold"
              style={{ writingMode: "vertical-rl" }}
            >
              SELECTED
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#CFE7F3]">
              {t("projects.title")}
            </h2>
            <p className="text-[#A9C9E2] text-lg mt-4 max-w-2xl">
              A curated selection of my recent work spanning app design and branding.
            </p>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
              onMouseEnter={() => handleMouseEnter(project.id)}
              onMouseLeave={() => handleMouseLeave(project.id)}
            >
              <Link href={`/project/${project.id}`} className="block cursor-pointer">
                <div
                  className="relative aspect-[4/5] overflow-hidden rounded-lg bg-[var(--forest-primary)]/30"
                  style={{
                    boxShadow: hoveredProject === project.id
                      ? `0 12px 36px ${project.color}40`
                      : "0 6px 18px rgba(0,0,0,0.3)",
                  }}
                >
                  {/* Image */}
                  <img
                    src={withBasePath(project.image)}
                    alt={project.title}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${hoveredProject === project.id
                      ? "grayscale-0 scale-105"
                      : "grayscale"
                      }`}
                    crossOrigin="anonymous"
                  />

                  {/* Video Overlay */}
                  {project.video && (
                    <video
                      ref={(el) => { videoRefs.current[project.id] = el; }}
                      src={withBasePath(project.video)}
                      muted
                      loop
                      playsInline
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hoveredProject === project.id ? "opacity-100" : "opacity-0"
                        }`}
                      crossOrigin="anonymous"
                    />
                  )}

                  {/* Color Overlay */}
                  <div
                    className={`absolute inset-0 transition-opacity duration-500 ${hoveredProject === project.id ? "opacity-20" : "opacity-0"
                      }`}
                    style={{ backgroundColor: project.color }}
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                    <p className="text-[9px] md:text-[10px] text-[var(--forest-accent)] tracking-widest mb-1">
                      {project.category} / {project.year}
                    </p>
                    <h3
                      className={`text-md md:text-base lg:text-lg font-bold transition-all duration-500 ${hoveredProject === project.id
                        ? "tracking-wider"
                        : "tracking-normal"
                        }`}
                      style={{
                        color: hoveredProject === project.id ? project.color : "#F4FAFD",
                        textShadow: hoveredProject === project.id
                          ? `0 0 20px ${project.color}80`
                          : "none",
                      }}
                    >
                      {project.title}
                    </h3>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
