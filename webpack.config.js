// Source: https://github.com/erictsai6/demo-reddit-app

var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

var getPath = function (pathToFile) { return path.resolve(__dirname, pathToFile); }

var ENV = process.env.npm_lifecycle_event;
var isProd = ENV === 'build';

module.exports = (function makeWebpackConfig() {

    var config = {};

    config.entry = {
        'app': './app/main.ts',
        'vendor': './app/vendor.ts',
    };

    config.output = {
        path: getPath('./dist'),
        filename: isProd ? '[name].[hash].js' : '[name].bundle.js',
        chunkFilename: isProd ? '[name].[hash].js' : '[name].bundle.js',
        publicPath: isProd ? '/' : 'http://127.0.0.1:8000/'
    };

    config.devtool = 'source-map';
    config.resolve = {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
    };
    config.module = {
        loaders: [
            {
                // TS LOADER
                test: /\.ts$/,
                loader: 'ng-annotate!awesome-typescript-loader',
                include: [
                    getPath("app")
                ]
            },
            {
                test: /\.css$/,
                loader: isProd ? ExtractTextPlugin.extract('style', 'css!postcss') : 'style!css'
            },
            {
                // ASSET LOADER
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file?name=assets/[name].[hash].[ext]'
            },
            {
                // HTML LOADER
                test: /\.html$/,
                loader: 'raw',
                exclude: /(index)/
            }
        ]
    };

    config.postcss = [
        autoprefixer({
            browsers: ['last 2 versions']
        })
    ];


    config.plugins = [
        new CommonsChunkPlugin({
            names: ['vendor'],
            minChunks: Infinity
        }),

        new HtmlWebpackPlugin({
            template: getPath('./app/index.html'),
            inject: 'body'
        })
    ];

    if (isProd) {
        config.plugins.push(
            // Create separate CSS file
            new ExtractTextPlugin('app.css'),

            // Dedupe modules in the output
            new webpack.optimize.DedupePlugin(),

            // Minifiy all JS, switch loaders to minimizing mode
            new webpack.optimize.UglifyJsPlugin()
        );
    }


    config.devServer = {
        host: '0.0.0.0',
        port: 8000,
        contentBase: './app'
    }

    return config;
})();
