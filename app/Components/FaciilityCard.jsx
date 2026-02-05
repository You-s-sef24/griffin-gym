"use client";

import { useContext } from "react";
import { GymContext } from "../Contexts/GymContext";
import useTranslate from "../hooks/useTranslate";

export default function FacilityCard({ title, desc, image, icon, badge }) {
  const { gym } = useContext(GymContext);
  const t = useTranslate();

  return (
    <div className="relative max-w-sm rounded-2xl bg-[#111] text-white overflow-hidden border border-neutral-800 hover:border-red-600 hover:scale-105 transition-all w-full">
      {/* Image */}
      <div
        className="h-48 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${image})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Badge */}
        {badge && (
          <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
            {badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3">
        {/* Title + Icon */}
        <div className="flex items-center gap-2">
          {icon && <span className="text-red-500 text-xl">{icon}</span>}
          <h3 className="text-xl font-bold">{title}</h3>
        </div>

        <p className="text-sm text-gray-300 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
