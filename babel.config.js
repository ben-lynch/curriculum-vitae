// eslint-disable-next-line func-names
module.exports = function (api) {
  api.cache(true)

  const presets = [
    [
      '@babel/preset-env',
      {
        modules: 'commonjs'
      }
    ],
    '@babel/preset-react'
  ]
  const plugins = [
    [
      'dotenv-import',
      {
        moduleName: '@env',
        path: '.env'
      }
    ],
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-transform-spread',
    '@babel/plugin-transform-runtime',
    '@babel/plugin-syntax-dynamic-import'
  ]

  return {
    presets,
    plugins
  }
}
