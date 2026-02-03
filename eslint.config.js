import js from "@eslint/js";
import tsParser from "@typescript-eslint/parser";
import importSort from "eslint-plugin-simple-import-sort";
import pluginVue from "eslint-plugin-vue";
import vueEslintParser from "vue-eslint-parser";

export default [
  {
    files: ["**/*.{js,jsx,ts,tsx,vue}"],
    rules: {
      ...js.configs.recommended.rules,
      ...pluginVue.configs["flat/recommended"].rules,
      "no-console": "warn",
      "simple-import-sort/imports": "error",
      
    },
    languageOptions: {
      parser: vueEslintParser,
      parserOptions: {
        parser: tsParser,
      },
    },
    plugins: {
      "vue": pluginVue,
      "simple-import-sort": importSort,
    }
  }
]