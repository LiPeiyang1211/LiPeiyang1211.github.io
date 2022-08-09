import React from "react";
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";

const options = {
    //audio lists model
    audioLists: [
        {
            name: "One Day",
            singer: "余甜甜",
            cover: "https://p2.music.126.net/OCdlb_r5AzNUbxSpPhy63A==/804842511584596.jpg",
            musicSrc: "http://music.163.com/song/media/outer/url?id=1485345347.mp3"
        },
        {
            name: "风吹麦浪（原唱：李健）",
            singer: "钟鱼Fish",
            cover: 'http://p1.music.126.net/u6LBk1AJblv7KMlwYzmicQ==/109951165181304641.jpg',
            musicSrc: "http://music.163.com/song/media/outer/url?id=1466608403.mp3"
        },
        {
            name: "后来",
            singer: "刘若英 - 后来 大合唱版/LIKE I DO（Mc_Lei / BADooowas remix）",
            cover: "https://p1.music.126.net/nSCOYgdN2yo1e-NdQWa4CQ==/18511377767232313.jpg",
            musicSrc: "http://music.163.com/song/media/outer/url?id=556340421.mp3"
        },
        {
            name: "胆小鬼",
            singer: "唐萧SSM",
            cover: "https://p1.music.126.net/uqGmcu8HOO_9qV5arW1Glw==/109951163067344923.jpg",
            musicSrc: "http://music.163.com/song/media/outer/url?id=1954499673.mp3"
        }
    ],

    //default play index of the audio player  [type `number` default `0`]
    defaultPlayIndex: 0,

    //color of the music player theme    [ type `string: 'light' or 'dark'  ` default 'dark' ]
    theme: "dark",

    // Specifies movement boundaries. Accepted values:
    // - `parent` restricts movement within the node's offsetParent
    //    (nearest node with position relative or absolute), or
    // - a selector, restricts movement within the targeted node
    // - An object with `left, top, right, and bottom` properties.
    //   These indicate how far in each direction the draggable
    //   can be moved.
    bounds: "body",

    //Whether to load audio immediately after the page loads.  [type `Boolean | String`, default `false`]
    //"auto|metadata|none" "true| false"
    preload: true,

    //Whether the player's background displays frosted glass effect  [type `Boolean`, default `false`]
    glassBg: false,

    //The next time you access the player, do you keep the last state  [type `Boolean` default `false`]
    remember: false,

    //The Audio Can be deleted  [type `Boolean`, default `true`]
    remove: true,

    //audio controller initial position    [ type `Object` default '{top:0,left:0}' ]
    defaultPosition: {
        bottom: 20,
        left: 20
    },

    // play mode text config of the audio player
    playModeText: {
        order: "顺序播放",
        orderLoop: "列表循环",
        singleLoop: "单曲循环",
        shufflePlay: "随机播放"
    },

    //audio controller open text  [ type `String | ReactNode` default 'open']
    openText: "打开",

    //audio controller close text  [ type `String | ReactNode` default 'close']
    closeText: "关闭",

    //audio theme switch checkedText  [ type `String | ReactNode` default '-']
    checkedText: "开",

    //audio theme switch unCheckedText [ type `String | ReactNode` default '-']
    unCheckedText: "关",

    // audio list panel show text of the playlist has no songs [ type `String` | ReactNode  default 'no music']
    notContentText: "暂无音乐",

    panelTitle: "播放列表",

    defaultPlayMode: "order",

    //audio mode        mini | full          [type `String`  default `mini`]
    mode: "mini",

    /**
     * [ type `Boolean` default 'false' ]
     * The default audioPlay handle function will be played again after each pause, If you only want to trigger it once, you can set 'true'
     */
    once: true,

    //Whether the audio is played after loading is completed. [type `Boolean` default 'true']
    autoPlay: true,

    //Whether you can switch between two modes, full => mini  or mini => full   [type 'Boolean' default 'true']
    toggleMode: true,

    //audio cover is show of the "mini" mode [type `Boolean` default 'true']
    showMiniModeCover: true,

    //audio playing progress is show of the "mini"  mode
    showMiniProcessBar: false,

    //audio controller is can be drag of the "mini" mode     [type `Boolean` default `true`]
    drag: true,

    //drag the audio progress bar [type `Boolean` default `true`]
    seeked: true,

    //audio controller title [type `String | ReactNode`  default <FaHeadphones/>]
    // controllerTitle: <FaHeadphones />,

    //Displays the audio load progress bar.  [type `Boolean` default `true`]
    showProgressLoadBar: true,

    //play button display of the audio player panel   [type `Boolean` default `true`]
    showPlay: true,

    //reload button display of the audio player panel   [type `Boolean` default `true`]
    showReload: true,

    //download button display of the audio player panel   [type `Boolean` default `true`]
    showDownload: true,

    //loop button display of the audio player panel   [type `Boolean` default `true`]
    showPlayMode: true,

    //theme toggle switch  display of the audio player panel   [type `Boolean` default `true`]
    showThemeSwitch: true,

    //Extensible custom content       [type 'Array' default '[]' ]
    extendsContent: [],

    //default volume of the audio player [type `Number` default `100` range `0-100`]
    defaultVolume: 100,

    //playModeText show time [type `Number(ms)` default `700`]
    playModeShowTime: 600,

    //Whether to try playing the next audio when the current audio playback fails [type `Boolean` default `true`]
    loadAudioErrorPlayNext: true,

    //Music is downloaded handle

};

export default class Music extends React.Component {

    render() {
        return (
            <div>
                <ReactJkMusicPlayer {...options} />
            </div>
        );
    }
}