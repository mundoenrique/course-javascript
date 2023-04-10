const HtmlWebPack = require('html-webpack-plugin');
const MiniCssExtract = require('mini-css-extract-plugin');

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
        test: /\.css$/i,
        exclude: /styles.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /styles.css$/,
        use: [MiniCssExtract.loader, 'css-loader'],
      },
    ],
  },
  optimization: {},
  plugins: [
    new HtmlWebPack({
      title: 'My Webpack App',
      template: './src/index.html',
    }),
    new MiniCssExtract({
      filename: '[name].[fullhash].css',
      ignoreOrder: false,
    }),
  ],
};
