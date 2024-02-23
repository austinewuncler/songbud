import { FlatCompat } from '@eslint/eslintrc';
import eslint from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import arrayFuncPlugin from 'eslint-plugin-array-func';
import perfectionistNaturalConfig from 'eslint-plugin-perfectionist/configs/recommended-natural';
import reactRefreshPlugin from 'eslint-plugin-react-refresh';
import reactAllConfig from 'eslint-plugin-react/configs/all.js';
import { configs as unicornConfigs } from 'eslint-plugin-unicorn';
import globals from 'globals';
import tsEslint from 'typescript-eslint';

const eslintAllConfig = eslint.configs.all;
const { disableTypeChecked, strictTypeChecked, stylisticTypeChecked } =
  tsEslint.configs;
const unicornAllConfig = unicornConfigs['flat/all'];
const compat = new FlatCompat();

export default tsEslint.config(
  { ignores: ['dist'] },
  {
    ...eslintAllConfig,
    rules: {
      ...eslintAllConfig.rules,
      'one-var': ['error', 'never'],
      'sort-imports': 'off',
    },
  },
  ...strictTypeChecked,
  ...stylisticTypeChecked,
  {
    files: ['**/*.ts?(x)'],
    languageOptions: { parserOptions: { project: 'tsconfig.?(node.)json' } },
  },
  { files: ['eslint.config.js'], ...disableTypeChecked },
  {
    ...reactAllConfig,
    languageOptions: {
      ...reactAllConfig.languageOptions,
      globals: { ...globals.serviceworker, ...globals.browser },
    },
    rules: {
      ...reactAllConfig.rules,
      'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
    },
    settings: { react: { version: 'detect' } },
  },
  {
    plugins: { 'react-refresh': reactRefreshPlugin },
    rules: { 'react-refresh/only-export-components': 'warn' },
  },
  {
    ...unicornAllConfig,
    rules: {
      ...unicornAllConfig.rules,
      'unicorn/prevent-abbreviations': ['error', { allowList: { El: true } }],
    },
  },
  arrayFuncPlugin.configs.all,
  prettierConfig,
  ...compat.extends(
    'plugin:sonarjs/recommended',
    'plugin:compat/recommended',
    'plugin:promise/recommended',
    'plugin:regexp/all',
    'plugin:optimize-regex/all',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/strict',
  ),
  {
    ...perfectionistNaturalConfig,
    rules: {
      ...perfectionistNaturalConfig.rules,
      'perfectionist/sort-imports': 'off',
    },
  },
);
