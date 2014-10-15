/**
拖放功能

#Note 
支持 win8 的触摸事件

@module dd
*/

/**
使得节点可被拖动
@class Draggable
@constructor
@extends Base
@namespace DD
@param config {Object}
@example

	require(['dd'],function(DD){
        var drag=new DD.Draggable({
            node:'#test-drag',
            cursor:'move',
            move:true
        });
    });
*/

/**
将要进行拖放的节点
@attribute node {String|HTMLElement}
*/

/**
可拖动对象在的组。（设置后只和本组的droppable对象交互），默认值为true, 可以和所有组的 droppable 都交互。 若不需要和任何droppable 交互，为了性能，请设置 groups 为 false. 例如： {‘x’:1,’y’:1} 表示属于 x 和 y 组
@attribute groups {Object} 
*/

/**
作为鼠标在其上按下时触发节点拖放的钩子. 字符串时表示选择器字符串. 如果不设置, 则整个 node 作为触发钩子.
#### handlers 的每个元素 DOM 节点必须位于配置项 node DOM 子树中.
@attribute handlers {HTMLElement[]|Function[]|String[]} 
@default 配置中的 node 设置的节点
*/


/**
默认 false。关联元素是否随鼠标移动。（例如：resize 功能完全不需要关联元素移动）
@attribute move {Boolean} 
@default false
@example
Draggable 默认实例化后仅表示会根据鼠标拖放触发 drag() 事件, 并不会导致节点移动， 通过以下设置来使得节点跟随鼠标移动：

设置 move 为 true.
```
new Draggable({
    node:"#d",
    move:true
});
```
*/

/**
枚举值, 默认值 “point”, 和 Droppable 关联, 决定何时和可放对象开始交互(触发相应事件), 可取值 “point”,”intersect”,”strict”

- 在 “point” 模式下, 鼠标进入Droppable对象区域, 即开始和可放对象交互.
- 在 “intersect” 模式下, 只要Draggable对象和Droppable对象有交集, 即开始和可放对象交互.
- 在 “strict” 模式下, 只有拖动对象完全位于可放对象内, 才开始和可放对象交互

@attribute mode {String} 
@default 'point'
*/

/**
等于 "point"
@attribute POINT
@type {String}
*/

/**
等于 "intersect"
@attribute INTERSECT
@type {String}
*/

/**
等于 "strict"
@attribute STRICT
@type {String}
*/

/**
是否禁用或启用拖放功能
@attribute disabled
@type Boolean
*/

/**
只读。表示配置项中 node 代表的节点.
@attribute dragNode
@type KISSY.Node
*/

/**
当可拖放对象开始被用户拖放时触发.
@event dragstart
@param ev {Object} 
@param ev.drag {Object} 自身, 当前拖放对象.
*/

/**
当可拖放对象拖放过程中触发.
@event drag
@param ev {Object}
@param ev.pageX {Number} 当前鼠标的绝对横坐标.
@param ev.pageY {Number} 当前鼠标的绝对纵坐标.
@param ev.drag {Object} 自身, 当前拖放对象.
*/

/**
当用户鼠标弹起放弃拖放时触发.
@event dragend
@param ev {Object} 
@param ev.drag {Object} 自身, 当前拖放对象.
*/

/**
当前 Draggable 对象达到一个 Droppable 对象时触发, 可简单理解成 mouseenter.
@event dragenter
@param ev {Object} 
@param ev.drag {Object} 自身, 当前拖放对象.
@param ev.drop {Object} 当前交互的Droppable对象.
*/

/**
当前 Draggable 对象在一个 Droppable 实例上移动时触发, 可简单理解成 mouseover.
@event dragover
@param ev {Object} 
@param ev.drag {Object} 自身, 当前拖放对象.
@param ev.drop {Object} 当前交互的Droppable对象.
*/

/**
当前 Draggable 对象离开一个 Droppable 实例上移动时触发, 可简单理解成 mouseleave. 相当于 html5 dd API targetNode 的 dragleave 事件的概念.
@event dragexit
@param ev {Object} 
@param ev.drag {Object} 自身, 当前拖放对象.
@param ev.drop {Object} 当前交互的Droppable对象.
*/

