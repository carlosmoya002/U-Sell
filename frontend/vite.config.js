import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import dotenv from "dotenv";

const envFilePath = path.resolve("../", ".env");
dotenv.config({ path: envFilePath });

const port = process.env.PORT;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: `http://localhost:${port}`,
        changeOrigin: true,
      },
    },
  },
});
