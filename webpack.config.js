module.exports = {
  progress: true,
  entry: './src/entry.js',
  output: {
    filename: 'build/bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {test: /\.css$/, loader: 'style!css'},
      {test: /\.styl$/, loader: 'style!css!stylus'},
      {test: /(\.js$|\.jsx$)/, loader: 'babel'}
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.coffee', '.css', '.styl']
  },
  useMemoryFs: true,
  progress: true
};