/**
当前 Draggable 对象被放置在一个 Droppable 实例时触发. 相当于 html5 dd API targetNode 的 drop 事件的概念.
@event dragdrophit
@param ev {Object} 
@param ev.drag {Object} 自身, 当前拖放对象.
@param ev.drop {Object} 当前交互的Droppable对象.
*/

/**
当用户鼠标弹起但是没有放置当前 Draggable 对象到一个 Droppable 对象时触发.
@event dragdropmiss
@param ev {Object} 
@param ev.drag {Object} 自身, 当前拖放对象.	
*/



/**
可放对象，通常用来监听事件，和Draggable一起使用做拖动交互
@class Droppable
@constructor
@extends Base
@namespace DD
@param config {Object}
@example

	require(['dd'], function(DD){
		var Droppable = DD.Droppable;
		var drop = new Droppable({
			node : '#dropArea'
		});
		drop.on('drophit', function(ev){
			//do something
		})
	})
*/

/**
可与拖动对象交互的节点.
@attribute node {String | HTMLElement} 
*/

/**
可与拖动对象交互的节点. 例如： {‘x’:1,’y’:1} 表示属于 x 和 y 组.
@attribute groups {Object} 
*/


/**
当一个 Draggable 对象根据其 Draggable.mode 配置达到和当前 Droppable 实例交互条件时触发.
一般即鼠标进入当前 Droppable 对象代表节点的区域, 可简单理解成 mouseenter. 相当于 html5 dd API targetNode 的 dragenter 事件的概念.
@event dropenter
@param ev {Object}
@param ev.drag {Object} 当前交互的 Draggable 对象.
@param ev.drop {Object} 自身, 当前Droppable对象.
*/

/**
当一个 Draggable 在当前 Droppable 实例上移动时触发, 可简单理解成 mouseover. 相当于 html5 dd API targetNode 的 dragover 事件的概念.
@event dropover
@param ev {Object}
@param ev.drag {Object} 当前交互的 Draggable 对象.
@param ev.drop {Object} 自身, 当前Droppable对象.
*/

/**
当一个 Draggable 离开当前 Droppable 实例时触发, 可简单理解成 mouseleave. 相当于 html5 dd API targetNode 的 dragleave 事件的概念.
@event dropexit
@param ev {Object}
@param ev.drag {Object} 当前交互的 Draggable 对象.
@param ev.drop {Object} 自身, 当前Droppable对象.
*/

/**
当一个 Draggable 被放置在当前 Droppable 实例时触发. 相当于 html5 dd API targetNode 的 drop 事件的概念.
@event drophit
@param ev {Object}
@param ev.drag {Object} 当前交互的 Draggable 对象.
@param ev.drop {Object} 自身, 当前Droppable对象.
*/



/**
拖放的中央控制对象, 所有的拖放实例的事件都会向其冒泡，通常用来监听所有拖放示例的事件做相应处理

	require(['dd'], function(DD){
		var DDM = DD.DDM;
	
			DDM.on('dragstart', function(ev){
				//do something
			});
			DDM.on('dragend', function(ev){
				//do something
			});
	})

@class DDM
@extends Base
@namespace DD
@static

*/

/**
从Draggable的dragstart事件冒泡过来，在 DDM 上触发
@event dragstart
@param ev {Object} 
@param ev.drag {Object} 自身, 当前拖放对象.
*/

/**
从Draggable的drag事件冒泡过来，在 DDM 上触发
@event drag
@param ev {Object}
@param ev.pageX {Number} 当前鼠标的绝对横坐标.
@param ev.pageY {Number} 当前鼠标的绝对纵坐标.
@param ev.drag {Object} 自身, 当前拖放对象.
*/

/**
从Draggable的dragend事件冒泡过来，在 DDM 上触发
@event dragend
@param ev {Object} 
@param ev.drag {Object} 自身, 当前拖放对象.
*/

