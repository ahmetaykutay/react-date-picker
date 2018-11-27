const path = require('path');
// $FlowFixMe
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, 'examples/src/index.html'),
  filename: './index.html',
});


module.exports = {
  entry: './examples/src',
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
  plugins: [htmlWebpackPlugin],
  devServer: {
    port: 3001,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
