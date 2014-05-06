/**
@module menubutton
*/

/**
@class MenuButton
@constructor
@extends Button
@param config {Object}
*/

/**
可选，下拉框菜单配置/实例，具体参考 [Menu](/5.0/api/classes/Menu.html) ，默认值:
```
{
    xclass:'popupmenu'
}

```
@attribute menu {Object}
@optional
*/

/**
是否下拉菜单和按钮宽度一致。默认 true
@attribute matchElWidth {Boolean}
@default true
*/

/**
关联的下拉菜单实例/配置项
@attribute menu {Menu}
*/

/**
下拉菜单是否弹出，设置值可控制下拉菜单弹出与否.
@attribute collapsed {Boolean}
*/

/**
添加下拉菜单项
@method addItem
@param item {Menu.Item} 下拉菜单项
@param index {Number} 添加的位置，默认最后一个位置
*/

/**
删除指定下拉菜单项
@method removeItem
@param item {Menu.Item} 下拉菜单项
@param index {Number} 添加的位置，默认最后一个位置
*/

/**
删除所有下拉菜单项
@method removeItems
@param [destroy=false] 删除的同时是否销毁子菜单项。默认 false
*/

/**
取得指定位置下拉菜单项
@method getItemAt
@param index {Number} 取得的位置
*/

/**
当子菜单项被点击后触发
@event click
@param e.target {Menu.Item} 当前被点击的菜单项
*/






/**
@class Select
@extends MenuButton
@namespace MenuButton
@constructor
@param config {Object}
*/

/**
可选，下拉框没有可选项时的默认显示内容.
@attribute defaultCaption {String} 
@optional
*/

/**
下拉框的当前值
@attribute value {Any}
*/

/**
下拉框没有可选项时的默认显示内容
@attribute defaultCaption {String}
*/

/**
直接把原生 select 元素替换成 Select
@method decorate
@param element {HTMLElement|KISSY.Node} select元素
@param cfg {Object}  配置对象，作用于 Select
@param cfg.menuCfg {Object} 下拉菜单配置对象，参照 [menu](/5.0/api/classes/Menu.html)
@return {Select}
*/





/**
@class Option
@constructor
@extends Menu.Item
@namespace MenuButton
@param config {Object}
*/
/**
是否可以被选择，可以的话，单击会添加指定 class 到根节点
@attribute selectable {Boolean} 
@default true
*/ 