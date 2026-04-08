import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";
import prettier from "eslint-config-prettier";
import importPlugin from "eslint-plugin-import";

export default defineConfig([
  globalIgnores(["dist", "build", ".next", "node_modules", "coverage", ".vite", ".cache"]),
  {
    files: ["**/*.{ts,tsx}"],
    plugins: { import: importPlugin },
    extends: [
      js.configs.recommended,
      tseslint.configs.recommendedTypeChecked,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
      prettier,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    settings: {
      "import/resolver": {
        typescript: {
          project: ["./tsconfig.app.json", "./tsconfig.node.json"],
          noWarnOnMultipleProjects: true,
        },
      },
    },

    rules: {
      "import/no-unresolved": "error",
      "import/no-cycle": "warn",
      "import/no-duplicates": "error",
      "import/order": [
        "warn",
        {
          groups: [
            "builtin", // node 内置
            "external", // npm 包
            "internal", // alias (@/)
            "parent", // ../
            "sibling", // ./
            "index",
          ],
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],
    },
  },
  {
    files: ["src/main.tsx"],
    rules: {
      "@typescript-eslint/no-non-null-assertion": "off",
    },
  },
]);
