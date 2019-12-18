const path = require("path");

module.exports = {
  entry: {
    index: path.resolve(__dirname, "../src/index.js")
  },
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "../dist")
  },
  stats: "errors-warnings",
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            presets: ["@babel/preset-react"]
          }
        }
      }
    ]
  },
  plugins: [

  ]
}