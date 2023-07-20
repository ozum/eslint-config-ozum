module.exports = {
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  extends: [
    "eslint:recommended", // TURN ON ESLint recommended rules.
    "airbnb-base", // TURN ON airbnb-base rules.
    "prettier", // TURNS OFF all ESLint rules conflicting with prettier.
  ],
  rules: {
    "import/extensions": ["error", "always"], // ESM requires file extensions to be used.
  },
};
