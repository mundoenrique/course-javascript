const HtmlWebPack = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
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
    ],
  },
  optimization: {},
  plugins: [
    new HtmlWebPack({
      title: 'My WEbpack App',
      template: './src/index.html',
    }),
  ],
};
