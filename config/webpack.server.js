const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base')

const serverWebpackConfig = merge(baseWebpackConfig.serverConfig,{
    mode:'production',
})
module.exports = serverWebpackConfig