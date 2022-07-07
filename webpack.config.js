const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ProvidePlugin } = require('webpack');
const { ESBuildMinifyPlugin } = require('esbuild-loader');

const outputPath = path.resolve(__dirname, 'dist');

const htmlPlugin = new HtmlWebpackPlugin({
  template: './public/index.html',
  filename: './index.html',
});

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, 'src/index.js'),
  plugins: [
    new CleanWebpackPlugin(),
    new ProvidePlugin({
      React: 'react',
    }),
    htmlPlugin,
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'esbuild-loader',
        options: {
          loader: 'jsx',
          target: 'es2015',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  output: {
    filename: 'bundle.js',
    path: outputPath,
  },
  optimization: {
    minimize: true,
    minimizer: [
      new ESBuildMinifyPlugin({
        target: 'es2015',
      }),
    ],
  },
};
