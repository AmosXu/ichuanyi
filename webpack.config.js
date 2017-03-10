var path = require('path');
var webpack = require('webpack');

module.exports = {
    context: __dirname + "/",
    entry: './app/js/index.js',
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'main.js'
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
            loader: 'vue'
        }, {
            test: /\.scss$/,
            loader: 'style!css!sass',
        }]
    }
}