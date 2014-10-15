/**
Toolbar菜单栏组件
@module toolbar
*/

/**
toolbar 的子节点children默认使用 button 组件，所以若设置了子节点则需要手动引入button模块，或者使用xclass则需要确保直接或间接引入相应的模块。如使用了 xclass:menu-button 则需要手动引入 menubuton 模块。

KISSY 内置的参考样式（或利用prefixCls/elCls自定义样式）：
	
	.ks-toolbar {
	  background-color: #f2f2f2;
	  background-image: -moz-linear-gradient(top, #f5f5f5, #eeeeee);
	  background-image: -ms-linear-gradient(top, #f5f5f5, #eeeeee);
	  background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#f5f5f5), to(#eeeeee));
	  background-image: -webkit-linear-gradient(top, #f5f5f5, #eeeeee);
	  background-image: -o-linear-gradient(top, #f5f5f5, #eeeeee);
	  background-image: linear-gradient(top, #f5f5f5, #eeeeee);
	  background-repeat: repeat-x;
	  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#f5f5f5', endColorstr='#eeeeee', GradientType=0);
	  border: 1px solid #e5e5e5;
	  border-radius: 4px;
	  outline: none;
	  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
	  -webkit-box-shadow: inset 0 1px 0 #ffffff, 0 1 px 5 px rgba(0, 0, 0, 0.1);
	  -moz-box-shadow: inset 0 1px 0 #ffffff, 0 1 px 5 px rgba(0, 0, 0, 0.1);
	  box-shadow: inset 0 1px 0 #ffffff, 0 1 px 5 px rgba(0, 0, 0, 0.1);
	}
	.ks-toolbar .ks-button {
	  background: transparent;
	  border: none;
	  text-shadow: none;
	  padding: 11px 12px 11px 12px;
	  color: #0088cc;
	  margin: 0;
	  border-left: 1px solid #f5f5f5;
	  border-right: 1px solid #e5e5e5;
	  border-radius: 0;
	  background-image: none;
	  -webkit-box-shadow: none;
	  -moz-box-shadow: none;
	  box-shadow: none;
	}
	.ks-toolbar .ks-button:first-child {
	  border-left: 0;
	  padding-left: 13px;
	}
	.ks-toolbar .ks-button:last-child {
	  border-right: 0;
	  padding-right: 13px;
	}
	.ks-toolbar .ks-button-hover {
	  color: #005580;
	  background-color: #eeeeee;
	  border-right-color: #dddddd;
	}
	.ks-toolbar .ks-button-checked,
	.ks-toolbar .ks-button-active {
	  color: #777777;
	  background-color: #e9e9e9;
	  padding-left: 13px;
	  border-left: 0;
	  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.05);
	}
	.ks-toolbar .ks-menu-button-dropdown {
	  border-top-color: #0088cc;
	}
	.ks-toolbar .ks-button-hover .ks-menu-button-dropdown {
	  border-top-color: #777777;
	}
	.ks-toolbar .ks-menu-button-open {
	  color: #ffffff;
	  background-color: #999999;
	  border-color: #999999;
	}
	.ks-toolbar .ks-menu-button-open .ks-menu-button-dropdown {
	  border-top-color: #ffffff;
	}

@class Toolbar
@constructor
@extends Component.Container
@param config {Object}
@example
	require(['toolbar', 'button', 'menubutton'], function(Toolbar){
        var simpleToolbar = new Toolbar({
            render : '#wrap',
            width : '80%',
            children : [
                {
                    xclass : 'button',
                    content : 'Home'
                },
                {
                    xclass : 'button',
                    content : 'QuickStart'
                },
                {
                    xclass : 'menu-button',
                    content : 'Docs',
                    matchElWidth : false,
                    menu : {
                        children : [
                            {
                                content : 'API'
                            },
                            {
                                content : 'Guide'
                            }
                        ]
                    }
                },
                {
                    xclass : 'button',
                    content : 'Contribute'
                }
            ],
            listeners : {
                click : function(ev){
                    console.log(ev.target.get('content'));
                }
            }
        }).render();
    });
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
当前的扩展项
@attribute expandedItem {Object}
*/