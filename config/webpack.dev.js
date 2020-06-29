const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base');
const devWebpackConfig = merge(baseWebpackConfig.clientConfig,{
    mode:'development',
})

module.exports = devWebpackConfig;