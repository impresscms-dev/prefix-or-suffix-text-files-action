import js from '@eslint/js';
import jestPlugin from 'eslint-plugin-jest';

export default [
  js.configs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        process: 'readonly',
        console: 'readonly',
        module: 'readonly',
        require: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
      }
    },
    rules: {
      'no-unused-vars': 'error',
      'camelcase': 'off',
      'func-call-spacing': ['error', 'never'],
      'no-array-constructor': 'error',
      'no-useless-constructor': 'error',
      'semi': ['error', 'never'],
      'no-useless-escape': 'off',
    },
    linterOptions: {
      reportUnusedDisableDirectives: true
    }
  },
  {
    files: ['tests/**/*.js'],
    plugins: {
      jest: jestPlugin
    },
    languageOptions: {
      globals: {
        ...jestPlugin.environments.globals.globals
      }
    },
    rules: {
      ...jestPlugin.configs.recommended.rules
    }
  }
];
