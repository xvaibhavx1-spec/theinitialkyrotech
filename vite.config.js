import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: ["", "about/", "services/", "projects/", "founder/", "contact/"].map(
        (page) => fileURLToPath(new URL(page + "index.html", import.meta.url))
      )
    }
  }
});
