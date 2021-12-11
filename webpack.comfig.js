var path = require('path')

module.exports = {
  entry: './index',
  output: {
    path: __dirname,
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015'],
        },
      },
    ],
  },
  resolve: {
    alias: {
      myApp: path.resolve(__dirname, 'src'),
    },
    extensions: ['', '.js', '.jsx', '.tsx'],
  },
}
