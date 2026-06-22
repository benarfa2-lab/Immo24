import Link from "next/link";
import type { Property } from "@/types";

function formatPrice(price: number, unit: string) {
  return new Intl.NumberFormat("fr-TN").format(price) + " " + unit;
}

export default function PropertyCard({ property }: { property: Property }) {
  const { id, title, price, priceUnit, surface, rooms, city, district, type, isNew, isPremium, agencyName } = property;

  return (
    <Link
      href={`/annonce/${id}`}
      className="group bg-white rounded-2xl overflow-hidden border border-[var(--color-gray-200)] hover:border-[var(--color-navy)]/30 transition-all hover:-translate-y-1"
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      {/* Image placeholder */}
      <div className="relative h-48 bg-[var(--color-navy-light)] overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-[var(--color-navy)]/20">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
          </svg>
        </div>
        <div className="absolute top-3 left-3 flex gap-2">
          {isPremium && (
            <span className="px-2 py-0.5 text-xs font-bold rounded bg-[var(--color-gold)] text-[var(--color-navy-dark)]">Premium</span>
          )}
          {isNew && (
            <span className="px-2 py-0.5 text-xs font-bold rounded bg-[var(--color-navy)] text-white">Neuf</span>
          )}
        </div>
        <span className="absolute bottom-3 right-3 px-2 py-0.5 text-xs font-medium rounded bg-white/90 text-[var(--color-gray-600)] capitalize">{type}</span>
      </div>

      {/* Content */}
      <div className="p-4">
        <p className="text-lg font-bold text-[var(--color-navy)] font-[var(--font-display)] tabular-nums">
          {formatPrice(price, priceUnit)}
        </p>
        <p className="text-sm font-medium text-[var(--color-gray-800)] mt-1 line-clamp-1">{title}</p>
        <p className="text-xs text-[var(--color-gray-400)] mt-0.5">{district}, {city}</p>

        {/* Stats */}
        <div className="flex items-center gap-4 mt-3 pt-3 border-t border-[var(--color-gray-200)]">
          <span className="text-xs text-[var(--color-gray-600)] flex items-center gap-1">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="opacity-60"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
            {surface} m²
          </span>
          {rooms && (
            <span className="text-xs text-[var(--color-gray-600)]">{rooms} pièces</span>
          )}
          {agencyName && (
            <span className="text-xs text-[var(--color-gray-400)] ml-auto truncate max-w-[120px]">{agencyName}</span>
          )}
        </div>
      </div>
    </Link>
  );
}
