module.exports = {
    'extends': 'airbnb',
    'parser': 'babel-eslint',
    'parserOptions': {
      'ecmaVersion': 7,
      'sourceType': 'module',  
      'ecmaFeatures': {
        'jsx': true
      }
    },
    'plugins': [
        'react',
        'react-native'
    ],
    'env': {
      'jest': true,
      'react-native/react-native': true
    }, 
    'rules': {
      'no-use-before-define': 'off',
      'react/jsx-filename-extension': 'off',
      'react/prop-types': 'off',
      'comma-dangle': 'off',
      'no-underscore-dangle': 'off',
      'linebreak-style': 'off',
      'indent': ['error', 4],
      'react/jsx-indent': ['error', 4],
      'react/jsx-indent-props': ['error', 4],
      'jsx-quotes': ['error', 'prefer-single']
    },
    'globals': {
      "fetch": false
    }
  }