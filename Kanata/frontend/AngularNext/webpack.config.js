var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = function (options) {
    return {
        entry: {
            app: './src/main.ts',
            vendor: './src/vendors.ts',
            polyfills: './src/polyfills.ts'
        },
        output: {
            path: '../../src/Kanata/wwwroot/',
            filename: 'dest/[name].js?_=[hash]',
            chunkFilename: 'dest/[id].chunk.js?_=[hash]'
        },
        resolve: {
            extensions: ['.ts', '.js']
        },
        devtool: 'source-map',
        module: {
            loaders: [
                {
                    test: /\.ts$/,
                    loaders: ['awesome-typescript-loader', 'angular2-template-loader']
                },
                {
                    test: /\.scss$/,
                    loaders: ['raw-loader', 'sass-loader'] // sass-loader not scss-loader
                }
            ]
        },
        plugins: [
            new webpack.optimize.CommonsChunkPlugin({
                name: ['app', 'vendor', 'polyfills']
            }),
            // new webpack.optimize.UglifyJsPlugin(),
            new HtmlWebpackPlugin({
                template: 'src/index.html',
                filename: 'index.html',
                title: 'AngularNext - Webpack'
            })
        ]
    }
}