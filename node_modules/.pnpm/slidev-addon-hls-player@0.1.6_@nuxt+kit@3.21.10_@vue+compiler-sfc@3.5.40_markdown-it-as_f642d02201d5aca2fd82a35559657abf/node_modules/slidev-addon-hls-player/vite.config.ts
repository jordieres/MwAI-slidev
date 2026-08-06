import { defineConfig } from "vite";

export default defineConfig({
  optimizeDeps: {
    include: ["slidev-addon-hls-player > hls.js"],
  },
});
