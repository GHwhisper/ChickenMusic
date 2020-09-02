import { playMode } from 'common/js/config'

const state = {
    singer: {},
    playing: false,     // 是否正在播放
    fullScreen: false,  // 播放器是否全屏
    playlist: [],       // 播放列表（播放顺序）
    sequenceList: [],   // 顺序播放列表（页面列表顺序）
    mode: playMode.sequence,     // 播放模式
    currentIndex: -1    // 当前播放的歌曲
}

export default state