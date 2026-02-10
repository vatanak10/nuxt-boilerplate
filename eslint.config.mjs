import perfectionist from "eslint-plugin-perfectionist";

import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt([
  perfectionist.configs["recommended-natural"],
  {
    files: ["**/*.vue", "**/*.js", "**/*.ts"],
    rules: {
      "vue/attribute-hyphenation": [
        "error",
        "never",
        {
          ignore: [],
          ignoreTags: [],
        },
      ],
      "vue/v-on-event-hyphenation": [
        "error",
        "never",
        {
          autofix: true,
          ignore: [],
          ignoreTags: [],
        },
      ],
    },
  },
]);
