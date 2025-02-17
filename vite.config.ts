import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
  server: {
    allowedHosts: [".ngrok-free.app", ".ngrok.io"],

    host: "0.0.0.0",

    cors: true,
  },
});
