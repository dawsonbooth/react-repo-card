module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:prettier/recommended",
  ],
  plugins: ["react"],
  rules: {
    "react/prop-types": "off",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      impliedStrict: true,
    },
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
