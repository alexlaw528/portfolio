const path = require("path");
// const dotenv = require('dotenv').config( {
//   path: path.join(__dirname, '.env')
// } );
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: "bundle.js",
  },
  
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.s?css/,
        use: ['style-loader', 'css-loader', 'sass-loader',],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],        
      },
      {
        test: /\.(ico)$/,
        use: 'file-loader?name=assets/[name].[ext]'
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
    title: 'Development',
    template: 'index.html',
    favicon: './favicon.ico',
    }),
    new webpack.DefinePlugin({
      // 'process.env.REACT_APP_SERVICE_ID': JSON.stringify(process.env.REACT_APP_SERVICE_ID),
      // 'process.env.REACT_APP_TEMPLATE_ID': JSON.stringify(process.env.REACT_APP_TEMPLATE_ID),
      // 'process.env.REACT_APP_API_KEY': JSON.stringify(process.env.REACT_APP_API_KEY)
      // "process.env": dotenv.parsed
    }),
    new Dotenv({
      systemvars: true
    }),
],
  devServer: {
    static: {
      publicPath: '/build`',
      directory: path.resolve(__dirname, 'build')
    },
    compress: true,
    port: 8080,
  },
};
