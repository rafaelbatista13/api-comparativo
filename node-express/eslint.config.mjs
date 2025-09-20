// Minimal ESLint config for NestJS (ESLint v9 flat config)
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
export default [
  { ignores: ["dist/**", "node_modules/**"] },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_", "varsIgnorePattern": "^_" }]
    }
  }
];
