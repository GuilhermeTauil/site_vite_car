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
  resolve: {
    alias: {
      // Caso tenha problemas específicos de caminho, pode ser necessário definir um alias para resolver corretamente
      bootstrap: "node_modules/bootstrap/dist/css/bootstrap.min.css",
    },
  },
});
