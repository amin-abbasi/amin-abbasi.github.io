/// <reference types="vitest" />
import { defineConfig } from "vitest/config";
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
    react({
      babel: {
        plugins: [
          ["babel-plugin-styled-components", { ssr: true, displayName: true }]
        ]
      }
    }),
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
    outDir: "dist",
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('firebase')) return 'vendor-firebase';
            if (id.includes('recharts') || id.includes('d3')) return 'vendor-charts';
            if (id.includes('framer-motion')) return 'vendor-motion';
            // Leave everything else to Vite/Rollup's default automatic splitting
          }
        },
      },
    },
  },
  // SSG options
  // @ts-ignore
  ssgOptions: {
    script: "defer",
    formatting: "minify",
  },
});
