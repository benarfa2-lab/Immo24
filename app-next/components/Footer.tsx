import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  explorer: [
    { href: "/acheter",  label: "Acheter" },
    { href: "/louer",    label: "Louer" },
    { href: "/neuf",     label: "Programmes neufs" },
    { href: "/agences",  label: "Agences" },
    { href: "/estimer",  label: "Estimation gratuite" },
  ],
  immo24: [
    { href: "/about",           label: "À propos" },
    { href: "/contact",         label: "Contact" },
    { href: "/cgu",             label: "CGU" },
    { href: "/confidentialite", label: "Confidentialité" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[var(--color-navy-dark)] text-white mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Brand */}
        <div>
          <Image src="/immo24-light-navbar.svg" alt="Immo24.tn" width={140} height={40} className="mb-4 opacity-90" />
          <p className="text-sm text-white/50 leading-relaxed max-w-xs">
            La plateforme immobilière professionnelle de référence en Tunisie.
          </p>
          <p className="mt-6 text-xs text-white/30">© {new Date().getFullYear()} Immo24.tn — Tous droits réservés</p>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">Explorer</h4>
            <ul className="space-y-2">
              {footerLinks.explorer.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-white/60 hover:text-white transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">Immo24.tn</h4>
            <ul className="space-y-2">
              {footerLinks.immo24.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-white/60 hover:text-white transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
