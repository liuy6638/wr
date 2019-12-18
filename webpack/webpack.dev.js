const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "../dist",
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "reaaa",
      template: path.resolve(__dirname, "../public/index.html")
    })
  ]
})