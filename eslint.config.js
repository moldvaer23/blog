import js from "@eslint/js"
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"
import globals from "globals"
import tseslint from "typescript-eslint"

export default tseslint.config(
  { ignores: ["dist, node_modules"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "import/no-unresolved": "off",
    },
    settings: {
      "import/resolver": {
        alias: {
          map: [
            ["@app", "src/app"],
            ["@pages", "src/pages"],
            ["@widgets", "src/components/widgets"],
            ["@ui-kit", "src/components/ui-kit"],
            ["@services", "src/services"],
            ["@app-config", "src/config"],
            ["@styles", "src/styles"],
            ["@assets", "src/assets"],
          ],
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      },
    },
  }
)
