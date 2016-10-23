var webpack = require('webpack');
var path = require('path');



module.exports = {
  entry: [
    './app/app.jsx'
  ],
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    modulesDirectors: [
      'node_modules',
      './app/components'
    ],
    alias: {
      app: 'app'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules)/
      }
    ]
  }
};
