/**
@module scroll-view/plugin/pull-to-refresh
*/


/**
ScrollView的下拉刷新插件
@class PullToRefresh
@namespace ScrollView.Plugin
@constructor
@extends Base
@param config {Object}
@example
```
require(['node', 'scroll-view', 'scroll-view/plugin/scrollbar', 'scroll-view/plugin/pull-to-refresh'], function ($, ScrollView, ScrollbarPlugin, PullToRefresh) {
    var str = '',
        num = 1;
    for (; num < 40; num++) {
        str += '<p>line ' + num + '</p>'
    }
    $('#thelist').html(str);

    var scrollView = new ScrollView({
        srcNode: '#wrapper',
        plugins: [ ScrollbarPlugin,
            new PullToRefresh({
                pullUpLoadFn: function (callback) {  //滚动到低端后继续上拉将进入这个函数
                    setTimeout(function () {
                        scrollView.get('contentEl')
                                .append('<p>line ' + num++ + '</p>');
                        scrollView.sync();
                        callback();
                    }, 500);
                },
                pullingUpHtml : '上拉刷新',
                releasingUpHtml : '松手加载',
                loadingUpHtml : '正在努力加载...',
                pullDownLoadFn : function(callback){  //滚动到顶端后继续下拉将进入这个函数
                    setTimeout(function () {
                        scrollView.get('contentEl')
                                .prepend('<p>line ' + num++ + '</p>');
                        scrollView.sync();
                        callback();
                    }, 500);
                }
            })
        ]
    }).render();
});
```
*/

/**
下拉时提示内容
@attribute pullingDownHtml {String} 
@default "Pull down to refresh..."
*/

/**
下拉释放操作的提示内容
@attribute releasingDownHtml {String} 
@default "release to refresh..."
*/

/**
下拉加载内容时的提示内容
@attribute loadingDownHtml {String} 
@default "loading..."
*/

/**
下拉加载内容的具体函数实现，自行实现，如果不给出，则无操作，只完成动画。
组件内部会给pullDownLoadFn函数传入参数callback,callback参数在是组件内部传进来的，在加载完事之后执行这个callback即可
@attribute pullDownLoadFn {function}
*/

/**
下拉时提示内容
@attribute pullingUpHtml {String} 
@default "Pull down to refresh..."
*/

/**
下拉释放操作的提示内容
@attribute releasingUpHtml {String} 
@default "release to refresh..."
*/

/**
下拉加载内容时的提示内容
@attribute loadingUpHtml {String} 
@default "loading..."
*/

/**
下拉加载内容的具体函数实现，自行实现，如果不给出，则无操作，只完成动画。
组件内部会给pullUpLoadFn函数传入参数callback,callback参数在是组件内部传进来的，在加载完事之后执行这个callback即可
@attribute pullUpLoadFn {function}
*/