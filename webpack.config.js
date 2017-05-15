const path = require('path');

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
    app: ['./app/index.jsx'],
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
    ],
  },
};
