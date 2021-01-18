const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const resolve = (dir) => path.resolve(__dirname, dir);

const outDir = 'dist';

module.exports = {
  entry: './src/index.ts',
  devtool: 'inline-source-map',
  output: {
    path: resolve(outDir),
    filename: 'index.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    // plugins: [new TsconfigPathsPlugin()],
  },
  module: {
    rules: [{ test: /\.tsx?$/, loader: 'ts-loader' }],
  },
  plugins: [new CleanWebpackPlugin()],
};
