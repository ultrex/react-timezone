const path = require('path');

module.exports = function webpackConfig(env) {
  return {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: env && env.minify ? 'react-timezone.min.js' : 'react-timezone.js',
      library: 'ReactTimezone',
      libraryTarget: 'umd',
    },
    externals: [
      {
        react: {
          root: 'React',
          commonjs2: 'react',
          commonjs: 'react',
          amd: 'react',
        },
      },
    ],
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: {
            presets: ['react', 'env'],
          },
        },
        {
          test: /\.json$/,
          loader: 'json-loader',
        },
        {
          test: /\.styl$/,
          loader: 'style-loader!css-loader!stylus-loader',
        },
      ],
    },
  };
};
