module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "airbnb",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs", ""],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  settings: {
    'import/resolver': {
      alias: [
        ['@', './src'],
      ],
    },
  },  
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "react/jsx-filename-extension": [
      "error",
      {
        extensions: [".js", ".jsx", ".tsx", ".ts", ".svg"],
      },
    ],
    "import/no-extraneous-dependencies": "off",
    "react/react-in-jsx-scope": 0,
    "react/no-unknown-property": ["off", { ignore: ["tsx"] }],
    "jsx-a11y/no-noninteractive-tabindex": "off",
  },
};
