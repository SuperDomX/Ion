module.exports = {
  entry: './www.superdomx/src/js/index.js',
  output: {
    path:           './www.superdomx/site/js',
    filename:       'app.js',
    library:        'SuperDomX',
    libraryTarget:  'umd'
  },
  debug:    true,
  devtool:  'inline-source-map',
  module: {
    loaders: [{
      test:     /\.jsx?$/,
      exclude:  /node_modules/,
      loader:   'babel'
    }]
  }
}
