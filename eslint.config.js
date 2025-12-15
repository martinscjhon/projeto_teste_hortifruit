import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

export default [
  js.configs.recommended,

  // TypeScript (flat config)
  ...tseslint.configs.recommended,

  {
    files: ["src/**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.browser,
    },
    plugins: {
      react,
      prettier: prettierPlugin,
    },
    settings: {
      react: { version: "detect" },
    },
    rules: {
      // Suas regras
      "@typescript-eslint/no-explicit-any": "off",
      "react/no-unescaped-entities": "off",
      "no-useless-escape": "off",
      "no-dupe-else-if": "off",
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/no-empty-function": "off",
      "react/no-children-prop": "off",
      "react/react-in-jsx-scope": "off",
      "no-console": "warn",

      // Prettier como rule
      "prettier/prettier": "error",
    },
  },

  // Desliga regras que conflitam com Prettier
  prettierConfig,

  // Ignorar pastas
  { ignores: ["dist/**", "node_modules/**"] },
];
