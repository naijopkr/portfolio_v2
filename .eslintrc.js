module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'prettier/react',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: '@typescript-eslint/parser',
  ignorePatterns: ['build/'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    allowImportExportEverywhere: true
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },
  rules: {
    // @typescript-eslint
    '@typescript-eslint/camelcase': [
      'error',
      {
        properties: 'never',
        ignoreDestructuring: true
      }
    ],

    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'none'
        }
      }
    ],

    '@typescript-eslint/interface-name-prefix': [
      'error',
      {
        prefixWithI: 'always'
      }
    ],

    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: true
      }
    ],

    // @jsx-a11y
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        assert: 'htmlFor'
      }
    ],

    // general
    'arrow-parens': ['error', 'as-needed'],

    'comma-dangle': ['error', 'only-multiline'],

    'implicit-arrow-linebreak': 'off',

    quotes: ['error', 'single'],

    semi: ['error', 'never'],

    // import
    'import/order': [
      'error',
      {
        groups: [['builtin', 'external'], ['sibling', 'parent'], 'index'],
        'newlines-between': 'always'
      }
    ],

    'import/prefer-default-export': 'off',

    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ],

    // react
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    ],

    'react/prop-types': 'off'
  }
}
