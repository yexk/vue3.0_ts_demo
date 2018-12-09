module.exports = {
  root: true,
  env: {
    node: true,
    es6: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard',
    '@vue/typescript'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'indent': 'off',
    'vue/script-indent': [
      'warn',
      2
    ],
    'space-before-function-paren': ['error', 'never'],
  },
  parserOptions: {
    parser: 'typescript-eslint-parser'
  }
}
