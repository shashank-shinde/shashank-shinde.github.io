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
  /** Default document & OG title */
  title: "Shashank Shinde | Full-Stack Engineer",
  /** ~155 chars — shown in Google snippets and link previews */
  description:
    "Full-stack engineer building scalable web and mobile systems—backend architecture, polished UIs, Bitcoin, AI, and product engineering. Portfolio, projects, experience, and contact.",
  /** Path under /public for og:image & Twitter cards (absolute URL built via metadataBase) */
  ogImagePath: "/og.jpg",
} as const;
