import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/properties": {
        target: process.env.VITE_BASE_URL,
        changeOrigin: true,
      },
    },
  },
});
