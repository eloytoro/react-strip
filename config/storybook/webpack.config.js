const shared = require('../shared.config');

module.exports = Object.assign({}, shared, {
  target: 'web',
  devtool: 'source-map'
});
