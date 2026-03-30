import withNuxt from "./.nuxt/eslint.config.mjs";
import eslintConfigPrettier from "eslint-config-prettier/flat";

export default withNuxt(
  {
    files: ["**/*.vue", "**/*.js", "**/*.ts"],
    rules: {},
  },
  eslintConfigPrettier,
);
