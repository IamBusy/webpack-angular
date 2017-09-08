'use strict';

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
    
/**
 * Module dependencies
 */
module.exports = {
    cache: false,
    entry: {
        'app': __dirname + '/app/entry'
    },

    output: {
        path: 'build/',
        filename: '[name].js',
        chunkFilename: '[chunkhash].js'
    },
    module: {
        loaders: [{
                test: /\.html$/,
                loader: 'html'
            }, {
                test: /\.svg/,
                loader: 'file?prefix=font/'
            },
            { test: /\.png$/, loader: "url-loader?limit=100000000" },
            { test: /\.jpg$/, loader: "url-loader?limit=100000000" }
        ]
    },
    resolve: {
        root: [
            './node_modules',
            './app/lib'
        ],
        moduleDirectories: [
            'bower_components',
        ],
        alias: {}
    },

    externals: {
        "angular": "angular",
        "uirouter": "\'ui.router\'",
        'ionic': 'ionic'
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './app/index.ejs',
            title: 'Angular with webpack',
            inject: 'body'
        }),

        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false,
            },
            compress: {
                warnings: false
            }
        }),
    ],
    //watch:true
};