export type TransactionType = "vente" | "location";
export type PropertyType = "appartement" | "villa" | "bureau" | "terrain" | "local";

export interface Property {
  id: string;
  title: string;
  price: number;
  priceUnit: "TND" | "TND/mois";
  surface: number;
  rooms?: number;
  bathrooms?: number;
  city: string;
  district: string;
  type: PropertyType;
  transaction: TransactionType;
  images: string[];
  isNew?: boolean;
  isPremium?: boolean;
  agencyName?: string;
  lat: number;
  lng: number;
}

export interface Agency {
  id: string;
  name: string;
  logo?: string;
  city: string;
  listingsCount: number;
  verified: boolean;
}
