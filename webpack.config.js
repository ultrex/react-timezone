const path = require('path');

const minify = process.argv.indexOf('--minify') === -1 ? false : true;

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: minify ? 'react-timezone.min.js' : 'react-timezone.js',
		library: 'ReactTimezone',
		libraryTarget: 'umd'
	},
	externals: [
    {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      }
    }
  ],
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
				exclude: /node_modules/,
				query: {
					presets: ['react', 'es2015']
				}
			},
			{
				test: /\.json$/,
				loader: 'json'
			},
			{
				test: /\.styl$/,
				loader: 'style-loader!css-loader!stylus-loader'
			}
		]
	}
}

