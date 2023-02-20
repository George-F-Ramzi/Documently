import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      moduleContext: {
        "./node_modules/pdfmake/build/vfs_fonts.js": "window",
      },
    },
  },
});
