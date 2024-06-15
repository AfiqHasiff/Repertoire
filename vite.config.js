import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "url";

export default defineConfig({
  plugins: [react(), svgr()],
  base: "/mdc/",
  resolve: {
    alias: [
      { find: "views", replacement: fileURLToPath(new URL("./src/views", import.meta.url)) },
      { find: "common", replacement: fileURLToPath(new URL("./src/common", import.meta.url)) },
      { find: "assets", replacement: fileURLToPath(new URL("./src/assets", import.meta.url)) },
      { find: "layouts", replacement: fileURLToPath(new URL("./src/layouts", import.meta.url)) },
      { find: "reducers", replacement: fileURLToPath(new URL("./src/common/redux/reducers", import.meta.url)) },
    ],
  },
  build: {
    rollupOptions: {
      output: {
        dir: "build/",
        assetFileNames: (assetInfo) => {
          let extType = assetInfo?.name?.split(".")?.[1] ?? "";
          if (/png|jpeg|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = "img";
          }
          return `static/${extType}/[name]-[hash][extname]`;
        },
        chunkFileNames: "static/js/[name]-[hash].js",
        entryFileNames: "static/js/[name]-[hash].js",
      },
    },
  },
});
