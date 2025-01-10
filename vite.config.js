import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";

export default defineConfig({
  plugins: [solidPlugin()],
  server: {
    open: true, // Abre automaticamente no navegador
  },
  build: {
    outDir: "dist",
    target: "esnext",
  },
});
