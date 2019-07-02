import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import HardSourceWebpackPlugin from 'hard-source-webpack-plugin';

import webpackCommonConfig from './webpack.config.common';
const { resolve, entry, target, output, module, plugins: commonPlugins, node } = webpackCommonConfig;

export default {
  resolve,
  devtool: 'eval-source-map',
  entry: [
    // must be first entry to properly set public path
    './src/webpack-public-path',
    'react-hot-loader/patch',
    'webpack-hot-middleware/client?reload=true',
    ...entry
  ],
  node,
  target,
  mode: 'development',
  output,
  plugins: [
    new HardSourceWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({     // Create HTML file that includes references to bundled CSS and JS.
      template: 'src/index.ejs',
      minify: {
        removeComments: true,
        collapseWhitespace: true
      },
      inject: true
    }),
    ...commonPlugins
  ],
  module
};
