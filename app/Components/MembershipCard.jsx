"use client";

import { useContext } from "react";
import { GymContext } from "../Contexts/GymContext";

export default function MembershipCard({
  image,
  title,
  discount,
  popular,
  features,
}) {
  const { gym } = useContext(GymContext);

  return (
    <div className="relative w-full max-w-sm rounded-2xl bg-[#111] text-white overflow-hidden border border-neutral-800 hover:border-red-600 hover:scale-105 transition-all">
      {/* Image */}
      <div
        className="h-48 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${image})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Discount badge */}
        {discount && (
          <span className="absolute top-3 right-3 bg-red-600 text-xs px-3 py-1 rounded-full font-semibold">
            {discount}
          </span>
        )}

        {/* Most popular */}
        {popular && (
          <span className="absolute top-3 left-3 bg-yellow-500 text-black text-xs px-3 py-1 rounded-full font-bold">
            Most Popular
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-4">
        <h3 className="text-xl font-bold">{title}</h3>

        <ul className="space-y-2 text-sm text-gray-300">
          {features.map((item, i) => (
            <li key={i} className="flex items-center gap-2">
              <span className="text-red-600">✔</span>
              {item}
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="mt-4 flex flex-col gap-3">
          <a
            href={`https://wa.me/${gym.phone}`}
            target="_blank"
            className="text-center bg-red-600 hover:bg-red-700 transition-all rounded-xl py-2 font-semibold"
          >
            Contact Us for Details
          </a>

          <a
            href="#contact"
            className="border border-gray-600 hover:border-white transition-all text-center rounded-xl py-2 text-sm"
          >
            Visit Gym
          </a>
        </div>
      </div>
    </div>
  );
}
