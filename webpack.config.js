'use strict';

const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        app: './src/app.js'
    },
    output: {
        path: path.resolve(__dirname, 'public_html/build'),
        publicPath: '/public_html/build/',
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: [
                    path.resolve(__dirname, 'src')
                ],
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    mode: 'development',
    watch: true,
    watchOptions: {
        ignored: ['public_html/assets/*.js', 'node_modules'],
        poll: 5000,
    },
};