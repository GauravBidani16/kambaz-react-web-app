import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://kambaz-node-server-app-beye.onrender.com",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
