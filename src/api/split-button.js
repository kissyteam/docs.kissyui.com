/**
@module split-button
*/

/**
按钮和菜单按钮的组合,构建支持下拉菜单的按钮组。

split-button 内部实现其实是利用 button 和 menubutton 两个组件组合使用而成，split-button左边是button组件内容，右边是设置content为空的menubutton。

split-button的html结构规范如下：

	<div id="split-button2" class="ks-split-button">
        <div class="ks-button ks-split-button-left"
             tabindex="0">Action
        </div>
        <div class="ks-menu-button ks-button ks-split-button-right"
             tabindex="0">
            <div class="ks-menu-button-content"></div>
            <div class="ks-menu-button-dropdown">
                <div class="ks-menu-button-dropdown-inner"></div>
            </div>
            <div class="ks-popupmenu ks-menu">
                <div class="ks-popupmenu-content">
                    <div class="ks-menuitem">Action</div>
                    <div class="ks-menuitem">Another</div>
                    <div class="ks-menuitem">else</div>
                </div>
            </div>
        </div>
    </div>
	
@class SplitButton
@constructor
@extends Component.Container
@param config {Object}
@example
	//全新节点生成
	var splitButton1 = new SplitButton({
        render : '#button-container1',
        button : {  //设置splitButton 的内容
            xclass : 'button',
            elCls : 'ks-button-info',  //使用 button 组件提供的按钮样式
            content : 'Button'
        },
        menuButton : {  //设置 splitButton 的下拉内容
            xclass : 'menu-button',
            elCls : 'ks-button-info',
            matchElWidth: false,
            collapseOnClick: true,
            menu : {
                xclass : 'popupmenu',
                children : [
                    {
                        xclass : 'menuitem',
                        content : 'content1'
                    },
                    {
                        xclass : 'menuitem',
                        content : 'content2'
                    }
                ]
            }
        }
    });
    splitButton1.render();

    //从已有元素生成（html结构和class需符合规范）
    var splitButton2 = new SplitButton({
        srcNode : '#split-button2'
    }).render();
*/


/**
是否将菜单按钮和按钮对齐，默认 true
@attribute alignWithEl {Boolean} 
@default true
*/

/**
菜单按钮组件
@attribute menuButton {KISSY.MenuButton} 
*/

/**
按钮组件
@attribute button {KISSY.Button} 
*/
