"use client";

import { useContext } from "react";
import { GymContext } from "../Contexts/GymContext";
import { LanguageContext } from "../Contexts/LanguageContext";
import useTranslate from "../hooks/useTranslate";

export default function Rules() {
  const { gym } = useContext(GymContext);
  const { lang } = useContext(LanguageContext);
  const t = useTranslate();

  const renderRules = t("rules.rules").map((rule, i) => {
    return (
      <div className="flex items-center gap-2" key={i}>
        <div className="w-8 h-8 bg-[#E10600] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-circle-check w-5 h-5 text-white"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <path d="m9 12 2 2 4-4"></path>
          </svg>
        </div>
        <p className="text-white">{rule}</p>
      </div>
    );
  });

  return (
    <div id="rules" className="pb-10" dir={lang === "EN" ? "ltr" : "rtl"}>
      <div className="flex flex-col items-center pt-18">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-shield-check w-8 h-8 text-[#E10600]"
        >
          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
          <path d="m9 12 2 2 4-4"></path>
        </svg>
        <h3 className="text-white text-4xl text-center mb-2">
          {t("rules.title")}
        </h3>
        <hr className="text-red-600 w-1/5 border-3 mb-6" />
        <p className="text-neutral-500 text-center mb-15">{t("rules.desc")}</p>

        <div className="bg-neutral-800 rounded flex flex-col gap-2 w-3/4 p-8">
          {renderRules}
        </div>
      </div>
    </div>
  );
}
