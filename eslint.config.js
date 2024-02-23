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
  { ignores: ['dist', 'src/routeTree.gen.ts'] },
  {
    ...eslintAllConfig,
    rules: {
      ...eslintAllConfig.rules,
      'new-cap': ['error', { capIsNew: false }],
      'no-console': ['error', { allow: ['error'] }],
      'no-magic-numbers': 'off',
      'no-ternary': 'off',
      'no-void': ['error', { allowAsStatement: true }],
      'one-var': ['error', 'never'],
      'sort-imports': 'off',
      'sort-keys': 'off',
    },
  },
  ...strictTypeChecked,
  ...stylisticTypeChecked,
  {
    files: ['**/*.ts?(x)'],
    languageOptions: { parserOptions: { project: 'tsconfig.?(node.)json' } },
  },
  { files: ['*.config.js'], ...disableTypeChecked },
  {
    ...reactAllConfig,
    languageOptions: {
      ...reactAllConfig.languageOptions,
      globals: { ...globals.serviceworker, ...globals.browser },
    },
    rules: {
      ...reactAllConfig.rules,
      'react/forbid-component-props': 'off',
      'react/function-component-definition': [
        'error',
        { namedComponents: 'arrow-function' },
      ],
      'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
      'react/jsx-no-bind': ['error', { allowArrowFunctions: true }],
      'react/jsx-no-literals': 'off',
      'react/jsx-props-no-spreading': 'off',
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
      'unicorn/filename-case': [
        'error',
        { cases: { camelCase: true, pascalCase: true } },
      ],
      'unicorn/no-null': 'off',
      'unicorn/prevent-abbreviations': [
        'error',
        {
          allowList: {
            El: true,
            Props: true,
            env: true,
            props: true,
            res: true,
          },
        },
      ],
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
    'plugin:tailwindcss/recommended',
    'plugin:@tanstack/eslint-plugin-query/recommended',
  ),
  {
    ...perfectionistNaturalConfig,
    rules: {
      ...perfectionistNaturalConfig.rules,
      'perfectionist/sort-imports': 'off',
    },
  },
);
