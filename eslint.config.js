import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";
import googleappsscript from "eslint-plugin-googleappsscript";
import preact from "eslint-config-preact";
import eslintConfigPrettier from "eslint-config-prettier/flat";

export default defineConfig([
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...preact,
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: {
      js,
      googleappsscript,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...(googleappsscript.environments.googleappsscript.globals),
      },
      ecmaVersion: "latest",
      sourceType: "module",
    },
  },
  eslintConfigPrettier,
]);
