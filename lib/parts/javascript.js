module.exports = {
  extends: [
    "eslint:recommended", // TURN ON ESLint recommended rules.
    "plugin:jest/recommended", // TURN ON Jest rules by using "jest-community/eslint-plugin-jest".
    "airbnb-base", // TURN ON airbnb-base rules.
    "prettier", // TURNS OFF all ESLint rules conflicting with prettier.
  ],
  rules: {},
};
