"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const TYPES = ["Tous types", "Appartement", "Villa", "Bureau", "Terrain", "Local commercial"];
const CITIES = ["Toutes les villes", "Tunis", "La Marsa", "Gammarth", "Sfax", "Sousse", "Bizerte"];

export default function SearchBar() {
  const router = useRouter();
  const [tab, setTab] = useState<"vente" | "location">("vente");
  const [query, setQuery] = useState("");
  const [type, setType] = useState(TYPES[0]);
  const [city, setCity] = useState(CITIES[0]);

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    const params = new URLSearchParams({ type: tab, q: query, propertyType: type, city });
    router.push(`/recherche?${params}`);
  }

  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-3xl w-full">
      {/* Tabs */}
      <div className="flex border-b border-[var(--color-gray-200)]">
        {(["vente", "location"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`flex-1 py-3.5 text-sm font-bold capitalize transition-colors ${
              tab === t
                ? "text-[var(--color-navy)] border-b-2 border-[var(--color-navy)] bg-[var(--color-navy-light)]"
                : "text-[var(--color-gray-600)] hover:text-[var(--color-navy)]"
            }`}
          >
            {t === "vente" ? "Acheter" : "Louer"}
          </button>
        ))}
      </div>

      {/* Form */}
      <form onSubmit={handleSearch} className="p-4 flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          placeholder="Quartier, ville, référence…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 px-4 py-2.5 border border-[var(--color-gray-200)] rounded-xl text-sm focus:outline-none focus:border-[var(--color-navy)] transition-colors"
        />
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="px-3 py-2.5 border border-[var(--color-gray-200)] rounded-xl text-sm text-[var(--color-gray-600)] focus:outline-none focus:border-[var(--color-navy)] bg-white"
        >
          {TYPES.map((t) => <option key={t}>{t}</option>)}
        </select>
        <button
          type="submit"
          className="px-6 py-2.5 bg-[var(--color-gold)] text-[var(--color-navy-dark)] text-sm font-bold rounded-xl hover:bg-[var(--color-gold-light)] transition-colors flex-shrink-0"
        >
          Rechercher
        </button>
      </form>
    </div>
  );
}
