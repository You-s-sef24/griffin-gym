export default function StaffCard({ name, role, exp, badge, image, schedule }) {
  return (
    <div className="w-[280px] rounded-2xl overflow-hidden bg-zinc-900 text-white shadow-lg border border-neutral-800 hover:scale-105 transition-all hover:border-red-600">
      {/* Image */}
      <div className="relative h-[360px]">
        <img
          src={image || "/avatar.jpg"} // change image path
          loading="lazy"
          alt="Coach"
          className="h-full w-full object-cover brightness-75"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

        {/* Badge (optional) */}
        {badge && (
          <span className="absolute top-4 right-4 bg-red-600 text-xs px-3 py-1 rounded-full">
            {badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold">{name}</h3>

        <p className="text-red-500 text-sm mt-1">{role}</p>

        {exp && (
          <div className="flex items-center gap-2 text-gray-400 text-sm mt-3">
            <span>
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
                className="lucide lucide-award w-4 h-4"
              >
                <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                <circle cx="12" cy="8" r="6"></circle>
              </svg>
            </span>
            <span>{exp} years experience</span>
          </div>
        )}

        {schedule && (
          <div className="mt-4 border-t border-gray-700 pt-3 text-xs text-gray-400">
            Schedules vary – Contact for details
          </div>
        )}
      </div>
    </div>
  );
}
