const path = require('path');

module.exports = {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'react-timezone.min.js',
    library: 'ReactTimezone',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: ['env', 'react'],
          plugins: ['styled-jsx/babel', 'transform-class-properties'],
        },
      },
    ],
  },
};
