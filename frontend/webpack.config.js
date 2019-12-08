const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const webpack = require("webpack");

const env = process.env.NODE_ENV || "development";
const isDev = env === "development";

module.exports = {
  mode: env,
  entry: {
    "core-js": "core-js/stable",
    "regenerator-runtime": "regenerator-runtime/runtime",
    bundle: path.join(__dirname, "./src/index.js")
  },
  output: {
    path: path.join(__dirname, "./dist"),
    filename: "[name].js",
    publicPath: "/"
  },
  resolve: {
    alias: {
      "react-dom": "@hot-loader/react-dom"
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.join(__dirname, "./src"),
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: ["react-hot-loader/babel"]
          }
        }
      },
      {
        test: /\.less$/,
        include: path.join(__dirname, "./src"),
        use: [
          isDev
            ? { loader: "style-loader" }
            : { loader: MiniCssExtractPlugin.loader },
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[name]__[local]___[hash:base64:5]"
              },
              importLoaders: 1
            }
          },
          { loader: "less-loader" }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "./src/index.html"),
      cache: true,
      inject: "body"
    }),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css"
    })
  ],

  devServer: {
    contentBase: path.join(__dirname, "./dist"),
    hot: true,
    historyApiFallback: true,
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        pathRewrite: { "^/api": "" }
      }
    }
  }
};
