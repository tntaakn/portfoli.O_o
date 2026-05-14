"use client";

import { useI18n } from "@/context/i18n";
import { Globe } from "lucide-react";
import { useState } from "react";

export function LanguageSwitcher() {
  const { language, setLanguage } = useI18n();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg text-[#CFE7F3] hover:text-[#E6F5FB] hover:bg-[#CFE7F3]/10 transition-all duration-300 font-medium text-sm"
        aria-label="Change language"
      >
        <Globe className="w-4 h-4" />
        <span>{language.toUpperCase()}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-24 glass-strong rounded-lg shadow-lg overflow-hidden z-50">
          <button
            onClick={() => {
              setLanguage("en");
              setIsOpen(false);
            }}
            className={`w-full px-4 py-2 text-left text-sm font-medium transition-colors ${
              language === "en"
                ? "bg-[#CFE7F3]/20 text-[#E6F5FB]"
                : "text-[#CFE7F3] hover:bg-[#CFE7F3]/10"
            }`}
          >
            English
          </button>
          <button
            onClick={() => {
              setLanguage("vi");
              setIsOpen(false);
            }}
            className={`w-full px-4 py-2 text-left text-sm font-medium transition-colors border-t border-[#CFE7F3]/20 ${
              language === "vi"
                ? "bg-[#CFE7F3]/20 text-[#E6F5FB]"
                : "text-[#CFE7F3] hover:bg-[#CFE7F3]/10"
            }`}
          >
            Tiếng Việt
          </button>
        </div>
      )}
    </div>
  );
}
