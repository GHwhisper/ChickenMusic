<template>
    <div class="loading">
        <img width="24px" height="24px" src="./loading.gif" alt="">
        <p class="desc">{{title}}</p>
    </div>
</template>

<script>
    export default {
        name: "loading",
        props: {
            title: {
                type: String,
                default: '正在载入...'
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "~common/stylus/variable"
    .loading
        width 100%
        text-align center
        .desc
            line-height 20px
            font-size $font-size-small
            color $color-text-l
</style>