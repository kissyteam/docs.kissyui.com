/**
在窗口边缘区域往窗口中心区域拖进的拖动手势事件
@module event-dom/gesture/edge-pan
*/

/**
在窗口边缘区域往窗口中心区域拖进的拖动手势事件。当将元素在窗口边缘区域往窗口中心区域拖进时触发，默认边缘区域为窗口上下左右四个方向顶端往窗口中心靠近的 '60px' 的区域。例如，窗口宽度为320，那么横坐标 0~60 和 260~320 这段区域就是边缘区域的一部分，当某元素在这个区域往窗口中心区域拖进时触发事件。
引入模块则可以使用相应事件。

使用示例：

	require(['node', 'event-dom/gesture/edge-pan', 'dd'], function($, GestureEdgePan, DD){
		new DD.Draggable({   //使得 #test 元素能被拖动
			node : '#test',
			move:true
		});

		$('#test').on(GestureEdgePan.EDGE_PAN_START, function(ev){ //在边缘区域往窗口中心区域开始拖进时触发
			//edge pan start...
		});
		$('#test').on(GestureEdgePan.EDGE_PAN, function(ev){  //在边缘区域往窗口中心区域拖进中时触发，如果已经超过边缘区域也会一直触发直到放开鼠标
			//edge paning...
		});
		$('#test').on(GestureEdgePan.EDGE_PAN_END, function(ev){  //在边缘区域往窗口中心区域拖进，放开鼠标时触发，如果已经超过边缘区域也会一直触发直到放开鼠标
			//edge pan end...
		});
	});

@class GestureEdgePan
@static
*/

/**
在边缘区域往窗口中心区域开始拖进时触发
返回的事件对象包括格外下面的属性：
- pageX {Number} 鼠标横坐标位置
- pageY {Number} 鼠标纵坐标位置
- distance {Number} 当前鼠标位置与开始事件时位置的距离
- duration {Number} 从开始事件到目前的时间
- velocityX {Number} 横坐标速率
- velocityY {Number} 纵坐标速率
- direction {String} 方向 ： left/right/up/down
@event EDGE_PAN_START
*/

/**
在边缘区域往窗口中心区域拖进中时触发，如果已经超过边缘区域也会一直触发直到放开鼠标
返回的事件对象包括格外下面的属性：
- pageX {Number} 鼠标横坐标位置
- pageY {Number} 鼠标纵坐标位置
- distance {Number} 当前鼠标位置与开始事件时位置的距离
- duration {Number} 从开始事件到目前的时间
- velocityX {Number} 横坐标速率
- velocityY {Number} 纵坐标速率
- direction {String} 方向 ： left/right/up/down
@event EDGE_PAN
*/

/**
在边缘区域往窗口中心区域拖进，放开鼠标时触发，如果已经超过边缘区域也会一直触发直到放开鼠标
返回的事件对象包括格外下面的属性：
- pageX {Number} 鼠标横坐标位置
- pageY {Number} 鼠标纵坐标位置
- distance {Number} 当前鼠标位置与开始事件时位置的距离
- duration {Number} 从开始事件到目前的时间
- velocityX {Number} 横坐标速率
- velocityY {Number} 纵坐标速率
- direction {String} 方向 ： left/right/up/down
@event EDGE_PAN_END
*/