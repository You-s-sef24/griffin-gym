"use client";

import { useContext } from "react";
import { GymContext } from "../Contexts/GymContext";
import { LanguageContext } from "../Contexts/LanguageContext";
import useTranslate from "../hooks/useTranslate";
import Image from "next/image";

export default function Footer() {
  const { gym } = useContext(GymContext);
  const { lang } = useContext(LanguageContext);
  const t = useTranslate();

  return (
    <footer
      className="bg-black py-8 border-t border-white/10"
      dir={lang === "EN" ? "ltr" : "rtl"}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image
              src={gym.logo}
              alt="Griffin Gym Logo"
              width={104}
              height={104}
              className="w-24 h-auto"
            />
          </div>

          {/* Copyright */}
          <div className="text-gray-400 text-sm">{t("footer.rights")}</div>

          {/* Dev Credit */}
          <div className="text-gray-500 text-xs text-center">
            {t("footer.developedBy")}{" "}
            <a
              href="https://www.linkedin.com/in/you-s-sef24"
              target="_blank"
              className="text-white font-medium hover:text-red-600 transition"
            >
              Youssef
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
