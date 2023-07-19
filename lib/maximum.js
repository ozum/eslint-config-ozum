const getTsConfig = require("./config/typescript.js");

module.exports = {
  overrides: [
    { files: ["*.ts", "*.tsx"], ...getTsConfig("MAXIMUM") },
    { files: ["*.js"], extends: ["./config/javascript.js"] },
    { files: ["*.cjs"], extends: ["./config/commonjs.js"] },
  ],
};
