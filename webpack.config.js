const webpack = require("webpack");
const path = require("path");

const childProcess = require("child_process");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const publicPathResolve = (dir) => path.resolve(__dirname, `public/${dir}`);

module.exports = {
  mode: "development",
  // mode: "production",
  target: "web",
  devtool: "eval-cheap-source-map",
  stats: {
    colors: true,
  },
  entry: {
    app: path.resolve(__dirname, "./src/index.ts"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    publicPath: "/",
    // clear output directory before exporting bundle files
    // don't need 'clean-webpack-plugin' anymore
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new webpack.ProgressPlugin({
      // handler(percentage, message, ...args) {
      //   // custom logic
      // },
    }),
    new webpack.BannerPlugin({
      banner: `
        Build Data: ${new Date().toLocaleString()}
        Commit Version: ${childProcess.execSync("git rev-parse --short HEAD")}
        Author: ${childProcess.execSync("git config user.name")}
      `,
    }),
    new HtmlWebpackPlugin({
      title: "Single Page App (Vanilla JS)",
      template: publicPathResolve("index.html"), // 읽어올 템플릿 경로 지정
      publicPath: "",
    }),
  ],
  optimization: {},
  resolve: {
    modules: ["node_modules"],
    extensions: [".js", "ts", ".json", ".jsx", ".tsx", ".css"],
  },
  devServer: {
    static: {
      directory: publicPathResolve(),
    },
    port: process.env.PORT || 8000,
    compress: true,
    open: true,
    hot: true,
    client: {
      progress: true,
    },
  },
};
