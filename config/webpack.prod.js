const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base');
const devWebpackConfig = merge(baseWebpackConfig.clientConfig,{
    mode:'production'
})
module.exports = devWebpackConfig;