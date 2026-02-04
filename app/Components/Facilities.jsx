"use client";

import { useContext } from "react";
import { GymContext } from "../Contexts/GymContext";
import { LanguageContext } from "../Contexts/LanguageContext";
import FacilityCard from "./FacilitiesCard";

export default function Facilities() {
  const { gym } = useContext(GymContext);
  const { lang } = useContext(LanguageContext);

  const renderFacilities = gym.facilities.map((facility) => {
    return (
      <FacilityCard
        image={facility.image}
        title={facility.title}
        desc={facility.desc}
        badge={facility.badge}
        icon={facility.icon}
        key={facility.id}
      />
    );
  });

  return (
    <div
      id="facilities"
      className="bg-neutral-900 pb-10"
      dir={lang === "EN" ? "ltr" : "rtl"}
    >
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
          className="lucide lucide-sparkles w-8 h-8 text-[#E10600]"
        >
          <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
          <path d="M20 3v4"></path>
          <path d="M22 5h-4"></path>
          <path d="M4 17v2"></path>
          <path d="M5 18H3"></path>
        </svg>
        <h3 className="text-white text-4xl mb-2">Our Facilities</h3>
        <hr className="text-red-600 w-1/5 border-3 mb-6" />
        <p className="text-neutral-500">
          Premium amenities for your comfort and recovery
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-15">
          {renderFacilities}
        </div>
      </div>
    </div>
  );
}
