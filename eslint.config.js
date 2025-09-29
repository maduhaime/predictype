import importPlugin from 'eslint-plugin-import';
import prettierPlugin from 'eslint-plugin-prettier';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';

export default [
  {
    files: ['src/**/*.ts'],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      'import': importPlugin,
      'prettier': prettierPlugin,
    },
    rules: {
      // Force braces + return for all arrow functions
      'arrow-body-style': ['error', 'as-needed'],

      // Disable unused vars from base eslint as it can conflict with TS
      'no-unused-vars': 'off',

      // Max line length
      'max-len': ['warn', { code: 120, ignoreUrls: true }],

      // Imports
      'import/no-duplicates': 'error',
      'import/order': [
        'error',
        {
          'groups': ['builtin', 'external', 'internal'],
          'newlines-between': 'always',
        },
      ],

      // Ignore unused args that start with _
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      // Explicit return type for functions (TypeScript best practice)
      '@typescript-eslint/explicit-function-return-type': 'warn',

      // Warn on console.log usage
      'no-console': 'warn',
    },
  },
];
