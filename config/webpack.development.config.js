import path from "path";

module.exports = () => ({
	devServer: {
		contentBase: path.join(__dirname, 'src'),
		port: 9000,
		clientLogLevel: 'none'
	},
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  }
});
