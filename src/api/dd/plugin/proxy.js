/**
@module dd/plugin/proxy
*/

/**
Draggable 插件,可代理拖放对象
@class Proxy
@constructor
@extends Base
@namespace DD.Plugin
@param config {Object}
@example
	require(['dd', 'dd/plugin/proxy'],function(DD, Proxy){
        var drag=new DD.Draggable({
            node:'#test-drag',
            cursor:'move',
            move:true
        });

        //使用proxy插件来跟踪鼠标移动
        drag.plug(Proxy);
    });
*/

/**
当 Draggable 对象需要代理节点时通过调用该函数产生代理节点, 函数的参数为当前 Draggable 对象, 返回值类型为 KISSY.Node . 即代理节点和当前节点保持一致,该属性有默认值,如下：
```
function(drag) {
    return new Node(drag.get("node")[0].cloneNode(true));
}
```
@attribute node {Function}
*/

/**
默认 false. 指明是否代理节点需要每次拖放前 dragstart 生成, 拖放后 dragend 销毁. 用于多 Draggable 对象共享一个 Proxy 对象实例, 且要求代理节点和单个 Draggable 对象关联, 或者一个 DraggableDelegate 对象共享一个 Proxy 对象实例
@attribute destroyOnEnd {Boolean}
@default false
*/

/**
默认 true. 当拖放结束时，是否移动源节点到代理节点的位置.
@attribute moveOnEnd {Boolean} 
@default true
*/

/**
默认 false. 拖放时是否隐藏源节点
@attribute hideNodeOnDrag {Boolean}
@default false
*/