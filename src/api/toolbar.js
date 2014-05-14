/**
Toolbar菜单栏组件
@module toolbar
*/

/**
@class ToolBar
@constructor
@extends Component.Container
@param config {Object}
*/

/**
点击工具栏按钮时触发
@event click
@param e {Object} 触发事件对象
@param e.target {Control} 点击的按钮实例
*/

/**
当前高亮的项
@attribute highlightedItem {Object}
*/

/**
当前的扩展项，切换高亮项时如要把以前的扩展项收起，并展开当前的高亮项
@attribute expandedItem {Object}
*/

/**
菜单项的默认值配置
@attribute defaultChildCfg {Object}
@example
```
defaultChildCfg: {
    value: {
        xclass: 'button',
        handleMouseEvents: false,
        focusable: false
    }
},
```
*/