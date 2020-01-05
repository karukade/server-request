const ISDEV = process.env.NODE_ENV === "dev"
const VueLoaderPlugin = require("vue-loader/lib/plugin")
const HtmlWebPackPlugin = require("html-webpack-plugin")
const path = require("path")


module.exports = {
  entry: {
    main: "./src/main.js"
  },
  mode: ISDEV ? "development" : "production",
  output: {
    path: path.join(__dirname, "public"),
    chunkFilename: "[name].chunk.js",
    filename: "[name].js"
  },
  resolve: {
    extensions: [".js", ".vue"]
  },
  module: {
    rules: [
      {
        test: /.vue$/,
        loader: "vue-loader"
      },
      {
        test: /.js$/,
        loader: "babel-loader"
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "vue-style-loader"
          },
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
          },
        ]
      }
    ]
  },
  devtool: ISDEV ? "inline-source-map" : "none",
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebPackPlugin({
      template: "./src/template.html",
      title: "backlog-test"
    })
  ]
}