var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
  devtool: 'eval-source-map',
  entry: [
    // 'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  output: {
    path: path.resolve('dist'),
    filename: '[name].js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      inject: 'body'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin()
  ],
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.(css|sass|scss)$/, loaders: ['style-loader', 'css-loader', 'sass-loader']},
      { test: /\.(eot|svg|ttf|woff|woff2)$/, loader: 'file-loader?name=public/fonts/[name].[ext]' }
    ]
  },
  devServer: {
    hot: true, //HMR enabled
    contentBase: './src'
  }
};

module.exports = config;
