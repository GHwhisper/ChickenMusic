import * as types from './mutation-types'

const mutations = {
    [types.SET_SINGER](state, singer) {
        this.state.singer = singer
    }
}

export default mutations