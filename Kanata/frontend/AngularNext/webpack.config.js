var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = function (options) {
    return {
        entry: {
            app: './src/main.ts',
            vendor: './src/vendors.ts'
        },

        output: {
            filename: '[name].js'
        },
        resolve: {
            extensions: ['', '.ts', '.js']
        },
        loaders: [
            {
                test: /\.ts$/,
                loaders: ['ts', 'awesome-typescript-loader', 'angular2-template-loader']
            },
            {
                test: /\.css$/,
                loaders: 'style!css'
            }
        ],
        plugins: [
            // new webpack.optimize.UglifyJsPlugin(),
            new webpack.optimize.CommonsChunkPlugin({
                name: ['app', 'vendor', 'polyfills']
            }),
            new HtmlWebpackPlugin({
                template: 'src/index.html'
            })
        ]
    }
}