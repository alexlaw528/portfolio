const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
  plugins: [new HtmlWebpackPlugin({
    title: 'Development',
    template: 'index.html',
    favicon: './favicon-32x32.ico',
  })],
  devServer: {
    static: {
      publicPath: '/build`',
      directory: path.resolve(__dirname, 'build')
    },
    compress: true,
    port: 8080,
  },
};
