module.exports = {
  env: {
    node: true,
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:react/recommended",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 11,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "react"],
  rules: {
    "@typescript-eslint/no-var-requires": ["off", { extensions: [".js"] }],
    "import/no-unresolved": "off",
    "no-useless-return": "error",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["off"],
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
};
