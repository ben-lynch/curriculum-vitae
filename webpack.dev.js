const merge = require('webpack-merge')
require('dotenv').config()
const common = require('./webpack.common')

const port = process.env.PORT || 3000

module.exports = merge.strategy({
  'module.rules': 'prepend'
})(common.config, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
    port,
    hot: false,
    https: false
  },
  node: {
    fs: 'empty'
  }
})
