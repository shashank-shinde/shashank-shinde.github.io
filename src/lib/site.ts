/** Canonical site URL for metadata, OG tags, and absolute image URLs. Set NEXT_PUBLIC_SITE_URL on Vercel (e.g. https://yoursite.com). */
export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) return explicit.replace(/\/$/, "");
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL.replace(/^https?:\/\//, "")}`;
  return "http://localhost:8080";
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
