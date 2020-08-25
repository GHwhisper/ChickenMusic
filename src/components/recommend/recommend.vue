<template>
    <div class="recommend">
        <div class="recommend-content">
            <div v-if="recommends.length" class="slider-wrapper">
                <slider>
                    <div v-for="item in recommends" :key="item.id">
                        <a :href="item.linkUrl">
                            <img :src="item.picUrl" alt="">
                        </a>
                    </div>
                </slider>
            </div>
            <div class="recommend-list">
                <h1 class="list-title">热门歌单推荐</h1>
                <ul></ul>
            </div>
        </div>
    </div>
</template>

<script>
    import Slider from 'base/slider/slider'
    import {getRecommend} from 'api/recommend'
    import {ERR_OK} from 'api/config'

    export default {
        data() {
            return {
                recommends: []
            }
        },
        components: {
            Slider
        },
        created() {
            this._getRecommend()
        },
        methods: {
            _getRecommend() {
                getRecommend().then(res => {
                    if (res.code === ERR_OK) {
                        this.recommends = res.data.slider
                    }
                }) // 由于目前qq音乐的页面和接口改变，必然无法请求成功，故自行设置recommend模拟
                this.recommends = [{
                    id: 477,
                    linkUrl: 'https://y.qq.com/m/digitalbum/v3/gold/index.html?mid=004HXMO41q7Gdq&_video=true',
                    picUrl: 'http://y.gtimg.cn/music/common//upload/t_musicmall_focus/2870815.jpg'
                }, {
                    id: 465,
                    linkUrl: 'https://y.qq.com/m/digitalbum/v3/gold/index.html?mid=003Iraym0QjCyw&_video=true',
                    picUrl: 'http://y.gtimg.cn/music/common//upload/t_musicmall_focus/2867951.jpg'
                }, {
                    id: 464,
                    linkUrl: 'https://y.qq.com/m/digitalbum/gold/index.html?mid=004JYFa61vPS88&_video=true',
                    picUrl: 'http://y.gtimg.cn/music/common//upload/t_musicmall_focus/2862176.jpg'
                }, {
                    id: 475,
                    linkUrl: 'https://y.qq.com/m/digitalbum/gold/index.html?mid=002c8mB00SxDda&_video=true',
                    picUrl: 'http://y.gtimg.cn/music/common//upload/t_musicmall_focus/2845539.jpg'
                }, {
                    id: 474,
                    linkUrl: 'https://y.qq.com/m/digitalbum/gold/index.html?mid=000B9SZf2hS8gF&_video=true',
                    picUrl: 'http://y.gtimg.cn/music/common//upload/t_musicmall_focus/2843609.jpg'
                }, {
                    id: 473,
                    linkUrl: 'https://y.qq.com/m/digitalbum/gold/index.html?mid=001sdPsL0DFh46&_video=true',
                    picUrl: 'http://y.gtimg.cn/music/common//upload/MUSIC_FOCUS/2820629.jpg'
                }]
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "~common/stylus/variable"
    .recommend
        position fixed
        width 100%
        top 88px
        bottom 0
        .recommend-content
            height 100%
            overflow hidden
            .slider-wrapper
                position relative
                width 100%
                overflow hidden
            .recommend-list
                .list-title
                    height 65px
                    line-height 65px
                    text-align center
                    font-size $font-size-medium
                    color $color-theme
                .item
                    display flex
                    box-sizing border-box
                    align-items center
                    padding 0 20px 20px 20px
                    .icon
                        flex 0 0 60px
                        width 60px
                        padding-right 20px
                    .text
                        display flex
                        flex-direction column
                        justify-content center
                        flex 1
                        line-height 20px
                        overflow hidden
                        font-size $font-size-medium
                    .name
                        margin-bottom 10px
                    .desc
                        color $color-text-d
        .loading-container
            position absolute
            width 100%
            top 50%
            transform translateY(-50%)
</style>