/**
@module button
*/

/**
@class Button
@constructor
@extends Component.Control
@param config {Object}
@example
	//首先引入KISSY提供的base样式和button样式 http://g.tbcdn.cn/kissy/edge/2014.07.16/css/dpl/base.css 和 http://g.tbcdn.cn/kissy/edge/2014.07.16/button/assets/dpl.css
	
	KISSY.use('button', function(S, Button){
		var button1 = new Button({
			content : 'ButtonContent',
			render : '#container',
			width : '150px',
			elCls : 'ks-button-success'
		});
		button1.render();
	})	
*/


/**
按钮是否 toggle button
@attribute checkable {Boolean}
*/

/**
可选，按钮节点的 aria-describedby 属性值
@attribute describedby {String}
@optional
*/


/**
按钮的显示内容
@attribute content {String}
*/

/**
按钮是否是 checked 状态
@attribute checked {Boolean}
*/

/**
按钮值
@attribute value {String}
*/

/**
按钮节点的 title 属性值
@attribute tooltip {String}
*/

/**
当按钮被点击或被获得焦点后按键 enter|space 触发
@event click
@param e {Object}  触发事件对象，类型 Event.Object
@param e.target {Object} 触发事件的按钮实例
*/