require('dotenv').config()

const jestConfig = {
  moduleNameMapper: {
    '\\.(scss)$': 'identity-obj-proxy'
  },
  testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
  setupFilesAfterEnv: ['./reactSetup.js'],
  snapshotSerializers: ['enzyme-to-json/serializer']
}

module.exports = jestConfig
