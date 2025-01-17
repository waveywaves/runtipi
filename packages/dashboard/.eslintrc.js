module.exports = {
  plugins: ['@typescript-eslint', 'import', 'react', 'jest'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'next/core-web-vitals',
    'next',
    'airbnb',
    'airbnb-typescript',
    'eslint:recommended',
    'plugin:import/typescript',
    'prettier',
    'plugin:react/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  rules: {
    'no-restricted-exports': 0,
    'react/display-name': 0,
    'react/prop-types': 0,
    'react/function-component-definition': 0,
    'react/require-default-props': 0,
    'import/prefer-default-export': 0,
    'react/jsx-props-no-spreading': 0,
    'react/no-unused-prop-types': 0,
    'react/button-has-type': 0,
    'import/no-extraneous-dependencies': ['error', { devDependencies: ['**/*.test.{ts,tsx}', '**/*.spec.{ts,tsx}', '**/mocks/**', 'tests/**'] }],
  },
  globals: {
    JSX: true,
  },
  env: {
    'jest/globals': true,
  },
};
