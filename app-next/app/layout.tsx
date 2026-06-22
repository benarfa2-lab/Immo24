import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit", weight: ["400","700","800","900"] });
const inter  = Inter({ subsets: ["latin"], variable: "--font-inter", weight: ["400","500","600"] });

export const metadata: Metadata = {
  title: { default: "Immo24.tn — Votre bien immobilier en Tunisie", template: "%s — Immo24.tn" },
  description: "Plateforme immobilière professionnelle en Tunisie. Achat, vente, location de biens immobiliers.",
  openGraph: {
    siteName: "Immo24.tn",
    locale: "fr_TN",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${outfit.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
