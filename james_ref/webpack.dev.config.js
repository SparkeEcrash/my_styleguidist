import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";

module.exports = {
	entry: path.join(__dirname,'src','index.jsx'),
	output: {
		path: path.join(__dirname,'build'),
		filename: 'index.bundle.js'
	},
	mode: process.env.NODE_ENV || 'development',
	// resolve: {
	// 	modules: [path.resolve(__dirname,'src'), 'node_modules']
	// }, 
	//allows us to import from the src folder or node_modules folder without absolute paths
	resolve: {
		extensions: ['.js', '.jsx', '.tsx']
	},
	devServer: {
		contentBase: path.join(__dirname, 'src'),
		port: 9000,
		clientLogLevel: 'none'
	},
	plugins: [
		new CleanWebpackPlugin({
			cleanOnceBeforeBuildPatterns: []
		}),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'src', 'index.html')
		})
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.(css|scss)$/,
				use: [
					"style-loader",
					"css-loader",
					"sass-loader"
				]
			},
			{
				test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
				loaders: ["file-loader"]
			}
		]
	}
};