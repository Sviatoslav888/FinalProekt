const { defineConfig } = require("eslint/config");
const expoConfig = require("eslint-config-expo/flat");
const prettierConfig = require("eslint-config-prettier");

module.exports = defineConfig([
  expoConfig,
  {
    ignores: ["dist/*", ".expo/*", "coverage/*", "scripts/reset-project.js"],
    rules: {
      "no-console": "error",
      "no-debugger": "error",
    },
  },
  prettierConfig,
]);
