import react from "@vitejs/plugin-react"
import { resolve } from "path"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@app": resolve(__dirname, "src/app"),
      "@pages": resolve(__dirname, "src/pages"),
      "@uikit": resolve(__dirname, "src/components/ui-kit"),
      "@widgets": resolve(__dirname, "src/components/widgets"),
      "@services": resolve(__dirname, "src/services"),
      "@app-config": resolve(__dirname, "src/config"),
      "@styles": resolve(__dirname, "src/styles"),
    },
  },
})
