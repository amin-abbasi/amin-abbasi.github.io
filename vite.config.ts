import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";

// https://vitejs.dev/config/
export default defineConfig({
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
  define: {
    "process.env.PUBLIC_URL": JSON.stringify(""),
    global: "(typeof window !== \"undefined\" ? window : global)",
    "process.version": JSON.stringify(""),
  },
  base: "/",
  build: {
    outDir: "dist",
  },
  // SSG options
  // @ts-ignore
  ssgOptions: {
    script: "async",
    formatting: "minify",
  },
});
