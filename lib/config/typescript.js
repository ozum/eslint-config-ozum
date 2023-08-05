// Suggestions of official ESLint TypeScript Plugin:
// https://typescript-eslint.io/linting/configs
// https://typescript-eslint.io/linting/troubleshooting/performance-troubleshooting

// A good conversion of AirBNB configuration to TypeScript and it's suggested config:
// https://github.com/iamturns/eslint-config-airbnb-typescript
// https://github.com/iamturns/create-exposed-app/blob/master/.eslintrc.js

const EXTENSIONS = {
  MINIMUM: ["plugin:@typescript-eslint/strict", "plugin:@typescript-eslint/stylistic"],
  RECOMMENDED: ["plugin:@typescript-eslint/strict-type-checked", "plugin:@typescript-eslint/stylistic-type-checked"],
  MAXIMUM: ["plugin:@typescript-eslint/strict-type-checked", "plugin:@typescript-eslint/stylistic-type-checked"],
};

const RULES = {
  MINIMUM: {
    // Rules below require `parser service` which may cause low performance.
    "@typescript-eslint/dot-notation": "off",
    "@typescript-eslint/no-implied-eval": "off",
    "@typescript-eslint/no-throw-literal": "off",
    "@typescript-eslint/return-await": "off",
  },
  RECOMMENDED: {},
  MAXIMUM: {
    "import/no-named-as-default": "error",
    "import/no-cycle": "error",
    "import/no-deprecated": "error",
  },
};

module.exports = function getTsConfig(level) {
  return {
    parser: "@typescript-eslint/parser",
    parserOptions: { project: level !== "MINIMUM" },
    extends: [
      "airbnb-base",
      "airbnb-typescript/base", // TURN ON airbnb-base rules.
      "eslint:recommended", // TURN ON ESLint recommended rules.
      ...EXTENSIONS[level],
      "plugin:promise/recommended",
      "plugin:unicorn/recommended",
      "prettier", // TURNS OFF all ESLint rules conflicting with prettier.
    ],
    rules: {
      // Add rules based on whether environment is CI or not.
      "no-prototype-builtins": "off", // Too restrictive, writing ugly code to defend against a very unlikely scenario: https://eslint.org/docs/rules/no-prototype-builtins
      "no-useless-constructor": "off",
      "no-use-before-define": ["error", { functions: false, classes: true, variables: true }],
      "@typescript-eslint/no-use-before-define": ["error", { functions: false, classes: true, variables: true, typedefs: true }],
      "@typescript-eslint/no-useless-constructor": "error",
      "@typescript-eslint/non-nullable-type-assertion-style": "off",
      "lines-between-class-members": ["error", "always", { exceptAfterSingleLine: true }],
      "import/prefer-default-export": "off",
      "unicorn/prevent-abbreviations": "off", // Common abbreviations are known and readable
      "unicorn/no-array-for-each": "off", // Airbnb prefers forEach
      "import/no-extraneous-dependencies": "off",
      "no-console": ["error", { allow: ["info", "warn", "error"] }],

      // TypeScript handles rules below as builtin.
      "import/named": "off",
      "import/namespace": "off",
      "import/default": "off",
      "import/no-named-as-default-member": "off",
      ...RULES[level],
    },
    overrides: [{ files: ["*.spec.ts", "*.test.ts"], extends: ["./config/test"] }], // JEST: Merge with TypeScript rules. Apply to test files.
  };
};
