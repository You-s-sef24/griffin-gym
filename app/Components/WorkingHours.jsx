"use client";

import { useContext } from "react";
import { GymContext } from "../Contexts/GymContext";
import { LanguageContext } from "../Contexts/LanguageContext";
import useTranslate from "../hooks/useTranslate";

export default function WorkingHours() {
  const { gym } = useContext(GymContext);
  const { lang } = useContext(LanguageContext);
  const t = useTranslate();

  return (
    <div
      id="hours"
      className="bg-neutral-900 pb-10"
      dir={lang === "EN" ? "ltr" : "rtl"}
    >
      <div className="flex flex-col items-center pt-18">
        <div className="flex flex-col items-center gap-2">
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
            className="lucide lucide-calendar w-8 h-8 text-[#E10600]"
          >
            <path d="M8 2v4"></path>
            <path d="M16 2v4"></path>
            <rect width="18" height="18" x="3" y="4" rx="2"></rect>
            <path d="M3 10h18"></path>
          </svg>
          <h3 className="text-white text-4xl mb-2">
            {t("workingHours.title")}
          </h3>
          <hr className="text-red-600 w-1/5 border-3" />
          <p className="text-neutral-500">{t("workingHours.desc")} </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-15 w-3/4">
          <div className="relative bg-[#222] rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group overflow-hidden">
            <div className="absolute top-0 ltr:right-0 rtl:left-0 w-32 h-32 bg-pink-600 opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity"></div>
            <div className="relative z-10">
              <div className="inline-flex p-4 bg-pink-600 rounded-full mb-4 shadow-lg">
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
                  className="lucide lucide-calendar w-6 h-6 text-white"
                >
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path>
                </svg>
              </div>
              <h3 className="text-white text-2xl mb-3">
                {t("workingHours.women")}
              </h3>
              <div className="flex items-center gap-3 text-gray-300 text-lg">
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
                  className="lucide lucide-clock w-5 h-5 text-[#E10600]"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <span>{t("workingHours.timeW")}</span>
              </div>
            </div>
          </div>

          <div className="relative bg-[#222] rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group overflow-hidden">
            <div className="absolute top-0 ltr:right-0 rtl:left-0 w-32 h-32 bg-pink-600 opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity"></div>
            <div className="relative z-10">
              <div className="inline-flex p-4 bg-blue-600 rounded-full mb-4 shadow-lg">
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
                  className="lucide lucide-calendar w-6 h-6 text-white"
                >
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path>
                </svg>
              </div>
              <h3 className="text-white text-2xl mb-3">
                {t("workingHours.men")}
              </h3>
              <div className="flex items-center gap-3 text-gray-300 text-lg">
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
                  className="lucide lucide-clock w-5 h-5 text-[#E10600]"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <span>{t("workingHours.timeM")}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-3 bg-[#E10600]/10 border border-[#E10600]/30 rounded-lg p-4 w-1/2 mx-auto mt-6">
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
            className="lucide lucide-circle-alert w-5 h-5 text-[#E10600] flex-shrink-0"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" x2="12" y1="8" y2="12"></line>
            <line x1="12" x2="12.01" y1="16" y2="16"></line>
          </svg>
          <p className="text-gray-300 text-sm">{t("workingHours.close")}</p>
        </div>
      </div>
    </div>
  );
}
