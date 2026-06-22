"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { href: "/acheter",   label: "Acheter" },
  { href: "/louer",     label: "Louer" },
  { href: "/neuf",      label: "Neuf" },
  { href: "/agences",   label: "Agences" },
  { href: "/estimer",   label: "Estimer" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-navy)]"
      style={{ boxShadow: "var(--shadow-nav)" }}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-6">
        {/* Logo */}
        <Link href="/" className="flex items-center flex-shrink-0 opacity-100 hover:opacity-85 transition-opacity">
          <Image src="/immo24-light-navbar.svg" alt="Immo24.tn" width={160} height={44} priority />
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="px-3 py-1.5 text-sm font-medium text-white/75 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3 flex-shrink-0">
          <Link href="/connexion" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
            Connexion
          </Link>
          <Link
            href="/publier"
            className="px-4 py-2 text-sm font-bold rounded-lg bg-[var(--color-gold)] text-[var(--color-navy-dark)] hover:bg-[var(--color-gold-light)] transition-colors"
          >
            Publier une annonce
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          aria-label="Menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen
              ? <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round"/>
              : <path d="M3 12h18M3 6h18M3 18h18" strokeLinecap="round"/>}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[var(--color-navy-dark)] border-t border-white/10 px-6 py-4 flex flex-col gap-2">
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} className="text-sm text-white/80 hover:text-white py-2 border-b border-white/10 last:border-0" onClick={() => setMenuOpen(false)}>
              {label}
            </Link>
          ))}
          <Link href="/publier" className="mt-3 text-center px-4 py-2 text-sm font-bold rounded-lg bg-[var(--color-gold)] text-[var(--color-navy-dark)]" onClick={() => setMenuOpen(false)}>
            Publier une annonce
          </Link>
        </div>
      )}
    </header>
  );
}
