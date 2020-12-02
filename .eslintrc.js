module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', 'prettier'],
  rules: {
    'react/jsx-props-no-spreading': 0,
    'arrow-body-style': 0,
    'react/prop-types': 0,
    'no-console': 'off',
    'react/jsx-filename-extension': 'off',
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
        trailingComma: 'all',
        arrowParens: 'always',
        printWidth: 120,
      },
    ],
    'import/no-unresolved': [
      2,
      {
        ignore: [
          '^(src)',
          '^(assets)',
          '^(components)',
          '^(config)',
          '^(containers)',
          '^(helpers)',
          '^(pages)',
          '^(redux-store)',
          '^(routes)',
          '^(services)',
          '^(theme)',
          '^(utils)',
        ],
      },
    ],
  },
};
