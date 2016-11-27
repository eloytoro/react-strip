const nodeExternals = require('webpack-node-externals');
const resolve = require('../resolve');
const shared = require('../shared.config');

module.exports = Object.assign({}, shared, {
  entry: [
    resolve('src/index.js'),
  ],
  output: {
    filename: 'index.js',
    path: resolve('lib'),
    library: 'ReactStrip',
    libraryTarget: 'umd'
  },
  externals: [nodeExternals()]
});
