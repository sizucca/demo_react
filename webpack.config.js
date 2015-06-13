module.exports = {
  entry: './src/main/entry.js',
  output: {
    filename: 'build/bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {test: /\.css$/, loader: 'style!css'},
      {test: /\.styl$/, loader: 'style!css!stylus'},
      {test: /(\.js$|\.jsx$)/, loader: 'babel?optional[]=runtime'}
    ]
  },
  useMemoryFs: true,
  progress: true
};
