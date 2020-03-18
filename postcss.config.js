module.exports = {
    plugins: {
        'autoprefixer': {
            overrideBrowserslist: [
                "Android 4.1",
                "iOS 7.1",
                "Chrome > 31",
                "ff > 31",
                "ie >= 8"
            ]
        },
        // 'postcss-pxtorem': { // 转换px为rem
        //     rootValue: 37.5,
        //     propList: ['*']
        // }
    }
} 