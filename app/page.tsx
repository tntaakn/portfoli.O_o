"use client";

import { useEffect, useState } from "react";
import { Fireflies } from "@/components/portfolio/fireflies";
import { Navigation } from "@/components/portfolio/navigation";
import { HeroSection } from "@/components/portfolio/hero-section";
import { AboutSection } from "@/components/portfolio/about-section";
import { ProjectsSection } from "@/components/portfolio/projects-section";
import { ContactSection } from "@/components/portfolio/contact-section";
import { withBasePath } from "@/lib/utils";

export default function PortfolioPage() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      // Calculate progress: 0 at top, 1 when scrolled past hero section
      const progress = Math.min(scrollY / windowHeight, 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[var(--forest-dark)]">
      {/* Hero Section with Magical Forest Background */}
      <section className="relative min-h-screen">
        {/* Forest Background - only in hero */}
        <div
          className="absolute inset-0 z-0 overflow-hidden"
          style={{
            opacity: 1 - scrollProgress,
            transform: `scale(${1 + scrollProgress * 0.1})`,
            filter: `blur(${scrollProgress * 10}px)`,
            transition: "opacity 0.1s ease-out, transform 0.1s ease-out, filter 0.1s ease-out",
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url('${withBasePath("/images/magical-forest.jpg")}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-[var(--forest-dark)]/40" />

          {/* Subtle gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to bottom, rgba(10, 25, 41, 0.2) 0%, rgba(10, 25, 41, 0.5) 70%, rgba(10, 25, 41, 1) 100%)",
            }}
          />
        </div>

        {/* Hero Content */}
        <HeroSection />
      </section>

      {/* Solid Background Sections with Fireflies */}
      <div className="relative bg-[var(--forest-dark)]">
        {/* Animated Fireflies - covers all sections below hero */}
        <Fireflies />

        {/* Content Sections */}
        <div className="relative z-20">
          <AboutSection />
          <ProjectsSection />
          <ContactSection />
        </div>
      </div>

      {/* Navigation */}
      <Navigation />

      {/* Custom scrollbar styles */}
      <style jsx global>{`
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: var(--forest-dark);
        }
        ::-webkit-scrollbar-thumb {
          background: var(--forest-secondary);
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: var(--forest-accent);
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
        
        /* Selection color */
        ::selection {
          background: var(--forest-accent);
          color: var(--forest-dark);
        }
      `}</style>

      {/* Right Sidebar - PROJECTS */}
      <div className="hidden lg:block fixed right-8 top-1/2 -translate-y-1/2 z-20">
        <div className="flex flex-col items-center gap-8">
          <span
            className="text-xs tracking-[0.3em] text-[#A9C9E2] font-medium"
            style={{ writingMode: "vertical-rl" }}
          >
            AKINA
          </span>
          <div className="w-px h-24 bg-gradient-to-b from-transparent via-[#7593AF] to-transparent" />
          <span
            className="text-xs tracking-[0.3em] text-[#A9C9E2] font-medium"
            style={{ writingMode: "vertical-rl" }}
          >
            SPACE
          </span>
        </div>
      </div>
    </main>
  );
}
