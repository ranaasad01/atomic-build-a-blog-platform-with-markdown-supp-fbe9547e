export type NavLink = {
  label: string;
  href: string;
};

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  author: string;
  readingTime: number;
  coverImage?: string;
};

export type Author = {
  name: string;
  bio: string;
  avatar: string;
  twitter?: string;
  github?: string;
};

// ─── Brand constants ────────────────────────────────────────────────────────
export const APP_NAME = "Inkwell";
export const APP_TAGLINE = "Ideas worth reading, beautifully rendered.";
export const APP_DESCRIPTION =
  "A clean, minimal blog platform with full markdown support, syntax highlighting, and tag-based browsing.";

// ─── Navigation (single source of truth) ────────────────────────────────────
// Route links start with "/"; section anchors start with "#".
export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Articles", href: "#articles" },
  { label: "Tags", href: "#tags" },
  { label: "About", href: "#about" },
];

export const navCTA = {
  label: "Start Reading",
  href: "#articles",
};