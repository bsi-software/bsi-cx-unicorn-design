const path = require('path');

const TerserWebpackPlugin = require("terser-webpack-plugin");

module.exports = {
    entry: {
        main: {
            import: path.resolve(__dirname, 'js', 'main.js'),
            dependOn: ['jquery', 'chartjs']
        },
        jquery: ['jquery', 'jquery-form'],
        chartjs: ['chart.js/auto']
    },
    target: 'web',
    optimization: {
        minimize: true,
        minimizer: [
            new TerserWebpackPlugin({
                extractComments: false
            })
        ],
        runtimeChunk: 'single',
    },
    output: {
        path: path.resolve(__dirname, 'assets'),
        clean: true,
        filename: '[name].js'
    }
};
