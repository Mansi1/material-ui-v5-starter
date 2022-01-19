module.exports = {
  extends: [
    "plugin:import/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "plugin:jest/recommended",
    "prettier",
    "plugin:prettier/recommended",
  ],
  plugins: ["react", "@typescript-eslint", "jest", "prettier"],
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    project: "./tsconfig.json",
    sourceType: "module",
  },
  rules: {
    "linebreak-style": "off",
    "import/prefer-default-export": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    camelcase: "error",
    // Make sure the interface names do not start with a capital `I`
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "interface",
        format: ["PascalCase"],
        custom: {
          regex: "^I[A-Z]",
          match: false,
        },
      },
      {
        selector: "typeAlias",
        format: ["PascalCase"],
        custom: {
          regex: "^T[A-Z]",
          match: false,
        },
      },
    ],
    "@typescript-eslint/no-unused-vars": [
      "error",
      { varsIgnorePattern: "^_", argsIgnorePattern: "^_" },
    ],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
  },
}
