const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  mode: 'development',
  // mode: 'production',
  entry: {
    index: './src/index.js',
    category: './src/category.js'
  },
  output: {
    filename: 'js/[name].bundle.js'
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'HotGo',
      template: './index.html',
      filename: 'index.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      title: 'HotGo',
      template: './category.html',
      filename: 'category.html',
      chunks: ['category']
    }),
    new MiniCSSExtractPlugin({
      filename: 'css/[name]-min.css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        loader: [
          MiniCSSExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8000,
            name: 'img/[name].[ext]'
          }
        }]
      }
    ]
  }
}