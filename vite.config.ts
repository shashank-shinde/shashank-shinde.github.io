import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: (() => {
    // GitHub Pages uses / for user sites and /<repo>/ for project sites.
    const repository = process.env.GITHUB_REPOSITORY;
    if (!repository) return "/";
    const repoName = repository.split("/")[1];
    return repoName === "shashank-shinde.github.io" ? "/" : `/${repoName}/`;
  })(),
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"],
  },
}));
