/**
@module scroll-view/plugin/pull-to-refresh
*/


/**
ScrollView的下拉刷新插件
@class PullToRefresh
@constructor
@extends Base
@param config {Object} 配置对象，详情参考其Attribute
@example
```
KISSY.use('scroll-view, scroll-view/plugin/pull-to-refresh', function (S, ScrollView, PullToRefresh) {
    window.scrollView = new ScrollView({
        srcNode: '#wrapper',
        plugins: [
            new PullToRefresh({
                loadFn: function (callback) {
                    setTimeout(function () {
                        scrollView.get('contentEl').prepend('<p>line ' + i++ + '</p>');
                        scrollView.sync();
                        callback();
                    }, 500);
                }
            })
        ]
    }).render();
}
```
*/

/**
下拉时提示内容
@attribute pullingHtml {String} 
@default "Pull down to refresh..."
*/

/**
释放操作的提示内容
@attribute releasingHtml {String} 
@default "release to refresh..."
*/


/**
加载内容时的提示内容
@attribute loadingHtml {String} 
@default "loading..."
*/

/**
加载内容的具体函数实现，自行实现，如果不给出，则无操作，只完成动画。
组件内部会给loadFn函数传入参数callback,callback参数在是组件内部传进来的，在加载完事之后执行这个callback即可
@attribute loadFn {function}
*/