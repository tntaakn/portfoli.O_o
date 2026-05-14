"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, Send, Linkedin, Github } from "lucide-react";
import { useI18n } from "@/context/i18n";

export function ContactSection() {
  const { t } = useI18n();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setFormData({ name: "", email: "", message: "" });
    alert(t("contact.successMessage"));
  };

  return (
    <section id="contact" className="relative z-10 py-20">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        {/* Section Header */}
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#CFE7F3] mb-6 text-center">
          {t("contact.title")}
        </h2>
        <p className="text-[#A9C9E2] text-lg text-center max-w-2xl mx-auto mb-16">
          {t("contact.subtitle")}
        </p>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-[#CFE7F3] mb-6">
                {t("contact.contactInfo")}
              </h3>

              <div className="space-y-6">
                <div className="flex items-center gap-4 text-[#7593AF]">
                  <div className="w-12 h-12 glass-light rounded-xl flex items-center justify-center">
                    <Mail className="w-5 h-5 text-[#CFE7F3]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#A9C9E2]">{t("contact.email")}</p>
                    <p className="font-medium text-[#E6F5FB]">annhannh331@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-[#7593AF]">
                  <div className="w-12 h-12 glass-light rounded-xl flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[#CFE7F3]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#A9C9E2]">{t("contact.location")}</p>
                    <p className="font-medium text-[#E6F5FB]">Ho Chi Minh, VN</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-[#7593AF]">
                  <div className="w-12 h-12 glass-light rounded-xl flex items-center justify-center ">
                    <Phone className="w-5 h-5 text-[#CFE7F3]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#A9C9E2]">{t("contact.phone")}</p>
                    <p className="font-medium text-[#E6F5FB]">+84 948 969 316</p>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex gap-4">
                  {[
                    { icon: Linkedin, href: "https://www.linkedin.com/in/akinadesu/", label: "LinkedIn" },
                    { icon: Github, href: "https://github.com/tntaakn", label: "GitHub" },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-14 h-14 glass rounded-xl flex items-center justify-center text-[#CFE7F3] hover:bg-[#CFE7F3]/20 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="glass rounded-2xl p-8 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-[#CFE7F3] mb-6">
              {t("contact.contactForm")}
            </h3>

            <div className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[#CFE7F3] mb-2"
                >
                  {t("contact.name")}
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-[#0a1420]/50 border border-[rgba(169,201,226,0.2)] rounded-xl text-[#E6F5FB] placeholder:text-[#A9C9E2] focus:outline-none focus:ring-2 focus:ring-[#F4FAFD]/50 focus:border-transparent transition-all backdrop-blur-sm"
                  placeholder={t("contact.name")}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[#CFE7F3] mb-2"
                >
                  {t("contact.email")}
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-[#0a1420]/50 border border-[rgba(169,201,226,0.2)] rounded-xl text-[#E6F5FB] placeholder:text-[#A9C9E2] focus:outline-none focus:ring-2 focus:ring-[#F4FAFD]/50 focus:border-transparent transition-all backdrop-blur-sm"
                  placeholder={t("contact.emailPlaceholder")}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[#CFE7F3] mb-2"
                >
                  {t("contact.message")}
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-[#0a1420]/50 border border-[rgba(169,201,226,0.2)] rounded-xl text-[#E6F5FB] placeholder:text-[#A9C9E2] focus:outline-none focus:ring-2 focus:ring-[#F4FAFD]/50 focus:border-transparent transition-all resize-none backdrop-blur-sm"
                  placeholder={t("contact.message")}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-[#CFE7F3] text-[#0a1420] font-semibold rounded-xl hover:bg-[#1560bd] hover:text-white transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
              >
                {isSubmitting ? (
                  t("contact.sending")
                ) : (
                  <>
                    {t("contact.send")}
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Footer */}
        <div className="mt-24 text-center">
          <p className="text-[#A9C9E2] text-sm">
            &copy; 2026 Truong Nguyen Thuy Anh - Akina
          </p>
        </div>
      </div>
    </section>
  );
}
