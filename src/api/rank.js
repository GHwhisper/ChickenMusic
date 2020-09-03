import jsonp from 'common/js/jsonp'
import { commonParams, options } from './config'
// import axios from 'axios'

export function getTopList() {
    const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg'
    const data = Object.assign({}, commonParams, {
        platform: 'h5',
        needNewCode: 1,
        g_tk: 67232076
    })
    return jsonp(url, data, options)
}

export function getMusicList(topid) {
    const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg'
    const data = Object.assign({}, commonParams, {
        topid,
        needNewCode: 1,
        tpl: 3,
        page: 'detail',
        type: 'top',
        platform: 'h5'
    })
    return jsonp(url, data, options)
}




// export function getMusicList(topid) {
//     const day = getDayTime()
//     const url = '/api/getMusicList'
//     const data = Object.assign({}, commonParams, {
//         topid,
//         sign: 'zzavhnqrf7lnmf29b48764de4d37192193604c2a337fed11',
//         loginUin: 0,
//         hostUin: 0,
//         format: 'json',
//         platform: 'yqq.json',
//         needNewCode: 0,
//         data: {"detail":{"module":"musicToplist.ToplistInfoServer","method":"GetDetail","param":{"topId":4,"offset":0,"num":20,"period":day}},"comm":{"ct":24,"cv":0}}
//     })
//     return axios.get(url, {
//         params: data
//     }).then(res => {
//         return Promise.resolve(res.data)
//     }).catch(e => console.log(e))
// }
//
// // 获取当天年月日，如 2020-09-01
// function getDayTime() {
//     let d = new Date()
//     let year = d.getFullYear()
//     let month = d.getMonth() + 1
//     let day = d.getDate()
//     let str = `${year}-${formatZero(month)}-${formatZero(day)}`
//     return str
// }
//
// //在个位数的时间前加0
// function formatZero(n){
//     if(n>=0&&n<=9){
//         return `0${n}`
//     }else{
//         return n
//     }
// }