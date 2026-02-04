"use client";

import { useContext } from "react";
import { GymContext } from "../Contexts/GymContext";
import { LanguageContext } from "../Contexts/LanguageContext";
import CoachesCard from "./CoachesCard";

export default function Coaches() {
  const { gym } = useContext(GymContext);
  const { lang } = useContext(LanguageContext);

  const renderCoaches = gym.coaches.map((coach) => {
    return (
      <CoachesCard
        name={coach.name}
        badge={coach.badge}
        exp={coach.exp}
        role={coach.role}
        image={coach.image}
        key={coach.id}
      />
    );
  });

  return (
    <div id="coaches" className="pb-10" dir={lang === "EN" ? "ltr" : "rtl"}>
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
          className="lucide lucide-users w-8 h-8 text-[#E10600]"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
        <h3 className="text-white text-4xl mb-2">Our Expert Coaches</h3>
        <hr className="text-red-600 w-1/5 border-3 mb-6" />
        <p className="text-neutral-500">
          Train with certified professionals dedicated to your success
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-15">
          {renderCoaches}
        </div>
      </div>
    </div>
  );
}
