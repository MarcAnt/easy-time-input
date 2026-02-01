import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import dts from "vite-plugin-dts";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    svgr({
      // A minimatch pattern, or array of patterns, which specifies the files in the build the plugin should include.
      include: "**/*.svg?react",

      //  A minimatch pattern, or array of patterns, which specifies the files in the build the plugin should ignore. By default no files are ignored.
      exclude: "",
    }),
    dts({
      insertTypesEntry: true,
      rollupTypes: true,
      include: ["src"],
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "SimpleTimeInput",
      fileName: (format) => `simple-time-input.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "prop-types"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/Test/setup.ts"],
  },
  server: {
    host: true,
  },

  resolve: {
    preserveSymlinks: true,
  },
});
