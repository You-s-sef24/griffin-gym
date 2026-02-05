import useTranslate from "../hooks/useTranslate";

export default function Map() {
  const t = useTranslate();
  return (
    <div className="bg-[#222] rounded-xl overflow-hidden shadow-2xl border border-white/5">
      <div className="relative h-full min-h-[400px] flex items-center justify-center">
        {/* background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#222] to-[#333]" />

        {/* content */}
        <div className="relative z-10 text-center p-8">
          <div className="bg-[#E10600] p-6 rounded-full inline-block mb-4 shadow-lg">
            {/* Map Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-12 h-12 text-white"
            >
              <path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z" />
              <path d="M15 5.764v15" />
              <path d="M9 3.236v15" />
            </svg>
          </div>

          <h4 className="text-white text-xl mb-2">{t("general.name")}</h4>
          <p className="text-gray-400 mb-4">{t("contact.urLoc")}</p>

          <a
            href="https://maps.app.goo.gl/4MWMcicmcXHVEyfB7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#E10600] hover:text-white transition-colors bg-[#E10600]/10 hover:bg-[#E10600]/20 px-4 py-2 rounded-lg"
          >
            {/* Pin Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>{t("contact.openMaps")}</span>
          </a>
        </div>

        {/* grid overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-8 grid-rows-8 h-full">
            {Array.from({ length: 64 }).map((_, i) => (
              <div key={i} className="border border-white" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
