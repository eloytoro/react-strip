const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const resolve = require('./resolve');
const precss = require('precss');


module.exports = {
  module: {
    loaders: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.(css)$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract('style', 'css!postcss')
      }
    ]
  },
  resolve: {
    modulesDirectories: [
      resolve('node_modules'),
      resolve('src')
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css', {
      disable: process.env.NODE_ENV !== 'production'
    })
  ],
  postcss: [
    autoprefixer({
      browsers: [
        '>1%',
        'last 4 versions',
        'Firefox ESR',
        'not ie < 9', // React doesn't support IE8 anyway
      ]
    }),
    precss()
  ]
};
