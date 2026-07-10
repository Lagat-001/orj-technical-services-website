import type { MetadataRoute } from "next";

// Served at /manifest.webmanifest and auto-linked by Next.js.
// Browser-tab + apple-touch icons are declared via metadata.icons in layout.tsx
// (served from /public); the manifest adds the Android / PWA home-screen icons.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ORJ Technical Services L.L.C.",
    short_name: "ORJ Technical",
    description:
      "AC, ventilation, fit-out and technical maintenance services in Dubai, UAE.",
    start_url: "/",
    display: "standalone",
    background_color: "#0A1A2F",
    theme_color: "#0A1A2F",
    icons: [
      { src: "/icon-192x192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icon-512x512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/maskable-icon-512x512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
