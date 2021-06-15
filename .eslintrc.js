module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['prettier'],
  rules: {
    'jsx-quotes': [2, 'prefer-single'],
    'no-console': 'off',
    'no-unresolved': 'off',
    'import/no-unresolved': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'no-nested-tanary': 'off',
    'react/prop-types': 'off',
    'no-shadow': ['error', { allow: ['done'] }],
    'import/prefer-default-export': 'off',
    'consistent-return':"off"
  },
}
