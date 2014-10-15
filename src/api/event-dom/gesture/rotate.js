/**
旋转手势事件
@module event-dom/gesture/rotate
*/

/**
旋转手势事件，触屏上开始用双指旋转某个 dom 元素大小时触发。引入模块则可以使用相应事件

使用示例：

	require(['node', 'event-dom/gesture/rotate'], function($, GestureRotate){
		$(#test).on(GestureRotate.ROTATE_START, function(ev){
			//rotate start...
		});
		$(#test).on(GestureRotate.ROTATE, function(ev){
			//rotating...
		});
		$(#test).on(GestureRotate.ROTATE_END, function(ev){
			//rotate end...
		});
	});

@class GestureRotate
@static
*/

/**
触屏上开始用双指旋转某个 dom 元素大小时触发
返回的事件对象包括格外下面的属性：
- angle {Number} 开始时双指的角度值
- rotation {Number} 双指和开始相比改变的角度值
@event ROTATE_START
*/

/**
触屏上用双指旋转某个 dom 元素大小进行时触发
返回的事件对象包括格外下面的属性：
- angle {Number} 开始时双指的角度值
- rotation {Number} 双指和开始相比改变的角度值
@event ROTATE
*/

/**
触屏上用双指旋转某个 dom 元素大小结束后触发
@event ROTATE_END
*/