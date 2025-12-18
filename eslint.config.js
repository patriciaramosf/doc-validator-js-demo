import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

const ignores = [
  '.husky/**',
  'dist/**',
  'node_modules/**',
];

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    ignores,
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
        rules: {
      // POSIBLES ERRORES
      'no-use-before-define': 'error',
      'no-param-reassign': ['error', { props: true }],
      'no-self-compare': 'error',
      'no-unreachable': 'error',
      'no-constant-condition': 'error',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],

      // MEJORES PRÁCTICAS
      'prefer-arrow-callback': 'error',
      'prefer-template': 'error',
      'no-extra-bind': 'error',
      'no-mixed-operators': 'error',

      // ESTILO
      'quotes': ['error', 'single', { avoidEscape: true }],
      'semi': ['error', 'always'],
      'max-len': ['warn', { code: 100, ignoreComments: true }],
      'camelcase': 'error',
      'no-trailing-spaces': 'warn',
      'no-multiple-empty-lines': ['warn', { max: 1 }],
      'object-curly-spacing': ['warn', 'always'],
      'spaced-comment': 'warn',
      'indent': ['error', 2, { SwitchCase: 1 }],
      'space-before-function-paren': ['error', { anonymous: 'always', named: 'never' }],
      'key-spacing': 'warn',
      'comma-dangle': ['warn', 'always-multiline'],
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
])
