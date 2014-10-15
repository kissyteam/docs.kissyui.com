/**
滑动手势事件
@module event-dom/gesture/swipe
*/

/**
滑动手势事件。当用户在屏幕上“有效”滑动时触发（足够短的时间内滑动足够的距离）。引入模块则可以使用相应事件

使用示例：

	require(['node', 'event-dom/gesture/swipe'], function($, GestureSwipe){
		$(window).on(GestureSwipe.SWIPE, function(ev){
			//swiped
	});

@class GestureSwipe
@static
*/

/**
当用户在屏幕上“有效”滑动时触发（足够短的时间内滑动足够的距离）
返回的事件对象包含格外属性：
- pageX {Number} 触点横坐标
- pageY {Number} 触点纵坐标
- direction {String} : 滑动方向 ： left/right/up/down
- distance {Number} : 滑动距离
- duration {Number} : 滑动时间，单位 ： 秒
@event SWIPE
*/