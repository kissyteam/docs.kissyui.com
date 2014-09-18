/**
视图工具栏模块
@module navigation-view/bar
*/

/**
视图工具栏。 xclass : navigation-bar
@class NavigationViewBar
@constructor
@extends Component.Control
@param config {Object}
*/

/**
对应的 navigationView
@attribute navigationView {NavigationView}
*/

/**
是否带有返回按钮
@attribute withBackButton {Boolean}
@default true
*/

/**
返回按钮的文本内容
@attribute backText {String}
@default 'Back'
*/

/**
是否能聚焦。聚焦时会在组件根节点添加class : {prefixCls}navigation-bar-focused
@attribute focusable {Boolean}
@default false
*/

/**
是否允许在视图内选取文本
@attribute allowTextSelection {Boolean}
@default true
*/

/**
是否显示标题
@attribute withTitle {Boolean}
@default true
*/

/**
当返回上一个视图时触发返回事件。例如点击了返回按钮，浏览器后退等
@event backward
*/
