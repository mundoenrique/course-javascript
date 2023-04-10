const HtmlWebPack = require('html-webpack-plugin');
const MiniCssExtract = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const CssMinimizer = require('css-minimizer-webpack-plugin');
const CssTerser = require('terser-webpack-plugin');

module.exports = {
  mode: 'production',
  output: {
    clean: true,
    filename: 'main.[contenthash].js',
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          sources: false,
        },
      },
      {
        test: /\.css$/i,
        exclude: /styles.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /styles.css$/,
        use: [MiniCssExtract.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: 'file-loader',
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizer(), new CssTerser()],
  },
  plugins: [
    new HtmlWebPack({
      title: 'My Webpack App',
      template: './src/index.html',
    }),
    new MiniCssExtract({
      filename: '[name].[fullhash].css',
      ignoreOrder: false,
    }),
    new CopyPlugin({ patterns: [{ from: 'src/assets/', to: 'assets/' }] }),
  ],
};
