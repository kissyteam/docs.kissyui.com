/**
@module menubutton
*/

/**
菜单按钮。xclass : menu-button
@class MenuButton
@constructor
@extends Button
@param config {Object}
@example
	require(['menu', 'menubutton'], function(Menu, MenuButton){
        var myMenuButton1 = new MenuButton({  //全新生成节点
            content : '我的淘宝',
            render : '#container',
            matchElWidth : false,
            menu : {
                xclass : 'popupmenu',
                children : [
                    {
                        xclass : 'menuitem',   //通过xclass来生成menuitem
                        content : '已买到的宝贝'
                    },
                    new Menu.Item({            //通过构造器来生成menuitem
                        content : '已卖出的宝贝'
                    })
                ],
                listeners : {
                    click : function(ev){
                        S.log(ev.target.get('content'));
                    }
                }
            }
        });
        myMenuButton1.render();
    });
*/

/**
可选，关联的下拉菜单实例/配置项，具体参考 [Menu](/5.0/api/classes/Menu.html) ，默认值:
```
{
    xclass:'popupmenu'
}

```
@attribute menu {Object}
@optional
*/

/**
下拉菜单是否和按钮宽度一致。默认 true
@attribute matchElWidth {Boolean}
@default true
*/

/**
点击下拉项是否自动收起下拉菜单
@attribute collapseOnClick {Boolean}
@default false
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
管理 select > option 列表(manage a list of single-select options)，xclass : select。用于模拟selectbox
@class Select
@extends MenuButton
@namespace MenuButton
@constructor
@param config {Object}
@example
	require(['menu', 'menubutton'], function(Menu, MenuButton){
		// 调用 MenuButton.Select.decorate 接口替换已有的 select 元素
        var select = MenuButton.Select.decorate('#decorateSelect', {
            width:80,
            prefixCls:"c2c-",  //自定义的c2c主题样式
            // 设置对齐方式, 与普通的 Align 大体一致
            // 该配置同菜单配置项
            menu:{
                align:{
                    points : ['bl', 'tl'],  //默认就是这个配置，可写可不写，或根据需要进行自定义定位
                    offset:[0, -1]
                },
                height:150,
                elStyle:{
                    overflow:"auto",
                    overflowX:"hidden"
                }
            }
        });
        select.on("click", function (e) {
            alert('当前值为: ' + select.get("value"));
        });


        //全新生成
        var select2 = new MenuButton.Select({
        	render : '#container',
			prefixCls : 'c2c',
			width : 100,
			menu : {
				xclass : 'popupmenu',
				align : {
					offset : [0, -1]
				},
				children : [
					{
						xclass : 'option',
						content : '杭州'
					},
					{
						xclass : 'option',
						content : '广州'
					}
				]
			}
        });
        select2.render();
	});
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
模拟select > option，与 MenuButton.Select 配合使用。xclass : option
@class Option
@constructor
@extends Menu.Item
@namespace MenuButton
@param config {Object}
@example
	require(['menu', 'menubutton'], function(Menu, MenuButton){
        //全新生成
        var select2 = new MenuButton.Select({
        	render : '#container',
			prefixCls : 'c2c',
			width : 100,
			menu : {
				xclass : 'popupmenu',
				align : {
					offset : [0, -1]
				},
				children : [
					new MenuButton.Option({   //构造器生成
						value : 'customValue',
						content : '北京',
						prefixCls:"c2c-"
					}),
					{
						xclass : 'option',  //xclass生成
						content : '杭州',
						prefixCls:"c2c-"
					},
					{
						xclass : 'option',
						content : '广州',
						prefixCls:"c2c-"
					}
				]
			}
        });
        select2.render();
	});
*/
/**
是否可以被选择，可以的话，单击会添加指定 class 到根节点
@attribute selectable {Boolean} 
@default true
*/ 