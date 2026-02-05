"use client";

import { useContext } from "react";
import { GymContext } from "../Contexts/GymContext";
import { LanguageContext } from "../Contexts/LanguageContext";
import useTranslate from "../hooks/useTranslate";
import Map from "./Map,";

export default function Contact() {
  const { gym } = useContext(GymContext);
  const { lang } = useContext(LanguageContext);
  const t = useTranslate();

  return (
    <div
      id="contact"
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
            className="lucide lucide-mail w-8 h-8 text-[#E10600]"
          >
            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
          </svg>
          <h3 className="text-white text-4xl mb-2">{t("contact.title")}</h3>
          <hr className="text-red-600 w-1/5 border-3" />
          <p className="text-neutral-500 text-center">{t("contact.desc")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-3/4 mt-15">
          <div className="space-y-6">
            <h3 className="text-white text-2xl mb-6">{t("contact.visitUs")}</h3>
            <a
              href={`tel:${gym.phone}`}
              className="flex items-center gap-4 bg-[#222] p-6 rounded-xl hover:bg-[#2a2a2a] transition-all duration-300 group shadow-lg hover:shadow-xl"
            >
              <div className="bg-[#E10600] p-3 rounded-full group-hover:scale-110 transition-transform">
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
                  className="lucide lucide-phone w-6 h-6 text-white"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div>
                <p className="text-gray-400 text-sm">{t("contact.phone")}</p>
                <p className="text-white text-lg">{gym.phone}</p>
              </div>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-[#222] p-6 rounded-xl hover:bg-[#2a2a2a] transition-all duration-300 group shadow-lg hover:shadow-xl"
            >
              <div className="bg-[#25D366] p-3 rounded-full group-hover:scale-110 transition-transform">
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
                  className="lucide lucide-message-circle w-6 h-6 text-white"
                >
                  <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                </svg>
              </div>
              <div>
                <p className="text-gray-400 text-sm">{t("contact.whatsapp")}</p>
                <p className="text-white text-lg">{gym.phone}</p>
              </div>
            </a>
            <a
              href="https://www.facebook.com/GriffinGym.eg"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-[#222] p-6 rounded-xl hover:bg-[#2a2a2a] transition-all duration-300 group shadow-lg hover:shadow-xl"
            >
              <div className="bg-blue-600 p-3 rounded-full group-hover:scale-110 transition-transform">
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
                  className="w-6 h-6 text-white"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </div>
              <div>
                <p className="text-gray-400 text-sm">{t("contact.facebook")}</p>
                <p className="text-white text-lg">{t("general.name")}</p>
              </div>
            </a>
            <a
              href={`https://wa.me/${gym.phone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-[#E10600] hover:bg-[#C00500] text-white px-8 py-4 rounded-lg transition-all duration-300 text-center shadow-xl hover:shadow-2xl hover:scale-105 mt-8"
              dir={lang === "EN" ? "ltr" : "rtl"}
            >
              <div className="flex items-center justify-center gap-2">
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
                  className="lucide lucide-message-circle w-5 h-5"
                >
                  <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                </svg>
                <span>{t("contact.sendMsg")}</span>
              </div>
            </a>
          </div>

          <Map />
        </div>
      </div>
    </div>
  );
}
