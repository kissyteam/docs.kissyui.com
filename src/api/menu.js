/**
@module menu
*/

/**
@class Menu
@constructor
@extends Control
@param config {Object} 配置项

#### 从已有元素实例 Menu 对象时 , 元素节点标明类名 {prefixCls}menu . prefixCls 为配置的类名前缀，默认为 ks-
*/

/**
当前高亮的儿子菜单项.
@attribute highlightedItem {Menu.Item} 
@example
```
//Hint
//隐藏当前菜单的子菜单只需要将该属性置 null 即可
menu.set("highlightedItem",null);
*/

/**
当子菜单项被点击后触发
@event click 
@param ev {Object}
@param ev.target {Menu.Item} 当前被点击的菜单项
*/



/**
@class Item
@constructor
@extends Control
@namespace Menu
@param config {Object}  配置项,如下：
@param config.selectable {Boolean} 是否可以被选择，可以的话，单击会添加指定 class 到根节点.
@param config.checkable {Boolean} 是否可以被多选，可以的话，单击会添加或删除根节点的指定 class
@param [config.value] {Any} 可选，该菜单项的值
@param config.content {String} 该菜单项的显示内容
*/

/**
当前菜单项是否被选中
@attribute selected {Boolean}
*/

/**
当前菜单选是否被多选了
@attribute checked {Boolean}
*/

/**
当前菜单项的值
@attribute value {Any}
*/

/**
当前菜单项的显示内容
@attribute content {String}
*/



/**
@class SubMenu
@constructor
@extends Menu.Item
@namespace Menu
@param config {Object}
@param [config.menuDelay=0.5] {Number} 可选，默认 0.15，单位秒。鼠标掠过后多长时间显示子菜单.
@param config.menu {Menu} 子菜单实例
@param config.externalSubMenu=false {Boolean} 可选，默认 false . 销毁该菜单项是否顺带销毁子菜单
*/

/**
鼠标掠过后多长时间显示子菜单.
@attribute menuDelay {Number}
*/

/**
子菜单实例
@attribute menu {Menu}
*/

/**
销毁该菜单项是否顺带销毁子菜单
@attribute externalSubMenu {Boolean}
*/



/**
@class PopupMenu
@constructor
@extends Menu
@uses Align
@param config {Object}
@param config.autoHideOnMouseLeave=false {Boolean} 默认 false。鼠标移出子菜单时子菜单是否自动隐藏

#### 从已有元素实例 PopupMenu 对象时 , 元素节点标明类名 {prefixCls}popupmenu . prefixCls 为配置的类名前缀，默认为 ks- .

若使用默认的类名前缀，使用前请加上初始样式
```
<style>
    .ks-popupmenu {
        position:absolute;
        left:-9999px;
        top:-9999px;
    }
</style>
```
*/



/**
checkable 菜单项
@class CheckMenuItem
@constructor
@extends Menu.Item
@param config {Object}
@param config.checked=true {Boolean} 菜单项是否 checked，默认 true
*/ 
