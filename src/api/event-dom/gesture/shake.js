/**
摇动手势事件
@module event-dom/gesture/shake
*/

/**
摇动手势事件。当用户摇动设备后触发，前后左右在一定连续时间内以一定幅度摇动设备。引入模块则可以使用相应事件

使用示例：

	require(['node', 'event-dom/gesture/shake'], function($, GestureShake){
		$(window).on(GestureShake.SHAKE, function(ev){
			//device is shaked...
	});

@class GestureShake
@static
*/

/**
当用户摇动设备后触发
@event SHAKE
*/