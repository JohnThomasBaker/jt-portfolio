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
  published: boolean;
  name: string;
  author?: string;
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
    published: true,
    name: "Monolith",
    year: 2024,
    category: "compositions",
    image: "/images/work-placeholder.svg",
    instrumentation: "Percussion quartet / rope drum concerto",
    description: ["MONOLITH is a massive, hard-hitting percussion quartet that explores the push and pull of humanity's evolution. The piece functions both as an homage to the opening scene of Stanley Kubrick's 2001: A Space Odyssey and as a standalone work. Much of the film's power lies in its juxtaposition of the old and the new: the dawn of humanity against the dawn of technology that could eventually become its usurper. That conflict between technological advancement and humanity's more primitive traditions gives Kubrick a backdrop for larger questions about civilization and what it means to be human. MONOLITH depicts a similar conflict through competing sound worlds. Large, bulky, resonant membranophones led by a rope-drum soloist represent the primitive, while thin, glassy, piercing metal sounds from Sixxen, broken wind chimes, Thai gongs, and prepared piano represent technological advancement and transhumanism. The music is the result of these two polarities coming into conflict."],
    media: [],
    gumroadUrl: "https://4340888381081.gumroad.com/l/Monolith",
  },
   { 
    slug: "carceri-dinvenzione",
    published: false,
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
    gumroadUrl: null,
  },
  {
    slug: "chrysalis",
    published: false,
    name: "Chrysalis",
    year: 2025,
    category: "compositions",
    image: "/images/work-placeholder.svg",
    instrumentation: "Two vibraphones and piano",
    description: ["Chrysalis is the first of several pieces by jt that explore player improvisation within certain structures and rules. Heavily inspired by the processes of Kory Reeder's \"Grids\" series, Chrysalis presents a similar vast grid of pitches"],
    media: [],
    gumroadUrl: "https://4340888381081.gumroad.com/l/tfwxi",
  },
  {
    slug: "alagba",
    published: true,
    name: "Alagba",
    year: 2023,
    category: "compositions",
    image: "/images/work-placeholder.svg",
    instrumentation: "Solo for rudimental snare drum",
    description: ["ALAGBA was written in fall 2023 for the Percussive Arts Society International Convention Individual Snare Drum Competition. Its name references a famous Nigerian tortoise reputed to have lived for 344 years and through the reigns of 18 Ogbomoso kings. JT draws a connection between the tortoise's apocryphal generational power and the forces of culture, lineage, and tradition—particularly within the history of rudimental drumming. Using traditional contest-solo forms to present new vocabulary for the marching snare drum, ALAGBA serves as both a capstone to JT's undergraduate compositional voice on the instrument and a love letter to the drum, its lineage, and its capacity for virtuosity and expression."],

    media: [],
    gumroadUrl: "https://4340888381081.gumroad.com/l/ALAGBA",
  },
  {
    slug: "sons-and-daughters-of-charles-edward-greene",
    published: true,
    name: "The Sons and Daughters of Charles Edward Greene",
    year: 2021,
    category: "compositions",
    image: "/images/work-placeholder.svg",
    instrumentation: "Marching snare ensemble (6)",
    description: ["The first of two works written for the University of North Texas Snare Ensemble for the Percussive Arts Society International Convention in 2021 and 2022. The piece won first place in the PASIC Small Marching Ensemble Competition."],
    media: [],
    gumroadUrl: null,
  },
  {
    slug: "declaration-of-two-handed-independence",
    published: true,
    name: "The Declaration of Two-Handed Independence",
    year: 2022,
    category: "compositions",
    image: "/images/declaration-pasic-2022.webp",
    instrumentation: "Marching snare ensemble (6)",
    description: ["The second of two snare-ensemble works written for the University of North Texas Snare Ensemble for the Percussive Arts Society International Convention in 2021 and 2022, The Declaration of Two-Handed Independence has had an unusually long performance life for a collegiate marching-snare ensemble work. Performances include the University of North Texas Global Rhythms Concert (fall 2022); the PASIC Individual and Ensemble Competition and Drummer's Heritage Concert (fall 2022); the PAS Day of Percussion clinic with Paul and Sandi Rennick (spring 2023); a Santa Clara Vanguard snare-line video and the Marching Music Made in McKinney DCI Drum Expo (summer 2023); and concerts at the University of North Texas, the Krzysztof Penderecki Academy of Music in Kraków, the Opole Philharmonic, Opole Drumfest, and the University of North Texas Global Rhythms Concert (fall 2023)."],
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
        src: "/images/declaration-scv-snare-line.webp",
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
    published: true,
    name: "Kalyanna Mitta",
    year: 2023,
    category: "compositions",
    image: "/images/work-placeholder.svg",
    instrumentation: "Solo for dholak and fixed media",
    description: ["Originally written as a capstone to JT's three years of lessons with Poovalur Sriji at the University of North Texas, Kalyanna Mitta combines the sound of the Hindustani dholak with foundational Carnatic rhythmic cycles and a prearranged electronic track. The piece culminates in a large polyrhythm—10:11:12:13:14:15:16:17:18:19—built from pitch cycles and reminiscent of the long-form overlapping cycles used by artists such as Jairo David Mora (project.jdm). Kalyanna Mitta brings traditional Carnatic rhythmic ideas into conversation with contemporary approaches to cyclical structure."],
    media: [],
    gumroadUrl: "https://4340888381081.gumroad.com/l/KalyannaMitta",
  },
   {
    slug: "denton-halftime",
    published: false,
    name: "Denton Halftime",
    year: 2023,
    category: "compositions",
    image: "/images/work-placeholder.svg",
    instrumentation: "Solo for rope drum and fixed media",
    description: ["Program note coming soon."],
    media: [],
    gumroadUrl: null,
  },
  {
    slug: "in-a-landscape",
    published: false,
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
    slug: "amores-selections",
    published: false,
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
    slug: "bouquet",
    published: false,
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
    slug: "parfum-detoiles",
    published: false,
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

export const publishedPieces = pieces.filter((piece) => piece.published);
