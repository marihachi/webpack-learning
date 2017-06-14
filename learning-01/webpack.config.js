const path = require('path');
const webpack = require('webpack');

module.exports = [
	{
		context: path.join(__dirname, 'src/assets'),
		entry: {
			app: './app.js'
		},
		output: {
			path: path.join(__dirname, 'built/assets'),
			filename: 'bundle.js'
		},
		module: {
			preLoaders: [
				{
					test: /\.tag$/,
					exclude: /node_modules/,
					loader: 'riotjs-loader'
				}
			],
			loaders: [
				{
					test: /\.js$|\.tag$/,
					exclude: /node_modules/,
					loader: 'babel-loader'
				}
			]
		},
		resolve: {
			extensions: ['', '.js', '.tag']
		},
		plugins: [
			new webpack.ProvidePlugin({
				riot: 'riot'
			})
		]
	}
];
