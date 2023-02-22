const path = require('path')

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  eslint: {
    extends: ['react-app', 'eslint:recommended', 'prettier'],
    rules: {
      'no-console': 'warn',
    },
  },
}
