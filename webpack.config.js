const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  // ...other configuration options

  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: 'css', to: 'css' }, // Copy CSS files
        { from: 'js', to: 'js' }, // Copy JavaScript files
      ],
    }),
  ],
};
