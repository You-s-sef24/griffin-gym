export default function ProgramCard({ image, title, discount, desc }) {
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
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-4">
        <h3 className="text-xl font-bold">{title}</h3>

        <p className="space-y-2 text-sm text-gray-300">
          {desc}
        </p>

        {/* Buttons */}
        <div className="mt-4 flex flex-col gap-3">
          <a
            href=""
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
