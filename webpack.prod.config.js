import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";

module.exports = {
	entry: path.join(__dirname,'src','index.js'),
	output: {
		path: path.join(__dirname,'build'),
		filename: 'index.[contenthash].bundle.js'
	},
	mode: process.env.NODE_ENV || 'production',
	// resolve: {
	// 	modules: [path.resolve(__dirname,'src'), 'node_modules']
	// }, 
	//allows us to import from the src folder or node_modules folder without absolute paths
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'styles.[contenthash].css'
		}),

		new CleanWebpackPlugin({
			cleanOnceBeforeBuildPatterns: [
				'**/*'
			]
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
					MiniCssExtractPlugin.loader,
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