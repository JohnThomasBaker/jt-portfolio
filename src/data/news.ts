export type NewsPost = {
  slug: string;
  date: string;
  title: string;
  excerpt: string;
  body: string[];
};

export const posts: NewsPost[] = [
  {
    slug: "blast",
    date: "September 15, 2026",
    title: "Blast",
    excerpt: "A few thoughts on what I am writing, listening to, and carrying into the next season.",
    body: ["The studio is in motion. I am developing new percussion and chamber ideas while making room for the accidents and detours that make a piece feel alive."],
  },
  {
    slug: "flat-circle-project",
    date: "August 28, 2026",
    title: "Flat Circle Project",
    excerpt: "Why rehearsal rooms, marching fields, and quiet practice spaces all end up in the same work.",
    body: ["The most useful ideas rarely arrive in isolation. They come from a phrase heard across a rehearsal room, a rhythm remembered from the field, or a texture found while practicing slowly."],
  },
  {
    slug: "taksu-dua",
    date: "July 12, 2026",
    title: "Taksu Dua",
    excerpt: "New recordings, performances, and ways to spend time with the work are on the way.",
    body: ["I am putting together new recordings and preparing several projects for release. This page will be the place for notes, dates, and occasional behind-the-scenes pieces."],
  },
];
