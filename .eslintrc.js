module.exports = {
  extends: [require.resolve('@umijs/max/eslint')],
  globals: {
    page: true,
    REACT_APP_ENV: true,
  },
  plugins: [],
  rules: {
    '@typescript-eslint/no-unused-vars': 'off',
    'react/no-unknown-property': 'off',
  },
};
