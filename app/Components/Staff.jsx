"use client";

import { useContext } from "react";
import { GymContext } from "../Contexts/GymContext";
import { LanguageContext } from "../Contexts/LanguageContext";
import StaffCard from "./StaffCard";
import useTranslate from "../hooks/useTranslate";

export default function Staff() {
  const { gym } = useContext(GymContext);
  const { lang } = useContext(LanguageContext);
  const t = useTranslate();

  const renderTeam = t("staff.managmentTeam").map((member) => {
    return (
      <StaffCard
        name={member.name}
        badge={member.badge}
        exp={member.exp}
        role={member.role}
        image={member.image}
        schedule={member.schedule}
        key={member.id}
      />
    );
  });

  const renderCoaches = t("staff.coaches").map((coach) => {
    return (
      <StaffCard
        name={coach.name}
        badge={coach.badge}
        exp={coach.exp}
        role={coach.role}
        image={coach.image}
        schedule={coach.schedule}
        key={coach.id}
      />
    );
  });

  return (
    <div id="staff" className="pb-10" dir={lang === "EN" ? "ltr" : "rtl"}>
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
        <h3 className="text-white text-4xl text-center mb-2">
          {t("staff.title")}
        </h3>
        <hr className="text-red-600 w-1/5 border-3 mb-6" />
        <p className="text-neutral-500 text-center mb-15">{t("staff.desc")} </p>

        <h3 className="text-white text-center text-2xl flex items-center gap-2">
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
            className="lucide lucide-star w-6 h-6 text-[#E10600]"
          >
            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
          </svg>
          {t("staff.managementTitle")}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-15">
          {renderTeam}
        </div>
        <h3 className="text-white text-center text-2xl flex items-center gap-1">
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
            className="lucide lucide-award w-6 h-6 text-[#E10600]"
          >
            <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
            <circle cx="12" cy="8" r="6"></circle>
          </svg>
          {t("staff.coachesTitle")}
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 my-15">
          {renderCoaches}
        </div>
      </div>
    </div>
  );
}
