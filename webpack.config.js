module.exports = {
  entry: './src/main/entry.js',
  module: {
    loaders: [
      {test: /\.css$/, loader: 'style!css'},
      {test: /\.styl$/, loader: 'style!css!stylus'},
      {test: /(\.js$|\.jsx$)/, loader: 'babel'}
    ]
  }
};