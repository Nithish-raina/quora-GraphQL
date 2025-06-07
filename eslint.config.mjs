import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import pluginNode from "eslint-plugin-n";
import eslintPluginPrettier from "eslint-plugin-prettier";
import pluginReact from "eslint-plugin-react";
import pluginSecurity from "eslint-plugin-security";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import globals from "globals";
import tseslint from "typescript-eslint";

import user from "./index.js";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: {
      js,
      n: pluginNode,
      security: pluginSecurity,
      prettier: eslintPluginPrettier,
      "simple-import-sort": simpleImportSort,
    },
    extends: ["js/recommended"],
    rules: {
      ...pluginNode.configs.recommended.rules,
      ...pluginSecurity.configs.recommended.rules,
      "prettier/prettier": "error",
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    languageOptions: { globals: globals.browser },
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
]);
