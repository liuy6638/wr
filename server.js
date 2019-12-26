const express = require("express");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");

const app = express();
const config = require("./webpack/webpack.dev");
const complier = webpack(config);

app.use(webpackDevMiddleware(complier, {
  publicPath: config.output.publicPath
}))

const serviceHost = "localhost"
const port = 3030;
// 6666666666666666666666666666666666666
// 3333333333333
app.listen(port, () => {
  console.log(`Project is running at http://${serviceHost}:${port}/`)
})
