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
            '/api/lyric': {
                target: 'https://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric_new.fcg',
                bypass: function (req, res, proxyOptions) {
                    req.headers.referer = 'https://y.qq.com/'
                    req.headers.host = 'y.qq.com'
                },
                pathRewrite: {
                    '^/api/lyric': ''
                }
            },
            '/api/getSongList': {   // 歌单详情的歌曲列表
                target: 'https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg',
                bypass: function (req, res, proxyOptions) {
                    req.headers.referer = 'https://y.qq.com/'
                    req.headers.host = 'y.qq.com'
                },
                pathRewrite: {
                    '^/api/getSongList': ''
                }
            },
            '/api/search': {   // 搜索
                target: 'http://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp',
                bypass: function (req, res, proxyOptions) {
                    req.headers.referer = 'https://c.y.qq.com/'
                    req.headers.host = 'c.y.qq.com'
                },
                pathRewrite: {
                    '^/api/search': ''
                }
            },
            // '/api/getMusicList': {   // 排行详情的歌曲列表 // 然而web pc端只有20首，移动端找不到接口？？
            //     target: 'https://u.y.qq.com/cgi-bin/musics.fcg',
            //     bypass: function (req, res, proxyOptions) {
            //         req.headers.referer = 'https://y.qq.com/'
            //         req.headers.host = 'y.qq.com'
            //     },
            //     pathRewrite: {
            //         '^/api/getMusicList': ''
            //     }
            // },
            // '/api/getSingerList': {
            //     target: 'https://u.y.qq.com/cgi-bin/musics.fcg',
            //     bypass: function (req, res, proxyOptions) {
            //         req.headers.referer = 'https://c.y.qq.com/'
            //         req.headers.host = 'u.y.qq.com'
            //     },
            //     pathRewrite: {
            //         '^/api/getSingerList': ''
            //     }
            // },
        }
    }
}