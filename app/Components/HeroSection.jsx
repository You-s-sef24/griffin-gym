"use client";

import { useContext } from "react";
import { GymContext } from "../Contexts/GymContext";
import { LanguageContext } from "../Contexts/LanguageContext";
import useTranslate from "../hooks/useTranslate";

export default function HeroSection() {
  const { gym } = useContext(GymContext);
  const { lang } = useContext(LanguageContext);
  const t = useTranslate();

  return (
    <div
      id="home"
      className="h-160 bg-center bg-cover bg-no-repeat flex items-center justify-center"
      style={{ backgroundImage: `url('${gym.heroImage}')` }}
      dir={lang === "EN" ? "ltr" : "rtl"}
    >
      <div className="flex flex-col items-center w-1/2 gap-2">
        <img src={gym.logo} className="w-3/4" loading="lazy" alt="logo" />
        <p className="text-white text-center font-bold text-4xl">
          {t("general.slogan")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4">
          <a
            href="#contact"
            className="flex justify-center items-center gap-1 text-xl text-white bg-red-600 rounded-xl cursor-pointer hover:bg-red-700 hover:scale-105 transition-all p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-map-pin w-5 h-5"
              data-fg-bsqs47="1.25:2.1503:/src/app/components/HeroSection.tsx:76:13:3744:30:e:MapPin::::::EHMc"
            >
              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <p> {t("general.visitUs")}</p>
          </a>

          <a
            href={`https://wa.me/${gym.phone}`}
            className="flex justify-center items-center gap-1 text-xl text-red-600 bg-white rounded-xl cursor-pointer hover:bg-gray-200 hover:scale-105 transition-all p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-message-circle w-5 h-5 text-[#E10600]"
              data-fg-bsqs51="1.25:2.1503:/src/app/components/HeroSection.tsx:85:13:4215:52:e:MessageCircle::::::OJK"
            >
              <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
            </svg>
            <p> {t("general.contact")}</p>
          </a>
        </div>
      </div>
    </div>
  );
}
