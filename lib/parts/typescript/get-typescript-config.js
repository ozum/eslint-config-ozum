// Suggestions of official ESLint TypeScript Plugin:
// https://typescript-eslint.io/linting/configs
// https://typescript-eslint.io/linting/troubleshooting/performance-troubleshooting

// A good conversion of AirBNB configuration to TypeScript and it's suggested config:
// https://github.com/iamturns/eslint-config-airbnb-typescript
// https://github.com/iamturns/create-exposed-app/blob/master/.eslintrc.js

const LEVEL_RULES = {
  1: {
    // Rules below require `parser service` which may cause low performance.
    "@typescript-eslint/dot-notation": "off",
    "@typescript-eslint/no-implied-eval": "off",
    "@typescript-eslint/no-throw-literal": "off",
    "@typescript-eslint/return-await": "off",
  },
  2: {},
  3: {
    "import/no-named-as-default": "error",
    "import/no-cycle": "error",
    "import/no-deprecated": "error",
  },
};

const LEVEL_EXTENSIONS = {
  1: ["plugin:@typescript-eslint/strict", "plugin:@typescript-eslint/stylistic"],
  2: ["plugin:@typescript-eslint/strict-type-checked", "plugin:@typescript-eslint/stylistic-type-checked"],
  3: ["plugin:@typescript-eslint/strict-type-checked", "plugin:@typescript-eslint/stylistic-type-checked"],
};

module.exports = function getTypeScriptConfig(level) {
  return {
    parser: "@typescript-eslint/parser",
    parserOptions: { project: level > 1 },
    extends: [
      "airbnb-base",
      "airbnb-typescript/base", // TURN ON airbnb-base rules.
      "eslint:recommended", // TURN ON ESLint recommended rules.
      ...LEVEL_EXTENSIONS[level],
      "plugin:promise/recommended",
      "plugin:unicorn/recommended",
      "prettier", // TURNS OFF all ESLint rules conflicting with prettier.
    ],
    plugins: ["@typescript-eslint"],
    rules: {
      // Add rules based on whether environment is CI or not.
      "no-prototype-builtins": "off", // Too restrictive, writing ugly code to defend against a very unlikely scenario: https://eslint.org/docs/rules/no-prototype-builtins
      "no-useless-constructor": "off",
      "no-use-before-define": ["error", { functions: false, classes: true, variables: true }],
      "@typescript-eslint/no-use-before-define": ["error", { functions: false, classes: true, variables: true, typedefs: true }],
      "@typescript-eslint/no-useless-constructor": "error",
      "lines-between-class-members": ["error", "always", { exceptAfterSingleLine: true }],
      "import/prefer-default-export": "off",
      "unicorn/prevent-abbreviations": "off", // Common abbreviations are known and readable
      "unicorn/no-array-for-each": "off", // Airbnb prefers forEach
      "import/no-extraneous-dependencies": "off",

      // TypeScript handles rules below as builtin.
      "import/named": "off",
      "import/namespace": "off",
      "import/default": "off",
      "import/no-named-as-default-member": "off",

      ...LEVEL_RULES[level],
    },
  };
};

