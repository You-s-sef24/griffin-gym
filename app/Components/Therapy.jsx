"use client";

import { useContext } from "react";
import ProgramCard from "./ProgramCard";
import { GymContext } from "../Contexts/GymContext";
import TherapyNotes from "./TherapyNotes";

export default function Therapy() {
  const { gym } = useContext(GymContext);

  const renderTherapies = gym.therapies.map((therapy) => {
    return (
      <ProgramCard
        image={therapy.image}
        title={therapy.title}
        desc={therapy.desc}
        discount={therapy.discount}
        badge={therapy.badge}
        icon={therapy.icon}
        key={therapy.id}
      />
    );
  });

  return (
    <div className="flex flex-col items-center mt-15">
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
          className="lucide lucide-heart w-8 h-8 text-[#E10600]"
        >
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
        </svg>
        <h3 className="text-white text-center text-4xl mb-2">
          Recovery & Physical Therapy
        </h3>
        <p className="text-neutral-500 text-center">
          Dedicated professionals committed to making your gym experience
          exceptional
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-15">
        {renderTherapies}
      </div>

      <TherapyNotes />
    </div>
  );
}
