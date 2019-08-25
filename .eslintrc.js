module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'airbnb',
    'prettier',
    'prettier/react'
  ],
  rules: {
    'global-require': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: [
          '.js',
          '.jsx'
        ]
      }
    ],
    'prettier/prettier': [
      'error',
      {
        'trailingComma': 'es5',
        'singleQuote': true,
        'printWidth': 100
      }
    ]
  },
  'plugins': [
    'prettier'
  ]
};
