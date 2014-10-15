//这个模块的API文档只写出ScrollView Class，其实在内部代码里面scroll-view这个模块是scroll-view/base模块的别名，也就是scroll-view这个模块提供的接口


/**
@module scroll-view
*/

/**
@class ScrollView
@constructor
@extends Component.Container
@param config {Object} 配置对象，详情参考其Attribute
@example
	require(['scroll-view'], function(ScrollView){
        var content = '';
        for (var i = 0; i < 10; i++) {
            content += '<p>This is ' + i + ' block</p>';
        }
        var myScrollView = new ScrollView({
            width : 318,
            height : 300,
            render : '#scroll-view-contaienr',
            content : content
        });
        myScrollView.render();
    })
*/

/**
- 当为String时，表示传入元素的选择器
- 当为Boolean时，表示用来指定是否在滚动是将元素“折断”，就是在滚动停在元素上时如何处理。默认为 false ，不做操作，就停在那里，为true时滚动到下一个同类元素的起点，停止。
@attribute snap {String|Boolean}
*/

/**
“折断”操作动画持续时间，当snap为true时有效。
@attribute snapDuration {Number} 
@default 0.3
*/

/**
“折断”操作动画的时间函数
@attribute snapEasing {String} 
@default "easeOut"
*/


/**
滚动到指定位置
@method scrollTo
@param cfg {Object} {left: xx, top: xx} 位置
@param animCfg {Object}  Anim的配置参数，详见 [Anim](/5.0/api/classes/Anim.html)
*/

/**
滚动到指定index的page
@method scrollToPage
@param index {Number} page索引值
@param animCfg {Object}  Anim的配置参数，详见 [Anim](/5.0/api/classes/Anim.html)
*/

/**
在元素最大滚动距离和最小滚动距离范围内滚动
@method scrollToWithBounds
@param cfg {Object} {left: xx, top: xx} 位置
@param animCfg {Object}  Anim的配置参数，详见 [Anim](/5.0/api/classes/Anim.html)
*/

/**
停止动画
停止动画队列里的函数，并清空动画队列，将滚动停在当前位置。
@method stopAnimation
*/

/**
判断对应方向上的滚动是否允许
横向传入 x，纵向 y
@method isAxisEnabled
@return {Boolean}  对应方向上是否允许
*/

/**
获得要滚动的步进长度
@method getScrollStep
@return {Object} {top: xx, left: xx} 两个方向上的步进值
*/