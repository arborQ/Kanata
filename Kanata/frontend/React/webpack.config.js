var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function (options) {
    return {
        entry: {
            app: './src/main.tsx',
            vendor: './src/vendors.ts'
        },
        output: {
            path: '../../src/Kanata/wwwroot/',
            filename: 'dest/[name].js?_=[hash]',
            chunkFilename: 'dest/[id].chunk.js?_=[hash]'
        },
        resolve: {
            extensions: ['.jsx', '.js', '.tsx', '.ts']
        },
        devtool: 'source-map',
        module: {
            loaders: [
                {
                    test: /\.tsx$/,
                    loaders: ['babel', 'ts'],
                },
                {
                    test: /\.ts$/,
                    loaders: ['babel', 'ts'],
                }
            ]
        },
        plugins: [
            new webpack.optimize.CommonsChunkPlugin({
                name: ['app', 'vendor']
            }),
            new HtmlWebpackPlugin({
                template: 'src/index.html',
                filename: 'index.html',
                title: 'ReactNext - Webpack'
            })
        ]
    }
}