module.exports = {
  parserOptions: {
    ecmaVersion: 2023,
  },
  env: {
    browser: true,
    es2023: true,
  },
  plugins: ['prettier'],
  extends: ['airbnb', 'airbnb/hooks', 'plugin:prettier/recommended'],
  rules: {
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'react/jsx-filename-extension': 0,
    'import/prefer-default-export': 0,
    'react/jsx-props-no-spreading': 0,
    'import/no-extraneous-dependencies': 0,
  },
};
