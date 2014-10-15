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
@example
	require(['navigation-view', 'component/control'], function(NavigationView, Control){
		var navigationView = new NavigationView({
            loadingHtml: '<div class="ks-navigation-view-loading-outer">' +
                '<div class="ks-navigation-view-loading-inner"></div>' +
                '</div>',
            render: 'body'
        }).render();

		var bar = new Bar({
            navigationView: navigationView,
            elBefore: navigationView.get('contentEl')
        }).render();

        var PageView = Control.extend({
			createDom : function(){
				//your code
			},
			bindUI : function(){
		
			},
			enter : function(){
	
			}
			//....more function
        },{
			xclass : 'page-view'
        });

        navigationView.push({
			xclass : 'page-view',
			title : 'PageView Title'
        });
	})
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

/**
标题节点
@attribute titleEl {Node}
*/

/**
内容节点
@attribute contentEl {Node}
*/

/**
工具栏居中的节点
@attribute centerEl {Node}
*/

/**
标题内容
@attribute title {String}
*/
