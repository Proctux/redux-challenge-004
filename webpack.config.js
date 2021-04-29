const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackLogin = require('@pmmmwh/react-refresh-webpack-plugin');

const isDevelopement = process.env.NODE_ENV !== "production";

module.exports = {
  mode: isDevelopement ? 'development' : 'production',
  devtool: isDevelopement ? 'eval-source-map' : 'source-map',
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    hot: true,
  },
  plugins: [
    isDevelopement && new ReactRefreshWebpackLogin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html')
    })
  ].filter(Boolean),
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              isDevelopement && require.resolve('react-refresh/babel')
            ].filter(Boolean),
          },
        }
      },
      {
        test: /\.css/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.svg$/,
        use: [
          { loader: 'svg-sprite-loader'},
          'svg-transform-loader',
          'svgo-loader'
        ]
      }
    ]
  }
}
