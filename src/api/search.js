import jsonp from 'common/js/jsonp'
import { commonParams, options } from './config'

export function getHotKey() {
    const url = 'https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg'
    const data = Object.assign({}, commonParams, {
        platform: 'yqq.json',
        needNewCode: 0,
        g_tk_new_20200303: 5381,
        loginUin: 0,
        hostUin: 0,
        format: 'json'
    })
    return jsonp(url, data, options)
}