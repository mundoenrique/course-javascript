// https://webpack.js.org/
// https://webpack.js.org/guides/getting-started/
// https://webpack.js.org/configuration/
// https://webpack.js.org/loaders/html-loader/
// https://webpack.js.org/plugins/html-webpack-plugin/
// https://webpack.js.org/configuration/dev-server/
// https://webpack.js.org/loaders/style-loader/
// https://webpack.js.org/loaders/css-loader/
// https://webpack.js.org/plugins/mini-css-extract-plugin/
// https://v4.webpack.js.org/loaders/file-loader/
// https://webpack.js.org/plugins/copy-webpack-plugin/
// https://babeljs.io/
// https://babeljs.io/setup
// https://babeljs.io/setup#installation

const HtmlWebpack = require('html-webpack-plugin');
const MiniCssExtract = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',

  output: {
    clean: true,
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
        test: /\.css$/,
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

  optimization: {},

  plugins: [
    new HtmlWebpack({
      title: 'My Webpack App',
      // filename: 'index.html',
      template: './src/index.html',
    }),

    new MiniCssExtract({
      filename: '[name].css',
      ignoreOrder: false,
    }),

    new CopyPlugin({
      patterns: [{ from: 'src/assets/', to: 'assets/' }],
    }),
  ],
};
