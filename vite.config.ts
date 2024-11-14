import react from "@vitejs/plugin-react"
import { resolve } from "path"
import { defineConfig } from "vite"
import svgr from "vite-plugin-svgr"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      "@app": resolve(__dirname, "src/app"),
      "@pages": resolve(__dirname, "src/pages"),
      "@ui-kit": resolve(__dirname, "src/components/ui-kit"),
      "@widgets": resolve(__dirname, "src/components/widgets"),
      "@services": resolve(__dirname, "src/services"),
      "@app-config": resolve(__dirname, "src/config"),
      "@styles": resolve(__dirname, "src/styles"),
      "@assets": resolve(__dirname, "src/assets"),
    },
  },
})
