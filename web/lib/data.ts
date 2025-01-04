export interface Social {
  instagram: string;
  website: string;
}

export interface Artist {
  id: number;
  year: number;
  name: string;
  location: string;
  image: string;
  social: Social;
  bio?: string;
  achievements?: string[];
}

export const artists: Artist[] = [
  {
    id: 12,
    year: 2025,
    name: "Marcus Rivera",
    location: "New York, USA",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80",
    social: {
      instagram: "https://instagram.com/marcusrivera",
      website: "https://marcusrivera.com"
    },
    bio: "Marcus Rivera is a pioneering tattoo artist known for his innovative fusion of traditional and digital art techniques.",
    achievements: [
      "Best Innovative Tattoo Artist 2024",
      "Featured in Modern Ink Magazine",
      "Guest artist at International Tattoo Convention"
    ]
  },
  {
    id: 11,
    year: 2024,
    name: "Sarah Chen",
    location: "Tokyo, Japan",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80",
    social: {
      instagram: "https://instagram.com/sarahchen",
      website: "https://sarahchen.art"
    },
    bio: "Sarah Chen specializes in combining traditional Japanese tattoo art with contemporary minimalist design.",
    achievements: [
      "Tokyo Tattoo Excellence Award 2023",
      "Published in Asian Art Quarterly",
      "Collaboration with major fashion brands"
    ]
  }
  // Add more artists as needed
]; 