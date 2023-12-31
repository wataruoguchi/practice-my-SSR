import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  build: {
    emptyOutDir: false,
    ssrManifest: true,
    outDir: "dist/",
  },
});
