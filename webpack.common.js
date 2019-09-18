const webpack = require('webpack')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const autoprefixer = require('autoprefixer')
const Dotenv = require('dotenv-webpack')
require('dotenv').config()

const port = process.env.PORT || 3000

const fileRegEx = {
  js: /\.js?$/,
  jsx: /\.js(x?)$/,
  scss: /\.s?css$/,
  svg: /\.svg$/,
  html: /\.html$/,
  image: /\.(png|jpg|gif)$/
}

const srcPath = 'src'
const entryFiles = {
  index: './index.jsx'
}

const localIdentName = process.env.NODE_ENV === 'production'
  ? '[hash:base64:5]'
  : '[name]__[local]__[hash:base64:3]'
const jsName = process.env.NODE_ENV === 'production' ? '[name].js' : '[name].js'
const cssName = process.env.NODE_ENV === 'production' ? '[name].css' : '[name].css'
const imgName = process.env.NODE_ENV === 'production' ? '[hash:base64].[ext]' : '[name].[ext]'
const publicPath = process.env.NODE_ENV === 'production'
  ? 'https://benlynch.co.uk/'
  : `http://localhost:${port}/`

module.exports = {
  fileRegEx,
  config: {
    context: path.resolve(__dirname, srcPath),
    entry: entryFiles,
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: jsName,
      publicPath
    },
    stats: {
      entrypoints: false,
      children: false,
      modules: false
    },
    module: {
      rules: [
        {
          test: fileRegEx.jsx,
          exclude: /node_modules\/.*/,
          loader: 'babel-loader'
        },
        {
          test: fileRegEx.scss,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath
              }
            },
            {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoaders: 2,
                localIdentName
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => [autoprefixer]
              }
            },
            {
              loader: 'sass-loader',
              options: {
                includePaths: [path.resolve(__dirname, srcPath)]
              }
            }
          ]
        },
        {
          test: fileRegEx.image,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: `img/${imgName}`
              }
            },
            {
              loader: 'image-webpack-loader'
            }
          ]
        },
        {
          test: fileRegEx.svg,
          loader: 'svg-inline-loader'
        }
      ]
    },
    plugins: [
      new Dotenv(),
      new webpack.LoaderOptionsPlugin({
        options: {
          postcss: [
            autoprefixer({
              remove: false
            })
          ],
          context: __dirname
        }
      }),
      new MiniCssExtractPlugin({
        filename: cssName
      }),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './index.html'
      })
    ],
    resolve: {
      extensions: ['.js', '.jsx', '.svg']
    }
  }
}
