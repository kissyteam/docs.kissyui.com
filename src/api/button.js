/**
@module button
*/

/**
@class Button
@constructor
@extends Control
@param config {Object} 配置项，详细见下方:
@param config.content {String} 按钮的显示内容
@param config.checkable {String} 按钮是 toggle button
@param config.value {String} 可选，按钮值
@param config.describedby {String} 可选，按钮节点的 aria-describedby 属性值
@param config.tooltip {String} 可选，按钮节点的 title 属性值
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
按钮节点的 describedby 属性值
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