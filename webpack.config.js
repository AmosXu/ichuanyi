var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './src/js/index.js',
    output: {
      path: path.resolve(__dirname, './dist'),
      publicPath: '/dist/',
      filename: 'build.js'
    },
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.js'
      }
    },
    module: {
      loaders: [{
          test: /\.js$/,
          loader: 'babel',
          exclude: /node_modules/
      }, {
           test: /\.vue$/,
           loader: 'vue-loader',
           options: {
              loaders: {
                scss: 'vue-style-loader!css-loader!sass-loader',
                sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax' 
              }
            }
      }, {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
               
      }]
    },
    plugins: [
      new ExtractTextPlugin("style.css")
    ]
}