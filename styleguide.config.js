module.exports = {
	// FROM CAM:
	//  components: "src/components/**/**/[A-Z]*.js",
	// 	defaultExample: true,
	// 	require: [
	// 		path.join(__dirname, "node_modules/bootstrap/dist/css/bootstrap.css")
	// 	],
	// 	moduleAliases: {
	// 		"rsg-example": path.resolve(__dirname, "src")
	// 	},
	// 	ribbon: {
	// 		url: "https://github.com/styleguidist/react-styleguidist"
	// 	},
	// 	version,
	webpackConfig: {
		module: {
			rules: [
				// Babel loader, will use your project's babel.config.js
				{
					test: /\.jsx?/,
					exclude: /node_modules/,
					loader: 'babel-loader'
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
	}
}