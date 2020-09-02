<template>
    <div class="singer" ref="singer">
        <list-view :data="singers" @select="selectSinger" ref="list"></list-view>
        <div v-show="!singers.length" class="loading-container">
            <loading></loading>
        </div>
        <!--承载子路由-->
        <router-view></router-view>
    </div>
</template>

<script>
    import { getSingerList } from 'api/singer'
    import { ERR_OK } from 'api/config'
    import Singer from 'common/js/singer'
    import ListView from 'base/listview/listview'
    import Loading from 'base/loading/loading'
    import { mapMutations } from 'vuex'
    import { playlistMixin } from 'common/js/mixin'

    const HOT_NAME = '热门'
    const HOT_SINGER_LEN = 10

    export default {
        mixins: [playlistMixin],
        data() {
            return {
                singers: []
            }
        },
        components: {
            ListView,
            Loading
        },
        created() {
            this._getSingerList()
        },
        methods: {
            handlePlaylist(playlist) {
                const bottom = playlist.length > 0 ? '60px' : ''
                this.$refs.singer.style.bottom = bottom
                this.$refs.list.refresh()
            },
            selectSinger(singer) {
                this.$router.push({
                    path: `/singer/${singer.id}`
                })
                this.setSinger(singer)
            },
            _getSingerList() {
                getSingerList().then(res => {
                    if(res.code === ERR_OK) {
                        this.singers = this._normalizeSinger(res.data.list)
                    }
                })
                // getSingerList().then(res => {
                //     console.log(res)
                // })
            },
            _normalizeSinger(list) {
                let map = {
                    hot: {  // 热门
                        title: HOT_NAME,
                        items: []
                    }
                }
                list.forEach((item, index) => {
                    if(index < HOT_SINGER_LEN) {    // 取前十条作为热门
                        map.hot.items.push(new Singer({
                            id: item.Fsinger_mid,
                            name: item.Fsinger_name
                        }))
                    }
                    const key = item.Findex
                    if(!map[key]) {
                        map[key] = {
                            title: key,
                            items: []
                        }
                    }
                    map[key].items.push(new Singer({    // 聚合歌手列表
                        id: item.Fsinger_mid,
                        name: item.Fsinger_name
                    }))
                })
                // 为了得到有序列表，需要处理map
                let hot = []
                let ret = []
                for(let key in map) {
                    let val = map[key]
                    if(val.title.match(/[a-zA-Z]/)) {   // 如果title是字母，则放进ret[]
                        ret.push(val)
                    } else if (val.title === HOT_NAME) {    // 如果title是HOT_NAME，则放进hot[]
                        hot.push(val)
                    }
                }
                ret.sort((a, b) => {    // 按照字母顺序，对ret[]排序
                    return a.title.charCodeAt(0) - b.title.charCodeAt(0)
                })
                return hot.concat(ret)  // 拼接得到一维数组
            },
            ...mapMutations({
                setSinger: 'SET_SINGER'
            })
        }
    }
</script>

<style lang="stylus" scoped>
    .singer
        position fixed
        top 88px
        bottom 0
        width 100%
        .loading-container
            position absolute
            top 50%
            width 100%
            transform translateY(-50%)
</style>