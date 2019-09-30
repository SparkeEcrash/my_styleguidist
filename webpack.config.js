import path from "path";
import webpackMerge from "webpack-merge";

const modeConfig = env => require(`./config/webpack.${env}.config`)(env);
const presetConfig = require("./config/loadPresets");

module.exports = ({ mode, presets } = { mode: "development", presets: [] }) => {
  return webpackMerge(
    {
      mode: mode,
      resolve: {
        extensions: [".js", ".jsx", ".tsx"]
      },
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ["babel-loader"]
          },
          {
            test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
            loaders: ["file-loader"]
          }
        ]
			},
			entry: path.join(__dirname, "src", "index.jsx"),
			output: {
				path: path.join(__dirname, "build"),
				filename: "index.[hash].bundle.js"
			},
			plugins: [],
		},
    modeConfig(mode),
    presetConfig({ mode, presets })
  );
};
