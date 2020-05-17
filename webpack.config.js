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
			{
				test: /\.(png|jpe?g|gif|svg)$/,
				loader: 'url-loader',
				query: {
					limit: 10000, // 10KO
					name: 'icons/[name].[ext]'
				}
			}
		]
	},
	plugins: [
		new VueLoaderPlugin()
	],
};
