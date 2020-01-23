const path = require('path');

module.exports = {
  entry: './client/main.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  mode: process.env.NODE_ENV,
  devServer: {
    publicPath: '/build/',
    proxy: {
      '/': 'http://localhost:3000/',
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
    ],
  },
};