/**
从Draggable的dragenter事件冒泡过来，在 DDM 上触发
@event dragenter
@param ev {Object} 
@param ev.drag {Object} 自身, 当前拖放对象.
@param ev.drop {Object} 当前交互的Droppable对象.
*/

/**
从Draggable的dragover事件冒泡过来，在 DDM 上触发
@event dragover
@param ev {Object} 
@param ev.drag {Object} 自身, 当前拖放对象.
@param ev.drop {Object} 当前交互的Droppable对象.
*/

/**
从Draggable的dragexit事件冒泡过来，在 DDM 上触发
@event dragexit
@param ev {Object} 
@param ev.drag {Object} 自身, 当前拖放对象.
@param ev.drop {Object} 当前交互的Droppable对象.
*/

/**
从Draggable的dragdrophit事件冒泡过来，在 DDM 上触发
@event dragdrophit
@param ev {Object} 
@param ev.drag {Object} 自身, 当前拖放对象.
@param ev.drop {Object} 当前交互的Droppable对象.
*/

/**
从Draggable的dragdropmiss事件冒泡过来，在 DDM 上触发
@event dragdropmiss
@param ev {Object} 
@param ev.drag {Object} 自身, 当前拖放对象.	
*/

/**
从Droppable的dropenter事件冒泡过来，在 DDM 上触发
@event dropenter
@param ev {Object}
@param ev.drag {Object} 当前交互的 Draggable 对象.
@param ev.drop {Object} 自身, 当前Droppable对象.
*/

/**
从Droppable的dropover事件冒泡过来，在 DDM 上触发
@event dropover
@param ev {Object}
@param ev.drag {Object} 当前交互的 Draggable 对象.
@param ev.drop {Object} 自身, 当前Droppable对象.
*/

/**
从Droppable的dropexit事件冒泡过来，在 DDM 上触发
@event dropexit
@param ev {Object}
@param ev.drag {Object} 当前交互的 Draggable 对象.
@param ev.drop {Object} 自身, 当前Droppable对象.
*/

/**
从Droppable的drophit事件冒泡过来，在 DDM 上触发
@event drophit
@param ev {Object}
@param ev.drag {Object} 当前交互的 Draggable 对象.
@param ev.drop {Object} 自身, 当前Droppable对象.
*/



/**
委托容器内的所有 Draggable 节点的拖放行为.
@class DraggableDelegate
@constructor
@extends DD.Draggable
@namespace DD
@param config {Object}
@example
	require(['dd'],function(DD){
		var DraggableDelegate = DD.DraggableDelegate;
		new DraggableDelegate({
            container:"#container3",
            handlers:['.cheader'],
            selector:'.component',
            move:true
        });
	})
*/

/**
用于委托的容器节点, 所有 Draggable 节点都在其内
@attribute container {String | HTMLElement} 
*/

/**
用来获取容器内的 Draggable 节点, 格式为 tag 或 tag.cls 或 .cls
@attribute selector {String} 
*/

/**
数组每个元素是选择器字符串, 格式为 tag 或 tag.cls 或 .cls, 作为鼠标在其上按下时触发节点拖放的钩子. 如果不设置, 则整个可拖放节点都作为触发钩子. 其中可拖放节点通过 selector 从容器 container 中取得
@attribute handlers {Array} 
*/


/**
当前正在拖动的被委托的容器内子节点, 在应用 DD.Proxy 时表示委托节点
@attribute node {KISSY.Node}
*/

/**
当前正在拖动的被委托的容器内子节点
@attribute dragNode {KISSY.Node}
*/

/**
为 Draggable 对象提供所需要的代理节点
@class DroppableDelegate
@constructor
@extends DD.Droppable
@namespace DD
@param config {Object}
*/

/**
用于委托的容器节点, 所有 Draggable 节点都在其内
@attribute container {String | HTMLElement} 
*/

/**
用来获取容器内的 Draggable 节点, 格式为 tag 或 tag.cls 或 .cls
@attribute selector {String}
*/

/**
当前正在拖动的被委托的容器内子节点, 在应用 DD.Proxy 时表示委托节点
@attribute node {KISSY.Node}
*/
