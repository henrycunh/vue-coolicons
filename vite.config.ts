import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import typescript from "rollup-plugin-typescript2";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/main.ts"),
      name: "VueCoolicons",
      fileName: (format) => `vue-coolicons.${format}.js`,
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
  plugins: [
    vue(),
    {
      ...typescript(),
      apply: "build",
    },
  ],
});
