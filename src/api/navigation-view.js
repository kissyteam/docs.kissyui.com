/**
@module navigation-view
*/

/**
能适应多种视图的导航视图。xclass : navigation-view
@class NavigationView
@extends Component.Container
@uses Component.Extension.ContentBox
@constructor
@param config
*/

/**
进入/离开视图的动画效果。如果是数组则是相对应的两个值，left -> right, top -> bottom，如果是字符串则是单个值，如'fade'可选择的动画效果有：none/slide-top/fade/dissolve/pop/flip-left/swap-left/cube-left/flow-left/turn
@attribute animation {Array|String}
@default ['slide-right', 'slide-left']
*/

/**
正在加载时的内容
@attribute loadingHtml {String}
*/

/**
缓存的视图的最大数量，超过最大值则需要重新加载/渲染
@attribute viewCacheSize {Number}
@default 10
*/

/**
是否能聚焦。聚焦时会在组件根节点添加class : {prefixCls}navigation-view-focused
@attribute focusable {Boolean}
@default false
*/

/**
是否允许在视图内选取文本
@attribute allowTextSelection {Boolean}
@default true
*/

/**
添加一个子视图
@method push
@param config {Object} 配置项。子视图或子视图的描述，如 { xclass : 'tb-index-view' }
*/

/**
替换当前视图的配置
@method replace
@param config {Object} 配置项，如 { animation : 'turn' }
*/

/**
弹出当前视图，进入下一个视图
@method pop
*/




