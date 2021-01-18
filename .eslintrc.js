module.exports = {
  root: true,
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
  plugins: [],
  extends: ["gloria-base"],
  settings: {},
  rules: {},
  ignorePatterns: ["node_modules", "*.config.js", ".*rc.js", "dist"],
};
