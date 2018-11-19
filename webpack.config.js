const path = require('path');

module.exports = {
  entry: './src/index',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js',
    library: 'reactDatePicker',
    libraryTarget: 'umd',
  },
  module: {
    rules: [{
      test: /(\.js$|\.jsx$)/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
      },
    }],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  externals: [
    {
      'react-dom': {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom',
      },
    },
    {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react',
      },
    },
  ],
};
