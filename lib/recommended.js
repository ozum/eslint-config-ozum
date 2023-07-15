module.exports = {
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      extends: ["./parts/typescript/recommended"],
      overrides: [{ files: ["*.spec.ts", "*.test.ts"], extends: ["./parts/test"] }], // JEST: Merge with TypeScript rules. Apply to test files.
    },
    { files: ["*.js"], extends: ["./parts/javascript"] },
  ],
};
