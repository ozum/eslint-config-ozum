module.exports = {
  parserOptions: { "sourceType": "script" },
  extends: [
    "eslint:recommended", // TURN ON ESLint recommended rules.
    "airbnb-base", // TURN ON airbnb-base rules.
    "prettier", // TURNS OFF all ESLint rules conflicting with prettier.
  ],
};
