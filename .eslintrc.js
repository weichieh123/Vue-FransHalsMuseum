module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/airbnb'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'max-len': 'off',
    'object-curly-newline': 'off',
    'object-shorthand': 'off',
    'vue/no-v-for-template-key': 'off',
    'vue/no-multiple-template-root': 'off',
    'implicit-arrow-linebreak': 'off',
    // "prettier/prettier": ["error", { endOfLine: "auto" }],
    // 'prettier/prettier': ['error', { singleQuote: true }],
    'linebreak-style': [0, 'error', 'windows'],
  },
};
