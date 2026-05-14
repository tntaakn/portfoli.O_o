"use client";

import { motion } from "framer-motion";
import { GlassCard } from "./glass-card";
import { Lightbulb, Palette, Code, CheckCircle } from "lucide-react";
import { useI18n } from "@/context/i18n";

const iconMap = {
  Lightbulb,
  Palette,
  Code,
  CheckCircle,
};

export function AboutSection() {
  const { t } = useI18n();

  const skills = t("about.skills") as string[];
  const experiences = t("about.experiences") as string[];
  const processItems = t("about.process") as Array<{ step: string; title: string; description: string }>;

  const workProcess = [
    {
      icon: Lightbulb,
      title: processItems[0]?.title || "Discovery & Strategy",
      description: processItems[0]?.description || "Understanding project goals, user needs, and technical requirements to create a solid foundation.",
      step: processItems[0]?.step || "STEP 1",
      color: "from-pink-500 to-pink-400",
    },
    {
      icon: Palette,
      title: processItems[1]?.title || "Design & Prototyping",
      description: processItems[1]?.description || "Creating pixel-perfect designs in Figma with accessibility and responsiveness in mind.",
      step: processItems[1]?.step || "STEP 2",
      color: "from-purple-500 to-purple-400",
    },
    {
      icon: Code,
      title: processItems[2]?.title || "Development & Implementation",
      description: processItems[2]?.description || "Converting designs to production-ready code using React, Next.js and modern web standards.",
      step: processItems[2]?.step || "STEP 3",
      color: "from-green-500 to-green-400",
    },
    {
      icon: CheckCircle,
      title: processItems[3]?.title || "Testing & Optimization",
      description: processItems[3]?.description || "Ensuring WCAG 2.2 AA compliance, performance optimization, and cross-browser compatibility.",
      step: processItems[3]?.step || "STEP 4",
      color: "from-orange-500 to-orange-400",
    },
  ];

  return (
    <section id="about" className="relative min-h-screen py-20 px-6 md:px-8 z-20">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#CFE7F3] mb-12 text-center"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          {t("about.title")}
        </motion.h2>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-center mb-12"
        >
          <blockquote className="text-xl md:text-3xl italic text-[#E6F5F2] leading-relaxed max-w-4x2 mx-auto">
            <span className="text-[var(--forest-accent)] text-4xl">&ldquo;</span>
            {t("about.quote")}
            <span className="text-[var(--forest-accent)] text-4xl">&rdquo;</span>
          </blockquote>
          <cite className="text-[var(--forest-accent)] text-lg mt-4 block">{t("about.quoteAuthor")}</cite>
        </motion.div>

        <GlassCard className="p-8 md:p-8 mb-12" delay={0.1}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-[#CFE7F3] mb-6" style={{ fontFamily: "var(--font-playfair), serif", fontWeight: 600, fontSize: "24px" }}>
              {t("about.greeting")}
            </h2>
            <p className="text-[#A9C9E2] text-lg leading-relaxed" style={{ textAlign: "justify", fontSize: "16px" }}>
              {t("about.description")}
            </p>
          </motion.div>
        </GlassCard>

        {/* What I Have - Skills & Experience */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <GlassCard className="p-8" delay={0.2}>
            <h3 className="text-2xl font-serif text-[#CFE7F3] mb-6" style={{ fontFamily: "var(--font-playfair), serif", fontWeight: 600 }}>
              {t("about.skillsTitle")}
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="px-4 py-2 rounded-full bg-[var(--forest-secondary)]/30 text-[#E6F5FB] text-sm border border-[var(--forest-accent)]/30"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="p-8" delay={0.3}>
            <h3 className="text-2xl font-serif text-[#CFE7F3] mb-6" style={{ fontFamily: "var(--font-playfair), serif", fontWeight: 600 }}>
              {t("about.experienceTitle")}
            </h3>
            <ul className="space-y-4">
              {experiences.map((exp, index) => (
                <motion.li
                  key={exp}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="flex items-center gap-3 text-[#A9C9E2]"
                >
                  <span className="w-2 h-2 rounded-full bg-[#A9C9E2]" />
                  {exp}
                </motion.li>
              ))}
            </ul>
          </GlassCard>
        </div>

        {/* How I Do - Work Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h3 className="text-3xl font-serif text-[#CFE7F3] mb-8 text-center" style={{ fontFamily: "var(--font-playfair), serif", fontWeight: 600 }}>
            {t("about.processTitle")}
          </h3>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {workProcess.map((step, index) => (
            <GlassCard key={step.title} className="p-6 relative overflow-hidden" delay={0.1 * index}>
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center flex-shrink-0`}>
                  <step.icon className="w-6 h-6 text-white" />
                </div>
                <span className={`text-sm font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                  {step.step}
                </span>
              </div>
              <h4 className="text-lg font-semibold text-[#E6F5FB] mb-3">
                {step.title}
              </h4>
              <p className="text-[#A9C9E2]/80 text-sm leading-relaxed mb-4">
                {step.description}
              </p>

              {/* Connector line */}
              {index < workProcess.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 w-6 h-0.5 bg-gradient-to-r from-[var(--forest-accent)]/50 to-transparent translate-x-full" />
              )}
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
