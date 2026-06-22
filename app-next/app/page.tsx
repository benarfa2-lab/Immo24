import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import PropertyCard from "@/components/PropertyCard";
import { mockProperties, STATS } from "@/lib/mock-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Immo24.tn — Votre bien immobilier en Tunisie",
  description: "Trouvez votre appartement, villa ou bureau en Tunisie. Plus de 12 000 annonces vérifiées.",
};

const HOW_IT_WORKS = [
  { num: "01", title: "Définissez vos critères", desc: "Type de bien, budget, surface, localisation — nos filtres intelligents s'adaptent à votre projet." },
  { num: "02", title: "Explorez les annonces", desc: "Vue liste ou carte interactive, photos HD, visites virtuelles et informations vérifiées." },
  { num: "03", title: "Contactez l'agence", desc: "Échangez directement avec l'agent en charge du bien, sans intermédiaire supplémentaire." },
  { num: "04", title: "Finalisez votre projet", desc: "Accompagnement notarial, financement bancaire, assistance administrative — tout en un." },
];

export default function HomePage() {
  const featuredProperties = mockProperties.filter((p) => p.isPremium || p.isNew).slice(0, 3);
  const recentProperties = mockProperties.slice(0, 6);

  return (
    <>
      <Navbar />
      <main className="pt-16">

        {/* Hero */}
        <section className="relative bg-[var(--color-navy)] overflow-hidden">
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "32px 32px"
          }} />
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-navy)] via-[var(--color-navy)] to-[var(--color-navy-dark)]" />

          <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
            <div className="max-w-2xl">
              <span className="inline-block px-3 py-1 text-xs font-bold rounded-full bg-[var(--color-gold)]/15 text-[var(--color-gold)] mb-6 tracking-wide uppercase">
                Plateforme n°1 en Tunisie
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6" style={{ fontFamily: "var(--font-display)" }}>
                Trouvez le bien
                <span className="block text-[var(--color-gold)]">de vos rêves</span>
                en Tunisie
              </h1>
              <p className="text-lg text-white/65 mb-10 leading-relaxed">
                Plus de 12 000 annonces immobilières vérifiées. Achat, location, programmes neufs — tout votre marché en un seul endroit.
              </p>
              <SearchBar />
            </div>
          </div>

          {/* Stats bar */}
          <div className="relative border-t border-white/10 bg-white/5">
            <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
              {STATS.map(({ value, label }) => (
                <div key={label} className="text-center">
                  <p className="text-2xl font-black text-[var(--color-gold)] tabular-nums" style={{ fontFamily: "var(--font-display)" }}>{value}</p>
                  <p className="text-xs text-white/50 mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured listings */}
        <section className="py-20 bg-[var(--color-gray-50)]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-gold)] mb-2">Sélection Premium</p>
                <h2 className="text-3xl font-black text-[var(--color-navy)]" style={{ fontFamily: "var(--font-display)" }}>Biens à la une</h2>
              </div>
              <a href="/recherche" className="text-sm font-semibold text-[var(--color-navy)] hover:text-[var(--color-gold)] transition-colors hidden md:block">Voir tout →</a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProperties.map((p) => <PropertyCard key={p.id} property={p} />)}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-12">
              <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-gold)] mb-2">Simple & rapide</p>
              <h2 className="text-3xl font-black text-[var(--color-navy)]" style={{ fontFamily: "var(--font-display)" }}>Comment ça marche ?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {HOW_IT_WORKS.map(({ num, title, desc }) => (
                <div key={num} className="group">
                  <p className="text-6xl font-black text-[var(--color-navy)]/10 mb-3 leading-none group-hover:text-[var(--color-gold)]/30 transition-colors" style={{ fontFamily: "var(--font-display)" }}>{num}</p>
                  <h3 className="text-base font-bold text-[var(--color-navy)] mb-2">{title}</h3>
                  <p className="text-sm text-[var(--color-gray-600)] leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recent listings */}
        <section className="py-20 bg-[var(--color-gray-50)]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-gold)] mb-2">Fraîchement publiées</p>
                <h2 className="text-3xl font-black text-[var(--color-navy)]" style={{ fontFamily: "var(--font-display)" }}>Dernières annonces</h2>
              </div>
              <a href="/recherche" className="text-sm font-semibold text-[var(--color-navy)] hover:text-[var(--color-gold)] transition-colors hidden md:block">Voir tout →</a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentProperties.map((p) => <PropertyCard key={p.id} property={p} />)}
            </div>
            <div className="mt-10 text-center">
              <a href="/recherche" className="inline-flex items-center gap-2 px-8 py-3 rounded-xl border-2 border-[var(--color-navy)] text-[var(--color-navy)] font-bold text-sm hover:bg-[var(--color-navy)] hover:text-white transition-colors">
                Voir toutes les annonces
              </a>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-20 bg-[var(--color-navy)]">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4" style={{ fontFamily: "var(--font-display)" }}>
              Vous avez un bien à vendre ou à louer ?
            </h2>
            <p className="text-white/60 mb-8">Publiez votre annonce gratuitement et touchez des milliers d&apos;acheteurs qualifiés.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/publier" className="px-8 py-3.5 bg-[var(--color-gold)] text-[var(--color-navy-dark)] font-bold rounded-xl hover:bg-[var(--color-gold-light)] transition-colors">
                Publier une annonce
              </a>
              <a href="/agences" className="px-8 py-3.5 border-2 border-white/30 text-white font-bold rounded-xl hover:border-white/60 transition-colors">
                Espace agences
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
