const path = require('path')
function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    chainWebpack: config => {
        config.resolve.alias
            .set('common', resolve('src/common'))
            .set('components', resolve('src/components'))
            .set('api', resolve('src/api'))
            .set('base', resolve('src/base'))
    },

    devServer: {
        proxy: {
            'api': {
                target: 'http://localhost:8080',
                changeOrigin: true,
                pathRewrite: {
                    '^api': '/'     // 代理路径
                }
            }
        }
    }
}