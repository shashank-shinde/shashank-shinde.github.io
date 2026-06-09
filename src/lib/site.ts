/**
 * Canonical site URL for metadata, OG tags, and absolute image URLs.
 * Override with `NEXT_PUBLIC_SITE_URL` when you use a custom domain on Vercel.
 */
export const CANONICAL_SITE_URL = "https://shashank-shinde.vercel.app";

export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) return explicit.replace(/\/$/, "");
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL.replace(/^https?:\/\//, "")}`;
  if (process.env.NODE_ENV === "development") return "http://localhost:8080";
  return CANONICAL_SITE_URL;
}

export const siteConfig = {
  name: "Shashank Shinde",
  title: "Shashank Shinde | Full-Stack & Applied AI Engineer",
  description:
    "Full-Stack & Generative AI Engineer building scalable web and mobile applications, Bitcoin infrastructure, intelligent agents, RAG systems, and AI-powered products with Python, Node.js, React, React Native, and Rust.",

  ogImagePath: "/og.jpg",
} as const;
