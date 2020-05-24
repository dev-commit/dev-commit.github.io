const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const combineLoaders = require("webpack-combine-loaders");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    publicPath: "/",
    filename: "index-bundle.js"
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        loader: combineLoaders([
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            query: {
              modules: true,
              localIdentName: "[name]__[local]___[hash:base64:5]"
            }
          }
        ])
      }
    ]
  },
  devServer: {
    stats: "errors-only",
    contentBase: "./dist",
    historyApiFallback: {
      disableDotRule: true
    },
    port: 3000
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ]
};