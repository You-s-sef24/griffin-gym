import useTranslate from "../hooks/useTranslate";

export default function TherapyNotes() {
  const t = useTranslate();

  return (
    <div className="mt-12 bg-[#222] border border-[#E10600]/30 w-3/4 lg:w-1/2 rounded-lg p-6 max-w-3xl mx-auto">
      <div className="flex items-start gap-4">
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
          className="lucide lucide-stethoscope w-6 h-6 text-[#E10600] flex-shrink-0 mt-1"
        >
          <path d="M11 2v2"></path>
          <path d="M5 2v2"></path>
          <path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"></path>
          <path d="M8 15a6 6 0 0 0 12 0v-3"></path>
          <circle cx="20" cy="10" r="2"></circle>
        </svg>
        <div>
          <h4 className="text-white text-lg mb-2">{t("therapy.notesTitle")}</h4>
          <p className="text-gray-300 text-sm leading-relaxed">
            {t("therapy.notesDesc")}
          </p>
        </div>
      </div>
    </div>
  );
}
