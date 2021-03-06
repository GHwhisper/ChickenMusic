import jsonp from 'common/js/jsonp'
import {commonParams, options} from './config'
import axios from 'axios'

export function getRecommend() {
    const url =  'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
    const data = Object.assign({}, commonParams, {
        platform: 'h5',
        uin: 0,
        needNewCode: 1
    })
    return jsonp(url, data, options)
}

export function getDiscList() {
    const url = '/api/getDiscList'
    const data = Object.assign({}, commonParams, {
        picmid: 1,
        rnd: Math.random(),
        g_tk_new_20200303: 5381,
        loginUin: 0,
        hostUin: 0,
        format: 'json',
        platform: 'yqq.json',
        needNewCode: 0,
        categoryId: 10000000,
        sortId: 5,
        sin: 0,
        ein: 19
    })
    return axios.get(url, {
        params: data
    }).then(res => {
        return Promise.resolve(res.data)
    })
}

export function getSongList(disstid) {
    const url = '/api/getSongList'
    const data = Object.assign({}, commonParams, {
        disstid,    // 注意该字段名，不是"dissid"
        type: 1,
        json: 1,
        utf8: 1,
        onlysong: 0,
        hostUin: 0,
        format: 'json',
        platform: 'yqq.json',
        needNewCode: 0
    })
    return axios.get(url, {
        params: data
    }).then(res => {
        return Promise.resolve(res.data)
    })
}