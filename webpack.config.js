const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'script.js',
  },

  module: {
    rules: [

      { test: /\.html$/,
        use: [
          {
          loader: 'html-loader',
          options: { minimize: true }
          }
        ]
      },
     
      { test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
            ]
          } 
        }
      },
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
        test: /\.(jpe?g|png|svg|gif|ico|webp|eot|ttf|woff|woff2|pdf|mp4|webm)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'assets/icons/',
            },
          },
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html'),
      filename: './index.html'
    }),
  ]
}