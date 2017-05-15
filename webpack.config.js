const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  devServer: {
    port: '8080',
    contentBase: './static',
    inline: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8081/',
      },
    },
  },
  entry: {
    app: ['./frontend/index.js'],
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/assets/',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'react', 'stage-3'],
        },
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
        }),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
    new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify('production') } }),
    new UglifyJSPlugin(),
  ],
};
