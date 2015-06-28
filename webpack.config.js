module.exports = {
  entry: {
    app: ['./src/entry.js']
  },
  output: {
    filename: 'bundle.js',
    publicPath: "/build/"
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {test: /\.css$/, loader: 'style!css'},
      {test: /\.styl$/, loader: 'style!css!stylus'},
      {test: /(\.js$|\.jsx$)/, loader: 'babel'},
      {test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery'},
      {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&minetype=application/font-woff"},
      {test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&minetype=application/font-woff"},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&minetype=application/octet-stream"},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file"},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&minetype=image/svg+xml"}
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.coffee', '.css', '.styl'],
    alias: {
      bootstrap: '../node_modules/bootstrap/dist/css/bootstrap.css'
    }
  }
};
