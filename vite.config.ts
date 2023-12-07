import pages from "@hono/vite-cloudflare-pages";
import devServer from "@hono/vite-dev-server";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    react(),
    pages(),
    devServer({
      entry: "src/index.tsx",
    }),
  ],
  build: {
    emptyOutDir: false,
  },
});
