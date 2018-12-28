const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
      contentBase: './dist'
    },
    module: {
        rules: [
            // {
            //     test: /\.js$/,
            //     enforce: 'pre',
            //     exclude: /node_modules/,
            //     loader: 'eslint-loader'
            // }
        ]
    }
});