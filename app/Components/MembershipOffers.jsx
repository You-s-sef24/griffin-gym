"use client";

import { useContext } from "react";
import { GymContext } from "../Contexts/GymContext";
import { LanguageContext } from "../Contexts/LanguageContext";
import MembershipCard from "./MembershipCard";
import ProgramCard from "./ProgramCard";
import Notes from "./Notes";
import useTranslate from "../hooks/useTranslate";

export default function MembershipOffers() {
  const { gym } = useContext(GymContext);
  const { lang } = useContext(LanguageContext);
  const t = useTranslate();

  const offers = t("memberships.memberships").map((offer) => {
    return (
      <MembershipCard
        title={offer.title}
        image={offer.image}
        discount={offer.discount}
        features={offer.services}
        key={offer.id}
      />
    );
  });

  const programs = t("private.programs").map((program) => {
    return (
      <ProgramCard
        title={program.title}
        desc={program.desc}
        image={program.image}
        key={program.id}
      />
    );
  });

  return (
    <div id="memberships" className="pb-10" dir={lang === "EN" ? "ltr" : "rtl"}>
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
          className="lucide lucide-award w-8 h-8 text-[#E10600]"
          data-fg-npo44="1.30:2.3683:/src/app/components/MembershipSection.tsx:139:13:5956:44:e:Award::::::DzwC"
        >
          <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
          <circle cx="12" cy="8" r="6"></circle>
        </svg>
        <h3 className="text-white text-4xl mb-2">{t("memberships.title")}</h3>
        <hr className="text-red-600 w-1/5 border-3 mb-6" />
        <p className="text-neutral-500">{t("memberships.desc")} </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-15">
          {offers}
        </div>
      </div>

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
          data-fg-npo58="1.30:2.3683:/src/app/components/MembershipSection.tsx:161:15:6835:44:e:Users::::::BIAp"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
        <h3 className="text-white text-center text-4xl mb-2">{t("private.title")}</h3>
        <hr className="text-red-600 w-1/5 border-3 mb-6" />
        <p className="text-neutral-500">{t("private.desc")} </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-15">
          {programs}
        </div>
      </div>

      <Notes />
    </div>
  );
}
