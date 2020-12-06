
const path = require('path');
const common = require('./webpack.common')
const merge = require('webpack-merge')

module.exports = merge.merge(common,{ 
  mode:"production",
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
  },/*
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    publicPath: '/'
  }*/
});