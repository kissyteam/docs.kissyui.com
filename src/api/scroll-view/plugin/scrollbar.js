/**
ScrollView的插件ScrollBar
@module scroll-view/plugin/scrollbar
*/

/**
ScrollView的滚动条插件,用来自定义滚动条
@class ScrollBar
@constructor
@extends Base
@param config
@param config.minLength {Number} 滚动条的最小长度
@param config.autoHideX {Boolean} 是否自动隐藏横向滚动条
@param config.autoHideY {Boolean} 是否自动隐藏纵向滚动条
@example
```
KISSY.use('scroll-view,scroll-view/plugin/scrollbar', function (S, ScrollView, ScrollbarPlugin) {
    var scrollView = new ScrollView({
        width: 320,
        height: 219,
        plugins: [new ScrollbarPlugin({
            autoHideX: true,
            autoHideY: false
        })],
        content: content
    }).render();
}
```
*/