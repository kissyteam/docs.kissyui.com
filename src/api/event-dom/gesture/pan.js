/**
拖动手势事件
@module event-dom/gesture/pan
*/

/**
拖动手势事件。引入模块则可以使用相应事件

使用示例：

	require(['node', 'event-dom/gesture/pan'], function($, GesturePan){
		$('#test').on(GesturePan.PAN_START, function(ev){
			//pan start...
		});
		$('#test').on(GesturePan.PAN, function(ev){
			//paning...
		});
		$('#test').on(GesturePan.PAN_END, function(ev){
			//pan end...
		});
	});

@class GesturePan
@static
*/

/**
开始拖动某个 dom 元素时触发
返回的事件对象包括格外下面的属性：
- deltaX {Number} 当前触点位置与开始拖动时的位置的横坐标差值
- deltaX {Number} 当前触点位置与开始拖动时的位置的纵坐标差值
- startTime {Number} 拖动开始时间
- gestureType {String} 'mouse'或'touch'
- direction {String} 方向 ： left/right/up/down
@event PAN_START
*/

/**
拖动某个 dom 元素进行时触发
返回的事件对象包括格外下面的属性：
- pageX {Number} 触点横坐标
- pageY {Number} 触点纵坐标
- deltaX {Number} 当前触点位置与开始拖动时的位置的横坐标差值
- deltaX {Number} 当前触点位置与开始拖动时的位置的纵坐标差值
- startTime {Number} 拖动开始时间
- gestureType {String} 'mouse'或'touch'
- direction {String} 方向 ： left/right/up/down
@event PAN
*/

/**
拖动某个 dom 元素结束后触发
返回的事件对象包括格外下面的属性：
- pageX {Number} 触点横坐标
- pageY {Number} 触点纵坐标
- deltaX {Number} 当前触点位置与开始拖动时的位置的横坐标差值
- deltaX {Number} 当前触点位置与开始拖动时的位置的纵坐标差值
- startTime {Number} 拖动开始时间
- gestureType {String} 'mouse'或'touch'
- direction {String} 方向 ： left/right/up/down
@event PAN_END
*/