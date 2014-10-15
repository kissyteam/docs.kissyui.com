/**
ScrollView的插件ScrollBar
@module scroll-view/plugin/scrollbar
*/

/**
ScrollView的滚动条插件,用来自定义滚动条
@class ScrollBar
@namespace ScrollView.Plugin
@constructor
@extends Base
@param config {Object}
@example
```
require(['scroll-view','scroll-view/plugin/scrollbar'], function (ScrollView, ScrollbarPlugin) {
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

/**
滚动条的最小长度
@attribute minLength {Number} 
*/

/**
是否自动隐藏横向滚动条
@attribute autoHideX {Boolean} 
*/

/**
是否自动隐藏纵向滚动条
@attribute autoHideY {Boolean} 
*/

