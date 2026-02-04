export default function FacilityCard({ title, desc, image, icon, badge }) {
  return (
    <div className="relative group w-full max-w-sm overflow-hidden rounded-2xl bg-[#1f1f1f] shadow-lg">
      {/* Image */}
      <div
        className="h-56 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Badge (Coming Soon) */}
      {badge && (
        <span className="absolute top-4 right-4 bg-red-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
          {badge}
        </span>
      )}

      {/* Content */}
      <div className="relative bg-neutral-800 p-5">
        {/* Icon */}
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-red-600">
          {icon}
        </div>

        <h3 className="text-white text-xl font-semibold mb-1">{title}</h3>
        <p className="text-neutral-400 text-sm">{desc}</p>
      </div>
    </div>
  );
}
