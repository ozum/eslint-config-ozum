const SHARED_RULES = require("./shared-rules");

module.exports = {
  parserOptions: { sourceType: "script" },
  extends: [
    "eslint:recommended", // TURN ON ESLint recommended rules.
    "airbnb-base", // TURN ON airbnb-base rules.
    "plugin:promise/recommended",
    "plugin:unicorn/recommended",
    "prettier", // TURNS OFF all ESLint rules conflicting with prettier.
  ],
  rules: {
    ...SHARED_RULES,
  },
};
