/**
基本手势事件
@module event-dom/gesture/basic
*/

/**
基本手势事件。引入模块则可以使用相应事件

使用示例：

	require(['node', 'event-dom/gesture/basic'], function($, GestureBasic){
		$(window).on(GestureBasic.START, function(ev){
			//touch start...
		});
		$(window).on(GestureBasic.MOVE, function(ev){
			//touch move...
		});
		$(window).on(GestureBasic.END, function(ev){
			//touch end...
		});
	});

@class GestureBasic
@static
*/

/**
手势开始事件
@event START
*/

/**
手势进行事件
@event MOVE
*/

/**
手势结束事件
@event END
*/