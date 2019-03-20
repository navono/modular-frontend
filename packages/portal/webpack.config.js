const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const outPath = path.resolve(__dirname, '../../', 'build');

module.exports = {
	entry: {
		main: 'src/Bootstrap.js',
	},
	output: {
		publicPath: '',
		// filename: 'Bootstrap.[hash:5].js',
		filename: 'Bootstrap.js',
		path: outPath,
	},
	module: {
		rules: [
			{
				test: /\.js?$/,
				exclude: [path.resolve(__dirname, 'node_modules')],
				loader: 'babel-loader',
				options: {
					presets: ['stage-3','es2015']
				}
			}
		],
	},
	node: {
		fs: 'empty'
	},
	resolve: {
		modules: [
			__dirname,
			'node_modules',
		],
	},
	plugins: [
		CopyWebpackPlugin([
			{from: path.resolve(__dirname, 'src/index.html')},
			{from: path.resolve(__dirname, 'src/project.config.js'), to: outPath},
		]),
		new CleanWebpackPlugin()
	],
	devtool: 'source-map',
	externals: [
	],
	devServer: {
    contentBase: outPath,
    compress: true,
  }
};
