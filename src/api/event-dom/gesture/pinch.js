/**
pinch手势事件
@module event-dom/gesture/pinch
*/

/**
pinch手势事件，触屏上开始用双指调整某个 dom 元素大小时触发。引入模块则可以使用相应事件

使用示例：

	require(['node', 'event-dom/gesture/pinch'], function($, GesturePinch){
		$(#test).on(GesturePinch.PINCH_START, function(ev){
			//pinch start...
		});
		$(#test).on(GesturePinch.PINCH, function(ev){
			//pinching...
		});
		$(#test).on(GesturePinch.PINCH_END, function(ev){
			//pinch end...
		});
	});

@class GesturePinch
@static
*/

/**
触屏上开始用双指调整某个 dom 元素大小时触发
返回的事件对象包括格外下面的属性：
- distance {Number} 开始时双指的绝对距离
- scale {Number} 固定为 1
@event PINCH_START
*/

/**
触屏上用双指调整某个 dom 元素大小进行时触发
返回的事件对象包括格外下面的属性：
- distance {Number} 开始时双指的绝对距离
- scale {Number} 固定为 1
@event PINCH
*/

/**
触屏上用双指调整某个 dom 元素大小结束后触发
@event PINCH_END
*/