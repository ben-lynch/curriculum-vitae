const merge = require('webpack-merge')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const common = require('./webpack.common')

const { NODE_ENV = 'production' } = process.env

module.exports = merge.strategy({
  'module.rules': 'prepend'
})(common.config, {
  mode: NODE_ENV,
  optimization: {
    minimizer: [
      new TerserWebpackPlugin({
        cache: true,
        parallel: true,
        sourceMap: false
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  }
})
