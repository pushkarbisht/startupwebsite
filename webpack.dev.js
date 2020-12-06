
const path = require('path');
const common = require('./webpack.common')
const merge = require('webpack-merge')

module.exports = merge.merge(common,{ 
  mode:"development",
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    publicPath: '/'
  }
});