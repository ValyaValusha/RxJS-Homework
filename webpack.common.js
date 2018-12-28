const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry : {
        'main': './src/main.js',
        'visitor/': './src/visitor/visitor.js',
        'admin/': './src/admin/admin.js'
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            chunks: ['common', 'main']
        }),
        new HtmlWebpackPlugin({
            filename: 'admin/admin.html',
            template: 'src/admin/admin.html',
            chunks: ['common', 'admin/']
        }),
        new HtmlWebpackPlugin({
            filename: 'visitor/visitor.html',
            template: 'src/visitor/visitor.html',
            chunks: ['common', 'visitor/']
        }),
    ],
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: '[name].bundle.js'
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js']
    },
    optimization: {
       splitChunks: {
           chunks: 'all',
           name: 'common'
       }
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                    {loader: 'postcss-loader'},
                    {loader: 'sass-loader'}
                ]
            }
        ]
    }
};