module.exports = {
  "no-prototype-builtins": "off", // Too restrictive, writing ugly code to defend against a very unlikely scenario: https://eslint.org/docs/rules/no-prototype-builtins
  "no-useless-constructor": "off",
  "no-use-before-define": ["error", { functions: false, classes: true, variables: true }],
  "lines-between-class-members": ["error", "always", { exceptAfterSingleLine: true }],
  "import/prefer-default-export": "off",
  "unicorn/prevent-abbreviations": "off", // Common abbreviations are known and readable
  "unicorn/no-array-for-each": "off", // Airbnb prefers forEach
  "unicorn/no-array-reduce": "off", // Reduce is useful in many applications.
  "import/no-extraneous-dependencies": "off",
  "no-console": ["error", { allow: ["info", "warn", "error"] }],
};
