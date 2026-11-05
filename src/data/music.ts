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
    instrumentation: "Percussion quartet / rope drum concerto",
    description: ["Program note coming soon."],
    media: [],
    gumroadUrl: "https://4340888381081.gumroad.com/l/Monolith",
  },
   { 
    slug: "carceri-d'invenzione",
    name: "Carceri d'Invenzione",
    year: 2026,
    category: "compositions",
    image: "/images/work-placeholder.svg",
    instrumentation: "Chamber Ensemble",
    description: [
      `Carceri d'Invenzione at its core seeks to translate the essence of an infinite labrinthian world into the planes of sound and time through the vast musical varieties that overlapping long-form pitch cycles generate. Drawing inspiration from Giovanni Battista Piranesi's Carceri d'Invenzione drawings and its subsequent interpretations including Brian Ferneyhough's musical works of the same name as well as the impossible architectures of M.C. Escher and the imagined literaly world of Susanna Clarke's novel entitled Piranesi, this piece similarly explores the translation of infinite, labrinthian structures into sonic form.`,
      `Each Vestibule represents an impossibly small chunk of the impossibly large—a futile attempt to digest the vast cosmic horror of the infinite into finite human perception of space time. I invite any number of musicians on any pitched instruments to drop into a vestibule, follow the given instructions, and listen to their collective effort to find eachother and settle themselves.`,
    ],

    media: [],
    gumroadUrl: "https://4340888381081.gumroad.com/l/Monolith",
  },
  {
    slug: "chrysalis",
    name: "Chrysalis",
    year: 2025,
    category: "compositions",
    image: "/images/work-placeholder.svg",
    instrumentation: "Two vibraphones and piano",
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
    instrumentation: "Solo for rudimental snare drum",
    description: ["ALAGBA was written in the fall of 2023 origianally to compete at the Percussive Arts Society International Convention Individual Snare Drum Competition. The name ALAGBA references a famous Nigerian tortoise thought to have lived to be 344 years old, over 200 years older than the second oldest living tortoise. Speculated to have lived through the reign of 18 Ogbomoso kings, this tortoise always fascinated jt, and he draws comparisons between the apocryphal generational power of this tortoise and the general forces of culture, lineage and tradition in life, specifically as they relate to the culture of rudimental drumming throughout history. Utilizing traditional contest solo forms to package and present new vocabulary to the marching snare drum canon, ALAGBA is meant to function as a capstone to jt's compositional voice on the drum towards the end of his undergrad, as well as a general love letter to the marching snare drum, its lineage, and its place as a legitimate medium for virtuosity and expression. "],

    media: [],
    gumroadUrl: "https://4340888381081.gumroad.com/l/ALAGBA",
  },
  {
    slug: "sons-and-daughters-of-charles-edward-greene",
    name: "The Sons and Daughters of Charles Edward Greene",
    year: 2021,
    category: "compositions",
    image: "/images/work-placeholder.svg",
    instrumentation: "Marching snare ensemble (6)",
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
    instrumentation: "Marching snare ensemble (6)",
    description: ["The second of two snare ensembles I wrote for the University of North Texas Snare Ensemble to take to the Percussive Arts Society international convention (2021-2022), The Declaration of Two Hand Independence currently stands as the longest performance run of a collegiate marching snare ensemble piece. Official performances include: University of North Texas Global Rhythms Concert (fall 2022), PASIC Individual and Ensemble competition (fall 2022), PASIC drummer's Heritage Concert (fall 2022), PAS Day of Percussion Paul and Sandi Rennick Clinic (spring 2023), SCV Snare Line Video (Sumer 2023), Marching Music Mckinney DCI Drum EXPO (summer 2023), University of North Texas Percussion Ensemble Concert, Krakow Academy of Music, Poland (Fall 2023), Opole Symphony Orchestra Concert with University of North Texas Percussion Ensemble, Poland (Fall 2023), Opole Drumfest, Poland (fall 2023), University of North Texas Global Rhythms Concert (Fall 2023)"],
    media: [],
    gumroadUrl: "https://4340888381081.gumroad.com/l/2022SnareEnsemble",
  },
  {
    slug: "kalyanna-mitta",
    name: "Kalyanna Mitta",
    year: 2023,
    category: "compositions",
    image: "/images/work-placeholder.svg",
    instrumentation: "Solo for dholak and fixed media",
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
    instrumentation: "Solo for rope drum and fixed media",
    description: ["Program note coming soon."],
    media: [],
    gumroadUrl: null,
  },
];
