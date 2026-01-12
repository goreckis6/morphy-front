// ESLint 9 flat config for Qwik + TypeScript
import eslint from '@eslint/js';
// @ts-ignore
import tseslint from 'typescript-eslint';
import qwik from 'eslint-plugin-qwik';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    // Use TypeScript parser without type-aware linting to avoid CI failures
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      qwik: qwik,
    },
    rules: {
      // Qwik specific rules
      'qwik/use-method-usage': 'warn',
      // Disable type-aware rule to prevent build failures without typed linting
      'qwik/valid-lexical-scope': 'off',
      // TypeScript rules
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',
      // General rules
      'no-console': 'warn',
    },
  },
  {
    ignores: [
      'dist/**',
      'node_modules/**',
      '*.config.js',
      '*.config.ts',
      '*.timestamp-*.mjs',
      'public/**',
      'server/**',
      '.github/**',
      'scripts/**',
      '.eslintcache',
    ],
  }
);
