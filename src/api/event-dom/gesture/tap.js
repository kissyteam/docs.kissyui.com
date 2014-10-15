/**
点击手势事件
@module event-dom/gesture/tap
*/

/**
点击手势事件
使用示例：

	require(['node', 'event-dom/gesture/tap'], function($, GestureTap){
		$('#test').on(GestureTap.TAP, function(ev){
			//taped...
		})
	})

@class GestureTap
@static
*/

/**
当点击某个 dom 节点后触发， 和 SINGLE_TAP 的不同的是： 触发 DOUBLE_TAP 就不会触发 SINGLE_TAP， 而触发 DOUBLE_TAP 前会触发 TAP
@event TAP
*/

/**
当快速点击某个 dom 节点一次（短时间没有再次点击）后触发
@event SINGLE_TAP
*/

/**
当快速点击某个 dom 节点两次后触发
@event DOUBLE_TAP
*/

/**
当长按某个 dom 节点超过 1s 后触发
@event HOLD
*/