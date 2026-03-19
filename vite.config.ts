import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      src: path.resolve(__dirname, "./src"),
      constants: path.resolve(__dirname, "./src/constants"),
      components: path.resolve(__dirname, "./src/components"),
      hooks: path.resolve(__dirname, "./src/hooks"),
      utils: path.resolve(__dirname, "./src/utils"),
    },
  },
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: "public/**/*",
          dest: ".",
        },
      ],
    }),
  ],
  base: "/",
  build: {
    outDir: "build",
  },
  // SSG options
  // @ts-ignore
  ssgOptions: {
    script: "async",
    formatting: "minify",
  },
});
