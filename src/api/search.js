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

export function search(query, page, zhida, perpage) {
    const url = '/api/search'       // 该接口无法跨域，故需要反向代理
    const data = Object.assign({}, commonParams, {
        w: query,
        p: page,
        catZhida: zhida ? 1 : 0,
        t: 0,
        flag: 1,
        ie: 'utf-8',
        sem: 1,
        aggr: 0,
        perpage,
        n: perpage,
        remoteplace: 'txt.mqq.all',
        uin: 0,
        needNewCode: 1,
        platform: 'h5'
    })
    return jsonp(url, data, options)
}