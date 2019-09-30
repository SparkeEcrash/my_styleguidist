import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";

module.exports = () => ({
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      }
    ]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, "../src", "index.html")
		}),
		new MiniCssExtractPlugin({
			filename: "styles.[hash].css"
		}),
		new CleanWebpackPlugin({
			cleanOnceBeforeBuildPatterns: ["**/*"]
		})
	]
});
