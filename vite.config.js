import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

export default defineConfig({
  base: "/PrivacyLensSite/",
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        whatsNew: resolve(__dirname, "src/pages/whatsNew.html"),
        termsOfService: resolve(__dirname, "src/pages/termsOfService.html"),
        privacyPolicy: resolve(__dirname, "src/pages/privacyPolicy.html"),
        // Add other pages here
      },
    },
  },
});
