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
            // 'api': {
            //     target: 'http://localhost:8080',
            //     changeOrigin: true,
            //     pathRewrite: {
            //         '^api': '/'     // 代理路径
            //     }
            // },
            '/api/getDiscList': {
                target: 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg',
                bypass: function (req, res, proxyOptions) {
                    req.headers.referer = 'https://c.y.qq.com/'
                    req.headers.host = 'c.y.qq.com'
                },
                pathRewrite: {
                    '^/api/getDiscList': ''
                }
            },
            "/api/lyric": {
                target: 'https://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric_new.fcg',
                bypass: function (req, res, proxyOptions) {
                    req.headers.referer = 'https://y.qq.com'
                    req.headers.host = 'y.qq.com'
                },
                pathRewrite: {
                    '^/api/lyric': ''
                }
            }
            // '/api/getSingerList': {
            //     target: 'https://u.y.qq.com/cgi-bin/musics.fcg',
            //     bypass: function (req, res, proxyOptions) {
            //         req.headers.referer = 'https://c.y.qq.com'
            //         req.headers.host = 'u.y.qq.com'
            //     },
            //     pathRewrite: {
            //         '^/api/getSingerList': ''
            //     }
            // },
        }
    }
}