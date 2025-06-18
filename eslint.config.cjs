const js = require('@eslint/js');
const reactNative = require('@react-native/eslint-config');
const react = require('eslint-plugin-react');
const reactHooks = require('eslint-plugin-react-hooks');
const reactRefresh = require('eslint-plugin-react-refresh');
const importPlugin = require('eslint-plugin-import');
const jestPlugin = require('eslint-plugin-jest');
const testingLibrary = require('eslint-plugin-testing-library');
const unicorn = require('eslint-plugin-unicorn');
const perfectionist = require('eslint-plugin-perfectionist');
const tsParser = require('@typescript-eslint/parser');
const prettierConfig = require('eslint-config-prettier');

module.exports = [
  js.configs.recommended,
  ...reactNative,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {sourceType: 'module'},
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      import: importPlugin,
      jest: jestPlugin,
      'testing-library': testingLibrary,
      unicorn,
      perfectionist,
    },
    settings: {
      'import/resolver': {typescript: {}},
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react-refresh/only-export-components': 'warn',
      'unicorn/prevent-abbreviations': 'off',
      'perfectionist/sort-imports': 'warn',
    },
  },
  {
    files: ['**/__tests__/**', '**/*.test.ts', '**/*.test.tsx'],
    plugins: {jest: jestPlugin, 'testing-library': testingLibrary},
    rules: {'jest/expect-expect': 'warn'},
  },
  prettierConfig,
];
