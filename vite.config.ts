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
      fileName: (format) => `index.${format}.js`,
      formats: ["es", "umd"],
    },
    rollupOptions: {
      external: ["react", "react-dom", "gsap"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          gsap: "gsap",
        },
      },
    },
  },
});
