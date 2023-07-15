module.exports = {
  parserOptions: { project: true },
  env: { "jest/globals": true },
  plugins: ["jest"],
  extends: ["plugin:jest/all"],
  rules: {
    "jest/prefer-expect-assertions": [
      "error",
      { onlyFunctionsWithAsyncKeyword: true, onlyFunctionsWithExpectInLoop: true, onlyFunctionsWithExpectInCallback: true },
    ],
  },
};
