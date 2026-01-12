// ESLint 9 flat config for Qwik + TypeScript
import eslint from '@eslint/js';
// @ts-ignore
import tseslint from 'typescript-eslint';
import qwik from 'eslint-plugin-qwik';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      qwik: qwik,
    },
    rules: {
      // Qwik specific rules
      'qwik/use-method-usage': 'warn',
      'qwik/valid-lexical-scope': 'error',
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
      'public/**',
      'server/**',
      '.github/**',
      'scripts/**',
    ],
  }
);
