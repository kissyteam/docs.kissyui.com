/**
@module menu
*/

/**
菜单。xclass : menu
@class Menu
@constructor
@extends Component.Container
@param config {Object}
@example
	//先引入样式文件：
	////g.alicdn.com/kissy/k/5.0.1/css/base.css
	////g.alicdn.com/kissy/k/5.0.1/menu/assets/dpl.css
	require(['menu', 'separator'], function(Menu, Separator){
        var myMenu = new Menu({
            render : '#container',
            width : 150,
            children : [
                new Menu.Item({  //通过构造器来生成 Menu.Item 节点
                    content : 'item1'
                }),
                {
                    xclass : 'menuitem',  //通过xclass来生成 Menu.Item 节点
                    content : 'item2'
                },
                {
                    xclass:'separator'    //分隔符
                },
                {
                    xclass : 'submenu',
                    content : 'submenu',
                    menu : new Menu.PopupMenu({
                        autoHideOnMouseLeave:true,
                        width : 150,
                        children : [
                            {
                                xclass : 'menuitem',
                                content : 'item1InSubMenu'
                            },
                            {
                                xclass : 'menuitem',
                                content : 'item2InSubMenu'
                            }
                        ]
                    })
                }
            ]
        });

        myMenu.render();
    });
*/

/**
当前高亮的儿子菜单项.
@attribute highlightedItem {Menu.Item} 
@example
```
//Hint
//隐藏当前菜单的子菜单只需要将该属性置 null 即可
menu.set("highlightedItem",null);
```
*/

/**
当子菜单项被点击后触发
@event click 
@param ev {Object}
@param ev.target {Menu.Item} 当前被点击的菜单项
*/



/**
菜单项。xclass : menuitem
@class Item
@constructor
@extends Component.Control
@namespace Menu
@param config {Object}
@example
    require(['menu'], function(Menu){
        var myMenu = new Menu({
            render : '#container',
            width : 150,
            children : [
                new Menu.Item({  //通过构造器来生成 Menu.Item 节点
                    content : 'item1'
                }),
                {
                    xclass : 'menuitem',  //通过xclass来生成 Menu.Item 节点
                    content : 'item2'
                }
            ]
        });

        myMenu.render();
    });
*/

/**
是否可以被选择，可以的话，单击会添加指定 class 到根节点.
@attribute selectable {Boolean} 
*/

/**
是否可以被多选，可以的话，单击会添加或删除根节点的指定 class
@attribute checkable {Boolean}
*/
/**
可选，该菜单项的值
@attribute value {Any}
@optional
*/
/**
该菜单项的显示内容
@attribute content {String}
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
当前菜单项的显示内容
@attribute content {String}
*/



/**
子菜单，用来拓展子菜单。
@class SubMenu
@constructor
@extends Menu.Item
@namespace Menu
@param config {Object}
@example
    require(['menu', 'separator'], function(Menu, Separator){
        var myMenu = new Menu({
            render : '#container',
            width : 150,
            children : [
                new Menu.Item({  //通过构造器来生成 Menu.Item 节点
                    content : 'item1'
                }),
                {
                    xclass : 'menuitem',  //通过xclass来生成 Menu.Item 节点
                    content : 'item2'
                },
                {
                    xclass:'separator'    //分隔符
                },
                {
                    xclass : 'submenu',  //通过 xclass 来生产 Menu.SubMenu
                    content : 'submenu',
                    menu : new Menu.PopupMenu({
                        autoHideOnMouseLeave:true,
                        width : 150,
                        children : [
                            {
                                xclass : 'menuitem',
                                content : 'item1InSubMenu'
                            },
                            {
                                xclass : 'menuitem',
                                content : 'item2InSubMenu'
                            }
                        ]
                    })
                }
            ]
        });

        myMenu.render();
    });
*/

