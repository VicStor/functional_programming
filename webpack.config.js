module.exports = {
  devtool: 'eval',
  context: __dirname,
  entry: {
    js: './index.js',
  },
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      __dirname,
      'node_modules'
    ]
  }
};
