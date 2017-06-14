const path = require('path');
const webpack = require('webpack');

const absolutePath = relative => path.join(__dirname, relative);

module.exports = [
	{
		context: absolutePath('src/assets'),
		entry: {
			app: './app.js'
		},
		output: {
			path: absolutePath('built'),
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
