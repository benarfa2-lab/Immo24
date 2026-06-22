import type { Property, Agency } from "@/types";

export const mockProperties: Property[] = [
  { id: "p1", title: "Appartement moderne Lac 2", price: 385000, priceUnit: "TND", surface: 112, rooms: 3, bathrooms: 2, city: "Tunis", district: "Les Lacs", type: "appartement", transaction: "vente", images: ["/placeholder-property.jpg"], isPremium: true, agencyName: "Century 21 Tunis", lat: 36.8450, lng: 10.2320 },
  { id: "p2", title: "Villa avec piscine La Marsa", price: 1200000, priceUnit: "TND", surface: 320, rooms: 5, bathrooms: 3, city: "La Marsa", district: "Centre", type: "villa", transaction: "vente", images: ["/placeholder-property.jpg"], isPremium: true, agencyName: "Prestige Immobilier", lat: 36.8778, lng: 10.3247 },
  { id: "p3", title: "Appartement S+2 Ennasr", price: 1800, priceUnit: "TND/mois", surface: 95, rooms: 3, bathrooms: 1, city: "Tunis", district: "Ennasr", type: "appartement", transaction: "location", images: ["/placeholder-property.jpg"], agencyName: "Immo Pro", lat: 36.8600, lng: 10.1950 },
  { id: "p4", title: "Bureau plateau centre-ville", price: 3500, priceUnit: "TND/mois", surface: 180, city: "Tunis", district: "Centre Urbain Nord", type: "bureau", transaction: "location", images: ["/placeholder-property.jpg"], agencyName: "Office Immo", lat: 36.8120, lng: 10.1800 },
  { id: "p5", title: "Villa neuve Gammarth", price: 950000, priceUnit: "TND", surface: 280, rooms: 4, bathrooms: 3, city: "Gammarth", district: "Résidentiel", type: "villa", transaction: "vente", images: ["/placeholder-property.jpg"], isNew: true, agencyName: "Green Immobilier", lat: 36.9100, lng: 10.2900 },
  { id: "p6", title: "Appartement S+3 Menzah 6", price: 295000, priceUnit: "TND", surface: 132, rooms: 4, bathrooms: 2, city: "Tunis", district: "El Menzah", type: "appartement", transaction: "vente", images: ["/placeholder-property.jpg"], agencyName: "Tunis Immo", lat: 36.8500, lng: 10.1700 },
];

export const mockAgencies: Agency[] = [
  { id: "a1", name: "Century 21 Tunis", city: "Tunis", listingsCount: 142, verified: true },
  { id: "a2", name: "Prestige Immobilier", city: "La Marsa", listingsCount: 87, verified: true },
  { id: "a3", name: "Green Immobilier", city: "Gammarth", listingsCount: 63, verified: true },
  { id: "a4", name: "Immo Pro", city: "Tunis", listingsCount: 211, verified: true },
];

export const STATS = [
  { value: "12 400+", label: "Annonces actives" },
  { value: "340+",    label: "Agences partenaires" },
  { value: "8",       label: "Gouvernorats couverts" },
  { value: "98%",     label: "Clients satisfaits" },
];
