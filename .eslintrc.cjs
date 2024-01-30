module.exports = {
  env: {
    browser: true,
  },
  extends: ['airbnb', 'airbnb/hooks'],
  rules: {
    'react/react-in-jsx-scope': 0,
    'react/jsx-filename-extension': 0,
    'import/prefer-default-export': 0,
    'react/prop-types': 0,
  },
};
