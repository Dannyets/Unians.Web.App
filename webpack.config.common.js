import "@babel/polyfill";
import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const devMode = process.env.NODE_ENV !== 'production'

export default {
  resolve: {
      extensions: ['*', '.js', '.jsx', '.json']
  },
  devtool: false,
  entry: [
      '@babel/polyfill', 
      path.resolve(__dirname, 'src/index')
  ],
  node: {
    fs: 'empty'
  },
  target: 'web',
  output: {
      path: path.resolve(__dirname, 'dist'), // Note: Physical files are only output by the production build task `npm run build`.
      filename: 'bundle.js'
  },
  plugins: [
      // Generate an external css file with a hash in the filename
      // new ExtractTextPlugin('[name].[md5:contenthash:hex:20].css'),
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: devMode ? '[name].css' : '[name].[hash].css',
        chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
      }),
  ],
  module: {
    rules: [
      {
        test: /\.(mjs|js|jsx)$/,
        include: [
          path.resolve(__dirname, "src"),
        ],
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/react',
            ],
            plugins: [
              '@babel/plugin-proposal-class-properties',
              'react-hot-loader/babel',
            ]
          }
        }],
      },
      {
        test: /\.(jpe?g|png|gif|ico)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }
          }
        ]
      },
      {
        test: /(\.css|\.scss|\.sass)$/,
        use: [{
          loader: 'style-loader'
        },
        {
          loader: 'css-loader',
          options: {
            minimize: true,
            sourceMap: true
          }
        }, 
        {
          loader: 'postcss-loader',
          options: {
            plugins: () => [
              require('autoprefixer')
            ],
            sourceMap: true
          }
        }, 
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true
          }
        }]
      }
    ]
  }
}