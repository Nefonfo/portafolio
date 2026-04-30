import eslintPluginAstro from 'eslint-plugin-astro';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  // Astro rules (includes astro parser for .astro files)
  ...eslintPluginAstro.configs['flat/recommended'],

  // TypeScript rules scoped only to .ts files — avoids overriding the astro parser
  {
    files: ['**/*.ts', '**/*.tsx'],
    extends: tseslint.configs.recommended,
    rules: {
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/triple-slash-reference': 'off',
    },
  },

  {
    ignores: ['dist/', 'node_modules/', '.astro/'],
  }
);
