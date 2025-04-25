// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"), // ← here
      name: "ReactFav",
      formats: ["es"],
      fileName: () => "index.js" // or "index.es.js"
    },
    rollupOptions: {
      external: ["react", "react-dom", "gsap"],
      output: {
        assetFileNames: (assetInfo) => {
          // Only rename CSS assets
          if (assetInfo.name && assetInfo.name.endsWith(".css")) {
            return "Orange.css";
          }
          // Default for other assets
          return "[name][extname]";
        },
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          gsap: "gsap",
        },
      },
    },
  },
});
