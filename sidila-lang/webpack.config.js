var path = require('path');

module.exports = {
  entry: './src/app.js',
  devtool: 'eval-source-map',
  output: {
    path: path.resolve(__dirname),
    filename: '../site/static/sidila/peg.js',
    library: 'sidila',
    libraryTarget: 'var'
  }
};