/**
可选，默认 0.15，单位秒。鼠标掠过后多长时间显示子菜单.
@attribute menuDelay {Number}
@optional
@default 0.15
*/

/**
子菜单实例
@attribute menu {Menu}
*/

/**
可选，默认 false . 销毁该菜单项是否顺带销毁子菜单
@attribute externalSubMenu {Boolean}
@optional
@default false
*/




/**
弹出菜单。xclass : popmenu
@class PopupMenu
@constructor
@extends Menu
@uses Component.Extension.Align
@uses Component.Extension.Shim
@uses Component.Extension.ContentBox
@param config {Object}
@example    
    require(['menu', 'separator'], function(Menu, Separator){
        var myMenu = new Menu({
            render : '#container',
            width : 150,
            children : [
                new Menu.Item({  //通过构造器来生成 Menu.Item 节点
                    content : 'item1'
                }),
                {
                    xclass : 'menuitem',  //通过xclass来生成 Menu.Item 节点
                    content : 'item2'
                },
                {
                    xclass:'separator'    //分隔符
                },
                {
                    xclass : 'submenu',
                    content : 'submenu',
                    menu : new Menu.PopupMenu({
                        autoHideOnMouseLeave:true,
                        width : 150,
                        children : [
                            {
                                xclass : 'menuitem',
                                content : 'item1InSubMenu'
                            },
                            {
                                xclass : 'menuitem',
                                content : 'item2InSubMenu'
                            }
                        ]
                    })
                }
            ]
        });

        myMenu.render();
    });
*/

/**
鼠标移出子菜单时子菜单是否自动隐藏

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
@attribute autoHideOnMouseLeave {Boolean}
@default false
*/

/**
多选菜单项。xclass : check-menuitem。所有class为CheckItem的多选菜单项，可以选中多个，区别于RadioItem
@class CheckItem
@namespace Menu
@constructor
@extends Menu.Item
@param config {Object}
@example
	require(['menu', 'separator'], function(Menu, Separator){
        new Menu({
            render:"#container",
            width : 150,
            children:[
                {
                    xclass:'check-menuitem',
                    content:"checkable menuitem"
                },
                {
                    xclass:'separator'
                },
                {
                    xclass:'submenu',
                    content:'submenu',
                    menu : new Menu.PopupMenu({
                        autoHideOnMouseLeave:true,
                        width : 150,
                        children:[
                            {
                                xclass:'check-menuitem',
                                content:"checkable menuitem1"
                            },
                            {
                                xclass:'check-menuitem',
                                content:"checkable menuitem2"
                            }
                        ]
                    })
                }
            ]
        }).render();
    });
*/

/**
菜单项是否 checked，默认 true
@attribute checked {Boolean}
@default true
*/ 



/**
单选菜单项。xclass : radio-menuitem。所有class为RadioItem的单选菜单项，只能选中一个，区别于CheckItem
@class RadioItem
@namespace Menu
@constructor
@param config {Object}
@extends Menu.Item
@example
    require(['menu', 'separator'], function(Menu, Separator){
        var myMenu = new Menu({
            render : '#container',
            width : 150,
            children : [
                new Menu.RadioItem({  //通过构造器来生成 Menu.RadioItem 单选节点
                    content : 'item1'
                }),
                {
                    xclass : 'radio-menuitem',  //通过xclass来生成 Menu.RadioItem 单选节点
                    content : 'item2'
                },
                {
                    xclass:'separator'    //分隔符
                },
                {
                    xclass : 'submenu',
                    content : 'submenu',
                    menu : new Menu.PopupMenu({
                        autoHideOnMouseLeave:true,
                        width : 150,
                        children : [
                            {
                                xclass : 'radio-menuitem',
                                content : 'item1InSubMenu'
                            },
                            {
                                xclass : 'radio-menuitem',
                                content : 'item2InSubMenu'
                            }
                        ]
                    })
                }
            ]
        });

        myMenu.render();
    });
*/