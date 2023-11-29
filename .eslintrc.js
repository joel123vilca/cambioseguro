// .eslintrc.js
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/vue3-essential', '@vue/airbnb', '@vue/typescript/recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 2020,
    parser: '@typescript-eslint/parser',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'import/extensions': [2, 'never', { ts: 'never', tsx: 'never', js: 'never', jsx: 'never' }],
    'import/no-unresolved': 'off',
    'vuejs-accessibility/form-control-has-label': 'off',
    'no-param-reassign': 'off',
    'prefer-template': 'off',
    'import/prefer-default-export': 'off',
    'vuejs-accessibility/click-events-have-key-events': 'off',
  },
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true,
      },
    },
  ],
}
