export type Location = {
  slug: string;
  city: string;
  state: string;
  photoCount: number;
};

export const locations: Location[] = [
  { slug: "atlanta", city: "Atlanta", state: "GA", photoCount: 6 },
  { slug: "columbus", city: "Columbus", state: "OH", photoCount: 9 },
  { slug: "denver", city: "Denver", state: "CO", photoCount: 11 },
  { slug: "houston", city: "Houston", state: "TX", photoCount: 6 },
  { slug: "memphis", city: "Memphis", state: "TN", photoCount: 8 },
  { slug: "nashville", city: "Nashville", state: "TN", photoCount: 5 },
];

export function getLocationImages(slug: string, count: number) {
  return Array.from({ length: count }, (_, i) => `/images/locations/${slug}/${slug}-${i + 1}.jpg`);
}
