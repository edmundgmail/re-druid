const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
  module: {
    loaders: [
      {exclude: ['node_modules'], loader: 'babel', test: /\.jsx?$/},
      {loader: 'style-loader!css-loader', test: /\.css$/},
      {loader: 'url-loader', test: /\.gif$/},
      {loader: 'file-loader', test: /\.(ttf|eot|svg)$/},
    ],
    resolve: {
      alias: {
        config$: './configs/app-config.js',
        react: './vendor/react-master',
      },
      extensions: ['', 'js', 'jsx'],
      modules: [
        'node_modules',
        'bower_components',
        'shared',
        '/shared/vendor/modules',
      ],
    },
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
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};