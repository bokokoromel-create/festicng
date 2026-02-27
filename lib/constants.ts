export const IMG_HERO =
  "https://www.figma.com/api/mcp/asset/feed33dc-619e-4eb5-8036-6bff6d92a74b";
export const IMG_ABOUT =
  "https://www.figma.com/api/mcp/asset/7c973e26-ea53-4064-999b-b6dca77f41b8";
export const IMG_PERFORMANCE =
  "https://www.figma.com/api/mcp/asset/53343cdd-4d52-4f7c-9a68-03f0709571da";
export const IMG_HEADER_BG =
  "https://www.figma.com/api/mcp/asset/a880d035-96e0-40a6-9c34-095ac83615f1";

export type EventData = {
  id: number;
  title: string;
  category: string;
  date: string;
  location: string;
  price: string;
  views: number;
  image: string;
  cta?: string;
  badge?: string;
};

export const HERO_SLIDES = [
  { src: "/nainoa-shizuru-NcdG9mK3PBY-unsplash.jpg", alt: "Concert crowd with golden lights" },
  { src: "/anthony-delanoix-hzgs56Ze49s-unsplash.jpg", alt: "Heart hands at concert" },
  { src: IMG_HERO, alt: "FUNKIPHINO live performance" },
  { src: IMG_PERFORMANCE, alt: "FUNKIPHINO on stage" },
];

export const NAV_LINKS = [
  { label: "Tickets", to: "events" },
  { label: "Schedule", to: "events" },
  { label: "Info", to: "about" },
  { label: "Gallery", to: "gallery" },
  { label: "Contact", to: "contact" },
] as const;

export const CATEGORIES = [
  { id: "all", label: "Toutes" },
  { id: "concert", label: "Concert" },
  { id: "festival", label: "Festival" },
  { id: "soiree", label: "Soiree" },
  { id: "culture", label: "Culture" },
  { id: "sport", label: "Sport" },
  { id: "business", label: "Business" },
] as const;

export const EVENTS: EventData[] = [
  { id: 1, title: "Warren Station Live", category: "concert", date: "sam. 7 mars 2026 | 20h00", location: "Keystone, CO", price: "$25", views: 404, image: IMG_HERO, cta: "Buy Tickets" },
  { id: 2, title: "Tailgate Tavern Outdoor Stage", category: "festival", date: "sam. 31 mai 2026 | 19h00", location: "Parker, CO", price: "FREE", views: 813, image: IMG_PERFORMANCE, badge: "FREE" },
  { id: 3, title: "Herbs – Denver Funk Night", category: "soiree", date: "sam. 22 fev. 2026 | 21h00", location: "Denver, CO", price: "FREE", views: 631, image: IMG_HEADER_BG, badge: "FREE" },
  { id: 4, title: "Red Rocks Amphitheatre", category: "concert", date: "dim. 15 juin 2026 | 18h30", location: "Morrison, CO", price: "$45", views: 1200, image: IMG_ABOUT, cta: "Buy Tickets" },
];

export const GALLERY = [IMG_HERO, IMG_PERFORMANCE, IMG_ABOUT, IMG_HEADER_BG, IMG_PERFORMANCE, IMG_HERO];

export const CAT_COLORS: Record<string, { color: string; bg: string }> = {
  concert: { color: "var(--cat-concert)", bg: "var(--cat-concert-bg)" },
  festival: { color: "var(--cat-festival)", bg: "var(--cat-festival-bg)" },
  soiree: { color: "var(--cat-soiree)", bg: "var(--cat-soiree-bg)" },
  culture: { color: "var(--cat-culture)", bg: "var(--cat-culture-bg)" },
  sport: { color: "var(--cat-sport)", bg: "var(--cat-sport-bg)" },
  business: { color: "var(--cat-business)", bg: "var(--cat-business-bg)" },
};

export const DEFAULT_CAT = { color: "var(--cat-other)", bg: "var(--cat-other-bg)" };

export function getCatColor(category: string) {
  return CAT_COLORS[category] ?? DEFAULT_CAT;
}
