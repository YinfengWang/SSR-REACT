const path = require('path')
const { merge } = require('webpack-merge')
const config = require('./webpack.base.js')
clientConfig = {
    entry: './src/client/index.js',
    mode: 'development',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'public')
    },
}
module.exports = merge(config, clientConfig)