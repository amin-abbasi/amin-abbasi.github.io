/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      thresholds: {
        lines: 70,
        functions: 70,
        branches: 70,
        statements: 70
      }
    }
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, "./src"),
      "@core": path.resolve(__dirname, "./src/core"),
      "@shared": path.resolve(__dirname, "./src/shared"),
      "@features": path.resolve(__dirname, "./src/features"),
      "@app": path.resolve(__dirname, "./src/app"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@styles": path.resolve(__dirname, "./src/app/styles"),
      "@constants": path.resolve(__dirname, "./src/app/constants"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@hooks": path.resolve(__dirname, "./src/app/hooks"),
      "@utils": path.resolve(__dirname, "./src/app/utils"),
      "@domain-types": path.resolve(__dirname, "./src/core/types"),
      "@pages": path.resolve(__dirname, "./src/pages"),
    },
  },
  ssr: {
    noExternal: ["styled-components", "react-awesome-reveal", "@emotion/react", "@emotion/styled"],
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
  define: {
    global: 'globalThis',
  },
  base: "/",
  build: {
    outDir: "build",
  },
  envPrefix: ["VITE_", "FIREBASE_", "FORM_"],
  // SSG options
  // @ts-ignore
  ssgOptions: {
    script: "defer",
    formatting: "minify",
  },
});
