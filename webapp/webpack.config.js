const path = require('path')
const apiMocker = require('mocker-api')
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const staticFolder = 'src/main/resources/static'

module.exports = {
  entry: {
    app: path.resolve('src/webapp/index.js')
  },
  output: {
    path: path.resolve(staticFolder),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
	  favicon: "src/webapp/favicon.ico",
      template: "src/webapp/index.html",
      filename: "./index.html"
    })
  ]
};