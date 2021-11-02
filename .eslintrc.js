// .eslintrc.js
function isTruthy(value) {
  if (!value) return false;
  return ['1', 'true'].indexOf(value.toLowerCase()) >= 0;
}

// Warnings are errors in CI
var OFF = 'off';
var ERROR = 'error';
var WARNING = isTruthy(process.env.CI) ? ERROR : 'warn';

module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  parserOptions: { ecmaVersion: 8 }, // to enable features such as async/await
  ignorePatterns: ['node_modules/*', '.next/*', '.out/*', '!.prettierrc.js'], // We don't want to lint generated files nor node_modules, but we want to lint .prettierrc.js (ignored by default by eslint)
  extends: ['eslint:recommended'],
  overrides: [
    // This configuration will apply only to TypeScript files
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      settings: { react: { version: 'detect' } },
      env: {
        browser: true,
        node: true,
        es6: true,
      },
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended', // TypeScript rules
        'plugin:react/recommended', // React rules
        'plugin:react-hooks/recommended', // React hooks rules
        'plugin:jsx-a11y/recommended', // Accessibility rules
        'plugin:prettier/recommended',
      ],
      rules: {
        // We will use TypeScript's types for component props instead

        // No need to import React when using Next.js
        'react/react-in-jsx-scope': 'off',

        // This rule is not compatible with Next.js's <Link /> components
        'jsx-a11y/anchor-is-valid': 'off',

        // Why would you want unused vars?
        '@typescript-eslint/no-unused-vars': ['error'],

        // I suggest this setting for requiring return types on functions only where useful
        '@typescript-eslint/explicit-function-return-type': [
          'warn',
          {
            allowExpressions: true,
            allowConciseArrowFunctionExpressionsStartingWithVoid: true,
          },
        ],

        'prettier/prettier': ['error', {}, { usePrettierrc: true }], // Includes .prettierrc.js rules

        // Warning não é permitido e nem console logs
        "comma-dangle": OFF,
        "eqeqeq": [WARNING, "allow-null"],
        "import/imports-first": OFF,
        "@typescript-eslint/indent": [WARNING, 2, {"SwitchCase": 1}],
        "max-len": [WARNING, 100, 2],
        "no-console": [WARNING, {"allow": ["warn", "error"]}],
        "no-debugger": WARNING,
        "no-fallthrough": WARNING,
        "no-unreachable": WARNING,
        "no-unused-vars": [WARNING, {"vars": "all", "args": "none"}],
        "no-var": ERROR,
        "prefer-const": WARNING,
        "react/prop-types": OFF,
        "semi": [WARNING, "never"],
      },
    },
  ],
}
