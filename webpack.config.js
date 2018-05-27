"use strict"
const {VueLoaderPlugin} = require("vue-loader");
const path = require("path");

module.exports = {
	mode: "development",
	entry: [
		"./src/index.js",
	],
	module: {
		rules: [
			{
				test: /\.vue$/,
				use: "vue-loader",
			},
			{
				test: /\.less$/,
				use: [{
					loader: "style-loader"
				}, {
					loader: "css-loader", options: {
						sourceMap: true
					},
				}, {
					loader: "less-loader", options: {
						sourceMap: true
					},
				},],
			},
		]
	},
	plugins: [
		new VueLoaderPlugin()
	],
};
