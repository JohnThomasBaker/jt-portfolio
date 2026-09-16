export type MusicMedia = {
  title: string;
  embedUrl: string;
};

export type MusicPiece = {
  slug: string;
  name: string;
  year: number;
  category: "compositions" | "arrangements" | "misc";
  image: string;
  instrumentation: string;
  description: string[];
  media: MusicMedia[];
  gumroadUrl: string | null;
};

// Add each work's program note, media embeds, and Gumroad product URL here.
export const pieces: MusicPiece[] = [
  {
    slug: "monolith",
    name: "Monolith",
    year: 2024,
    category: "compositions",
    image: "/images/work-placeholder.svg",
    instrumentation: "Percussion Quartet/ Rope Drum concerto",
    description: ["Program note coming soon."],
    media: [],
    gumroadUrl: "https://4340888381081.gumroad.com/l/Monolith",
  },
  {
    slug: "chrysalis",
    name: "Chrysalis",
    year: 2025,
    category: "compositions",
    image: "/images/work-placeholder.svg",
    instrumentation: "Two Vibraphones and Piano.",
    description: ["Program note coming soon."],
    media: [],
    gumroadUrl: "https://4340888381081.gumroad.com/l/tfwxi",
  },
  {
    slug: "alagba",
    name: "Alagba",
    year: 2023,
    category: "compositions",
    image: "/images/work-placeholder.svg",
    instrumentation: "Solo for Rudimental Snare Drum.",
    description: ["Program note coming soon."],
    media: [],
    gumroadUrl: "https://4340888381081.gumroad.com/l/ALAGBA",
  },
  {
    slug: "sons-and-daughters-of-charles-edward-greene",
    name: "The Sons and Daughters of Charles Edward Greene",
    year: 2021,
    category: "compositions",
    image: "/images/work-placeholder.svg",
    instrumentation: "Marching Snare Ensemble (6).",
    description: ["Program note coming soon."],
    media: [],
    gumroadUrl: null,
  },
  {
    slug: "declaration-of-two-handed-independence",
    name: "The Declaration of Two-Handed Independence",
    year: 2022,
    category: "compositions",
    image: "/images/work-placeholder.svg",
    instrumentation: "Marching Snare Ensemble (6).",
    description: ["Program note coming soon."],
    media: [],
    gumroadUrl: "https://4340888381081.gumroad.com/l/2022SnareEnsemble",
  },
  {
    slug: "kalyanna-mitta",
    name: "Kalyanna Mitta",
    year: 2023,
    category: "compositions",
    image: "/images/work-placeholder.svg",
    instrumentation: "Solo for Dholak and Fixed Media.",
    description: ["Program note coming soon."],
    media: [],
    gumroadUrl: "https://4340888381081.gumroad.com/l/KalyannaMitta",
  },
   {
    slug: "denton-halftime",
    name: "Denton Halftime",
    year: 2023,
    category: "compositions",
    image: "/images/work-placeholder.svg",
    instrumentation: "Solo for Rope Drum and Fixed Media.",
    description: ["Program note coming soon."],
    media: [],
    gumroadUrl: null,
  },
];
