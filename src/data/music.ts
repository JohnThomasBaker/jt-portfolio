export type MusicMedia = {
  title: string;
  embedUrl: string;
};

export type MusicGalleryItem = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
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
  gallery?: MusicGalleryItem[];
  galleryLayout?: "feature-last" | "portrait-pair";
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
    description: ["MONOLITH is a massive, hard-hitting percussion quartet that aims to communicate themes of the push and pull of the evolution of humanity. This piece intends to function both as an homage to the opening scene of 2001: a Space Odyssey and a standalone piece in its own right. One of the many reasons that Stanly Kubrick's 2001: a Space Odyssey is so effective in its messaging lies in his technique of juxtaposing the old with the new: the dawn of man with the dawn of the technology that could eventually becomes man's usurper. The conflict of context and linearity between technology, advancement and change against more primitive and archaic traditions in humanity provides an interesting backdrop for Kubrick to communicate larger themes about civilization and the definition of humanity. MONOLITH works to depict a similar type of conflict through competing soundworlds: large, bulky, resonant sounds of membranophones led by a rope drum soloist represent the primitive nature of the first intelligent apes- while several thin, glassy, piercing metal sounds emerging from Sixxen, broken wind chimes, thai gongs and a prepared piano soloist represent the advancement of technology and transhumanism. These two polarities come into conflict in this piece, and the music is the result.  "],
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
    description: ["The first of two snare ensemble pieces I wrote for the University of North Texas Snare Ensemble to take to the Percussive Arts Society International Convention (2021-2022). Won the first place prize in the PASIC small marching ensemble competition. "],
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
    description: ["The second of two snare ensemble pieces I wrote for the University of North Texas Snare Ensemble to take to the Percussive Arts Society international convention (2021-2022), The Declaration of Two Hand Independence currently stands as the longest performance run of a collegiate marching snare ensemble piece. Official performances include: University of North Texas Global Rhythms Concert (fall 2022), PASIC Individual and Ensemble competition (fall 2022), PASIC drummer's Heritage Concert (fall 2022), PAS Day of Percussion Paul and Sandi Rennick Clinic (spring 2023), SCV Snare Line Video (Sumer 2023), Marching Music Mckinney DCI Drum EXPO (summer 2023), University of North Texas Percussion Ensemble Concert, Krakow Academy of Music, Poland (Fall 2023), Opole Symphony Orchestra Concert with University of North Texas Percussion Ensemble, Poland (Fall 2023), Opole Drumfest, Poland (fall 2023), University of North Texas Global Rhythms Concert (Fall 2023)"],
    media: [],
    gallery: [
      {
        src: "/images/declaration-pasic-2022.webp",
        alt: "UNT Snare Ensemble performing The Declaration of Two-Handed Independence at PASIC 2022",
        caption: "PASIC · 2022",
        width: 577,
        height: 434,
      },
      {
        src: "/images/declaration-scv-snare-line.gif",
        alt: "Santa Clara Vanguard snare line performing The Declaration of Two-Handed Independence",
        caption: "SCV Snare Line · 2023",
        width: 359,
        height: 270,
      },
      {
        src: "/images/declaration-opole.webp",
        alt: "UNT Snare Ensemble performing on stage in Opole, Poland",
        caption: "Opole, Poland · 2023",
        width: 1280,
        height: 962,
      },
    ],
    galleryLayout: "feature-last",
    gumroadUrl: "https://4340888381081.gumroad.com/l/2022SnareEnsemble",
  },
  {
    slug: "kalyanna-mitta",
    name: "Kalyanna Mitta",
    year: 2023,
    category: "compositions",
    image: "/images/work-placeholder.svg",
    instrumentation: "Solo for dholak and fixed media",
    description: ["Originally written as a capstone project in jt's 3 years of lessons with Poovalur Sriji at the University of North Texas, Kalyanna Mitta aims to combine the sound of the hindustani Dholak with basic carnatic rhythm cycles, set to a prearranged track of electronic sounds. The piece is capped by a presentation of a mass polyrhythm (10:11:12:13:14:15:16:17:18:19) of pitch cycles, remniscent of the larger long-form overlapping cycles utilized by artists such as Jairo David Mora (project.jdm). Kalyanna Mitta aims to marry more traditional notions of carnatic music with these modern forms of exploration with regard to rhythmic cycles."],
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
    gallery: [
      {
        src: "/images/denton-halftime.gif",
        alt: "JT performing Denton Halftime on rope drum",
        caption: "Denton Halftime",
        width: 270,
        height: 480,
      },
      {
        src: "/images/denton-halftime-rope-drum.webp",
        alt: "Rope drum used for Denton Halftime",
        caption: "Rope drum",
        width: 1280,
        height: 1707,
      },
    ],
    galleryLayout: "portrait-pair",
    gumroadUrl: null,
  },
  {
    slug: "in-a-landscape",
    name: "In a Landscape",
    author: "John Cage",
    year: 2026,
    category: "arrangements",
    image: "/images/work-placeholder.svg",
    instrumentation: "Arranged for Vibraphone and Tuned Pipes",
    description: ["Program note here."],
    media: [],
    gumroadUrl: null,
  },
{
    slug: "Amores-selections",
    name: "Amores Selections",
    author: "John Cage",
    year: 2026,
    category: "arrangements",
    image: "/images/work-placeholder.svg",
    instrumentation: "Arranged for Prepared Vibraphone",
    description: ["Program note here."],
    media: [],
    gumroadUrl: null,
  },
  {
    slug: "Bouquet",
    name: "Bouquet",
    author: "Ichiko Aoba",
    year: 2026,
    category: "arrangements",
    image: "/images/work-placeholder.svg",
    instrumentation: "Arranged for Solo Marimba",
    description: ["Program note here."],
    media: [],
    gumroadUrl: null,
  },
    {
    slug: "Parfum-d'etoiles",
    name: "Parfum d'etoiles",
    author: "Ichiko Aoba",
    year: 2026,
    category: "arrangements",
    image: "/images/work-placeholder.svg",
    instrumentation: "Arranged for Marimba and Vibraphone",
    description: ["Program note here."],
    media: [],
    gumroadUrl: null,
  },


];
