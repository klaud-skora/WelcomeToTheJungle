const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');

const baseConfig = () => ({
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'scripts_bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  }, 
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
});


const devConfig = () => ({
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.(jpe?g|png|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'assets/',
              publicPath: 'assets/'
            }
          }
        ]
      },
    ],
  },
});

const prodConfig = () => ({
  module: {
    rules: [
      {
        test:/\.(s*)css$/,
        use:[
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            query: {
              modules: true, 
              localIdentName: '[name]_[local]_[hash:base64:5]',
            },
          }, 
          'sass-loader',
        ],
      },
    ],
  }, 
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles_bundle_[name].css',
      chunkFilename: '[id].css',
    }),
  ],
});

module.exports = (env, argv) => {
  const modeConfig = argv.mode == 'production' ? prodConfig : devConfig;

  return merge(baseConfig(), modeConfig());
};


// module.exports = {
//   entry: "./src/index.js",
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'script.js',
//   },

//   module: {
//     rules: [

//       { test: /\.html$/,
//         use: [
//           {
//           loader: 'html-loader',
//           options: { minimize: true }
//           }
//         ]
//       },
     
//       { test: /\.js$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['@babel/preset-env']
//           } 
//         }
//       },
//       {
//         test: /\.s[ac]ss$/i,
//         use: [
//           // Creates `style` nodes from JS strings
//           'style-loader',
//           // Translates CSS into CommonJS
//           'css-loader',
//           // Compiles Sass to CSS
//           'sass-loader',
//         ],
//       },
//       {
//         test: /\.(jpe?g|png|svg)$/,
//         use: [
//           {
//             loader: 'file-loader',
//             options: {
//               name: 'daftcode.png',
//               outputPath: 'assets/',
//               publicPath: 'assets/'
//             }
//           }
//         ]
//       },
//     ]
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: path.join(__dirname, './src/index.html'),
//       filename: './index.html'
//     }),
//     new BrowserSyncPlugin({
//       host: 'localhost',
//       port: 3000,
//       server: { baseDir: ['public'] }
//     }, {
//       reload: false,
//     })
    
//   ]
// }