const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {

  entry: {
    app: path.resolve(__dirname, 'src/index.js')
  },
  
  output: {
    path: path.resolve(__dirname, 'assets'),
    publicPath: './',
    filename: 'js/bundle.js'
  },
  
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
          }
        },
        exclude: /(node_modules|bootstrap)/
      },
      {
        test: /\.(png|jpg|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              publicPath: '../img/',
              outputPath: 'img/'
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|ttf|eot)/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            publicPath: '../fonts/',
            outputPath: 'fonts/'
          }
        }
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          MiniCssExtractPlugin.loader,
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      }
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/style.css"
    })
  ]
};
