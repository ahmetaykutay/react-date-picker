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
    // alias: {
    //   react: path.resolve('./node_modules/react'),
    //   'react-dom': path.resolve('./node_modules/react-dom'),
    //   'styled-components': path.resolve('./node_modules/styled-components'),
    // },
  },
  // externals: [
  //   {
  //     'styled-components': {
  //       commonjs: 'styled-components',
  //       commonjs2: 'styled-components',
  //       amd: 'styled-components',
  //     },
  //     'react-dom': {
  //       root: 'ReactDOM',
  //       commonjs2: 'react-dom',
  //       commonjs: 'react-dom',
  //       amd: 'react-dom',
  //     },
  //   },
  //   {
  //     react: {
  //       root: 'React',
  //       commonjs2: 'react',
  //       commonjs: 'react',
  //       amd: 'react',
  //     },
  //   },
  // ],
};
