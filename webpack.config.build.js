module.exports = {
  entry: './www.superdomx/src/js/index.js',
  output: {
    path:           './www.superdomx/dist/js',
    filename:       'app.js',
    library:        'SuperDomX',
    libraryTarget:  'umd'
  },
  module: {
    loaders: [{
      test:     /\.jsx?$/,
      exclude:  /node_modules/,
      loader:   'babel'
    }]
  }
}
